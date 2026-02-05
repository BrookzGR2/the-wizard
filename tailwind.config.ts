import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern dark theme matching ULTIMATE-AI-WORKFLOW.html
        bg: "#09090b",
        "bg-card": "#18181b",
        "bg-elevated": "#27272a",
        text: "#fafafa",
        "text-muted": "#a1a1aa",
        "text-dim": "#71717a",
        accent: "#8b5cf6",
        "accent-light": "#a78bfa",
        green: "#22c55e",
        blue: "#3b82f6",
        orange: "#f59e0b",
        red: "#ef4444",
        border: "#3f3f46",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(135deg, #1a1a2e 0%, #09090b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
