import type { Lang } from '../i18n';

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

/** Writes a number with the digits of the page language. */
export function num(value: number | string, lang: Lang): string {
  const text = String(value);
  return lang === 'bn' ? text.replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : text;
}

/** Two-digit counter for numbered lists: 01, 02... */
export function counter(index: number, lang: Lang): string {
  return num(String(index + 1).padStart(2, '0'), lang);
}

/** Prefixes a site path with the configured base, so the site also works from a sub-folder. */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
