# williamkruse.ca

React + TypeScript + Vite. Deploys on Vercel. Content lives in one file.

## Run it locally
    npm install
    npm run dev        # http://localhost:5173

## Edit content
Everything is in `src/content.ts`:
- `site` — name, tagline, email, links, about text, hero/portrait/resume paths
- `sections` — CU InSpace, Tripoli L1/L2, Drone Simulation Training (add more the same way)
- `projects` — one entry per project. `date` controls the "latest" ordering on the home page
  and field pages. Set `featured: true` on exactly one project to pin it to the home page.

Search the file for `EDIT` to find text that still needs your words.

## Add photos
Drop files in `public/images/` using the paths already in `content.ts`:
- `public/images/hero.jpg` — home hero (landscape, ~2400px wide)
- `public/images/portrait.jpg` — About page (4:5)
- `public/images/resume-page-1.png` — Resume preview (export page 1 of the PDF as PNG)
- `public/images/sections/cu-inspace.jpg`, `tripoli.jpg`, `drone-sim.jpg`
- `public/images/projects/<slug>.jpg` — one 16:9 cover per project, plus `<slug>-1.jpg` etc. for galleries
- `public/resume.pdf`

Until a file exists, the site shows a labelled placeholder in its place. No code changes needed.

## Font
Cabinet Grotesk, loaded from Fontshare (free for commercial use) in `index.html`.

## Logo
`public/logo/` has the colour and mono marks (with and without the black background).
The nav uses `logo-color-transparent.svg`; the favicon is `public/favicon.svg`.

## Deploy
1. Push this folder to a GitHub repo.
2. In Vercel: New Project → import the repo → Framework preset **Vite** → Deploy.
3. Project → Settings → Domains → add `williamkruse.ca` and `www.williamkruse.ca`.
   Vercel shows two DNS records (an A record and a CNAME). Add them at your domain registrar.
   Propagation is usually minutes, sometimes a few hours.

`vercel.json` already contains the rewrite so deep links like `/projects/…` work on refresh.
