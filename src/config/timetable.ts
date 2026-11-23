/**
 * Class timetables, from the academy's "Class Timetable" spreadsheet.
 *
 * The rule for each region is stored in UTC, as the spreadsheet's developer notes
 * ask; the pages convert it to the reader's own time zone, so Daylight Saving
 * Time is always right. Exact session slots inside each window are assigned at
 * admission and are deliberately not published.
 *
 * USA & Canada: every class day runs 23:30–02:30 UTC (6:30–9:30 PM Eastern in
 *   winter, 7:30–10:30 PM in summer). 4-day plan Monday–Thursday, 3-day plan
 *   Friday–Sunday, 2-day plan Saturday–Sunday, all local days.
 * Bangladesh: Monday–Thursday, 18:00–22:00 Bangladesh time (12:00–16:00 UTC).
 *   3-day and 2-day students choose their days within Monday–Thursday.
 */
import type { Region } from './fees';

export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export const week: Day[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export interface Plan {
  days: 4 | 3 | 2;
  /** The days classes can fall on. */
  on: Day[];
  /** When set, the student chooses this many of `on`; otherwise classes are on all of them. */
  choose?: number;
}

export interface Window {
  /** The window's start in UTC, as hours and minutes. */
  startUtc: [number, number];
  /** Length of the window, in hours. */
  hours: number;
  /** How many one-hour group sessions fit in the window each day. */
  sessions: number;
  /** The time zone the window is planned in, for the reference times on the page. */
  homeZone: string;
  plans: Plan[];
}

export const timetable: Record<Region, Window> = {
  us: {
    startUtc: [23, 30],
    hours: 3,
    sessions: 3,
    homeZone: 'America/New_York',
    plans: [
      { days: 4, on: ['mon', 'tue', 'wed', 'thu'] },
      { days: 3, on: ['fri', 'sat', 'sun'] },
      { days: 2, on: ['sat', 'sun'] },
    ],
  },
  bd: {
    startUtc: [12, 0],
    hours: 4,
    sessions: 4,
    homeZone: 'Asia/Dhaka',
    plans: [
      { days: 4, on: ['mon', 'tue', 'wed', 'thu'] },
      { days: 3, on: ['mon', 'tue', 'wed', 'thu'], choose: 3 },
      { days: 2, on: ['mon', 'tue', 'wed', 'thu'], choose: 2 },
    ],
  },
};

/**
 * The time zones listed in the USA & Canada reference table. Their winter and
 * summer times are worked out from the UTC rule when the site is built.
 */
export const northAmericanZones = [
  { id: 'newfoundland', iana: 'America/St_Johns' },
  { id: 'atlantic', iana: 'America/Halifax' },
  { id: 'eastern', iana: 'America/New_York' },
  { id: 'central', iana: 'America/Chicago' },
  { id: 'mountain', iana: 'America/Denver' },
  { id: 'pacific', iana: 'America/Los_Angeles' },
  { id: 'alaska', iana: 'America/Anchorage' },
  { id: 'hawaii', iana: 'Pacific/Honolulu' },
] as const;

/** A class window's start and end on a given UTC date, as Date objects. */
export function windowOn(region: Region, year: number, month: number, day: number): [Date, Date] {
  const { startUtc, hours } = timetable[region];
  const start = new Date(Date.UTC(year, month, day, startUtc[0], startUtc[1]));
  return [start, new Date(start.getTime() + hours * 3600_000)];
}
