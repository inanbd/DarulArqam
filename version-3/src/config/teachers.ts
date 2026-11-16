import type { Lang } from '../i18n';

/**
 * Teacher profiles shown in the "Meet our teachers" part of the site.
 *
 * EVERY PROFILE BELOW IS AN INVENTED EXAMPLE, there to show the layout.
 * Replace them with your real teachers before the site goes live.
 *
 * For each real teacher:
 *   - remove the `example: true` line (it puts an "Example profile" tag on the card);
 *   - to show a photo, put the image in `public/teachers/` and set `photo` to its
 *     path, e.g. '/teachers/abdur-rahman.jpg'. A portrait of about 600 x 750 px works best.
 *     With no photo, the card shows the Arabic word in `emblem` instead.
 */
export interface Teacher {
  id: string;
  gender: 'male' | 'female';
  /** Marks an invented profile. Leave it out for real teachers. */
  example?: boolean;
  /** Path of a portrait inside `public/`, or empty for none. */
  photo: string;
  /** Arabic word shown in the arch when there is no photo. */
  emblem: string;
  /** Years of teaching experience. */
  years: number;
  /** Program ids, as used in the i18n files: reading, tajweed, hifz, studies. */
  programs: string[];
  /** Language codes: bn, en, ar. */
  languages: string[];
  text: Record<Lang, { name: string; title: string; bio: string; qualifications: string[] }>;
}

