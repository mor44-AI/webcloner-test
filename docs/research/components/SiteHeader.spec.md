# SiteHeader spec

- **Target file:** `src/components/SiteHeader.tsx`
- **Interaction model:** scroll-driven tone change (light vs dark variant based on the section currently behind the fixed header). No menu — purely a logo + nav links + CTA pill.

## DOM structure
`<header class="fixed inset-x-0 top-0 …">` → flex row → left: `<DawnLogo>` (sun icon + "Dawn" wordmark) | right: `<nav>` with "How it works" anchor + "Get early access" pill.

## States
- **tone=light** (default, over peach/cream sections): text/icon color `var(--dawn-ink)`.
- **tone=dark** (over brown sections at scrollY 700–2400, 5900–7050, 8100–8800): text/icon color `var(--dawn-cream)`. Transitions in 300ms.

## Notes
The pill is a static gradient (`bg-dawn-pill`) on both tones; only the surrounding nav text inverts.
