/* ============================================================
   NEXORA — Drawer
   Same open/close/focus-trap mechanics as Modal, namespaced
   under data-nx-drawer-* so both can coexist on one page.
   ============================================================ */
(function () {
  "use strict";

  const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;
  let activeDrawer = null;

  function trapFocus(e) {
    if (!activeDrawer || e.key !== "Tab") return;
    const focusables = Array.from(activeDrawer.querySelectorAll(FOCUSABLE));
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open(drawer) {
    lastFocused = document.activeElement;
    activeDrawer = drawer;
    drawer.hidden = false;
    document.body.style.overflow = "hidden";
    drawer.querySelector(FOCUSABLE)?.focus();
  }

  function close(drawer) {
    drawer.hidden = true;
    document.body.style.overflow = "";
    activeDrawer = null;
    lastFocused?.focus();
  }

  document.addEventListener("click", (e) => {
    const openTrigger = e.target.closest("[data-nx-drawer-open]");
    if (openTrigger) {
      const drawer = document.getElementById(openTrigger.getAttribute("data-nx-drawer-open"));
      if (drawer) open(drawer);
      return;
    }

    const closeTrigger = e.target.closest("[data-nx-drawer-close]");
    if (closeTrigger) {
      close(closeTrigger.closest("[data-nx-drawer]"));
      return;
    }

    if (e.target.classList.contains("nx-drawer-overlay")) {
      close(e.target);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!activeDrawer) return;
    if (e.key === "Escape") close(activeDrawer);
    trapFocus(e);
  });
})();
