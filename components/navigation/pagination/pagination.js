/* ============================================================
   NEXORA — Pagination
   Handles page-button active state and prev/next disabling.
   Does not fetch/render data — dispatches nx:page-change for
   the consuming page to handle.
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll("[data-nx-pagination]").forEach((nav) => {
    const pages = Array.from(nav.querySelectorAll(".nx-pagination__page"));
    const prev = nav.querySelector(".nx-pagination__btn--prev");
    const next = nav.querySelector(".nx-pagination__btn--next");

    function setActive(index) {
      pages.forEach((p, i) => {
        const active = i === index;
        p.classList.toggle("nx-pagination__page--active", active);
        if (active) p.setAttribute("aria-current", "page");
        else p.removeAttribute("aria-current");
      });
      prev.disabled = index === 0;
      next.disabled = index === pages.length - 1;
      nav.dispatchEvent(new CustomEvent("nx:page-change", { bubbles: true, detail: { page: index + 1 } }));
    }

    pages.forEach((page, i) => page.addEventListener("click", () => setActive(i)));
    prev.addEventListener("click", () => {
      const current = pages.findIndex((p) => p.classList.contains("nx-pagination__page--active"));
      if (current > 0) setActive(current - 1);
    });
    next.addEventListener("click", () => {
      const current = pages.findIndex((p) => p.classList.contains("nx-pagination__page--active"));
      if (current < pages.length - 1) setActive(current + 1);
    });
  });
})();
