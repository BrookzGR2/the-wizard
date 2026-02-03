import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { markdownToHtml } from "@/lib/markdown";
import { MDXContent } from "@/components/MDXContent";
import { TableOfContents } from "@/components/TableOfContents";
import { ShareButton } from "@/components/ShareButton";
import { CopyMarkdownButton } from "@/components/CopyMarkdownButton";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const html = await markdownToHtml(article.content);

  return (
    <div className="min-h-screen">
      {/* Immersive Hero Image */}
      {article.coverImage && (
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] -mt-[1px]">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-wizard-bg via-wizard-bg/60 to-wizard-bg/20" />

          {/* Content overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8 sm:pb-12">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb on image */}
              <nav className="mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Spellbook
                </Link>
              </nav>

              {/* Tags */}
              {article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag-pill bg-white/10 backdrop-blur-sm border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg max-w-4xl">
                {article.title}
              </h1>

              {article.description && (
                <p className="text-lg text-white/80 leading-relaxed mb-5 max-w-2xl drop-shadow">
                  {article.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(article.date)}
                </span>
                <span className="text-white/30">·</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb (only when no cover image) */}
        {!article.coverImage && (
          <nav className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-wizard-text-dim hover:text-wizard-purple-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Spellbook
            </Link>
          </nav>
        )}

        <div className="flex gap-12">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Article header (only when no cover image) */}
            {!article.coverImage && (
              <header className="mb-10">
                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h1>

                {article.description && (
                  <p className="text-lg text-wizard-text-muted leading-relaxed mb-5">
                    {article.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 text-sm text-wizard-text-dim">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(article.date)}
                  </span>
                  <span className="text-wizard-border">·</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readingTime}
                  </span>
                </div>

                <div className="h-px bg-gradient-to-r from-wizard-purple/40 via-wizard-border/30 to-transparent mt-8" />
              </header>
            )}

            {/* Article body */}
            <MDXContent html={html} />

            {/* Footer actions */}
            <footer className="mt-12 pt-8 border-t border-wizard-border/30">
              <div className="flex flex-wrap gap-3">
                <ShareButton title={article.title} />
                <CopyMarkdownButton markdown={article.content} />
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-wizard-text-dim hover:text-wizard-purple-light transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Spellbook
                </Link>
              </div>
            </footer>
          </article>

          {/* TOC sidebar */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <TableOfContents content={article.content} />
          </aside>
        </div>
      </div>
    </div>
  );
}
