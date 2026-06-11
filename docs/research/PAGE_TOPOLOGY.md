# joindawn.com — Page Topology

Reconnaissance captured at desktop 1280×665 (viewport reported during JS extraction).
Total page height: **9699px** (`scrollH`).

## DOM-level section breakdown

Discovered from `[...document.querySelectorAll('section')]`:

| # | DOM class            | Top (px) | Height (px) | Working name              |
|---|----------------------|----------|-------------|---------------------------|
| 0 | `section_home-hero`  | 0        | 3082        | Hero + opening narrative  |
| 1 | `section_steps`      | 2378     | 3676        | Story / "how it works"    |
| 2 | `section_rethink`    | 5974     | 1136        | From past / To the future |
| 3 | `section_testimonial`| 7031     | 1246        | Testimonials carousel     |
| 4 | `section_cta`        | 8196     | 650         | Final CTA (sky scene)     |
| 5 | `section_faq`        | 8766     | 787         | FAQ accordion + footer    |

(Sections overlap because of negative margins / sticky / rounded-edge cutouts between sections — the next section "tucks under" the previous via a curved rounded-bottom mask.)

## Visual order of stories within `section_home-hero` + `section_steps`

The page tells a serial scroll-driven story. Going top → bottom:

1. **Hero split-screen** (~0–700px) — Left: peach→orange gradient with dotted curved arc, headline *"Your mind is always on."*. Right: portrait of smiling woman + sky, headline *"Your support should be, too."*. Logo top-left ("Dawn" wordmark with sun icon), top-right nav ("How it works" link + "Get early access" pill button gradient).
2. **24/7 support callout** (~700–1400px) — Dark warm-brown background, large serif `24/7 support for your mind`, body paragraph beneath, golden curved arc on left, dotted arc on right.
3. **Dark→orange gradient transition** (~1400–2100px) — Color shifts brown → orange.
4. **"The future…" reveal** (~2100–2800px) — Scroll-triggered word-by-word reveal of section headline (`The future of mental health is…`) on saturated orange. Sub headline `Intuitive` appears later in scroll.
5. **Chat demo 1: Proactive check-in** (~2800–3500px) — Peach gradient bg, large orange chat bubble *"Good morning, Ashley. How are you feeling today? How did your conversation with your mom go yesterday?"* + Dawn typing indicator pill.
6. **Chat demo 2: User message** (~3500–4200px) — Cream bg, user bubble *"It's been a long, stressful day, and I can't turn my mind off…"*, vertical line dropping to row of 3 photo avatars (silhouettes).
7. **Personalized continuation + headline `Personalized`/`Connected`** (~4200–4900px).
8. **Wearable integration** (~4900–5600px) — Floating Dec 2025 mood-calendar card on left, ring of wearable brand logos (Garmin, Apple, Fitbit/dots, 8, Whoop, Oura), and on right a Dawn message *"You've got 10 minutes until you go into your meeting, and it looks like your heart rate is elevated."* followed by *"Want to focus on getting grounded and focused with a 5-minute breathing exercise?"* and a "Breathing exercise" thumbnail card.
9. **Expert profiles** (~5600–6300px) — Headline plus 4 expert cards (Karmel Choi, PhD · Wendy Mendes, PhD · Tom Insel, MD · Ripal Shah, MD, MPH) with photo, name, title, small verified badge.
10. **`section_rethink` — From past / To the future** (~6300–7100px) — Dark brown background, headline `The …`, "Get early access" CTA button, then two-column comparison of pill tags. Left column "From the past": WEEKLY SESSIONS · SNAPSHOTS · MANAGING CRISIS · ONE-SIZE-FITS ALL · HUMAN BIASES. Right column "To the future": 24/7 SUPPORT · REAL-TIME GUIDANCE · BUILDING RESILIENCE · PERSONALIZED PROGRAMS · JUDGMENT FREE. Pills appear scroll-staggered; some have a soft glow/highlight.
11. **`section_testimonial`** (~7100–8200px) — Cream textured paper background, headline `Real…` + subhead *"See how Dawn helps others, and find out what it can do for you."*. Center large card (active) + side cards (peeking, blurred/rotated). Prev/next round buttons below. ~20 testimonial quotes (rotating).
12. **`section_cta`** (~8200–8800px) — Blue sky photo background with arcing orange/white curved line, large serif headline `Li…` (likely "Life can be more"), CTA button.
13. **`section_faq`** (~8800–9699px) — Cream paper bg, left column `Here are a few things you might be wondering.` serif headline, right column 5-item accordion: *Who can benefit from Dawn?* · *Is Dawn meant to replace therapy, medication or crisis support?* · *How does Dawn keep my information private?* · *Do I need to integrate my calendar and/or wearable for Dawn to work?* · *Who developed Dawn?* Each row has a soft peach `+` toggle button on the right.
14. **Footer** (under FAQ, dark brown bar) — `© 2026 Sword Health, Inc. All rights reserved.` Terms and Conditions · Privacy Notice · Cookie Preferences · Consumer Health Data Privacy Notice.

