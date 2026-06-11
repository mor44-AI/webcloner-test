"use client";

import { ArrowRight } from "@/components/icons";
import { useFormspree } from "@/hooks/useFormspree";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import {
  WAITLIST_FEATURES,
  WAITLIST_HEADLINE,
  WAITLIST_INTRO,
  WAITLIST_KICKER,
} from "@/lib/data";

/**
 * Tender Workspace section. Background is transparent (joins the page-wide
 * ocean gradient). A looped screen-capture video of the workspace is the
 * single centrepiece, followed by the three capability cards and the
 * early-access waitlist signup.
 */
export function TenderWaitlistSection() {
  const formAction =
    process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL || "https://formspree.io/f/xbdeaokg";
  const { status, handleSubmit } = useFormspree(formAction);

  return (
    <section id="tender" className="relative py-24 md:py-32 text-[var(--bravo-cream)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Lead-in */}
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] text-[var(--bravo-accent)] mb-6">{WAITLIST_KICKER}</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.01em] text-[var(--bravo-cream)]">
            {WAITLIST_HEADLINE}
          </h2>
          <div className="copper-rule" />
          <p className="text-[var(--bravo-cream)]/85 text-lg leading-relaxed">{WAITLIST_INTRO}</p>
        </div>

        {/* Workspace demo video: the centrepiece */}
        <figure className="mt-12 overflow-hidden rounded-[18px] border border-[var(--bravo-cream)]/15 bg-[var(--bravo-cream)]/[0.04] p-2 backdrop-blur md:p-3">
          {/* 16:9 box reserves space so the video load causes no layout shift */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-[var(--bravo-navy)]">
            <AutoplayVideo
              src="/video/workspace.mp4"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 px-1 font-mono text-[10px] text-[var(--bravo-cream)]/60">
            INSIDE THE WORKSPACE · CLARIFICATIONS · CONTRACT RISK · SUBMISSION PACKAGE
          </figcaption>
        </figure>

        {/* Capability cards */}
        <div className="mx-auto mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WAITLIST_FEATURES.map((f) => (
            <div
              key={f.index}
              className="rounded-[16px] border border-[var(--bravo-cream)]/10 bg-[var(--bravo-cream)]/[0.04] backdrop-blur p-6"
            >
              <p className="font-mono text-[10px] text-[var(--bravo-accent)]">{f.index}</p>
              <h3 className="mt-3 font-serif text-xl text-[var(--bravo-cream)]">{f.title}</h3>
              <p className="mt-3 text-sm text-[var(--bravo-cream)]/70 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Waitlist signup */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-mono text-[10px] text-[var(--bravo-cream)]/55 mb-4">
            EARLY ACCESS · COHORT INVITES ROLLING THROUGH 2027
          </p>
          <form
            action={formAction}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="flex-1 max-w-sm rounded-full bg-[var(--bravo-cream)]/10 border border-[var(--bravo-cream)]/20 px-5 py-3 text-[15px] text-[var(--bravo-cream)] placeholder:text-[var(--bravo-cream)]/40 outline-none focus:border-[var(--bravo-accent)]"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-bravo-copper px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          {status === "ok" && (
            <p className="mt-3 font-mono text-[11px] text-[var(--bravo-accent)]" role="status">
              ON THE LIST. COHORT INVITES ROLL OUT THROUGH 2027.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 font-mono text-[11px] text-red-300" role="status">
              SOMETHING WENT WRONG. PLEASE TRY AGAIN.
            </p>
          )}
          <p className="mt-3 font-mono text-[10px] text-[var(--bravo-cream)]/45">
            NO SPAM · UNSUBSCRIBE ANYTIME
          </p>
        </div>
      </div>
    </section>
  );
}
