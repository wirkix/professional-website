# CLAUDE.md

Guidance for Claude Code (and future contributors) working in this repo.

## What this is

Alois Wirkes' personal professional portfolio site: a home page, a CV page
(`/cv`), and a project portfolio page (`/portfolio`). Built with Next.js App
Router, TypeScript, Tailwind CSS v4, and Supabase (client wired up, not yet
used by any page — see "Supabase / auth" below). See
[README.md](README.md) for setup/run instructions aimed at a human.

Home page and CV page content is real (name, bio, experience, education,
skills, contact links — sourced from the owner's CV and LinkedIn export).
The portfolio page's project list is still placeholder data — see "Known
gotchas / history" below.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — theme tokens (colors, fonts) are defined via `@theme`
  in [src/app/globals.css](src/app/globals.css), not a `tailwind.config.js`.
- **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`) for auth/session
  handling, wired into Next middleware.
- **ESLint 9** flat config (`eslint.config.mjs`) using `next/core-web-vitals`
  + `next/typescript` via `FlatCompat`.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (this is what Vercel runs)
npm run start    # run the production build locally
npm run lint     # eslint .
npm run cv:pdf   # regenerate public/cv/alois-wirkes-cv.pdf (see below)
```

**Always run `npm run build` before pushing** — it's the fastest way to
catch what Vercel will fail on (JSX syntax errors, TS type errors, etc.),
and it also runs typecheck + lint-during-build.

## Project structure

```
src/app/
  layout.tsx        # root layout, metadata
  page.tsx           # home page (hero, bio, social/contact links incl. WhatsApp)
  cv/page.tsx         # CV page (personal info, experience, education, skills,
                      # "Descargar CV en PDF" button)
  portfolio/page.tsx  # portfolio page (project data is inline in the file,
                      # still placeholder)
  globals.css         # Tailwind v4 theme tokens (brand-* / accent-* colors)
src/components/
  Header.tsx          # shared nav: internal links (Inicio/CV/Portafolio) +
                      # external links (LinkedIn/Upwork/GitHub)
src/lib/supabase/
  client.ts           # browser Supabase client (createBrowserClient)
  server.ts            # server-side Supabase client (createServerClient, cookies())
  ssr.ts               # updateSession() — cookie-sync logic shared with middleware
src/middleware.ts       # runs updateSession() on every non-static request
public/
  images/alois-wirkes.jpg  # profile photo (home page + CV page)
  cv/alois-wirkes-cv.pdf    # downloadable CV, generated — see "CV PDF" below
scripts/cv-pdf/
  cv.template.html           # source of truth for the CV PDF's content/design
  generate.mjs                # renders the template to PDF via headless
                               # Chrome/Edge (`npm run cv:pdf`)
```

## Supabase / auth

No page currently calls Supabase for anything — `client.ts`/`server.ts` are
unused helpers, presumably staged for a future admin/auth feature. The one
thing that *is* live is `src/middleware.ts`, which runs on **every** request
(matcher excludes only `_next/static`, `_next/image`, `favicon.ico`, and
static image extensions) and calls `supabase.auth.getUser()` via
`updateSession()` in [src/lib/supabase/ssr.ts](src/lib/supabase/ssr.ts).

That means:
- If `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` are missing
  or wrong at runtime, **every page request** can error out via the
  middleware, not just auth-related ones.
- The `setAll` cookie callback in `ssr.ts` must set cookies on *both*
  `request.cookies` and `supabaseResponse.cookies` for each cookie,
  destructuring `{ name, value, options }` per Supabase's documented SSR
  pattern. (This was previously broken — `options` referenced outside the
  loop where it didn't exist — which silently dropped session cookies and
  would also fail TypeScript compilation. Fixed; don't reintroduce it.)

## CV PDF

The "Descargar CV en PDF" button on `/cv` serves a static file at
`public/cv/alois-wirkes-cv.pdf`. That file is **generated, not hand-edited** —
it's rendered from [scripts/cv-pdf/cv.template.html](scripts/cv-pdf/cv.template.html)
(a self-contained HTML/CSS resume matching the original CV design) via
headless Chrome/Edge's `--print-to-pdf`, run by
[scripts/cv-pdf/generate.mjs](scripts/cv-pdf/generate.mjs).

**The template and `src/app/cv/page.tsx` are two independent copies of the
same content — nothing keeps them in sync automatically.** Whenever you edit
one, edit the other to match, then run `npm run cv:pdf` to re-render the PDF
and commit the updated binary alongside the code change. The template uses a
`{{PHOTO_SRC}}` placeholder that the script fills in with a `file://` URL to
`public/images/alois-wirkes.jpg` — don't hardcode an absolute path in the
template itself, it won't be portable across machines.

The script searches default Chrome/Edge install locations across
Windows/macOS/Linux; set `CV_PDF_BROWSER=/path/to/browser` if none match.

## Environment variables

Required (see [.env.local.example](.env.local.example)):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

`.env.local` is gitignored and never reaches GitHub or Vercel automatically.
**These same two variables must be set separately in the Vercel project's
Environment Variables settings** (Project → Settings → Environment Variables)
for Production/Preview, or the middleware will fail at runtime on every
deployed request even though the build itself succeeds.

When editing `.env.local` by hand, double-check the values didn't get
line-wrapped/split across lines — a broken key silently truncates and auth
fails with no build-time signal.

## Known gotchas / history

- **JSX tag mismatches are the most likely build breaker.** `next build`
  fails hard (webpack parse error) on any mismatched open/close tag — this
  has happened before in `cv/page.tsx` (a `<section>` closed with `</div>`).
  Run `npm run build` locally before pushing to catch this immediately.
- `next.config.ts` must `import type { NextConfig } from "next"` — it was
  previously missing, which passes `next build`'s webpack compile step but
  fails the subsequent TypeScript check.
- `eslint.config.mjs` uses the ESLint 9 **flat config** format — no
  `module.exports`, no `extends`/`ignorePatterns` keys. Use
  `FlatCompat(...).extends(...)` and an `{ ignores: [...] }` entry (which
  must include `.next/**`, or `npm run lint` will lint thousands of
  generated files in `.next/types`).
- Image domains are wide open in `next.config.ts`
  (`remotePatterns: [{ hostname: "**" }]`) because the site's images are
  admin-supplied external URLs. Tighten this to specific hostnames if the
  image source ever becomes untrusted/user-supplied.
- `portfolio/page.tsx`'s project list (titles, descriptions, GitHub/demo
  links) is still placeholder data. Each project object also has an `image`
  field pointing at `/projects/*.jpg`, but those files don't exist in
  `public/` and the field isn't actually rendered anywhere — cards show a
  plain "Imagen del proyecto" placeholder `<div>` instead. `page.tsx` and
  `cv/page.tsx` content is real.
- The CV PDF (`public/cv/alois-wirkes-cv.pdf`) is a build artifact of
  `scripts/cv-pdf/cv.template.html`, not source — see "CV PDF" above before
  editing CV content in only one place.

## Deployment

Hosted on Vercel, connected to `origin` (`github.com/wirkix/professional-website`).
Push to `main` to trigger a deploy. Always confirm `npm run build` passes
locally first.
