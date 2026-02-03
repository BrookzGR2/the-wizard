"use client";

import { useState, useEffect, useMemo } from "react";
import type { ArticleMeta } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

export function SearchBar({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [articles]);

  const filtered = useMemo(() => {
    let result = articles;

    if (selectedTag) {
      result = result.filter((a) => a.tags.includes(selectedTag));
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [articles, query, selectedTag]);

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-wizard-text-dim"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search spells..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-wizard-surface border border-wizard-border/40 rounded-xl text-sm text-wizard-text placeholder:text-wizard-text-dim focus:outline-none focus:border-wizard-purple/60 focus:ring-1 focus:ring-wizard-purple/30 transition-all"
        />
      </div>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedTag(null)}
            className={`tag-pill transition-all ${
              !selectedTag
                ? "!bg-wizard-purple/30 !border-wizard-purple/60 !text-white"
                : ""
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`tag-pill transition-all ${
                selectedTag === tag
                  ? "!bg-wizard-purple/30 !border-wizard-purple/60 !text-white"
                  : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))
        ) : (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🔮</span>
            <p className="text-wizard-text-muted">
              No spells found matching &ldquo;{query}&rdquo;
            </p>
            <p className="text-sm text-wizard-text-dim mt-1">
              Try a different incantation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
