/**
 * Decorative water-depth gauge running down the left edge of the ocean
 * wrapper. Marks are distributed top (surface) to bottom (abyss) across the
 * full height of the post-hero page, so scrolling down reads as descending.
 * Purely visual: pointer-events-none, aria-hidden, hidden below md.
 */
const MARKS = ["0 m", "200 m", "1 km", "2 km", "4 km", "6 km"];

export function DepthGauge() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 hidden w-16 flex-col justify-between py-32 pl-4 md:flex"
    >
      {MARKS.map((m) => (
        <div key={m} className="flex items-center gap-2">
          <span className="block h-px w-3 bg-[var(--bravo-cream)]/40" />
          <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--bravo-cream)]/45">
            {m}
          </span>
        </div>
      ))}
    </div>
  );
}
