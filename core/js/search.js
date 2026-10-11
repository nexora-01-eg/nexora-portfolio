/* ============================================================
   NEXORA SEARCH
   Phase 3.5 — the one search engine on the platform. Every
   page (Home, Projects, Command Palette, Industries, Design
   Systems, Collections, Components) calls Search.query() through
   Manifest.search() — none of them filter their own static
   lists anymore.

   The index is built from the platform's own JSON data sources
   (via Manifest) — never from scraped HTML — covering project
   name, industry, tags, technology, version, description,
   service, tier, and components, plus industries, design
   systems, and components themselves. Text is normalized for
   both Arabic and English (case folding, Latin diacritic
   stripping, Arabic tashkeel + alef/yaa normalization) so a
   query in either script matches consistently.
   ============================================================ */

(function () {
  "use strict";

  // ---------- Text normalization (Arabic + English) ----------
  const ARABIC_DIACRITICS = /[\u064B-\u0652\u0670\u0640]/g; // tashkeel + tatweel
  const ARABIC_ALEF_VARIANTS = /[\u0622\u0623\u0625]/g; // آ أ إ → ا
  const ARABIC_YAA_VARIANT = /\u0649/g; // ى → ي
  const ARABIC_TAA_MARBUTA = /\u0629/g; // ة → ه

  function normalize(text) {
    if (!text) return "";
    return String(text)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // strip Latin diacritics (é → e)
      .replace(ARABIC_DIACRITICS, "")
      .replace(ARABIC_ALEF_VARIANTS, "\u0627")
      .replace(ARABIC_YAA_VARIANT, "\u064A")
      .replace(ARABIC_TAA_MARBUTA, "\u0647")
      .toLowerCase()
      .trim();
  }

  // ---------- Index entry builders (one per content type) ----------
  function projectEntries(projects) {
    return projects.map((p) => ({
      type: "project",
      id: p.id,
      slug: p.slug,
      label: p.title,
      href: `/pages/projects/detail/index.html?slug=${p.slug}`,
      keywords: normalize(
        [p.title, p.tagline, p.description, p.industry, p.service, p.tier, p.status, p.version, p.difficulty]
          .concat(p.tags || [])
          .concat(p.technologies || [])
          .concat(p.componentsUsed || [])
          .concat(p.features || [])
          .filter(Boolean)
          .join(" ")
      ),
    }));
  }

  function industryEntries(industries) {
    return industries.map((i) => ({
      type: "industry",
      id: i.id,
      label: i.label,
      href: `/pages/industries/index.html#industry-${i.id}`,
      keywords: normalize([i.label, i.id].join(" ")),
    }));
  }

  function designSystemEntries(designSystems) {
    return designSystems.map((d) => ({
      type: "design-system",
      id: d.id,
      label: d.label,
      href: `/pages/design-systems/index.html#${d.id}`,
      keywords: normalize([d.label, d.id].join(" ")),
    }));
  }

  function componentEntries(components) {
    return components.map((c) => ({
      type: "component",
      id: c.id,
      label: c.label,
      href: `/pages/component-explorer/index.html#${c.id}`,
      keywords: normalize([c.label, c.id, c.category].join(" ")),
    }));
  }

  let index = null; // null until ensureIndex() has run once
  let buildingPromise = null;

  const Search = {
    init() {
      // Index is built lazily on first ensureIndex() call, not
      // eagerly here — Manifest data isn't loaded yet at this point.
    },

    /**
     * Builds the index once (from Manifest data) and caches it.
     * Safe to call repeatedly — concurrent calls share one build.
     * @returns {Promise<void>}
     */
    async ensureIndex() {
      if (index) return;
      if (buildingPromise) return buildingPromise;

      const manifest = window.NEXORA.modules.manifest;
      if (!manifest) {
        index = [];
        return;
      }

      buildingPromise = Promise.all([
        manifest.loadProjects(),
        manifest.loadIndustries(),
        manifest.loadDesignSystems(),
        manifest.loadComponents(),
      ])
        .then(([projects, industries, designSystems, components]) => {
          index = [
            ...projectEntries(projects),
            ...industryEntries(industries),
            ...designSystemEntries(designSystems),
            ...componentEntries(components),
          ];
        })
        .catch((err) => {
          console.error("[NEXORA Search] Failed to build index:", err);
          index = [];
        })
        .finally(() => {
          buildingPromise = null;
        });

      return buildingPromise;
    },

    /**
     * @param {string} query
     * @param {object} [opts]
     * @param {string} [opts.type] - restrict to one entry type ("project", "industry", "design-system", "component")
     * @param {number} [opts.limit]
     * @returns {Array} matching index entries, project matches ranked first
     */
    query(query, opts = {}) {
      if (!index) return [];
      const q = normalize(query);
      if (!q) return opts.type ? index.filter((e) => e.type === opts.type).slice(0, opts.limit || 50) : [];

      const typeRank = { project: 0, industry: 1, "design-system": 2, component: 3 };

      let results = index.filter((entry) => entry.keywords.includes(q));
      if (opts.type) results = results.filter((entry) => entry.type === opts.type);

      results.sort((a, b) => {
        // Exact/prefix label matches rank above mid-string keyword matches.
        const aLabel = normalize(a.label);
        const bLabel = normalize(b.label);
        const aScore = aLabel === q ? 0 : aLabel.startsWith(q) ? 1 : 2;
        const bScore = bLabel === q ? 0 : bLabel.startsWith(q) ? 1 : 2;
        if (aScore !== bScore) return aScore - bScore;
        return typeRank[a.type] - typeRank[b.type];
      });

      return results.slice(0, opts.limit || 50);
    },

    /** Forces a rebuild next time ensureIndex() is called (e.g. after data changes). */
    invalidate() {
      index = null;
    },
  };

  window.NEXORA.register("search", Search);
})();
