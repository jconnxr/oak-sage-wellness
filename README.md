# Oak & Sage Wellness Center

Next.js 16 (App Router) + TypeScript marketing site for **Oak & Sage Wellness Center**, a boutique medical wellness clinic in Edmond, Oklahoma.

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS v4 (CSS-first theme)
- shadcn/ui (Radix) + Lucide
- Framer Motion (`Reveal`) + Lenis smooth scroll
- React Hook Form + Zod (contact form)
- Resend (optional contact email delivery)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment variables

Copy `.env.example` to `.env.local` and fill in values as needed:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical / Open Graph base URL (defaults to `https://www.oakandsage.com`) |
| `RESEND_API_KEY` | Resend API key for `/api/contact` |
| `CONTACT_TO_EMAIL` | Inbox that receives contact form messages |
| `CONTACT_FROM_EMAIL` | Optional verified Resend from address |

Without `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, the contact form validates input but returns a clear “not configured” error — it does not fake success.

## Deploying to Vercel

This is a standard Next.js App Router project. Deploy with zero extra config:

1. Push the repo to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com/new)
3. Leave Framework Preset as **Next.js** (auto-detected)
4. Add env vars from `.env.example` in the Vercel project settings
5. Deploy

No `vercel.json` is required. Build command: `next build`. Output: Next.js defaults.

After deploy, set `NEXT_PUBLIC_SITE_URL` to your production domain so sitemap, robots, and Open Graph URLs resolve correctly.

## Site map

- `/` — Home
- `/about` — About Us
- `/services/glp-3-peptides` — GLP-3 Peptides
- `/services/body-composition` — Body Composition
- `/services/skin-tightening` — Skin Tightening
- `/services/pain-management` — Pain Management
- `/products` — Products
- `/contact` — Contact Us

SEO helpers: `app/sitemap.ts`, `app/robots.ts`, shared metadata in `lib/seo.ts`, placeholder OG image at `public/images/og-default.png`.

## Images

All site photography goes through `lib/images.ts` + `components/placeholder-image.tsx` (`next/image`). Do not hardcode image URLs in page components.
