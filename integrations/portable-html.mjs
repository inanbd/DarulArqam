import { createHash } from 'node:crypto';
import { readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Makes the built site portable: plain HTML files that work when opened straight
 * from disk, uploaded to any folder of any web server, or served from a domain root.
 *
 * After each build it:
 *   1. rewrites links that start at the site root ("/assets/site.css") so they are
 *      relative to the page ("./assets/site.css" or "../assets/site.css");
 *   2. drops the legacy .woff copies of the fonts and keeps the .woff2 files,
 *      which every current browser reads;
 *   3. adds a version tag to stylesheet links, so browsers fetch a changed
 *      stylesheet instead of reusing an old copy;
 *   4. adds one line of script so links to a folder ("bn/") open that folder's
 *      index.html when the pages are viewed from disk.
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

        // Stylesheets: keep only woff2, and point at fonts relative to the stylesheet.
        const versions = new Map();
        for (const file of files.filter((name) => name.endsWith('.css'))) {
          const prefix = prefixFor(file);
          const css = (await readFile(file, 'utf8'))
            .replace(/,\s*url\([^)]*\.woff["']?\)\s*format\(["']woff["']\)/g, '')
            .replace(/url\((["']?)\/(?!\/)/g, (_, quote) => `url(${quote}${prefix}`);
          await writeFile(file, css);
          versions.set(toPosix(path.relative(root, file)), createHash('sha256').update(css).digest('hex').slice(0, 8));
        }

        let removed = 0;
        for (const file of files.filter((name) => name.endsWith('.woff'))) {
          await unlink(file);
          removed++;
        }

        const openIndexFromDisk =
          "<script>if(location.protocol==='file:')document.querySelectorAll('a[href$=\"/\"]').forEach(function(a){if(a.protocol==='file:')a.href+='index.html'})</script>";

        let pages = 0;
        for (const file of files.filter((name) => name.endsWith('.html'))) {
          let html = await readFile(file, 'utf8');
          const isNotFoundPage = path.basename(file) === '404.html';

          if (!isNotFoundPage) {
            const prefix = prefixFor(file);
            html = html
              .replace(/(\s(?:href|src|action|poster)=")\/(?!\/)/g, (_, attribute) => `${attribute}${prefix}`)
              .replace('</body>', `${openIndexFromDisk}</body>`);
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

        logger.info(`${pages} page(s) made portable; ${removed} legacy font file(s) dropped.`);
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
