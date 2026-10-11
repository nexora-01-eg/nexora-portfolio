/* ============================================================
   NEXORA MANIFEST
   Phase 3.5 established this as the single source of truth for
   platform data — every page still goes through it and nothing
   about that contract changes here. Phase 4 extends only the
   INTERNAL implementation of project loading: instead of one
   monolithic /data/projects.json, projects are now discovered
   from /data/project-index.json (which folders exist) plus each
   project's own /projects/<industry>/<slug>/project.json (that
   project's actual data) — the true "Page → Manifest → JSON"
   discovery engine the platform needed to scale past a single
   hand-maintained file. Every public method below (getProjects,
   getProject, search, filter, sort, paginate,
   getCollectionProjects) keeps its exact Phase 3.5 signature and
   return shape — no calling page had to change because of this.
   ============================================================ */

(function () {
  "use strict";

  const DATA_PATHS = {
    projectIndex: "/data/project-index.json",
    demosIndex: "/data/demos-index.json",
    industries: "/data/industries.json",
    designSystems: "/data/design-systems.json",
    components: "/data/components.json",
    collections: "/data/collections.json",
    navigation: "/data/navigation.json",
    settings: "/data/settings.json",
    searchIndex: "/data/search-index.json",
  };

  // Caches both in-flight promises (so concurrent calls before the
  // first resolves share one fetch, not one each) and resolved data.
  const inflight = {};
  const cache = {};

  // Maps a manifest source name to the matching key in
  // window.NEXORA_FALLBACK (data/fallback-data.js) — the embedded
  // mirror used only when a real fetch() fails.
  const FALLBACK_KEYS = {
    projectIndex: "projectIndex",
    demosIndex: "demosIndex",
    industries: "industries",
    designSystems: "designSystems",
    components: "components",
    collections: "collections",
    navigation: "navigation",
    settings: "settings",
    searchIndex: "searchIndex",
  };

  async function get(name) {
    if (cache[name]) return cache[name];
    if (inflight[name]) return inflight[name];

    const path = DATA_PATHS[name];
    if (!path) throw new Error(`[NEXORA] Unknown manifest source: "${name}"`);

    inflight[name] = fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`[NEXORA] Failed to load "${name}" from ${path} (${res.status})`);
        return res.json();
      })
      .then((data) => {
        cache[name] = data;
        delete inflight[name];
        return data;
      })
      .catch((err) => {
        delete inflight[name];

        const fallbackKey = FALLBACK_KEYS[name];
        const fallback = window.NEXORA_FALLBACK && fallbackKey ? window.NEXORA_FALLBACK[fallbackKey] : null;
        if (fallback) {
          console.warn(`[NEXORA Manifest] fetch("${path}") failed (${err.message}) — using embedded fallback data instead. This is expected when opening the platform directly via file:// without a local server.`);
          cache[name] = fallback;
          return fallback;
        }

        throw err;
      });

    return inflight[name];
  }

  /**
   * Turns one project's raw project.json + the folder it was found in
   * into the full object the rest of the platform expects — this is
   * the ONE place that knows the media-file naming convention
   * (thumb.webp / cover.webp / gallery/ / index.html / preview.html),
   * so no project.json ever has to repeat a file path, and no page
   * ever has to know the convention either.
   */
  function normalizeProject(raw, folder) {
    return {
      ...raw,
      path: folder,
      demoUrl: `${folder}/index.html`,
      _source: "discovery", // introspection only — came from project-index.json + its own project.json
      media: {
        thumbnail: `${folder}/thumb.webp`,
        cover: `${folder}/cover.webp`,
        preview: `${folder}/preview.html`,
        gallery: Array.isArray(raw.gallery) ? raw.gallery.map((name) => `${folder}/gallery/${name}`) : [],
      },
    };
  }

  /**
   * Turns one demos-index.json entry (Phase 5 Mass Import Engine —
   * just a filename, a generated title/slug, and two dates) into the
   * same shape normalizeProject() produces, so every page, filter,
   * and stat that already works on "projects" works on mass-imported
   * demos too without any of them knowing the difference. Every field
   * a full project.json would supply gets a safe, honest default —
   * "uncategorized" / "draft" / empty arrays — rather than guessing.
   */
  function normalizeDemoEntry(entry) {
    return {
      id: entry.slug,
      slug: entry.slug,
      title: entry.title,
      tagline: "Imported demo — no additional details added yet.",
      description: "This entry was generated automatically from a file in demos/. Add a full project.json to give it real metadata, or edit it directly in data/demos-index.json.",
      industry: "uncategorized",
      service: "",
      version: "1.0.0",
      status: "draft",
      tier: "starter",
      difficulty: "beginner",
      tags: [],
      technologies: [],
      componentsUsed: [],
      features: [],
      timeline: [],
      relatedProjects: [],
      views: 0,
      featured: false,
      popular: false,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      path: "/demos",
      demoUrl: `/demos/${entry.filename}`,
      _source: "mass-import", // introspection only — came from demos-index.json
      media: {
        thumbnail: "/demos/__no-image__.webp", // deliberately missing — Shell.imageFallback shows the shared placeholder
        cover: "/demos/__no-image__.webp",
        preview: `/demos/${entry.filename}`,
        gallery: [],
      },
    };
  }

  /**
   * Discovery: reads project-index.json (the registry of which
   * project folders exist), then fetches each one's own project.json
   * in parallel. This — not a hand-maintained catalog file — is what
   * "every project is discovered automatically" means in practice for
   * a zero-build static site: the ONE thing that must be touched when
   * adding a project is a one-line index entry, never a page.
   */
  async function loadProjectsAggregated() {
    if (cache.projectsAggregated) return cache.projectsAggregated;
    if (inflight.projectsAggregated) return inflight.projectsAggregated;

    inflight.projectsAggregated = get("projectIndex")
      .then((indexData) =>
        Promise.all(
          indexData.projects.map(async ({ industry, slug }) => {
            const folder = `/projects/${industry}/${slug}`;
            try {
              const res = await fetch(`${folder}/project.json`);
              if (!res.ok) throw new Error(`HTTP ${res.status}`);
              const raw = await res.json();
              return normalizeProject(raw, folder);
            } catch (err) {
              // Expected under file:// (fetch() rejects outright there,
              // not just a bad HTTP status) — recover this one project
              // from its embedded mirror instead of losing it.
              const fallbackEntry = window.NEXORA_FALLBACK?.projectsRaw?.find(
                (p) => p.industry === industry && p.slug === slug
              );
              if (fallbackEntry) {
                console.warn(`[NEXORA Manifest] fetch("${folder}/project.json") failed (${err.message}) — using embedded fallback data instead.`);
                return normalizeProject(fallbackEntry.data, folder);
              }
              console.warn(`[NEXORA Manifest] Skipping ${industry}/${slug} — project.json failed to load and no fallback is available.`);
              return null;
            }
          })
        )
      )
      .then(async (projects) => {
        const resolved = projects.filter(Boolean);

        // Phase 5 Mass Import Engine: merge in whatever the demos/
        // folder's lightweight catalog contains. get("demosIndex")
        // already has its own file:// fallback via FALLBACK_KEYS, and
        // a missing/empty catalog (nothing imported yet) is not an
        // error — it just contributes zero extra items.
        const demosData = await get("demosIndex").catch(() => ({ demos: [] }));
        const demoItems = (demosData.demos || []).map(normalizeDemoEntry);
        const combined = resolved.concat(demoItems);

        // Enrich each project with which collections it belongs to —
        // this is what Filters.js's "collections" dimension reads.
        const collectionsData = await get("collections").catch(() => ({ collections: [] }));
        const membership = computeCollectionMembership(combined, collectionsData.collections || []);
        combined.forEach((p) => {
          p._collectionIds = membership.get(p.id) || [];
        });

        cache.projectsAggregated = combined;
        delete inflight.projectsAggregated;
        return combined;
      })
      .catch((err) => {
        delete inflight.projectsAggregated;
        throw err;
      });

    return inflight.projectsAggregated;
  }

  /**
   * @param {object} project
   * @param {object} definition - a collections.json entry
   * @returns {boolean} whether this one project matches this collection's
   *   rule, for the "is this project a member" rule types. "latest" and
   *   "popular" are rank-based across the whole set, not a per-project
   *   test, so they're handled separately in computeCollectionMembership().
   */
  function projectMatchesCollectionRule(project, definition) {
    if (definition.rule === "featured") return !!project.featured;
    if (definition.rule === "enterprise") return project.tier === "enterprise";
    if (definition.rule === "industry") return project.industry === definition.industryId;
    if (definition.rule === "service") return project.service === definition.serviceName;
    if (definition.rule === "tag") return (project.tags || []).includes(definition.tag);
    return false;
  }

  /**
   * Computes every project's collection memberships in one pass, so
   * Filters.js's "collections" dimension (which expects a
   * `_collectionIds` array on each project) has real data instead of
   * silently matching nothing. Shared with getCollectionProjects() so
   * "which collections is this project in" is never answered twice.
   * @param {Array} projects
   * @param {Array} collections
   * @returns {Map<string, string[]>} projectId → collectionIds
   */
  function computeCollectionMembership(projects, collections) {
    const membership = new Map(projects.map((p) => [p.id, []]));

    collections.forEach((definition) => {
      let members;
      if (definition.rule === "latest") {
        members = window.NEXORA.modules.sort
          ? window.NEXORA.modules.sort.apply(projects, "newest").slice(0, definition.limit || 12)
          : [];
      } else if (definition.rule === "popular") {
        members = window.NEXORA.modules.sort
          ? window.NEXORA.modules.sort.apply(projects, "popular").slice(0, definition.limit || 12)
          : [];
      } else if (definition.rule === "favorites") {
        const favorites = window.NEXORA.modules.favorites;
        const ids = favorites ? favorites.list() : [];
        members = projects.filter((p) => ids.includes(p.id));
      } else {
        members = projects.filter((p) => projectMatchesCollectionRule(p, definition));
      }

      members.forEach((p) => membership.get(p.id)?.push(definition.id));
    });

    return membership;
  }

  const Manifest = {
    init() {
      // Intentionally does not eager-load everything — each
      // page requests only what it needs, on demand.
    },

    // ---------- Raw source access (escape hatch, rarely needed) ----------
    async get(name) {
      return get(name);
    },

    clearCache(name) {
      if (name) delete cache[name];
      else Object.keys(cache).forEach((key) => delete cache[key]);
      if (!name || name === "projectsAggregated") delete cache.projectsAggregated;
    },

    /**
     * Read-only introspection — which sources are currently cached.
     * Not used by any page; exists for pages/debug to visualize what
     * Manifest is actually doing instead of trusting it blindly.
     * @returns {{ key: string, cached: boolean }[]}
     */
    getCacheStatus() {
      const keys = [...Object.keys(DATA_PATHS), "projectsAggregated"];
      return keys.map((key) => ({ key, cached: Boolean(cache[key]) }));
    },

    // ---------- Typed loaders — the methods pages actually call ----------
    async loadProjects() {
      return loadProjectsAggregated();
    },
    async loadIndustries() {
      const data = await get("industries");
      return data.industries;
    },
    async loadDesignSystems() {
      const data = await get("designSystems");
      return data.designSystems;
    },
    async loadComponents() {
      const data = await get("components");
      return data.components;
    },
    async loadCollections() {
      const data = await get("collections");
      return data.collections;
    },
    async loadNavigation() {
      return get("navigation");
    },
    async loadSettings() {
      return get("settings");
    },

    // ---------- get* aliases — same result, reads as intent at call sites ----------
    async getProjects() {
      return this.loadProjects();
    },
    async getIndustries() {
      return this.loadIndustries();
    },
    async getDesignSystems() {
      return this.loadDesignSystems();
    },
    async getComponents() {
      return this.loadComponents();
    },
    async getCollections() {
      return this.loadCollections();
    },

    /**
     * @param {string} idOrSlug
     * @returns {Promise<object|undefined>}
     */
    async getProject(idOrSlug) {
      const projects = await this.loadProjects();
      return projects.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
    },

    /**
     * Resolves a collection definition into its actual project list.
     * @param {string} collectionId
     * @returns {Promise<{definition: object, projects: object[]}>}
     */
    async getCollectionProjects(collectionId) {
      const [collections, projects] = await Promise.all([this.loadCollections(), this.loadProjects()]);
      const definition = collections.find((c) => c.id === collectionId);
      if (!definition) return { definition: null, projects: [] };

      // Every project already carries its own _collectionIds (computed
      // once during loadProjects()), so membership here is a simple
      // lookup — the same single source of truth Filters.js reads.
      const list = projects.filter((p) => (p._collectionIds || []).includes(collectionId));
      return { definition, projects: list };
    },

    /**
     * Automatically computed platform statistics — never hand-maintained.
     * @returns {Promise<object>}
     */
    async getStatistics() {
      const [projects, industries, designSystems, components] = await Promise.all([
        this.loadProjects(),
        this.loadIndustries(),
        this.loadDesignSystems(),
        this.loadComponents(),
      ]);

      const imageCount = projects.reduce((sum, p) => sum + (p.media.gallery.length || 0) + 2, 0); // +2 = thumb + cover per project
      const lastUpdate = projects.reduce((latest, p) => {
        const d = new Date(p.updatedAt);
        return d > latest ? d : latest;
      }, new Date(0));

      return {
        totalProjects: projects.length,
        industries: industries.length,
        industriesWithProjects: industries.filter((i) => i.projectCount > 0).length,
        designSystems: designSystems.length,
        components: components.length,
        images: imageCount,
        completedProjects: projects.filter((p) => p.status === "live").length,
        lastUpdate: lastUpdate.toISOString().slice(0, 10),
      };
    },

    // ---------- Cross-cutting operations — delegated, never reimplemented ----------
    /**
     * @param {string} query
     * @returns {Promise<Array>} search results across all indexed content
     */
    async search(query) {
      const searchModule = window.NEXORA.modules.search;
      if (!searchModule) return [];
      await searchModule.ensureIndex();
      return searchModule.query(query);
    },

    /**
     * @param {Array} items
     * @param {object} criteria - e.g. { industry: Set, status: Set, tier: Set }
     * @returns {Array}
     */
    filter(items, criteria) {
      const filtersModule = window.NEXORA.modules.filters;
      return filtersModule ? filtersModule.apply(items, criteria) : items;
    },

    /**
     * @param {Array} items
     * @param {string} key - e.g. "newest", "popular", "az"
     * @returns {Array}
     */
    sort(items, key) {
      const sortModule = window.NEXORA.modules.sort;
      return sortModule ? sortModule.apply(items, key) : items;
    },

    /**
     * @param {Array} items
     * @param {number} page - 1-indexed
     * @param {number} pageSize
     * @returns {{items: Array, page: number, pageCount: number, total: number}}
     */
    paginate(items, page, pageSize) {
      const paginationModule = window.NEXORA.modules.pagination;
      if (paginationModule) return paginationModule.slice(items, page, pageSize);

      // Fallback if pagination.js isn't loaded on this page
      const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
      const safePage = Math.min(Math.max(1, page), pageCount);
      const start = (safePage - 1) * pageSize;
      return { items: items.slice(start, start + pageSize), page: safePage, pageCount, total: items.length };
    },
  };

  window.NEXORA.register("manifest", Manifest);
})();
