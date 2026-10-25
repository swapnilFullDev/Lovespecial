# Nidhi ❤️ Swapnil

A small, private-feeling digital love gift from **Swapnil** to **Nidhi**: a
romantic waiting screen, an animated envelope reveal, a welcome page, one
combined relationship promise, and a letter sealed in a wax-stamped envelope.
Built with React and Vite, designed mobile-first, and written so that every
word can be changed in one file.

## What is inside

- **Countdown** — a warm ivory and blush waiting screen with a crescent moon,
  quiet stars, floating petals, and a live countdown in Hinglish.
- **Reveal** — when the configured moment arrives, the countdown gives way to a
  glowing envelope that opens, a personal greeting for Nidhi, and the button
  **“Hamari Kahaani Kholo ❤️”**.
- **Home** — an editorial welcome for Nidhi from Swapnil, with a gently pulsing
  heart, floating petals, delicate botanical line art, and two cards: *Mera
  Vaada* and *Mera Khat*.
- **Mera Vaada** — a sealed introduction, then one combined promise card with
  all six promises, followed by a closing note.
- **Mera Khat** — an illustrated envelope with a wax heart seal. Opening it
  lifts the flap and reveals a textured ivory paper letter addressed to Nidhi
  and signed by Swapnil.
- **Karva Chauth** — a quiet shared dream shown after the letter opens.
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

## Change the names

Open **`src/data/loveContent.js`**. The first object is:

```js
const names = {
  him: 'Swapnil',
  her: 'Nidhi',
}
```

Change those two values and the headings, opening screen, countdown labels,
letter greeting, signature, and footer update automatically. Components read
from this file; names are not hardcoded across the app.

## Change the words

Everything Nidhi reads is in **`src/data/loveContent.js`**:

- `countdown` — the waiting-screen kicker, heading, description, unit labels,
  date label, note, and footer.
- `opening` — the reveal-screen intro, heading, supporting message, line,
  signature, and button label.
- `home` — the welcome eyebrow, heading, heading accent, description, cards, and
  closing note.
- `promise` — the promise heading, intro, reveal button, the six `paragraphs`,
  handwritten line, closing paragraphs, and labels.
- `loveLetter` — the letter heading, title, subtitle, envelope labels, greeting,
  paragraphs, closing, and signature.
- `karvaChauth` — the moonlit section copy.
- `romanticMessages` — the short personal lines used around the site.
- `footer`, `meta`, and `ui` — footer copy, browser titles, and interface labels.

The six promise paragraphs are kept exactly as requested and are always shown
together inside **one** promise card. To change one, edit its string in
`promise.paragraphs`. To change the letter, edit `loveLetter.greeting`,
`loveLetter.paragraphs` (one string per paragraph), `loveLetter.closing`, and
`loveLetter.signature`.

### Change the look

Colours, fonts, spacing, shadows, and texture live in
[`src/styles/tokens.css`](src/styles/tokens.css). Layout and shared button
styles are in [`src/styles/global.css`](src/styles/global.css). Component-specific
styles sit next to each component as `*.module.css`.

## Configure the countdown

The reveal moment is read from environment variables at build time:

```env
VITE_GIFT_REVEAL_AT=2026-10-29T22:00:00+05:30
VITE_GIFT_TIME_ZONE=Asia/Kolkata
```

- **`VITE_GIFT_REVEAL_AT`** must be an ISO 8601 timestamp **with an explicit UTC
  offset**. The default is **29 October 2026, 10:00 PM IST**.
- **`VITE_GIFT_TIME_ZONE`** is only used to display that moment. The viewer's
  device timezone is never assumed to be the target timezone.
- A missing or invalid timestamp falls back to the default above. A timestamp
  without an offset is treated as invalid so it cannot silently use the
  viewer's local timezone.
- If the configured moment is already in the past, the countdown is skipped and
  the reveal screen opens immediately.

The local files are:

```text
.env.development   → used by npm run dev
.env.production    → used by npm run build
.env.example       → safe, committed reference
```

`.env.development` and `.env.production` are intentionally gitignored. Keep your
real values local, or set them in your hosting provider's environment settings.

### Development and production can use different moments

For local testing, set a timestamp a few minutes in the future in
`.env.development`, then restart the dev server. Keep `.env.production` at the
real gift time:

```env
# .env.development
VITE_GIFT_REVEAL_AT=2026-10-25T21:30:00+05:30
VITE_GIFT_TIME_ZONE=Asia/Kolkata

# .env.production
VITE_GIFT_REVEAL_AT=2026-10-29T22:00:00+05:30
VITE_GIFT_TIME_ZONE=Asia/Kolkata
```

Vite embeds `VITE_*` values into the built JavaScript. Changing an environment
variable on a deployed host does **not** change an existing build; trigger a new
production build and deployment.

**Netlify / Vercel / Cloudflare Pages:** add `VITE_GIFT_REVEAL_AT` and
`VITE_GIFT_TIME_ZONE` in the project's environment-variable settings, then
redeploy. Do not put secrets in `VITE_*` variables — they are public.

## Test the countdown

### Future target

1. Put a timestamp a few minutes ahead in `.env.development`.
2. Restart `npm run dev` (environment changes are read at startup).
3. Confirm the countdown appears and the seconds update every second.
4. Wait for zero: the countdown should give way to the envelope reveal, then the
   **“Hamari Kahaani Kholo ❤️”** button.
5. Click the button and confirm the main site, navigation, promise, and letter
   all work normally.

### Past target

