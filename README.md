# 🧙‍♂️ The Wizard

A personal knowledge base / article site with a futuristic fantasy wizard aesthetic. Each article is a "spell" — a piece of knowledge carefully documented and ready to be shared.

## Tech Stack

- **Next.js 14** (App Router, static generation)
- **Tailwind CSS** (dark theme, custom wizard design system)
- **TypeScript**
- **MDX articles** with syntax highlighting, copy buttons, TOC
- **Deployed to Vercel**

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding Articles

Drop a `.mdx` file in the `/content` directory with this frontmatter:

```yaml
---
title: "Your Article Title"
date: "2026-01-15"
description: "Brief description for previews and SEO"
tags: ["tag1", "tag2"]
readingTime: "5 min read"  # Optional - auto-calculated if omitted
coverImage: "/images/cover.jpg"  # Optional
---
```

Then write your article in Markdown below the frontmatter. The site will automatically pick it up.

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Git Integration
1. Push to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. Deploy automatically on push

## Features

- 🌙 Dark theme with magical accents
- 📱 Mobile-first, beautiful on phones
- 🔍 Client-side search
- 🏷️ Tag filtering
- 📋 Copy code blocks
- 📤 Share button (native share API)
- 📝 Copy as Markdown button
- 📑 Table of contents for long articles
- ✨ Particle background effects
- 🔎 SEO meta tags + Open Graph

## Project Structure

```
the-wizard/
├── content/          # MDX articles go here
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   └── lib/          # Utilities (article parsing, markdown)
├── public/           # Static assets
└── tailwind.config.ts
```

---

*Crafted with ancient wisdom & modern code. ✦*
