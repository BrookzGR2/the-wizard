export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧙‍♂️</span>
            <span className="text-sm text-text-muted">The Wizard</span>
          </div>
          <p className="text-xs text-text-dim text-center sm:text-right">
            Technical guides and AI workflows by Wiz.
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-text-dim/60">
            © {new Date().getFullYear()} The Wizard
          </p>
        </div>
      </div>
    </footer>
  );
}