Set `VITE_GIFT_REVEAL_AT` to a past timestamp and restart. There should be no
negative countdown and no waiting screen; the reveal button should be available
immediately.

### Inactive tab

Switch away from the tab and come back after the target time. The countdown is
recalculated from `Date.now()` and the reveal appears immediately, without a
refresh. No visible test-bypass button is included in production.

### Production build

```bash
npm run build
npm run preview
```

Test the preview with both a future and a past `.env.production` value, then
rebuild with the real gift time for the final deployment.

## Project structure

```text
.
├── index.html
├── vite.config.js
├── .env.example
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config/
    │   └── gift.js              ← env parsing and reveal date formatting
    ├── hooks/
    │   └── useGiftCountdown.js  ← live, drift-free countdown
    ├── data/
    │   └── loveContent.js       ← all personal content
    ├── styles/
    │   ├── tokens.css           ← colours, type, spacing, motion
    │   └── global.css           ← reset, base styles, shared buttons
    └── components/
        ├── GiftGate.jsx         ← countdown → reveal → main site
        ├── CountdownScreen.jsx
        ├── GiftRevealAnimation.jsx
        ├── SiteHeader.jsx
        ├── SiteFooter.jsx
        ├── WelcomeSection.jsx
        ├── GiftCard.jsx
        ├── PromiseSection.jsx
        ├── LoveLetterSection.jsx
        ├── Envelope.jsx
        ├── LoveLetter.jsx
        ├── KarvaChauth.jsx
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
3. Add the two `VITE_GIFT_*` variables in Site settings → Environment variables.
4. Or drag the `dist/` folder onto Netlify Drop (set variables before building).

**Vercel**

- Import the repository. Vercel detects Vite; build command `npm run build`,
  output directory `dist`.
- Add the `VITE_GIFT_*` variables in Project Settings → Environment Variables,
  then redeploy.

**GitHub Pages**

1. Set the variables in the workflow environment (or a local `.env.production`).
2. Run `npm run build`.
3. Publish the contents of `dist/` (for example with the `gh-pages` package or a
   GitHub Actions Pages workflow).
4. Because assets use relative paths and routes use the hash, it works at
   `https://username.github.io/repository/` without extra configuration.

**Cloudflare Pages** — build command `npm run build`, output `dist`, with the
`VITE_GIFT_*` variables configured in the Pages project.

### Privacy, honestly

This is a static site, not an access-controlled one.

- The countdown is a **presentation feature**, not a security mechanism.
- There is no backend, database, login, or password protection.
- There is no analytics or tracking, and the letter is never written to
  localStorage or sent anywhere.
- All content is compiled into the JavaScript bundle. Anyone who obtains the
  deployed URL can read it (and could inspect the bundle even before the reveal
  time).
- A public static URL is not private. If you need real privacy, host it on a
  private/internal server or put access control in front of it — neither is
  included here.
- `index.html` includes `noindex, nofollow` to discourage search engines from
  listing the page. This is not security and does not stop anyone with the link
  from opening it.
- If you host the site publicly, hosting providers and Google Fonts (used for
  typography) will see ordinary web requests. No personal content is sent to
  them beyond the page itself.

## Accessibility & motion

- Semantic landmarks, a skip link after the gift opens, visible keyboard focus,
  and 44–48px touch targets.
- The countdown uses a labelled `role="timer"` with `aria-live="off"` so screen
  readers are not interrupted every second.
- When the countdown ends, focus moves to the reveal heading; when the opening
  button appears, focus moves to it. Opening the gift moves focus to the main
  content.
- Animations are CSS-only and respect `prefers-reduced-motion: reduce`. The
  reveal sequence is shortened to a simple fade when reduced motion is enabled.
- Decorative botanicals, petals, stars, the moon, icons, and the envelope
  illustration are hidden from assistive technology.
- Small gold label text uses a darker gold token for readable contrast.

## Responsive testing checklist

Tested in Chrome at 320, 375, 390, 430, 768, 1024, and 1440px wide, plus
844×390 landscape. Before sharing, re-check:

- [ ] No horizontal scrolling at 320px and 375px on the countdown, reveal, and
      main site.
- [ ] Countdown units fit on one row and remain readable at 320px.
- [ ] The reveal heading, envelope, and button stay centered without layout
      shifts when the button appears.
- [ ] The countdown updates every second and reaches zero without negative
      values.
- [ ] The reveal animation runs once, then the opening button appears.
- [ ] Returning from an inactive tab recalculates the timer and reveals
      immediately if the target has passed.
- [ ] Home cards stack at phone widths and sit side-by-side from 760px.
- [ ] All six promises reveal inside one card.
- [ ] Envelope flap opens, letter appears, and the page scrolls gently to it.
- [ ] Nav links, back buttons, and keyboard focus work.
- [ ] With reduced motion enabled, the countdown and reveal still work.
- [ ] No console errors or duplicate intervals.
- [ ] Text is updated in `loveContent.js` and the production reveal time is set.

## Notes for future edits

- The letter is intentionally not stored in localStorage; it lives in source.
- The countdown is not persisted either. Reloading before the target restarts the
  waiting screen from the current time.
- If you change the home card icons, update the map in
  `src/components/icons.jsx` or use one of the existing names.
- If you prefer clean URLs (`/promises` instead of `/#/promises`), switch
  `HashRouter` to `BrowserRouter` in `src/main.jsx` and configure SPA rewrites
  (`/* → /index.html`) on your host. Hash routing is the safer default for
  simple static hosting.

Made with love, for Nidhi.
