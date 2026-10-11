/* ============================================================
   NEXORA — Tooltip
   Reads data-nx-tooltip (text) and data-nx-tooltip-position
   ("top" default | "bottom") off any element. Shows on
   hover/focus, hides on blur/mouseleave/Escape. Sets
   aria-describedby so screen readers announce it too.
   ============================================================ */
(function () {
  "use strict";

  let tooltipEl = null;
  let currentTrigger = null;

  function ensureTooltipEl() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement("div");
    tooltipEl.className = "nx-tooltip";
    tooltipEl.id = "nx-tooltip";
    tooltipEl.setAttribute("role", "tooltip");
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function show(trigger) {
    const el = ensureTooltipEl();
    const position = trigger.getAttribute("data-nx-tooltip-position") || "top";
    el.textContent = trigger.getAttribute("data-nx-tooltip");
    el.className = `nx-tooltip nx-tooltip--${position}`;
    trigger.setAttribute("aria-describedby", "nx-tooltip");
    currentTrigger = trigger;

    const rect = trigger.getBoundingClientRect();
    document.body.appendChild(el); // ensure on top of stacking context
    const elRect = el.getBoundingClientRect();
    const top = position === "top"
      ? rect.top + window.scrollY - elRect.height - 8
      : rect.bottom + window.scrollY + 8;
    const left = rect.left + window.scrollX + rect.width / 2 - elRect.width / 2;

    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
    requestAnimationFrame(() => el.classList.add("nx-tooltip--visible"));
  }

  function hide() {
    if (!tooltipEl) return;
    tooltipEl.classList.remove("nx-tooltip--visible");
    currentTrigger?.removeAttribute("aria-describedby");
    currentTrigger = null;
  }

  document.querySelectorAll("[data-nx-tooltip]").forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => show(trigger));
    trigger.addEventListener("mouseleave", hide);
    trigger.addEventListener("focus", () => show(trigger));
    trigger.addEventListener("blur", hide);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });
})();
