"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";
import { useFormspree } from "@/hooks/useFormspree";
import {
  CONSULTANCY_TIERS,
  CONSULTANCY_WHY_COST,
  CONSULTANCY_WHY_TIME,
} from "@/lib/data";
import { CONSULTANCY_PHASES, type ConsultancyPhase } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Consultancy section, faithful to the analogue-agency pricing reference:
 *   - "SELECT YOUR PROJECT" + tier buttons top-left, huge price numeral right.
 *   - A closed bordered matrix: rotated white category bars down the left,
 *     internal vertical column lines at varied opacities, deliverable boxes
 *     spread across each phase row (Research row ~2x the height of others).
 * Background is transparent so the page-wide ocean gradient shows through.
 */
export function ConsultancyTiersSection() {
  const [tierId, setTierId] = useState(CONSULTANCY_TIERS[0].id);
  const tier = CONSULTANCY_TIERS.find((t) => t.id === tierId) ?? CONSULTANCY_TIERS[0];
  const weeksLabel = tier.weeks === "custom" ? "CUSTOM" : `${tier.weeks} WEEKS`;
  // Bare price: strip a leading "From " so numeric tiers show just "$18k".
  const priceLabel = tier.startingPrice.replace(/^From\s+/i, "");

  const formAction =
    process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_URL || "https://formspree.io/f/xzdqvqpj";
  const { status, handleSubmit } = useFormspree(formAction);

  return (
    <section id="consultancy" className="py-24 md:py-32 text-[var(--bravo-cream)]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--bravo-cream)]/70 mb-4">
            BRAVO CONSULTANCY
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.1] tracking-[-0.01em] text-[var(--bravo-cream)]">
            We believe in keeping things crystal clear, just like our pricing system.
          </h2>
        </div>

        {/* Tier selector (left) + huge numeral (right), aligned at the top */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--bravo-cream)]/65 mb-4">
              SELECT YOUR PROJECT
            </p>
            <div className="flex flex-wrap gap-3">
              {CONSULTANCY_TIERS.map((t) => {
                const active = t.id === tierId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTierId(t.id)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] transition-colors",
                      active
                        ? "bg-[var(--bravo-cream)] text-[var(--ocean-ink)] border-[var(--bravo-cream)]"
                        : "border-[var(--bravo-cream)]/50 text-[var(--bravo-cream)] hover:border-[var(--bravo-cream)]/85"
                    )}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--bravo-cream)]/55">
              STARTING FROM
            </p>
            <p
              className="mt-2 font-serif leading-none tracking-[-0.025em] text-[var(--bravo-cream)]"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
            >
              {priceLabel}
            </p>
            <span className="mt-5 inline-flex items-center rounded-full border border-[var(--bravo-cream)]/35 bg-[var(--bravo-cream)]/10 px-4 py-2 font-mono text-[11px] tracking-[0.16em] text-[var(--bravo-cream)]">
              PROJECT TIME: {weeksLabel}
            </span>
          </div>
        </div>

        {/* The matrix */}
        <PricingMatrix tier={tier} />

        {/* Justification */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--bravo-cream)]/65">
              WHY DOES THIS COST?
            </p>
            <p className="mt-3 text-[var(--bravo-cream)]/90 text-[15px] leading-relaxed">
              {CONSULTANCY_WHY_COST}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--bravo-cream)]/65">
              WHY DOES IT TAKE THIS LONG?
            </p>
            <p className="mt-3 text-[var(--bravo-cream)]/90 text-[15px] leading-relaxed">
              {CONSULTANCY_WHY_TIME}
            </p>
          </div>
        </div>

        {/* Request a quote form */}
        <div className="mt-16 border-t border-[var(--bravo-cream)]/18 pt-12">
          <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--bravo-cream)]/65">
            REQUEST A QUOTE
          </p>
          <h3 className="mt-2 font-serif text-2xl md:text-3xl leading-[1.15] text-[var(--bravo-cream)]">
            Send us the brief. Fixed quote in two business days.
          </h3>
          <form
            action={formAction}
            method="POST"
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            <input type="hidden" name="tier" value={tier.label} />
            <FormField name="name" label="Name" required />
            <FormField name="email" label="Work email" type="email" required />
            <FormField name="company" label="Company" required />
            <FormField name="role" label="Role" />
            <div className="sm:col-span-2">
              <FormField name="notes" label="Brief (one paragraph)" textarea />
            </div>
            <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-bravo-copper px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[12px] text-[var(--bravo-cream)]/55">
                We reply within 2 business days with a fixed quote and a fixed timeline.
              </p>
            </div>
            {status === "ok" && (
              <p className="sm:col-span-2 font-mono text-[11px] text-[var(--bravo-accent)]" role="status">
                BRIEF RECEIVED. FIXED QUOTE WITHIN 2 BUSINESS DAYS.
              </p>
            )}
            {status === "error" && (
              <p className="sm:col-span-2 font-mono text-[11px] text-red-300" role="status">
                SOMETHING WENT WRONG. PLEASE TRY AGAIN.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Pricing matrix                                                          */
/* ---------------------------------------------------------------------- */

const STRONG = "rgba(255,255,255,0.55)";
const LIGHT = "rgba(255,255,255,0.14)";
// User-specified opacity sequence for the 6 internal vertical lines.
const LINE_OPACITIES = [LIGHT, STRONG, LIGHT, LIGHT, STRONG, LIGHT];

function PricingMatrix({
  tier,
}: {
  tier: (typeof CONSULTANCY_TIERS)[number];
}) {
  return (
    <div className="mt-14">
      {/* Closed box: strong white top/bottom/right borders; left edge = bars */}
      <div
        className="relative grid"
        style={{
          gridTemplateRows: "1fr 2fr 1fr 1fr", // Research (row 2) ~2x the others
          borderTop: `1px solid ${STRONG}`,
          borderBottom: `1px solid ${STRONG}`,
          borderRight: `1px solid ${STRONG}`,
        }}
      >
        {/* Internal vertical lines, behind the deliverable boxes */}
        <div className="pointer-events-none absolute inset-y-0 left-[44px] right-0 z-0">
          {LINE_OPACITIES.map((op, i) => (
            <span
              key={i}
              className="absolute inset-y-0 w-px"
              style={{
                left: `${((i + 1) / 7) * 100}%`,
                background: op,
              }}
            />
          ))}
        </div>

        {CONSULTANCY_PHASES.map((phase) => (
          <PhaseRow key={phase} phase={phase} chips={tier.deliverables[phase]} />
        ))}
      </div>
    </div>
  );
}

function PhaseRow({ phase, chips }: { phase: ConsultancyPhase; chips: string[] }) {
  return (
    <div className="relative flex min-h-[120px]">
      {/* Rotated white category bar */}
      <div
        className="flex w-[44px] shrink-0 items-center justify-center bg-[var(--bravo-cream)]"
        style={{ borderRight: `1px solid ${STRONG}` }}
      >
        <span
          className="font-mono text-[11px] tracking-[0.18em] text-[var(--ocean-ink)]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {phase.toUpperCase()}
        </span>
      </div>

      {/* Deliverable boxes spread across the row, above the vertical lines */}
      <div className="relative z-10 flex flex-1 flex-wrap content-start gap-3 p-4 md:p-6">
        {chips.map((chip) => (
          <DeliverableBox key={chip} label={chip} />
        ))}
      </div>
    </div>
  );
}

/** Box height grows with label length so big-word items get more room. */
function DeliverableBox({ label }: { label: string }) {
  const big = label.length > 14;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[8px] border border-[var(--bravo-cream)]/40 px-4 font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--bravo-cream)] transition-colors hover:border-[var(--bravo-cream)]/75",
        big ? "min-h-[72px] py-4" : "min-h-[48px] py-3"
      )}
    >
      {label}
    </span>
  );
}

function FormField({
  name,
  label,
  type = "text",
  required,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseClass =
    "w-full rounded-[10px] border border-[var(--bravo-cream)]/25 bg-[var(--bravo-cream)]/10 px-3 py-2 text-[15px] text-[var(--bravo-cream)] placeholder:text-[var(--bravo-cream)]/45 outline-none transition-colors focus:border-[var(--bravo-cream)]";
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--bravo-cream)]/55">
        {label.toUpperCase()}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} className={`${baseClass} mt-1`} />
      ) : (
        <input name={name} type={type} required={required} className={`${baseClass} mt-1`} />
      )}
    </label>
  );
}
