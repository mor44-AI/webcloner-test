import { BravoMark } from "@/components/icons";
import { FOOTER_COPYRIGHT, OFFICES } from "@/lib/data";

/**
 * Dark navy footer with the Bravo "B" mark, offices line, and legal links.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--bravo-cream)]/12 px-6 md:px-10 lg:px-16 py-12 text-[var(--bravo-cream)]/85">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <BravoMark className="text-[var(--bravo-accent)]" />
          <p className="mt-4 font-mono text-[10px] text-[var(--bravo-cream)]/60">
            {OFFICES.map((o) => o.city).join(" · ")}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-x-4 max-w-md">
            {OFFICES.map((o) => (
              <div key={o.city} className="text-xs text-[var(--bravo-cream)]/65 leading-snug">
                <p className="font-serif text-[var(--bravo-cream)]">{o.city}</p>
                <p>{o.focus}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-xs text-[var(--bravo-cream)]/55">{FOOTER_COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
