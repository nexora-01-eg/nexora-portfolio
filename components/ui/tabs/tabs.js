/* ============================================================
   NEXORA — Tabs
   WAI-ARIA Tabs pattern: click or arrow-key activation, roving
   tabindex, panels toggled via the hidden attribute.
   ============================================================ */
(function () {
  "use strict";

  function initTabs(root) {
    const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));

    function activate(index) {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        if (selected) tab.focus();
        panels[i].hidden = !selected;
      });
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => activate(i));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          activate(next);
        }
      });
    });
  }

  document.querySelectorAll("[data-nx-tabs]").forEach(initTabs);
})();
