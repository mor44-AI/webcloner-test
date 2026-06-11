# HeroSection spec

- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** on-load letter-by-letter reveal (IntersectionObserver-based, fires once when the H1 enters the viewport).

## DOM structure
`<section class="section-tuck-lg">` → grid 1/2 → left rounded panel (sunset gradient) | right rounded panel (portrait + sky).

Each panel contains a single `<RevealText as="h1">` headline + decorative SVG arcs.

## Styles
- Left panel background: `.bg-dawn-sunset` (radial sunset gradient).
- Right panel background: `<Image src="/images/image-bottom-2.avif" fill object-cover>` — same hero portrait the live site uses.
- Both panels: `border-radius: 28–36px`, gap 0.75rem.
- Section background: brown deep (`var(--dawn-brown-deep)`) shows through the gap between panels.

## Reveal animation
Stagger 28ms per character, no `startDelay` on left, +300ms `startDelay` on right so the right headline ripples after the left.

## Decorative assets
- `circle-1.svg`, `circle-2.svg` on left (dotted concentric arcs).
- `rotate-me-4.svg` on right (glowing arc, blended via `mix-blend-screen`).
