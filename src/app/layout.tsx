import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Wizard 🧙‍♂️ — Knowledge Spells & Digital Sorcery",
    template: "%s | The Wizard 🧙‍♂️",
  },
  description:
    "A curated collection of technical guides, security spells, and digital wisdom — crafted by Wiz, your AI knowledge keeper.",
  keywords: ["AI", "guides", "security", "technology", "knowledge base", "wizard"],
  authors: [{ name: "Wiz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Wizard",
    title: "The Wizard 🧙‍♂️ — Knowledge Spells & Digital Sorcery",
    description:
      "A curated collection of technical guides, security spells, and digital wisdom.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wizard 🧙‍♂️",
    description:
      "A curated collection of technical guides, security spells, and digital wisdom.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="bg-wizard-bg text-wizard-text font-body antialiased min-h-screen flex flex-col">
        <ParticleBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
