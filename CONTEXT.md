# TelcoOS Landing — Project Context

Source of truth for anyone (human or AI agent) working on this repo. Tool-agnostic.
If the site and this file disagree, fix whichever is wrong and update this file.

Last updated: 2026-06-21.

## Status

- **LIVE** at https://telcoos.io (and `www`, which serves the same; canonical is the apex).
- Stack: **Astro** static site → multi-stage `Dockerfile` (node build → nginx) → **Coolify**
  on Hetzner, fronted by **Cloudflare** (SSL/TLS = Full (strict)).
- **Deploy is MANUAL** (no auto-deploy webhook yet): `git push origin main`, then trigger
  Coolify. App UUID `yau3jkqsqws2ew6ljzzqz9st`; trigger with
  `GET {COOLIFY_API_URL}/api/v1/deploy?uuid=<uuid>` using the token in `.env.local`
  (gitignored: `COOLIFY_API_URL`, `COOLIFY_API_TOKEN`).
- **Email:** `ahoy@telcoos.io` forwards to the owner via Cloudflare Email Routing
  (MX `route1/2/3.mx.cloudflare.net`, one SPF, DKIM).
- ⚠️ **Cloudflare "Control AI crawlers"** must stay **"Do not block (allow crawlers)"** and
  **robots.txt management OFF** — the whole point is to be found by AI agents. If Cloudflare
  re-enables its managed block, it `Disallow`s GPTBot/ClaudeBot etc. and overrides our robots.

## What it is

An **agentic chat workspace for telecom**. You talk to it; it pulls from your switch, runs
the heavy data analysis your laptop can't, and builds the artifact your desk needs — on your
command.

- **"Agentic" = it does the work when asked** (writes & runs real analysis, pulls live data,
  produces the artifact) — NOT autonomous. Tool-using, on your command.
- **LLM-agnostic and switch-agnostic.** Bring the AI provider you trust; run on the switch
  platforms you already use. No lock-in on either axis.
- **Soul of a telecom operator, brain of a data scientist** (NOT "quant" — that's quantitative
  finance; we mean data scientist / analyst-who-can-code).

## Audience & core wedge

The carriers in the middle — voice wholesalers, termination providers, aggregators. P&L is the
spread. The job means clicking through tons of reports to assemble a thesis from huge data —
hunting **the signal in the noise**. Backend artifacts are too big to open in Excel (CDRs run
to gigabytes). TelcoOS pulls straight from the switch, crunches tens of millions of records,
and reduces it to a clear read. The promise is **interrogation**: "Dashboards tell you *what*;
TelcoOS tells you *why* — and what changed." Answers are the promise; artifacts are how the
answer shows up.

## Current vs roadmap (HARD line — don't blur it)

- **Today = you drive.** You ask / hand it an objective → it pulls, analyzes, and produces
  (analysis, recommendations, artifacts).
- **Roadmap = it drives.** The loop runs unattended (the "sweep" automated) + a deep compounding
  self-learning memory. In active development. On the page this lives in a badged "Roadmap" section.

## Capabilities (CURRENT — demonstrated, used daily by the founder)

1. **Crunches data your laptop can't** — gigabyte CDRs, 50M+ records, pulled straight from your
   switch, reduced to an answer. No exports, no Excel ceiling.
2. **The answer, as an artifact** — optimal customer rate decks (LCR1–4 × 2 weeks of ASR),
   per-NPANXX vendor target sheets (single-page HTML), weekly rich-HTML growth emails (Chart.js),
   a daily profitability dashboard that beats the switches' own.
3. **Ships with an operator's brain** — shipped skills know each supported switch's APIs (routing,
   CDR, backend) AND the domain (ASR, ALOC, release causes); works out of the box.
4. **LLM- and switch-agnostic** — no lock-in on AI provider or switch.
5. **Extensible with your own skills** — teach a repeatable workflow once, reuse forever.
6. **Surfaces what needs attention** — "the sweep" scans live traffic, flags issues, suggests
   routing moves; you decide (manual precursor to roadmap autonomy).

