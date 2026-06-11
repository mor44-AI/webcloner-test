// All site copy lives here. Voice drawn from the user's own Deep Water
// Intelligence files (SKILL.md, Issue 02 back cover).

import type {
  ConsultancyTier,
  DwiIssue,
  NarrativeChapter,
  Office,
  ProductCard,
  WaitlistFeature,
} from "@/types";

/* Hero */

export const HERO_KICKER = "OFFSHORE INTELLIGENCE PLATFORM";
export const HERO_HEADLINE_LINES = [
  "Read the Market.",
  "Build the Strategy.",
  "Win the Tender.",
] as const;
export const HERO_BODY =
  "Bravo Energy is the offshore intelligence platform for operators, contractors, investors and tender teams shaping the next thirty years of the industry.";
export const HERO_PRIMARY_CTA = { label: "Read the latest issue", href: "#dwi-archive" };
export const HERO_SUBSCRIBE = {
  placeholder: "you@company.com",
  submitLabel: "Get Tender Workspace Access",
};

/* Narrative: three pillars matching the hero headline */

export const NARRATIVE_CHAPTERS: NarrativeChapter[] = [
  {
    kicker: "READ THE MARKET",
    headline: "What's moving in offshore, before everyone else.",
    body:
      "Deep Water Intelligence is the free monthly read of Bravo Energy. One theme, three connected stories, eleven pages. It is how operators and investors find out what is shifting in the basin before the equity desks file.",
    image: "/img/platform-sunset.jpg",
    imageAlt: "Offshore platform silhouetted on the horizon at sunset.",
  },
  {
    kicker: "BUILD THE STRATEGY",
    headline: "Custom answers for the decisions that matter.",
    body:
      "Bravo Consultancy turns one question into a fixed-scope engagement. Market landscapes, competitor reads, tender strategy, due-diligence packs. Flat fee, fixed timeline, no scope creep.",
    image: "/img/cable-vessel.jpg",
    imageAlt: "Aerial view of a cable-lay vessel at sea.",
  },
  {
    kicker: "WIN THE TENDER",
    headline: "From ITT to submission-ready in one workspace.",
    body:
      "Bravo Tender Workspace pulls every clarification, contract risk, competitor read and deliverable into a single sourced workspace. Launching 2027. Cohort invites rolling now.",
    image: "/img/diver-subsea.jpg",
    imageAlt: "Commercial diver in full gear on an offshore deck.",
  },
];

export const NARRATIVE_LINKS = ["#dwi-archive", "#consultancy", "#tender"] as const;

/* Products overview */

export const PRODUCTS_HEADLINE = "Insight. Strategy. Execution.";
export const PRODUCTS_INTRO =
  "Free intelligence to read every month. Paid consulting when you need a custom answer.";
export const PRODUCTS_INTRO_LINE2 = "A tender workspace when you need to win one.";

export const PRODUCTS: ProductCard[] = [
  {
    id: "dwi",
    kicker: "REPORTS",
    title: "The free monthly read of offshore energy.",
    description:
      "One theme, three connected stories, eleven pages. Every issue tracks a single force reshaping the basin — capital flows, fleet moves, sanction lines, pricing shifts. Delivered to operators, investors and tender teams the first week of every month. No paywall, no advertising, no filler.",
    status: "available",
    statusLabel: "Available now",
    href: "#dwi-archive",
    image: "/img/diver.jpg",
    imageAlt: "Commercial diving helmet among cables on an offshore deck.",
  },
  {
    id: "consultancy",
    kicker: "BRAVO CONSULTANCY",
    title: "Pick a scope. Get a quote.",
    description:
      "Our consultancy services starts with a defined question and ends with a deliverable that answers it. Market landscapes, competitor reads, tender strategy, due-diligence packs, all flat-fee with a fixed timeline. No hourly billing, no scope creep, no open-ended retainer. You know the cost and the deadline before we start.",
    status: "from-price",
    statusLabel: "From $12k · 2 to 6 weeks",
    href: "#consultancy",
    image: "/img/gabriel-xavier-BOe6_uT-LMw-unsplash.jpg",
    imageAlt: "Offshore platform silhouetted against a golden sunset.",
  },
  {
    id: "tender",
    kicker: "BRAVO TENDER WORKSPACE",
    title: "From ITT to submission-ready.",
    description:
      "A Tender Workspace that holds every moving part of a tender response. Clarifications, costing model, contract analyzer, lessons learned and the full submission package. Built for the teams that have to win, not just bid.",
    status: "coming-soon",
    statusLabel: "Coming 2027 · join waitlist",
    href: "#tender",
    image: "/img/fujidudez-P006DyDoIY4-unsplash.jpg",
    imageAlt: "Offshore drillship at dusk with dramatic sky.",
  },
];

/* DWI Archive */

