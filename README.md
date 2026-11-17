# Darul Arqam

The website of Darul Arqam, an online Quran academy: live one-on-one classes for families in the United States, taught by imams and huffaz from Bangladesh.

This repository holds **three designs** of the site, with the same content, so that one can be chosen:

| | Design 1, classic | Design 2, modern | Design 3, the book |
| --- | --- | --- | --- |
| Layout | A long home page, with a page for each program | Thirteen pages, in English and Bangla, with reviews | A book of 64 pages that opens and turns as you scroll |
| Look | The academy's logo and colours: emerald, soft gold and off-white; pointed arches and a star lattice | The academy's logo; lapis blue, turquoise and saffron on warm paper; round forms | Burgundy leather, gold leaf and cream paper; illuminated verse plates |
| Sources | This folder (`src/`) | [`version-2/`](version-2) | [`version-3/`](version-3) |
| HTML files | [`html/`](html) | [`version-2/html/`](version-2/html) | [`version-3/html/`](version-3/html) |
| Guide | This file | [`version-2/README.md`](version-2/README.md) | [`version-3/README.md`](version-3/README.md) |

Open [`designs.html`](designs.html) in a browser to see all three side by side and click through each one.

The designs are separate projects that share nothing. Contact details, prices and teacher profiles are therefore kept in each one's own `src/config/` folder; once a design is chosen, delete the others. The rest of this file describes design 1.

## Design 1

It is a static site: plain HTML, CSS and a little JavaScript, with no server and no database.

- **Home** is one long page: introduction, the story of the name, vision and mission, programs, who we teach, the educational philosophy, teachers and their profiles, how it works, tuition, questions, and the free-trial request form.
- **Five more pages** go into detail: Nazirah, Hifz, Alimiyah, Deeniyat and Academics. Each opens with a related Quranic verse in an arch.

## The HTML files

The finished site is in the [`html/`](html) folder, ready to use as it is:

| File | What it is |
| --- | --- |
| `html/index.html` | The home page |
| `html/nazirah.html` | Nazirah al-Qur'an: reading, in five stages |
| `html/hifz.html` | Hifz al-Qur'an: memorization, in two tracks |
| `html/alimiyah.html` | Alimiyah and Islamic Studies: three divisions |
| `html/deeniyat.html` | Deeniyat: the eight subjects every Qur'an student takes |
| `html/academics.html` | Philosophy, teaching, assessment, standards and welfare |
| `html/404.html` | The "page not found" page |
| `html/assets/` | The stylesheet and the fonts |

Double-click `html/index.html` to view the site in a browser, or upload everything inside `html/` to a web host. The pages use relative links, so they work from disk, from the root of a domain, or from any sub-folder.

The files in `html/` are generated from the sources in `src/` with [Astro](https://astro.build). Change the sources and build again, rather than editing the generated files, or the next build will overwrite your edits.

## Where the content comes from

What Darul Arqam teaches, and how, is taken from the academy's four documents: the Public Academic Framework, the Nazirah al-Qur'an & Deeniyat Program, the Master Hifz & Deeniyat Curriculum, and the Alimiyah & Islamic Studies Program.

That content lives in one file, `src/content/academy.ts`, which is identical in all three designs: programs, stages, syllabus units, semesters, outcomes, assessment, certification, vision, mission and values. Each design only decides how to show it. When the curriculum changes, change that file and copy it to the other designs.

The site shows a curated version of the curriculum: the structure and outcomes are always visible, and the unit-by-unit detail opens on request ("What is covered"). Two editorial choices were made throughout: American spelling (program, memorize), and one spelling for each Arabic term (Tawheed, Zakat, Qur'an).

One thing on the site comes from the academy directly rather than from the documents: Nazirah and Hifz are taught one-on-one, while Alimiyah and Junior Islamic Studies are taught in group classes by semester. Two things should still be confirmed: the certificate wording, which turns the documents' certification policy into a plain public statement that a certificate is not an accredited degree; and that the first class is free.

## Languages

The site is published in English. A Bangla version existed for the earlier content and is switched off until the new content has been translated, so that the two languages never disagree.

To bring Bangla back: add `src/i18n/bn.ts` with the same shape as `en.ts`, add `'bn'` to `published` in `src/i18n/index.ts`, and add the pages under `src/pages/bn/`. The language switch then reappears by itself. The earlier Bangla wording is in the repository history (`src/i18n/bn.ts` before the commit "restructure around the academy's curriculum documents") and is a useful starting point for the parts that did not change. The Bangla fonts and type settings are still in place.

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
| Contact details, form destination, tuition prices, site address | `src/config/site.ts` |
| Teacher profiles | `src/config/teachers.ts` |
| Headings, page titles, questions, form labels and other wording | `src/i18n/en.ts` |
| Arabic texts: the verses, the hadith | `src/i18n/index.ts` |
| Which pages exist and their file names | `src/lib/routes.ts` |
| Colours, fonts, spacing, shared pieces | `src/styles/global.css` |
| A section of the home page | `src/components/<Section>.astro` |
| A program or academics page | `src/views/<Page>View.astro` |

## Before going live

`src/config/site.ts` holds stand-in values so the pages render. Replace each of these:

- **`contact.email`, `contact.whatsappNumber`, `contact.whatsappDisplay`** are placeholders, not real contact details.
- **`plans`** holds placeholder prices (40, 55 and 85 US dollars a month).
- **`url`** is empty. Set it to the public address of the site so that canonical links, language alternates and the social-sharing image are written into the pages.
- **`formEndpoint`** is empty. See the next section.

`src/config/teachers.ts` holds the teacher profiles. **All six are invented examples**, there to show the layout, and each card carries an "Example profile" tag. Replace them with your real teachers; the file explains how, including how to add a photo. Delete every entry to hide the profiles altogether.

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

Upload the contents of `html/` to any host that serves static files: a folder under IIS, nginx or Apache, or Netlify, Cloudflare Pages, Vercel, GitHub Pages or an S3 bucket. On a host that builds the site for you, set the output folder to `html`.

Point the host's "not found" page at `404.html`. That one page uses links from the root of the domain, because a server may show it for an address at any depth; if the site lives in a sub-folder, set `base` in `astro.config.mjs` to that folder and build again.

## Design notes

- **Logo:** the academy's own mark and lettering, taken as vector shapes from its logo sheet (`src/components/Logo.astro`, `Wordmark.astro`; a standalone copy is in `public/logo-mark.svg`). The tagline under it is set in type, because the artwork on the sheet spells it "Islamic Institue".
- **Palette:** the five colours of the logo sheet: Deep Emerald `#063D30`, Islamic Green `#087C59`, Soft Gold `#D6B66D`, Off White `#F7F8F4` and Dark Text `#172923`, with shades between them, defined as custom properties at the top of `src/styles/global.css`.
- **Type:** Cormorant Garamond for headings, Jost for text, Amiri for Arabic, Noto Serif Bengali and Hind Siliguri for Bangla. The fonts are bundled with the site, so nothing is loaded from a third party.
- **Ornament:** the eight-pointed star (khatam) lattice, the rosette and the pointed arch are drawn in SVG. `src/lib/geometry.ts` computes their points.
- The pages work without JavaScript. Scripts add the mobile menu, the scroll reveals, the two clocks and the form hand-off.
