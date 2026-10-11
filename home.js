/* ============================================================
   NEXORA — Homepage
   Phase 3.5: all data now comes through Manifest (never a raw
   fetch of /data/*.json), and sorting for "Latest"/"Popular"
   goes through the shared Sort module instead of an inline
   comparator. Rendering markup patterns are unchanged from
   Phase 3 — only the data-access path changed.

   NOTE: fetch() of local JSON is blocked by browsers under the
   file:// protocol. Serve this folder over a local static server
   to see live data render; static markup still displays
   correctly when opened directly via file://.
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
      <a class="nx-card nx-card--flush nx-card--interactive nx-project-card" href="pages/projects/detail/index.html?slug=${p.slug}">
        <div class="nx-project-card__media">
          <img src="${p.media.thumbnail}" alt="" loading="lazy" onerror="window.NEXORA.modules.shell.imageFallback(this, '')" />
          <span class="nx-badge nx-badge--${badgeVariantForStatus(p.status)} nx-project-card__status">${p.status}</span>
        </div>
        <div class="nx-project-card__body">
          <p class="nx-caption">${capitalize(p.industry)} · ${p.service}</p>
          <h3 class="nx-h4">${p.title}</h3>
          <p class="nx-small nx-clamp-2">${p.tagline}</p>
          <div class="nx-tag-group" style="margin-top: var(--nx-space-3);">
            ${p.technologies.slice(0, 2).map((t) => `<span class="nx-tag">${t}</span>`).join("")}
          </div>
        </div>
      </a>`;
  }

  function popularProjectRowHTML(p) {
    return `
      <a class="nx-card nx-card--interactive" href="pages/projects/detail/index.html?slug=${p.slug}" style="display: flex; align-items: center; justify-content: space-between; gap: var(--nx-space-4);">
        <div>
          <p class="nx-body" style="font-weight: var(--nx-fw-medium);">${p.title}</p>
          <p class="nx-small nx-text-secondary">${capitalize(p.industry)}</p>
        </div>
        <span class="nx-badge nx-badge--neutral">${p.views.toLocaleString()} views</span>
      </a>`;
  }

  function industryCardHTML(ind) {
    return `
      <a class="nx-card nx-card--interactive nx-industry-card" href="pages/industries/index.html#industry-${ind.id}">
        <div class="nx-industry-card__icon" aria-hidden="true">◆</div>
        <h3 class="nx-h4">${ind.label}</h3>
        <p class="nx-small nx-text-secondary">${ind.projectCount} project${ind.projectCount === 1 ? "" : "s"}</p>
      </a>`;
  }

  function designSystemCardHTML(ds) {
    return `
      <a class="nx-card nx-card--interactive nx-design-system-card" href="pages/design-systems/index.html#${ds.id}">
        <div class="nx-design-system-card__swatches" aria-hidden="true">
          <span style="background: var(--nx-color-black);"></span>
          <span style="background: var(--nx-color-dark-gray-900);"></span>
          <span style="background: var(--nx-color-gold-500);"></span>
          <span style="background: var(--nx-color-white);"></span>
        </div>
        <h3 class="nx-h4">${ds.label}</h3>
        <p class="nx-small nx-text-secondary">${ds.componentCount} components · ${ds.status}</p>
      </a>`;
  }

  function componentCardHTML(c) {
    return `
      <a class="nx-card nx-card--interactive nx-component-card" href="pages/component-explorer/index.html">
        <div class="nx-component-card__preview">
          <span class="nx-small nx-text-muted">${c.label}</span>
        </div>
        <div class="nx-component-card__meta">
          <h3 class="nx-h4">${c.label}</h3>
          <span class="nx-badge nx-badge--neutral">${capitalize(c.category)}</span>
        </div>
      </a>`;
  }

  async function render() {
    const manifest = window.NEXORA.modules.manifest;
    try {
      const [projects, industries, designSystems, components] = await Promise.all([
        manifest.getProjects(),
        manifest.getIndustries(),
        manifest.getDesignSystems(),
        manifest.getComponents(),
      ]);

      const featured = projects.filter((p) => p.featured);
      const latest = manifest.sort(projects, "newest").slice(0, 4);
      const popular = manifest.sort(projects, "popular").slice(0, 4);

      document.getElementById("home-featured-projects").innerHTML = featured.map(projectCardHTML).join("") || `<p class="nx-small nx-text-muted">No featured projects yet.</p>`;
      document.getElementById("home-latest-projects").innerHTML = latest.map(projectCardHTML).join("");
      document.getElementById("home-popular-projects").innerHTML = popular.map(popularProjectRowHTML).join("");
      document.getElementById("home-industries").innerHTML = industries.slice(0, 7).map(industryCardHTML).join("");
      document.getElementById("home-design-systems").innerHTML = designSystems.slice(0, 7).map(designSystemCardHTML).join("");
      document.getElementById("home-components").innerHTML = components.slice(0, 7).map(componentCardHTML).join("");
    } catch (err) {
      console.warn("[NEXORA Home] Could not load platform data (expected under file:// — serve via a local static server):", err.message);
    }
  }

  render();
})();
