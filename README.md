# telcoos-landing

Marketing site for [telcoos.io](https://telcoos.io) — TelcoOS, the **agentic
workspace for telecom**. Built with [Astro](https://astro.build) and output as
fully static HTML (near-zero client JS), so content is in the HTML for search
engines and AI crawlers.

> **For positioning, copy guidance, architecture, deploy steps, and open items,
> see [`CONTEXT.md`](./CONTEXT.md) — the project's source-of-truth context file.**

## Develop

```bash
npm install
npm run dev      # local dev server (includes a dev-only bubble-placement editor)
npm run build    # static build → dist/
npm run preview  # serve the built site
```

## Structure

```
src/
  styles/tokens.css     # brand tokens (light "warm paper" theme) — single source of truth
  styles/global.css     # design CSS
  data/content.ts       # ALL copy + data (drives sections AND JSON-LD)
  components/            # Helm logomark, Icon, Waves (inline SVG at build time)
  layouts/Base.astro    # <head>, meta, JSON-LD, nav, footer
  pages/index.astro     # the homepage (incl. the build-time "bell funnel" SVG)
  pages/privacy.astro, terms.astro
public/                 # favicon.svg, og.png, robots.txt, llms.txt, workspace.png
CONTEXT.md              # positioning + architecture + status (read this first)
```

## Deploy (manual)

Cloudflare (Full strict) fronts a Coolify app on Hetzner that builds the
multi-stage `Dockerfile` (Astro → nginx). There is **no auto-deploy webhook** —
deploys are a two-step:

1. `git push origin main`
2. Trigger the Coolify build (dashboard, or `GET {COOLIFY_API_URL}/api/v1/deploy?uuid=<app-uuid>`
   with the token from `.env.local`).

## SEO / agent crawling

JSON-LD (Organization, SoftwareApplication, FAQPage), `robots.txt` that explicitly
allows AI crawlers, `/llms.txt`, an auto-generated sitemap, OG/Twitter cards, and
canonical URLs. Note: Cloudflare's "Control AI crawlers" setting must stay on
*allow* — see `CONTEXT.md`.
