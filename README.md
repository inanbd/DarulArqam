# Darul Arqam

The website of Darul Arqam, an online institute of Qur'an and Islamic studies, for students in the USA, Canada and Bangladesh: a **multi-page site** in English and Bangla.

- **Look:** lapis blue, turquoise and saffron on warm paper, with round forms and a lattice of overlapping circles. The header and footer carry the academy's logo (`src/components/Logo.astro` and `Wordmark.astro`).
- **Pages:** thirteen, in English and in Bangla: home, about, programs, a page each for Nazirah, Hifz, Alimiyah and Deeniyat, academics, teachers, reviews, fees and timetable, questions and the free-week request form.
- **Two regions:** fees in US dollars and class times for the USA & Canada, and fees in taka and class times for Bangladesh. The site picks the visitor's region from their time zone, and a switch in the top bar changes it.
- **Verses:** every page opens with a Quranic verse related to its subject.

Earlier design proposals (a classic single page and an animated book) were removed when this design was chosen; they remain in the repository history.

## The HTML files

The finished site is in the [`html/`](html) folder, ready to use as it is:

| File | Page | Verse |
| --- | --- | --- |
| `index.html` | Home | al-'Alaq 96:1 |
| `about.html` | About: the name, vision, mission, values | al-Jumu'ah 62:2 |
| `programs.html` | Programs: overview, and where to begin by age | al-Qamar 54:17 |
| `nazirah.html` | Nazirah al-Qur'an: reading, in five stages | from al-Muzzammil 73:4 |
| `hifz.html` | Hifz al-Qur'an: memorization, in two tracks | al-Hijr 15:9 |
| `alimiyah.html` | Alimiyah and Islamic Studies: three divisions | from at-Tawbah 9:122 |
| `deeniyat.html` | Deeniyat: eight subjects | al-Bayyinah 98:5 |
| `academics.html` | Philosophy, teaching, assessment, standards, welfare | from al-Mujadilah 58:11 |
| `teachers.html` | Teachers | from al-'Ankabut 29:49 |
| `reviews.html` | Reviews, and a form to send one | from Ibrahim 14:7 |
| `tuition.html` | Fees and timetable: monthly fees for each region, class times in the visitor's own time zone, admission | from al-Muzzammil 73:20 |
| `faq.html` | Questions | from an-Nahl 16:43 |
| `free-trial.html` | Free-week request form | from Ta-Ha 20:114 |
| `404.html` | "Page not found" | none |

The stylesheet and fonts are in `html/assets/`.

Double-click `html/index.html` to view the site in a browser, or upload everything inside `html/` to a web host. The pages use relative links, so they work from disk, from the root of a domain, or from any sub-folder.

