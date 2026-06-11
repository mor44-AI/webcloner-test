import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { DWI_HEADLINE, DWI_ISSUES, DWI_KICKER, DWI_SUBTITLE } from "@/lib/data";
import type { DwiIssue } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Grid of Deep Water Intelligence issues. Each card uses its themed cover as
 * a full-bleed background image; title and dek sit on top of a dark gradient
 * scrim. Latest issue spans 2 columns at md+.
 */
export function DwiArchiveSection() {
  const [latest, ...rest] = DWI_ISSUES;
  return (
    <section id="dwi-archive" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] text-[var(--bravo-accent)] mb-4">{DWI_KICKER}</p>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.1] tracking-[-0.01em] text-[var(--bravo-cream)]">
            {DWI_HEADLINE}
          </h2>
          <div className="copper-rule" />
          <p className="text-[var(--bravo-cream)]/80 text-lg leading-relaxed">{DWI_SUBTITLE}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {latest && <IssueCard issue={latest} featured />}
          {rest.map((issue) => (
            <IssueCard key={`${issue.number}-${issue.monthYear}`} issue={issue} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IssueCard({ issue, featured = false }: { issue: DwiIssue; featured?: boolean }) {
  return (
    <a
      href={issue.href}
      className={cn(
        "group relative block overflow-hidden rounded-[20px] border border-[var(--bravo-line)]",
        "transition-all hover:border-[var(--bravo-accent)] hover:shadow-[0_22px_50px_-22px_rgba(200,119,46,0.4)]",
        featured ? "md:col-span-2 aspect-[16/10]" : "aspect-[3/4]"
      )}
    >
      {/* Full-card cover image */}
      <Image
        src={issue.coverImage}
        alt={`Cover of Deep Water Intelligence Issue ${String(issue.number).padStart(2, "0")}, ${issue.theme}`}
        fill
        sizes={featured ? "(min-width:768px) 60vw, 100vw" : "(min-width:768px) 30vw, 100vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Bottom scrim so text stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,40,0) 35%, rgba(10,26,40,0.55) 65%, rgba(10,26,40,0.92) 100%)",
        }}
      />

      {/* Floating issue tag */}
      <span className="absolute left-5 top-5 font-mono rounded-full bg-[var(--bravo-navy)]/70 px-3 py-1 text-[10px] text-[var(--bravo-cream)] backdrop-blur">
        ISSUE {String(issue.number).padStart(2, "0")} · {issue.monthYear.toUpperCase()}
      </span>

      {/* Bottom-anchored title + dek */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-[var(--bravo-cream)]">
        <h3
          className={cn(
            "font-serif leading-[1.15] tracking-[-0.005em]",
            featured ? "text-2xl md:text-[2rem]" : "text-xl"
          )}
        >
          {issue.theme}
        </h3>
        <p className={cn(
          "mt-3 leading-relaxed text-[var(--bravo-cream)]/85",
          featured ? "text-[15px] max-w-[560px]" : "text-[13px]"
        )}>
          {issue.dek}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] text-[var(--bravo-accent)] group-hover:gap-3 transition-all">
          READ ISSUE
          <ArrowRight className="h-3 w-3" />
        </p>
      </div>
    </a>
  );
}
