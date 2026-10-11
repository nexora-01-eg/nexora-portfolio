/* ============================================================
   NEXORA VIRTUAL LIST
   Phase 4 — incremental batch rendering for large grids. Not a
   full windowing/DOM-recycling implementation (this platform's
   grids are card-based and vary in height, which makes true
   fixed-row virtualization the wrong tool) — instead, this
   renders items in small batches as a sentinel element scrolls
   into view, so a 500-project grid never creates 500 DOM nodes
   at once. Pairs naturally with Pagination (which limits how
   many items exist in a "page" at all) for pages that want
   infinite-scroll instead of numbered pages.
   ============================================================ */

(function () {
  "use strict";

  /**
   * @param {object} opts
   * @param {HTMLElement} opts.container - where rendered items are appended
   * @param {Array} opts.items - the full item list to render incrementally
   * @param {(item: any) => string} opts.renderItem - returns one item's HTML
   * @param {number} [opts.batchSize=12] - items rendered per batch
   * @returns {{destroy: () => void, reset: (newItems: Array) => void}}
   */
  function create({ container, items, renderItem, batchSize = 12 }) {
    let currentItems = items;
    let renderedCount = 0;
    let sentinel = null;
    let observer = null;

    function renderNextBatch() {
      const nextItems = currentItems.slice(renderedCount, renderedCount + batchSize);
      if (!nextItems.length) return;

      const html = nextItems.map(renderItem).join("");
      const temp = document.createElement("template");
      temp.innerHTML = html;
      container.insertBefore(temp.content, sentinel);

      renderedCount += nextItems.length;
      if (renderedCount >= currentItems.length) {
        observer.disconnect();
        sentinel?.remove();
      }
    }

    function setup() {
      sentinel = document.createElement("div");
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.style.cssText = "height: 1px;";
      container.appendChild(sentinel);

      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) renderNextBatch();
        },
        { rootMargin: "600px" } // start rendering the next batch well before the sentinel is actually visible
      );
      observer.observe(sentinel);

      renderNextBatch(); // render the first batch immediately, don't wait for scroll
    }

    setup();

    return {
      /** Stops observing — call when the container is removed/replaced. */
      destroy() {
        observer?.disconnect();
        sentinel?.remove();
      },
      /** Replaces the item list and starts incremental rendering over. */
      reset(newItems) {
        observer?.disconnect();
        container.innerHTML = "";
        currentItems = newItems;
        renderedCount = 0;
        setup();
      },
    };
  }

  const VirtualList = {
    init() {},
    create,
  };

  window.NEXORA.register("virtualList", VirtualList);
})();
