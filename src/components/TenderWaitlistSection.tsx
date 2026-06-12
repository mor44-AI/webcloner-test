"use client";

import { ArrowRight } from "@/components/icons";
import { useFormspree } from "@/hooks/useFormspree";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { cn } from "@/lib/utils";
import {
  WAITLIST_HEADLINE,
  WAITLIST_INTRO,
  WAITLIST_KICKER,
} from "@/lib/data";

const WORKSPACE_MODULES: {
  index: string;
  label: string;
  description: string;
  featured?: boolean;
}[] = [
  {
    index: "01",
    label: "Clarifications & Qualifications",
    description:
      "Track every question to the client and every qualification commitment in one place.",
  },
  {
    index: "02",
    label: "Costing Estimator",
    description:
      "Build a fully costed submission with line-item rates, man-hour breakdowns and contingency flags. Locked to your baseline once submitted.",
  },
  {
    index: "03",
    label: "Risk & Opportunities",
    description:
      "Log every contract and execution risk with severity, owner and a recommended position. Opportunities tracked alongside so none fall through.",
  },
  {
    index: "04",
    label: "Competition",
    description:
      "Score known competitors by capability, pricing posture and track record. Updated as new intelligence arrives during the tender window.",
  },
  {
    index: "05",
    label: "Price Benchmark",
    description:
      "Compare your pricing against market day-rates, historical awards and competitor intelligence before you commit to a number.",
  },
  {
    index: "06",
    label: "Submission Package",
    description:
      "Assemble every deliverable — technical, commercial and contractual — into a single exportable package. One click from workspace to submission-ready.",
    featured: true,
  },
];

const EXPECT_BULLETS = [
  "Immediate access to our platform to get started fast",
  "Start Tendering in 5 minutes",
  "Our team will follow up via email to answer any questions",
];

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

        {/* Workspace demo video */}
        <figure className="mt-12 overflow-hidden rounded-[18px] border border-[var(--bravo-cream)]/15 bg-[var(--bravo-cream)]/[0.04] p-2 backdrop-blur md:p-3">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-[var(--bravo-navy)]">
            <AutoplayVideo
              src="/video/workspace.mp4"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </figure>

        {/* Workspace module cards — premium grid with index + serif title + description */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSPACE_MODULES.map((m) => (
            <div
              key={m.label}
              className={cn(
                "rounded-[20px] border p-8 backdrop-blur transition-all",
                m.featured
                  ? "border-[var(--bravo-accent)]/55 bg-[var(--bravo-accent)]/10 hover:bg-[var(--bravo-accent)]/15"
                  : "border-[var(--bravo-cream)]/15 bg-[var(--bravo-cream)]/[0.05] hover:border-[var(--bravo-cream)]/30"
              )}
            >
              <p className="font-mono text-[10px] text-[var(--bravo-accent)] mb-5">
                {m.index}
              </p>
              <h3
                className={cn(
                  "font-serif text-[1.4rem] leading-[1.2] tracking-[-0.01em] mb-4",
                  m.featured ? "text-[var(--bravo-accent)]" : "text-[var(--bravo-cream)]"
                )}
              >
                {m.label}
              </h3>
              <p className="text-[var(--bravo-cream)]/70 text-[14px] leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Signup: form on the left, divider, "What to expect" on the right */}
        <div className="mt-20 flex flex-col gap-10 md:flex-row md:items-start md:gap-0">
          {/* Form */}
          <div className="md:w-[380px] shrink-0">
            <form
              action={formAction}
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full bg-[var(--bravo-cream)]/10 border border-[var(--bravo-cream)]/20 px-5 py-3 text-[15px] text-[var(--bravo-cream)] placeholder:text-[var(--bravo-cream)]/40 outline-none focus:border-[var(--bravo-accent)]"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bravo-copper px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                Get Started
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

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-[var(--bravo-cream)]/18 mx-12 self-stretch" />

          {/* What to expect */}
          <div className="flex-1">
            <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--bravo-cream)]/55 mb-4">
              WHAT TO EXPECT
            </p>
            <ul className="space-y-3">
              {EXPECT_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="text-[var(--bravo-accent)] text-lg leading-none mt-0.5">°</span>
                  <span className="text-[var(--bravo-cream)]/80 text-[15px] leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
