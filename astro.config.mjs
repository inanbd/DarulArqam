import { defineConfig } from 'astro/config';
import portableHtml from './integrations/portable-html.mjs';

// `npm run build` writes the finished site to ./html as plain HTML, CSS and fonts.
// The files work when opened from disk and on any static host (IIS, Netlify, S3...).
export default defineConfig({
  output: 'static',
  outDir: './html',
  trailingSlash: 'always',
  // Keep the generated pages and stylesheet readable.
  compressHTML: false,
  build: { assets: 'assets', inlineStylesheets: 'never' },
  vite: {
    build: {
      minify: false,
      cssMinify: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: { assetFileNames: 'assets/[name][extname]' },
      },
    },
  },
  devToolbar: { enabled: false },
  integrations: [portableHtml()],
});
