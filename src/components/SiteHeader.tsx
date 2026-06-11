import { BravoMark } from "@/components/icons";

/**
 * Fixed top nav. Wordmark on the left, frosted pill-box on the right holding
 * the nav links and the copper CTA. Everything below the hero sits on the
 * dark ocean gradient and the hero itself is dark video, so the wordmark is
 * always cream. The pill keeps its own cream background, so its links stay
 * ink-on-cream regardless of scroll position.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between">
      <a href="#hero" className="inline-flex items-center gap-3 text-[var(--bravo-cream)]">
        <BravoMark />
        <span className="font-mono text-[11px]">BRAVO ENERGY</span>
      </a>

      {/* Frosted pill-box holding nav links + CTA */}
      <nav className="flex items-center gap-1 rounded-full border border-[var(--bravo-line)]/60 bg-[var(--bravo-cream)]/85 px-2 py-1.5 backdrop-blur">
        <a
          href="#how"
          className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-[var(--bravo-ink)] hover:bg-[var(--bravo-cream2)]/70 transition-colors"
        >
          About
        </a>
        <a
          href="#dwi-archive"
          className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-[var(--bravo-ink)] hover:bg-[var(--bravo-cream2)]/70 transition-colors"
        >
          Reports
        </a>
        <a
          href="#consultancy"
          className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-[var(--bravo-ink)] hover:bg-[var(--bravo-cream2)]/70 transition-colors"
        >
          Consultancy
        </a>
        <a
          href="#tender"
          className="ml-1 inline-block rounded-full bg-bravo-copper px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get Early Access
        </a>
      </nav>
    </header>
  );
}
