/* ============================================================
   NEXORA FILTERS
   Phase 3.5 — the one place filter-matching logic is written.
   Exposes a pure function, Filters.apply(items, criteria), so
   every page (Home, Projects, Industries, Design Systems,
   Collections) calls the same predicate instead of writing its
   own. Which checkboxes are currently active is necessarily
   page-local UI state (a page's own data, not duplicated logic)
   — Filters.apply() is what turns that state into a filtered
   array, and that code exists exactly once, here.
   ============================================================ */

(function () {
  "use strict";

  // Supported filter dimensions across the whole platform.
  const FILTER_KEYS = [
    "industry",
    "service",
    "technology",
    "difficulty",
    "tier",
    "status",
    "version",
    "components",
    "designSystem",
    "collections",
  ];

  // Maps a filter key to how it reads a value off a project object.
  // Array-valued fields (technology, components) match if ANY
  // selected value is present; scalar fields match on equality.
  const FIELD_ACCESSORS = {
    industry: (p) => p.industry,
    service: (p) => p.service,
    technology: (p) => p.technologies || [],
    difficulty: (p) => p.difficulty,
    tier: (p) => p.tier,
    status: (p) => p.status,
    version: (p) => p.version,
    components: (p) => p.componentsUsed || [],
    designSystem: (p) => p.industry, // design systems are 1:1 with industries in this platform
    collections: (p) => p._collectionIds || [],
  };

  function matchesGroup(project, key, selected) {
    if (!selected || selected.size === 0) return true;
    const value = FIELD_ACCESSORS[key] ? FIELD_ACCESSORS[key](project) : undefined;
    if (Array.isArray(value)) return value.some((v) => selected.has(v));
    return selected.has(value);
  }

  const Filters = {
    KEYS: FILTER_KEYS,

    init() {},

    /**
     * Creates an empty, correctly-shaped criteria object a page can
     * fill in from its own checkbox/select UI state.
     * @returns {object} { industry: Set, service: Set, ... }
     */
    createCriteria() {
      const criteria = {};
      FILTER_KEYS.forEach((key) => (criteria[key] = new Set()));
      return criteria;
    },

    /**
     * The one filter-matching implementation on the platform.
     * @param {Array} items
     * @param {object} criteria - { [FILTER_KEY]: Set<string> }
     * @returns {Array} items matching every non-empty criteria group (AND across groups, OR within a group)
     */
    apply(items, criteria) {
      if (!criteria) return items;
      return items.filter((item) =>
        FILTER_KEYS.every((key) => matchesGroup(item, key, criteria[key]))
      );
    },

    /**
     * @param {object} criteria
     * @returns {boolean} true if every group is empty (no active filters)
     */
    isEmpty(criteria) {
      return FILTER_KEYS.every((key) => !criteria[key] || criteria[key].size === 0);
    },
  };

  window.NEXORA.register("filters", Filters);
})();
