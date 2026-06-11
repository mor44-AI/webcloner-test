# joindawn.com — Behaviors / Interaction Model

Observed during the scroll sweep at 1280×665.

## Global behaviors

- **Scroll-driven text reveal** (HIGH IMPORTANCE) — Every major serif headline appears letter-by-letter / word-by-word as you scroll through it. Evidence: at intermediate scroll positions, headlines like `The future of mental health is…`, `Intuitive`, `Personalized`, `Connected`, `Real…`, `Life…` are seen partially rendered (`"The f"`, `"Intu"`, `"Per"`, `"Con"`, `"Rea"`, `"Li"`). This is NOT viewport-fade-in — letters individually fade in over a scroll range. Implementation candidate: GSAP ScrollTrigger with `SplitText` or CSS `animation-timeline: scroll()` per character. Suggested approach for clone: a `<ScrollRevealText>` component that maps progress (0..1 for the section) to character opacity.
- **Hero text fade-in** (~0–800px scroll) — At scroll=0 the headlines `Your mind is always on.` / `Your support should be, too.` appear letter-by-letter as well, starting partial (`Your mi`) on initial paint and completing within ~600ms. Could be page-load reveal rather than scroll-triggered.
- **Sticky/fixed top nav** — Dawn logo + "How it works" + "Get early access" remain pinned. Their color inverts based on the section behind: light text/icons on dark brown sections, dark text on light cream sections.
- **Rounded section transitions** — Each scrollable section ends with a `border-bottom-radius` so the next section "tucks" under it. Visible at the end of the hero photo card and at the transition between the brown rethink section and the cream testimonials section.

## Per-section interactions

### Hero (`section_home-hero`)
- Headlines render with letter-by-letter reveal animation on page load.
- "Get early access" pill button hover state should brighten the gradient.
- "How it works" anchor likely scrolls to `section_steps`.
- Decorative dotted arc + orange curved arc are static SVG overlays.

### Steps / story (`section_steps`)
- All large serif headlines (`24/7 support for your mind`, `The future of mental health is intuitive`, `Personalized`, `Connected`, etc.) are **scroll-revealed letter-by-letter**.
- The Dawn typing indicator pill (3 dots) likely animates dots.
- Chat bubbles appear via fade/slide as they enter the viewport.
- Wearable logos ring is static; the calendar card is likely a video frame (the `dawn-cards_*` video).

### From past / To the future (`section_rethink`)
- Two-column pill comparison. Pills likely fade/stagger in as you scroll the section.
- Right-column pills ("To the future") highlight/glow more strongly than left ("From the past").
- "Get early access" CTA pill repeated here.

### Testimonials (`section_testimonial`)
- Carousel with prev/next round buttons.
- Center card is active (large, fully opaque). Side cards are rotated and blurred/faded for depth.
- Interaction model: appears click-driven (prev/next buttons), but could also auto-rotate.

### CTA (`section_cta`)
- Sky photo background. Curved arc graphic. Letter-by-letter headline reveal.
- Single CTA button at bottom.

### FAQ (`section_faq`)
- Standard accordion. Each item has a peach circular `+` button on the right that toggles to `−` when open.
- Initial state appears all collapsed (when reached).
- The full HTML text contains all answers (so they're in the DOM, just visually collapsed).

## Responsive behaviors (NOT yet captured)

- Need to test at 768px and 390px viewport widths to capture column → stack changes.

## Decorative graphics that span sections

- Dotted concentric arcs (`circle-*.svg`) appear in the hero AND fade in the brown 24/7 section.
- The orange/white curved arc graphic appears in the hero (around the portrait) AND again in the bottom CTA sky scene — visual rhyme.

## What I still need before dispatching builders

- Per-section computed-style snapshots (`getComputedStyle` on headline, button, card containers).
- Confirmed interaction mechanism for the testimonial carousel (auto-rotate vs click only).
- Tab/state inventory for the rethink "From past / To the future" panel (is it tabbed, or just two parallel columns?).
- Mobile-width screenshots and DOM diffs.
