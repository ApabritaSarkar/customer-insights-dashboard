# Customer Insights Dashboard

An internal web application for Managed Services teams to track customer sentiment, open tickets, and account health in real time.

Built as a demonstration of production-ready Next.js patterns relevant to client-facing digital product delivery.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts**
- **Jest + React Testing Library** (unit tests)

## Key Technical Highlights

- **SSR** on the dashboard page — data fetched fresh per request using `force-dynamic`
- **SSG** on the customers list — statically generated at build time using `force-static`
- **Dynamic routes** with `generateStaticParams` on `/customers/[id]`
- **Reusable component library** — `StatCard`, `SentimentBadge`, `SentimentChart`
- **Accessibility** — semantic HTML, ARIA labels, keyboard-navigable, WCAG-aligned colour contrast
- **TypeScript throughout** — strict typing with shared interfaces in `lib/types.ts`
- AI-assisted development using GitHub Copilot with human verification at every step

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)