/* ============================================================
   TKN Technics — Interactions UI (JS pur, sans framework)
   Header, tiroir mobile, onglets contact, toggles segmentés,
   champs de formulaire, ENVOI RÉEL des formulaires (états
   « envoi en cours » / succès / erreur), modales, apparitions
   au scroll, compteurs animés, FAQ.
   ============================================================ */
(function () {
  "use strict";

  /* Envoi des formulaires : FormSubmit (AJAX) vers la boîte TKN.
     Le succès n'est affiché QU'APRÈS une réponse positive du serveur. */
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/info@tkn-technics.be";

  var REDUCED_MOTION = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Libellés générés en JS, selon la langue de la page (<html lang>) */
  var LABELS = {
    fr: { file: "Ajouter un fichier (PDF, JPG, PNG)", sending: "Envoi en cours…" },
    nl: { file: "Bestand toevoegen (PDF, JPG, PNG)", sending: "Bezig met verzenden…" },
    en: { file: "Add a file (PDF, JPG, PNG)", sending: "Sending…" }
  };
  var L = LABELS[(document.documentElement.lang || "fr").slice(0, 2)] || LABELS.fr;

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    /* ---------- Header : état « défilé » ---------- */
    var hdr = document.getElementById("hdr");
    if (hdr) {
      var onScroll = function () { hdr.classList.toggle("is-solid", window.scrollY > 40); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---------- Tiroir mobile ---------- */
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

    /* ---------- Onglets contact ---------- */
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

    /* ---------- Toggles segmentés (synchronisés avec un champ caché) ---------- */
    document.querySelectorAll("[data-seg]").forEach(function (seg) {
      var hidden = seg.querySelector('input[type="hidden"]');
      seg.querySelectorAll(".seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          seg.querySelectorAll(".seg__btn").forEach(function (b) { b.classList.toggle("is-on", b === btn); });
          if (hidden) hidden.value = btn.getAttribute("data-value") || btn.textContent.trim();
        });
      });
    });

    /* ---------- Confort des champs (couleur des selects, nom du fichier) ---------- */
    document.querySelectorAll(".field__select").forEach(function (sel) {
      var sync = function () { sel.closest(".field").classList.toggle("has-value", !!sel.value); };
      sel.addEventListener("change", sync);
      sync();
    });
    var FILE_PLACEHOLDER = L.file;
    document.querySelectorAll(".filefield__input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        var txt = inp.closest(".filefield").querySelector(".filefield__txt");
        if (txt) txt.textContent = inp.files && inp.files[0] ? inp.files[0].name : FILE_PLACEHOLDER;
      });
    });

    /* ---------- Formulaires : validation + envoi réel ---------- */
    document.querySelectorAll("form.js-form").forEach(function (form) {
      var successSel = form.getAttribute("data-success");
      var success = successSel ? document.querySelector(successSel) : null;
      var errorBox = form.querySelector(".form-error");
      var submitBtn = form.querySelector('button[type="submit"]');
      var btnLabel = submitBtn ? submitBtn.querySelector("[data-label]") : null;
      var defaultLabel = btnLabel ? btnLabel.textContent : "";
      var sending = false;

      function setLoading(on) {
        if (!submitBtn) return;
        submitBtn.disabled = on;
        submitBtn.classList.toggle("is-loading", on);
        if (btnLabel) btnLabel.textContent = on ? L.sending : defaultLabel;
        var spinner = submitBtn.querySelector(".btn__spinner");
        if (on && !spinner) {
          spinner = document.createElement("span");
          spinner.className = "btn__spinner";
          spinner.setAttribute("aria-hidden", "true");
          submitBtn.appendChild(spinner);
        } else if (!on && spinner) {
          spinner.remove();
        }
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (sending) return;

        /* 1. Validation des champs requis */
        var ok = true;
        form.querySelectorAll("[data-required]").forEach(function (input) {
          var field = input.closest(".field");
          var empty = !String(input.value || "").trim();
          if (field) field.classList.toggle("is-err", empty);
          if (empty) ok = false;
        });
        if (!ok) return;

        /* 2. Envoi réel — le succès n'apparaît qu'après réponse positive */
        if (errorBox) errorBox.hidden = true;
        sending = true;
        setLoading(true);

        var data = new FormData(form);
        data.append("_subject", form.getAttribute("data-subject") || "Message — site TKN Technics");
        data.append("_template", "table");
        data.append("_captcha", "false");
        /* Ne pas envoyer de pièce jointe vide */
        var fileInput = form.querySelector('input[type="file"]');
        if (fileInput && (!fileInput.files || !fileInput.files.length)) data.delete(fileInput.name);

        var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
        var timer = controller ? setTimeout(function () { controller.abort(); }, 30000) : null;

        fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
          signal: controller ? controller.signal : undefined
        })
          .then(function (res) {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
          })
          .then(function (json) {
            var okSend = json && (json.success === true || json.success === "true");
            if (!okSend) throw new Error("send failed");
            if (success) { form.hidden = true; success.hidden = false; }
          })
          .catch(function () {
            if (errorBox) errorBox.hidden = false;
          })
          .finally(function () {
            if (timer) clearTimeout(timer);
            sending = false;
            setLoading(false);
          });
      });

      /* L'erreur de champ disparaît dès que l'utilisateur corrige */
      form.querySelectorAll("[data-required]").forEach(function (input) {
        var clear = function () {
          var field = input.closest(".field");
          if (field) field.classList.remove("is-err");
        };
        input.addEventListener("input", clear);
        input.addEventListener("change", clear);
      });

      /* « Nouvelle demande » — retour au formulaire vide */
      if (success) {
        var reset = success.querySelector("[data-reset]");
        if (reset) reset.addEventListener("click", function () {
          form.reset();
          form.querySelectorAll(".field.is-err").forEach(function (f) { f.classList.remove("is-err"); });
          form.querySelectorAll(".field.has-value").forEach(function (f) { f.classList.remove("has-value"); });
          form.querySelectorAll(".filefield__txt").forEach(function (t) { t.textContent = FILE_PLACEHOLDER; });
          if (errorBox) errorBox.hidden = true;
          success.hidden = true;
          form.hidden = false;
        });
      }
    });

    /* ---------- Modales (devis en pop-up) ---------- */
    var openModalEl = null;

    function openModal(id) {
      var m = document.getElementById(id);
      if (!m) return;
      if (openModalEl && openModalEl !== m) hideModal(openModalEl);
      m.classList.add("is-open");
      m.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      openModalEl = m;
      var c = m.querySelector(".modal__close");
      if (c) { try { c.focus(); } catch (e) {} }
    }

    function hideModal(m) {
      m = m || openModalEl;
      if (!m) return;
      m.classList.remove("is-open");
      m.setAttribute("aria-hidden", "true");
      if (openModalEl === m) openModalEl = null;
      if (!document.querySelector(".modal.is-open")) document.body.classList.remove("no-scroll");
    }

    document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(btn.getAttribute("data-modal-open"));
      });
    });
    document.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", function () { hideModal(); });
    });
    document.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.key === "Esc") && openModalEl) hideModal();
    });

    /* ---------- Apparition au scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length) {
      if (REDUCED_MOTION || typeof IntersectionObserver === "undefined") {
        revealEls.forEach(function (el) { el.classList.add("in"); });
      } else {
        var revealIO = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealIO.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
        revealEls.forEach(function (el) { revealIO.observe(el); });
      }
    }

    /* ---------- Compteurs animés (bande de chiffres clés) ---------- */
    function animateCount(el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      if (isNaN(target)) return;
      if (REDUCED_MOTION) { el.textContent = String(target); return; }
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
        el.textContent = String(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(step);
      }
      el.textContent = "0";
      requestAnimationFrame(step);
    }

    var countEls = document.querySelectorAll("[data-count]");
    if (countEls.length) {
      if (typeof IntersectionObserver === "undefined") {
        countEls.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
      } else {
        var countIO = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              countIO.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        countEls.forEach(function (el) { countIO.observe(el); });
      }
    }

    /* ---------- FAQ (pages services) ---------- */
    document.querySelectorAll(".faq__item").forEach(function (item) {
      var q = item.querySelector(".faq__q");
      var a = item.querySelector(".faq__a");
      if (!q || !a) return;
      q.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", open ? "true" : "false");
        a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
      });
    });
  });
})();
