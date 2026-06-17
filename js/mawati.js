/* MAWATI — interações leves, sem dependências. */
(function () {
  "use strict";

  /* Sinaliza que o JS está ativo — habilita as animações de reveal no CSS. */
  document.documentElement.classList.add("js");

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");

  /* Header sólido ao rolar */
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      var open = document.body.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  function showAll() { revealEls.forEach(function (el) { el.classList.add("in"); }); }
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
    /* Rede de segurança: nada fica preso invisível (ex.: deep-link em âncora). */
    window.setTimeout(showAll, 2500);
  } else {
    showAll();
  }

  /* Contador animado das estatísticas */
  var stats = document.querySelectorAll(".stat__num[data-count]");
  if ("IntersectionObserver" in window && stats.length) {
    var sObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var prefix = el.getAttribute("data-prefix") || "";
        var dur = 1400, start = null;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        sObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach(function (el) { sObs.observe(el); });
  }

  /* Ano dinâmico no rodapé */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
