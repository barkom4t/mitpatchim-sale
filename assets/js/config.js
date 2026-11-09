/* ==========================================================================
   מתפתחים ביחד · Store & forms configuration
   The ONLY file to edit when connecting a store, payment pages or a CRM.
   ========================================================================== */
window.MB_CONFIG = {
  /* Where form submissions are POSTed as JSON (Make / Zapier / n8n webhook,
     or your own endpoint). Leave empty to show the success message only. */
  formEndpoint: "",

  /* Optional: open checkout links in a new tab (true) or the same tab (false). */
  checkoutNewTab: true,

  /* Shows "מכבדים BUYME" in the top bar and on the sale page. Confirm with Shlomit
     which products BUYME covers before launch; set to false to hide it everywhere. */
  acceptsBuyme: true,

  /* Seasonal sale (nov.html + site-wide top bar while it runs).
     Products listed in `prices` show their regular `price` struck through next to
     the sale price. Every other product shows the store's own compare-at price
     (`compare`) when it has one. After `end` all of this switches off by itself.
     November 2026 (approved): the 3 WeekByWeek kits at 15% off; the courses and
     support plans keep the store sale prices shown on /maslulim.
     !! Set the same kit prices in the store (or a coupon) so checkout matches. */
  sale: {
    name: "מבצעי נובמבר",
    tagline: "מבצעים של פעם בשנה",
    page: "nov.html",
    start: "2026-11-01T00:00:00+02:00",
    end: "2026-11-30T23:59:59+02:00",
    draft: false,
    prices: {
      "wbw-pregnancy": 357,   // 420 - 15%
      "wbw-year1": 293,       // 345 - 15% (293.25, rounded down)
      "wbw-year2": 293,       // 345 - 15%
    },
    /* Checkout links used while the sale runs (the sale product pages on /maslulim). */
    urls: {
      "fy-course": "https://www.shlomit-schuster.com/product-page/bluefriday-הקורס-המלא-הקלפים",
      "fy-plan": "https://www.shlomit-schuster.com/product-page/bluefriday-תוכנית-הליווי-המלאה",
      "td-course": "https://www.shlomit-schuster.com/product-page/bluefriday-קורס-שנה-שנייה-הקלפים",
      "td-plan": "https://www.shlomit-schuster.com/product-page/bluefriday-תוכנית-הליווי-לשנה-השנייה",
      "wbw-year2": "https://www.shlomit-schuster.com/product-page/bluefriday-ערכת-קלפים-שנה-שנייה",
    },
  },

  /* Every buy button on the site points to one of these keys (data-buy="key").
     Replace `url` with the real checkout / payment-page link for each product.
     Currently: the existing Wix pages, as a working fallback. */
  products: {
    // Flagship programs
    "fy-course":       { name: "הקורס המלא לשנה הראשונה + הקלפים", price: 977, compare: 1495,  url: "https://www.shlomit-schuster.com/firstyear" },
    "fy-plan":         { name: "תוכנית הליווי לשנה הראשונה",        price: 1500, compare: 1840, url: "https://www.shlomit-schuster.com/firstyear" },
    "td-course":       { name: "קורס גיל 1-3 + קלפים",               price: 977, compare: 1495,  url: "https://www.shlomit-schuster.com/secondyear" },
    "td-plan":         { name: "תוכנית הליווי לגיל 1-3",            price: 1500, compare: 1840, url: "https://www.shlomit-schuster.com/secondyear" },
    "res-year1":       { name: "מסלול מילואים · שנה ראשונה",         price: 1500, compare: 1700, url: "https://www.shlomit-schuster.com/product-page/תוכנית-הליווי-לשנה-הראשונה-מילואים" },
    "res-year2":       { name: "מסלול מילואים · גיל 1-3",            price: 1500, compare: 1700, url: "https://www.shlomit-schuster.com/product-page/תוכנית-הליווי-לשנה-השנייה-מילואים" },

    // WeekByWeek kits
    "wbw-pregnancy":   { name: "WeekByWeek הריון",                  price: 420,  url: "https://www.shlomit-schuster.com/product-page/weekbyweek-הריון" },
    "wbw-year1":       { name: "WeekByWeek שנה ראשונה",             price: 345,  url: "https://www.shlomit-schuster.com/product-page/ערכת-קלפים-מתפתחים-ביחד-week-by-week" },
    "wbw-year2":       { name: "WeekByWeek שנה שנייה",              price: 345, url: "https://www.shlomit-schuster.com/product-page/weekbyweek-בשנה-השנייה" },

    "wbw-double":      { name: "WeekByWeek הערכה הכפולה",           price: 629, compare: 650, url: "https://www.shlomit-schuster.com/product-page/weekbyweek-הערכה-הכפולה" },
    "y2-perfect-kit":  { name: "הערכה המושלמת לשנה השנייה",         price: 335, compare: 405, url: "https://www.shlomit-schuster.com/product-page/הערכה-המושלמת-לשנה-השנייה" },

    // Mini-course, lectures & workshops
    "welcome-baby":    { name: "Welcome Baby",                       price: 500, compare: 699,  url: "https://www.shlomit-schuster.com/product-page/קורס-דיגיטלי-וואלקם-בייבי" },
    "new-sibling":     { name: "אח חדש במשפחה",                      price: 180, url: "https://www.shlomit-schuster.com/product-page/הרצאה-אח-חדש-במשפחה" },
    "ws-sleep":        { name: "סדנת סדר יום ושינה",                 price: 380,  url: "https://www.shlomit-schuster.com/product-page/קורס-בודד-סדר-יום-ושינה" },
    "ws-dilemmas":     { name: "דילמות חינוכיות בשנה השנייה",        price: 350,  url: "https://www.shlomit-schuster.com/product-page/קורס-הצבת-גבולות-והתמודדות-עם-התקפי-זעם" },
    "ws-montessori":   { name: "סדנת מונטסורי מעשית",                price: 345,  url: "https://www.shlomit-schuster.com/product-page/קורס-בודד-הסביבה-המונטסורית" },
    "ws-potty":        { name: "הרצאת פרידה מחיתולים",               price: 180,  url: "https://www.shlomit-schuster.com/product-page/גמילה-מחיתולים" },
    "ws-kindergarten": { name: "בחירת גן והסתגלות לגן",              price: 180,  url: "https://www.shlomit-schuster.com/product-page/סדנה-בחירת-גן-והסתגלות-לגן" },
    "ws-tummy":        { name: "לומדים לשכב על הבטן",                price: 180,  url: "https://www.shlomit-schuster.com/product-page/קורס-לומדים-לשכב-על-הבטן" },
    "lec-kindergarten-2026": { name: "הרצאה מוקלטת: הסתגלות לגן 2026", price: 130, url: "https://www.shlomit-schuster.com/product-page/הרצאה-מוקלטת-הסתגלות-לגן" },
    "ws-babyyoga":     { name: "בייבי יוגה",                         price: 120,  url: "https://www.shlomit-schuster.com/product-page/סדנה-דיגיטלית-בייבי-יוגה" },
    "ws-firstaid":     { name: "עזרה ראשונה, החייאה ובטיחות",        price: 99,   url: "https://www.shlomit-schuster.com/product-page/סדנה-דיגיטלית-עזרה-ראשונה-והחייאת-תינוקות-ומדריך-בטיחות" },
    "event-webinar":   { name: "הרצאה: סביבה מעודדת התפתחות",        price: null, url: "https://www.shlomit-schuster.com/event" },
    "ws-frontal-adi":  { name: "סדנה פרונטלית עם עדי שוסטר",         price: 650,  url: "https://www.shlomit-schuster.com/product-page/סדנה-פרונטלית-עדי-שוסטר" },

    // Birth gifts
    "gift-first-year-box":  { name: "My first year box",            price: 699,  url: "https://www.shlomit-schuster.com/product-page/my-first-year-box" },
    "gift-toddler-box":     { name: "מארז לגילאי שנה-שנתיים",        price: 529.9, url: "https://www.shlomit-schuster.com/product-page/copy-of-מארז-מושלם-ליולדת-ערכה-מושלמת-ליולדת-x-week-by-week" },
    "gift-mom-box-premium": { name: "מארז מושלם ליולדת × WeekByWeek", price: 594, compare: 644,  url: "https://www.shlomit-schuster.com/product-page/מארז-מושלם-ליולדת-ערכה-מושלמת-ליולדת-x-week-by-week" },
    "gift-mom-box":         { name: "מארז ליולדת × WeekByWeek",       price: 519,  url: "https://www.shlomit-schuster.com/product-page/קלפים-מוצרי-או-איט" },
    "gift-telush-box":      { name: "מארז מתפתחים × טלוש",            price: 750, compare: 1010,  url: "https://www.shlomit-schuster.com/product-page/מתנת-לידה-מארז-מתפתחים" },
    "gift-telush":          { name: "מתנת לידה טלוש",                 price: 295, compare: 393,  url: "https://www.shlomit-schuster.com/product-page/מתנת-לידה-טלוש" },
    "gift-cards-carrier":   { name: "קלפים + מנשא לאמר",              price: 829,  url: "https://www.shlomit-schuster.com/product-page/מתנת-לידה-קלפים-מנשא-לאמר" },
    "gift-nursing-book":    { name: "ספר הנקה יצירתית + WeekByWeek",  price: 419.2, compare: 524, url: "https://www.shlomit-schuster.com/product-page/ערכה-מיוחדת-ספר-הנקה-יצרתית-ערכת-week-by-week" },
    "gift-imush":           { name: "קלפים + ספר אימוש",              price: 480,  url: "https://www.shlomit-schuster.com/product-page/קלפים-ספר-אימוש" },
    "gift-babyyoga":        { name: "קלפים + בייבי יוגה",             price: 430,  url: "https://www.shlomit-schuster.com/product-page/מתנת-לידה-ערכת-הקלפים-בייבי-יוגה" },
    "gift-dunstan":         { name: "קלפים + דנסטן",                  price: 700,  url: "https://www.shlomit-schuster.com/product-page/קלפים-דנסטן-בזום" },
    "gift-meeting":         { name: "קלפים + פגישה אישית עם שלומית",  price: 850,  url: "https://www.shlomit-schuster.com/product-page/קלפים-פגישה-אישית" },

    // Professional trainings
    "pro-massage":     { name: "הכשרת מדריכות עיסוי תינוקות",       price: 4800, url: "https://www.shlomit-schuster.com/product-page/קורס-הכשרת-מדריכות-עיסוי-תינוקות" },
    "pro-babyyoga":    { name: "הכשרת מדריכות בייבי יוגה",          price: 4900, compare: 6000, url: "https://www.shlomit-schuster.com/product-page/הכשרת-מדריכות-בייבי-יוגה" },
    "pro-combo":       { name: "הכשרת עיסוי + בייבי יוגה",          price: 6200, url: "https://www.shlomit-schuster.com/product-page/הכשרת-עיסוי-ובייבי-יוגה" },
    "pro-dunstan":     { name: "הכשרת דנסטן",                        price: 4500, url: "https://www.shlomit-schuster.com/product-page/הכשרת-דנסטן" },
  },
};

