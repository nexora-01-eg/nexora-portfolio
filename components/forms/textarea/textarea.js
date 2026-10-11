/* ============================================================
   NEXORA — Textarea (character counter)
   Optional: only needed when a textarea has maxlength and an
   adjacent element to report the live count into.
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll(".nx-textarea[maxlength]").forEach((textarea) => {
    const counterId = textarea.getAttribute("aria-describedby");
    const counter = counterId && document.getElementById(counterId);
    if (!counter) return;

    const max = textarea.getAttribute("maxlength");
    const update = () => {
      counter.textContent = `${textarea.value.length} / ${max}`;
    };
    textarea.addEventListener("input", update);
    update();
  });
})();
