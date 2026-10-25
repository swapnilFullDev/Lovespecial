# For My Forever Person

A small, private-feeling digital love gift: a warm welcome, six relationship
promises, and a letter sealed in a wax-stamped envelope. Built with React and
Vite, designed mobile-first, and written so that every word can be changed in
one file.

## What is inside

- **Home** — an editorial welcome with a gently pulsing heart, floating petals,
  delicate botanical line art, and two cards: *Our Promises* and *A Letter for
  You*.
- **Ques 1 · Our Promises** — a sealed introduction, then six promise cards that
  fade in one by one, followed by a closing note.
- **Ques 2 · My Letter** — an illustrated envelope with a wax heart seal. Opening
  it lifts the flap and reveals a textured ivory paper letter.
- All copy lives in [`src/data/loveContent.js`](src/data/loveContent.js).
- No backend, database, login, analytics, tracking, or localStorage. The site is
  entirely static.

## Tech stack

| Purpose | Choice |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 (`HashRouter`) |
| Icons | Lucide React |
| Styling | CSS Modules + global design tokens |
| Type | Google Fonts: Cormorant Garamond, Jost, Parisienne |

## Run it locally

Requires Node.js 20.19+ or 22.12+ (Vite 8).

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build in dist/
npm run preview   # preview the production build locally
```

## Change the words

Open **`src/data/loveContent.js`**. Everything she reads is there:

- `welcome.heading`, `welcome.description`, and the two card titles/subtitles
- `welcome.headingAccent` — the phrase inside the heading shown in italic rose.
  It must be an exact substring of `welcome.heading`.
- `promises.heading`, `promises.intro`, `promises.revealButton`
- `promises.items` — each object has `id`, `icon`, and `text`
- `promises.closingMessage`, `promises.closingLabel`
- `letter.heading`, `letter.title`, `letter.sealHint`, `letter.envelopeNote`
- `letter.greeting`, `letter.paragraphs` (one string per paragraph),
  `letter.closing`, `letter.signature`
- `footer.message`
- `meta` — browser tab titles
- `ui` — navigation labels and button labels

The six promises currently match the requested wording exactly. To change one,
edit its `text`. To add a promise, add another object; numbering is generated
automatically. Icons are referenced by name and mapped in
`src/components/icons.jsx` — available names are `heart`, `heartHandshake`,
`mail`, `messagesSquare`, `shieldCheck`, `sprout`, and `calendarHeart`.

The letter is clearly marked as placeholder content with an
`EDIT THE LETTER BELOW` comment. Replace the greeting, paragraphs, closing, and
signature with your own words. Each paragraph is a separate string.

### Change the look

Colours, fonts, spacing, shadows, and texture live in
[`src/styles/tokens.css`](src/styles/tokens.css). Layout and shared button
styles are in [`src/styles/global.css`](src/styles/global.css). Component-specific
styles sit next to each component as `*.module.css`.

## Project structure

```text
.
├── index.html
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── loveContent.js        ← all personal content
    ├── styles/
    │   ├── tokens.css            ← colours, type, spacing, motion
    │   └── global.css            ← reset, base styles, shared buttons
    └── components/
        ├── SiteHeader.jsx
        ├── SiteFooter.jsx
        ├── WelcomeSection.jsx
        ├── GiftCard.jsx
        ├── PromiseSection.jsx
        ├── PromiseCard.jsx
        ├── LoveLetterSection.jsx
        ├── Envelope.jsx
        ├── LoveLetter.jsx
        ├── PageIntro.jsx
        ├── BackToHome.jsx
        ├── Ornament.jsx
        ├── FloralSpray.jsx
        ├── FloatingPetals.jsx
        ├── icons.jsx
        └── *.module.css
```

## Deploy as a static site

The build is plain static files. `vite.config.js` uses `base: './'` and the app
uses `HashRouter`, so it works on any static host, including a subfolder, without
server rewrite rules. Routes look like `/#/promises` and `/#/letter`.

**Netlify**

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Or drag the `dist/` folder onto Netlify Drop.

**Vercel**

- Import the repository. Vercel detects Vite; build command `npm run build`,
  output directory `dist`.

**GitHub Pages**

1. Run `npm run build`.
2. Publish the contents of `dist/` (for example with the `gh-pages` package or a
   GitHub Actions Pages workflow).
3. Because assets use relative paths and routes use the hash, it works at
   `https://username.github.io/repository/` without extra configuration.

**Cloudflare Pages** — build command `npm run build`, output `dist`.

### Privacy, honestly

This is a static site, not an access-controlled one.

- There is no backend, database, login, or password protection.
- There is no analytics or tracking, and the letter is never written to
  localStorage or sent anywhere.
- All content is compiled into the JavaScript bundle. Anyone who obtains the
  deployed URL can read it (and could inspect the bundle even if a section is
  "sealed" behind a button).
- A public static URL is not private. If you need real privacy, host it on a
  private/internal server or put access control in front of it — neither is
  included here.
- `index.html` includes `noindex, nofollow` to discourage search engines from
  listing the page. This is not security and does not stop anyone with the link
  from opening it.
- If you host the site publicly, remember that hosting providers and Google
  Fonts (used for typography) will see ordinary web requests. No personal
  content is sent to them beyond the page itself.

## Accessibility & motion

- Semantic landmarks, a skip link, visible keyboard focus, and 44–48px touch
  targets.
- The promise reveal moves focus to the revealed region; opening the letter moves
  focus to the letter.
- Animations are CSS-only and respect `prefers-reduced-motion: reduce`.
- Decorative botanicals, petals, icons, and the envelope illustration are hidden
  from assistive technology.
- Small gold label text uses a darker gold token for readable contrast.

## Responsive testing checklist

Tested in Chrome at 320, 375, 390, 768, 1024, and 1440px wide, plus 844×390
landscape. Before sharing, re-check:

- [ ] No horizontal scrolling at 320px and 375px.
- [ ] Home cards stack at phone widths and sit side-by-side from 760px.
- [ ] "Read My Promises ❤️" reveals all six promises with a staggered fade.
- [ ] The closing note and "Back to Home" button are reachable.
- [ ] Promises can be revealed again after leaving and returning.
- [ ] Envelope flap opens, letter appears, and the page scrolls gently to it.
- [ ] The letter fits at 320px with comfortable line length.
- [ ] Nav links, both "Back to Home" actions, and keyboard focus work.
- [ ] With reduced motion enabled, both interactions still work instantly.
- [ ] No console errors.
- [ ] Text is updated in `loveContent.js` and the placeholder letter is replaced.

## Notes for future edits

- The letter is intentionally not stored in localStorage; it lives in source.
- If you change the promise icons, update the map in `src/components/icons.jsx`
  or use one of the existing names.
- If you prefer clean URLs (`/promises` instead of `/#/promises`), switch
  `HashRouter` to `BrowserRouter` in `src/main.jsx` and configure SPA rewrites
  (`/* → /index.html`) on your host. Hash routing is the safer default for
  simple static hosting.

Made with love, for my forever person.
