/* ============================================================
   NEXORA — Calendar (UI only)
   Handles single-date selection and month-nav button clicks.
   Does NOT compute real month grids — populating th/td date
   numbers per month is a page-level data concern in Phase 2+.
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll(".nx-calendar").forEach((calendar) => {
    calendar.addEventListener("click", (e) => {
      const dayBtn = e.target.closest(".nx-calendar__day button");
      if (!dayBtn) return;
      calendar.querySelectorAll(".nx-calendar__day button[aria-selected]").forEach((b) =>
        b.removeAttribute("aria-selected")
      );
      dayBtn.setAttribute("aria-selected", "true");
      calendar.dispatchEvent(new CustomEvent("nx:date-select", { bubbles: true, detail: { day: dayBtn.textContent } }));
    });
  });
})();
