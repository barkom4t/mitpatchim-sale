/* מתפתחים ביחד · site script
   Shared header/footer, icons, interactions. No dependencies. */
(function () {
  "use strict";
  // Content is hidden for the reveal animation only when JS runs; failsafe shows everything after 2.5s.
  document.documentElement.classList.add("js");
  setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in")), 2500);

  /* ---------------- Contact & store links ---------------- */
  const CONTACT = {
    whatsapp: "https://wa.me/972512279090",
    phoneOrit: "051-2279090",
    email: "digitalbaby10@gmail.com",
    address: "השניים 18, גבעתיים",
    instagram: "https://www.instagram.com/shlomit.shuster/",
    facebook: "https://www.facebook.com/shlomitshuster/",
  };
  const STORE = "https://www.shlomit-schuster.com";

  /* ---------------- Icons (stroke, 24px grid) ---------------- */
  const P = {
    arrow: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    heart: '<path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6z"/>',
    baby: '<circle cx="12" cy="8" r="4"/><path d="M10.5 7.5h.01M13.5 7.5h.01M10.8 9.6c.7.5 1.7.5 2.4 0"/><path d="M6 21v-1a6 6 0 0 1 12 0v1"/>',
    sparkles: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    cards: '<rect x="3" y="6" width="12" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
    message: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/>',
    moon: '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/>',
    brain: '<path d="M12 5a3 3 0 0 0-5.8-1A3 3 0 0 0 3.5 8a3.5 3.5 0 0 0 .7 6.3A3.5 3.5 0 0 0 9 19a3 3 0 0 0 3 1V5z"/><path d="M12 5a3 3 0 0 1 5.8-1A3 3 0 0 1 20.5 8a3.5 3.5 0 0 1-.7 6.3A3.5 3.5 0 0 1 15 19a3 3 0 0 1-3 1"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
    shield: '<path d="M12 21s8-3.5 8-10V5l-8-3-8 3v6c0 6.5 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    bath: '<path d="M4 12h17v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-2z"/><path d="M6 12V5a2 2 0 0 1 3.5-1.3M6 20l-1 2M18 20l1 2"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    stethoscope: '<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M10 14v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
    school: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
    video: '<rect x="2.5" y="5.5" width="14" height="13" rx="2"/><path d="m16.5 10 5-3v10l-5-3"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    yoga: '<circle cx="12" cy="4.5" r="2"/><path d="M4 21l4-4 4 1 4-1 4 4M12 7v7M6 11l6-2 6 2"/>',
    medal: '<path d="M7.2 2h9.6L14 8h-4z"/><circle cx="12" cy="15" r="6"/><path d="m12 12 1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L9 14.3l2-.3z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    whatsapp: '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  };
  const icon = (n, cls) => `<svg class="${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;
  window.MBIcon = icon;
  document.querySelectorAll("[data-icon]").forEach((el) => { el.outerHTML = icon(el.dataset.icon, el.className); });

  /* ---------------- Header ---------------- */
  const page = document.body.dataset.page || "";
  // Stage-first navigation: pregnancy → first year → second year
  const STAGE_NAV = [
    ["pregnancy.html", "pregnancy", "הריון", "מהשבוע הראשון ועד הלידה", "var(--st-preg)", "var(--st-preg-dot)"],
    ["first-year.html", "first-year", "שנה ראשונה", "מלידה ועד גיל שנה", "var(--st-y1)", "var(--st-y1-dot)"],
    ["toddlers.html", "toddlers", "שנה שנייה", "מגיל שנה עד 3", "var(--st-y2)", "var(--st-y2-dot)"],
  ];
  const MORE_NAV = [
    ["weekbyweek.html", "ערכות WeekByWeek", "קלף וסרטון לכל שבוע"],
    ["perks.html", "מועדון ההטבות", "קופונים למותגים שאנחנו אוהבים"],
    ["professionals.html", "הכשרות לאנשי מקצוע", "עיסוי, בייבי יוגה ודנסטן"],
    ["reservists.html", "הטבת מילואים", "ליווי מלא עם החזר מלא"],
    ["blog.html", "מגזין", "טיפים ומאמרים"],
    ["contact.html", "יצירת קשר", "טלפון, וואטסאפ ומייל"],
  ];
  const header = document.querySelector("[data-header]");
  if (header) {
    const SALE = (window.MB_CONFIG || {}).sale;
    const saleOn = SALE && Date.now() >= Date.parse(SALE.start) && Date.now() <= Date.parse(SALE.end);
    const saleDays = saleOn ? Math.max(1, Math.ceil((Date.parse(SALE.end) - Date.now()) / 864e5)) : 0;
    // Top bar: several short messages. Desktop shows them side by side, phones rotate them.
    const left = saleDays === 1 ? "פחות מיום" : saleDays + " ימים";
    const ANN = [];
    if (saleOn && page !== "nov") ANN.push(`<span class="ann-ico" aria-hidden="true">%</span><b>${SALE.name}</b> · נשארו ${left} <a href="${SALE.page}">לכל המבצעים</a>`);
    if (saleOn && page === "nov") ANN.push(`<span class="ann-ico" aria-hidden="true">%</span><b>${SALE.name}</b> | ${SALE.tagline || "עד 30.11"}`);
    if (page !== "reservists") ANN.push(`<span class="ann-ico" aria-hidden="true">★</span><b>משרתי מילואים:</b> ליווי מלא בהחזר מלא <a href="reservists.html">איך זה עובד</a>`);
    if ((window.MB_CONFIG || {}).acceptsBuyme) ANN.push(`<span class="ann-ico" aria-hidden="true">🎁</span><b>מכבדים BUYME</b> · גם לקורסים ולמארזים`);
    const announce = ANN.length ? `<div class="announce announce--multi${saleOn ? " announce--sale" : ""}" role="region" aria-label="עדכונים">${ANN.map((t, i) => `<span class="ann-item${i ? "" : " on"}">${t}</span>`).join("")}</div>` : "";
    header.outerHTML = `${announce}
<header class="site-header" id="top">
  <div class="container">
    <div class="bar">
      <a class="brand" href="index.html" aria-label="מתפתחים ביחד - דף הבית"><img src="assets/img/logo.png" alt="מתפתחים ביחד · יד ביד עם שלומית שוסטר" width="161" height="46"></a>
      <nav class="nav" aria-label="ניווט ראשי">
        ${STAGE_NAV.map(([h, k, t, , , dot]) => `<a href="${h}" class="st ${page === k ? "active" : ""}" style="--c:${dot}">${t}</a>`).join("")}
        ${saleOn ? `<a href="${SALE.page}" class="nav-sale ${page === "nov" ? "active" : ""}">${SALE.name}</a>` : ""}
        <a href="workshops.html" class="${page === "workshops" ? "active" : ""}">סדנאות</a>
        <a href="gifts.html" class="${page === "gifts" ? "active" : ""}">מתנות לידה</a>
        <a href="about.html" class="${page === "about" ? "active" : ""}">שלומית</a>
        <div class="has-menu more">
          <button type="button" aria-haspopup="true">עוד ${icon("chevron")}</button>
          <div class="mega" role="menu">
            ${MORE_NAV.map(([h, t, d]) => `<a role="menuitem" href="${h}"><span><strong>${t}</strong><span>${d}</span></span></a>`).join("")}
          </div>
        </div>
      </nav>
      <div class="header-cta">
        <a class="btn btn--primary btn--sm" href="${CONTACT.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")} דברו איתנו</a>
        <a class="icon-btn menu-toggle-wa" href="${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="וואטסאפ">${icon("whatsapp")}</a>
        <button class="icon-btn menu-toggle" type="button" aria-label="פתיחת תפריט" aria-expanded="false">${icon("menu")}</button>
      </div>
    </div>
  </div>
