# Contrasts Hair Studio — website concept

Live preview: https://contrasts-website.vercel.app

A mobile-first redesign for [Contrasts Hair Studio](https://contrasts.com.au/), an organic hair salon at 82 Days Road, Grange (Brisbane).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Content

Everything comes from the salon's current website — nothing is invented:

- `src/content/services.ts` — the full service menu with prices ("correct as at 1 July, 2026"), the price notes and GST note
- `src/content/site.ts` — address, phone, email, Facebook, ABN and opening hours (contrasts.com.au/contact.html)
- Copy (ammonia/paraben/sulfate free, complimentary consultations) is from the homepage

The current site has no photos besides the logo, so this concept is type-led. Salon photos from the owner would be the next upgrade.

## Features

- Service menu you can tick to plan a visit: shows a "from" starting price, then call or email the list to book
- Live "open now" status and today's hours (Brisbane time); late nights Tue & Thu highlighted
- Click-to-call everywhere and a mobile action bar (Call · Prices · Directions)
- HairSalon structured data (hours + services with prices)
- Share image at `/opengraph-image`
- `site.isPreview = true` keeps it out of search engines while it's a concept

## Deploy on Vercel

New Project → import **`matischroder/contrasts-website`** → leave Root Directory empty → Deploy.

(From the `helensvalelandscapesupplies` monorepo instead: Root Directory **`sites/contrasts`**.)
Set `NEXT_PUBLIC_SITE_URL` once it has a real domain, and set `isPreview` to `false` when it replaces the live site.
