/* ============================================================
   TKN Technics — UI interactions (plain JS, no framework)
   Header scroll state, mobile drawer, services dropdown,
   contact tabs, segmented toggles, form fields + validation.
   Language switching lives in js/i18n.js.
   ============================================================ */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    /* ---------- Header: solid on scroll ---------- */
    var hdr = document.getElementById("hdr");
    if (hdr) {
      var onScroll = function () { hdr.classList.toggle("is-solid", window.scrollY > 40); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---------- Mobile drawer ---------- */
    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    var closeDrawer = function () {
      if (!drawer) return;
      drawer.classList.remove("is-open");
      if (burger) { burger.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
      document.body.classList.remove("no-scroll");
    };
    if (burger && drawer) {
      burger.addEventListener("click", function () {
        var open = drawer.classList.toggle("is-open");
        burger.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("no-scroll", open);
      });
      drawer.querySelectorAll("[data-drawer-close]").forEach(function (el) {
        el.addEventListener("click", closeDrawer);
      });
    }

    /* ---------- Contact tabs ---------- */
    var tabs = document.querySelectorAll(".tabs .tab");
    var ind = document.querySelector(".tabs__ind");
    var panes = document.querySelectorAll("[data-pane]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var name = tab.getAttribute("data-tab");
        tabs.forEach(function (t) { t.classList.toggle("is-on", t === tab); });
        if (ind) ind.style.transform = name === "rapide" ? "translateX(100%)" : "none";
        panes.forEach(function (p) { p.hidden = p.getAttribute("data-pane") !== name; });
      });
    });

    /* ---------- Segmented toggles ---------- */
    document.querySelectorAll("[data-seg]").forEach(function (seg) {
      seg.querySelectorAll(".seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          seg.querySelectorAll(".seg__btn").forEach(function (b) { b.classList.toggle("is-on", b === btn); });
        });
      });
    });

    /* ---------- Field niceties (select value colour, file name) ---------- */
    document.querySelectorAll(".field__select").forEach(function (sel) {
      var sync = function () { sel.closest(".field").classList.toggle("has-value", !!sel.value); };
      sel.addEventListener("change", sync);
      sync();
    });
    document.querySelectorAll(".filefield__input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        var txt = inp.closest(".filefield").querySelector(".filefield__txt");
        if (txt) txt.textContent = inp.files && inp.files[0] ? inp.files[0].name : (window.TKNi18n ? window.TKNi18n.t("forms.addFile") : txt.textContent);
      });
    });

    /* ---------- Forms: required validation + success state ---------- */
    document.querySelectorAll("form.js-form").forEach(function (form) {
      var successSel = form.getAttribute("data-success");
      var success = successSel ? document.querySelector(successSel) : null;

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ok = true;
        form.querySelectorAll("[data-required]").forEach(function (input) {
          var field = input.closest(".field");
          var empty = !String(input.value || "").trim();
          if (field) field.classList.toggle("is-err", empty);
          if (empty) ok = false;
        });
        if (!ok) return;
        if (success) { form.hidden = true; success.hidden = false; }
      });

      // clear error styling as the user types
      form.querySelectorAll("[data-required]").forEach(function (input) {
        var clear = function () {
          var field = input.closest(".field");
          if (field) field.classList.remove("is-err");
        };
        input.addEventListener("input", clear);
        input.addEventListener("change", clear);
      });

      // "Nouvelle demande" — back to the empty form
      if (success) {
        var reset = success.querySelector("[data-reset]");
        if (reset) reset.addEventListener("click", function () {
          form.reset();
          form.querySelectorAll(".field.is-err").forEach(function (f) { f.classList.remove("is-err"); });
          form.querySelectorAll(".field.has-value").forEach(function (f) { f.classList.remove("has-value"); });
          form.querySelectorAll(".filefield__txt").forEach(function (t) {
            if (window.TKNi18n) t.textContent = window.TKNi18n.t("forms.addFile");
          });
          success.hidden = true;
          form.hidden = false;
        });
      }
    });
  });
})();
