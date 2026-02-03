"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-wizard-bg/80 border-b border-wizard-border/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <span className="text-2xl group-hover:animate-float">🧙‍♂️</span>
          <span className="font-heading text-xl font-bold bg-gradient-to-r from-wizard-purple-light via-wizard-blue-electric to-wizard-gold bg-clip-text text-transparent">
            The Wizard
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-wizard-text-muted hover:text-wizard-purple-light transition-colors"
          >
            Spellbook
          </Link>
          <Link
            href="/about"
            className="text-sm text-wizard-text-muted hover:text-wizard-purple-light transition-colors"
          >
            About Wiz
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-wizard-text-muted hover:text-wizard-purple-light transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 text-wizard-text-muted hover:text-wizard-purple-light transition-colors"
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
        <div className="sm:hidden border-t border-wizard-border/30 bg-wizard-bg/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-wizard-text-muted hover:text-wizard-purple-light transition-colors"
            >
              ✦ Spellbook
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-wizard-text-muted hover:text-wizard-purple-light transition-colors"
            >
              ✦ About Wiz
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
