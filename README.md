# isaacfrett.com

Personal portfolio. React + TypeScript, built with Vite, served by GitHub Pages at
[isaacfrett.com](https://isaacfrett.com).

## The idea

Every claim on the page is paired with the artefact that settles it — a repository, a live site,
a screenshot, the résumé. Where there is no receipt, the claim doesn't go on the page. Employment
history is the one section that can't be settled by a public link, so it says so and points at the
résumé and LinkedIn rather than pretending otherwise.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then bundle to dist/
npm run preview  # serve the built output
npm run lint
```

## Where the content lives

All copy is data, not markup. To change what the site says, edit these and nothing else:

| File | What it holds |
|---|---|
| `src/data/profile.ts` | Name, contact details, headline, the hero ledger, the skills groups |
| `src/data/projects.ts` | The six featured projects, their highlights and receipts, plus the earlier repositories |
| `src/data/experience.ts` | Jobs, education, and the experience lede |
| `src/types.ts` | The shapes those three files fill in |

Swapping the résumé means replacing `public/Isaac_Frett_Resume.pdf`. The filename is referenced in
`src/data/profile.ts`, so keep it or change it in both places.

## Design notes

- **Palette** is taken from the quant platform's own dashboard, so the site and the product read as
  one hand. Colour is categorical rather than decorative: blue is interactive, green is verified,
  amber is a shipped product surface. Every coloured pip is paired with a word, so the meaning never
  depends on seeing the hue.
- **Type** is Bricolage Grotesque (display), Instrument Sans (body) and JetBrains Mono (data),
  self-hosted through the bundle. No external font request, so the page makes no third-party call
  at all.
- **Motion** is limited to three things that each carry information: the hero values resolving the
  way a readout populates, rows expanding in place, and a FLIP transform on the work filter so the
  re-ranking is visible rather than instantaneous. All of it is skipped under
  `prefers-reduced-motion`.

## Deploying

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to Pages. It
needs **Settings → Pages → Source: GitHub Actions** set once on the repository.

`public/CNAME` holds the custom domain and `public/.nojekyll` stops Pages running the output
through Jekyll. Vite copies both into `dist/` verbatim.
