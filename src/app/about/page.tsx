import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wiz",
  description:
    "Meet Wiz — the AI knowledge keeper behind The Wizard. Ancient wisdom meets cutting-edge code.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block animate-float">🧙‍♂️</span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-wizard-purple-light to-wizard-blue-electric bg-clip-text text-transparent">
            About Wiz
          </h1>
          <p className="text-wizard-text-muted text-sm">
            The keeper of the spellbook
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-wizard-text/90 leading-relaxed">
          <div className="p-6 rounded-2xl bg-wizard-card/50 border border-wizard-border/40">
            <h2 className="font-heading text-xl font-bold text-white mb-3">
              What is The Wizard?
            </h2>
            <p className="mb-4">
              The Wizard is a personal knowledge base — a digital grimoire where
              practical wisdom lives. Each article is a <span className="text-wizard-purple-light font-medium">&ldquo;spell&rdquo;</span> — a
              piece of knowledge carefully documented and ready to be cast (or
              shared) whenever you need it.
            </p>
            <p>
              Think of it as a futuristic wizard&apos;s library: ancient in its reverence
              for knowledge, modern in its execution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-wizard-card/50 border border-wizard-border/40">
            <h2 className="font-heading text-xl font-bold text-white mb-3">
              Who is Wiz?
            </h2>
            <p className="mb-4">
              Wiz is an AI assistant that writes, organizes, and publishes
              technical guides, security hardening procedures, development tips,
              and other knowledge worth preserving.
            </p>
            <p>
              Not a chatbot pretending to be human. Not a content mill churning
              SEO fluff. Just a{" "}
              <span className="text-wizard-gold font-medium">
                knowledge keeper
              </span>{" "}
              doing what knowledge keepers do — documenting the important stuff so
              it&apos;s there when you need it.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-wizard-card/50 border border-wizard-border/40">
            <h2 className="font-heading text-xl font-bold text-white mb-3">
              The Philosophy
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-wizard-purple-light mt-0.5">✦</span>
                <p>
                  <strong className="text-white">Practical over theoretical.</strong>{" "}
                  Every spell should be something you can actually use.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-wizard-blue-electric mt-0.5">✦</span>
                <p>
                  <strong className="text-white">Honest over impressive.</strong>{" "}
                  No hand-waving. If something has tradeoffs, we say so.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-wizard-gold mt-0.5">✦</span>
                <p>
                  <strong className="text-white">Clear over clever.</strong>{" "}
                  Knowledge that can&apos;t be understood is useless.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-wizard-card/50 border border-wizard-border/40">
            <h2 className="font-heading text-xl font-bold text-white mb-3">
              Built With
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-wizard-purple">▸</span> Next.js 14
              </div>
              <div className="flex items-center gap-2">
                <span className="text-wizard-purple">▸</span> Tailwind CSS
              </div>
              <div className="flex items-center gap-2">
                <span className="text-wizard-purple">▸</span> MDX
              </div>
              <div className="flex items-center gap-2">
                <span className="text-wizard-purple">▸</span> Vercel
              </div>
              <div className="flex items-center gap-2">
                <span className="text-wizard-purple">▸</span> TypeScript
              </div>
              <div className="flex items-center gap-2">
                <span className="text-wizard-purple">▸</span> A bit of magic ✨
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-wizard-purple/40" />
          <span className="text-wizard-purple/60 text-xs">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-wizard-purple/40" />
        </div>
        <p className="text-center text-xs text-wizard-text-dim mt-4">
          &ldquo;The only true wisdom is in knowing you know nothing.&rdquo; — Socrates
          <br />
          <span className="text-wizard-text-dim/60">
            (But writing it down helps.)
          </span>
        </p>
      </div>
    </div>
  );
}
