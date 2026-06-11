"use client";

import { OceanBackdrop } from "@/components/OceanBackdrop";
import { BravoMarkLarge, ArrowRight } from "@/components/icons";
import {
  HERO_BODY,
  HERO_HEADLINE_LINES,
  HERO_KICKER,
} from "@/lib/data";

/**
 * Full-bleed hero with the ocean video as background. Three side-by-side CTAs:
 * Read the latest issue / Get a quote / Get Tender Workspace Access.
 */
export function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <OceanBackdrop />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16">
        <div className="max-w-[820px]">
          <p
            className="font-mono text-[var(--bravo-accent)] mb-10"
            style={{ fontSize: 11, letterSpacing: "0.18em" }}
          >
            {HERO_KICKER}
          </p>
          <BravoMarkLarge size={140} className="block mb-10" />
          <h1
            className="font-serif text-[var(--bravo-cream)] text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1.04] tracking-[-0.01em]"
            style={{ textShadow: "0 4px 48px rgba(10,26,40,0.65)" }}
          >
            {HERO_HEADLINE_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-[var(--bravo-cream)]/85 text-lg md:text-xl max-w-[620px] leading-[1.5]">
            {HERO_BODY}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#dwi-archive"
              className="inline-flex items-center gap-2 rounded-full bg-bravo-copper px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Read the latest issue
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#consultancy"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--bravo-cream)]/40 px-6 py-3 text-sm font-medium text-[var(--bravo-cream)] hover:border-[var(--bravo-cream)]/80 transition-colors"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
