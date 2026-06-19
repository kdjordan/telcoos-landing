// Landing page content. Single source for both the rendered sections and the
// JSON-LD structured data (so they never drift).
//
// ⚠️ DRAFT COPY — from the Claude Design handoff, not yet approved.
//    - metrics figures are INVENTED placeholders (replace with real or remove)
//    - trust names and FAQ answers are illustrative
//    Swap these in place when final copy lands; structure stays the same.

export const site = {
  name: 'TelcoOS',
  tagline: 'Agentic VOIP Traffic Manager',
  description:
    'TelcoOS is an agentic VOIP traffic manager — routing, rates, and reporting unified into one intelligent workspace that runs the busywork for you.',
  // TODO(contact): confirm canonical address — kit uses hello@telcoos.io, repo history used k.dean.jordan@gmail.com
  contactEmail: 'hello@telcoos.io',
};

export const nav = [
  { href: '#how', label: 'How it works' },
  { href: '#agent', label: 'The agent' },
  { href: '#caps', label: 'Capabilities' },
  { href: '#faq', label: 'FAQ' },
];

export const trust = ['Wholesale carriers', 'VOIP aggregators', 'Routing desks'];

export const steps = [
  {
    n: '01',
    icon: 'route',
    title: 'Routing',
    body: 'Least-cost routes are evaluated continuously and switched before quality or margin slips — no overnight config marathons.',
  },
  {
    n: '02',
    icon: 'tag',
    title: 'Rates',
    body: "Carrier rate decks are imported, normalized, and diffed automatically, so you always price against the deck that's actually live.",
  },
  {
    n: '03',
    icon: 'chart',
    title: 'Reporting',
    body: 'CDRs roll up into margin, ASR, and ACD views in real time — the answers are ready before anyone has to ask.',
  },
];

export const agentBullets = [
  { lead: 'Re-routes automatically', rest: 'when a carrier degrades or a cheaper path opens up.' },
  { lead: 'Flags margin risk', rest: 'the moment a new rate deck would put a route underwater.' },
  { lead: 'Reconciles invoices', rest: 'against your CDRs and surfaces the discrepancies.' },
  { lead: 'Answers in plain language', rest: '— ask it anything about your traffic and get the query, run.' },
];

export const caps = [
  { icon: 'route', title: 'Least-cost routing', body: 'Continuous LCR across every carrier and dial code, with quality guards baked in.' },
  { icon: 'tag', title: 'Rate deck management', body: 'Import, version, and diff carrier decks — and see exactly what changed.' },
  { icon: 'chart', title: 'CDR analytics', body: 'ASR, ACD, margin, and PDD broken out by route, carrier, and destination.' },
  { icon: 'shield', title: 'Margin monitoring', body: 'Live profitability per route, with alerts before a deck change bites.' },
  { icon: 'refresh', title: 'Carrier reconciliation', body: 'Match invoices to your own CDRs and catch billing discrepancies fast.' },
  { icon: 'bell', title: 'Real-time alerts', body: 'Get pinged on degradation, fraud spikes, and margin events as they happen.' },
];

// ⚠️ PLACEHOLDER — invented figures. Replace with real numbers or remove the section.
export const metrics = [
  { num: '10B+', lbl: 'minutes routed every month' },
  { num: '<2s', lbl: 'to re-route on a quality drop' },
  { num: '30%', lbl: 'less time on manual ops' },
];

export const faqs = [
  {
    q: 'Does the agent route automatically, or do I stay in control?',
    a: 'You set the guardrails — margin floors, quality thresholds, approved carriers — and decide whether the agent acts on its own or proposes changes for you to confirm.',
  },
  {
    q: 'How do rate decks get in?',
    a: 'Upload them in any common format, forward them from your inbox, or connect a feed. TelcoOS normalizes and versions every deck so you always price against what’s live.',
  },
  {
    q: 'Will it work with our existing switch?',
    a: 'TelcoOS sits on top of your routing layer and reads your CDRs — it’s built to complement the softswitch and class-4 infrastructure you already run.',
  },
  {
    q: 'How long until we’re live?',
    a: 'Most teams are importing decks and seeing margin views within days. The agent’s automations switch on as you grow confident in the guardrails.',
  },
];
