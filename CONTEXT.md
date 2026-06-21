# TelcoOS — Positioning & Capability Context

Source of truth for the landing-page copy. Established in a grill session
2026-06-21. If copy and this file disagree, fix the copy.

## What it is

An **agentic chat workspace for telecom**. You talk to it; it pulls from your
switch, runs the heavy data analysis your laptop can't, and builds the artifact
your desk needs — on your command.

- **"Agentic" means** it *does the work* when asked (writes & runs real analysis,
  pulls live data, produces the artifact) — **not** that it's autonomous. Tool-using,
  on your command.
- **LLM-agnostic and switch-agnostic.** Bring the AI provider you trust; run on the
  switch platforms you already use. No lock-in on either axis.
- **Soul of a telecom operator, brain of a data scientist** (NOT "quant" — that's
  quantitative finance; we mean data scientist / analyst-who-can-code).

## Audience

The carriers in the middle — voice wholesalers, termination providers, aggregators.
P&L is the spread. They live in huge data and a dozen disconnected reports.

## The core wedge

These jobs mean clicking through tons of reports to assemble a thesis from huge
data — always hunting **the signal in the noise**. The artifacts from backend
systems are too big to even open in Excel (CDR files run to gigabytes). TelcoOS
pulls straight from the switch, crunches tens of millions of records, and reduces
it to a clear read.

## Current vs roadmap line (HARD line — don't blur it)

- **Today = you drive.** You ask or hand it an objective → it pulls, analyzes,
  and produces. Includes analysis, recommendations, and artifact generation.
- **Roadmap = it drives.** The loop runs unattended (the "sweep" automated), plus
  the deep compounding memory. In active development.

## Capabilities (CURRENT — all demonstrated, used daily by the founder)

Top 3 (promote):
1. **Crunches data your laptop can't** — gigabyte CDRs, 50M+ records, pulled
   straight from your switch. No exports, no Excel ceiling.
2. **Builds the real artifacts on demand** — optimal customer rate decks (LCR1–4
   cross-referenced with 2 weeks of ASR), per-NPANXX vendor target sheets (single-
   page HTML), weekly rich-HTML growth emails (Chart.js), a daily profitability
   dashboard that beats the switches' own.
3. **Ships with an operator's brain** — the shipped skills know each supported
   switch's APIs (routing, CDR, backend) AND the domain (ASR, ALOC, release
   causes), so it works out of the box.

Supporting:
4. **LLM- and switch-agnostic** — no lock-in on AI provider or switch platform.
5. **Extensible with your own skills** — teach a repeatable workflow once, reuse
   forever; not locked to one person's preferences.
6. **Surfaces what needs attention** — "the sweep" scans live traffic, flags the
   issues, suggests routing moves; you decide (manual precursor to roadmap autonomy).

## Real proof points (usable, demonstrated)

- The "80% failing trunk" session: found the top routing vendor rejecting 99%
  (986/1,000 sampled = congestion), diffed cost vs sell across **31 decks /
  191,016 NPANXXs**, proved 99.6% profitably coverable, named the replacement,
  tracked recovery within the hour. This is CURRENT (founder does it daily), not
  roadmap — present as "in action," not "a glimpse."

## Do NOT put on the page

- Stack internals: Polars / Python / Rust / Tauri. Frame as outcomes.
- Switch names (e.g. sipnav). Say "popular switch platforms" — two to start, more
  coming.
- Memory storage internals (OKF). "Knows your system" is enough.

## Voice / brand

- Tagline direction: "Agentic workspace for telecom."
- Recurring line: **"Find the signal in the noise."**
- The helm logo = a ship's wheel: telecom is like sailing — keep your sails full,
  constantly choose your heading (which way to route). Keep this IMPLICIT (helm
  mark + "find the signal"); do NOT write literal sailing copy. Don't get cute.
