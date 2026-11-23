import type { Lang } from '../i18n';

/**
 * A clock time in a time zone, in the page's language: "6:30 PM", or in Bangla
 * "সন্ধ্যা ৬:৩০", with the part of the day first, as it is said.
 * The inline scripts in Timetable.astro and TimeBand.astro do the same in the browser.
 */
export function clockTime(date: Date, timeZone: string, lang: Lang): string {
  if (lang !== 'bn') return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone }).format(date);
  const parts = new Intl.DateTimeFormat('bn-BD', { hour: 'numeric', minute: '2-digit', dayPeriod: 'short', timeZone }).formatToParts(date);
  const part = (type: string) => parts.find((entry) => entry.type === type)?.value ?? '';
  const period = part('dayPeriod') === 'রাত্রি' ? 'রাত' : part('dayPeriod');
  return `${period} ${part('hour')}:${part('minute')}`;
}

/** "Mon–Thu", "Fri–Sun", "Sat–Sun": the first and last of consecutive days, joined by a dash. */
export function dayRange(days: string[], names: Record<string, string>, dash = '–'): string {
  if (days.length > 1) return `${names[days[0]]}${dash}${names[days[days.length - 1]]}`;
  return days.map((day) => names[day]).join('');
}
