# Security Roadmaps

Practitioner-built career roadmaps for **Cloud Security Engineering** and **Cloud GRC (Governance, Risk & Compliance)** — built as a Next.js app ready for one-click Vercel deployment.

## Routes

| Route | Content |
|-------|---------|
| `/` | Landing page with navigation to both roadmaps |
| `/cloud-security` | Cloud Security Engineer roadmap (AWS, Azure, GCP) |
| `/grc` | Cloud GRC roadmap (ISO 27001, SOC 2, GDPR, NIST, PCI DSS) |

## Deploy to Vercel (3 steps)

### Option A — GitHub + Vercel (recommended)

1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo → click **Deploy**

Vercel auto-detects Next.js. No configuration needed.

### Option B — Vercel CLI

```bash
npm install -g vercel
cd roadmap-app
vercel
```

Follow the prompts. Your site will be live at a `*.vercel.app` URL.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Google Fonts** — Syne, JetBrains Mono, Playfair Display, DM Mono
- Zero external UI dependencies
- Vercel-ready out of the box

## Customisation

- Edit phase content in `app/cloud-security/page.tsx` and `app/grc/page.tsx`
- Update landing page in `app/page.tsx`
- Styles are embedded in each page component as `<style>` blocks
- Fonts are loaded via `app/layout.tsx`
