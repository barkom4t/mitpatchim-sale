/* Meta Pixel for the November sale pages (dataset: "מתפתחים ביחד - אתר מבצעי נובמבר").
   Loaded after main.js. Standard events:
   PageView ........ every page load
   ViewContent ..... the sale page itself
   InitiateCheckout  click on a buy button (value = current price)
   Contact ......... click on a WhatsApp / phone link */
(function () {
  "use strict";
  var PIXEL_ID = "1301610062100500";

  /* Official Meta base code, unchanged apart from being served from this file (the CSP blocks inline scripts). */
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  /* The checkout lives on the Wix store (www.shlomit-schuster.com), which reports to these three pixels.
     The sale page reports to them too, so one visitor's journey (ad click -> sale page -> checkout) is one
     story in the same pixels. _fbp/_fbc cookies are shared across shlomit-schuster.com subdomains. */
  var WIX_PIXELS = ["1357170748353864", "1353697628527975", "5478104132200620"];
  fbq("init", PIXEL_ID);
  WIX_PIXELS.forEach(function (id) { fbq("init", id); });
  fbq("track", "PageView"); // goes to every initialised pixel
  if (document.body && document.body.dataset.page === "nov") fbq("track", "ViewContent", { content_name: "November sale", currency: "ILS" });

  var CFG = window.MB_CONFIG || { products: {} };
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest("a");
    if (!a) return;
    if (a.hasAttribute("data-buy")) {
      var key = a.getAttribute("data-buy"), p = CFG.products && CFG.products[key];
      var sale = CFG.sale && CFG.sale.prices && CFG.sale.prices[key];
      var data = { content_ids: [key], content_type: "product", currency: "ILS" };
      if (p) { data.content_name = p.name; data.value = sale || p.price || 0; }
      // Standard event only on the sale-page pixel; the Wix pixels get a custom event so their
      // own InitiateCheckout/Purchase counts from the store stay accurate.
      fbq("trackSingle", PIXEL_ID, "InitiateCheckout", data);
      WIX_PIXELS.forEach(function (id) { fbq("trackSingleCustom", id, "SaleBuyClick", data); });
    } else if (/wa\.me|^tel:/.test(a.getAttribute("href") || "")) {
      fbq("track", "Contact");
    }
  }, true);
})();
