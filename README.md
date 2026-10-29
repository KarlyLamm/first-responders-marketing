# First Responders Roofing & Restoration: website

Static Astro site built to win emergency calls and rank in Google Maps, organic search and AI answers (AI Overviews, ChatGPT, Perplexity).

- 134 pages: home, emergency hub, 12 service pages, 15 city pages, 126 city x service pages (water damage, storm damage, emergency roof repair and roof replacement everywhere, plus flooded basement and hail roof repair in the St. Louis metro), insurance claims guide, first responder program, reviews, about, contact, 4 homeowner guides
- Scrollytelling home page: a pinned house cross-section that plays out a 2 a.m. water loss as you scroll, plus a scroll-scrubbed horizontal hail-claim track
- Schema on every page: RoofingContractor/LocalBusiness, Service, FAQPage, BreadcrumbList, Article
- SEO and AI-search files:
  - `/sitemap.xml` (every URL with lastmod, changefreq, priority) and a human `/sitemap/` page
  - `/robots.txt` open to Google, Bing and AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended)
  - `/llms.txt` (short summary) and `/llms-full.txt` (every service, city and guide in plain text) for AI assistants
  - `/humans.txt`, `/.well-known/security.txt`, `/site.webmanifest`, `/rss.xml` (guides feed)
  - `/og.png` share image, favicon, apple-touch and 512px icons
  - IndexNow key file plus `npm run indexnow` to push every URL to Bing and IndexNow engines after a deploy
  - Head tags: canonical, Open Graph, Twitter card, geo, robots max-snippet, font preload, WebSite + business schema on every page
- Click-to-call and click-to-text everywhere (no web form yet), sticky mobile call/text bar, call and text clicks sent to GA4/GTM

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Vercel)

1. Go to vercel.com, click **Add New**, then **Project**, and import `KarlyLamm/first-responders-marketing`.
2. Framework preset: **Astro**. Build command `npm run build`, output `dist` (auto-detected).
3. Under **Environment Variables** add:
   - `PUBLIC_GA_ID` = GA4 measurement ID (`G-XXXXXXX`).
4. Click **Deploy**, then add the domain under **Settings**, **Domains**.

## Logo

`public/logo.png` is the official logo with the background removed (1694 x 1306, transparent). `logo-480.webp` and `logo-960.webp` are web sizes. Favicon and app icons are generated from it.

## Edit business facts in one place

`src/data/site.ts` holds name, address, phone, hours, credentials and the first responder offer. Services live in `src/data/services.ts`, cities in `src/data/cities.ts`, reviews in `src/data/reviews.ts`.

## CONFIRM before launch (owner sign-off)

- [ ] Phone `(314) 644-8800` and SMS `(314) 943-6606` are the numbers to publish everywhere
- [ ] Map pin coordinates in `site.ts` (copy from Google Business Profile)
- [ ] "On-site in about 2 hours" promise and 24/7 answering are accurate
- [ ] Giveback wording in `site.giveback` (exact amount or percentage if they want to publish it)
- [ ] `responderOffer`: any discount for police, fire and EMS (hidden until filled)
- [ ] `credentials`: IICRC, GAF/Owens Corning, HAAG, licenses (hidden until filled; list only what is actually held)
- [ ] Every city in `cities.ts` is really served
- [ ] Google Business Profile link and review link
- [ ] Real job photos (before/after) to replace illustration-only sections
- [ ] Office email

## Launch checklist for rankings

1. **Fix the hijacked domain.** `firstrespondersrestorationmo.com` now serves a gambling spam site but is still linked from GuildQuality. Recover or let it lapse, and update GuildQuality to this domain.
2. **One NAP everywhere.** Name, address, phone and URL must match `site.ts` on Google, BBB, Yelp, Angi, HomeAdvisor, GuildQuality, Birdeye, Facebook, Apple Maps and Bing.
3. **Google Business Profile:** primary category "Water damage restoration service", add "Roofing contractor"; hours = Open 24 hours; list every service; weekly photo and post.
4. **Google Search Console and Bing Webmaster Tools:** verify the domain in both and submit `/sitemap.xml`. Then run `npm run indexnow`.
5. **Local Services Ads:** apply for Google Guaranteed in roofing and water damage.
6. **Reviews:** text the Google review link after every job; ask customers to mention the service and their city. Add new quotes to `reviews.ts` exactly as written.
7. **Content:** add a case study per city with photos, and one guide per month.
