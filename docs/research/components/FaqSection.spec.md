# FaqSection spec

- **Target file:** `src/components/FaqSection.tsx`
- **Interaction model:** **click-driven accordion**, single-open-at-a-time.

## Layout
- Two-column grid: 1fr / 1.4fr at md+, stacked at sm.
- Left: serif headline `FAQ_HEADLINE`.
- Right: 5 accordion rows separated by top borders, last row gets a bottom border.

## Row
- Trigger: full-width button containing question text + circular +/- toggle (peach circle, orange-deep glyph).
- Open state: minus glyph + rotation transform on circle + answer paragraph(s) below.
- Toggle behavior: clicking an open row collapses it; clicking another row collapses the previous one.

## Data
`FAQ_ITEMS` array (5 Q+A) in `data.ts`. The second answer ("Is Dawn meant to replace therapy…") contains paragraph breaks rendered via `.split("\n\n")`.
