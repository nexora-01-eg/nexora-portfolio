/* ============================================================
   NEXORA ANIMATIONS
   Foundation only. Provides a single IntersectionObserver
   that toggles a class when elements enter the viewport.
   Signature/orchestrated motion is designed per-page in
   Phase 2+; this just wires the reveal-on-scroll primitive.
   ============================================================ */

(function () {
  "use strict";

  const REVEAL_ATTR = "data-nx-reveal";
  const REVEAL_CLASS = "nx-is-visible";

  const Animations = {
    observer: null,

    init() {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        document
          .querySelectorAll(`[${REVEAL_ATTR}]`)
          .forEach((el) => el.classList.add(REVEAL_CLASS));
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(REVEAL_CLASS);
              this.observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      document
        .querySelectorAll(`[${REVEAL_ATTR}]`)
        .forEach((el) => this.observer.observe(el));
    },

    /**
     * Registers new elements added to the DOM after init()
     * (e.g. dynamically rendered project cards).
     * @param {NodeListOf<Element>|Element[]} elements
     */
    observe(elements) {
      if (!this.observer) return;
      elements.forEach((el) => this.observer.observe(el));
    },
  };

  window.NEXORA.register("animations", Animations);
})();
