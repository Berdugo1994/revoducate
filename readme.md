# REVODUCATE — Company Website

> **"Learning Is Personal"**

A single-page marketing website for [REVODUCATE](https://revoducate.matrixlms.com/), a personalized learning company. Built with Next.js 16 App Router, Tailwind CSS v4, and shadcn/ui.

**Created by:** Eden Berdugo

---

## Overview

The site is a smooth-scrolling single page with four sections reachable via the sticky header navigation:

| Section | Anchor | Description |
|---------|--------|-------------|
| Hero | `#hero` | Centered logo, welcome title, subtitle, and company description |
| Our Path | `#our-path` | Vertical timeline of 6 milestone steps |
| Who We Are | `#who-we-are` | Team grid with photos/initials, names, titles, and optional links |
| Contact Us | `#contact-us` | Contact form with name, phone, and email fields |

---

## Getting Started

```sh
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```sh
npm run build
npm start
```

---

## Editing Content

All user-facing copy lives in a single file: [`app/translations/en.json`](app/translations/en.json)

| Key | What it controls |
|-----|-----------------|
| `Nav` | Header navigation link labels |
| `Landing` | Hero title, subtitle, and description |
| `OurPath.title` | "Our Path" section heading |
| `Timeline.step.1–6` | Timeline step titles and descriptions |
| `WhoWeAre.title` | "Who We Are" section heading |
| `WhoWeAre.team.1–6` | Placeholder team member names and titles |
| `ContactUs` | Contact section heading, subtitle, field labels, and button text |

---

## Team Members

Team members are defined in [`app/page.tsx`](app/page.tsx) inside the `teamMembers` array. Each member supports:

```ts
{
  name: string        // displayed name
  title: string       // job title
  credential?: string // optional extra line (e.g. academic title)
  image?: string      // path to photo in /public (falls back to initials avatar)
  link?: string       // optional URL — clicking the avatar opens this in a new tab
}
```

**Example — adding a new member with a photo and LinkedIn:**
```ts
{ name: 'Jane Doe', title: 'Head of Design', image: '/jane-doe.png', link: 'https://linkedin.com/in/janedoe' }
```

Place portrait photos in the [`public/`](public/) folder.

---

## Logo & Favicon

| File | Usage |
|------|-------|
| `public/revoducate-logo.png` | Stacked logo on the hero (landing section) |
| `public/revoducate-logo-horizontal.png` | Horizontal logo in the sticky header |
| `public/revoducate-icon.png` | Standalone coral swirl icon |
| `app/favicon.ico` | Browser tab favicon (coral swirl) |
| `app/icon.png` | Next.js app icon (same coral swirl) |

To update branding, replace the PNG files above.

---

## Brand Colors

Defined as CSS tokens in [`styles/globals.css`](styles/globals.css):

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-revoducate-coral` | `#FF7F6F` | Accents, timeline icons, primary button |
| `--color-revoducate-sage` | `#6B9080` | Headings, nav active state, focus rings |
| `--color-revoducate-charcoal` | `#4A4A4A` | Body text |
| `--color-revoducate-bg` | `#FFFFFF` | Page background |

The shadcn `--color-primary` token is mapped to coral, so all shadcn `Button` components automatically use the brand color.

---

## Contact Form

The form in [`components/contact-form.tsx`](components/contact-form.tsx) uses shadcn `Input`, `Label`, and `Button`. The `handleSubmit` function is stubbed for implementation:

```ts
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // TODO: implement submit logic (e.g. send to an API route or email service)
}
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Next.js](https://nextjs.org/) | 16 (App Router) | Framework |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | latest (base-nova) | UI components |
| [next-intl](https://next-intl.dev/) | 4 | Copy/i18n management |
| [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component) | 3 | Our Path timeline |
| [react-icons](https://react-icons.github.io/react-icons/) | latest | Timeline step icons (Phosphor) |

---

## Project Structure

```
app/
  favicon.ico                  # Browser tab icon
  icon.png                     # Next.js app icon
  layout.tsx                   # Root layout — header, fonts, metadata
  page.tsx                     # Single-page home (all 4 sections)
  not-found.tsx                # 404 page
  our-path/page.tsx            # Standalone /our-path route
  who-we-are/page.tsx          # Standalone /who-we-are route
  contact-us/page.tsx          # Standalone /contact-us route
  translations/
    en.json                    # All user-facing copy

components/
  site-header.tsx              # Sticky header with scroll-aware nav
  revoducate-logo.tsx          # Logo component (stacked | horizontal variants)
  our-path-timeline.tsx        # Client-side vertical timeline
  team-grid.tsx                # Team member cards with avatar/photo
  contact-form.tsx             # Contact form (shadcn components)
  ui/                          # shadcn/ui components
    button.tsx
    input.tsx
    label.tsx
    separator.tsx

lib/
  utils.ts                     # cn() helper for shadcn

public/
  revoducate-logo.png          # Stacked logo
  revoducate-logo-horizontal.png
  revoducate-icon.png
  moshe-fekler.png             # CEO photo

styles/
  globals.css                  # Tailwind v4 + brand tokens + timeline overrides
```
