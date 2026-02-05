import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Wizard 🧙‍♂️ — AI & Tech Knowledge Base",
    template: "%s | The Wizard 🧙‍♂️",
  },
  description:
    "A curated collection of technical guides, AI workflows, and development best practices — by Wiz.",
  keywords: ["AI", "guides", "technology", "knowledge base", "development", "workflows"],
  authors: [{ name: "Wiz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Wizard",
    title: "The Wizard 🧙‍♂️ — AI & Tech Knowledge Base",
    description:
      "A curated collection of technical guides, AI workflows, and development best practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wizard 🧙‍♂️",
    description:
      "A curated collection of technical guides, AI workflows, and development best practices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-text font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
