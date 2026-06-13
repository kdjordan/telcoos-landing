# telcoos-landing

Static marketing landing page for **telcoos.io** — a single self-contained
`index.html` (no build step, no framework). Brand fonts (Unbounded + Inter)
load from Google Fonts; everything else is inline.

## Deploy (Coolify)

The app itself lives on `emp.telcoos.io`; this is the public landing page on
`telcoos.io`.

- **Easiest:** new Coolify resource → **Static Site** type → connect this repo →
  serves `index.html` from the repo root. Set domains to
  `https://telcoos.io,https://www.telcoos.io`.
- **Or:** **Dockerfile** type → uses the included `Dockerfile` (nginx serving the
  file on port 80).

Then remove `telcoos.io` / `www.telcoos.io` from the app resource so Coolify
routes them here. No DNS change needed — `telcoos.io` already points at the box.

## Editing

It's one file. Edit `index.html` and redeploy. Update the contact address
(`k.dean.jordan@gmail.com`) to a mailbox that actually forwards.
