import type { Lang } from '../i18n';

/** The pages of the site, in menu order, and the file each one is written to. */
export const pages = {
  home: 'index',
  about: 'about',
  programs: 'programs',
  teachers: 'teachers',
  tuition: 'tuition',
  faq: 'faq',
  trial: 'free-trial',
} as const;

export type PageId = keyof typeof pages;

/** Pages listed in the main menu. The free trial is the button beside it. */
export const menu: PageId[] = ['home', 'about', 'programs', 'teachers', 'tuition', 'faq'];

/**
 * Link to a page in a language, e.g. `/programs.html` or `/bn/programs.html`.
 * The build turns these root-based links into relative ones, so the generated
 * files also work when opened from disk. `hash` is an optional `#section`.
 */
export function pageHref(lang: Lang, page: PageId, hash = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const folder = lang === 'bn' ? '/bn' : '';
  // The development server answers at /programs; the built site has programs.html.
  const file = import.meta.env.DEV ? (page === 'home' ? '' : pages[page]) : `${pages[page]}.html`;
  return `${base}${folder}/${file}${hash}`;
}
