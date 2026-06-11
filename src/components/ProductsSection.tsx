import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { PRODUCTS, PRODUCTS_HEADLINE, PRODUCTS_INTRO, PRODUCTS_INTRO_LINE2 } from "@/lib/data";
import type { ProductCard as ProductCardType } from "@/types";
import { cn } from "@/lib/utils";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] text-[var(--bravo-accent)] mb-4">WHAT WE DO</p>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.1] tracking-[-0.01em] text-[var(--bravo-cream)]">
            {PRODUCTS_HEADLINE}
          </h2>
          <div className="copper-rule" />
          <p className="text-[var(--bravo-cream)]/80 text-lg leading-relaxed">
            {PRODUCTS_INTRO}
            <br />
            {PRODUCTS_INTRO_LINE2}
          </p>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {PRODUCTS.map((p, i) => (
            <ProductRow key={p.id} product={p} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductRow({ product, reversed }: { product: ProductCardType; reversed: boolean }) {
  const muted = product.status === "coming-soon";
  return (
    <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12">
      {/* Card */}
      <div className={cn("flex flex-col", reversed ? "md:order-2" : "")}>
        <a
          href={product.href}
          className={cn(
            "group flex flex-1 flex-col rounded-[24px] border backdrop-blur p-6 md:p-10 transition-all",
            muted
              ? "border-[var(--bravo-cream)]/12 bg-[var(--bravo-cream)]/[0.04] opacity-90 hover:opacity-100"
              : "border-[var(--bravo-cream)]/15 bg-[var(--bravo-cream)]/[0.08] hover:border-[var(--bravo-accent)] hover:shadow-[0_18px_40px_-22px_rgba(200,119,46,0.4)]"
          )}
        >
          <p className="font-mono text-[10px] text-[var(--bravo-accent)] mb-4">{product.kicker}</p>
          <h3 className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.1] tracking-[-0.02em] text-[var(--bravo-cream)]">
            {product.title}
          </h3>
          <p className="mt-5 text-[var(--bravo-cream)]/80 text-[16px] leading-relaxed flex-1">
            {product.description}
          </p>
          <div className="mt-8 flex items-center justify-between border-t border-[var(--bravo-cream)]/15 pt-5">
            <span className="text-sm text-[var(--bravo-cream)]/60">{product.statusLabel}</span>
            <ArrowRight className="h-4 w-4 text-[var(--bravo-accent)] transition-transform group-hover:translate-x-1" />
          </div>
        </a>
      </div>

      {/* Photo */}
      <div className={cn("flex flex-col", reversed ? "md:order-1" : "")}>
        <div className="relative w-full flex-1 overflow-hidden rounded-[24px] bg-[var(--bravo-navy)] min-h-[260px] md:min-h-[420px]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
