/**
 * Monthly tuition fees, from the academy's fee structure ("Monthly Tuition Fee
 * Structure & Enrollment Policy").
 *
 * The same fees apply to every program. Nazirah and Hifz can be taken in a group
 * batch or one-to-one; Alimiyah is taught in group batches only, at the group fee.
 * Students outside the USA, Canada and Bangladesh pay the USA & Canada fees.
 */
export type Region = 'us' | 'bd';

export const regions: Region[] = ['us', 'bd'];

export const currency: Record<Region, { code: 'USD' | 'BDT'; symbol: string }> = {
  us: { code: 'USD', symbol: '$' },
  bd: { code: 'BDT', symbol: '৳' },
};

export interface Fee {
  /** Classes a week. */
  days: 4 | 3 | 2;
  /** Monthly fee for a group batch, in the region's currency. */
  group: number;
  /** Monthly fee for one-to-one lessons, in the region's currency. */
  oneToOne: number;
}

export const fees: Record<Region, Fee[]> = {
  us: [
    { days: 4, group: 85, oneToOne: 125 },
    { days: 3, group: 80, oneToOne: 100 },
    { days: 2, group: 75, oneToOne: 85 },
  ],
  bd: [
    { days: 4, group: 1000, oneToOne: 1500 },
    { days: 3, group: 800, oneToOne: 1200 },
    { days: 2, group: 700, oneToOne: 1000 },
  ],
};

/** The lowest monthly fee in a region, for "from ..." lines. */
export function lowestFee(region: Region): number {
  return Math.min(...fees[region].map((fee) => fee.group));
}

/** Writes an amount with its currency symbol and thousands separator, in the page's digits. */
export function formatFee(region: Region, amount: number, lang: 'en' | 'bn'): string {
  const grouped = amount.toLocaleString('en-US');
  const digits = lang === 'bn' ? grouped.replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[Number(d)]) : grouped;
  return `${currency[region].symbol}${digits}`;
}
