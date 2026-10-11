/* ============================================================
   NEXORA — Checkbox (indeterminate state)
   Indeterminate can only be set via the DOM property, not an
   HTML attribute — this wires data-nx-indeterminate to it.
   ============================================================ */
(function () {
  "use strict";
  document.querySelectorAll("[data-nx-indeterminate]").forEach((el) => {
    el.indeterminate = true;
  });
})();
