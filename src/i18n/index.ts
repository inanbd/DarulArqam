import { en, type Dict } from './en';

export type Lang = 'en' | 'bn';
export type { Dict };

/**
 * The languages the site is published in. Bangla is switched off until its
 * translation of the new content is ready: to bring it back, add `bn.ts` with
 * the same shape as `en.ts`, list it here and add the pages under `src/pages/bn/`.
 */
export const published: Lang[] = ['en'];

const dictionaries: Partial<Record<Lang, Dict>> = { en };

export function getDict(lang: Lang): Dict {
  return dictionaries[lang] ?? en;
}

/**
 * Arabic texts shown on the site. They are the same in every language.
 *
 * The verses are written in the simple (imla'i) script with full vowel marks and were
 * checked against the Tanzil text of the Quran. Where a page quotes part of a verse,
 * the reference in the language file says "From Surah ...".
 */
export const arabic = {
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  name: 'دَارُ الْأَرْقَم',
  /** Sahih al-Bukhari 5027 */
  hadith: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  /** Al-Qamar 54:17 */
  ayah: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',
  /** Ta-Ha 20:114 */
  dua: 'رَبِّ زِدْنِي عِلْمًا',
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
    /** From al-Muzzammil 73:4 */
    nazirah: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
    /** Al-Hijr 15:9 */
    hifz: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
    /** From at-Tawbah 9:122 */
    alimiyah: 'فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ',
    /** Al-Bayyinah 98:5 */
    deeniyat:
      'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ',
    /** From al-Mujadilah 58:11 */
    academics: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ',
    /** From al-Muzzammil 73:20 */
    tuition: 'فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ',
    /** From an-Nahl 16:43 */
    faq: 'فَاسْأَلُوا أَهْلَ الذِّكْرِ إِنْ كُنْتُمْ لَا تَعْلَمُونَ',
    /** From Ta-Ha 20:114 */
    trial: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
  } as Record<string, string>,
};
