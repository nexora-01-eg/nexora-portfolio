/* ============================================================
   NEXORA THEME
   Applies the persisted theme (dark by default, light opt-in)
   by toggling [data-theme] on <html>, consumed by tokens.css.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "nx-theme";
  const DEFAULT_THEME = "dark";

  const Theme = {
    current: DEFAULT_THEME,

    init() {
      const stored = window.NEXORA.modules.storage
        ? window.NEXORA.modules.storage.get(STORAGE_KEY)
        : localStorage.getItem(STORAGE_KEY);

      this.apply(stored || DEFAULT_THEME);
    },

    /**
     * @param {"dark"|"light"} theme
     */
    apply(theme) {
      this.current = theme;
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }

      if (window.NEXORA.modules.storage) {
        window.NEXORA.modules.storage.set(STORAGE_KEY, theme);
      } else {
        localStorage.setItem(STORAGE_KEY, theme);
      }
    },

    toggle() {
      this.apply(this.current === "dark" ? "light" : "dark");
    },
  };

  window.NEXORA.register("theme", Theme);
})();
