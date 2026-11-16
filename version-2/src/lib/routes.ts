import type { Lang } from '../i18n';

/** The pages of the site and the file each one is written to. */
export const pages = {
  home: 'index',
  about: 'about',
  programs: 'programs',
  nazirah: 'nazirah',
  hifz: 'hifz',
  alimiyah: 'alimiyah',
  deeniyat: 'deeniyat',
  academics: 'academics',
  teachers: 'teachers',
  tuition: 'tuition',
  faq: 'faq',
  trial: 'free-trial',
} as const;

export type PageId = keyof typeof pages;

/** The main menu, in order. `under` lists the pages that open beneath an entry. */
export const menu: { page: PageId; under?: PageId[] }[] = [
  { page: 'home' },
  { page: 'about' },
  { page: 'programs', under: ['nazirah', 'hifz', 'alimiyah', 'deeniyat'] },
  { page: 'academics' },
  { page: 'teachers' },
  { page: 'tuition' },
  { page: 'faq' },
];

/** The page of each program, keyed by the program's id in src/content/academy.ts. */
export const programPage: Record<string, PageId> = { nazirah: 'nazirah', hifz: 'hifz', alimiyah: 'alimiyah', deeniyat: 'deeniyat' };

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