export const teachers: Teacher[] = [
  {
    id: 'abdur-rahman',
    gender: 'male',
    example: true,
    photo: '',
    emblem: 'حَافِظ',
    years: 14,
    programs: ['hifz', 'tajweed'],
    languages: ['bn', 'en', 'ar'],
    text: {
      en: {
        name: 'Hafiz Mawlana Abdur Rahman',
        title: 'Imam and khatib · Hifz teacher',
        bio: 'Leads the daily prayers at his mosque and has guided many students through the memorization of the whole Quran.',
        qualifications: ['Hafiz of the Quran', 'Dawra-e-Hadith graduate'],
      },
      bn: {
        name: 'হাফেজ মাওলানা আব্দুর রহমান',
        title: 'ইমাম ও খতিব · হিফজ শিক্ষক',
        bio: 'নিজ মসজিদে পাঁচ ওয়াক্ত নামাজের ইমামতি করেন এবং বহু শিক্ষার্থীকে পূর্ণ কুরআন হিফজ করিয়েছেন।',
        qualifications: ['কুরআনের হাফেজ', 'দাওরায়ে হাদিস সম্পন্ন'],
      },
    },
  },
  {
    id: 'muhammad-yusuf',
    gender: 'male',
    example: true,
    photo: '',
    emblem: 'قَارِئ',
    years: 10,
    programs: ['reading', 'tajweed'],
    languages: ['bn', 'en'],
    text: {
      en: {
        name: 'Qari Muhammad Yusuf',
        title: 'Qari · Tajweed teacher',
        bio: 'Known for his patience with beginners, he takes students from their first letters to confident, measured recitation.',
        qualifications: ['Hafiz of the Quran', 'Trained in qira’at and tajweed'],
      },
      bn: {
        name: 'ক্বারী মুহাম্মদ ইউসুফ',
        title: 'ক্বারী · তাজবীদ শিক্ষক',
        bio: 'নতুন শিক্ষার্থীদের প্রতি ধৈর্যের জন্য পরিচিত; প্রথম হরফ থেকে আত্মবিশ্বাসী, তারতীলসহ তিলাওয়াত পর্যন্ত পৌঁছে দেন।',
        qualifications: ['কুরআনের হাফেজ', 'কিরাআত ও তাজবীদে প্রশিক্ষিত'],
      },
    },
  },
  {
    id: 'ibrahim-khalil',
    gender: 'male',
    example: true,
    photo: '',
    emblem: 'إِمَام',
    years: 8,
    programs: ['studies', 'reading'],
    languages: ['bn', 'en', 'ar'],
    text: {
      en: {
        name: 'Mawlana Ibrahim Khalil',
        title: 'Imam · Islamic studies and Arabic',
        bio: 'Brings seerah, fiqh and Arabic to life for teenagers and adults with clear explanations and everyday examples.',
        qualifications: ['Dawra-e-Hadith graduate', 'Specialized in Arabic language'],
      },
      bn: {
        name: 'মাওলানা ইবরাহীম খলীল',
        title: 'ইমাম · ইসলামি শিক্ষা ও আরবি',
        bio: 'সহজ ব্যাখ্যা ও প্রতিদিনের জীবনের উদাহরণ দিয়ে কিশোর ও প্রাপ্তবয়স্কদের কাছে সীরাত, ফিকহ ও আরবিকে জীবন্ত করে তোলেন।',
        qualifications: ['দাওরায়ে হাদিস সম্পন্ন', 'আরবি ভাষায় বিশেষ শিক্ষা'],
      },
    },
  },
  {
    id: 'maryam-siddiqa',
    gender: 'female',
    example: true,
    photo: '',
    emblem: 'حَافِظَة',
    years: 9,
    programs: ['hifz', 'tajweed'],
    languages: ['bn', 'en'],
    text: {
      en: {
        name: 'Hafiza Maryam Siddiqa',
        title: 'Hafiza · Hifz and tajweed teacher',
        bio: 'Teaches memorization to girls and women with a steady daily routine and a great deal of encouragement.',
        qualifications: ['Hafiza of the Quran', 'Graduate of a girls’ madrasah'],
      },
      bn: {
        name: 'হাফেজা মারইয়াম সিদ্দিকা',
        title: 'হাফেজা · হিফজ ও তাজবীদ শিক্ষিকা',
        bio: 'প্রতিদিনের নিয়মিত রুটিন আর অনেক উৎসাহ দিয়ে মেয়ে ও নারীদের হিফজ করান।',
        qualifications: ['কুরআনের হাফেজা', 'মহিলা মাদরাসা থেকে শিক্ষা সম্পন্ন'],
      },
    },
  },
  {
    id: 'fatima-zahra',
    gender: 'female',
    example: true,
    photo: '',
    emblem: 'عَالِمَة',
    years: 7,
    programs: ['studies', 'tajweed'],
    languages: ['bn', 'en', 'ar'],
    text: {
      en: {
        name: 'Alima Fatima Zahra',
        title: 'Alima · Islamic studies and Arabic',
        bio: 'Teaches sisters the essentials of worship, the stories of the prophets and the first steps of Quranic Arabic.',
        qualifications: ['Completed the Alima course', 'Strong tajweed and Arabic'],
      },
      bn: {
        name: 'আলিমা ফাতিমা যাহরা',
        title: 'আলিমা · ইসলামি শিক্ষা ও আরবি',
        bio: 'বোনদের ইবাদতের জরুরি বিষয়, নবীদের কাহিনি এবং কুরআনের আরবির প্রাথমিক পাঠ শেখান।',
        qualifications: ['আলিমা কোর্স সম্পন্ন', 'তাজবীদ ও আরবিতে দক্ষ'],
      },
    },
  },
  {
    id: 'ayesha-khatun',
    gender: 'female',
    example: true,
    photo: '',
    emblem: 'أُسْتَاذَة',
    years: 6,
    programs: ['reading'],
    languages: ['bn', 'en'],
    text: {
      en: {
        name: 'Ustadha Ayesha Khatun',
        title: 'Quran reading teacher for children',
        bio: 'Loved by her youngest students, she makes the Noorani Qaida lively with gentle repetition and warm praise.',
        qualifications: ['Trained Noorani Qaida teacher', 'Strong tajweed'],
      },
      bn: {
        name: 'উস্তাযা আয়েশা খাতুন',
        title: 'শিশুদের কুরআন পড়ার শিক্ষিকা',
        bio: 'ছোট শিক্ষার্থীদের খুব প্রিয়; কোমল পুনরাবৃত্তি আর আন্তরিক প্রশংসায় নূরানী কায়দার পাঠকে প্রাণবন্ত করে তোলেন।',
        qualifications: ['নূরানী কায়দার প্রশিক্ষিত শিক্ষিকা', 'মজবুত তাজবীদ'],
      },
    },
  },
];
