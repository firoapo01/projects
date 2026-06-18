import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono, Amiri } from "next/font/google";
import { seo } from "@/data/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SandParticles from "@/components/SandParticles";
import DesertDunes from "@/components/DesertDunes";
import HeatHaze from "@/components/HeatHaze";
import DesertSun from "@/components/DesertSun";
import CalligraphyElement from "@/components/CalligraphyElement";
import CursorOrb from "@/components/CursorOrb";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnistack.dev"),
  title: {
    default: seo.home.title,
    template: "%s | OmniStack",
  },
  description: seo.home.description,
  openGraph: {
    type: "website",
    siteName: "OmniStack",
    title: seo.home.title,
    description: seo.home.description,
    url: "https://omnistack.dev",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OmniStack — Abdelrahman Hassan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${amiri.variable}`}
    >
      <body className="font-body overflow-x-hidden">
        <DesertSun />
        <CalligraphyElement />
        <SandParticles />
        <HeatHaze />
        <DesertDunes />
        <CursorOrb />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
