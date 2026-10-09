/*
 * Bredaz — Cloudflare Worker: agent-readiness for the static GitHub Pages site.
 *
 * Solves the two is-agentic.com checks that a static host cannot satisfy:
 *   1. Markdown content negotiation  — GET https://bredaz.com/about.html with
 *      `Accept: text/markdown` returns the /about.md twin as `text/markdown`
 *      with `Vary: Accept`, while normal browsers keep getting HTML.
 *   2. Markdown error bodies — unknown paths return a Markdown 404 body when
 *      the client asked for Markdown (still HTTP 404, so nothing gets indexed).
 *
 * NOT ACTIVE YET: needs Cloudflare dashboard/API access to the bredaz.com zone
 * (Workers → Create → paste → deploy, route `bredaz.com/*`). Pending until the
 * account owner grants access. Until then the .md twins in the repo root are the
 * fallback (declared with <link rel="alternate" type="text/markdown">).
 *
 * Cost: free plan Workers = 100k requests/day; this only rewrites same-origin
 * fetches and touches nothing else. Delete this file if you'd rather keep the
 * site 100% static.
 */

const FALLBACK_404 = `# 404 — Page not found

This path does not exist on bredaz.com.

- Site summary for agents: /llms.txt
- Full site content: /llms-full.txt
- Sitemap: /sitemap.xml
`;

export default {
  async fetch(request) {
    const accept = request.headers.get("Accept") || "";
    const wantsMarkdown = accept.includes("text/markdown");
    if (!wantsMarkdown) return fetch(request);

    const url = new URL(request.url);
    const path = url.pathname;

    // "/" -> /index.md ; "/nosotros.html" -> /nosotros.md ; "/encryptia/" -> /encryptia/index.md
    const mdPath = path === "/"
      ? "/index.md"
      : path.endsWith("/")
        ? `${path}index.md`
        : path.replace(/\.html$/, "") + ".md";

    const res = await fetch(new URL(mdPath, url.origin), { cf: { cacheTtl: 300 } });

    if (!res.ok) {
      return new Response(FALLBACK_404, {
        status: 404,
        headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" },
      });
    }

    return new Response(res.body, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
        "Cache-Control": "public, max-age=600",
        "X-Markdown-Twin": mdPath,
      },
    });
  },
};
