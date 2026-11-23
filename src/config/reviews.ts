import type { Lang } from '../i18n';

/**
 * Reviews shown on the home page and the Reviews page.
 *
 * EVERY REVIEW BELOW IS AN INVENTED EXAMPLE, there to show the layout. Each one
 * carries an "Example review" tag on the page. Publishing invented reviews as
 * real ones misleads families and breaks US consumer-protection rules on
 * testimonials, so replace them with reviews from real families before launch.
 *
 * For each real review:
 *   - remove the `example: true` line (it puts the "Example review" tag on the card);
 *   - use the name the reviewer agreed to show (a first name and initial is usual);
 *   - keep the reviewer's own words; translate them into the other language
 *     rather than rewriting them.
 */
export interface Review {
  id: string;
  /** Marks an invented review. Leave it out for real ones. */
  example?: boolean;
  /** Who wrote it: a parent of a student, or a student. */
  role: 'parent' | 'student';
  /** The program it is about, by id: nazirah, hifz, alimiyah. */
  program: 'nazirah' | 'hifz' | 'alimiyah';
  /** Stars, out of five. */
  rating: number;
  text: Record<Lang, { name: string; place: string; detail: string; quote: string }>;
}

export const reviews: Review[] = [
  {
    id: 'parent-nazirah-houston',
    example: true,
    role: 'parent',
    program: 'nazirah',
    rating: 5,
    text: {
      en: {
        name: 'Farhana R.',
        place: 'Houston, Texas',
        detail: 'Mother of a 7-year-old Nazirah student',
        quote:
          'Our daughter started with the Arabic letters in September. By spring she was reading short Surahs from the Mushaf on her own. Her teacher is patient and kind, and the monthly reports show us exactly where she is.',
      },
      bn: {
        name: 'ফারহানা আর.',
        place: 'হিউস্টন, টেক্সাস',
        detail: '৭ বছর বয়সী নাজেরা শিক্ষার্থীর মা',
        quote:
          'আমাদের মেয়ে সেপ্টেম্বরে আরবি হরফ দিয়ে শুরু করেছিল। বসন্ত আসতে আসতে সে নিজে নিজে মুসহাফ থেকে ছোট সূরা পড়তে পারছে। ওর শিক্ষিকা ধৈর্যশীল ও স্নেহময়, আর মাসিক রিপোর্টে আমরা ঠিক বুঝতে পারি ও কোথায় আছে।',
      },
    },
  },
  {
    id: 'parent-hifz-queens',
    example: true,
    role: 'parent',
    program: 'hifz',
    rating: 5,
    text: {
      en: {
        name: 'Abdul K.',
        place: 'Queens, New York',
        detail: 'Father of a Hifz student, age 12',
        quote:
          'We wanted the madrasah way of Hifz without leaving home. The daily Sabaq, Sabqi and Manzil keep my son steady, and his teacher catches every small mistake. He has finished five Juz this year, alhamdulillah.',
      },
      bn: {
        name: 'আব্দুল কে.',
        place: 'কুইন্স, নিউ ইয়র্ক',
        detail: '১২ বছর বয়সী হিফজ শিক্ষার্থীর বাবা',
        quote:
          'আমরা চেয়েছিলাম ঘরে থেকেই মাদরাসার ধারায় হিফজ হোক। প্রতিদিনের সবক, সাবকি আর মানজিল আমার ছেলেকে নিয়মিত রাখে, আর ওর উস্তাদ প্রতিটি ছোট ভুলও ধরিয়ে দেন। আলহামদুলিল্লাহ, এ বছর সে পাঁচ পারা শেষ করেছে।',
      },
    },
  },
  {
    id: 'student-tajweed-dallas',
    example: true,
    role: 'student',
    program: 'nazirah',
    rating: 5,
    text: {
      en: {
        name: 'Sarah M.',
        place: 'Dallas, Texas',
        detail: 'Adult student, Nazirah and Tajweed',
        quote:
          'I could read the Qur’an, but never with confidence. Learning Tajweed one-on-one with a female teacher, at night after work, changed that. For the first time I am not afraid to recite in front of others.',
      },
      bn: {
        name: 'সারাহ এম.',
        place: 'ডালাস, টেক্সাস',
        detail: 'প্রাপ্তবয়স্ক শিক্ষার্থী, নাজেরা ও তাজবীদ',
        quote:
          'আমি কুরআন পড়তে পারতাম, কিন্তু কখনো আত্মবিশ্বাসের সঙ্গে নয়। কাজের পরে রাতে একজন মহিলা শিক্ষকের কাছে ওয়ান-টু-ওয়ান তাজবীদ শিখে সেটা বদলে গেছে। এই প্রথম অন্যদের সামনে তিলাওয়াত করতে আমার ভয় লাগে না।',
      },
    },
  },
  {
    id: 'student-alimiyah-chicago',
    example: true,
    role: 'student',
    program: 'alimiyah',
    rating: 5,
    text: {
      en: {
        name: 'Yusuf A.',
        place: 'Chicago, Illinois',
        detail: 'Youth Alimiyah student, age 17',
        quote:
          'The semester classes are serious but never boring. We read real texts in Arabic, ask questions, and our teacher explains where scholars agree and where they differ. I understand my Deen much better now.',
      },
      bn: {
        name: 'ইউসুফ এ.',
        place: 'শিকাগো, ইলিনয়',
        detail: 'কিশোর আলিমিয়াহ শিক্ষার্থী, বয়স ১৭',
        quote:
          'সেমিস্টারের ক্লাসগুলো গুরুত্বপূর্ণ, কিন্তু কখনো একঘেয়ে নয়। আমরা আরবিতে আসল কিতাব পড়ি, প্রশ্ন করি, আর আমাদের উস্তাদ বুঝিয়ে দেন কোথায় আলেমগণ একমত আর কোথায় ভিন্নমত। এখন আমি আমার দ্বীন অনেক ভালোভাবে বুঝি।',
      },
    },
  },
  {
    id: 'parent-junior-nj',
    example: true,
    role: 'parent',
    program: 'alimiyah',
    rating: 5,
    text: {
      en: {
        name: 'Nusrat J.',
        place: 'Paterson, New Jersey',
        detail: 'Mother of two in Junior Islamic Studies',
        quote:
          'My children look forward to class. They come out telling me stories of the Prophets and reminding us of the dua before eating. The teachers make Islam feel warm and close for them.',
      },
      bn: {
        name: 'নুসরাত জে.',
        place: 'প্যাটারসন, নিউ জার্সি',
        detail: 'জুনিয়র ইসলামি শিক্ষার দুই শিক্ষার্থীর মা',
        quote:
          'আমার সন্তানেরা ক্লাসের জন্য অপেক্ষা করে থাকে। ক্লাস থেকে বেরিয়ে তারা আমাকে নবীদের কাহিনি শোনায় আর খাওয়ার আগের দোয়ার কথা মনে করিয়ে দেয়। শিক্ষকরা ওদের কাছে ইসলামকে আপন ও উষ্ণ করে তুলেছেন।',
      },
    },
  },
  {
    id: 'student-hifz-atlanta',
    example: true,
    role: 'student',
    program: 'hifz',
    rating: 5,
    text: {
      en: {
        name: 'Ibrahim H.',
        place: 'Atlanta, Georgia',
        detail: 'Adult student, Selected Surahs Hifz',
        quote:
          'I am a working father and thought memorizing was only for children. My teacher set a plan that fits my life, and I have now memorized Surah Al-Mulk and Surah Yaseen. The evening times in my time zone make it possible.',
      },
      bn: {
        name: 'ইবরাহিম এইচ.',
        place: 'আটলান্টা, জর্জিয়া',
        detail: 'প্রাপ্তবয়স্ক শিক্ষার্থী, নির্বাচিত সূরা হিফজ',
        quote:
          'আমি একজন চাকরিজীবী বাবা, ভাবতাম মুখস্থ করা কেবল শিশুদের জন্য। আমার উস্তাদ আমার জীবনের সঙ্গে মানানসই একটি পরিকল্পনা করে দিয়েছেন, আর এখন আমি সূরা আল-মুলক ও সূরা ইয়াসিন মুখস্থ করেছি। আমার টাইম জোনে সন্ধ্যার সময়গুলোর কারণেই এটা সম্ভব হয়েছে।',
      },
    },
  },
];
