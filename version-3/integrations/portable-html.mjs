import { createHash } from 'node:crypto';
import { readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Makes the built site portable: plain HTML files that work when opened straight
 * from disk, uploaded to any folder of any web server, or served from a domain root.
 *
 * After each build it:
 *   1. rewrites links that start at the site root ("/about.html", "/assets/style.css")
 *      so they are relative to the page ("./about.html" or "../about.html");
 *   2. adds a version tag to stylesheet links, so browsers fetch a changed
 *      stylesheet instead of reusing an old copy;
 *   3. writes the page scripts into the pages themselves. Browsers refuse to load
 *      a script module from a separate file when a page is opened from disk, and
 *      without its script the book would not open.
 *
 * 404.html is left with root-based links, because a server may show it for an
 * address at any depth.
 */
export default function portableHtml() {
  return {
    name: 'portable-html',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = await walk(root);
        const toPosix = (file) => file.split(path.sep).join('/');
        /** "./" for a file at the root, "../" one folder down, and so on. */
        const prefixFor = (file) => {
          const up = toPosix(path.relative(path.dirname(file), root));
          return up === '' ? './' : `${up}/`;
        };

        // Stylesheets: point at fonts relative to the stylesheet.
        const versions = new Map();
        for (const file of files.filter((name) => name.endsWith('.css'))) {
          const prefix = prefixFor(file);
          const css = (await readFile(file, 'utf8')).replace(/url\((["']?)\/(?!\/)/g, (_, quote) => `url(${quote}${prefix}`);
          await writeFile(file, css);
          versions.set(toPosix(path.relative(root, file)), createHash('sha256').update(css).digest('hex').slice(0, 8));
        }

        // Scripts, keyed by their path from the site root, to be written into the pages.
        const scripts = new Map();
        for (const file of files.filter((name) => name.endsWith('.js'))) {
          const code = await readFile(file, 'utf8');
          // A script that loads other files must stay a file of its own.
          if (/^\s*(import|export)\s/m.test(code)) continue;
          scripts.set(toPosix(path.relative(root, file)), { file, code: code.replace(/<\/script/gi, '<\\/script') });
        }
        const inlined = new Set();

        let pages = 0;
        for (const file of files.filter((name) => name.endsWith('.html'))) {
          let html = await readFile(file, 'utf8');

          html = html.replace(/<script type="module" src="([^"]+)"><\/script>/g, (match, src) => {
            const target = src.startsWith('/')
              ? src.slice(1)
              : toPosix(path.relative(root, path.resolve(path.dirname(file), src)));
            const script = scripts.get(target);
            if (!script) return match;
            inlined.add(script.file);
            return `<script type="module">\n${script.code}</script>`;
          });

          if (path.basename(file) !== '404.html') {
            const prefix = prefixFor(file);
            html = html.replace(/(\s(?:href|src|action|poster)=")\/(?!\/)/g, (_, attribute) => `${attribute}${prefix}`);
            pages++;
          }

          // Version tag on stylesheet links.
          html = html.replace(/(<link rel="stylesheet" href=")([^"?]+\.css)(")/g, (match, before, href, after) => {
            const target = href.startsWith('/')
              ? href.slice(1)
              : toPosix(path.relative(root, path.resolve(path.dirname(file), href)));
            const version = versions.get(target);
            return version ? `${before}${href}?v=${version}${after}` : match;
          });

          await writeFile(file, html);
        }

        // The copies written into the pages replace the script files.
        for (const file of inlined) await unlink(file);

        logger.info(`${pages} page(s) made portable; ${inlined.size} script(s) written into the pages.`);
      },
    },
  };
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(full) : [full];
    }),
  );
  return nested.flat();
}
