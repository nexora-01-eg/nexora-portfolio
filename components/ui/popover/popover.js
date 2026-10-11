/* ============================================================
   NEXORA — Popover
   Lighter-weight than Modal: no focus trap or backdrop, but
   still closes on outside click and Escape, and returns focus.
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll("[data-nx-popover]").forEach((root) => {
    const trigger = root.querySelector(".nx-popover__trigger");
    const panel = root.querySelector(".nx-popover");

    function open() {
      panel.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
    }
    function close(focusTrigger) {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      if (focusTrigger) trigger.focus();
    }

    trigger.addEventListener("click", () => (panel.hidden ? open() : close(false)));

    document.addEventListener("click", (e) => {
      if (!root.contains(e.target)) close(false);
    });

    root.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close(true);
    });
  });
})();
