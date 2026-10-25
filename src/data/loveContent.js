/**
 * ─────────────────────────────────────────────────────────────
 *  LOVE CONTENT
 *  Har woh lafz jo Nidhi padhegi, yahin se aata hai.
 *  Is file ko badal kar poora gift personalise kar sakte ho —
 *  components ya CSS chhune ki zaroorat nahi.
 * ─────────────────────────────────────────────────────────────
 */

/* Naam yahan badlo — poori website mein apne aap update ho jaayenge. */
const names = {
  him: "Swapnil",
  her: "Nidhi",
};

export const loveContent = {
  names,

  /* ── Browser tab titles ─────────────────────────────────── */
  meta: {
    siteTitle: `${names.her} ❤️ ${names.him}`,
    homeTitle: `${names.her}, Tumhare Liye ❤️`,
    promisesTitle: `${names.her} Ke Liye · Mera Vaada`,
    letterTitle: `${names.her} Ke Naam · Dil Se Likha Khat`,
    countdownTitle: `${names.her} ❤️ · Ek Khoobsurat Pal Ka Intezaar`,
    revealTitle: `${names.her} ❤️ · Hamari Kahaani`,
  },

  /* ── Chhote interface labels ────────────────────────────── */
  ui: {
    brand: `${names.her} Ke Liye`,
    skipToContent: "Seedha content par jao",
    home: "Ghar",
    promisesNav: "Mera Vaada",
    letterNav: "Mera Khat",
    backHome: "Back",
    menuLabel: "Mukhya navigation",
    brandLabel: `${names.her} Ke Liye — ghar`,
  },

  /* ── Images ─────────────────────────────────────────────── */
  /* Files `public/` folder se aati hain. Sirf `file`, `alt` aur
     `caption` badalne se photo ka content update ho jaayega. */
  images: {
    nidhi: {
      file: "Warm Nighttime Celebration Girl face.webp",
      alt: `${names.her} ki ek khoobsurat tasveer`,
      caption: `${names.her}, tumhari muskaan mere liye bahut khaas hai. ❤️`,
      fallback: `${names.her} ki tasveer`,
      width: 896,
      height: 1195,
    },
    swapnil: {
      file: "Warm Nighttime Celebration Boy face.webp",
      alt: `${names.him} ki ek cinematic tasveer`,
      caption: `Tumhara ${names.him}, jo tumhare saath aur bhi khoobsurat yaadein banana chahta hai. ❤️`,
      fallback: `${names.him} ki tasveer`,
      width: 1792,
      height: 2400,
    },
    hands: {
      file: "Intertwined Hands Over the Gearshift.webp",
      alt: `${names.her} aur ${names.him} ke ek-doosre ka haath thaamne ka pal`,
      caption:
        "Bas aise hi, har mod par ek-doosre ka haath thaam kar saath chalna hai. ❤️",
      fallback: "Ek-doosre ka haath thaame hue",
      width: 1086,
      height: 1448,
    },
    pairLabel: `${names.her} aur ${names.him} ki tasveerein`,
  },

  /* ── A. Countdown screen ────────────────────────────────── */
  countdown: {
    kicker: `${names.him} ❤️ ${names.her}`,
    heading: "Ek Khoobsurat Pal Ka Intezaar...",
    description:
      "Kuch khaas palon ko aane mein thoda waqt lagta hai. Aur yeh chhoti si duniya usi ek khaas pal ke liye hai.",
    labels: {
      days: "Din",
      hours: "Ghante",
      minutes: "Minute",
      seconds: "Second",
    },
    dateLabel: "Kholne ka waqt",
    note: `${names.her}, tumhare liye kuch dil se banaya hai. Bas thoda sa intezaar... ❤️`,
    footer: `Ek chhota sa surprise, ${names.him} ki taraf se.`,
    ariaLabel: `${names.her} ke liye surprise khulne ka countdown`,
  },

  /* ── B. Opening / reveal screen ─────────────────────────── */
  opening: {
    intro: "Ek chhoti si duniya, sirf tumhare liye...",
    heading: `${names.her} ❤️`,
    message: `${names.him} ki taraf se, us insaan ke liye jo uske dil mein ek khaas jagah rakhti hai.`,
    line: "Kuch vaade, kuch dil ki baatein, aur ek aisa ehsaas jo sirf tumhare liye hai.",
    button: "Hamari Kahaani ❤️",
    signature: `${names.him} ki taraf se, sirf tumhare liye.`,
    envelopeNote: `${names.her} ke liye`,
  },

  /* ── C. Home ────────────────────────────────────────────── */
  home: {
    eyebrow: `${names.her} ke liye, ${names.him} ki taraf se`,
    // `heading` is the exact sentence shown on screen.
    // `headingAccent` is the part of it rendered in italic rose.
    heading: `${names.her}, Tumhare Liye ❤️`,
    headingAccent: "Tumhare Liye",
    description: `Yeh chhoti si duniya ${names.him} ne tumhare liye banayi hai. Jab bhi tumhara mann kare, yahan aana aur un baaton ko padhna jo shayad woh har baar saamne baith kar keh na paaye.`,
    cards: [
      {
        id: "promise",
        chapter: "Pehli Baat",
        icon: "heartHandshake",
        title: "Mera Tumse Ek Vaada",
        subtitle:
          "Kuch baatein hain jo main chahta hoon ki hum dono hamesha yaad rakhein.",
        buttonLabel: "Ek Vaada ❤️",
        to: "/promises",
      },
      {
        id: "letter",
        chapter: "Doosri Baat",
        icon: "mail",
        title: "Dil Se Likha Ek Khat",
        subtitle:
          "Kuch ehsaas lafzon mein likhe hain, meri hone wali wife ke liye.",
        buttonLabel: "Ek Khat 💌",
        to: "/letter",
      },
    ],
    note: `${names.her} aur ${names.him} ki kahaani ka ek khoobsurat sa panna.`,
  },

  /* ── D. Mera vaada — ek hi, poora vaada ─────────────────── */
  promise: {
    eyebrow: "Mera Tumse Ek Vaada",
    heading: "Ek Vaada, Jo Main Hamesha Nibhana Chahta Hoon ❤️",
    intro:
      "Tumse sirf pyaar karna hi nahi, balki har din tumhe izzat dena, samajhna aur tumhara saath nibhana bhi chahta hoon.",
    revealButton: "Vaada ❤️",
    hint: "Jab bhi dil kare, yahan wapas aa jaana.",
    revealedLabel: "Mera vaada",
    cardLabel: "Jo apne mujhse maanga",

    /* The complete promise. These paragraphs are one commitment and
       are always shown together inside a single card. */
    paragraphs: [
      "Chahe kitni bhi ladai ho, hum ek-doosre ki respect kabhi nahi khoyenge.",
      "Mushkil waqt mein ek-doosre ka saath nahi chhodenge.",
      "Jab bhi koi problem hogi, hum ek-doosre se baat karenge, door nahi bhaagenge.",
      "Hum apne relationship mein kabhi jaanbujhkar ek-doosre ko insecure feel nahi karayenge.",
      "Hum ek-doosre ke dreams aur growth ko support karenge.",
      "Chahe hum kitne bhi busy ho jaayein, hum apne relationship ko kabhi taken for granted nahi lenge. Hum hamesha ek-doosre ko choose karna yaad rakhenge.",
    ],

    handwrittenLine: `${names.her}, har din, dil se — sirf tumhare liye.`,

    closingLabel: "Dil ki baat",

    closingParagraphs: [
      "Mujhe pata hai ki hum dono perfect nahi honge. Kabhi gussa aayega, kabhi galtiyan hongi, aur kabhi ek-doosre ko samajhne mein waqt lagega.",

      "Mujhe pata hai ki aapko momos bahut pasand hain. ❤️ Shayad main har roz aapko bahar momos khilane na le jaa paun, lekin kabhi-kabhi aapki yeh chhoti si wish zaroor poori karunga, kyunki aapki khushi mere liye bahut maayne rakhti hai.",

      "Mujhe pata hai ki aapko khana banana nahi aata, lekin aapko is baat ki tension lene ki zaroorat nahi hai. Main aapka saath wahan bhi dunga. Jitna mujhse ho paayega, ghar ke kaamon mein aapka haath bataunga, kyunki yeh sirf aapka ghar nahi, hum dono ka ghar hoga.",

      "Main jaanta hoon ki main perfect ladka nahi hoon. Mujhmein bhi kamiyan hain, aur shayad main har baar woh sab na kar paaun jo aap chahti hain. Lekin main hamesha koshish karunga ki aapke liye khud ko behtar bana sakun aur apne andar woh saari khoobiyaan laa sakun, jinki aap apne life partner mein umeed karti hain.",

      "Mujhe filmy dialogues zyada nahi aate, lekin jitne bhi aate hain, woh sab dil se sirf aapke liye nikalte hain. Shayad main har baar filmon jaisa pyaar express na kar paaun, lekin meri koshish rahegi ki aapko meri baaton se zyada mere actions mein mera pyaar nazar aaye.",

      "Main jaanta hoon ki humari arrange marriage hai, lekin is rishte ko sirf arrange marriage bankar nahi rehne dena chahta. Is arrange ko love story mein badalne ki zimmedaari main apni samajhta hoon. Main chahta hoon ki ek din hum peeche mudkar dekhein aur kahein ki humari shaadi arrange zaroor thi, lekin humara pyaar humne khud chuna tha.",

      "Aur mera sabse bada promise yeh hai ki GF-BF ke relationship mein jitna pyaar, romance aur excitement hoti hai, main chahta hoon ki shaadi ke baad aapko usse bhi kahin zyada mile. Main nahi chahta ki waqt ke saath humare rishte ka romance kam ho ya aapko kabhi pyaar ki kami mehsoos ho. Main har din kuch aisa karna chahta hoon jisse aapko phir se mujhse pyaar ho jaaye. ❤️",

      "Aur ab jab bhi main kisi temple mein jaaunga, toh mann mein yahi khwaahish rahegi ki agli baar wahan aapko apne saath lekar aaun. Jin jagahon par main ab tak akele gaya hoon, ab un jagahon par aapke saath jaana chahta hoon. Bhagwan se apne liye kuch maangunga, toh usmein aapki khushi, humara saath aur humari zindagi bhar ki mohabbat zaroor shaamil hogi. 🙏❤️",

      "Lekin main chahta hoon ki har mushkil ke baad hum ek-doosre ke aur kareeb aayein. Hum sirf khushi ke dino mein nahi, balki un dino mein bhi ek-doosre ka haath thaamein jab sab kuch aasaan na ho. Chahe kitni bhi ladai ho, hum ek-doosre ki respect kabhi nahi khoyenge. Har problem ko milkar suljhayenge, ek-doosre ke sapno ko support karenge aur kabhi apne rishte ko taken for granted nahi lenge.",

      "Mere liye pyaar sirf 'I Love You' kehna nahi hai. Pyaar hai aapki baat sunna, aapki izzat karna, aapke sapno ko apna samajhna, aapki chhoti-chhoti khushiyon ka khayal rakhna aur har din aapko dobara choose karna.",

      "Aur jab bhi aap in vaadon ko padhein, bas itna yaad rakhna... aap mere liye sirf meri mohabbat nahi, balki meri zindagi ka woh hissa hain jise main hamesha sambhaal kar rakhna chahta hoon. Main yeh vaade isliye nahi kar raha ki main perfect hoon, balki isliye kar raha hoon kyunki main aapke saath milkar ek khoobsurat zindagi banana chahta hoon. Jahan aapko ek husband hi nahi, balki ek best friend, ek partner, ek supporter aur ek aisa insaan mile jo har haal mein aapko choose kare. Aaj bhi, kal bhi aur zindagi ke aakhri din tak. ❤️",
    ],

    backLabel: "Back",
  },

  /* ── E. Dil se likha khat ───────────────────────────────── */
  loveLetter: {
    eyebrow: "Dil Se Likha Ek Khat",
    heading: "Mera Dil Tumse Kuch Kehna Chahta Hai",
    title: "Meri Hone Wali Patni Ke Naam ❤️",
    // The one English line, kept as a quiet subtitle.
    subtitle: "To My Future Wife, From the Man Who Loves You.",
    sealHint: `${names.her} ke liye ek khat, dil se bandha.`,
    envelopeNote: `To, ${names.her}`,
    openButton: "Sirf Apke Liye 💌",
    openedNote: `${names.her}, yeh khat sirf tumhare liye tha.`,
    backLabel: "Back",

    /* ── KHAT KO YAHAN BADLO ────────────────────────────────
       Greeting, paragraphs, closing aur signature badal do.
       Har paragraph ek alag string hai. */
    greeting: `Meri Pyaari ${names.her}, ❤️`,
    paragraphs: [
      "Pata nahi jab tum yeh khat padhogi toh tumhare chehre par muskaan hogi, aankhon mein nami hogi, ya tum mujhe yaad karke chupke se muskura rahi hogi. Lekin ek baat main chahta hoon ki tum hamesha yaad rakho — tum mere liye bahut khaas ho.",
      "Main nahi jaanta ki zindagi humein kaun-kaun se mod dikhayegi. Kabhi khushiyan hongi, kabhi mushkilein hongi, kabhi hum hasenge aur kabhi ek-doosre se naraaz bhi honge. Lekin main chahta hoon ki hum har haal mein ek-doosre ko samajhne ki koshish karein.",
      "Main tumhara sirf aaj nahi, tumhare aane wale kal ka bhi hissa banna chahta hoon. Tumhare sapno mein tumhara saathi, tumhari pareshaniyon mein tumhara humdard, tumhari khushiyon mein tumhari muskaan ki wajah, aur tumhare mushkil waqt mein tumhara sabse apna insaan banna chahta hoon.",
      "Mujhe tumhare saath sirf bade-bade pal nahi jeene. Main tumhare saath chhoti-chhoti khushiyan bhi jeena chahta hoon. Subah ki chai, bina kisi wajah ki hasi, chhoti si nok-jhok, ek-doosre ka intezaar, aur din khatam hone par ek-doosre se baat karna — mere liye inhi baaton mein toh zindagi ki khoobsurati hai.",
      "Main chahta hoon ki tum mere saath apni har baat keh sako. Apni khushiyan, apne darr, apni uljhan aur apne sapne. Tumhe mere saamne hamesha strong banne ki zaroorat na pade. Tumhari khamoshi ko samajhne ki koshish karun aur jab tumhe sirf ek saath chahiye ho, toh main tumhare paas rahun.",
      "Aur jab kabhi zindagi hum dono ko thaka de, toh hum ek-doosre ke liye sukoon ban sakein.",
      "Mujhe tumhare saath ek aisa rishta banana hai jahan pyaar ke saath izzat ho, apnapan ho, bharosa ho, aur har din ek-doosre ko choose karne ki wajah ho.",
      "Agar kabhi tumhe lage ki main tumse apni feelings theek se keh nahi paa raha, toh yeh khat dobara padh lena. Shayad mere lafz tumhe yaad dila dein ki mere dil mein tumhare liye kitni jagah hai.",
      `${names.her}, main tumse sirf aaj ke liye nahi, un saare kal ke liye pyaar karna chahta hoon jo hum saath mein banayenge.`,
    ],
    closing: "Hamesha tumhara,",
    signature: `${names.him} ❤️`,
  },

  /* ── F. Karva Chauth — ek shared sapna ──────────────────── */
  karvaChauth: {
    eyebrow: `${names.her} aur ${names.him} ka ek sapna`,
    heading: "Ek Din, Karva Chauth Ki Shaam... 🌙",
    paragraphs: [
      "Main sochta hoon us din ke baare mein jab Karva Chauth ki shaam hogi, aasman mein chaand niklega, aur tum saj-dhaj kar mere saamne aaogi.",
      "Tumhare chehre ki muskaan, tumhari aankhon ki chamak, aur woh pal jab hum chaand ko dekhenge aur phir ek-doosre ko... main chahta hoon ki woh pal hum dono ki zindagi ki sabse pyaari yaadon mein se ek bane.",
      "Shayad main us din tumhe dekh kar kuch pal ke liye sab kuch bhool jaun. Dil mein bas ek hi baat hogi — kitna khoobsurat hai woh rishta jahan do log ek-doosre ko sirf chahte nahi, balki ek-doosre ki khushi, sehat aur sukoon ki bhi parwah karte hain.",
      "Mere liye Karva Chauth sirf ek rasam nahi, balki tumhare saath apni zindagi ke khoobsurat pal baantne ka ek aur bahaana hoga.",
      "Aur main chahta hoon ki hamare rishte mein pyaar sirf kisi ek din ya kisi ek rasam tak simit na rahe. Tumhara khayal rakhna, tumhari izzat karna, tumhe hansana aur tumhare saath khada rehna — yeh sab main har din karna chahta hoon.",
      "Chaand har saal aayega, lekin main chahta hoon ki us chaand ke neeche tumhara haath thaamne ki khushi har baar mere liye utni hi khaas rahe.",
      "Aur us pal main bas tumhe dekh kar muskuraun aur dil mein kahun — meri zindagi ka sabse khoobsurat tohfa tum ho. ❤️🌙",
    ],
    handwritten: `Us chaand ke neeche, ${names.her} aur ${names.him}.`,
  },

  /* ── G. Chhoti romantic baatein ─────────────────────────── */
  // These are deliberately spread across the site, not shown together.
  romanticMessages: {
    promise: `${names.her}, har din tumhe thoda aur samajhna, tumse thoda aur pyaar karna chahta hoon.`,
    letter: `${names.her}, chahe din kaisa bhi ho, tumse baat karke sab kuch thoda behtar lagta hai.`,
    footer: `${names.her}, aaj bhi tumhe choose karunga, kal bhi, aur har us din jab humein ek-doosre ki zaroorat hogi.`,
    // Extra lines, rakhe hue hain taaki kabhi swap kar sako.
    spare: [
      "Tum meri zindagi ka woh sukoon ho, jise main har din mehsoos karna chahta hoon.",
      "Mujhe perfect love story nahi chahiye, mujhe tumhare saath apni real love story jeeni hai.",
      "Mera favourite future woh hai jismein tum mere saath ho.",
    ],
  },

  /* ── H. Footer ──────────────────────────────────────────── */
  footer: {
    message: `${names.her} ke liye, ${names.him} ki taraf se ❤️`,
  },
};

export default loveContent;
