import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import { ROUTES } from './src/utils/routesMeta.ts';

function normalizeViteBase(rawBase?: string): string {
  if (!rawBase || rawBase === '.' || rawBase === './' || rawBase === '/') {
    return '/';
  }
  const trimmed = rawBase.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectRouteMetadata(html: string, title: string, description: string): string {
  const safeTitle = escapeHtmlAttr(title);
  const safeDesc = escapeHtmlAttr(description);

  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/is,
      `<meta name="description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/is,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/is,
      `<meta property="og:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/is,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/is,
      `<meta name="twitter:description" content="${safeDesc}" />`
    );
}

function githubPagesStaticRoutesPlugin(): Plugin {
  let resolvedOutDir = 'dist';

  return {
    name: 'ahdp-github-pages-static-routes',
    configResolved(config) {
      resolvedOutDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexHtmlPath = path.join(resolvedOutDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) {
        return;
      }

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

      for (const route of Object.values(ROUTES)) {
        if (route.id === 'home') continue;
        const slug = route.path.replace(/^\/+|\/+$/g, '');
        if (!slug) continue;

        const routeDir = path.join(resolvedOutDir, slug);
        fs.mkdirSync(routeDir, { recursive: true });
        const routeHtml = injectRouteMetadata(baseHtml, route.title, route.description);
        fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
      }

      // Provide a 404.html fallback so GitHub Pages serves the SPA cleanly for unknown subpaths
      fs.writeFileSync(path.join(resolvedOutDir, '404.html'), baseHtml, 'utf-8');
    },
  };
}

export default defineConfig(() => {
  return {
    base: normalizeViteBase(process.env.VITE_BASE_PATH),
    plugins: [react(), tailwindcss(), githubPagesStaticRoutesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
