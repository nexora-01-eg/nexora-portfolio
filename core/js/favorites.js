/* ============================================================
   NEXORA FAVORITES
   Phase 3.5 — architecture only, per spec: no UI is wired to
   this yet. Built on top of the existing Storage module (never
   touches localStorage directly, matching Phase 1's boundary)
   so favoriting persists across sessions once a page adds the
   UI for it.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "favorites";

  function readAll() {
    const storage = window.NEXORA.modules.storage;
    if (!storage) return [];
    return storage.get(STORAGE_KEY) || [];
  }

  function writeAll(ids) {
    const storage = window.NEXORA.modules.storage;
    if (!storage) return false;
    return storage.set(STORAGE_KEY, ids);
  }

  const Favorites = {
    init() {},

    /** @returns {string[]} favorited project ids */
    list() {
      return readAll();
    },

    /** @param {string} id */
    has(id) {
      return readAll().includes(id);
    },

    /** @param {string} id */
    add(id) {
      const ids = readAll();
      if (!ids.includes(id)) {
        ids.push(id);
        writeAll(ids);
      }
      return ids;
    },

    /** @param {string} id */
    remove(id) {
      const ids = readAll().filter((existing) => existing !== id);
      writeAll(ids);
      return ids;
    },

    /** @param {string} id */
    toggle(id) {
      return this.has(id) ? this.remove(id) : this.add(id);
    },

    clear() {
      return writeAll([]);
    },
  };

  window.NEXORA.register("favorites", Favorites);
})();
