# telcoos-landing

Marketing site for [telcoos.io](https://telcoos.io) — the agentic VOIP traffic
manager. Built with [Astro](https://astro.build) and output as fully static
HTML (zero client JS except a decorative background), so the content is in the
HTML for search engines and AI crawlers.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # serve the built site
```

## Structure

```
src/
  styles/tokens.css     # brand tokens (from Claude Design) — single source of truth
  styles/global.css     # design CSS
  data/content.ts       # all copy + data (drives sections AND JSON-LD)
  components/            # Helm logomark, Icon, Waves (static SVG at build time)
  layouts/Base.astro    # <head>, meta, JSON-LD, nav, footer
  pages/index.astro     # the page
public/                 # favicon.svg, robots.txt, llms.txt (+ og.png, workspace.png TODO)
```

## Deploy

Coolify (Hetzner) builds the multi-stage `Dockerfile` on push to `main`: Astro
compiles to `dist/`, then nginx serves it.

## SEO / agent crawling

JSON-LD (Organization, SoftwareApplication, FAQPage), `robots.txt` allowing AI
crawlers, `/llms.txt`, an auto-generated sitemap, OG/Twitter cards, and canonical
URLs.

## ⚠️ Draft copy

Content in `src/data/content.ts` came from the design handoff and is **not yet
approved** — the metrics figures are invented placeholders, and the trust names
and FAQ answers are illustrative. Replace before a public launch.
