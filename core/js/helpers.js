/* ============================================================
   NEXORA HELPERS
   Small, generic, dependency-free utility functions used
   across modules. Nothing business- or page-specific here.
   ============================================================ */

(function () {
  "use strict";

  const Helpers = {
    init() {},

    /**
     * Debounces a function by the given delay (ms).
     */
    debounce(fn, delay = 200) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    },

    /**
     * Throttles a function to run at most once per `limit` ms.
     */
    throttle(fn, limit = 200) {
      let inThrottle = false;
      return (...args) => {
        if (inThrottle) return;
        fn(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      };
    },

    /**
     * Converts a string to a URL/id-safe slug.
     */
    slugify(text) {
      return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    },

    /**
     * Formats bytes into a human-readable string.
     */
    formatBytes(bytes, decimals = 1) {
      if (!bytes) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${(bytes / Math.pow(k, i)).toFixed(decimals)} ${sizes[i]}`;
    },

    /**
     * Deep-clones a plain JSON-serializable value.
     */
    deepClone(value) {
      return JSON.parse(JSON.stringify(value));
    },
  };

  window.NEXORA.register("helpers", Helpers);
})();
