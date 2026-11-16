# Darul Arqam, design 3

The third design of the Darul Arqam website: the content of the second design, presented as **a book that opens and turns its pages as you scroll**.

- **Look:** an illuminated book on a reading desk. Burgundy leather with gold tooling, cream paper with gold-ruled frames, and lapis-blue plates for the verses.
- **Motion:** scrolling first opens the cover, then turns the pages one by one. The movement follows the scroll with a soft ease, and when the scrolling stops the book comes to rest on a whole page.
- **Content:** thirty-two pages in seven chapters (home, about, programs, teachers, tuition, questions, free trial), in English and in Bangla. Each chapter opens with a Quranic verse. The free-trial form follows the book.

This folder is a complete project of its own. It shares nothing with the other designs, so they can be deleted once a design is chosen.

## The HTML files

The finished site is in the [`html/`](html) folder, ready to use as it is:

| File | What it is |
| --- | --- |
| `html/index.html` | The book in English |
| `html/bn/index.html` | The book in Bangla |
| `html/404.html` | The "page not found" page |
| `html/assets/style.css` | The stylesheet |
| `html/assets/*.woff2` | The fonts |

Double-click `html/index.html` to view the site in a browser, or upload everything inside `html/` to a web host. The pages use relative links and carry their own script, so they work from disk, from the root of a domain, or from any sub-folder.

The files in `html/` are generated from the sources in `src/` with [Astro](https://astro.build). Change the sources and build again, rather than editing the generated files, or the next build will overwrite your edits.

## Reading the book

| To | Do this |
| --- | --- |
| Open the book, turn a page | Scroll, or swipe on a touch screen |
| Turn one page | Press the right or left arrow key, or the round buttons under the book |
| Go to a chapter | Use the chapter names in the top bar, or the Contents page |
| Read without the book | Choose "Plain view" in the top bar; "Book view" brings it back |
| Ask for a trial class | Use the "Free trial class" button; the form is after the last page |

The book adapts to the screen:

- **Wide screens** show two pages side by side, and a leaf turns from right to left.
- **Phones and narrow windows** show one page at a time; the sheet swings away to reveal the next.
- **The plain view**, a simple column of the same pages, is used when a visitor has asked their device to reduce motion, when the window is too small for a readable book (a phone held sideways, for instance), when scripts are switched off, or on request.

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
| Contact details, form destination, tuition prices, site address | `src/config/site.ts` |
| Teacher profiles | `src/config/teachers.ts` |
| English wording, and the meaning of each verse | `src/i18n/en.ts` |
| Bangla wording, and the meaning of each verse | `src/i18n/bn.ts` |
| Arabic texts: the verses, the hadith, program emblems | `src/i18n/index.ts` |
| What is on each page of the book | `src/components/BookPages.astro` |
| The chapters and the page each starts on | `src/lib/chapters.ts` |
| The cover, the controls, and the script that turns the pages | `src/components/Book.astro` |
| How the book is built and how its leaves turn | `src/styles/book.css` |
| How the cover and the pages look | `src/styles/pages.css` |
| Colours and fonts | `src/styles/global.css` |
| The free-trial form | `src/components/Trial.astro` |

The two language files have the same shape. When you add or reword something in one, do the same in the other.

### Adding, removing or moving a page

The pages are written one after another in `src/components/BookPages.astro`, each inside a `<PageShell number={…} chapter="…">`. Three rules keep the book in order:

1. **Keep the total even.** Pages are printed on both sides of a leaf.
2. **Give every chapter an even number of pages**, so that each chapter's verse stays on a left-hand page.
3. **Renumber** the pages that follow, and update the starting pages and `lastPage` in `src/lib/chapters.ts`. Links to a page are written `href="#p-12" data-goto`.

A page has a fixed size, so keep each one short. If a page is a little too full, the script sets it in slightly smaller type; if it is still too full, it hides anything marked `data-optional`. A page that will not fit even then makes the whole site fall back to the plain view on that screen size, so check a phone-sized window after adding text.

### The speed and feel of the turning

These are in the script at the bottom of `src/components/Book.astro`:

- In `measure()`, `0.62` and `0.5` set how much scrolling turns one page, as a share of the window height (two-page and one-page views). Larger means more scrolling per page.
- In `animate()`, `105` sets how softly the book follows the scroll, in milliseconds. Larger is softer and slower.
- In `settle()`, `0.12` is how far a page must be pushed before it turns over by itself rather than falling back.

### The verses

Each chapter's verse has three parts: the Arabic in `src/i18n/index.ts` (under `verses`), and its meaning and reference in each language file (under `pages`). The Arabic is in the simple script with full vowel marks and was checked against the Tanzil text of the Quran. Where a chapter quotes part of a verse, its reference begins with "From". The meanings are plain renderings written for this site; have someone qualified review them, in both languages, before the site goes live.

## Before going live

`src/config/site.ts` holds stand-in values so the pages render. Replace each of these:

- **`contact.email`, `contact.whatsappNumber`, `contact.whatsappDisplay`** are placeholders, not real contact details.
- **`plans`** holds placeholder prices (40, 55 and 85 US dollars a month).
- **`url`** is empty. Set it to the public address of the site so that canonical links, language alternates and the social-sharing image are written into the pages.
- **`formEndpoint`** is empty. See the next section.

`src/config/teachers.ts` holds the teacher profiles. **All six are invented examples**, there to show the layout, and each carries an "Example profile" tag. Replace them with your real teachers; the file explains how, including how to add a photo.

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

Upload the contents of `html/` to any host that serves static files: a folder under IIS, nginx or Apache, or Netlify, Cloudflare Pages, Vercel, GitHub Pages or an S3 bucket. On a host that builds the site for you, set the project folder to `version-3` and the output folder to `html`.

Point the host's "not found" page at `404.html`. That one page uses links from the root of the domain, because a server may show it for an address at any depth; if the site lives in a sub-folder, set `base` in `astro.config.mjs` to that folder and build again.

## Design notes

- **Palette:** burgundy leather, gold leaf, cream paper, lapis blue and the red ink of manuscript headings, defined as custom properties at the top of `src/styles/global.css`.
- **Type:** EB Garamond for text, Cinzel for small capitals, Amiri Quran for verses, Aref Ruqaa for the Arabic name, Tiro Bangla for Bangla. The fonts are bundled with the site, so nothing is loaded from a third party.
- **Ornament:** the eight-pointed star, a rosette woven from turned squares, and gold-ruled frames with a knot at each corner.
- **How the turning stays smooth:** each frame moves only the leaf in the air and fades a few shadows, using properties the graphics card handles by itself; the pages are never laid out again while they turn. Only the leaves next to the open page are drawn at all.
- **For search engines and screen readers** the pages are ordinary HTML in reading order. Only the pages being read can be clicked or reached with the keyboard.
