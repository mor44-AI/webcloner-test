"use client";

import { BravoMark } from "@/components/icons";

function scrollTo(id: string, path: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  history.pushState(null, "", path);
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between">
      <button
        onClick={() => scrollTo("hero", "/")}
        className="inline-flex items-center gap-3 text-[var(--bravo-cream)]"
      >
        <BravoMark />
        <span className="font-mono text-[11px] whitespace-nowrap">BRAVO ENERGY</span>
      </button>

      {/* Frosted pill-box holding nav links + CTA */}
      <nav className="flex items-center gap-1 rounded-full border border-[var(--bravo-line)]/60 bg-[var(--bravo-cream)]/85 px-2 py-1.5 backdrop-blur">
        <button
          onClick={() => scrollTo("products", "/products")}
          className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-[var(--bravo-ink)] hover:bg-[var(--bravo-cream2)]/70 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollTo("dwi-archive", "/dwi-archive")}
          className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-[var(--bravo-ink)] hover:bg-[var(--bravo-cream2)]/70 transition-colors"
        >
          Reports
        </button>
        <button
          onClick={() => scrollTo("consultancy", "/consultancy")}
          className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-[var(--bravo-ink)] hover:bg-[var(--bravo-cream2)]/70 transition-colors"
        >
          Consultancy
        </button>
        {/* Connected pill: TENDER WORKSPACE label + Get Started action */}
        <button
          onClick={() => scrollTo("tender", "/tender")}
          className="ml-1 inline-flex items-stretch overflow-hidden rounded-full border border-[var(--bravo-ink)]/30 text-sm transition-all hover:border-[var(--bravo-ink)]/70 hover:shadow-[0_0_10px_2px_rgba(180,130,70,0.35)]"
        >
          <span className="hidden md:flex items-center px-3 py-1.5 text-[var(--bravo-ink)] whitespace-nowrap">
            Tender Workspace
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-bravo-copper text-[var(--bravo-cream)] font-medium md:border-l border-[var(--bravo-ink)]/20 whitespace-nowrap">
            Get Started
          </span>
        </button>
      </nav>
    </header>
  );
}
