(function () {
  "use strict";

  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.getElementById("site-nav-panel");

  if (!toggle || !panel) {
    return;
  }

  var mq = window.matchMedia("(min-width: 768px)");

  function applyDesktopNav() {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.remove("nav-open");
  }

  function applyMobileNavClosed() {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  function syncNavMode() {
    if (mq.matches) {
      applyDesktopNav();
    } else {
      applyMobileNavClosed();
    }
  }

  function setMobileOpen(isOpen) {
    if (mq.matches) {
      return;
    }
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    panel.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  }

  syncNavMode();

  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", syncNavMode);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(syncNavMode);
  }

  toggle.addEventListener("click", function () {
    if (mq.matches) {
      return;
    }
    var open = toggle.getAttribute("aria-expanded") === "true";
    setMobileOpen(!open);
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMobileOpen(false);
    });
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setMobileOpen(false);
    }
  });
})();
