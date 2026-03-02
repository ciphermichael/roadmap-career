# Security Roadmaps — Next.js

Practitioner-built career roadmaps for **Cloud Security Engineering** and **Cloud GRC**.

## Routes

| Route | Content |
|-------|---------|
| `/` | Landing page |
| `/cloud-security` | Cloud Security Engineer roadmap |
| `/grc` | Cloud GRC roadmap |

## UI Features

- **Sticky sidebar** with scroll-spy phase navigation
- **Reading progress bar** in the top nav
- **Expandable phase cards** — click to open/close
- **Tabbed cloud section** — switch between AWS, Azure, GCP
- **Animated skill bars** on render
- **Responsive** — collapses gracefully on mobile
- **Design system** — full CSS custom property token system

## Deploy to Vercel

### 1-click via GitHub

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Add New Project → Import repo
3. Click Deploy (auto-detects Next.js, zero config needed)

### Via CLI

```bash
npm install -g vercel
cd roadmap-app
vercel
```

## Run Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Tech

- Next.js 14 (App Router)
- TypeScript
- Pure CSS design system (no CSS framework)
- Google Fonts: Bebas Neue + Plus Jakarta Sans + JetBrains Mono
- Zero UI library dependencies
