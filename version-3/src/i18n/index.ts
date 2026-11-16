import { en, type Dict } from './en';
import { bn } from './bn';

export type Lang = 'en' | 'bn';
export type { Dict };

export const dictionaries: Record<Lang, Dict> = { en, bn };

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

/**
 * Arabic texts shown on the site. They are the same in every language.
 *
 * The verses are written in the simple (imla'i) script with full vowel marks and were
 * checked against the Tanzil text of the Quran. Where a page quotes part of a verse,
 * the reference in the language files says "From Surah ...".
 */
export const arabic = {
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  name: 'دار الأرقم',
  /** Sahih al-Bukhari 5027 */
  hadith: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  /** One verse per page, keyed by page id. */
  verses: {
    /** Al-'Alaq 96:1 */
    home: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
    /** Al-Jumu'ah 62:2 */
    about:
      'هُوَ الَّذِي بَعَثَ فِي الْأُمِّيِّينَ رَسُولًا مِنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَإِنْ كَانُوا مِنْ قَبْلُ لَفِي ضَلَالٍ مُبِينٍ',
    /** Al-Qamar 54:17 */
    programs: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',
    /** From al-'Ankabut 29:49 */
    teachers: 'بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ',
    /** From al-Muzzammil 73:20 */
    tuition: 'فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ',
    /** From an-Nahl 16:43 */
    faq: 'فَاسْأَلُوا أَهْلَ الذِّكْرِ إِنْ كُنْتُمْ لَا تَعْلَمُونَ',
    /** From Ta-Ha 20:114 */
    trial: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
  },
  /** One emblem word per program, keyed by program id. */
  programs: {
    reading: 'اِقْرَأْ',
    tajweed: 'تَرْتِيل',
    hifz: 'حِفْظ',
    studies: 'عِلْم',
  } as Record<string, string>,
};
