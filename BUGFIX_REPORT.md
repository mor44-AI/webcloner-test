# Bravo Energy Site — Review & Fix Report

Date: 10 June 2026. Reviewed from `bravo-energy-site.zip`. Fixed project is this folder. `npm run check` (lint + typecheck + build) passes clean. All pages, assets and anchors verified serving 200 on a local server of the static export.

## Fixed

| # | Issue | Severity | Fix |
|---|-------|----------|-----|
| 1 | All three forms (hero subscribe, tender waitlist, quote request) posted to placeholder `formspree.io/f/xxxxxxxx`. Every submission would have been lost. | Blocker | Wired your form `https://formspree.io/f/xzdqvqpj` as the default in all three components. Env vars `NEXT_PUBLIC_FORMSPREE_WAITLIST_URL` / `NEXT_PUBLIC_FORMSPREE_QUOTE_URL` still override at build time. |
| 2 | DWI archive cards linked to `/dwi/issue-01.html` etc. — none of those files existed in the site. All four "READ ISSUE" links were 404s. | Blocker | Copied the four issue HTMLs from your Deep Intelligence folder into `public/dwi/` (Issue 01 = corrected version, 02, 16, 17). They are self-contained, Google Fonts only external dependency. |
| 3 | `ocean.mp4` was 31MB. Cloudflare Pages rejects any file over 25MiB — the deploy would have failed. | Blocker | Re-encoded to 1440px, audio stripped (it plays muted anyway): 13.9MB. |
| 4 | ESLint error in `src/hooks/useReveal.ts` broke `npm run check`. The hook was dead code, imported nowhere. | High | Deleted the file. |
| 5 | Header wordmark flipped to dark ink at scroll positions 901–6300px. The entire post-hero page is dark ocean gradient, so the wordmark went near-invisible mid-page. The hardcoded pixel breakpoints were also wrong on any viewport other than the one they were tuned on. | High | Removed the scroll logic. Wordmark is always cream; the nav pill has its own cream background so its links are unaffected. SiteHeader is now a server component. |
| 6 | `cable-vessel.jpg` 9.4MB, `diver-subsea.jpg` 3.0MB, `platform-sunset.jpg` 1.4MB at original camera resolution. Images are `unoptimized` in static export, so these shipped full size. | Medium | Resized to 1600px wide, JPEG q82, progressive: 446KB / 570KB / 167KB. |
| 7 | `tender-deck.jpg` (9.2MB) referenced nowhere in the codebase. | Medium | Deleted. |
| 8 | `_headers` set `Cache-Control: immutable, max-age=1y` on `/dwi/*`, which would have permanently cached the issue HTML pages in browsers. Corrections (your DWI reviewer workflow produces them) would never reach returning readers. | Medium | Split rule: SVG covers stay immutable, `/dwi/*.html` now `max-age=600`. |
| 9 | Two unused `eslint-disable` directives (AutoplayVideo, OceanBackdrop). | Low | Removed. |

Static export now totals 23MB (was ~50MB).

## Flags — needs your call before launch

| # | Item | Why it matters |
|---|------|----------------|
| 1 | Quote form and waitlist share one Formspree form. | Consultancy leads (name, company, tier, brief) will land in the same inbox stream as newsletter emails. A second Formspree form for quotes keeps the funnel clean. Two-minute job once you create it; set `NEXT_PUBLIC_FORMSPREE_QUOTE_URL` or tell me the ID. |
| 2 | After submitting, users land on Formspree's hosted thank-you page, then have to navigate back. | Default Formspree behaviour on the free tier. Custom redirect needs a paid plan, or I can convert the forms to AJAX submission with an inline confirmation. |
| 3 | Footer Terms / Privacy / Cookies link to `#` (scroll to top). | No legal pages exist. Either write them or drop the links before launch. With two lead-capture forms collecting emails, a privacy page is the one I'd actually do. |
| 4 | No OG image and no `metadataBase`. | Links shared on LinkedIn/WhatsApp render with no preview image. Needs the production domain plus one 1200×630 image. Tell me the domain and I'll set it up. |
| 5 | Archive numbering reads 01, 02, 16, 17. | Issues 16/17 are the companion briefs, but an outside reader sees a 14-issue gap. Content call, not a bug. |
| 6 | `package.json` requires Node >=24. | Cloudflare Pages defaults to an older Node. Set env var `NODE_VERSION=24` in the Pages project settings, or deploy the prebuilt `out/` with `wrangler pages deploy out` and skip CF's build entirely. Builds fine on Node 22 locally, so the constraint is soft. |
| 7 | `WAITLIST_GALLERY` data and the two tender PNGs (3.6MB) are unused — the workspace video replaced the gallery. | Left in place in case you bring the gallery back. Delete `src/lib/data.ts` lines 252–264 and the two PNGs if not. |

