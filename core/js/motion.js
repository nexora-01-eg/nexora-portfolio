/* ============================================================
   NEXORA — Motion (Experience Layer)
   Registers into the same window.NEXORA module system as every
   other core/js file. Purely additive: does nothing unless a
   page marks an element with data-nx-magnetic/data-nx-tilt or
   the .nx-glow-surface class. Event delegation only — one
   listener per interaction type, not one per element.
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const Motion = {
    init() {
      if (prefersReduced) return;
      this._initMagnetic();
      this._initTilt();
      this._initGlow();
    },

    _initMagnetic() {
      const strength = 0.25;
      document.addEventListener("mousemove", (e) => {
        const target = e.target.closest("[data-nx-magnetic]");
        document.querySelectorAll("[data-nx-magnetic].nx-magnetic--active").forEach((el) => {
          if (el !== target) {
            el.style.setProperty("--nx-mx", "0px");
            el.style.setProperty("--nx-my", "0px");
            el.classList.remove("nx-magnetic--active");
          }
        });
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * strength;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * strength;
        target.style.setProperty("--nx-mx", `${offsetX}px`);
        target.style.setProperty("--nx-my", `${offsetY}px`);
        target.classList.add("nx-magnetic--active");
      });
    },

    _initTilt() {
      const maxTilt = 6;
      document.addEventListener("mousemove", (e) => {
        const target = e.target.closest("[data-nx-tilt]");
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        target.style.setProperty("--nx-tilt-x", `${(0.5 - py) * maxTilt}deg`);
        target.style.setProperty("--nx-tilt-y", `${(px - 0.5) * maxTilt}deg`);
      });
      document.addEventListener("mouseout", (e) => {
        const target = e.target.closest("[data-nx-tilt]");
        if (!target) return;
        target.style.setProperty("--nx-tilt-x", "0deg");
        target.style.setProperty("--nx-tilt-y", "0deg");
      });
    },

    _initGlow() {
      document.addEventListener("mousemove", (e) => {
        const target = e.target.closest(".nx-glow-surface");
        if (!target) return;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--nx-glow-x", `${e.clientX - rect.left}px`);
        target.style.setProperty("--nx-glow-y", `${e.clientY - rect.top}px`);
      });
    },

    staggerReveal(elements) {
      const list = Array.from(elements);
      list.forEach((el, i) => {
        el.classList.add("nx-anim-fade-up", `nx-stagger-${(i % 6) + 1}`);
        el.setAttribute("data-nx-reveal", "");
      });
      const animations = window.NEXORA.modules.animations;
      if (animations) animations.observe(list);
    },
  };

  window.NEXORA.register("motion", Motion);
})();
