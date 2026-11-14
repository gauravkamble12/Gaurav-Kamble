const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

const router = express.Router();

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'kamblegaurav193@gmail.com';
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX) || 5;
const RATE_LIMIT_WINDOW_MS = (Number(process.env.RATE_LIMIT_WINDOW_MINUTES) || 10) * 60 * 1000;

// In-memory rate limiting map
const hits = new Map();

function rateLimit(req, res, next) {
  const key = req.ip || 'unknown';
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  entry.count += 1;

  if (entry.count > RATE_LIMIT_MAX) {
    res.set('Retry-After', String(Math.ceil((entry.resetAt - now) / 1000)));
    return res.status(429).json({ error: 'Too many messages sent. Please try again later.' });
  }

  next();
}

// Clean up expired rate-limit buckets periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now > entry.resetAt) hits.delete(key);
  }
}, RATE_LIMIT_WINDOW_MS).unref();

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST || 'smtp.gmail.com',
    port: Number(SMTP_PORT) || 465,
    secure: String(SMTP_SECURE) !== 'false',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function escapeHtml(val) {
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

router.get('/health', (req, res) => {
  const smtpConfigured = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  const dbConnected = Boolean(process.env.MONGODB_URI);
  res.json({ ok: true, smtpConfigured, dbConnected });
});

router.post('/contact', rateLimit, async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !subject || !message || !email) {
    return res.status(400).json({ error: 'Please fill in your name, email, subject, and message.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    try {
      await Message.create({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        ip: req.ip || 'unknown'
      });
      console.log(`[contact] New message saved to MongoDB from: ${email}`);
    } catch (dbErr) {
      console.warn('[contact] MongoDB save skipped or error:', dbErr.message);
    }

    const transport = getTransport();
    if (transport) {
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(subject);
      const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

      await transport.sendMail({
        from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
        to: TO_EMAIL,
        replyTo: `"${name.replace(/[\r\n]+/g, ' ')}" <${email}>`,
        subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, ' ')}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: `
          <div style="font-family:sans-serif;background:#0b1120;padding:24px;border-radius:12px;color:#f1f5f9;">
            <p style="color:#00f2fe;font-size:12px;text-transform:uppercase;margin:0 0 16px;">Portfolio Contact Form</p>
            <h2 style="color:#f1f5f9;margin:0 0 16px;">${safeSubject}</h2>
            <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
            <div style="background:#111827;border:1px solid #1e293b;border-radius:8px;padding:16px;margin-top:16px;">
              <p style="margin:0;line-height:1.6;">${safeMessage}</p>
            </div>
          </div>
        `
      });
      console.log(`[contact] Email sent to ${TO_EMAIL}`);
    }

    res.status(200).json({ ok: true, message: 'Message received successfully!' });
  } catch (err) {
    console.error('[contact] Error processing submission:', err.message);
    res.status(500).json({ error: 'Failed to process message. Please try again or email directly.' });
  }
});

module.exports = router;