## Global / cross-section UI

- **Fixed/sticky top nav**: "Dawn" logo (sun + wordmark) on left, "How it works" anchor link and "Get early access" gradient pill button on right. The text/logo color inverts between light-on-dark (over brown sections) and dark-on-light (over cream/peach sections). Position appears `fixed`/sticky over hero.
- **Background section transitions** use rounded-bottom masks — each section has a `border-bottom-radius` so the next section "peeks" into it.

## Z-index notes

- Sticky nav top
- Decorative dotted arcs and curved gradient lines float across multiple sections (some break out of the section borders).

## Fonts

- **Serif (display headings)**: Source Serif Pro (`SourceSerifPro_Regular-s.p.[hash].woff2` preloaded).
- **Sans (body, UI, pill tags, FAQ questions)**: Figtree (`Figtree_VariableFont_wght-s.p.[hash].ttf` preloaded).

## Asset inventory (paths only, dpl tokens stripped)

### Static SVGs (decorative)
- `/images/circle-1.svg`, `/images/circle-2.svg`, `/images/circle-8.svg`, `/images/circle-9.svg` — dotted concentric/quarter arcs
- `/images/rotate-me-4.svg` — solid curved arc segment
- `/images/Group-8.svg`, `/images/Group-8-2.svg` — wearable brand logo grouping (multi-circle composition)

### Photos (Next/Image-served AVIF)
- `/images/gradient.avif` — left hero gradient backdrop
- `/images/image-bottom-2.avif` — final CTA sky/portrait image
- `/images/Ellipse-105.avif`, `/images/Ellipse-105_1.avif`, `/images/Ellipse-105-1.avif` — 3 avatar circles under the user chat bubble
- `/images/Karmel.avif`, `/images/ripal.avif` — expert photos (Karmel Choi, Ripal Shah)
- `/images/d2f7e14f61d96ef56bde8c74ae676f3a24373acc.avif`, `/images/96ec744e4d4e84a2e6df3efe202eeda699e4d245.avif` — remaining expert photos (Wendy Mendes, Tom Insel)
- One additional hero portrait of the smiling woman (served via `/_next/image` with hashed source) — needs separate download.

### Videos (background, autoplay/muted/loop)
- `/videos/dawn-cards_smaller_mp4.mp4`
- `/videos/dawn-cards_smaller_webm.webm`
- `/videos/dawn-cards_smaller_poster.0000000.jpg`

The video plays twice in the page (two `<video>` elements with same source). It likely shows animated calendar/chat cards.

## Layout / scroll behavior

- Page is a tall vertical scroll container. The text in headlines (e.g. `Your mind is always on.`, `24/7 support for your mind`, `The future of mental health is…`) is revealed letter-by-letter or word-by-word, tied to scroll position. This is GSAP-style or `animation-timeline: scroll()` style scroll-linked animation.
- Sections separate via rounded bottom corners that mask the next section.
- The blue sky CTA section has a curved arc graphic that seems to be the orange line from the hero — possibly the same SVG repositioned, or the same path object animating across the page (visual continuity bookends the page).
