/* ============================================================
   NEXORA — Context Menu
   Intercepts contextmenu (right-click) on any element with
   data-nx-context-menu="<menu-id>" and shows the referenced
   menu at the cursor position. Escape/outside-click closes it.
   ============================================================ */
(function () {
  "use strict";

  let openMenu = null;

  function close() {
    if (openMenu) {
      openMenu.hidden = true;
      openMenu = null;
    }
  }

  document.querySelectorAll("[data-nx-context-menu]").forEach((target) => {
    target.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const menu = document.getElementById(target.getAttribute("data-nx-context-menu"));
      if (!menu) return;

      close();
      menu.style.top = `${e.clientY}px`;
      menu.style.left = `${e.clientX}px`;
      menu.hidden = false;
      openMenu = menu;
      menu.querySelector('[role="menuitem"]')?.focus();
    });
  });

  document.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
