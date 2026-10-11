/* ============================================================
   NEXORA SORT
   Phase 3.5 — the one place sort comparators are written.
   Pages call Sort.apply(items, key) instead of writing their
   own comparator, so "what does 'popular' mean" has exactly one
   answer platform-wide.
   ============================================================ */

(function () {
  "use strict";

  const TIER_ORDER = { starter: 0, growth: 1, enterprise: 2 };
  const DIFFICULTY_ORDER = { beginner: 0, intermediate: 1, advanced: 2 };
  const STATUS_ORDER = { live: 0, draft: 1, archived: 2 };

  function compareVersions(a, b) {
    const pa = String(a).split(".").map(Number);
    const pb = String(b).split(".").map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const diff = (pa[i] || 0) - (pb[i] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
  }

  const COMPARATORS = {
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    popular: (a, b) => (b.views || 0) - (a.views || 0),
    version: (a, b) => compareVersions(b.version, a.version),
    // "Price" has no numeric field in the project schema — tier is the
    // platform's price proxy (starter < growth < enterprise).
    price: (a, b) => (TIER_ORDER[a.tier] ?? 99) - (TIER_ORDER[b.tier] ?? 99),
    difficulty: (a, b) => (DIFFICULTY_ORDER[a.difficulty] ?? 99) - (DIFFICULTY_ORDER[b.difficulty] ?? 99),
    industry: (a, b) => String(a.industry).localeCompare(String(b.industry)),
    status: (a, b) => (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99),
  };

  const Sort = {
    KEYS: Object.keys(COMPARATORS),

    init() {},

    /**
     * @param {Array} items
     * @param {string} key - one of Sort.KEYS
     * @returns {Array} a new sorted array (input is never mutated)
     */
    apply(items, key) {
      const comparator = COMPARATORS[key];
      if (!comparator) {
        console.warn(`[NEXORA] Unknown sort key: "${key}" — returning items unsorted.`);
        return [...items];
      }
      return [...items].sort(comparator);
    },
  };

  window.NEXORA.register("sort", Sort);
})();
