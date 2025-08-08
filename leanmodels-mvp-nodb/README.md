# Leanmodels MVP (Next.js + Tailwind)

A minimal, working MVP of a Lean Canvas–based business development app.

## Quick Start
```bash
npm install
npm run dev
```
Open http://localhost:3000 and click **Open Project**.

## What’s inside
- Next.js App Router + TypeScript
- Tailwind CSS
- Minimal AI endpoint at `/api/ai/chat`
- Demo project page at `/project/demo`
- Prisma schema (SQLite by default). DB is optional for the demo UI.

## Notes
- This is a skeleton intended for rapid iteration. Replace the AI route with your LLM of choice and wire sections to your DB if needed.


---
## No-DB Variant
This package removes Prisma and any DB requirement so it can deploy on platforms like Vercel without database configuration. The UI and AI demo run fully client/server without persistence.
