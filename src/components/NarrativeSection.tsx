"use client";

import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { NARRATIVE_CHAPTERS, NARRATIVE_LINKS } from "@/lib/data";

/**
 * Three-chapter narrative mirroring the hero headline:
 *   READ THE MARKET / BUILD THE STRATEGY / WIN THE TENDER.
 * Each chapter pairs one offshore photo with a kicker, headline, body, and
 * a "Read more" anchor link into the corresponding lower section.
 */
export function NarrativeSection() {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 space-y-24 md:space-y-32">
        {NARRATIVE_CHAPTERS.map((c, i) => (
          <ChapterRow
            key={c.headline}
            kicker={c.kicker}
            headline={c.headline}
            body={c.body}
            image={c.image}
            imageAlt={c.imageAlt}
            href={NARRATIVE_LINKS[i]}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function ChapterRow({
  kicker,
  headline,
  body,
  image,
  imageAlt,
  href,
  reversed,
}: {
  kicker: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
  reversed: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={reversed ? "md:order-2" : ""}>
        <p className="font-mono text-[11px] text-[var(--bravo-accent)] mb-4">{kicker}</p>
        <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.01em] text-[var(--bravo-cream)]">
          {headline}
        </h2>
        <div className="copper-rule" />
        <p className="text-[var(--bravo-cream)]/85 text-lg leading-relaxed max-w-[520px]">{body}</p>
        <a
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] text-[var(--bravo-accent)] hover:gap-3 transition-all"
        >
          READ MORE
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
      <div className={reversed ? "md:order-1" : ""}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[var(--bravo-navy)]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