## Proof point (real, current)

The "80% failing trunk" session: found the top routing vendor rejecting 99% (986/1,000 sampled =
congestion), diffed cost vs sell across **31 decks / 191,016 NPANXXs**, proved 99.6% profitably
coverable, named the replacement, tracked recovery within the hour. Present as "in action" (it's
current — founder does this daily), not roadmap.

## Do NOT put on the page

- Stack internals: Polars / Python / Rust / Tauri. Frame as outcomes.
- Switch names (e.g. sipnav). Say "popular switch platforms" — two to start, more coming.
- Memory storage internals (OKF). "Knows your system" is enough.

## Voice / brand

- Tagline: **"Agentic Workspace for Telecom"** (eyebrow). Lead line: **"Find the signal."**
- Recurring promise: **"Ask hard questions. Get real answers."** / **"What changed?"**
- Helm logo = ship's wheel (telecom is like sailing — keep your sails full, choose your heading).
  Keep IMPLICIT (helm mark + "find the signal"); no literal sailing copy. Don't get cute.

## The page (top → bottom)

Hero (*Find the signal* / *Talk to your telecom stack* / *Ask hard questions, get real answers*)
→ **Sources strip** (CDRs · Routing · LCR · Billing · Customers · Vendors · DIDs · Fraud)
→ **Insight · Clarity · Action** band
→ **Questions** ("Dashboards tell you what. TelcoOS tells you why.") — real operator queries
→ **Workspace** (screenshot, "Ask anything. It knows your stack.")
→ **How it works** (Connect / Bring your AI / Just ask)
→ **Capabilities** (answer-framed)
→ **In action** (the trunk story)
→ **Roadmap** (badged "in development": autonomy + self-learning memory)
→ **FAQ** → **Final CTA** → footer.

## Architecture notes

- **All copy/data lives in `src/data/content.ts`** (drives both rendered sections AND the JSON-LD).
- **Questions section is responsive-split:** desktop (≥760px) = the "bell funnel" — chat bubbles
  absolutely positioned (hand-placed `keyPos`/`bubblePos` in `index.astro` frontmatter) over a
  build-time SVG (scatter dots/bullseyes + curved bell lines + signal node) + a CSS dot-matrix.
  Mobile (≤760px) = SVG/matrix hidden, bubbles stack as an alternating-L/R **chat** (long queries
  overlapped in the funnel on phones). A **dev-only drag editor** (gated `import.meta.env.DEV`,
  stripped from production) lets you drag desktop bubbles and Copy the position array.
- **Near-zero client JS:** only the hero/CTA decorative waves run in the browser; the helm logo,
  icons, and the bell funnel are inline SVG generated at build time.
- **SEO / agent crawling:** JSON-LD (Organization, SoftwareApplication, FAQPage), `robots.txt`
  (explicitly allows GPTBot/ClaudeBot/PerplexityBot/OAI-SearchBot/Google-Extended), `/llms.txt`,
  auto sitemap, OG/Twitter cards (`public/og.png`, 1200×630), canonical URLs.
- **Legal:** `/privacy`, `/terms` (generic starter templates — have counsel review; Terms still
  has a `[your jurisdiction]` placeholder).
- **Brand tokens** in `src/styles/tokens.css` (single source: warm-paper light theme, amber
  `#C9760A` accent, Clash Display + General Sans). Design CSS in `src/styles/global.css`.

## Open items

- DMARC TXT record in Cloudflare (`_dmarc` → `v=DMARC1; p=none; rua=mailto:ahoy@telcoos.io`).
- Replace `[your jurisdiction]` in `src/pages/terms.astro`.
- Optional: GitHub → Coolify auto-deploy webhook (so pushing `main` auto-builds).
- Optional: `www` → apex 301 redirect (canonical already covers SEO).
