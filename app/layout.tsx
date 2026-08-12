import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const siteUrl = "https://plus1jumpcrunchyasmrescape.wiki";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "+1 Jump Crunchy ASMR Escape Wiki", template: "%s | Jump Crunchy Guide" },
  description: "A source-checked beginner guide to +1 Jump Crunchy ASMR Escape: quick start, gameplay loop, progression, mistakes, and FAQ.",
  applicationName: "+1 Jump Crunchy ASMR Escape Wiki",
  keywords: ["+1 Jump Crunchy ASMR Escape", "beginner guide", "wiki", "Roblox", "how to play"],
  robots: { index: true, follow: true },
  icons: { icon: "/images/official-game-icon.png", apple: "/images/official-game-icon.png" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "+1 Jump Crunchy ASMR Escape Wiki",
    title: "+1 Jump Crunchy ASMR Escape Beginner Guide",
    description: "Build Jump, collect crunchy rewards, upgrade with purpose, and reach the finish.",
    url: siteUrl,
    images: [{ url: "https://plus1jumpcrunchyasmrescape.wiki/og.png", width: 1731, height: 909, alt: "+1 Jump Crunchy ASMR Escape beginner guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "+1 Jump Crunchy ASMR Escape Beginner Guide",
    description: "Follow the verified three-minute route: step, crunch, grow, finish.",
    images: ["https://plus1jumpcrunchyasmrescape.wiki/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
