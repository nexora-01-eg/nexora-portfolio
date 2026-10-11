/* ============================================================
   NEXORA — Tag (removable interaction)
   Self-contained: no dependency on other component JS.
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".nx-tag__remove");
    if (!removeBtn) return;
    const tag = removeBtn.closest("[data-nx-tag]");
    if (tag) {
      tag.dispatchEvent(new CustomEvent("nx:tag-remove", { bubbles: true }));
      tag.remove();
    }
  });
})();
