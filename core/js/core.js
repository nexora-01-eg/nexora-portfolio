/* ============================================================
   NEXORA CORE
   Platform bootstrap. Wires together the other core modules
   and exposes a single global namespace: window.NEXORA.
   No page-specific or business logic belongs here.
   ============================================================ */

(function () {
  "use strict";

  const NEXORA = {
    version: "0.1.0",
    env: "development",
    modules: {},

    /**
     * Registers a core module under the NEXORA namespace.
     * @param {string} name
     * @param {object} module
     */
    register(name, module) {
      if (this.modules[name]) {
        console.warn(`[NEXORA] Module "${name}" already registered — overwriting.`);
      }
      this.modules[name] = module;
    },

    /**
     * Runs init() on every registered module, in registration order.
     */
    init() {
      Object.entries(this.modules).forEach(([name, module]) => {
        if (typeof module.init === "function") {
          try {
            module.init();
          } catch (err) {
            console.error(`[NEXORA] Failed to init module "${name}":`, err);
          }
        }
      });
      document.documentElement.setAttribute("data-nexora-ready", "true");
    },
  };

  window.NEXORA = NEXORA;

  document.addEventListener("DOMContentLoaded", () => NEXORA.init());
})();
