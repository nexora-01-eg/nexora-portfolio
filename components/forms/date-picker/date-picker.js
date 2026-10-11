/* ============================================================
   NEXORA — Date Picker (UI only)
   Toggles the popover panel. Actual date-grid selection logic
   lives in the Calendar component, which this shell hosts.
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll("[data-nx-date-picker]").forEach((root) => {
    const trigger = root.querySelector(".nx-date-picker__trigger");
    const panel = root.querySelector(".nx-date-picker__panel");

    function toggle(open) {
      panel.hidden = !open;
      trigger.setAttribute("aria-expanded", String(open));
    }

    trigger.addEventListener("click", () => toggle(panel.hidden));

    document.addEventListener("click", (e) => {
      if (!root.contains(e.target)) toggle(false);
    });

    root.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggle(false);
        trigger.focus();
      }
    });
  });
})();
