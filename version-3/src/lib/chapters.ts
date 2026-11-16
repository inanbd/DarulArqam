/**
 * The chapters of the book, in order, with the page each one starts on.
 * Every chapter has an even number of pages and opens with its verse,
 * so in the open book each verse falls on a left-hand page.
 */
export const chapters = [
  { id: 'home', first: 1 },
  { id: 'about', first: 7 },
  { id: 'programs', first: 13 },
  { id: 'nazirah', first: 17 },
  { id: 'hifz', first: 23 },
  { id: 'alimiyah', first: 29 },
  { id: 'deeniyat', first: 39 },
  { id: 'academics', first: 43 },
  { id: 'teachers', first: 49 },
  { id: 'tuition', first: 55 },
  { id: 'faq', first: 59 },
  { id: 'trial', first: 63 },
] as const;

export type ChapterId = (typeof chapters)[number]['id'];

/** The number of the last page. */
export const lastPage = 64;

/** The first page of a chapter. */
export function firstPage(id: ChapterId): number {
  return chapters.find((chapter) => chapter.id === id)!.first;
}
