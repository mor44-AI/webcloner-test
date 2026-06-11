import type { SVGProps } from "react";

/**
 * Small Bravo "B" lettermark used in the fixed header.
 * 30x30 box, 1px copper border, Fraunces "B" centred. Matches the DWI cover
 * treatment locked in deep-water-intelligence-skill/SKILL.md.
 */
export function BravoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center font-serif ${className}`}
      style={{
        width: 30,
        height: 30,
        border: "1px solid var(--bravo-accent)",
        color: "var(--bravo-accent)",
        fontSize: 18,
        lineHeight: 1,
      }}
    >
      B
    </span>
  );
}

/**
 * Large Bravo "B." used as the hero glyph. Copper B with a blue period,
 * matching the DWI Issue 02 back-cover treatment (line 446):
 *   <div class="disp" style="font-size:120px;color:var(--accent);">
 *     B<span style="color:var(--blue);">.</span>
 *   </div>
 */
export function BravoMarkLarge({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`inline-block font-serif leading-none ${className}`}
      style={{
        fontSize: size,
        color: "var(--bravo-accent)",
      }}
    >
      B<span style={{ color: "var(--bravo-blue)" }}>.</span>
    </span>
  );
}

/** Plus icon. FAQ accordion toggle (closed state). */
export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Minus icon. FAQ accordion toggle (open state). */
export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Right-arrow used in CTA pills and "Read issue →" links. */
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Chevron-left. Kept for any future carousel use. */
export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Chevron-right. Kept for any future carousel use. */
export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Depth-line motif. The dashed horizontal rules seen on DWI cover pages.
 * Static decorative SVG, scales to its container.
 */
export function DepthLines({ className = "" }: { className?: string }) {
  const lines = [10, 22, 36, 52, 70, 88];
  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {lines.map((y, i) => (
        <line
          key={i}
          x1="0"
          x2="200"
          y1={y}
          y2={y}
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity={0.15 + i * 0.08}
          strokeDasharray={i % 2 === 0 ? "6 4" : "2 4"}
        />
      ))}
    </svg>
  );
}
