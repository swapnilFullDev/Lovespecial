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
    message: `Hone wale pati ki taraf se, us insaan ke liye jo uske dil mein ek khaas jagah rakhti hai.`,
    line: "Kuch vaade, kuch dil ki baatein, aur ek aisa ehsaas jo sirf tumhare liye hai.",
    button: "Pehla karva chauth ❤️",
    signature: `Pati ki taraf se, Patni ke liye.`,
    envelopeNote: `Pyari patni ke liye`,
  },

  /* ── C. Home ────────────────────────────────────────────── */
  home: {
    eyebrow: `${names.her} ke liye, ${names.him} ki taraf se`,
    // `heading` is the exact sentence shown on screen.
    // `headingAccent` is the part of it rendered in italic rose.
    heading: `${names.her}, Tumhare Liye ❤️`,
    headingAccent: "Tumhare Liye",
    description: `Yeh chhoti si duniya Mne tumhare liye banayi hai. Jab bhi tumhara mann kare, yahan aana aur un baaton ko padhna jo shayad woh har baar saamne baith kar keh na pau.`,
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

      "Aur ab jab bhi main kisi temple mein jaaunga, toh mann mein yahi khwaahish rahegi ki agli baar wahan aapko apne saath lekar aaun. Jin jagahon par main ab tak akele gaya hoon, ab un jagahon par aapke saath jaana chahta hoon. Bhagwan se apne liye kuch maangunga, toh usmein aapki khushi, humara saath aur humari zindagi bhar ki mohabbat zaroor shaamil hogi. ❤️",

      "Lekin main chahta hoon ki har mushkil ke baad hum ek-doosre ke aur kareeb aayein. Hum sirf khushi ke dino mein nahi, balki un dino mein bhi ek-doosre ka haath thaamein jab sab kuch aasaan na ho. Chahe kitni bhi ladai ho, hum ek-doosre ki respect kabhi nahi khoyenge. Har problem ko milkar suljhayenge, ek-doosre ke sapno ko support karenge aur kabhi apne rishte ko taken for granted nahi lenge.",

      "Mere liye pyaar sirf 'I Love You' kehna nahi hoga. Pyaar aata hai aapki baate sunna, aapki izzat karna, aapke sapno ko apna samajhna, aapki chhoti-chhoti khushiyon ka khayal rakhna aur har din aapko dobara choose karna.",

      "Aur jab bhi aap in vaadon ko padhein, bas itna yaad rakhna... aap mere liye sirf meri mohabbat nahi, balki meri zindagi ka woh hissa ho jise main hamesha sambhaal kar rakhna chahta hoon. Main yeh vaade isliye nahi kar raha ki main perfect hoon, balki isliye kar raha hoon kyunki main aapke saath milkar ek khoobsurat zindagi banana chahta hoon. Jahan aapko ek husband hi nahi, balki ek best friend, ek partner, ek supporter aur ek aisa insaan mile jo har haal mein aapko choose kare. Aaj bhi, kal bhi aur zindagi ke aakhri din tak. ❤️",
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
    greeting: `To My Future Wife, ❤️`,

    paragraphs: [
      "Main nahi jaanta ki zindagi humein kaun-kaun se mod dikhayegi. Kabhi khushiyan hongi, kabhi mushkilein hongi, kabhi hum saath mein hasenge aur kabhi ek-doosre se naraaz bhi honge. Lekin main chahta hoon ki hum har haal mein ek-doosre ko samajhne ki koshish karein. Chahe kitni bhi mushkil kyun na ho, hum ek-doosre ka haath thaamna kabhi na bhoolein.",

      "Main tumhara sirf aaj nahi, tumhare aane wale kal ka bhi hissa banna chahta hoon. Tumhare sapno mein tumhara saathi, tumhari pareshaniyon mein tumhara humdard, tumhari khushiyon mein tumhari muskaan ki wajah aur tumhare mushkil waqt mein tumhara sabse achha dost banna chahta hoon. Main chahta hoon ki tumhe kabhi yeh mehsoos na ho ki tumhe apni har ladai akele ladni hai.",

      "Mujhe tumhare saath sirf bade-bade pal nahi jeene. Main tumhare saath woh chhoti-chhoti khushiyan bhi jeena chahta hoon, jinse milkar ek khoobsurat zindagi banti hai. Subah ki chai, tumhara energetic shake, ek-doosre ko dekhkar muskurana, thodi-thodi si masti, ek-doosre ka intezaar aur din khatam hone par saath baithkar baatein karna. Mere liye toh inhi chhoti-chhoti baaton mein zindagi ki asli khoobsurati hai.",

      "Aur haan, mujhe pata hai ki tumhe bahar ka khana aur khaaskar momos kitne pasand hain. ❤️ Main chahta hoon ki hum saath mein jaayein, tumhare favourite momos khaayein aur aise hi chhoti-chhoti yaadein banaayein. Haan, kabhi-kabhi main tumhe bahar ka khana khaane se mana karunga, toh please yeh mat sochna ki main tumhari khushiyon ke beech aa raha hoon. Bas tumhari health ki fikr hoti hai mujhe. Main chahta hoon ki tum apni favourite cheezon ka maza bhi lo aur healthy bhi raho. Aur waise bhi, tumhare saath momos khaane jaana meri bhi favourite memories mein se ek hoga.",

      "Main chahta hoon ki tum mere saamne apni har baat keh sako. Apni khushiyan, apne darr, apni uljhan aur apne sapne. Tumhe mere saamne hamesha strong banne ya sab kuch theek hone ka dikhawa karne ki zaroorat na pade. Jab tum thak jaao, toh mere paas aakar sukoon se baith sako. Jab tum udaas ho, toh bina kuch kahe mera haath thaam sako. Main har baar tumhari problem solve kar paaun, yeh zaroori nahi, lekin main chahta hoon ki tumhe har baar yeh yakeen ho ki main tumhare saath hoon.",

      "Ek baat hai jo main tumse dil se kehna chahta hoon. Main jaanta hoon ki shaadi ke baad tumhe apna ghar, apne parents aur apni purani zindagi ka ek hissa chhodkar mere ghar aana hoga. Shayad kuch pal tumhe apne ghar ki yaad aaye, apni mummy ki, apne papa ki aur un chhoti-chhoti baaton ki jo tumhari zindagi ka hissa rahi hain. Main tumse yeh nahi kahunga ki tumhe kabhi unki yaad nahi aani chahiye. Balki main chahta hoon ki tum unhe yaad karo, unse baat karo, unse milne jaao aur unke saath pehle ki tarah apna rishta nibhaao.",

      "Aur jab ap apke ghr se vida ho rhi ho, toh ap mummy-papa se yeh zrur se kehna — 'Mummy-Papa, meri vidai zaroor ho rahi hai, lekin aapko chhodkar nahi. Balki ab aapka ek aur beta hai. Aapki khushi, aapki zaroorat aur aapki pareshani mein ab hum dono aapke saath khade rahenge.' ❤️ Main chahta hoon ki tumhare parents ko bhi mujh par utna hi bharosa ho jitna tum karti ho. Jahan unhe humari zaroorat hogi, wahan hum dono milkar unka saath denge. Kyunki tumhare parents sirf tumhare nahi, mere bhi apne honge.",

      "Main yeh nahi kehta ki main ek perfect ladka hoon. Mujhmein bhi kamiyan hain, mujhse bhi galtiyan hongi aur ho sakta hai ki kabhi main tumhari baat samajhne mein waqt laga doon. Lekin main har din khud ko behtar banaane ki koshish karunga. Main chahta hoon ki tumhe apne husband mein sirf ek life partner nahi, balki ek aisa dost bhi mile jiske saamne tum bina kisi jhijhak ke apna dil khol sako.",

      "Aur jab kabhi zindagi hum dono ko thaka de, toh hum ek-doosre ke liye sukoon ban sakein. Humare beech pyaar ke saath izzat ho, apnapan ho, bharosa ho aur ek-doosre ko har din dobara choose karne ki wajah ho. Main chahta hoon ki waqt ke saath humara rishta sirf gehra hi nahi, balki aur bhi khoobsurat hota jaaye.",

      "Agar kabhi tumhe lage ki main apni feelings theek se keh nahi paa raha, toh yeh khat dobara padh lena. Shayad mere lafz tumhe yaad dila dein ki mere dil mein tumhare liye kitni jagah hai. Main chahta hoon ki tum humare aane wale kal ke baare mein sochkar muskuraao, kyunki us kal mein main tumhare saath chalne ke liye dil se taiyaar hoon.",
    ],

    closing: "Hamesha tumhara,",
    signature: `${names.him} ❤️`,
  },

  /* ── F. Karva Chauth — ek shared sapna ──────────────────── */
  karvaChauth: {
    eyebrow: `${names.her} aur ${names.him} ka ek sapna`,
    heading: "Ek Din, Karva Chauth Ki Shaam... 🌙",
    paragraphs: [
      "Main sochta hoon us Karva Chauth ki shaam ke baare mein, jab tum saj-dhaj kar mere saamne aaogi, chaand niklega aur main chaand se pehle tumhe dekhkar muskuraunga. ❤️",

      "Jab hum chaand ko dekhkar phir ek-doosre ko dekhenge, toh main bas yahi sochunga — meri zindagi ka sabse khoobsurat tohfa mere saamne khada hai.",

      "Aur main chahta hoon ki tumhe sirf us din nahi, balki har din mere pyaar, care aur saath ka ehsaas ho. Kyunki mere liye tumhari khushi aur tumhara sukoon hi sabse zyada maayne rakhta hai. ❤️🌙",
    ],
    handwritten: `Us chaand ke neeche, ${names.her} aur ${names.him}.`,
  },

  /* ── G. Chhoti romantic baatein ─────────────────────────── */
  // These are deliberately spread across the site, not shown together.
  romanticMessages: {
    promise: `${names.her}, har din tumhe thoda aur samajhna, tumse thoda aur pyaar karna chahta hoon.`,
    letter: `${names.her}, chahe din kaisa bhi ho, tumse baat karke sab behtar ho jata hai.`,
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
