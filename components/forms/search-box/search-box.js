/* ============================================================
   NEXORA — Search Box
   Shows/hides the clear button and dispatches a bubbling
   nx:search-input event other modules (filters, search index)
   can subscribe to. Does not implement matching itself — that
   is core/js/search.js's job.
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll(".nx-search-box").forEach((box) => {
    const input = box.querySelector(".nx-search-box__input");
    const clear = box.querySelector(".nx-search-box__clear");

    input.addEventListener("input", () => {
      clear.hidden = input.value.length === 0;
      box.dispatchEvent(new CustomEvent("nx:search-input", { bubbles: true, detail: { value: input.value } }));
    });

    clear.addEventListener("click", () => {
      input.value = "";
      clear.hidden = true;
      input.focus();
      box.dispatchEvent(new CustomEvent("nx:search-input", { bubbles: true, detail: { value: "" } }));
    });
  });
})();
