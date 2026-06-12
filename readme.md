# REVODUCATE Website

A simple marketing site for **REVODUCATE** — a personalized learning company. Built with Next.js App Router as a lightweight template with three pages.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with centered logo, welcome message, and company description |
| `/our-path` | Vertical timeline showing REVODUCATE's journey (6 steps) |
| `/who-we-are` | Team grid with avatar initials, names, and titles |

## Getting Started

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```sh
pnpm build
pnpm start
```

## Editing Content

All user-facing copy lives in [`app/translations/en.json`](app/translations/en.json):

- **Nav** — navigation link labels
- **Landing** — hero title, subtitle, and description
- **OurPath** — page title
- **Timeline.step** — timeline step titles and descriptions (keys `1`–`6`)
- **WhoWeAre** — page title and team members (keys `1`–`6`, each with `name` and `title`)

## Logo Files

| File | Usage |
|------|-------|
| `public/revoducate-logo.png` | Stacked logo on the landing page |
| `public/revoducate-logo-horizontal.png` | Horizontal logo in the site header |

Replace these PNG files to update branding. The stacked logo includes the tagline *"Learning Is Personal"*.

## Brand Colors

Defined in [`styles/globals.css`](styles/globals.css):

| Color | Hex | Usage |
|-------|-----|-------|
| Coral | `#FF7F6F` | Accents, timeline icons |
| Sage | `#6B9080` | Headings, nav active state |
| Charcoal | `#4A4A4A` | Body text |

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) — internationalization
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component) — Our Path timeline

## Project Structure

```
app/
  layout.tsx          # Root layout with header nav
  page.tsx            # Landing page
  our-path/page.tsx   # Timeline page
  who-we-are/page.tsx # Team page
  translations/en.json
components/
  site-header.tsx
  revoducate-logo.tsx
  our-path-timeline.tsx
  team-grid.tsx
public/
  revoducate-logo.png
  revoducate-logo-horizontal.png
```
