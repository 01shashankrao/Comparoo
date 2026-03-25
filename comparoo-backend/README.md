Comparoo Backend
=================

Minimal Node.js + Express backend for the Comparoo project.

Quick start:
1. Copy `.env.example` to `.env` and set MONGO_URL and JWT_SECRET.
2. Install dependencies:
   npm install
3. Start development server:
   npm run dev

API endpoints:
- GET  /                   -> health
- POST /api/auth/signup    -> { email, password }
- POST /api/auth/login     -> { email, password }
- POST /api/user/search    -> { email, query }
- GET  /api/user/search/:email
- POST /api/user/save-product -> { email, product }
- GET  /api/user/saved/:email
