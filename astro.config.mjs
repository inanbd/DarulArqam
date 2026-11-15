import { defineConfig } from 'astro/config';

// Static site: `npm run build` writes plain HTML/CSS/JS to ./dist,
// which can be hosted anywhere (IIS, Netlify, Cloudflare Pages, Vercel, S3...).
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
