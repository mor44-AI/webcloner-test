# RethinkSection spec

- **Target file:** `src/components/RethinkSection.tsx`
- **Interaction model:** static (NOT tabs — two parallel columns shown side-by-side).

## Layout
- Background: solid `var(--dawn-brown-deep)`, `section-tuck-lg` rounded bottom.
- Centered headline (`RETHINK_HEADLINE`) revealed letter-by-letter.
- Centered "Get early access" CTA pill below headline.
- Two-column comparison below: left column `From the past` italic header + 5 outlined pills; right column `To the future` italic header + 5 filled cream pills with soft glow halo.

## Pills
- Past: transparent fill, outlined in `var(--dawn-orange-deep)`, text same orange-deep.
- Future: cream/95 fill, text orange-deep, soft shadow + radial-glow background behind the column.

## Data
`RETHINK_PAST`, `RETHINK_FUTURE` from `data.ts`.
