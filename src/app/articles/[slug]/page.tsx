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

const SITE_URL = "https://the-wizard-sigma.vercel.app";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const ogImage = article.coverImage
    ? article.coverImage.startsWith("http")
      ? article.coverImage
      : `${SITE_URL}${article.coverImage}`
    : undefined;

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
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      ...(ogImage && { images: [ogImage] }),
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
      {/* Back button - always above image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <nav>
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
      </div>

      {/* Clean Hero Image - no overlay, no text, just the art */}
      {article.coverImage && (
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-b-2xl sm:rounded-b-3xl">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Subtle edge vignette only - no text-covering gradient */}
          <div className="absolute inset-0 shadow-[inset_0_-4px_16px_rgba(0,0,0,0.15)]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Article header - always below the image */}
        <header className="mb-10 max-w-3xl">
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

        <div className="flex gap-12">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">

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
