import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.nextreachstudio.in",
  // Keep one URL for every page. Otherwise the host serves both /path and /path/
  // as 200 responses, which Google reports as alternate canonical pages.
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.endsWith("/fast-websites/thanks") &&
        !page.endsWith("/fast-websites/thanks/") &&
        !page.endsWith("/404") &&
        !page.endsWith("/404/") &&
        !page.endsWith("/500") &&
        !page.endsWith("/500/"),
    }),
  ],
  // No adapter: the site is fully static and is served by Cloudflare Pages.
  // The @astrojs/vercel adapter was dropped on 2026-10-17 along with the unused
  // /api/chat route. Redirects and security headers now live in
  // public/_redirects and public/_headers — Cloudflare serves those as real
  // 301s, whereas Astro's `redirects` config emits meta-refresh HTML under a
  // static build, which is not an acceptable substitute for a 301.
  output: "static",
});
