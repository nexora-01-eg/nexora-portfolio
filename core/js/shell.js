/* ============================================================
   NEXORA — Shell
   Phase 3. Registers into the same window.NEXORA namespace
   core.js established in Phase 1 — cross-page behaviors only,
   nothing component-specific (those stay in each component's
   own JS file).
   ============================================================ */
(function () {
  "use strict";

  const Shell = {
    init() {
      this._initPageLoader();
      this._initScrollProgress();
      this._initCounters();
      this._initRipple();
    },

    /**
     * Phase 4 image placeholder system. Called from an inline
     * onerror="" attribute (so it must exist as a stable global,
     * not a closure), it swaps a broken/missing project image to
     * the platform's shared placeholder graphic instead of hiding
     * it — every thumb/cover/gallery image is expected to be
     * missing for most projects until real photography exists, so
     * this is the normal path, not an edge case.
     * @param {HTMLImageElement} img
     * @param {string} relPrefix - the "../.." style prefix this page
     *   already uses to reach the site root (same value passed to
     *   every other root-relative asset on the page).
     */
    imageFallback(img, relPrefix) {
      if (img.dataset.nxFallbackApplied) return; // avoid loops if the placeholder itself 404s
      img.dataset.nxFallbackApplied = "true";
      img.src = `${relPrefix}assets/images/placeholder.svg`;
      img.classList.add("nx-img-fallback");
    },

    _initPageLoader() {
      const loader = document.querySelector(".nx-page-loader");
      if (!loader) return;
      const hide = () => loader.classList.add("nx-page-loader--hidden");
      if (document.readyState === "complete") {
        hide();
      } else {
        window.addEventListener("load", hide, { once: true });
      }
    },

    _initScrollProgress() {
      const bar = document.querySelector(".nx-scroll-progress");
      if (!bar) return;
      const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        bar.style.width = `${pct}%`;
      };
      document.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    },

    _initCounters() {
      const counters = document.querySelectorAll("[data-nx-counter]");
      if (!counters.length) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function animateCounter(el) {
        const target = parseInt(el.getAttribute("data-nx-counter"), 10) || 0;
        const suffix = el.getAttribute("data-nx-counter-suffix") || "";
        if (prefersReduced) {
          el.textContent = target + suffix;
          return;
        }
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );

      counters.forEach((el) => observer.observe(el));
    },

    _initRipple() {
      document.addEventListener("click", (e) => {
        const host = e.target.closest(".nx-ripple-host");
        if (!host) return;

        const rect = host.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement("span");
        ripple.className = "nx-ripple";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        host.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
      });
    },
  };

  window.NEXORA.register("shell", Shell);
})();
