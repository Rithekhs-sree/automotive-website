import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : smtpPort === 465;

const transporterConfig = smtpHost
  ? {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    }
  : {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    };

const transporter = nodemailer.createTransport(transporterConfig);

transporter.verify((error) => {
  if (error) {
    console.error('SMTP verification failed:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  const { fullName, phone, email, vehicle, service, message } = req.body;

  try {
    console.log('Attempting to send email to:', process.env.EMAIL_USER);
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials are missing. Check backend/.env or Render environment variables.');
    }

    const mailOptions = {
      from: `"C & S Automotive" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
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

    const ownerResult = await transporter.sendMail(mailOptions);

    if (!ownerResult.accepted || ownerResult.accepted.length === 0) {
      const errorMessage = 'Owner email was not accepted by SMTP server.';
      console.error(errorMessage, ownerResult);
      return res.status(500).json({ success: false, message: errorMessage, error: JSON.stringify(ownerResult) });
    }

    console.log('Owner email sent successfully', ownerResult);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message || String(error) });
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
