import { ArrowRight } from "@/components/icons";
import { PRODUCTS, PRODUCTS_HEADLINE, PRODUCTS_INTRO } from "@/lib/data";
import type { ProductCard as ProductCardType } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Three product cards: DWI / Consultancy / Tender Workspace.
 * Tender card is visually muted because it's pre-launch.
 */
export function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] text-[var(--bravo-accent)] mb-4">WHAT WE DO</p>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.1] tracking-[-0.01em] text-[var(--bravo-cream)]">
            {PRODUCTS_HEADLINE}
          </h2>
          <div className="copper-rule" />
          <p className="text-[var(--bravo-cream)]/80 text-lg leading-relaxed">{PRODUCTS_INTRO}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ProductCardType }) {
  const muted = product.status === "coming-soon";
  return (
    <a
      href={product.href}
      className={cn(
        "group block rounded-[20px] border backdrop-blur p-7 transition-all",
        muted
          ? "border-[var(--bravo-cream)]/12 bg-[var(--bravo-cream)]/[0.04] opacity-90 hover:opacity-100"
          : "border-[var(--bravo-cream)]/15 bg-[var(--bravo-cream)]/[0.08] hover:border-[var(--bravo-accent)] hover:shadow-[0_18px_40px_-22px_rgba(200,119,46,0.4)]"
      )}
    >
      <p className="font-mono text-[10px] text-[var(--bravo-accent)] mb-3">{product.kicker}</p>
      <h3 className="font-serif text-2xl leading-[1.15] tracking-[-0.005em] text-[var(--bravo-cream)]">
        {product.title}
      </h3>
      <p className="mt-4 text-[var(--bravo-cream)]/80 text-[15px] leading-relaxed">{product.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-[var(--bravo-cream)]/15 pt-4">
        <span className="text-sm text-[var(--bravo-cream)]/60">{product.statusLabel}</span>
        <ArrowRight className="h-4 w-4 text-[var(--bravo-accent)] transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
