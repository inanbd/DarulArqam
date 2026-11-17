# Darul Arqam, design 2

The second design of the Darul Arqam website: the same content as the first design, laid out as a **multi-page site** with its own look.

- **Look:** lapis blue, turquoise and saffron on warm paper, with round forms and a lattice of overlapping circles. The header and footer carry the academy's logo (`src/components/Logo.astro` and `Wordmark.astro`).
- **Pages:** twelve, in English and in Bangla: home, about, programs, a page each for Nazirah, Hifz, Alimiyah and Deeniyat, academics, teachers, tuition, questions and the free-trial form.
- **Verses:** every page opens with a Quranic verse related to its subject.

This folder is a complete project of its own. It shares nothing with the first design in the folder above, so either one can be deleted once a design is chosen.

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
| `tuition.html` | Tuition and how it works | from al-Muzzammil 73:20 |
| `faq.html` | Questions | from an-Nahl 16:43 |
| `free-trial.html` | Free-trial request form | from Ta-Ha 20:114 |
| `404.html` | "Page not found" | none |

The stylesheet and fonts are in `html/assets/`.

Double-click `html/index.html` to view the site in a browser, or upload everything inside `html/` to a web host. The pages use relative links, so they work from disk, from the root of a domain, or from any sub-folder.

The files in `html/` are generated from the sources in `src/` with [Astro](https://astro.build). Change the sources and build again, rather than editing the generated files, or the next build will overwrite your edits.

## Where the content comes from

What Darul Arqam teaches, and how, is taken from the academy's four documents: the Public Academic Framework, the Nazirah al-Qur'an & Deeniyat Program, the Master Hifz & Deeniyat Curriculum, and the Alimiyah & Islamic Studies Program.

That content lives in one file, `src/content/academy.ts`, which is identical in all three designs: programs, stages, syllabus units, semesters, outcomes, assessment, certification, vision, mission and values. Each design only decides how to show it. When the curriculum changes, change that file and copy it to the other designs.

The site shows a curated version of the curriculum: the structure and outcomes are always visible, and the unit-by-unit detail opens on request ("What is covered"). Two editorial choices were made throughout: American spelling (program, memorize), and one spelling for each Arabic term (Tawheed, Zakat, Qur'an).

One thing on the site comes from the academy directly rather than from the documents: Nazirah and Hifz are taught one-on-one, while Alimiyah and Junior Islamic Studies are taught in group classes by semester. Two things should still be confirmed: the certificate wording, which turns the documents' certification policy into a plain public statement that a certificate is not an accredited degree; and that the first class is free.

## Languages

The site is published in English and in Bangla. The Bangla pages have the same names inside `html/bn/`, and the language switch in the top bar keeps the reader on the same page.

- `src/i18n/bn.ts` holds the Bangla wording and `src/content/academy.bn.ts` the Bangla curriculum. Each has the same shape as its English file (`en.ts`, `academy.ts`): when you add or reword something in one, do the same in the other.
- The meaning of each page's verse in Bangla is Muhiuddin Khan's translation, trimmed to the part quoted on the page.
- Arabic terms use the forms common in Bangladesh (নাজেরা, হিফজ, আলিমিয়াহ, দ্বীনিয়াত, সবক, সাবকি, মানজিল).
- The translation was machine-assisted. Have a native Bangla reader review it, especially the curriculum pages, before the site goes live.

## Run it

You need Node.js 22.23 or newer. Run these inside this folder:

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
| Contact details, form destination, tuition prices, site address | `src/config/site.ts` |
| Teacher profiles | `src/config/teachers.ts` |
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
- **`plans`** holds placeholder prices (40, 55 and 85 US dollars a month).
- **`url`** is empty. Set it to the public address of the site so that canonical links, language alternates and the social-sharing image are written into the pages.
- **`formEndpoint`** is empty. See the next section.

`src/config/teachers.ts` holds the teacher profiles. **All six are invented examples**, there to show the layout, and each card carries an "Example profile" tag. Replace them with your real teachers; the file explains how, including how to add a photo.

The wording also states a few things about how the academy works. Check that each is true, and reword it in both language files if not:

- Classes last 30 minutes.
- The first class is free.
- Students are taught from about five years old.
- Tuition is month to month, with no long contract.
- A missed class can be made up when the teacher is told in advance.
- Parents receive regular progress updates.

## The free-trial form

The form works in one of three ways, chosen by `src/config/site.ts`:

1. **`formEndpoint` is set.** The answers are posted to that address and the visitor sees a thank-you message without leaving the page. Any service that accepts a form post and answers with JSON will do, such as Formspree, Web3Forms or Basin, or an API of your own.
2. **`formEndpoint` is empty and a WhatsApp number is set.** WhatsApp opens with the answers written out as a message to that number, and the visitor presses send.
3. **Neither is set.** The visitor's email app opens with the answers written out as an email to `contact.email`.

A hidden field catches most automated spam. If you use a form service, turn on its own spam protection as well.

## Hosting

Upload the contents of `html/` to any host that serves static files: a folder under IIS, nginx or Apache, or Netlify, Cloudflare Pages, Vercel, GitHub Pages or an S3 bucket. On a host that builds the site for you, set the project folder to `version-2` and the output folder to `html`.

Point the host's "not found" page at `404.html`. That one page uses links from the root of the domain, because a server may show it for an address at any depth; if the site lives in a sub-folder, set `base` in `astro.config.mjs` to that folder and build again.

## Design notes

- **Palette:** night blue and lapis, turquoise, saffron and warm paper, defined as custom properties at the top of `src/styles/global.css`.
- **Type:** El Messiri for headings, Figtree for text, Noto Naskh Arabic for verses, Reem Kufi for the Arabic name, Anek Bangla and Noto Sans Bengali for Bangla. The fonts are bundled with the site, so nothing is loaded from a third party.
- **Ornament:** the twelve-pointed medallion (shamsa) of illuminated Quran manuscripts, and a lattice of overlapping circles.
- The pages work without JavaScript. Scripts add the mobile menu, the scroll reveals, the two clocks and the form hand-off.
