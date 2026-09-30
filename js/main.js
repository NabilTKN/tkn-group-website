(function() {
  "use strict";
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/info@tkn-technics.be";
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
    // Le texte d'origine de la zone de fichier (dans la langue de la page) sert de libellé par défaut
    document.querySelectorAll(".filefield__input").forEach(function(inp) {
      var txt = inp.closest(".filefield").querySelector(".filefield__txt");
      if (txt) txt.setAttribute("data-default", txt.textContent);
      inp.addEventListener("change", function() {
        if (txt) txt.textContent = inp.files && inp.files[0] ? inp.files[0].name : txt.getAttribute("data-default");
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
      var required = Array.prototype.slice.call(form.querySelectorAll("[data-required]"));
      function setError(input, on) {
        var field = input.closest(".field");
        if (field) field.classList.toggle("is-err", on);
        if (on) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid");
      }
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (sending) return;
        var firstInvalid = null;
        required.forEach(function(input) {
          var filled = !!String(input.value || "").trim();
          setError(input, !filled);
          if (!filled && !firstInvalid) firstInvalid = input;
        });
        if (firstInvalid) {
          firstInvalid.focus();
          return;
        }
        if (errorBox) errorBox.hidden = true;
        sending = true;
        setLoading(true);
        var data = new FormData(form);
        data.append("_subject", form.getAttribute("data-subject") || "Message, site TKN Technics");
        data.append("_template", "table");
        data.append("_captcha", "false");
        var fileInput = form.querySelector('input[type="file"]');
        if (fileInput && (!fileInput.files || !fileInput.files.length)) data.delete(fileInput.name);
        var controller = typeof AbortController !== "undefined" ? new AbortController : null;
        var timer = controller ? setTimeout(function() {
          controller.abort();
        }, 3e4) : null;
        fetch(FORM_ENDPOINT, {
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
          var okSend = json && (json.success === true || json.success === "true");
          if (!okSend) throw new Error("send failed");
          if (success) {
            form.hidden = true;
            success.hidden = false;
          }
        }).catch(function() {
          if (errorBox) errorBox.hidden = false;
        }).finally(function() {
          if (timer) clearTimeout(timer);
          sending = false;
          setLoading(false);
        });
      });
      required.forEach(function(input) {
        var clear = function() {
          setError(input, false);
        };
        input.addEventListener("input", clear);
        input.addEventListener("change", clear);
      });
      if (success) {
        var reset = success.querySelector("[data-reset]");
        if (reset) reset.addEventListener("click", function() {
          form.reset();
          form.querySelectorAll(".field.is-err").forEach(function(f) {
            f.classList.remove("is-err");
          });
          form.querySelectorAll(".field.has-value").forEach(function(f) {
            f.classList.remove("has-value");
          });
          form.querySelectorAll(".filefield__txt").forEach(function(t) {
            t.textContent = t.getAttribute("data-default") || t.textContent;
          });
          if (errorBox) errorBox.hidden = true;
          success.hidden = true;
          form.hidden = false;
        });
      }
    });
  });
})();
