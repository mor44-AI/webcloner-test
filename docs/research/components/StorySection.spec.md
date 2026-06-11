# StorySection spec

- **Target file:** `src/components/StorySection.tsx`
- **Interaction model:** scroll-revealed letter-by-letter on each headline as it enters the viewport (per-chapter `<RevealText>` components).

## Chapters
Four stacked chapters share a single brown→orange→cream vertical gradient background (`.bg-dawn-brown-to-orange` then `.bg-dawn-orange-to-cream` for the lower two).

1. **Chapter 1 — 24/7 callout**
   - Heading: `24/7 support for your mind` (clay orange on brown bg).
   - Decorative SVGs: `rotate-me-4.svg` (golden curve) left, `circle-9.svg` (dotted arc) right.
   - Body paragraph in cream.

2. **Chapter 2 — Intuitive**
   - Two stacked headlines: `The future of mental health is` regular, then italic `Intuitive` larger.
   - Followed by body paragraph + Dawn chat bubble + typing-indicator pill.
   - Chat bubble uses `.bg-dawn-pill` gradient.

3. **Chapter 3 — Personalized**
   - User chat bubble (cream) → vertical line → 3 ellipse avatars (`Ellipse-105*.avif`).
   - Italic headline `Personalized` + body.

4. **Chapter 4 — Connected (wearables)**
   - Two-column grid.
   - Left: mock calendar card (Dec 2025 mood-dot grid built from 7×5 colored dots) + wearable brand ring (`Group-8-2.svg`).
   - Right: stacked Dawn chat bubbles, second bubble embeds an autoplay/loop/muted `<video>` (`dawn-cards_smaller_*.{webm,mp4}` + poster).
   - Italic headline `Connected` + body below.

## States
None per-chapter — purely scroll-revealed enter animations on the headlines.
