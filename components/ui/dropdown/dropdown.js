/* ============================================================
   NEXORA — Dropdown (menu button)
   WAI-ARIA Menu Button pattern: Enter/Space/ArrowDown opens,
   Arrow keys move focus between items, Escape closes and
   returns focus to the trigger, outside click closes.
   ============================================================ */
(function () {
  "use strict";

  function initDropdown(root) {
    const trigger = root.querySelector(".nx-dropdown__trigger");
    const menu = root.querySelector(".nx-dropdown__menu");
    const items = () => Array.from(menu.querySelectorAll('[role="menuitem"]'));

    function open() {
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      items()[0]?.focus();
    }

    function close(focusTrigger) {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      if (focusTrigger) trigger.focus();
    }

    trigger.addEventListener("click", () => {
      menu.hidden ? open() : close(false);
    });

    trigger.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        open();
      }
    });

    menu.addEventListener("keydown", (e) => {
      const list = items();
      const currentIndex = list.indexOf(document.activeElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        list[(currentIndex + 1) % list.length].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        list[(currentIndex - 1 + list.length) % list.length].focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      } else if (e.key === "Tab") {
        close(false);
      }
    });

    document.addEventListener("click", (e) => {
      if (!root.contains(e.target)) close(false);
    });
  }

  document.querySelectorAll("[data-nx-dropdown]").forEach(initDropdown);
})();
