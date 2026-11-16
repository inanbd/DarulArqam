import type { Lang } from '../i18n';

/** The pages of the site and the file each one is written to. */
export const pages = {
  home: 'index',
  nazirah: 'nazirah',
  hifz: 'hifz',
  alimiyah: 'alimiyah',
  deeniyat: 'deeniyat',
  academics: 'academics',
} as const;

export type PageId = keyof typeof pages;

/** The pages that open beneath "Programs" in the menu. */
export const programPages: PageId[] = ['nazirah', 'hifz', 'alimiyah', 'deeniyat'];

/** The page of each program, keyed by the program's id in src/content/academy.ts. */
export const programPage: Record<string, PageId> = { nazirah: 'nazirah', hifz: 'hifz', alimiyah: 'alimiyah', deeniyat: 'deeniyat' };

/**
 * Link to a page, e.g. `/hifz.html`. The build turns these root-based links into
 * relative ones, so the generated files also work when opened from disk.
 * `hash` is an optional `#section`.
 */
export function pageHref(lang: Lang, page: PageId, hash = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const folder = lang === 'bn' ? '/bn' : '';
  // The development server answers at /hifz; the built site has hifz.html.
  const file = import.meta.env.DEV ? (page === 'home' ? '' : pages[page]) : `${pages[page]}.html`;
  return `${base}${folder}/${file}${hash}`;
}

/**
 * Link to a section of the home page. On the home page itself this is a plain
 * `#section`, so the browser scrolls instead of loading the page again.
 */
export function sectionHref(lang: Lang, current: PageId, section: string): string {
  return current === 'home' ? `#${section}` : pageHref(lang, 'home', `#${section}`);
}