## Deploy

```
npm install
npm run check        # lint + typecheck + build → out/
npx wrangler pages deploy out
```

Git history from the zip is preserved; my changes are uncommitted so you can review the diff with `git diff` before committing.

---

# Round 2 — 11 June 2026

All round-1 flags resolved per André's instructions. Committed as `7a8d5f2`.

| # | Change | Detail |
|---|--------|--------|
| 1 | Formspree split | Newsletter (hero subscribe + tender waitlist) → `xbdeaokg`. Consultancy quote → `xzdqvqpj`. Env overrides: `NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL`, `NEXT_PUBLIC_FORMSPREE_QUOTE_URL`. |
| 2 | AJAX forms | New `src/hooks/useFormspree.ts`. All three forms submit via fetch, show inline confirmation in copper mono type, disable the button while submitting, and keep `action`/`method` as a no-JS fallback. No more redirect to Formspree's page. |
| 3 | Footer legal links | Removed entirely (Terms/Privacy/Cookies). |
| 4 | DWI archive | Issues 16/17 removed from data and `public/dwi/`. Archive now shows 02 (featured) + 01. |
| 5 | Node engines | Relaxed `>=24` → `>=20.9` (Next 16 minimum). The old pin meant Cloudflare's default build image would refuse to install. One line, removes the trap permanently. |
| 6 | Unused gallery | `WAITLIST_GALLERY` data + two PNGs (3.6MB) deleted. |
| 7 | Perf | Below-fold workspace video now `preload="metadata"` (saves 3MB on initial load; it still autoplays when scrolled into view). |

## Four-pass review (security / bugs / quality / performance)

Stack note: this is a TypeScript/Next.js static export, no Python backend, no API routes, no auth surface, no database. Passes adapted accordingly.

| # | File | Severity | Finding | Status |
|---|------|----------|---------|--------|
| 1 | package-lock.json | P3 | `npm audit`: postcss <8.5.10 XSS advisory (GHSA-qx2v-qp2m-jg93) via Next's bundled copy. Build-time only; processes our own CSS, never untrusted input. Only fix npm offers is downgrading Next to 9.x. | Accepted risk. Re-check on next Next.js stable. |
| 2 | src/ | — | Secrets scan: no keys, tokens, or credentials hardcoded. Formspree IDs are public by design. | Clean |
| 3 | src/ | — | No `dangerouslySetInnerHTML`, `eval`, or `innerHTML`. | Clean |
| 4 | public/_headers | — | nosniff, referrer-policy, permissions-policy present. | Clean |
| 5 | useFormspree.ts | — | `e.currentTarget` captured before `await` (it is null after, a common React gotcha). | Handled |
| 6 | All | — | `npm run check` (eslint + tsc strict + build) passes with zero warnings. | Clean |

Verified post-change: all routes, both DWI issues, both videos serve 200; no missing refs, no dead anchors, no `href="#"` left; both form actions correct in the built HTML.

## Domain

No restriction. The site is fully domain-agnostic (all paths relative to root). First `wrangler pages deploy out` gives you `bravo-energy.pages.dev` free — usable immediately for testing and even sharing. When you buy the domain, attach it in the Cloudflare Pages dashboard; zero code changes. The only code that wants the domain is `metadataBase` + OG image for link previews — five minutes once you have it.
