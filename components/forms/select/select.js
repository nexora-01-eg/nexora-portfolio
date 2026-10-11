/* ============================================================
   NEXORA — Custom Select
   Follows the WAI-ARIA Listbox pattern for the custom variant.
   The native <select> (.nx-select) needs no JS at all.
   ============================================================ */
(function () {
  "use strict";

  function initCustomSelect(root) {
    const trigger = root.querySelector(".nx-custom-select__trigger");
    const list = root.querySelector(".nx-custom-select__list");
    const valueEl = root.querySelector(".nx-custom-select__value");
    const options = Array.from(root.querySelectorAll('[role="option"]'));

    function open() {
      list.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      (options.find((o) => o.getAttribute("aria-selected") === "true") || options[0])?.focus();
    }

    function close(focusTrigger) {
      list.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      if (focusTrigger) trigger.focus();
    }

    function select(option) {
      options.forEach((o) => o.setAttribute("aria-selected", "false"));
      option.setAttribute("aria-selected", "true");
      valueEl.textContent = option.textContent;
      close(true);
      root.dispatchEvent(new CustomEvent("nx:select-change", { bubbles: true, detail: { value: option.textContent } }));
    }

    trigger.addEventListener("click", () => (list.hidden ? open() : close(false)));

    options.forEach((option) => {
      option.addEventListener("click", () => select(option));
      option.addEventListener("keydown", (e) => {
        const idx = options.indexOf(option);
        if (e.key === "ArrowDown") { e.preventDefault(); options[(idx + 1) % options.length].focus(); }
        if (e.key === "ArrowUp") { e.preventDefault(); options[(idx - 1 + options.length) % options.length].focus(); }
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(option); }
        if (e.key === "Escape") { e.preventDefault(); close(true); }
      });
    });

    document.addEventListener("click", (e) => {
      if (!root.contains(e.target)) close(false);
    });
  }

  document.querySelectorAll("[data-nx-select]").forEach(initCustomSelect);
})();
