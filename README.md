# Gaurav Kamble - Portfolio

Full-stack portfolio with a React (Vite + Tailwind CSS) client and an Express/Node contact API. Includes security best practices (rate limiting, input sanitization, CORS, honeypot), particles, typed text, and PDF certificate viewer.

## Prerequisites

- Node.js 18+ (tested with 24.18.0)
- npm 11+

## Setup

### Server
`ash
cd server
cp .env.example .env
# Fill SMTP credentials and allowed origins
npm install
npm run dev
`

### Client
`ash
cd client
cp .env.example .env  # optional for custom API base
npm install
npm run dev
`

## Build & Lint

`ash
cd client && npm run build && npm run lint
cd ../server && node index.js  # verify it starts
`

## Notes

- Client uses Vite proxy to forward /api to localhost:5000 in dev.
- Rate limiting, header injection protection, XSS escaping, and body size limits in server.
- Client dependencies kept patched; source-map-js vulnerability fixed.
- Oxlint configured for client; one minor regex style note resolved.

