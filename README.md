# marketing.senflix.app (retired, redirect-only)

The owner retired marketing.senflix.app on 2026-11-07 (LEGAL-SITE-01).
All legal texts and the Bictorys return page now live on
https://www.senflix.app (app-landing repo).

This project stays deployed only so that old links keep working, including
the `african-video-platform-marketing.vercel.app` alias and app builds that
still send buyers to `/payments/success`.

Every URL answers 301 to www.senflix.app, with the query string kept:

| Old path | New URL |
| --- | --- |
| `/payments/success`, `/payments/success/` | `https://www.senflix.app/payments/success` |
| `/privacy-policy`, `/fr/privacy-policy` | `https://www.senflix.app/confidentialite` |
| `/en/privacy-policy` | `https://www.senflix.app/privacy` |
| `/terms`, `/fr/terms` | `https://www.senflix.app/conditions` |
| `/en/terms` | `https://www.senflix.app/terms` |
| `/copyright`, `/fr/copyright` | `https://www.senflix.app/droits-auteur` |
| `/en/copyright` | `https://www.senflix.app/copyright` |
| `/support`, `/fr/support`, `/contact`, `/fr/contact` | `https://www.senflix.app/support` |
| `/en/support`, `/en/contact` | `https://www.senflix.app/help` |
| anything else | `https://www.senflix.app/` |

The table lives in `vercel.json`; `next.config.ts` reuses it so that
`next start` behaves the same locally. Check it with:

```bash
npm run build && npx next start --port 3000 &
node scripts/check-redirects.mjs http://localhost:3000
# or against a Vercel Preview deployment:
# node scripts/check-redirects.mjs https://<preview-url>
```

Do not add pages here. New site work goes to app-landing.
