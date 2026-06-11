"use client";

import { OceanBackdrop } from "@/components/OceanBackdrop";
import { useFormspree } from "@/hooks/useFormspree";
import { BravoMarkLarge, ArrowRight } from "@/components/icons";
import {
  HERO_BODY,
  HERO_HEADLINE_LINES,
  HERO_KICKER,
  HERO_PRIMARY_CTA,
  HERO_SUBSCRIBE,
} from "@/lib/data";

/**
 * Full-bleed hero with the Pexels underwater video as background. Headline
 * breaks into three independent lines; CTAs are a copper "Read the latest
 * issue" pill plus an inline email subscribe widget that posts to the
 * waitlist Formspree endpoint.
 */
export function HeroSection() {
  const newsletterAction =
    process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL || "https://formspree.io/f/xbdeaokg";
  const { status, handleSubmit } = useFormspree(newsletterAction);

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
              href={HERO_PRIMARY_CTA.href}
              className="inline-flex items-center gap-2 rounded-full bg-bravo-copper px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {HERO_PRIMARY_CTA.label}
              <ArrowRight className="h-4 w-4" />
            </a>

            <form
              action={newsletterAction}
              method="POST"
              onSubmit={handleSubmit}
              className="flex items-center gap-1 rounded-full border border-[var(--bravo-cream)]/35 bg-[var(--bravo-navy)]/35 p-1 pl-4 backdrop-blur"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={HERO_SUBSCRIBE.placeholder}
                className="bg-transparent outline-none text-sm text-[var(--bravo-cream)] placeholder:text-[var(--bravo-cream)]/50 w-44 sm:w-56"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-bravo-copper px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {HERO_SUBSCRIBE.submitLabel}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {status === "ok" && (
            <p className="mt-4 font-mono text-[11px] text-[var(--bravo-accent)]" role="status">
              ON THE LIST. THE NEXT ISSUE LANDS IN YOUR INBOX.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 font-mono text-[11px] text-red-300" role="status">
              SOMETHING WENT WRONG. PLEASE TRY AGAIN.
            </p>
          )}
        </div>

        <div />
      </div>
    </section>
  );
}
