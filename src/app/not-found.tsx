import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-6xl mb-6 block">🔮</span>
        <h1 className="font-heading text-3xl font-bold text-white mb-3">
          Spell Not Found
        </h1>
        <p className="text-wizard-text-muted mb-6">
          This incantation doesn&apos;t exist in the spellbook... yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wizard-purple/20 border border-wizard-purple/40 text-sm text-wizard-purple-light hover:bg-wizard-purple/30 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Spellbook
        </Link>
      </div>
    </div>
  );
}
