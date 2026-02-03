"use client";

import { useEffect, useRef } from "react";

export function MDXContent({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Find all <pre> elements and wrap them + add copy buttons
    const preElements = contentRef.current.querySelectorAll("pre");
    preElements.forEach((pre) => {
      // Wrap in a group div for hover effect
      const wrapper = document.createElement("div");
      wrapper.className = "relative group";
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Create copy button
      const btn = document.createElement("button");
      btn.className =
        "absolute top-2 right-2 px-2.5 py-1.5 rounded-lg bg-wizard-surface/80 border border-wizard-border/40 text-xs text-wizard-text-dim hover:text-[#a78bfa] hover:border-[#8b5cf6]/40 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 focus:opacity-100 z-10";
      btn.innerHTML = `<span class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy</span>`;

      btn.addEventListener("click", async () => {
        const code = pre.querySelector("code")?.textContent || pre.textContent || "";
        await navigator.clipboard.writeText(code);
        btn.innerHTML = `<span class="flex items-center gap-1" style="color: #f59e0b"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Copied!</span>`;
        setTimeout(() => {
          btn.innerHTML = `<span class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy</span>`;
        }, 2000);
      });

      wrapper.appendChild(btn);
    });
  }, [html]);

  return (
    <div
      ref={contentRef}
      className="article-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
