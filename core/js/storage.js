/* ============================================================
   NEXORA STORAGE
   Thin, safe wrapper around localStorage. All platform code
   should go through this rather than calling localStorage
   directly, so persistence can be swapped later without
   touching call sites.
   ============================================================ */

(function () {
  "use strict";

  const PREFIX = "nexora:";

  const Storage = {
    init() {},

    /**
     * @param {string} key
     * @returns {*} parsed value, or null if absent/invalid
     */
    get(key) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : null;
      } catch (err) {
        console.warn(`[NEXORA] storage.get failed for "${key}":`, err);
        return null;
      }
    },

    /**
     * @param {string} key
     * @param {*} value
     */
    set(key, value) {
      try {
        localStorage.setItem(PREFIX + key, JSON.stringify(value));
        return true;
      } catch (err) {
        console.warn(`[NEXORA] storage.set failed for "${key}":`, err);
        return false;
      }
    },

    remove(key) {
      localStorage.removeItem(PREFIX + key);
    },

    clear() {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(PREFIX))
        .forEach((k) => localStorage.removeItem(k));
    },
  };

  window.NEXORA.register("storage", Storage);
})();
