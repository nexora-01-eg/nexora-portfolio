/* ============================================================
   NEXORA — Modal
   Focus-trapped dialog. Opens via [data-nx-modal-open="<id>"],
   closes via [data-nx-modal-close], Escape, or backdrop click.
   ============================================================ */
(function () {
  "use strict";

  const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;
  let activeModal = null;

  function trapFocus(e) {
    if (!activeModal || e.key !== "Tab") return;
    const focusables = Array.from(activeModal.querySelectorAll(FOCUSABLE));
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open(modal) {
    lastFocused = document.activeElement;
    activeModal = modal;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(FOCUSABLE)?.focus();
  }

  function close(modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
    activeModal = null;
    lastFocused?.focus();
  }

  document.addEventListener("click", (e) => {
    const openTrigger = e.target.closest("[data-nx-modal-open]");
    if (openTrigger) {
      const modal = document.getElementById(openTrigger.getAttribute("data-nx-modal-open"));
      if (modal) open(modal);
      return;
    }

    const closeTrigger = e.target.closest("[data-nx-modal-close]");
    if (closeTrigger) {
      close(closeTrigger.closest("[data-nx-modal]"));
      return;
    }

    if (e.target.classList.contains("nx-modal-overlay")) {
      close(e.target);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!activeModal) return;
    if (e.key === "Escape") close(activeModal);
    trapFocus(e);
  });
})();
