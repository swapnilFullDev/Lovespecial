/**
 * ─────────────────────────────────────────────────────────────
 *  LOVE CONTENT
 *  Every word she reads on this website lives here.
 *  Edit this file to personalise the gift — no component changes
 *  are needed.
 * ─────────────────────────────────────────────────────────────
 */

export const loveContent = {
  /* ── Browser tab titles ─────────────────────────────────── */
  meta: {
    siteTitle: 'For My Forever Person',
    homeTitle: 'For My Forever Person',
    promisesTitle: 'Our Promises · For My Forever Person',
    letterTitle: 'A Letter for You · For My Forever Person',
  },

  /* ── Small interface labels ─────────────────────────────── */
  ui: {
    brand: 'For My Forever Person',
    skipToContent: 'Skip to content',
    home: 'Home',
    promisesNav: 'Our Promises',
    letterNav: 'My Letter',
    backHome: 'Back to Home',
    menuLabel: 'Main navigation',
    brandLabel: 'For My Forever Person — home',
  },

  /* ── A. Welcome / Home ──────────────────────────────────── */
  welcome: {
    eyebrow: 'A little corner of the world, just for you',
    // `heading` is the exact sentence shown on screen.
    // `headingAccent` is the part of it rendered in italic rose.
    heading: 'To the woman who will one day be my wife.',
    headingAccent: 'my wife.',
    description:
      'I made this little corner of the world just for you. Whenever you need a reminder of how much you mean to me, come back here.',
    cards: [
      {
        id: 'promises',
        chapter: 'Chapter One',
        icon: 'heartHandshake',
        title: 'Our Promises',
        subtitle:
          'The things I will always try to protect in our relationship.',
        buttonLabel: 'Read Our Promises',
        to: '/promises',
      },
      {
        id: 'letter',
        chapter: 'Chapter Two',
        icon: 'mail',
        title: 'A Letter for You',
        subtitle:
          'Words from the man who dreams of building a life with you.',
        buttonLabel: 'Open My Letter',
        to: '/letter',
      },
    ],
  },

  /* ── B. Question 1 — Our Relationship Promises ──────────── */
  promises: {
    questionLabel: 'Ques 1',
    heading: 'What promises will we make to each other?',
    intro:
      'Six small vows I want us to carry with us — on the easy days and the difficult ones.',
    revealButton: 'Read My Promises ❤️',
    hint: 'They will be here whenever you need to read them again.',
    revealedLabel: 'Our promises',
    closingLabel: 'A note from my heart',
    closingMessage:
      'Perfect nahi honge hum, aur shayad kabhi-kabhi galtiyan bhi karenge. Lekin har baar, main tumhe samajhne, tumhari izzat karne aur tumhara saath dene ki koshish karunga. Kyunki mere liye pyaar sirf ek feeling nahi, har din tumhe choose karne ka faisla hai.',
    backLabel: 'Back to Home',

    // The six promises, kept exactly as written. `icon` is a Lucide icon name.
    items: [
      {
        id: 1,
        icon: 'heartHandshake',
        text: 'Chahe kitni bhi ladai ho, hum ek-doosre ki respect kabhi nahi khoyenge.',
      },
      {
        id: 2,
        icon: 'heart',
        text: 'Mushkil waqt mein ek-doosre ka saath nahi chhodenge.',
      },
      {
        id: 3,
        icon: 'messagesSquare',
        text: 'Jab bhi koi problem hogi, hum ek-doosre se baat karenge, door nahi bhaagenge.',
      },
      {
        id: 4,
        icon: 'shieldCheck',
        text: 'Hum apne relationship mein kabhi jaanbujhkar ek-doosre ko insecure feel nahi karayenge.',
      },
      {
        id: 5,
        icon: 'sprout',
        text: 'Hum ek-doosre ke dreams aur growth ko support karenge.',
      },
      {
        id: 6,
        icon: 'calendarHeart',
        text: 'Chahe hum kitne bhi busy ho jaayein, hum apne relationship ko kabhi taken for granted nahi lenge. Hum hamesha ek-doosre ko choose karna yaad rakhenge.',
      },
    ],
  },

  /* ── C. Question 2 — My Personal Love Letter ────────────── */
  letter: {
    questionLabel: 'Ques 2',
    heading: 'What would you like to tell your future wife?',
    title: 'To My Future Wife, From the Man Who Loves You.',
    sealHint: 'A letter, sealed just for you.',
    envelopeNote: 'For you, always',
    openButton: 'Open My Letter 💌',
    openedNote: 'Sealed with love, opened by you.',
    backLabel: 'Back to Home',

    /* ── EDIT THE LETTER BELOW ──────────────────────────────
       Replace the greeting, paragraphs, closing and signature
       with your own words. Each paragraph is one string. */
    greeting: 'My Dearest Future Wife,',
    paragraphs: [
      'If you are reading this, I want you to know that somewhere in this world, there is a man who dreams of loving you in a way that makes you feel safe, respected, understood, and appreciated.',
      'I know that life will not always be perfect. We may have difficult days, misunderstandings, and moments when finding the right words feels hard. But I hope we always remember that we are on the same team.',
      'I want to celebrate your happiness, support your dreams, listen when you need someone, and stand beside you when life becomes difficult. I never want you to feel that you have to face everything alone.',
      'I want our love to live in the little things too: the way we talk to each other, the respect we show, the laughter we share, and the effort we make even on ordinary days.',
      'Wherever life takes us, I hope we continue choosing each other, learning together, and building a relationship we can both feel proud of.',
      'And whenever you read this letter again, I hope it reminds you of one simple thing: you deserve a love that shows up, listens, respects you, and keeps trying.',
    ],
    closing: 'With all my love,',
    signature: 'Your Future Husband ❤️',
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    message: 'Made with love, for my forever person.',
  },
}

export default loveContent
