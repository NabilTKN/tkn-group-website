/* ============================================================
   TKN Technics — Rendu d'une page de détail de service.
   Lit le slug dans l'URL (?s=nettoyage) puis rend la fiche complète
   correspondante dans #svc-detail-root, en réutilisant css/detail.css.
   Port en JS pur de l'ancien composant React <ServicePage>.
   ============================================================ */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function svg(name, size, sw) {
    var paths = (window.TKN_ICONS || {})[name] || "";
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths + '</svg>';
  }

  var ARR = '<span class="arr">' + svg("arrow", 17, 2) + '</span>';

  function asList(v) { return Array.isArray(v) ? v : (v == null ? [] : [v]); }

  function render(s) {
    var others = (window.TKN_SERVICES || []).filter(function (x) { return x.route !== s.route; });

    var introHtml = asList(s.intro).map(function (p) {
      return '<p class="sp-intro__txt">' + esc(p) + "</p>";
    }).join("");

    var specHtml = asList(s.prend).map(function (p) {
      return '<div class="sp-spec__row"><span class="sp-spec__l">' + esc(p.l) +
        '</span><p class="sp-spec__d">' + esc(p.d) + "</p></div>";
    }).join("");

    var bandHtml = asList(s.band).map(function (p) {
      return '<p class="sp-band__txt">' + esc(p) + "</p>";
    }).join("");

    var othersHtml = others.map(function (o) {
      return '<a class="sp-other__card" href="service.html?s=' + encodeURIComponent(o.route) + '">' +
        '<span class="sp-other__icon">' + svg(o.icon, 24, 1.5) + "</span>" +
        '<h3 class="sp-other__t">' + esc(o.title) + "</h3>" +
        '<p class="sp-other__s">' + esc(o.line) + "</p>" +
        '<span class="sp-other__arr">' + svg("arrowUpRight", 18, 1.7) + "</span>" +
        "</a>";
    }).join("");

    var eyebrowTitle = (s.title !== s.subtitle)
      ? '<span class="eyebrow svc-hero__eyebrow">' + esc(s.title) + "</span>" : "";
    var heroSub = s.heroSub ? '<p class="svc-hero__sub">' + esc(s.heroSub) + "</p>" : "";
    var prendNote = s.prendNote ? '<p class="sp-spec__note">' + esc(s.prendNote) + "</p>" : "";
    var heroPos = s.heroPos || "center 45%";

    return '' +
      '<div class="page-detail">' +

        '<section class="svc-hero">' +
          '<div class="svc-hero__bg">' +
            '<div class="ph svc-hero__ph ph--photo">' +
              '<img class="ph__img" src="' + esc(s.heroImg) + '" alt="' + esc(s.title) + '" style="object-position:' + esc(heroPos) + '" />' +
              '<span class="ph__scrim"></span>' +
            "</div>" +
            '<div class="svc-hero__scrim"></div>' +
          "</div>" +
          '<div class="wrap svc-hero__content">' +
            '<nav class="crumbs">' +
              '<a class="crumbs__link" href="index.html#top">Accueil</a>' +
              '<span class="crumbs__sep">/</span>' +
              '<a class="crumbs__link" href="index.html#services">Services</a>' +
              '<span class="crumbs__sep">/</span>' +
              '<span class="crumbs__cur">' + esc(s.title) + "</span>" +
            "</nav>" +
            eyebrowTitle +
            '<h1 class="display svc-hero__title">' + esc(s.subtitle) + "</h1>" +
            heroSub +
            '<p class="lead svc-hero__lead">' + esc(s.accroche) + "</p>" +
            '<div class="svc-hero__cta">' +
              '<a class="btn btn--primary btn--lg" href="index.html#contact"><span>Demander un devis</span>' + ARR + "</a>" +
              '<a class="btn btn--ghost btn--lg" href="index.html#services">Tous les services</a>' +
            "</div>" +
          "</div>" +
        "</section>" +

        '<section class="section bg-black sp-introsec">' +
          '<div class="wrap">' +
            '<div class="section-head"><span class="eyebrow">Notre métier</span></div>' +
            introHtml +
          "</div>" +
        "</section>" +

        '<section class="section bg-anthracite sp-doing">' +
          '<div class="wrap">' +
            '<div class="section-head"><span class="eyebrow">Prestations</span><h2 class="h-section">Nos interventions</h2></div>' +
            '<div class="sp-spec">' + specHtml + "</div>" +
            prendNote +
          "</div>" +
        "</section>" +

        '<section class="section bg-anthracite">' +
          '<div class="wrap">' +
            '<div class="sp-band">' +
              '<span class="sp-band__label spec-label">' + esc(s.bandLabel) + "</span>" +
              '<div class="sp-band__body">' + bandHtml + "</div>" +
            "</div>" +
          "</div>" +
        "</section>" +

        '<section class="sp-cta">' +
          '<div class="wrap sp-cta__inner">' +
            '<h2 class="sp-cta__title">' + esc(s.ctaTitle) + "</h2>" +
            '<div class="sp-cta__right">' +
              "<p class=\"muted\">Décrivez l'essentiel — site, besoin, fréquence. Nous revenons vers vous avec une proposition claire.</p>" +
              '<a class="btn btn--primary btn--lg" href="index.html#contact"><span>Demander un devis</span>' + ARR + "</a>" +
            "</div>" +
          "</div>" +
        "</section>" +

        '<section class="section bg-black">' +
          '<div class="wrap">' +
            '<div class="section-head" style="margin-bottom:36px"><span class="eyebrow">Autres métiers</span><h2 class="h-section">Nos autres services.</h2></div>' +
            '<div class="sp-other">' + othersHtml + "</div>" +
          "</div>" +
        "</section>" +

      "</div>";
  }

  function init() {
    var root = document.getElementById("svc-detail-root");
    if (!root) return;
    var pages = window.TKN_SERVICE_PAGES || {};
    var slug = "";
    try { slug = new URLSearchParams(window.location.search).get("s") || ""; } catch (e) {}
    var s = pages[slug] || pages.nettoyage;
    if (!s) return;

    root.innerHTML = render(s);
    document.title = s.title + " — TKN Technics · Nettoyage industriel & maintenance";
    var desc = document.querySelector('meta[name="description"]');
    if (desc && s.accroche) desc.setAttribute("content", s.accroche);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
