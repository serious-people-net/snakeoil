---
applyTo: "**"
---

# Snake Oil & Gas - Project Instructions

## Project Overview
A satirical one-page website styled as a vintage "Snake Oil" advertisement. It highlights how some ad agencies working in healthcare also work for fossil fuel companies.

## Tech Stack
- **Framework**: Astro (static site)
- **CSS**: Tailwind CSS 4 (uses `@theme` directive, NOT Tailwind 3 `tailwind.config.js`)
- **Fonts**: Verve (local, headlines), Libre Baskerville (Google Fonts, body)
- **Deployment**: GitHub Pages via GitHub Actions at `seriouspeople.co/snakeoil`

## Design
- Vintage / old-fashioned print ad aesthetic
- Paper texture overlay with sepia-toned background (`#f5f0e8`)
- Ink colour `#00212B` (slightly faded, not pure black)
- Double border (thin outer, thick inner) around main content
- No emojis. No references to satire on the page itself.

## Key Files
- `src/styles/global.css` — Tailwind 4 theme config, font-face declarations
- `src/layouts/Layout.astro` — Base layout with meta tags, analytics
- `src/pages/index.astro` — The single page
- `public/font/Verve/` — Verve web font files
- `src/assets/` — Images (snakeoil.gif, snake.png, paper.png)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build static site
- `npm run preview` — Preview build

## Conventions
- Use Astro's `<Image>` component for optimised images
- Keep it minimal — one page, no overengineering
- Tailwind 4 practices only (no `tailwind.config.js`, use `@theme` in CSS)
