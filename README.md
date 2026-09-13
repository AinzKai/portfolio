# Muhammad Uzair Rizwan — Portfolio

A portfolio website for Muhammad Uzair Rizwan, a freelance frontend developer specializing in modern websites, lead capture systems, and customer retention automation for international businesses.

## Built with

- **Next.js 16** (App Router, SSG)
- **TypeScript**
- **Tailwind CSS v4**
- **Inter** font (via `next/font`)
- **Lucide React** for interface icons

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Pages & routes (App Router)
│   ├── api/contact/        # Contact form API endpoint (Resend)
│   ├── about/              # About page
│   ├── work/               # Project showcase
│   │   └── [slug]/         # Dynamic project detail pages
│   ├── services/           # Services page
│   ├── pricing/            # Pricing page
│   ├── process/            # How-it-works page
│   ├── contact/            # Contact page
│   ├── sitemap.ts          # Generated sitemap
│   ├── robots.ts           # Generated robots.txt
│   ├── opengraph-image.tsx # Social share image
│   ├── icon.svg            # Site favicon
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── ui/                 # Button, Badge
│   ├── header.tsx          # Site header / navigation
│   ├── footer.tsx          # Site footer
│   ├── hero.tsx            # Hero section
│   ├── project-card.tsx    # Project card component
│   ├── service-card.tsx    # Service card component
│   ├── pricing-card.tsx    # Pricing package card
│   ├── cta-section.tsx     # Closing call-to-action block
│   ├── reveal.tsx          # Scroll-in reveal animation
│   ├── contact-form.tsx    # Contact form
│   └── ...
└── lib/                    # Data, utilities, theme
```

## Data

All portfolio content (projects, services, pricing, process steps) is defined in `src/lib/data.ts`. Update this file to add new projects or modify existing content.

## Contact Form

The contact form posts to `/api/contact`, which delivers messages via [Resend](https://resend.com). To enable real delivery, add the following to a local `.env` file (not committed):

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_email@example.com
# Optional – defaults to onboarding@resend.dev
CONTACT_FROM_EMAIL=no-reply@yourdomain.com
```

Until these are configured, the API responds with a 503 and asks visitors to email directly.

## Design

The portfolio uses a dark theme by default with a light mode toggle. Colors are managed via Tailwind CSS v4's `@theme` directive with CSS custom properties, enabling smooth theme switching.

## License

All rights reserved. This is a personal portfolio — no client data or proprietary information is included.
