/* ============================================================
   NEXORA PAGINATION
   Phase 3.5 — the one place pagination math is written.
   Two entry points: a stateless slice() for pages that keep
   their own page number, and a stateful create() paginator for
   pages that want next()/previous()/goTo() managed for them.
   ============================================================ */

(function () {
  "use strict";

  /**
   * @param {Array} items
   * @param {number} page - 1-indexed
   * @param {number} pageSize
   * @returns {{items: Array, page: number, pageCount: number, total: number}}
   */
  function slice(items, page, pageSize) {
    const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
    const safePage = Math.min(Math.max(1, page), pageCount);
    const start = (safePage - 1) * pageSize;
    return {
      items: items.slice(start, start + pageSize),
      page: safePage,
      pageCount,
      total: items.length,
    };
  }

  /**
   * @param {Array} items
   * @param {number} pageSize
   * @returns {object} a stateful paginator instance
   */
  function create(items, pageSize) {
    let currentItems = items;
    let page = 1;

    return {
      setItems(newItems) {
        currentItems = newItems;
        page = 1;
      },
      currentPage() {
        return page;
      },
      pageCount() {
        return Math.max(1, Math.ceil(currentItems.length / pageSize));
      },
      goTo(n) {
        page = Math.min(Math.max(1, n), this.pageCount());
        return this.getPageItems();
      },
      next() {
        return this.goTo(page + 1);
      },
      previous() {
        return this.goTo(page - 1);
      },
      getPageItems() {
        return slice(currentItems, page, pageSize).items;
      },
      total() {
        return currentItems.length;
      },
    };
  }

  const Pagination = {
    init() {},
    slice,
    create,
  };

  window.NEXORA.register("pagination", Pagination);
})();
