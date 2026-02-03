export function Footer() {
  return (
    <footer className="relative z-10 border-t border-wizard-border/30 bg-wizard-bg/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧙‍♂️</span>
            <span className="font-heading text-sm text-wizard-text-muted">
              The Wizard
            </span>
          </div>
          <p className="text-xs text-wizard-text-dim text-center sm:text-right">
            Crafted with ancient wisdom &amp; modern code.
            <br className="sm:hidden" />
            <span className="sm:ml-1">Each article is a spell worth casting.</span>
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-wizard-border/20 text-center">
          <p className="text-xs text-wizard-text-dim/60">
            © {new Date().getFullYear()} The Wizard — Knowledge is the greatest magic ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
