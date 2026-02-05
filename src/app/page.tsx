import { getAllArticles } from "@/lib/articles";
import { SearchBar } from "@/components/SearchBar";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="bg-header-gradient border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              🧙‍♂️ The Wizard
            </span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-4">
            A curated collection of technical guides, AI workflows, and development best practices — by{" "}
            <span className="text-accent">Wiz</span>.
          </p>
          <p className="text-green text-sm">
            {articles.length} {articles.length === 1 ? "article" : "articles"} in the collection
          </p>
        </div>
      </header>

      {/* Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <SearchBar articles={articles} />
      </section>
    </div>
  );
}