The files in `html/` are generated from the sources in `src/` with [Astro](https://astro.build). Change the sources and build again, rather than editing the generated files, or the next build will overwrite your edits.

## Where the content comes from

What Darul Arqam teaches, and how, is taken from the academy's four documents: the Public Academic Framework, the Nazirah al-Qur'an & Deeniyat Program, the Master Hifz & Deeniyat Curriculum, and the Alimiyah & Islamic Studies Program.

That content lives in one file, `src/content/academy.ts`, programs, stages, syllabus units, semesters, outcomes, assessment, certification, vision, mission and values. The pages only decide how to show it. When the curriculum changes, change that file, and `academy.bn.ts` to match.

The site shows a curated version of the curriculum: the structure and outcomes are always visible, and the unit-by-unit detail opens on request ("What is covered"). Two editorial choices were made throughout: American spelling (program, memorize), and one spelling for each Arabic term (Tawheed, Zakat, Qur'an).

The fees, the free first week and the class timetables come from the academy's fee schedule and timetable. Two things come from the academy directly: Nazirah and Hifz are taught in a group batch or one-to-one, while Alimiyah and Junior Islamic Studies are taught in group batches by semester; and students outside the USA, Canada and Bangladesh pay the US dollar fees and join either timetable.

## Fees, timetables and regions

The fees page shows one region at a time: **USA & Canada** (US dollars) or **Bangladesh** (taka).

- **Which region a visitor sees.** A visitor whose device is set to Bangladesh time sees Bangladesh; everyone else sees USA & Canada. The switch in the top bar, and the larger one on the fees page, changes it, and the browser remembers the choice. The home page's "Fees from" line follows the same choice. Without JavaScript, both regions are shown.
- **The fees** are in `src/config/fees.ts`: a group and a one-to-one fee for 4, 3 and 2 days a week, in each region. Change a number there and build again; the fees page, the home page and both languages follow.
- **The timetables** are in `src/config/timetable.ts`. Each region's class window is stored in world time (UTC): the USA & Canada window starts at 23:30 UTC for three hours, which is 6:30–9:30 PM Eastern in winter and 7:30–10:30 PM in summer; the Bangladesh window starts at 12:00 UTC for four hours, 6–10 PM in Dhaka. The table of North American time zones is worked out from that when the site is built, and the "In your time" panel works out the class days and hours in each visitor's own time zone in the browser, so daylight saving time is always right.
- **The days:** in the USA & Canada, the 4-day plan runs Monday to Thursday, the 3-day plan Friday to Sunday, and the 2-day plan Saturday and Sunday. In Bangladesh, the 4-day plan runs Monday to Thursday, and with the 3-day and 2-day plans students choose their days from Monday to Thursday.
- Each class lasts one hour. As the timetable asks, the site does not publish exact sub-session slots: it says that a student's exact hour within the window is set when they join.

## Languages

The site is published in English and in Bangla. The Bangla pages have the same names inside `html/bn/`, and the language switch in the top bar keeps the reader on the same page.

- `src/i18n/bn.ts` holds the Bangla wording and `src/content/academy.bn.ts` the Bangla curriculum. Each has the same shape as its English file (`en.ts`, `academy.ts`): when you add or reword something in one, do the same in the other.
- The meaning of each page's verse in Bangla is Muhiuddin Khan's translation, trimmed to the part quoted on the page.
- Arabic terms use the forms common in Bangladesh (নাজেরা, হিফজ, আলিমিয়াহ, দ্বীনিয়াত, সবক, সাবকি, মানজিল). Times read the Bangla way, with the part of the day first (সন্ধ্যা ৬:০০ – রাত ১০:০০).
- The translation was machine-assisted. Have a native Bangla reader review it, especially the curriculum pages and the fees page, before the site goes live.

## Run it

You need Node.js 22.23 or newer.

```bash
npm install
```

```bash
npm run dev
```

The site opens at <http://localhost:4321> and updates as you edit. To regenerate the HTML files:

```bash
npm run build
```

## Where things are

| To change | Edit |
| --- | --- |
| The curriculum: programs, stages, subjects, semesters, values | `src/content/academy.ts` |
| Fees, in dollars and taka | `src/config/fees.ts` |
| Class days and hours, and the North American time zones listed | `src/config/timetable.ts` |
| Contact details, form destination, site address | `src/config/site.ts` |
| Teacher profiles | `src/config/teachers.ts` |
| Reviews | `src/config/reviews.ts` |
| Page titles and headings, the meaning of each verse, questions, labels | `src/i18n/en.ts` |
| Arabic texts: the verses, the hadith | `src/i18n/index.ts` |
| Which pages exist, their file names and the menu | `src/lib/routes.ts` |
| Colours, fonts, spacing, shared pieces | `src/styles/global.css` |
| What a page contains | `src/views/<Page>View.astro` |
| How one block looks | `src/components/<Block>.astro` |

### The verses

Each page's verse has three parts: the Arabic in `src/i18n/index.ts` (under `verses`), and its meaning and reference in `src/i18n/en.ts` (under `pages`). The Arabic is in the simple script with full vowel marks and was checked against the Tanzil text of the Quran. Where a page quotes part of a verse, its reference begins with "From". The meanings are plain renderings written for this site; have someone qualified review them before the site goes live.

To change a page's verse, replace all three parts together.

## Before going live

`src/config/site.ts` holds stand-in values so the pages render. Replace each of these:

- **`contact.email`, `contact.whatsappNumber`, `contact.whatsappDisplay`** are placeholders, not real contact details.
- **`url`** is empty. Set it to the public address of the site so that canonical links, language alternates and the social-sharing image are written into the pages.
- **`formEndpoint`** is empty. See the next section.

`src/config/reviews.ts` holds the reviews shown on the home page and the Reviews page. **All six are invented examples** written in the voice of parents and students, and each carries an "Example review" tag. Publishing invented reviews as real ones misleads families and breaks US rules on testimonials, so replace them with reviews from real families, with their permission, before launch. The review form on the Reviews page sends new reviews to you the same way the free-week form sends requests; nothing appears on the site until you add it to that file.

`src/config/teachers.ts` holds the teacher profiles. **All six are invented examples**, there to show the layout, and each card carries an "Example profile" tag. Replace them with your real teachers; the file explains how, including how to add a photo.

The wording also states a few things that do not come from the academy's documents. Check that each is true, and reword it in both language files if not:

- Male and female teachers are available, and a family can ask for either.
- Students in other countries pay in US dollars and may join either timetable.
- The certificate wording, which turns the documents' certification policy into a plain public statement that a certificate is not an accredited degree.

## The free-week form

The form asks where the student lives, their time zone, the program, a group batch or one-to-one, and how many days a week, and preselects the country and time zone from the visitor's device. It works in one of three ways, chosen by `src/config/site.ts`:

1. **`formEndpoint` is set.** The answers are posted to that address and the visitor sees a thank-you message without leaving the page. Any service that accepts a form post and answers with JSON will do, such as Formspree, Web3Forms or Basin, or an API of your own.
2. **`formEndpoint` is empty and a WhatsApp number is set.** WhatsApp opens with the answers written out as a message to that number, and the visitor presses send.
3. **Neither is set.** The visitor's email app opens with the answers written out as an email to `contact.email`.

A hidden field catches most automated spam. If you use a form service, turn on its own spam protection as well.

## Hosting

Upload the contents of `html/` to any host that serves static files: a folder under IIS, nginx or Apache, or Netlify, Cloudflare Pages, Vercel, GitHub Pages or an S3 bucket. On a host that builds the site for you, set the output folder to `html`.

Point the host's "not found" page at `404.html`. That one page uses links from the root of the domain, because a server may show it for an address at any depth; if the site lives in a sub-folder, set `base` in `astro.config.mjs` to that folder and build again.

## Design notes

- **Palette:** night blue and lapis, turquoise, saffron and warm paper, defined as custom properties at the top of `src/styles/global.css`.
- **Type:** El Messiri for headings, Figtree for text, Noto Naskh Arabic for verses, Reem Kufi for the Arabic name, Anek Bangla and Noto Sans Bengali for Bangla. The fonts are bundled with the site, so nothing is loaded from a third party.
- **Ornament:** the twelve-pointed medallion (shamsa) of illuminated Quran manuscripts, and a lattice of overlapping circles.
- The pages work without JavaScript. Scripts add the mobile menu, the scroll reveals, the region switch, the class times in the visitor's own time zone, the two clocks and the form hand-off.
