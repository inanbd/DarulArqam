/**
 * The chapters of the book, in order, with the page each one starts on.
 * Every chapter has an even number of pages and opens with its verse,
 * so in the open book each verse falls on a left-hand page.
 */
export const chapters = [
  { id: 'home', first: 1 },
  { id: 'about', first: 7 },
  { id: 'programs', first: 11 },
  { id: 'teachers', first: 17 },
  { id: 'tuition', first: 23 },
  { id: 'faq', first: 27 },
  { id: 'trial', first: 31 },
] as const;

export type ChapterId = (typeof chapters)[number]['id'];

/** The number of the last page. */
export const lastPage = 32;
