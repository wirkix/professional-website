# professional-website

Alois Wirkes' personal portfolio site: a home page, a CV page (`/cv`), and a
project portfolio page (`/portfolio`). Built with Next.js App Router,
TypeScript, Tailwind CSS v4, and Supabase.

Live at: https://professional-website-seven-ebon.vercel.app/

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — theme tokens (colors, fonts) are defined via `@theme`
  in [src/app/globals.css](src/app/globals.css), not a `tailwind.config.js`.
- **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`) — client wired into
  Next middleware, not yet used by any page (see [CLAUDE.md](CLAUDE.md)).
- **ESLint 9** flat config (`eslint.config.mjs`).
- Deployed on **Vercel**.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your Supabase project URL/anon key
npm run dev                         # http://localhost:3000
```

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (this is what Vercel runs)
npm run start    # run the production build locally
npm run lint     # eslint .
npm run cv:pdf   # regenerate public/cv/alois-wirkes-cv.pdf
```

Always run `npm run build` before pushing — it catches JSX/TypeScript errors
that `next dev` won't.

## Project structure

```
src/app/
  layout.tsx          # root layout, metadata
  page.tsx             # home page (hero, bio, social/contact links)
  cv/page.tsx           # CV page (personal info, experience, education,
                         # skills, "Descargar CV en PDF" button)
  portfolio/page.tsx     # portfolio page (project data is inline, still
                         # placeholder — see CLAUDE.md)
  globals.css            # Tailwind v4 theme tokens (brand-* / accent-* colors)
src/components/
  Header.tsx              # shared nav: internal links (Inicio/CV/Portafolio)
                           # + external links (LinkedIn/Upwork/GitHub)
src/lib/supabase/
  client.ts                # browser Supabase client (createBrowserClient)
  server.ts                 # server-side Supabase client (createServerClient)
  ssr.ts                     # updateSession() — cookie-sync logic shared
                             # with middleware
src/middleware.ts            # runs updateSession() on every non-static request
public/
  images/alois-wirkes.jpg     # profile photo, used on the home page and CV page
  cv/alois-wirkes-cv.pdf       # downloadable CV PDF served by the CV page
scripts/cv-pdf/
  cv.template.html              # source of truth for the CV PDF's content/design
  generate.mjs                  # renders the template to PDF via headless
                                 # Chrome/Edge — run with `npm run cv:pdf`
```

## The CV PDF

The "Descargar CV en PDF" button on `/cv` links to a static file at
`public/cv/alois-wirkes-cv.pdf`. That file isn't hand-edited — it's rendered
from [scripts/cv-pdf/cv.template.html](scripts/cv-pdf/cv.template.html) (a
self-contained HTML/CSS resume styled to match the original CV design) via
headless Chrome/Edge's `--print-to-pdf`.

**Whenever you change the CV content on the page (`src/app/cv/page.tsx`),
update `scripts/cv-pdf/cv.template.html` to match, then run:**

```bash
npm run cv:pdf
```

This regenerates `public/cv/alois-wirkes-cv.pdf` in place. The script looks
for Edge or Chrome in their default install locations (Windows/macOS/Linux
paths are all checked); set `CV_PDF_BROWSER=/path/to/browser` if none of
those match on your machine.

## Environment variables

Required (see [.env.local.example](.env.local.example)):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

`.env.local` is gitignored. **These same two variables must also be set in
the Vercel project's Environment Variables settings**, or the middleware
will fail at runtime on every deployed request (see
[CLAUDE.md](CLAUDE.md) for why).

## Deployment

Hosted on Vercel, connected to `origin`
(`github.com/wirkix/professional-website`). Push to `main` to trigger a
deploy. Always confirm `npm run build` passes locally first.

## More context for AI coding agents

See [CLAUDE.md](CLAUDE.md) for known gotchas, Supabase/middleware details,
and what's still placeholder content.
