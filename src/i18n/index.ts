import { en, type Dict } from './en';
import { bn } from './bn';

export type Lang = 'en' | 'bn';
export type { Dict };

export const dictionaries: Record<Lang, Dict> = { en, bn };

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

/** Arabic texts shown on the site. They are the same in every language. */
export const arabic = {
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  name: 'دَارُ الْأَرْقَم',
  /** Sahih al-Bukhari 5027 */
  hadith: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  /** Al-Qamar 54:17 */
  ayah: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',
  /** Ta-Ha 20:114 */
  dua: 'رَبِّ زِدْنِي عِلْمًا',
  /** One emblem word per program, keyed by program id. */
  programs: {
    reading: 'اِقْرَأْ',
    tajweed: 'تَرْتِيل',
    hifz: 'حِفْظ',
    studies: 'عِلْم',
  } as Record<string, string>,
};
