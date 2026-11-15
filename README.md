# Darul Arqam

The website of Darul Arqam, an online Quran academy: live one-on-one classes for families in the United States, taught by imams and huffaz from Bangladesh.

It is a static site: plain HTML, CSS and a little JavaScript, with no server and no database.

- English lives at `/`, Bangla at `/bn/`.
- Sections: introduction, the story of the name, programs, who we teach, teachers and their profiles, how it works, tuition, questions, and the free-trial request form.

## The HTML files

The finished site is in the [`html/`](html) folder, ready to use as it is:

| File | What it is |
| --- | --- |
| `html/index.html` | The English page |
| `html/bn/index.html` | The Bangla page |
| `html/404.html` | The "page not found" page |
| `html/assets/style.css` | The stylesheet |
| `html/assets/*.woff2` | The fonts |

Double-click `html/index.html` to view the site in a browser, or upload everything inside `html/` to a web host. The pages use relative links, so they work from disk, from the root of a domain, or from any sub-folder.

The files in `html/` are generated from the sources in `src/` with [Astro](https://astro.build). Change the sources and build again, rather than editing the generated files, or the next build will overwrite your edits.

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
| Contact details, form destination, tuition prices, site address | `src/config/site.ts` |
| Teacher profiles | `src/config/teachers.ts` |
| English wording | `src/i18n/en.ts` |
| Bangla wording | `src/i18n/bn.ts` |
| Arabic texts (hadith, ayat, program emblems) | `src/i18n/index.ts` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Layout of a section | `src/components/<Section>.astro` |

The two language files have the same shape. When you add or reword something in one, do the same in the other.

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
- Lessons can be taught in English or in Bangla.
- Tuition is month to month, with no long contract.
- A missed class can be made up when the teacher is told in advance.
- Parents receive regular progress updates.
- Teachers have a formal madrasah education and experience teaching both children and adults.

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

- **Palette:** deep emerald, antique gold and ivory, defined as custom properties at the top of `src/styles/global.css`.
- **Type:** Cormorant Garamond for headings, Jost for text, Amiri for Arabic, Noto Serif Bengali and Hind Siliguri for Bangla. The fonts are bundled with the site, so nothing is loaded from a third party.
- **Ornament:** the eight-pointed star (khatam) lattice, the rosette and the pointed arch are drawn in SVG. `src/lib/geometry.ts` computes their points.
- The pages work without JavaScript. Scripts add the mobile menu, the scroll reveals, the two clocks and the form hand-off.