/* Added by deploy/build-november.mjs: this deployment ships only the November page. */
window.MB_CONFIG.linkMap = {
  "nov.html": "./",
  "index.html": "https://www.shlomit-schuster.com/",
  "pregnancy.html": "https://www.shlomit-schuster.com/pregnancycards",
  "first-year.html": "https://www.shlomit-schuster.com/firstyear",
  "toddlers.html": "https://www.shlomit-schuster.com/secondyear",
  "weekbyweek.html": "https://www.shlomit-schuster.com/cards",
  "workshops.html": "https://www.shlomit-schuster.com/sadna",
  "gifts.html": "https://www.shlomit-schuster.com/matnat",
  "about.html": "https://www.shlomit-schuster.com/",
  "professionals.html": "https://www.shlomit-schuster.com/training",
  "perks.html": "https://www.shlomit-schuster.com/",
  "reservists.html": "https://www.shlomit-schuster.com/miluim",
  "blog.html": "https://www.shlomit-schuster.com/blog",
  "contact.html": "https://www.shlomit-schuster.com/contact-8",
  "blog-when-to-switch-stroller.html": "https://www.shlomit-schuster.com/post/אז-מתי-להעביר-לטיולון",
  "blog-choosing-play-mat.html": "https://www.shlomit-schuster.com/post/איך-בוחרים-משטח-פעילות",
  "blog-hot-days.html": "https://www.shlomit-schuster.com/post/איך-להתמודד-עם-ימים-חמים",
  "blog-dressing-for-winter.html": "https://www.shlomit-schuster.com/post/איך-מלבישים-בחורף",
  "blog-pacifier-refusers.html": "https://www.shlomit-schuster.com/post/בואו-נדבר-על-סרבני-מוצץ",
  "blog-first-smile.html": "https://www.shlomit-schuster.com/post/החיוך-הראשון-שלי",
  "blog-toys-by-age.html": "https://www.shlomit-schuster.com/post/המלצות-לצעוצועים-לפי-גיל",
  "blog-car-rides.html": "https://www.shlomit-schuster.com/post/ואם-התינוק-שלי-לא-אוהב-נסיעות-ברכב",
  "blog-intimacy-after-birth.html": "https://www.shlomit-schuster.com/post/זוגיות-ומיניות-אחרי-לידה-ד-ר-עידן-מיליצ-ר-פסיכותרפיסט-מטפל-זוגי-מיני",
  "blog-flying-with-babies.html": "https://www.shlomit-schuster.com/post/טיסה-עם-תינוקות",
  "blog-golden-sleep-tip.html": "https://www.shlomit-schuster.com/post/טיפ-הזהב-שלי-לשינה-בשנה-הראשונה-ובכלל",
  "blog-gas-relief.html": "https://www.shlomit-schuster.com/post/טיפים-להקלה-על-גזים-וכאבי-בטן",
  "blog-sleep-tips.html": "https://www.shlomit-schuster.com/post/טיפים-לשינה",
  "blog-hug-day.html": "https://www.shlomit-schuster.com/post/יום-החיבוק",
  "blog-sandwich-children.html": "https://www.shlomit-schuster.com/post/ילדי-סנדוויץ",
  "blog-couple-to-family.html": "https://www.shlomit-schuster.com/post/כשזוג-הופך-למשפחה-דנה-אמר",
  "blog-continuum-concept.html": "https://www.shlomit-schuster.com/post/מה-הקשר-בין-זארה-לעקרון-הרצף",
  "blog-birthday-gifts-1-2.html": "https://www.shlomit-schuster.com/post/מתנות-ליום-הולדת-שנה-ושנתיים",
  "blog-first-tooth.html": "https://www.shlomit-schuster.com/post/מתפתחים-ביחד-מהשן-הראשונה",
  "blog-dream-to-reality.html": "https://www.shlomit-schuster.com/post/מתפתחים-ביחד-מחלום-למציאות",
  "blog-bottle-refusers.html": "https://www.shlomit-schuster.com/post/סרבני-בקבוק",
  "blog-walkers-and-jumpers.html": "https://www.shlomit-schuster.com/post/על-הליכונים-וג-אמפרים",
  "blog-books-and-babies.html": "https://www.shlomit-schuster.com/post/על-ספרים-ותינוקות",
  "blog-developmental-leaps.html": "https://www.shlomit-schuster.com/post/על-קפיצות-התפתחות-שמעתם",
  "blog-babies-and-light.html": "https://www.shlomit-schuster.com/post/על-תינוקות-ואור",
  "blog-sense-of-smell.html": "https://www.shlomit-schuster.com/post/על-תינוקות-וחוש-הריח",
  "blog-babies-and-music.html": "https://www.shlomit-schuster.com/post/על-תינוקות-ומוזיקה",
  "blog-babies-and-screens.html": "https://www.shlomit-schuster.com/post/על-תינוקות-ומסכים",
  "blog-babies-and-boredom.html": "https://www.shlomit-schuster.com/post/על-תינוקות-ושעמום",
  "blog-baby-beanbag.html": "https://www.shlomit-schuster.com/post/פוף-לתינוקות-למה-אני-כל-כך-ממליצה-עליו",
  "blog-potty-training.html": "https://www.shlomit-schuster.com/post/פרידה-מחיתולים",
  "blog-growth-spurts.html": "https://www.shlomit-schuster.com/post/קפיצות-גדילה-כל-מה-שצריך-לדעת",
  "blog-crying-and-movement.html": "https://www.shlomit-schuster.com/post/שמתם-לב-שכשהתינוק-שלכם-בוכה-בתגובה-אינסטינקטיבית-אתם-נעמדים-ומתחילים-לזוז",
  "blog-regression-in-wartime.html": "https://www.shlomit-schuster.com/post/תגובות-רגרסיביות-של-ילדים-בימי-המלחמה-ד-ר-מורן-אינפלוס-אדלר",
  "blog-babies-and-textures.html": "https://www.shlomit-schuster.com/post/תינוקות-ומרקמים",
  "blog-babies-and-statistics.html": "https://www.shlomit-schuster.com/post/תינוקות-וסטטיסטיקה",
  "blog-holding-positions.html": "https://www.shlomit-schuster.com/post/תנוחות-אחיזה-שונות",
  "blog-bedtime-prayer.html": "https://www.shlomit-schuster.com/post/תפילילה",
  "product-toddler-box.html": "https://www.shlomit-schuster.com/product-page/copy-of-מארז-מושלם-ליולדת-ערכה-מושלמת-ליולדת-x-week-by-week",
  "product-my-first-year-box.html": "https://www.shlomit-schuster.com/product-page/my-first-year-box",
  "product-weekbyweek-second-year.html": "https://www.shlomit-schuster.com/product-page/weekbyweek-בשנה-השנייה",
  "product-weekbyweek-pregnancy.html": "https://www.shlomit-schuster.com/product-page/weekbyweek-הריון",
  "product-potty-training-lecture.html": "https://www.shlomit-schuster.com/product-page/גמילה-מחיתולים",
  "product-baby-yoga-instructor-training.html": "https://www.shlomit-schuster.com/product-page/הכשרת-מדריכות-בייבי-יוגה",
  "product-perfect-second-year-kit.html": "https://www.shlomit-schuster.com/product-page/הערכה-המושלמת-לשנה-השנייה",
  "product-new-sibling-lecture.html": "https://www.shlomit-schuster.com/product-page/הרצאה-אח-חדש-במשפחה",
  "product-perfect-new-mom-box.html": "https://www.shlomit-schuster.com/product-page/מארז-מושלם-ליולדת-ערכה-מושלמת-ליולדת-x-week-by-week",
  "product-birth-gifts.html": "https://www.shlomit-schuster.com/product-page/מתנות-הלידה-של-מתפתחים-ביחד",
  "product-gift-mitpatchim-box.html": "https://www.shlomit-schuster.com/product-page/מתנת-לידה-מארז-מתפתחים",
  "product-gift-cards-and-carrier.html": "https://www.shlomit-schuster.com/product-page/מתנת-לידה-קלפים-מנשא-לאמר",
  "product-choosing-daycare-lecture.html": "https://www.shlomit-schuster.com/product-page/סדנה-בחירת-גן-והסתגלות-לגן",
  "product-first-aid-workshop.html": "https://www.shlomit-schuster.com/product-page/סדנה-דיגיטלית-עזרה-ראשונה-והחייאת-תינוקות-ומדריך-בטיחות",
  "product-weekbyweek-first-year.html": "https://www.shlomit-schuster.com/product-page/ערכת-קלפים-מתפתחים-ביחד-week-by-week",
  "product-montessori-workshop.html": "https://www.shlomit-schuster.com/product-page/קורס-בודד-הסביבה-המונטסורית",
  "product-routine-and-sleep.html": "https://www.shlomit-schuster.com/product-page/קורס-בודד-סדר-יום-ושינה",
  "product-welcome-baby-course.html": "https://www.shlomit-schuster.com/product-page/קורס-דיגיטלי-וואלקם-בייבי",
  "product-baby-massage-instructor-training.html": "https://www.shlomit-schuster.com/product-page/קורס-הכשרת-מדריכות-עיסוי-תינוקות",
  "product-boundaries-and-tantrums.html": "https://www.shlomit-schuster.com/product-page/קורס-הצבת-גבולות-והתמודדות-עם-התקפי-זעם",
  "product-tummy-time.html": "https://www.shlomit-schuster.com/product-page/קורס-לומדים-לשכב-על-הבטן",
  "product-new-mom-box.html": "https://www.shlomit-schuster.com/product-page/קלפים-מוצרי-או-איט",
  "product-first-year-reservists.html": "https://www.shlomit-schuster.com/product-page/תוכנית-הליווי-לשנה-הראשונה-מילואים",
  "product-second-year-reservists.html": "https://www.shlomit-schuster.com/product-page/תוכנית-הליווי-לשנה-השנייה-מילואים"
};
