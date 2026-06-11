import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { DwiArchiveSection } from "@/components/DwiArchiveSection";
import { ConsultancyTiersSection } from "@/components/ConsultancyTiersSection";
import { TenderWaitlistSection } from "@/components/TenderWaitlistSection";
import { SiteFooter } from "@/components/SiteFooter";
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        {/* One continuous ocean-depth field for everything below the hero */}
        <div className="relative bg-ocean-depth text-[var(--bravo-cream)]">
          <ProductsSection />
          <DwiArchiveSection />
          <ConsultancyTiersSection />
          <TenderWaitlistSection />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
