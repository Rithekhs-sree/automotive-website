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
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

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
      throw new Error('Email credentials are missing. Check backend/.env');
    }
    
    // Email to the business owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${fullName}`,
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

    await transporter.sendMail(mailOptions);
    console.log('Email to business owner sent successfully');

    // Confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting C & S Automotive',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">Thank You for Contacting Us</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for reaching out to C & S Automotive Service & Repairs. We have received your message and will get back to you within 24 hours.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #ef4444;">${message}</p>
          </div>
          <p>If you have any urgent inquiries, please call us at (02) 1234 5678.</p>
          <p style="margin-top: 20px;">Best regards,<br>C & S Automotive Team</p>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">14 Hill Street, Wentworthville, NSW 2145, Australia</p>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent successfully');
    console.log('Sending success response to client');
    res.status(200).json({ success: true, message: 'Email sent successfully' });
    console.log('Success response sent');
  } catch (error) {
    console.error('Error sending email:', error);
    console.log('Sending error response to client');
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    console.log('Error response sent');
  }
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