</header>
<div class="mobile-panel" aria-hidden="true">
  <div class="sheet" role="dialog" aria-label="תפריט">
    <div class="sheet-head"><img src="assets/img/logo.png" alt="מתפתחים ביחד" width="161" height="46"><button class="icon-btn close" type="button" aria-label="סגירת תפריט">${icon("x")}</button></div>
    <nav>
      <div class="group-label">באיזה שלב אתם?</div>
      ${STAGE_NAV.map(([h, , t, d, bg]) => `<a class="st-link" href="${h}" style="--c:${bg}"><span>${t}<small>${d}</small></span></a>`).join("")}
      ${saleOn ? `<a class="st-link" href="${SALE.page}" style="--c:#2E1D1A;color:#fff"><span>${SALE.name}<small style="color:#F6C9BC">המחירים המיוחדים, לזמן מוגבל</small></span></a>` : ""}
      <div class="group-label">עוד</div>
      <a href="workshops.html">סדנאות והרצאות</a>
      <a href="gifts.html">מתנות לידה</a>
      <a href="about.html">הכירו את שלומית</a>
      ${MORE_NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
    </nav>
    <a class="btn btn--primary btn--block" href="${CONTACT.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")} דברו איתנו בוואטסאפ</a>
  </div>
</div>`;
    // Phones: rotate the top-bar messages one at a time (paused on hover/focus, off for reduced motion).
    const bar = document.querySelector(".announce--multi");
    const items = bar ? [...bar.querySelectorAll(".ann-item")] : [];
    if (items.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let i = 0, paused = false;
      bar.addEventListener("mouseenter", () => (paused = true));
      bar.addEventListener("mouseleave", () => (paused = false));
      bar.addEventListener("focusin", () => (paused = true));
      bar.addEventListener("focusout", () => (paused = false));
      setInterval(() => {
        if (paused) return;
        items[i].classList.remove("on");
        i = (i + 1) % items.length;
        items[i].classList.add("on");
      }, 4000);
    }
  }

  /* ---------------- Footer ---------------- */
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.outerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="logo-pill" href="index.html"><img src="assets/img/logo.png" alt="מתפתחים ביחד" width="161" height="46"></a>
        <p>עם כל תינוק חדש נולדים גם הורים חדשים. מתפתחים ביחד מלווה אלפי הורים בכל שנה, מההריון ועד גיל שלוש, עם ידע מקצועי, כלים מעשיים והרבה אהבה.</p>
        <div class="socials">
          <a href="${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="וואטסאפ">${icon("whatsapp")}</a>
          <a href="${CONTACT.instagram}" target="_blank" rel="noopener" aria-label="אינסטגרם">${icon("instagram")}</a>
          <a href="${CONTACT.facebook}" target="_blank" rel="noopener" aria-label="פייסבוק">${icon("facebook")}</a>
        </div>
      </div>
      <div>
        <p class="foot-h">לפי שלב</p>
        <ul>
          <li><a href="pregnancy.html">הריון</a></li>
          <li><a href="first-year.html">שנה ראשונה</a></li>
          <li><a href="toddlers.html">שנה שנייה · גיל 1-3</a></li>
          <li><a href="weekbyweek.html">ערכות WeekByWeek</a></li>
          <li><a href="workshops.html">סדנאות והרצאות</a></li>
          <li><a href="gifts.html">מתנות לידה</a></li>
        </ul>
      </div>
      <div>
        <p class="foot-h">מתפתחים ביחד</p>
        <ul>
          <li><a href="about.html">הכירו את שלומית</a></li>
          <li><a href="professionals.html">הכשרות לאנשי מקצוע</a></li>
          <li><a href="perks.html">מועדון ההטבות</a></li>
          <li><a href="reservists.html">הטבת מילואים</a></li>
          <li><a href="blog.html">מגזין</a></li>
        </ul>
      </div>
      <div>
        <p class="foot-h">דברו איתנו</p>
        <ul>
          <li><a href="tel:${CONTACT.phoneOrit.replace(/-/g, "")}">אורית · ${CONTACT.phoneOrit}</a></li>
          <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li>${CONTACT.address}</li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} מתפתחים ביחד · שלומית שוסטר. כל הזכויות שמורות.</span>
      <span><a href="contact.html">יצירת קשר</a> · <a href="terms.html">תקנון</a> · <a href="privacy.html">מדיניות פרטיות</a> · <a href="accessibility.html">הצהרת נגישות</a></span>
    </div>
  </div>
</footer>
<a class="wa-float" href="${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="שיחה בוואטסאפ"><span class="wa-ic">${icon("whatsapp")}</span><span class="txt">יש שאלה? כתבו לנו</span></a>`;
  }

  /* ---------------- Skip link ---------------- */
  const mainEl = document.querySelector("main");
  if (mainEl) {
    mainEl.id = mainEl.id || "main";
    mainEl.setAttribute("tabindex", "-1");
    document.body.insertAdjacentHTML("afterbegin", `<a class="skip-link" href="#${mainEl.id}">דלגו לתוכן</a>`);
  }

  /* ---------------- Header behaviour ---------------- */
  const siteHeader = document.querySelector(".site-header");
  const onScroll = () => siteHeader && siteHeader.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const panel = document.querySelector(".mobile-panel");
  const toggle = document.querySelector(".menu-toggle");
  const setPanel = (open) => {
    if (!panel) return;
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    toggle && toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle && toggle.addEventListener("click", () => setPanel(true));
  panel && panel.addEventListener("click", (e) => {
    if (e.target === panel || e.target.closest(".close") || e.target.closest("a")) setPanel(false);
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && setPanel(false));

  /* ---------------- Reveal on scroll ---------------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;
  document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  /* ---------------- FAQ: render +/- icon ---------------- */
  document.querySelectorAll(".faq summary").forEach((s) => s.insertAdjacentHTML("beforeend", `<span class="pm">${icon("plus")}</span>`));

  /* ---------------- Journey selector ---------------- */
  const STAGES = {
    pregnancy: {
      title: "בהריון · מתכוננים לפגישה הכי מרגשת",
      text: "תשעה חודשים שבהם עולם שלם נבנה בתוכך. זה הזמן לצבור ידע, להירגע ולהגיע ללידה מוכנים ובטוחים יותר.",
      focus: ["חיבור לעובר", "ידע ממומחים", "הכנה לימים הראשונים"],
      note: "הרבה הורים מתחילים את קורס השנה הראשונה כבר בהריון. התכנים על בכי, מגע וביטחון רלוונטיים מהיום הראשון.",
      recs: [
        ["WeekByWeek הריון", "44 קלפים וסרטון עם מומחה לכל שבוע הריון", "₪420", "מבצע השקה", "weekbyweek.html#pregnancy"],
        ["Welcome Baby · תינוק חדש מגיע הביתה", "5 הנושאים החשובים לחודשים הראשונים", "₪500", "במקום ₪699", "workshops.html#welcome"],
        ["הרצאת אח חדש במשפחה", "איך מבשרים, איך מתכוננים ואיך מתמודדים עם קנאה", "הרצאה", "מוקלטת + 3 פרקים", "workshops.html#sibling"],
      ],
    },
    newborn: {
      title: "0-3 חודשים · הימים הראשונים בבית",
      text: "בכי, גזים, לילות קצרים ומלא רגעי קסם. בשלב הזה תקבלו כלים פשוטים שמרגיעים את התינוק ומחזקים את הביטחון שלכם כהורים.",
      focus: ["הרגעת בכי", "עיסוי והקלה על גזים", "סדר יום ושינה", "שכיבה על הבטן"],
      note: "ההמלצה שלנו: תוכנית הליווי המלאה. קורס, קלפים וחצי שנה של מענה מצוות המומחים בוואטסאפ, בדיוק כשהשאלות מתחילות.",
      recs: [
        ["תוכנית הליווי לשנה הראשונה", "קורס מלא + ערכת קלפים + חצי שנה ליווי בוואטסאפ", "₪1,500", "במקום ₪1,840", "first-year.html#tiers"],
        ["סדנת סדר יום ושינה", "מתאימה עד גיל חצי שנה", "₪380", "סדנה דיגיטלית", "workshops.html"],
        ["לומדים לשכב על הבטן", "סדנה ממוקדת לחיזוק ולביטחון", "₪180", "סדנה דיגיטלית", "workshops.html"],
      ],
    },
    infant: {
      title: "3-12 חודשים · חלון ההזדמנויות",
      text: "קפיצות התפתחות, התהפכות, זחילה ועמידה. זה הזמן לעודד התפתחות מוטורית, שכלית ורגשית דרך משחק, מגע ותנועה.",
      focus: ["התפתחות מוטורית", "קפיצות התפתחות", "ביטחון רגשי", "בטיחות בבית"],
      note: "עם הקורס המלא ועם קלף שבועי לכל שבוע בשנה תמיד תדעו מה מתאים לשלב הנוכחי ואיך לשחק בו.",
      recs: [
        ["הקורס המלא לשנה הראשונה + הקלפים", "מעל 25 שעות תוכן ו־13 סדנאות", "₪977", "במקום ₪1,495", "first-year.html#tiers"],
        ["בייבי יוגה · סדנה דיגיטלית", "זמן איכות של תנועה ומגע", "₪120", "סדנה דיגיטלית", "workshops.html"],
        ["עזרה ראשונה, החייאה ובטיחות", "בהנחיית פרמדיק מוסמך", "₪99", "סדנה דיגיטלית", "workshops.html"],
      ],
    },
    toddler: {
      title: "שנה עד שנתיים · הופכים לפעוטות סקרנים",
      text: "עצמאות, התקפי זעם ראשונים והרבה סקרנות. כאן תלמדו לייצר בבית סביבה שמעודדת למידה, ולהציב גבולות באהבה.",
      focus: ["גבולות באהבה", "מונטסורי בבית", "התפתחות השפה", "משחק סנסורי"],
      note: "בקורס לגיל שנה עד שלוש ערכת WeekByWeek 2 מגיעה במתנה: פעילות חדשה בכל שבוע, עם סרטון.",
      recs: [
        ["מתפתחים ביחד גיל 1-3 + קלפים", "10 סדנאות ומעל 150 פעילויות לפי שלבים", "₪977", "במקום ₪1,495", "toddlers.html#tiers"],
        ["דילמות חינוכיות בשנה השנייה", "עצמאות, התקפי זעם וגבולות", "₪350", "סדנה דיגיטלית", "workshops.html"],
        ["סדנת מונטסורי מעשית", "הרצאה ומאגר פעילויות", "₪345", "סדנה דיגיטלית", "workshops.html"],
      ],
    },
    preschool: {
      title: "שנתיים עד שלוש · צעדים גדולים",
      text: "פרידה מחיתולים ומוצצים, בחירת גן והסתגלות. אלה מעברים גדולים שעוברים בקלות רבה יותר כשיודעים מה לעשות בכל שלב.",
      focus: ["פרידה מחיתולים", "בחירת גן", "הסתגלות", "שפה ותקשורת"],
      note: "במסלול הליווי המלא מצטרפים גם למפגשי העשרה חודשיים בזום עם קלינאית תקשורת, תזונאית, מרפאה בעיסוק ועוד.",
      recs: [
        ["תוכנית הליווי לגיל שנה עד 3", "קורס + קלפים + ליווי מומחים בוואטסאפ", "₪1,500", "במקום ₪1,840", "toddlers.html#tiers"],
        ["הרצאת פרידה מחיתולים", "מה עושים בכל שלב ושלב", "₪180", "הרצאה מוקלטת", "workshops.html"],
        ["בחירת גן והסתגלות לגן", "מה שואלים, על מה מסתכלים ואיך מסתגלים", "₪180", "הרצאה מוקלטת", "workshops.html"],
      ],
    },
  };
  const journey = document.querySelector("[data-journey]");
  if (journey) {
    const tabs = journey.querySelectorAll("[data-stage]");
    const body = journey.querySelector(".stage-body");
    const render = (key) => {
      const s = STAGES[key];
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.stage === key)));
      body.innerHTML = `
        <div class="stage-intro">
          <h3>${s.title}</h3>
          <p class="muted">${s.text}</p>
          <div class="focus">${s.focus.map((f) => `<span class="chip">${f}</span>`).join("")}</div>
          <div class="ai-note"><span class="spark">${icon("sparkles")}</span><span>${s.note}</span></div>
        </div>
        <div class="stage-recs">
          ${s.recs.map((r, i) => `
            <a class="rec ${i === 0 ? "primary" : ""}" href="${r[4]}">
              <span class="num">${i === 0 ? icon("star") : "0" + (i + 1)}</span>
              <span><h4>${r[0]}${i === 0 ? ' <span class="chip chip--new" style="margin-inline-start:6px">מומלץ</span>' : ""}</h4><p>${r[1]}</p></span>
              <span class="price">${r[2]}<small>${r[3]}</small></span>
            </a>`).join("")}
        </div>`;
      body.classList.remove("fade-swap"); void body.offsetWidth; body.classList.add("fade-swap");
    };
    tabs.forEach((t) => t.addEventListener("click", () => render(t.dataset.stage)));
    render(journey.dataset.journey || "newborn");
  }

  /* ---------------- WeekByWeek deck ---------------- */
  const KITS = {
    pregnancy: {
      label: "הריון", total: 44, start: 4, unit: "שבוע",
      stats: [["44", "קלפים מעוצבים"], ["44", "סרטוני מומחים"], ["9", "חודשים של ליווי"]],
      cards: [
        [4, "הכול מתחיל כאן", "מה קורה בגוף עכשיו, ואיך מקשיבים לו ברוך.", ["גוף", "רגש"]],
        [12, "סוף השליש הראשון", "העובר כבר בגודל של לימון. טיפים לבחילות ולאנרגיה.", ["תזונה", "רופא נשים"]],
        [20, "התנועות הראשונות", "איך מתחברים לעובר דרך מגע, קול ומוזיקה.", ["חיבור", "מיילדת"]],
        [28, "שינה טובה יותר", "תנוחות, נשימה ושגרת ערב לשליש השלישי.", ["שינה", "גוף־נפש"]],
        [36, "מתכוננים להנקה", "מה כדאי לדעת לפני ההנקה הראשונה.", ["הנקה", "יועצת הנקה"]],
        [40, "נפגשים", "תיק ללידה, צירים ומה קורה בשעות הראשונות.", ["לידה", "דולה"]],
      ],
    },
    year1: {
      label: "שנה ראשונה", total: 52, start: 1, unit: "שבוע",
      stats: [["52", "קלפי ליווי"], ["52", "סרטוני הדרכה"], ["1", "יומן תיעוד לשנה"]],
      cards: [
        [1, "שלום עולם", "ההיכרות הראשונה: מגע, ריח וקול שמרגיעים את התינוק.", ["רגשי", "מגע"]],
        [4, "המבט הראשון", "קשר עין ומשחקי פנים שמחזקים את הקשר.", ["חושי", "קשר"]],
        [6, "החיוך החברתי", "מתי מגיע החיוך הראשון ואיך מגיבים אליו.", ["רגשי", "אבן דרך"]],
        [10, "מגלים את הידיים", "פעילות פשוטה שמעודדת מודעות גוף.", ["מוטורי", "משחק"]],
        [16, "מתהפכים", "תרגילי תנועה ומגע שעוזרים להתהפך.", ["מוטורי", "תנועה"]],
        [26, "יושבים ומגלים", "חצי שנה! משחקים שמחזקים את הישיבה.", ["מוטורי", "קוגניטיבי"]],
        [34, "חרדת זרים", "למה היא מופיעה ואיך עוזרים לתינוק להרגיש בטוח.", ["רגשי", "ביטחון"]],
        [40, "זוחלים קדימה", "מסלול מכשולים ביתי שמעודד זחילה.", ["מוטורי", "סביבה"]],
        [48, "צעדים ראשונים", "איך מעודדים עמידה והליכה בלי לזרז.", ["מוטורי", "אבן דרך"]],
        [52, "יום הולדת שנה", "מסתכלים אחורה על שנה של התפתחות.", ["תיעוד", "מזכרת"]],
      ],
    },
    year2: {
      label: "שנה שנייה", total: 53, start: 1, unit: "שבוע",
      stats: [["53", "קלפי פעילות"], ["53", "סרטוני פעילות"], ["5", "תחומי התפתחות"]],
      cards: [
        [1, "מחלצים גומיות", "פעילות מונטסורית לשליטה בתנועות היד.", ["מוטוריקה עדינה", "מונטסורי"]],
        [8, "מסלול שיווי משקל", "תרגילים לחיבור בין גוף, תנועה ולמידה.", ["מוטוריקה גסה"]],
        [15, "קצף ובצקף", "משחק סנסורי עם חומרים שמכינים בבית.", ["סנסורי", "חושים"]],
        [24, "מזיגה והעברה", "כישורי חיים ועצמאות בגישה המונטסורית.", ["מונטסורי", "עצמאות"]],
        [33, "מילים ראשונות", "משחקי שפה שמעשירים אוצר מילים.", ["שפה", "הבנה"]],
        [42, "השחלה ונעיצה", "בסיס לכתיבה, לציור ולגזירה.", ["מוטוריקה עדינה"]],
        [53, "גיל שנתיים", "חוגגים את מה שהפעוט כבר יודע לעשות.", ["סיכום", "רגשי"]],
      ],
    },
  };
  document.querySelectorAll("[data-deck]").forEach((root) => {
    const range = root.querySelector("input[type=range]");
    const front = root.querySelector(".card-front");
    const tabs = root.querySelectorAll("[data-kit]");
    const stats = root.querySelector(".mini-stats");
    const lbl = root.querySelector(".labels");
    let kit = KITS[root.dataset.deck] || KITS.year1;
    const draw = () => {
      if (!range || !front) return;
      const w = +range.value;
      const card = kit.cards.reduce((best, c) => (Math.abs(c[0] - w) < Math.abs(best[0] - w) ? c : best), kit.cards[0]);
      range.style.setProperty("--p", ((w - range.min) / (range.max - range.min)) * 100 + "%");
      front.innerHTML = `
        <div class="wk"><span>Week</span><b>${w}</b></div>
        <h4>${card[1]}</h4>
        <div class="tags">${card[3].map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        <p>${card[2]}</p>
        <div class="qr"><i></i><span>סרקו לסרטון ההדרכה של השבוע</span></div>`;
      front.style.transform = `rotate(${(w % 2 ? -1 : 1) * 1.5}deg)`;
    };
    const setKit = (k) => {
      kit = KITS[k];
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.kit === k)));
      if (range) { range.min = kit.start; range.max = kit.total; range.value = kit.cards[Math.min(2, kit.cards.length - 1)][0]; range.setAttribute("aria-label", `${kit.unit} מתוך ${kit.total}`); }
      if (stats) stats.innerHTML = kit.stats.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("");
      if (lbl) lbl.innerHTML = `<span>${kit.unit} ${kit.start}</span><span>${kit.unit} ${kit.total}</span>`;
      draw();
    };
    range && range.addEventListener("input", draw);
    tabs.forEach((t) => t.addEventListener("click", () => setKit(t.dataset.kit)));
    setKit(root.dataset.deck || "year1");
  });

  /* ---------------- Buy buttons → central product config ---------------- */
  const CFG = window.MB_CONFIG || { products: {} };
  document.querySelectorAll("[data-buy]").forEach((a) => {
    const p = CFG.products[a.dataset.buy];
    if (!p) { console.warn("[MB] unknown product key:", a.dataset.buy); return; }
    const saleOnNow = CFG.sale && Date.now() <= Date.parse(CFG.sale.end);
    const saleUrl = saleOnNow && CFG.sale.urls && CFG.sale.urls[a.dataset.buy];
    if (saleUrl || p.url) a.href = saleUrl || p.url;
    if (CFG.checkoutNewTab) { a.target = "_blank"; a.rel = "noopener"; } else { a.removeAttribute("target"); }
    a.addEventListener("click", () => {
      // Analytics hook: works with GA4 / GTM if installed, harmless otherwise.
      (window.dataLayer = window.dataLayer || []).push({
        event: "begin_checkout",
        ecommerce: { currency: "ILS", value: p.price || undefined, items: [{ item_id: a.dataset.buy, item_name: p.name, price: p.price || undefined }] },
      });
    });
  });

  /* ---------------- Prices from config: [data-price="key"] ----------------
     During a sale: regular price struck through + sale price + saving.
     Otherwise: the store's compare-at price (if any) + current price. */
  const fmt = (n) => "₪" + Number(n).toLocaleString("he-IL", { maximumFractionDigits: 2 });
  const SALE_LIVE = CFG.sale && CFG.sale.prices && Date.now() <= Date.parse(CFG.sale.end);
  const priceOf = (key) => {
    const p = CFG.products[key];
    if (!p || !p.price) return null;
    const sp = SALE_LIVE && CFG.sale.prices[key];
    if (sp && sp < p.price) return { now: sp, was: p.price, sale: true };
    return { now: p.price, was: p.compare && p.compare > p.price ? p.compare : 0, sale: false };
  };
  document.querySelectorAll("[data-price]").forEach((el) => {
    const r = priceOf(el.dataset.price);
    if (!r) return;
    const save = r.was ? r.was - r.now : 0;
    el.innerHTML = `${save ? `<s aria-label="${r.sale ? "במקום" : "מחיר רגיל"}">${fmt(r.was)}</s>` : ""}<b>${fmt(r.now)}</b>${save && !el.hasAttribute("data-compact") ? `<em>חוסכים ${fmt(Math.round(save))}</em>` : ""}`;
  });
  document.querySelectorAll("[data-off]").forEach((el) => {
    const r = priceOf(el.dataset.off);
    const pct = r && r.was ? Math.round((1 - r.now / r.was) * 100) : 0;
    el.textContent = pct ? "-" + pct + "%" : "";
    el.hidden = !pct;
  });
  document.querySelectorAll("[data-maxoff]").forEach((el) => {
    const pcts = [...document.querySelectorAll("[data-price]")].map((x) => priceOf(x.dataset.price)).filter((r) => r && r.was).map((r) => Math.round((1 - r.now / r.was) * 100));
    if (pcts.length) el.textContent = Math.max(...pcts) + "%";
  });
  if (CFG.sale && CFG.sale.draft && document.body.dataset.page === "nov") {
    document.body.insertAdjacentHTML("afterbegin", '<div class="nv-draft" role="note">טיוטה: מחירי המבצע בעמוד הזה הם הצעה וממתינים לאישור. לעדכון: assets/js/config.js → sale.prices, ואז draft:false.</div>');
  }

  /* ---------------- Sale countdown: [data-countdown] ---------------- */
  const SALE_CFG = CFG.sale;
  const cds = document.querySelectorAll("[data-countdown]");
  const minis = document.querySelectorAll("[data-countdown-mini]");
  if (SALE_CFG && (cds.length || minis.length)) {
    const end = Date.parse(SALE_CFG.end);
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const left = Math.max(0, end - Date.now());
      const d = Math.floor(left / 864e5), h = Math.floor(left / 36e5) % 24, m = Math.floor(left / 6e4) % 60, sec = Math.floor(left / 1e3) % 60;
      cds.forEach((el) => {
        el.innerHTML = [[d, "ימים"], [pad(h), "שעות"], [pad(m), "דקות"], [pad(sec), "שניות"]].map(([v, l]) => `<span><b>${v}</b><small>${l}</small></span>`).join("");
      });
      minis.forEach((el) => { el.textContent = `${d ? d + " ימים · " : ""}${pad(h)}:${pad(m)}:${pad(sec)}`; });
      if (!left) { document.body.classList.add("sale-ended"); clearInterval(timer); }
    };
    const timer = setInterval(tick, 1000);
    tick();
  }

  /* ---------------- Forms → webhook (Make / Zapier / CRM) ---------------- */
  const utm = Object.fromEntries([...new URLSearchParams(location.search)].filter(([k]) => k.startsWith("utm_")));
  document.querySelectorAll("form[data-lead]").forEach((f) => {
    // Honeypot against bots: real people never fill this hidden field.
    f.insertAdjacentHTML("afterbegin", '<input type="text" name="_hp" tabindex="-1" autocomplete="off" aria-hidden="true" class="hp-field">');
    f.insertAdjacentHTML("beforeend", `<p class="form-error" role="alert" hidden style="margin:0;font-size:.88rem;color:#B4473A;text-align:center">משהו השתבש בשליחה. נסו שוב או <a href="${CONTACT.whatsapp}" target="_blank" rel="noopener" style="text-decoration:underline">כתבו לנו בוואטסאפ</a>.</p>`);
    const btn = f.querySelector('button[type="submit"]');
    const err = f.querySelector(".form-error");
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      const data = Object.fromEntries(new FormData(f).entries());
      if (data._hp) { f.classList.add("sent"); return; }
      delete data._hp;
      const payload = { form: f.dataset.lead || "lead", ...data, page: location.pathname, referrer: document.referrer || null, utm, submitted_at: new Date().toISOString() };
      err.hidden = true;
      if (!CFG.formEndpoint) { console.info("[MB] formEndpoint not set; payload:", payload); f.classList.add("sent"); return; }
      btn.disabled = true; btn.classList.add("loading");
      try {
        const res = await fetch(CFG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!res.ok) throw new Error("HTTP " + res.status);
        f.classList.add("sent");
        (window.dataLayer = window.dataLayer || []).push({ event: "generate_lead", form_id: payload.form });
      } catch (ex) {
        console.error("[MB] form submit failed", ex);
        err.hidden = false;
      } finally { btn.disabled = false; btn.classList.remove("loading"); }
    });
  });

  /* ---------------- Perks: copy + filter ---------------- */
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    const code = b.dataset.copy;
    const done = () => { b.textContent = "הועתק ✓"; b.classList.add("copied"); setTimeout(() => { b.textContent = "העתקה"; b.classList.remove("copied"); }, 1800); };
    (navigator.clipboard ? navigator.clipboard.writeText(code) : Promise.reject()).then(done, done);
  });
  const filters = document.querySelector("[data-filters]");
  if (filters) {
    const items = document.querySelectorAll("[data-cat]");
    filters.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      const c = b.dataset.f;
      items.forEach((it) => { it.style.display = c === "all" || it.dataset.cat.split(" ").includes(c) ? "" : "none"; });
    });
  }

  /* ---------------- Stage picker (nov.html) ----------------
     Visitors choose a stage first and see only that stage. Afterwards the picker
     becomes a compact sticky bar for switching. Links can preselect: nov.html#y1 */
  const picker = document.querySelector(".nv-bar");
  if (picker) {
    const STAGES = ["preg", "y1", "y2", "gift"];
    const groups = document.querySelectorAll(".nv-group");
    const smooth = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const show = (stage) => {
      picker.classList.remove("is-choosing");
      picker.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.f === stage)));
      groups.forEach((g) => g.classList.toggle("is-shown", g.dataset.cat === stage));
    };
    const pick = (stage, instant) => {
      show(stage);
      history.replaceState(null, "", "#" + stage);
      (window.dataLayer = window.dataLayer || []).push({ event: "select_stage", stage });
      const group = document.getElementById("g-" + stage);
      const pinnedAt = parseInt(getComputedStyle(picker).top, 10) || 0;
      window.scrollTo({ top: group.getBoundingClientRect().top + window.scrollY - pinnedAt - picker.offsetHeight - 12, behavior: instant ? "instant" : smooth });
    };
    picker.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) pick(b.dataset.f); });
    const fromLink = location.hash.slice(1);
    if (STAGES.includes(fromLink)) pick(fromLink, true);
    else show("y1"); // products are visible right away, the menu switches stage

    // Phones: only the highlighted tier is open; the others show "what's included" on tap.
    document.querySelectorAll(".tiers3:not(.tiers3--two) .t3:not(.t3--best)").forEach((card) => {
      const ticks = card.querySelector(".ticks");
      if (!ticks) return;
      card.classList.add("is-compact");
      const t = document.createElement("button");
      t.type = "button"; t.className = "t3-toggle"; t.textContent = "מה כלול?"; t.setAttribute("aria-expanded", "false");
      t.addEventListener("click", () => {
        const open = card.classList.toggle("is-open");
        t.setAttribute("aria-expanded", String(open));
        t.textContent = open ? "סגירה" : "מה כלול?";
      });
      ticks.after(t);
    });

    // While products are on screen, the bottom "choose a track" bar is just noise.
    const deals = document.getElementById("deals");
    if (deals && "IntersectionObserver" in window) new IntersectionObserver(([en]) => document.body.classList.toggle("in-deals", en.isIntersecting)).observe(deals);
  }


  /* ---------------- Mobile sticky CTA bar ----------------
     Each page can set its own action: <body data-cta-href="#tiers" data-cta-label="לבחירת מסלול"> */
  (function mobileCta() {
    const href = document.body.dataset.ctaHref || "index.html#agetool";
    const label = document.body.dataset.ctaLabel || "מה מתאים לגיל הבייבי?";
    const bar = document.createElement("div");
    bar.className = "mcta";
    bar.innerHTML = `<a class="btn btn--primary" href="${href}">${label} ${icon("arrow", "arrow")}</a><a class="wa" href="${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="וואטסאפ">${icon("whatsapp")}</a>`;
    document.body.appendChild(bar);
    const footerEl = document.querySelector(".site-footer");
    const update = () => {
      const past = window.scrollY > 520;
      const nearEnd = footerEl && footerEl.getBoundingClientRect().top < window.innerHeight - 40;
      bar.classList.toggle("show", past && !nearEnd);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  })();

  /* ---------------- Age tool: "what's happening with your baby now" ----------------
     General developmental ranges only, every baby develops at their own pace. */
  const AGE_BANDS = [
    { id: "t1", preg: true, max: 14, stage: "preg", title: "שליש ראשון", phase: "הגוף מתחיל להשתנות, והכול עוד חדש ומרגש.",
      happen: ["עייפות ובחילות נפוצות מאוד בשבועות האלה", "העובר מתפתח במהירות, והלב כבר פועם", "זה זמן טוב להתחיל לאסוף ידע, בקצב שלך"],
      recs: [["wbw-pregnancy", "WeekByWeek הריון", "קלף וסרטון מומחה לכל שבוע", "₪420", "pregnancy.html"]] },
    { id: "t2", preg: true, max: 28, stage: "preg", title: "שליש שני", phase: "בדרך כלל השליש הכי נעים, ומתחילים להרגיש את הבייבי.",
      happen: ["תנועות ראשונות מורגשות בדרך כלל בין שבוע 16 ל־25", "העובר כבר שומע קולות, ואפשר לדבר ולשיר לו", "זמן טוב להתכונן לימים הראשונים בבית"],
      recs: [["wbw-pregnancy", "WeekByWeek הריון", "קלף וסרטון מומחה לכל שבוע", "₪420", "pregnancy.html"], ["welcome-baby", "Welcome Baby", "5 הנושאים החשובים לחודשים הראשונים", "₪500", "workshops.html#welcome"]] },
    { id: "t3", preg: true, max: 99, stage: "preg", title: "שליש שלישי", phase: "הישורת האחרונה. עוד מעט נפגשים.",
      happen: ["הכנה ללידה, להנקה ולשבועות הראשונים", "זה הזמן ללמוד איך מרגיעים בכי ואיך שומרים על בטיחות", "הורים שמתחילים עכשיו מגיעים ללידה בטוחים יותר"],
      recs: [["fy-plan", "תוכנית השנה הראשונה", "להתחיל כבר עכשיו, עם ליווי אחרי הלידה", "₪977+", "first-year.html#tiers"], ["welcome-baby", "Welcome Baby", "מיני־קורס לחודשים הראשונים", "₪500", "workshops.html#welcome"]] },
    { id: "m0", max: 1.5, stage: "y1", title: "השבועות הראשונים", phase: "ימי ההיכרות: הרבה שינה, האכלות, וגם לא מעט בכי.",
      happen: ["הבכי נוטה לעלות בשבועות הראשונים, וזה טבעי", "מגע, ריח וקול מרגיעים את התינוק", "קשר עין ראשון ותגובה לקולות מוכרים"],
      recs: [["fy-plan", "תוכנית הליווי לשנה הראשונה", "קורס, קלפים וחצי שנה של ליווי בוואטסאפ", "₪1,500", "first-year.html#tiers"], ["welcome-baby", "Welcome Baby", "בכי, עיסוי, בטיחות ואמבטיה ראשונה", "₪500", "workshops.html#welcome"]] },
    { id: "m1", max: 3, stage: "y1", title: "חודש שני ושלישי", phase: "התינוק מתעורר לעולם, ומתחיל לחייך אליכם.",
      happen: ["החיוך החברתי הראשון מגיע בדרך כלל בתקופה הזאת", "הרמת ראש קצרה בשכיבה על הבטן", "גילוי הידיים ומעקב בעיניים"],
      recs: [["fy-course", "הקורס המלא לשנה הראשונה + הקלפים", "13 סדנאות ו־52 קלפים", "₪977", "first-year.html#tiers"], ["ws-tummy", "לומדים לשכב על הבטן", "סדנה ממוקדת", "₪180", "workshops.html"]] },
    { id: "m3", max: 6, stage: "y1", title: "חודש 3 עד 6", phase: "תקופה של צחוק, קולות ותנועה.",
      happen: ["רבים מתחילים להתהפך בחודשים האלה", "הושטת יד, תפיסת חפצים והכנסתם לפה", "צחוק, מלמול ומשחק הדדי"],
      recs: [["fy-course", "הקורס המלא לשנה הראשונה + הקלפים", "התפתחות מוטורית, שכלית ורגשית", "₪977", "first-year.html#tiers"], ["ws-sleep", "סדנת סדר יום ושינה", "מתאימה עד גיל חצי שנה", "₪380", "workshops.html"]] },
    { id: "m6", max: 9, stage: "y1", title: "חודש 6 עד 9", phase: "הבייבי יושב, חוקר, ומתחיל לזוז.",
      happen: ["ישיבה יציבה ותחילת זחילה אצל רבים", "חרדת זרים מופיעה אצל הרבה תינוקות", "תחילת טעימות, וחשיבות של בטיחות בבית"],
      recs: [["fy-course", "הקורס המלא לשנה הראשונה + הקלפים", "כולל סדנת בטיחות ועזרה ראשונה", "₪977", "first-year.html#tiers"], ["ws-firstaid", "עזרה ראשונה, החייאה ובטיחות", "עם פרמדיק מוסמך", "₪99", "workshops.html"]] },
    { id: "m9", max: 12, stage: "y1", title: "חודש 9 עד 12", phase: "לקראת יום הולדת שנה: עמידה, צעדים ראשונים והרבה הבנה.",
      happen: ["עמידה עם תמיכה, ואצל חלק מהתינוקות גם צעדים ראשונים", "הבנה של מילים ומחוות כמו ״ביי״", "חרדת נטישה ורצון להיות קרובים"],
      recs: [["fy-course", "הקורס המלא לשנה הראשונה + הקלפים", "התפתחות רגשית ובחירת גן", "₪977", "first-year.html#tiers"], ["ws-kindergarten", "בחירת גן והסתגלות לגן", "מה שואלים ועל מה מסתכלים", "₪180", "workshops.html"]] },
    { id: "y12", max: 18, stage: "y2", title: "גיל שנה עד שנה וחצי", phase: "התינוק הופך לפעוט סקרן שחוקר את העולם.",
      happen: ["הליכה וחקירה של כל פינה בבית", "מילים ראשונות והבנה של הרבה יותר", "רצון גובר לעצמאות"],
      recs: [["td-course", "קורס השנה השנייה + קלפים", "150+ פעילויות, ו־WeekByWeek 2 במתנה", "₪977", "toddlers.html#tiers"], ["ws-montessori", "סדנת מונטסורי מעשית", "פעילויות לעצמאות בבית", "₪345", "workshops.html"]] },
    { id: "y18", max: 24, stage: "y2", title: "שנה וחצי עד שנתיים", phase: "רגשות גדולים בגוף קטן.",
      happen: ["התקפי זעם ותסכול נפוצים מאוד בגיל הזה", "פריצת שפה אצל רבים מהפעוטות", "משחק דמיון ראשון"],
      recs: [["td-plan", "תוכנית הליווי לשנה השנייה", "קורס, קלפים וליווי מומחים בוואטסאפ", "₪1,500", "toddlers.html#tiers"], ["ws-dilemmas", "עצמאות, התקפי זעם וגבולות", "סדנה ממוקדת", "₪350", "workshops.html"]] },
    { id: "y24", max: 36, stage: "y2", title: "שנתיים עד שלוש", phase: "צעדים גדולים: גמילה, גן ומשפטים שלמים.",
      happen: ["גמילה מחיתולים מתחילה אצל רבים בגיל הזה", "משפטים, שאלות ו״למה?״ בלי סוף", "מעבר למסגרת חדשה והסתגלות"],
      recs: [["td-course", "קורס השנה השנייה + קלפים", "פרידה מחיתולים, בחירת גן ועוד", "₪977", "toddlers.html#tiers"], ["ws-potty", "הרצאת פרידה מחיתולים", "מה עושים בכל שלב", "₪180", "workshops.html"]] },
    { id: "big", max: 999, stage: "y2", title: "כבר גדולים", phase: "הבייבי כבר מעל גיל 3. עדיין יש לנו הרבה מה להציע.",
      happen: ["הסתגלות לגן ולמסגרות חדשות", "אח או אחות חדשים בדרך?", "WeekByWeek כמתנה לחברים שרק התחילו"],
      recs: [["new-sibling", "אח חדש במשפחה", "הרצאה מוקלטת וסדנה קצרה", "", "workshops.html#sibling"], ["lec-kindergarten-2026", "הרצאה: הסתגלות לגן", "הרצאה מוקלטת", "₪130", "workshops.html"]] },
  ];
  const STAGE_STYLE = { preg: ["var(--st-preg)", "var(--st-preg-ink)", "הריון"], y1: ["var(--st-y1)", "var(--st-y1-ink)", "שנה ראשונה"], y2: ["var(--st-y2)", "var(--st-y2-ink)", "שנה שנייה"] };

  document.querySelectorAll("[data-agetool]").forEach((root) => {
    const seg = root.querySelectorAll("[data-mode]");
    const input = root.querySelector("input[type=date]");
    const label = root.querySelector("[data-date-label]");
    const out = root.querySelector(".res");
    const empty = out.innerHTML;
    let mode = "born";
    const setMode = (m) => {
      mode = m;
      seg.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === m)));
      label.textContent = m === "born" ? "תאריך הלידה של הבייבי" : "תאריך הלידה המשוער";
      const iso = (d) => d.toISOString().slice(0, 10);
      const today = new Date();
      if (m === "born") { input.max = iso(today); input.min = iso(new Date(today.getFullYear() - 6, today.getMonth(), today.getDate())); }
      else { input.min = iso(today); input.max = iso(new Date(today.getTime() + 300 * 86400000)); }
    };
    seg.forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
    setMode("born");

    const plural = (n, one, many) => (n === 1 ? one : n === 2 && many === "חודשים" ? "חודשיים" : n === 2 && many === "שבועות" ? "שבועיים" : `${n} ${many}`);
    const render = () => {
      if (!input.value) { input.focus(); return; }
      const d = new Date(input.value + "T12:00:00");
      const now = new Date();
      const days = Math.round((now - d) / 86400000);
      let band, headline, waText;
      if (mode === "due" || days < 0) {
        const daysLeft = mode === "due" ? Math.round((d - now) / 86400000) : -days;
        const week = Math.max(1, Math.min(42, 40 - Math.floor(daysLeft / 7)));
        if (daysLeft < -14) { out.innerHTML = `<div class="res-empty"><span class="hand">נראה שהתאריך כבר עבר</span>נסו לבחור ״כבר נולד/ה״ ולהכניס את תאריך הלידה.</div>`; return; }
        band = AGE_BANDS.find((b) => b.preg && week < b.max);
        headline = `שבוע ${week} להריון`;
        waText = `היי, הגעתי מהאתר. אני בשבוע ${week} להריון ואשמח להמלצה מה מתאים לי 🙂`;
      } else {
        const months = days / 30.44;
        const w = Math.floor(days / 7);
        const m = Math.floor(months);
        band = AGE_BANDS.find((b) => !b.preg && months < b.max);
        if (months < 3) headline = `הבייבי בן ${w <= 1 ? "שבוע" : plural(w, "שבוע", "שבועות")}`;
        else if (months < 24) headline = `הבייבי בן ${plural(m, "חודש", "חודשים")}`;
        else { const y = Math.floor(months / 12), rest = m - y * 12; headline = `הבייבי בן ${y === 2 ? "שנתיים" : y + " שנים"}${rest ? ` ו־${plural(rest, "חודש", "חודשים")}` : ""}`; }
        waText = `היי, הגעתי מהאתר. ${headline.replace("הבייבי", "הבייבי שלי")}, ואשמח להמלצה מה מתאים לנו 🙂`;
      }
      const [bg, ink, stageName] = STAGE_STYLE[band.stage];
      const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(waText)}`;
      const stageHref = { preg: "pregnancy.html", y1: "first-year.html", y2: "toddlers.html" }[band.stage];
      out.innerHTML = `
        <div class="res-head"><span class="pill" style="--bgc:${bg};--inkc:${ink}">${stageName} · ${band.title}</span></div>
        <div class="age-big">${headline}</div>
        <p class="phase">${band.phase}</p>
        <h4>מה בדרך כלל קורה עכשיו</h4>
        <ul class="happen">${band.happen.map((h) => `<li>${h}</li>`).join("")}</ul>
        <h4>מה הכי מתאים לכם עכשיו</h4>
        <div class="recs">${band.recs.map(([, n, s, p, h]) => `<a href="${h}"><span><b>${n}</b><small>${s}</small></span><em>${p}</em></a>`).join("")}</div>
        <div class="actions">
          <a class="btn btn--primary" href="${stageHref}">לכל מה שמתאים ${({ preg: "להריון", y1: "לשנה הראשונה", y2: "לשנה השנייה" })[band.stage]} ${icon("arrow", "arrow")}</a>
          <a class="btn btn--wa" href="${wa}" target="_blank" rel="noopener">${icon("whatsapp")} שאלו אותנו בוואטסאפ</a>
        </div>
        <p class="disclaimer">כל תינוק מתפתח בקצב שלו. המידע כללי ואינו מחליף ייעוץ רפואי.</p>
        <button type="button" class="reset" data-reset>לבדוק תאריך אחר</button>`;
      out.querySelector("[data-reset]").addEventListener("click", () => { out.innerHTML = empty; input.value = ""; input.focus(); });
      out.classList.remove("fade-swap"); void out.offsetWidth; out.classList.add("fade-swap");
      (window.dataLayer = window.dataLayer || []).push({ event: "age_tool", stage: band.stage, band: band.id });
      if (window.innerWidth < 900) out.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    root.querySelector("[data-go]").addEventListener("click", render);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); render(); } });
    root.querySelectorAll("[data-reset]").forEach((b) => b.addEventListener("click", () => { out.innerHTML = empty; }));
  });

  /* ---------------- Single-page deployments ----------------
     A build that ships only some pages (e.g. the November sale) sets
     MB_CONFIG.linkMap = { "first-year.html": "https://…" }, so links to pages
     that aren't deployed lead to their live equivalent instead of a 404. */
  if (CFG.linkMap) {
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      const file = href.split("#")[0].split("?")[0];
      if (Object.prototype.hasOwnProperty.call(CFG.linkMap, file)) {
        const to = CFG.linkMap[file];
        a.setAttribute("href", to);
        if (/^https?:/.test(to)) { a.target = "_blank"; a.rel = "noopener"; }
      }
    });
  }

  /* ---------------- Course taster video (YouTube, loads only on click) ---------------- */
  const ytDialog = document.getElementById("yt-dialog");
  if (ytDialog) {
    const frame = ytDialog.querySelector(".yt-frame");
    const closeYt = () => { if (ytDialog.open) ytDialog.close(); frame.innerHTML = ""; };
    document.querySelectorAll("[data-yt]").forEach((b) => b.addEventListener("click", () => {
      frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(b.dataset.yt) + '?autoplay=1&rel=0" title="' + (b.dataset.ytTitle || "סרטון") + '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      ytDialog.showModal();
      if (window.fbq) window.fbq("trackCustom", "CourseVideoPlay", { video: b.dataset.yt });
    }));
    ytDialog.querySelector(".yt-close").addEventListener("click", closeYt);
    ytDialog.addEventListener("click", (e) => { if (e.target === ytDialog) closeYt(); });
    ytDialog.addEventListener("close", () => { frame.innerHTML = ""; });
  }

  /* Pixel events for on-page videos (data-track-video="EventName"), once per page view */
  document.querySelectorAll("video[data-track-video]").forEach((v) => v.addEventListener("play", () => { if (window.fbq && !v.dataset.sent) { v.dataset.sent = "1"; window.fbq("trackCustom", v.dataset.trackVideo); } }));

  window.MB = { CONTACT, STORE };
})();
