# African Video Platform Marketing

Standalone marketing site for African Video Platform.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn-compatible project structure

## Features

- Intentional bilingual landing page with an in-page `EN / FR` toggle
- `light / dark / system` theme toggle
- Product, creator, discovery, trust, download, and FAQ sections
- App Store and Google Play download links
- Lightweight reveal animations for section transitions

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run type-check
npm run build
```

## Deployment

Production deployment target is Vercel.

Example flow:

```bash
vercel link
vercel deploy --prod
```

## Content Notes

- Store buttons link to the live App Store and Google Play listings (`download.stores` in `src/lib/site-copy.ts`).
