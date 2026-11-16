/**
 * Business details used across the site.
 *
 * Everything marked PLACEHOLDER is a stand-in so the pages render;
 * replace each one with the real value before going live.
 */
export const site = {
  name: 'Darul Arqam',
  nameBn: 'দারুল আরকাম',
  nameAr: 'دار الأرقم',

  /**
   * Public address of the site, with no trailing slash, e.g. 'https://www.yourdomain.com'.
   * Leave empty until the domain is known: canonical and social-sharing links are
   * only written when this is set.
   */
  url: '',

  contact: {
    /** PLACEHOLDER: the address families should write to. */
    email: 'salam@darularqam.example',
    /** PLACEHOLDER: WhatsApp number, digits only with country code (no +, spaces or dashes). */
    whatsappNumber: '15550100123',
    /** PLACEHOLDER: the same number, written the way it should be shown. */
    whatsappDisplay: '+1 (555) 010-0123',
  },

  /**
   * Where the free-trial form sends its answers.
   *
   * Set this to a form endpoint that accepts a POST (Formspree, Web3Forms, Basin,
   * or your own API) and requests arrive by email without the visitor leaving the page.
   * While it is empty, the form opens WhatsApp with the answers written out as a
   * message to `contact.whatsappNumber` (or an email draft if that is empty too).
   */
  formEndpoint: '',

  /**
   * PLACEHOLDER tuition, in US dollars per month. `featured` marks the highlighted plan.
   */
  plans: [
    { id: 'two', classesPerWeek: 2, classesPerMonth: 8, monthlyUsd: 40, featured: false },
    { id: 'three', classesPerWeek: 3, classesPerMonth: 12, monthlyUsd: 55, featured: true },
    { id: 'five', classesPerWeek: 5, classesPerMonth: 20, monthlyUsd: 85, featured: false },
  ],
} as const;

export type PlanId = (typeof site.plans)[number]['id'];
