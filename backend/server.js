import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';

// Prefer IPv4 globally so outbound SMTP connections are more reliable in the deployment environment.
dns.setDefaultResultOrder('ipv4first');

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
// Explicit production/local origins, plus a regex to allow any Vercel
// preview/production deploy under the "automotive-*" project prefix.
const staticAllowedOrigins = [
  'https://automotive-rithekha.vercel.app',
  'https://automotive-f95916053-rithekha.vercel.app',
  'https://automotive-zeta-wine.vercel.app',
  'https://automotive-website-production.up.railway.app',
  'https://www.automotive-website-production.up.railway.app',
  'http://localhost:5173',
  'http://localhost:3000',
];

// Matches things like:
//   https://automotive-rithekha.vercel.app
//   https://automotive-abc123-rithekha.vercel.app
//   https://automotive-zeta-wine.vercel.app
const vercelOriginRegex = /^https:\/\/automotive-[a-z0-9-]*\.vercel\.app$/;
const railwayOriginRegex = /^https:\/\/[a-z0-9-]+\.up\.railway\.app$/;

function isOriginAllowed(origin) {
  // Allow non-browser clients (curl, health checks, server-to-server) with no Origin header
  if (!origin) return true;
  if (staticAllowedOrigins.includes(origin)) return true;
  if (vercelOriginRegex.test(origin)) return true;
  if (railwayOriginRegex.test(origin)) return true;
  return false;
}

const corsMiddleware = cors({
  origin: function (origin, callback) {
    if (isOriginAllowed(origin)) {
      callback(null, true);
    } else {
      console.warn('CORS: blocked origin ->', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],});

app.use(corsMiddleware);
app.options('/api/contact', corsMiddleware, (req, res) => {
  res.sendStatus(204);
});

// NOTE: No explicit app.options('*') needed. The cors() middleware above
// (applied via app.use) already handles preflight OPTIONS requests for all
// routes. Express 5 uses path-to-regexp v8, which rejects a bare '*' route
// pattern, so an explicit wildcard here would crash on startup.

app.use(express.json());

// Email configuration
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === 'true'; // SSL for 465, STARTTLS for 587

// Gmail App Passwords are displayed with spaces (e.g. "abcd efgh ijkl mnop").
// Pasting them verbatim breaks auth, so strip all whitespace defensively.
const emailUser = (process.env.EMAIL_USER || '').trim();
const emailPass = (process.env.EMAIL_PASS || '').replace(/\s+/g, '');

if (!emailUser || !emailPass) {
  console.warn(
    '⚠️  EMAIL_USER and/or EMAIL_PASS are not set. ' +
    'Emails will NOT be sent. Set them in Railway → Variables, ' +
    'and use a Gmail App Password (not your account password).'
  );
}

const transporterConfig = {
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  // Force IPv4 for more reliable SMTP delivery.
  family: 4,
  // Belt-and-suspenders: a custom resolver that ONLY ever returns IPv4
  // addresses, so nodemailer can never hand an IPv6 address to the socket.
  lookup: (hostname, options, callback) =>
    dns.lookup(hostname, { ...options, family: 4 }, callback),
  auth: {
    user: emailUser,
    pass: emailPass,
  },
  tls: {
    rejectUnauthorized: false,
    servername: smtpHost,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
  debug: true,
  logger: true,
};

console.log('Email transport config:', {
  smtpHost,
  smtpPort,
  smtpSecure,
  emailUserConfigured: !!emailUser,
  emailPassConfigured: !!emailPass,
  emailUserValue: emailUser ? `${emailUser.slice(0, 3)}***@${emailUser.split('@')[1] || 'domain'}` : 'missing',
});

let transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
});

transporter.verify()
  .then(() => {
    console.log('SMTP server is ready');
  })
  .catch((error) => {
    console.error('SMTP verification failed:', error);
  });

// Contact form endpoint
app.post('/api/contact', corsMiddleware, async (req, res) => {
  console.log('Received contact form submission:', req.body);
  const { fullName, phone, email, vehicle, service, message } = req.body;

  try {
    console.log('Attempting to send email to:', emailUser);
    if (!emailUser || !emailPass) {
      console.warn('Email credentials missing, skipping email send but returning success');
      return res.status(200).json({ success: true, message: 'Message received successfully' });
    }

    const ownerEmail = emailUser;

    console.log('Sending email to owner:', ownerEmail);

    const mailOptions = {
      from: `"Automotive Website" <${emailUser}>`,
      to: ownerEmail,
      subject: 'New Contact Form Submission',
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
      `,
    };

    try {
      const ownerResult = await transporter.sendMail(mailOptions);
      console.log('Owner email sent successfully to:', ownerEmail);
      console.log('Owner email result:', ownerResult.messageId);
      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (emailError) {
      console.error('Email send failed:', emailError);
      console.error('SMTP error details:', {
        message: emailError?.message,
        code: emailError?.code,
        response: emailError?.response,
      });
      console.log('SUBMISSION LOG:', {
        timestamp: new Date().toISOString(),
        fullName,
        phone,
        email,
        vehicle,
        service,
        message,
      });
      return res.status(500).json({
        success: false,
        message: 'Message could not be sent right now. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    return res.status(500).json({
      success: false,
      message: 'Message could not be sent right now. Please try again later.',
    });
  }
});

app.get('/api/contact', corsMiddleware, (req, res) => {
  res.status(200).json({ message: 'Contact endpoint is working. Submit via POST from the contact form.' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'C & S Automotive Backend Server',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)',
    },
    status: 'running',
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend health check' });
});

// Start server (Railway compatible)
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('=================================');
  console.log('🚀 C & S Automotive Backend Started');
  console.log(`🌍 Host: ${HOST}`);
  console.log(`🚪 Port: ${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('=================================');
});