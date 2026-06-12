import type { Metadata } from "next";
import { Fraunces, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bravo Energy · Offshore intelligence platform",
  description:
    "The offshore intelligence platform for tender teams, BD leads and operators shaping the subsea industry. Read the market, build the strategy, win the tender.",
  openGraph: {
    title: "Bravo Energy · Offshore intelligence platform",
    description:
      "Read the market, build the strategy, win the tender. Free monthly Deep Water Intelligence plus fixed-scope consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bravo-cream)] text-[var(--bravo-ink)] font-sans">
        {children}
      </body>
    </html>
  );
}
