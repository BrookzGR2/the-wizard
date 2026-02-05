"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl">🧙‍♂️</span>
          <span className="font-semibold text-text group-hover:text-accent transition-colors">
            The Wizard
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            About
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 text-text-muted hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-bg-card">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-text-muted hover:text-accent transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-text-muted hover:text-accent transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
