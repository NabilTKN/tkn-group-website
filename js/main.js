(function() {
  "use strict";
  // Candidatures : FormSubmit transmet le formulaire à info@tkn-technics.be.
  // Sans pièce jointe, envoi en arrière-plan (réponse JSON du service) ; avec une pièce jointe,
  // envoi classique en multipart/form-data, puis retour sur la page (?candidature=envoyee).
  var AJAX_ENDPOINT = "https://formsubmit.co/ajax/info@tkn-technics.be";
  var SENT_PARAM = "candidature";
  var FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];
  var FILE_EXT = /\.(pdf|jpe?g|png)$/i;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn); else fn();
  }
  ready(function() {
    var hdr = document.getElementById("hdr");
    if (hdr) {
      var onScroll = function() {
        hdr.classList.toggle("is-solid", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
    }
    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    var closeDrawer = function(restoreFocus) {
      if (!drawer || !drawer.classList.contains("is-open")) return;
      drawer.classList.remove("is-open");
      if (burger) {
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        if (restoreFocus) burger.focus();
      }
      document.body.classList.remove("no-scroll");
    };
    if (burger && drawer) {
      burger.addEventListener("click", function() {
        var open = drawer.classList.toggle("is-open");
        burger.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("no-scroll", open);
        if (open) {
          var first = drawer.querySelector("a, button");
          if (first) setTimeout(function() {
            first.focus();
          }, 60);
        }
      });
      document.addEventListener("keydown", function(e) {
        if ((e.key === "Escape" || e.key === "Esc") && drawer.classList.contains("is-open")) closeDrawer(true);
      });
      drawer.querySelectorAll("[data-drawer-close]").forEach(function(el) {
        el.addEventListener("click", function() {
          closeDrawer(false);
        });
      });
    }
    document.querySelectorAll(".field__select").forEach(function(sel) {
      var sync = function() {
        sel.closest(".field").classList.toggle("has-value", !!sel.value);
      };
      sel.addEventListener("change", sync);
      sync();
    });

    // Fichier joint : nom affiché, type et taille contrôlés avant l'envoi
    function checkFile(inp) {
      var box = inp.closest(".filefield");
      var f = inp.files && inp.files[0];
      var max = parseFloat(inp.getAttribute("data-max-mb") || "5") * 1024 * 1024;
      var badType = !!f && !(FILE_EXT.test(f.name) && (!f.type || FILE_TYPES.indexOf(f.type) >= 0));
      var badSize = !!f && !badType && f.size > max;
      box.classList.toggle("is-err", badType || badSize);
      box.classList.toggle("err-type", badType);
      box.classList.toggle("err-size", badSize);
      if (badType || badSize) inp.setAttribute("aria-invalid", "true"); else inp.removeAttribute("aria-invalid");
      return !(badType || badSize);
    }
    document.querySelectorAll(".filefield__input").forEach(function(inp) {
      var txt = inp.closest(".filefield").querySelector(".filefield__txt");
      // le texte d'origine (dans la langue de la page) sert de libellé par défaut
      if (txt) txt.setAttribute("data-default", txt.textContent);
      inp.addEventListener("change", function() {
        if (txt) txt.textContent = inp.files && inp.files[0] ? inp.files[0].name : txt.getAttribute("data-default");
        checkFile(inp);
      });
    });

    document.querySelectorAll("form.js-form").forEach(function(form) {
      var successSel = form.getAttribute("data-success");
      var success = successSel ? document.querySelector(successSel) : null;
      var errorBox = form.querySelector(".form-error");
      var submitBtn = form.querySelector('button[type="submit"]');
      var btnLabel = submitBtn ? submitBtn.querySelector("[data-label]") : null;
      var defaultLabel = btnLabel ? btnLabel.textContent : "";
      var sendingLabel = submitBtn ? submitBtn.getAttribute("data-sending") || defaultLabel : "";
      var fileInput = form.querySelector('input[type="file"]');
      var sending = false;
      function setLoading(on) {
        if (!submitBtn) return;
        submitBtn.disabled = on;
        submitBtn.classList.toggle("is-loading", on);
        if (btnLabel) btnLabel.textContent = on ? sendingLabel : defaultLabel;
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
      function showSuccess() {
        if (!success) return;
        form.hidden = true;
        success.hidden = false;
        success.focus();
      }
      var required = Array.prototype.slice.call(form.querySelectorAll("[data-required]"));
      var oneOf = Array.prototype.slice.call(form.querySelectorAll("[data-oneof]"));
      var oneOfMsg = form.querySelector("[data-oneof-msg]");
      var email = form.querySelector('input[type="email"]');
      function setError(input, on, cls) {
        var field = input.closest(".field");
        if (field) field.classList.toggle(cls || "is-err", on);
        if (on) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid");
      }
      function validate() {
        var invalid = [];
        required.forEach(function(input) {
          var filled = !!String(input.value || "").trim();
          setError(input, !filled);
          if (!filled) invalid.push(input);
        });
        // au moins un moyen de contact : téléphone ou e-mail
        if (oneOf.length) {
          var any = oneOf.some(function(input) { return !!String(input.value || "").trim(); });
          oneOf.forEach(function(input) { setError(input, !any, "is-missing"); });
          if (oneOfMsg) oneOfMsg.hidden = any;
          if (!any) invalid.push(oneOf[0]);
        }
        if (email && String(email.value || "").trim()) {
          var okMail = EMAIL_RE.test(email.value.trim());
          setError(email, !okMail);
          if (!okMail) invalid.push(email);
        } else if (email) {
          email.closest(".field").classList.remove("is-err");
        }
        if (fileInput && !checkFile(fileInput)) invalid.push(fileInput);
        // premier champ en erreur dans l'ordre du formulaire
        invalid.sort(function(a, b) { return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });
        return invalid[0] || null;
      }
      function hidden(name, value) {
        var el = form.querySelector('input[type="hidden"][name="' + name + '"]');
        if (!el) {
          el = document.createElement("input");
          el.type = "hidden";
          el.name = name;
          form.appendChild(el);
        }
        el.value = value;
      }
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (sending) return;
        var firstInvalid = validate();
        if (firstInvalid) {
          firstInvalid.focus();
          return;
        }
        if (errorBox) errorBox.hidden = true;
        var subject = form.getAttribute("data-subject") || "Message, site TKN Technics";
        var hasFile = !!(fileInput && fileInput.files && fileInput.files.length);
        sending = true;
        setLoading(true);
        if (hasFile) {
          // le service ne garantit la transmission des fichiers qu'en envoi classique
          var back = window.location.href.split("#")[0].split("?")[0];
          hidden("_subject", subject);
          hidden("_template", "table");
          hidden("_captcha", "false");
          hidden("_next", back + "?" + SENT_PARAM + "=envoyee#recrutement");
          HTMLFormElement.prototype.submit.call(form);
          return;
        }
        var data = new FormData(form);
        data.append("_subject", subject);
        data.append("_template", "table");
        data.append("_captcha", "false");
        if (fileInput) data.delete(fileInput.name);
        var controller = typeof AbortController !== "undefined" ? new AbortController : null;
        var timer = controller ? setTimeout(function() {
          controller.abort();
        }, 3e4) : null;
        fetch(AJAX_ENDPOINT, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json"
          },
          signal: controller ? controller.signal : undefined
        }).then(function(res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        }).then(function(json) {
          // succès uniquement sur confirmation du service (un formulaire non activé répond success: "false")
          var okSend = json && (json.success === true || json.success === "true");
          if (!okSend) throw new Error("send failed");
          showSuccess();
        }).catch(function() {
          if (errorBox) errorBox.hidden = false;
        }).finally(function() {
          if (timer) clearTimeout(timer);
          sending = false;
          setLoading(false);
        });
      });
      required.concat(oneOf).forEach(function(input) {
        var clear = function() {
          setError(input, false);
          if (input.hasAttribute("data-oneof")) {
            oneOf.forEach(function(x) { setError(x, false, "is-missing"); });
            if (oneOfMsg) oneOfMsg.hidden = true;
          }
        };
        input.addEventListener("input", clear);
        input.addEventListener("change", clear);
      });
      // retour après un envoi classique confirmé par le service
      try {
        var params = new URLSearchParams(window.location.search);
        if (params.get(SENT_PARAM) === "envoyee") {
          showSuccess();
          params.delete(SENT_PARAM);
          var qs = params.toString();
          history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : "") + window.location.hash);
        }
      } catch (err) {}
      if (success) {
        var reset = success.querySelector("[data-reset]");
        if (reset) reset.addEventListener("click", function() {
          form.reset();
          form.querySelectorAll(".field.is-err, .field.is-missing, .filefield.err-type, .filefield.err-size").forEach(function(f) {
            f.classList.remove("is-err", "is-missing", "err-type", "err-size");
          });
          form.querySelectorAll(".field.has-value").forEach(function(f) {
            f.classList.remove("has-value");
          });
          form.querySelectorAll(".filefield__txt").forEach(function(t) {
            t.textContent = t.getAttribute("data-default") || t.textContent;
          });
          if (oneOfMsg) oneOfMsg.hidden = true;
          if (errorBox) errorBox.hidden = true;
          success.hidden = true;
          form.hidden = false;
          var first = form.querySelector(".field__input");
          if (first) first.focus();
        });
      }
    });
  });
})();
