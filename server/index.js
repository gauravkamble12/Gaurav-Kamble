require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

const PORT = Number(process.env.PORT) || 5000;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'kamblegaurav193@gmail.com';

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX) || 5;
const RATE_LIMIT_WINDOW_MS = (Number(process.env.RATE_LIMIT_WINDOW_MINUTES) || 10) * 60 * 1000;

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:5174')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

const LIMITS = {
  name: { min: 2, max: 80 },
  email: { min: 5, max: 254 },
  subject: { min: 1, max: 120 },
  message: { min: 10, max: 5000 }
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

app.use(
  cors({
    origin(origin, callback) {
      // Allow same-origin/non-browser callers (curl, health checks) which send no Origin
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      return callback(new Error('Origin not allowed'));
    },
    methods: ['POST', 'GET'],
  })
);

// Hard cap on request body so a malicious client cannot flood memory
app.use(express.json({ limit: '16kb' }));

const hits = new Map();

function rateLimit(req, res, __next) {
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

// Drop expired buckets so the map cannot grow without bound
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now > entry.resetAt) hits.delete(key);
  }
}, RATE_LIMIT_WINDOW_MS).unref();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Strips CR/LF so user input can never inject extra email headers
function headerSafe(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function clean(value, { min, max }) {
  if (typeof value !== 'string') return null;
  // Remove control characters, collapse whitespace, trim
  const result = value.replace(/[\\x00-\\x1F\\x7F]/g, ' ').replace(/\s+/g, ' ').trim();
  if (result.length < min || result.length > max) return null;
  return result;
}

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

const buildEmail = ({ name, email, subject, message }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const text = [
    `New message from your portfolio`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Subject: ${subject}`,
    ``,
    message,
    ``,
    `--`,
    `Sent from the portfolio contact form`,
  ].join('\n');

  const html = `
    <div style="font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0b1120;padding:24px;border-radius:12px">
      <div style="max-width:600px;margin:0 auto">
        <p style="color:#00f2fe;font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin:0 0 16px">
          Portfolio Contact Form
        </p>
        <h1 style="color:#f1f5f9;font-size:20px;margin:0 0 20px">${safeSubject}</h1>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr>
            <td style="padding:8px 0;color:#94a3b8;font-size:13px;width:70px">Name</td>
            <td style="padding:8px 0;color:#e2e8f0;font-size:14px">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#94a3b8;font-size:13px">Email</td>
            <td style="padding:8px 0">
              <a href="mailto:${safeEmail}" style="color:#38bdf8;font-size:14px;text-decoration:none">${safeEmail}</a>
            </td>
          </tr>
        </table>
        <div style="background:#111827;border:1px solid #1e293b;border-radius:10px;padding:16px">
          <p style="color:#e2e8f0;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap">${safeMessage}</p>
        </div>
        <p style="color:#475569;font-size:11px;margin:20px 0 0">Reply directly to this email to respond.</p>
      </div>
    </div>`;

  return { text, html };
};

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

app.get('/api/health', (req, res) => {
  const smtpReady = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  res.json({ ok: true, smtpConfigured: smtpReady });
});

app.post('/api/contact', rateLimit, async (req, res) => {
  const body = req.body || {};

  // Honeypot: a hidden field real users never see. Bots that fill every input get a
  // fake success so they learn nothing.
  if (body.website) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const subject = clean(body.subject, LIMITS.subject);
  const message = clean(body.message, LIMITS.message);

  if (!name || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in your name, subject and message.' });
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const transport = getTransport();
  if (!transport) {
    console.error('[contact] SMTP is not configured. Check server/.env');
    return res.status(503).json({ error: 'Email service is not configured yet. Please email me directly.' });
  }

  try {
    await transport.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: `"${headerSafe(name)}" <${email}>`,
      subject: headerSafe(`[Portfolio] ${subject}`),
      ...buildEmail({ name, email, subject, message }),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err.message);
    res.status(500).json({ error: 'Something went wrong sending your message. Please try again.' });
  }
});

app.use((err, req, res, __next) => {
  if (err.message === 'Origin not allowed') {
    return res.status(403).json({ error: 'Origin not allowed' });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Message too large' });
  }
  console.error('[server] unhandled:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`[server] contact API listening on http://localhost:${PORT}`);
  console.log(`[server] delivering to: ${TO_EMAIL}`);
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[server] SMTP_USER / SMTP_PASS missing - copy .env.example to .env to enable email');
  }
});
