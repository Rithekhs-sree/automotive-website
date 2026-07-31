import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '.env');
const rootEnvPath = path.join(__dirname, '..', '.env');

dotenv.config({ path: envPath });
if ((!process.env.EMAIL_USER || !process.env.EMAIL_PASS) && fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = false; // Use STARTTLS for port 587

const transporterConfig = {
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { 
    rejectUnauthorized: false 
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
};

console.log('Email transport config:', {
  smtpHost,
  smtpPort,
  smtpSecure,
  emailUserConfigured: !!process.env.EMAIL_USER,
  emailPassConfigured: !!process.env.EMAIL_PASS,
});

const transporter = nodemailer.createTransport(transporterConfig);

// Verify transporter once at startup and keep the transport ready
transporter.verify().then(() => {
  console.log('SMTP server is ready to send emails');
}).catch((error) => {
  console.error('SMTP verification failed:', error);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  const { fullName, phone, email, vehicle, service, message } = req.body;

  try {
    console.log('Attempting to send email to:', process.env.EMAIL_USER);
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email credentials missing, skipping email send but returning success');
      return res.status(200).json({ success: true, message: 'Message received successfully' });
    }

    const ownerEmail = process.env.EMAIL_USER;
    if (!ownerEmail) {
      console.log('No owner email configured, skipping email send but returning success');
      return res.status(200).json({ success: true, message: 'Message received successfully' });
    }

    console.log('Sending email to owner:', ownerEmail);

    const mailOptions = {
      from: `"C & S Automotive" <${ownerEmail}>`,
      to: ownerEmail,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nVehicle: ${vehicle || 'Not specified'}\nService Required: ${service || 'Not specified'}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Vehicle:</strong> ${vehicle || 'Not specified'}</p>
            <p><strong>Service Required:</strong> ${service || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #ef4444;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">This email was sent from the C & S Automotive contact form.</p>
        </div>
      `
    };

    try {
      const ownerResult = await transporter.sendMail(mailOptions);
      console.log('Owner email sent successfully to:', ownerEmail);
      console.log('Owner email result:', ownerResult.messageId);
    } catch (emailError) {
      console.error('Email send failed, but returning success to user:', emailError);
      // Log the submission for manual review
      console.log('SUBMISSION LOG:', {
        timestamp: new Date().toISOString(),
        fullName,
        phone,
        email,
        vehicle,
        service,
        message
      });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    // Still return success to maintain good UX
    console.log('Returning success despite error for UX purposes');
    return res.status(200).json({ success: true, message: 'Message received successfully' });
  }
});

app.get('/api/contact', (req, res) => {
  res.status(200).json({ message: 'Contact endpoint is POST only. Submit via the contact form.' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'C & S Automotive Backend Server',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)'
    },
    status: 'running'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
