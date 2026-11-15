# Darul Arqam

The website of Darul Arqam, an online Quran academy: live one-on-one classes for families in the United States, taught by imams and huffaz from Bangladesh.

It is a static site built with [Astro](https://astro.build). There is no server and no database; a build produces plain HTML, CSS and a little JavaScript.

- English lives at `/`, Bangla at `/bn/`.
- Sections: introduction, the story of the name, programs, who we teach, teachers, how it works, tuition, questions, and the free-trial request form.

## Run it

You need Node.js 22.23 or newer.

```bash
npm install
```

```bash
npm run dev
```

The site opens at <http://localhost:4321>. To produce the files for hosting:

```bash
npm run build
```

The finished site is written to `dist/`.

## Where things are

| To change | Edit |
| --- | --- |
| Contact details, form destination, tuition prices, site address | `src/config/site.ts` |
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

Upload the contents of `dist/` to any host that serves static files: Netlify, Cloudflare Pages, Vercel, GitHub Pages, an S3 bucket, or a folder under IIS, nginx or Apache. Point the host's "not found" page at `404.html`.

If the site is served from a sub-folder rather than the root of a domain, set `base` in `astro.config.mjs` to that folder.

## Design notes

- **Palette:** deep emerald, antique gold and ivory, defined as custom properties at the top of `src/styles/global.css`.
- **Type:** Cormorant Garamond for headings, Jost for text, Amiri for Arabic, Noto Serif Bengali and Hind Siliguri for Bangla. The fonts are bundled with the site, so nothing is loaded from a third party.
- **Ornament:** the eight-pointed star (khatam) lattice, the rosette and the pointed arch are drawn in SVG. `src/lib/geometry.ts` computes their points.
- The pages work without JavaScript. Scripts add the mobile menu, the scroll reveals, the two clocks and the form hand-off.
