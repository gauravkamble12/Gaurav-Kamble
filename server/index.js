require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');

const app = express();

const PORT = Number(process.env.PORT) || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:5174')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      return callback(new Error('Origin not allowed'));
    },
    methods: ['GET', 'POST']
  })
);

app.use(express.json({ limit: '16kb' }));

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
app.use('/api', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Gaurav Kamble Portfolio MERN API is running' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[server error]', err.message);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

// ---------------------------------------------------------------------------
// Database Connection & Server Startup
// ---------------------------------------------------------------------------
async function startServer() {
  if (MONGODB_URI) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log('[server] Connected to MongoDB database successfully');
    } catch (err) {
      console.warn('[server] MongoDB connection failed:', err.message);
    }
  } else {
    console.log('[server] MONGODB_URI not set. Running in standard API mode.');
  }

  app.listen(PORT, () => {
    console.log(`[server] MERN backend listening at http://localhost:${PORT}`);
  });
}

startServer();

module.exports = app;
