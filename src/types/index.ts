// Shared types for the Bravo Energy marketing site.

export interface DwiIssue {
  number: number;
  monthYear: string;
  theme: string;
  dek: string;
  coverImage: string;
  href: string;
}

export const CONSULTANCY_PHASES = [
  "Strategy",
  "Research",
  "Development",
  "Sharing",
] as const;
export type ConsultancyPhase = (typeof CONSULTANCY_PHASES)[number];

export interface ConsultancyTier {
  id: string;
  label: string; // upper-case display, e.g. "MARKET LANDSCAPE"
  blurb: string;
  deliverables: Record<ConsultancyPhase, string[]>;
  startingPrice: string;
  weeks: number | "custom";
}

export interface Office {
  city: string;
  focus: string;
}

export interface NarrativeChapter {
  kicker: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface ProductCard {
  id: string;
  kicker: string;
  title: string;
  description: string;
  status: "available" | "from-price" | "coming-soon";
  statusLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface WaitlistFeature {
  index: string;
  title: string;
  description: string;
}
