/* ============================================================
   NEXORA — Navbar (mobile menu toggle)
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll(".nx-navbar__menu-toggle").forEach((toggle) => {
    const menu = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      menu.hidden = isOpen;
    });
  });
})();
