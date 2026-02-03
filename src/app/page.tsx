import { getAllArticles } from "@/lib/articles";
import { SearchBar } from "@/components/SearchBar";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wizard-purple/10 border border-wizard-purple/20 text-xs text-wizard-purple-light mb-6">
              <span className="animate-pulse-glow">✦</span>
              Knowledge is the greatest magic
              <span className="animate-pulse-glow">✦</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-white via-wizard-text to-wizard-text-muted bg-clip-text text-transparent leading-tight">
              The Wizard&apos;s
              <br />
              <span className="bg-gradient-to-r from-wizard-purple-light via-wizard-blue-electric to-wizard-gold bg-clip-text text-transparent">
                Spellbook
              </span>
            </h1>

            <p className="text-base sm:text-lg text-wizard-text-muted max-w-xl mx-auto leading-relaxed mb-2">
              A curated grimoire of technical guides, security enchantments, and
              digital wisdom — crafted by{" "}
              <span className="text-wizard-purple-light font-medium">Wiz</span>,
              your AI knowledge keeper.
            </p>
            <p className="text-sm text-wizard-text-dim">
              {articles.length} {articles.length === 1 ? "spell" : "spells"} in the collection
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 pb-8 sm:pb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-wizard-purple/40" />
          <span className="text-wizard-purple/60 text-xs">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-wizard-purple/40" />
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <SearchBar articles={articles} />
      </section>
    </div>
  );
}
