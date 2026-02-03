import Link from "next/link";
import Image from "next/image";
import type { ArticleMeta } from "@/lib/articles";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/articles/${article.slug}`} className="block group">
      <article className="relative rounded-2xl border border-wizard-border/40 bg-wizard-card/50 backdrop-blur-sm hover-glow transition-all duration-300 group-hover:border-wizard-purple/40 group-hover:bg-wizard-card/80 overflow-hidden">
        {/* Cover Image */}
        {article.coverImage && (
          <div className="relative w-full h-40 sm:h-48 overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wizard-card/90 via-wizard-card/30 to-transparent" />
          </div>
        )}

        {/* Subtle top accent line (only when no image) */}
        {!article.coverImage && (
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-wizard-purple/30 to-transparent group-hover:via-wizard-purple/60 transition-all" />
        )}

        <div className="p-5 sm:p-6">
          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-wizard-text-dim">+{article.tags.length - 3}</span>
              )}
            </div>
          )}

          {/* Title */}
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-wizard-purple-light transition-colors mb-2">
            {article.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-wizard-text-muted leading-relaxed mb-4 line-clamp-2">
            {article.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-wizard-text-dim">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(article.date)}
            </span>
            <span className="text-wizard-border">·</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readingTime}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 text-wizard-text-dim group-hover:text-wizard-purple-light transition-all group-hover:translate-x-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
