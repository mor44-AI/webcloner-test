# TestimonialsSection spec

- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** **click-driven carousel** via prev/next round buttons (NOT auto-rotating; NOT scroll-driven). Confirmed from the live site's static screenshot at scrollY ~7700 where the prev/next round buttons are visible at the bottom.

## Layout
- Background: `.bg-dawn-paper` (cream + warm radial accents).
- Centered headline (`TESTIMONIALS_HEADLINE`) revealed letter-by-letter + subhead.
- Carousel: 5 cards shown simultaneously — offsets -2, -1, 0, +1, +2.
- Center card (offset 0) is upright, fully opaque, larger serif type.
- Side cards rotate `±6deg` per distance, scale down 6%/step, opacity 0.6/0.35, blur up to 3px.

## Prev/Next
- Round 48px buttons, cream-2 fill, chevron icons in ink color.
- Click decrements/increments active index (mod length of `TESTIMONIALS`).

## Data
`TESTIMONIALS` array (20 quotes) in `data.ts`.
