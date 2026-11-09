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

  fbq("init", PIXEL_ID);
  fbq("track", "PageView");
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
      fbq("track", "InitiateCheckout", data);
    } else if (/wa\.me|^tel:/.test(a.getAttribute("href") || "")) {
      fbq("track", "Contact");
    }
  }, true);
})();
