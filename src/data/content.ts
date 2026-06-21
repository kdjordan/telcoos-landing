// Landing page content. Single source for both the rendered sections and the
// JSON-LD structured data. See CONTEXT.md for the locked positioning + the hard
// current-vs-roadmap line. Keep stack internals, switch names, and storage format
// OFF the page (outcomes only).

export const site = {
  name: 'TelcoOS',
  tagline: 'Agentic Workspace for Telecom',
  description:
    'TelcoOS is an agentic chat workspace for telecom. It pulls straight from your switch, runs the heavy data analysis your laptop can’t, and builds the rate decks, dashboards, and reports your desk needs — on your command, with the AI provider of your choice.',
  contactEmail: 'ahoy@telcoos.io',
};

export const nav = [
  { href: '/#workspace', label: 'Workspace' },
  { href: '/#how', label: 'How it works' },
  { href: '/#caps', label: 'Capabilities' },
  { href: '/#roadmap', label: 'Roadmap' },
];

export const trust = ['Voice wholesalers', 'Termination providers', 'Aggregators'];

// THE WORKSPACE — main thrust. Heading carries the core idea: find the signal.
export const workspace = {
  heading: 'Find the signal in the noise.',
  lead: 'Telecom margin hides in millions of records spread across a dozen reports. TelcoOS pulls straight from your switch, runs the heavy analysis your laptop can’t, and hands back the answer — and the artifact — just by asking. The soul of an operator, the reach of a data scientist.',
  bullets: [
    { lead: 'Ask in plain language', rest: ' — it already knows the domain (ASR, ALOC, release causes) and turns your question into the analysis.' },
    { lead: 'Pulls straight from your switch', rest: ' — routing, CDRs, and backend data, with no manual exports.' },
    { lead: 'Crunches what Excel can’t', rest: ' — gigabyte CDRs and tens of millions of records, reduced to a clear read.' },
    { lead: 'Builds the artifact, not just the answer', rest: ' — rate decks, dashboards, target sheets, and reports.' },
  ],
};

// HOW IT WORKS — three plain steps, current product.
export const steps = [
  { n: '01', icon: 'route', title: 'Connect your switch', body: 'Point it at the switch platforms you run. The shipped skills already know their APIs and pull routing, CDRs, and backend data out of the box.' },
  { n: '02', icon: 'shield', title: 'Bring your AI', body: 'Run it on the AI provider you trust, picked per task. Your data and your keys stay with your provider.' },
  { n: '03', icon: 'chart', title: 'Just ask', body: 'Give it a question or an objective — it runs the analysis and builds the artifact, on your command.' },
];

export const caps = [
  { icon: 'chart', title: 'Crunches data your laptop can’t', body: 'Gigabyte CDRs and 50M+ records, pulled straight from your switch. No exports, no Excel ceiling.' },
  { icon: 'tag', title: 'Builds the real artifacts on demand', body: 'Optimal rate decks, per-NPANXX target sheets, weekly growth emails, and a daily profitability dashboard that beats your switch’s own — just by asking.' },
  { icon: 'route', title: 'Ships with an operator’s brain', body: 'Already knows your switch’s APIs and the domain — ASR, ALOC, release causes — so it works out of the box.' },
  { icon: 'refresh', title: 'LLM- and switch-agnostic', body: 'Bring the AI provider you trust; run on the switch platforms you already use. No lock-in on either.' },
  { icon: 'plus', title: 'Extensible with your own skills', body: 'Teach it a repeatable workflow once and reuse it forever. It’s not locked to anyone else’s preferences.' },
  { icon: 'bell', title: 'Surfaces what needs attention', body: 'A sweep of live traffic flags the issues and suggests the routing moves. You make the call.' },
];

// IN ACTION — a real, CURRENT session (founder does this daily). Proof, not roadmap.
export const story = {
  lead: 'A brand-new customer trunk went live and immediately started failing ~80% of its calls. By the numbers, a disaster. In under an hour, TelcoOS:',
  steps: [
    { lead: 'Pulled the trunk’s live vendor breakdown', rest: ' even though it wasn’t in the standard mappings.' },
    { lead: 'Found the top routing vendor rejecting 99% of calls', rest: ' — 986 of 1,000 sampled records came back as congestion.' },
    { lead: 'Read the routing config', rest: ' and saw the trunk’s entire economics were built around that one dead vendor.' },
    { lead: 'Diffed cost vs sell across 31 decks and 191,016 NPANXXs', rest: ' — proving the footprint 99.6% profitably coverable. The problem was never pricing; it was mis-stocked routing.' },
    { lead: 'Named the replacement and tracked the recovery', rest: ' — completion on the live slice climbed from ~1.5% toward double digits within the hour.' },
  ],
  outcome: 'All on command — pulled, crunched, and proven before the second coffee.',
};

// ROADMAP — the autonomy layer + compounding memory. In active development.
export const roadmap = {
  intro: 'Today you run the sweep and make the call. Next, TelcoOS runs the loop itself — and remembers everything it learns about your operation.',
  items: [
    { title: 'Autonomous traffic management', body: 'The sweep, unattended: it watches live traffic, flags the issue, and acts within the guardrails you set.' },
    { title: 'A self-learning memory', body: 'A curated memory that survives every session, so it boots each morning already knowing your whole operation.' },
    { title: 'Self-driving optimization', body: 'From answering your questions to running the desk — continuous re-pricing and re-routing toward the margin you set.' },
  ],
};

export const faqs = [
  {
    q: 'How does it handle data too big for Excel?',
    a: 'It pulls straight from your switch and runs the analysis itself — gigabyte CDRs and tens of millions of records reduced to a clear read. Nothing to export, no spreadsheet to crash.',
  },
  {
    q: 'Which AI providers and switches does it work with?',
    a: 'Your choice on both. TelcoOS is LLM-agnostic — bring the provider you trust and pick the model per task — and ships with connectors for popular switch platforms, with more on the way.',
  },
  {
    q: 'What can I actually build with it?',
    a: 'Rate decks, vendor target sheets, growth emails, profitability dashboards, and one-off analyses — just by asking. It ships knowing the domain, and you can teach it your own repeatable workflows as skills.',
  },
  {
    q: 'Is it autonomous?',
    a: 'Not yet — and that’s deliberate. Today you drive: you ask, it does the work and shows it. Autonomous monitoring and a self-learning memory are in active development; for now every action is on your command.',
  },
];
