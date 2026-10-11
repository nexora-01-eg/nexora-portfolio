/* ============================================================
   NEXORA — Accordion
   Disclosure pattern (https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
   Multi-open by default; data-nx-accordion-single restricts to one.
   ============================================================ */
(function () {
  "use strict";

  function initAccordion(root) {
    const single = root.hasAttribute("data-nx-accordion-single");
    const triggers = Array.from(root.querySelectorAll(".nx-accordion__trigger"));

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        if (single && !isOpen) {
          triggers.forEach((t) => {
            if (t !== trigger) {
              t.setAttribute("aria-expanded", "false");
              document.getElementById(t.getAttribute("aria-controls")).hidden = true;
            }
          });
        }

        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
      });
    });
  }

  document.querySelectorAll("[data-nx-accordion]").forEach(initAccordion);
})();