export const DWI_KICKER = "REPORTS";
export const DWI_HEADLINE = "Deep Water Intelligence";
export const DWI_SUBTITLE =
  "The free monthly read of offshore energy. Delivered to your inbox the first week of every month.";

export const DWI_ISSUES: DwiIssue[] = [
  {
    number: 2,
    monthYear: "August 2026",
    theme: "The Map Changed",
    dek:
      "The 2026 reshuffle of offshore capital, vessel fleets and sanction lines redrew where projects can actually get sanctioned. Eleven pages on what shifted and what shifts next.",
    coverImage: "/img/planet-volumes-8koWngCqqzM-unsplash.jpg",
    href: "/dwi/issue-02.html",
  },
  {
    number: 1,
    monthYear: "July 2026",
    theme: "The Security Premium",
    dek:
      "Insurance loadings, shadow-fleet exposure and sanction adjacency are quietly repricing every offshore project this year. We trace where the premium lands and who absorbs it.",
    coverImage: "/img/diver.jpg",
    href: "/dwi/issue-01.html",
  },
];

/* Consultancy tiers (replaces the old quote picker) */

export const CONSULTANCY_TIERS: ConsultancyTier[] = [
  {
    id: "market-landscape",
    label: "MARKET LANDSCAPE",
    blurb: "Bottom-up view of a basin, segment or theme.",
    deliverables: {
      Strategy: ["Strategy Workshops"],
      Research: [
        "Market Research",
        "Identify Competitors",
        "Market Segmentation",
        "Country Definition",
        "Market Sizing",
        "Identify Clients",
      ],
      Development: ["Market Deck", "Identify Assets"],
      Sharing: ["Deliverables Pack", "Briefing Call"],
    },
    startingPrice: "$18k",
    weeks: 4,
  },
  {
    id: "competitive-intel",
    label: "COMPETITIVE INTEL",
    blurb: "A read on a specific competitor or consortium.",
    deliverables: {
      Strategy: ["Scoping Call"],
      Research: ["Identify Competitors", "Tender History", "Capability Map"],
      Development: ["Vessel Day Rates", "Contractor Prices", "Win-Loss"],
      Sharing: ["Competitor Scorecard", "Briefing Call"],
    },
    startingPrice: "$15k",
    weeks: 3,
  },
  {
    id: "tender-strategy",
    label: "TENDER STRATEGY",
    blurb: "Pre-bid strategy and live-tender support.",
    deliverables: {
      Strategy: ["Strategy Workshops", "Win-Conditions Map"],
      Research: ["Benchmarks", "Risk Mapping"],
      Development: ["Winning Price", "Strategy Memo", "Pricing Sheet"],
      Sharing: ["Strategy Pack", "Briefing Call"],
    },
    startingPrice: "$22k",
    weeks: 6,
  },
  {
    id: "due-diligence",
    label: "DUE DILIGENCE",
    blurb: "Investor-grade read on an asset, operator or consortium.",
    deliverables: {
      Strategy: ["Scoping Call"],
      Research: ["Asset Profile", "Market Position", "Counterparty Map"],
      Development: ["DD Memo", "Red-flag Register", "Independent Valuation"],
      Sharing: ["Executive Summary", "Briefing Call"],
    },
    startingPrice: "$28k",
    weeks: 6,
  },
];

export const CONSULTANCY_WHY_COST =
  "Flat fee. No hourly billing, no scope creep. Every engagement is a fixed price tied to a defined deliverable list, run by a small senior team. You pay for the answer, not for the hours.";

export const CONSULTANCY_WHY_TIME =
  "Each phase has an explicit start and end. We move from strategy through delivery on a published schedule so the work fits your decision window, not ours.";

/* Tender Workspace */

export const WAITLIST_KICKER = "BRAVO TENDER WORKSPACE";
export const WAITLIST_HEADLINE =
  "Bravo Tender Workspace lets you run an entire Tender from ITT to submission.";
export const WAITLIST_INTRO =
  "Clarifications, contract-risk analysis, competitor evaluation, deliverables and a costed package, assembled in one workspace. We're inviting early users now.";

export const WAITLIST_FEATURES: WaitlistFeature[] = [
  {
    index: "01",
    title: "Clarifications log",
    description:
      "Track every question to the client and every answer back. Versioned, exportable, audit-friendly.",
  },
  {
    index: "02",
    title: "Contract-risk register",
    description:
      "Clause-by-clause flags with severity, owner and a recommended position. Pre-filled from playbooks.",
  },
  {
    index: "03",
    title: "Submission package",
    description:
      "Deliverables tracker, competitor scoring and a costed pricing sheet. Submission-ready, single source of truth.",
  },
];

/* Offices */

export const OFFICES: Office[] = [];

/* Footer */

export const FOOTER_COPYRIGHT = "© 2026 Bravo Energy. All rights reserved.";
