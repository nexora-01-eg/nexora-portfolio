/* ============================================================
   NEXORA — Toast
   Imperative API: NexoraToast.show({ message, variant, duration })
   Self-contained — creates its own viewport if one isn't present.
   ============================================================ */
(function () {
  "use strict";

  const ICONS = { info: "ℹ", success: "✓", warning: "!", danger: "✕" };

  function getViewport() {
    let vp = document.getElementById("nx-toast-viewport");
    if (!vp) {
      vp = document.createElement("div");
      vp.id = "nx-toast-viewport";
      vp.className = "nx-toast-viewport";
      vp.setAttribute("aria-live", "polite");
      vp.setAttribute("aria-atomic", "true");
      document.body.appendChild(vp);
    }
    return vp;
  }

  const NexoraToast = {
    /**
     * @param {object} opts
     * @param {string} opts.message
     * @param {"info"|"success"|"warning"|"danger"} [opts.variant="info"]
     * @param {number} [opts.duration=4000] - ms before auto-dismiss, 0 = persistent
     */
    show({ message, variant = "info", duration = 4000 } = {}) {
      const vp = getViewport();
      const toast = document.createElement("div");
      toast.className = `nx-toast nx-toast--${variant}`;
      toast.setAttribute("role", "status");
      toast.innerHTML = `
        <span class="nx-toast__icon" aria-hidden="true">${ICONS[variant] || ICONS.info}</span>
        <p class="nx-toast__message"></p>
        <button class="nx-toast__close" type="button" aria-label="Dismiss notification">×</button>
      `;
      toast.querySelector(".nx-toast__message").textContent = message;

      const dismiss = () => {
        toast.classList.add("nx-toast--leaving");
        toast.addEventListener("animationend", () => toast.remove(), { once: true });
      };

      toast.querySelector(".nx-toast__close").addEventListener("click", dismiss);
      vp.appendChild(toast);

      if (duration > 0) setTimeout(dismiss, duration);
      return { dismiss };
    },
  };

  window.NexoraToast = NexoraToast;
})();
