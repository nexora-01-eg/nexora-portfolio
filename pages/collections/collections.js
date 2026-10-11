/* ============================================================
   NEXORA — Collections
   Phase 3.5: fully data-driven. The set of collections (their
   ids, labels, and membership rules) comes entirely from
   /data/collections.json via Manifest — this file no longer
   hardcodes what "Featured" or "Popular" means; it only asks
   Manifest.getCollectionProjects(id) for each collection's
   resolved project list and renders it. Adding a new collection
   is a JSON change, not a code change.
   ============================================================ */
(function () {
  "use strict";

  function badgeVariantForStatus(status) {
    return { live: "success", draft: "warning", archived: "neutral" }[status] || "neutral";
  }

  function capitalize(str) {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function projectCardHTML(p) {
    return `
      <a class="nx-card nx-card--flush nx-card--interactive nx-project-card" href="../projects/detail/index.html?slug=${p.slug}" role="listitem">
        <div class="nx-project-card__media">
          <img src="../..${p.media.thumbnail}" alt="" loading="lazy" onerror="window.NEXORA.modules.shell.imageFallback(this, '../../')" />
          <span class="nx-badge nx-badge--${badgeVariantForStatus(p.status)} nx-project-card__status">${p.status}</span>
        </div>
        <div class="nx-project-card__body">
          <p class="nx-caption">${capitalize(p.industry)} · ${p.service}</p>
          <h3 class="nx-h4">${p.title}</h3>
          <p class="nx-small nx-clamp-2">${p.tagline}</p>
        </div>
      </a>`;
  }

  function renderCollection(id, projects) {
    const grid = document.getElementById(`collection-${id}`);
    if (!grid) return; // a collection.json entry with no matching panel is simply skipped

    if (id === "favorites") {
      const emptyState = document.getElementById("collection-favorites-empty");
      grid.hidden = projects.length === 0;
      if (emptyState) emptyState.hidden = projects.length > 0;
    }

    grid.innerHTML = projects.length
      ? projects.map(projectCardHTML).join("")
      : `<p class="nx-small nx-text-muted">No projects in this collection yet.</p>`;
  }

  function selectTabFromHash() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const trigger = document.getElementById(`tab-${hash}`);
    if (trigger) trigger.click();
  }

  async function init() {
    const manifest = window.NEXORA.modules.manifest;
    try {
      const collections = await manifest.getCollections();
      await Promise.all(
        collections.map(async (collection) => {
          const { projects } = await manifest.getCollectionProjects(collection.id);
          renderCollection(collection.id, projects);
        })
      );
      selectTabFromHash();
    } catch (err) {
      console.error("[NEXORA Collections]", err);
    }
  }

  init();
})();
