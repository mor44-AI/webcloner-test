# ExpertSection spec

- **Target file:** `src/components/ExpertSection.tsx`
- **Interaction model:** static layout.

## DOM
`<section>` → intro paragraph (centered, `SCIENCE_COPY` from `data.ts`) → grid of 4 expert cards.

## Grid
- `grid-cols-1` mobile · `sm:grid-cols-2` tablet · `lg:grid-cols-4` desktop, gap-5.

## Card
- Rounded 28px, light cream-2 / 60% opacity backdrop blur.
- Photo: 140×140 circular, with `<VerifiedBadge>` (orange shield + check) overlapping bottom-right (h-8 w-8).
- Name: serif 2xl.
- Title lines: 2 small ink-muted paragraphs.

## Data
`EXPERTS` array in `src/lib/data.ts`. Photo paths map to:
- Karmel Choi → `/images/Karmel.avif`
- Wendy Mendes → `/images/d2f7e14f61d96ef56bde8c74ae676f3a24373acc.avif` (inferred from order on the live site)
- Tom Insel → `/images/96ec744e4d4e84a2e6df3efe202eeda699e4d245.avif`
- Ripal Shah → `/images/ripal.avif`
