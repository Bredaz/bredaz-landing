# ops/ — infra pendiente de acceso

## `cloudflare-agent-readiness.js`

Worker de Cloudflare que resuelve los 2 checks de [is-agentic.com/scan/bredaz.com](https://is-agentic.com/scan/bredaz.com) que un host estático **no puede** cumplir:

1. **Markdown content negotiation** (check Essential) — `Accept: text/markdown` sobre una URL HTML devuelve el `.md` gemelo con `Content-Type: text/markdown` + `Vary: Accept`; el navegador sigue recibiendo HTML.
2. **HTTP 404 con cuerpo Markdown** (check Essential) — GitHub Pages responde su 404 HTML propio; el Worker devuelve un 404 con cuerpo Markdown manteniendo el status 404.

**Estado: escrito, NO desplegado.** Requiere acceso a Cloudflare (dashboard o token API) de la zona `bredaz.com`. Deploy: Workers → Create Worker → pegar el archivo → Deploy → agregar la route `bredaz.com/*`.

Mientras tanto el sitio ya publica los gemelos Markdown (`/about.md`, `/llms-full.txt`, etc.) declarados con `<link rel="alternate" type="text/markdown">`, que es el fallback que los agentes pueden usar sin el Worker.
