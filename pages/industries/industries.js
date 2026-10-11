/* ============================================================
   NEXORA — Industries
   Phase 3.5: data comes through Manifest (not a raw fetch).
   Rendering logic (full grid + per-industry spotlight sections)
   is unchanged from Phase 3.
   ============================================================ */
(function () {
  "use strict";

  function capitalize(str) {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function badgeVariantForStatus(status) {
    return { live: "success", draft: "warning", archived: "neutral" }[status] || "neutral";
  }

  function industryCardHTML(ind) {
    return `
      <a class="nx-card nx-card--interactive nx-industry-card" href="#industry-${ind.id}" role="listitem">
        <div class="nx-industry-card__icon" aria-hidden="true">◆</div>
        <h3 class="nx-h4">${ind.label}</h3>
        <p class="nx-small nx-text-secondary">${ind.projectCount} project${ind.projectCount === 1 ? "" : "s"}</p>
      </a>`;
  }

  function projectCardHTML(p) {
    return `
      <a class="nx-card nx-card--flush nx-card--interactive nx-project-card" href="../projects/detail/index.html?slug=${p.slug}">
        <div class="nx-project-card__media">
          <img src="../..${p.media.thumbnail}" alt="" loading="lazy" onerror="window.NEXORA.modules.shell.imageFallback(this, '../../')" />
          <span class="nx-badge nx-badge--${badgeVariantForStatus(p.status)} nx-project-card__status">${p.status}</span>
        </div>
        <div class="nx-project-card__body">
          <p class="nx-caption">${p.service}</p>
          <h3 class="nx-h4">${p.title}</h3>
          <p class="nx-small nx-clamp-2">${p.tagline}</p>
        </div>
      </a>`;
  }

  function spotlightHTML(ind, projects) {
    return `
      <section class="nx-container nx-industry-spotlight" id="industry-${ind.id}" data-nx-reveal>
        <div class="nx-industry-spotlight__header">
          <div>
            <p class="nx-caption nx-text-accent">Industry Spotlight</p>
            <h2 class="nx-h3">${ind.label}</h2>
            <p class="nx-small nx-text-secondary">${projects.length} project${projects.length === 1 ? "" : "s"} in this vertical</p>
          </div>
          <a class="nx-btn nx-btn--secondary nx-btn--md nx-ripple-host" href="../projects/index.html">View in catalog</a>
        </div>
        <div class="nx-grid nx-grid--3">
          ${projects.map(projectCardHTML).join("")}
        </div>
      </section>`;
  }

  async function init() {
    const manifest = window.NEXORA.modules.manifest;
    try {
      const [industries, projects] = await Promise.all([manifest.getIndustries(), manifest.getProjects()]);

      document.getElementById("industries-count").textContent = `${industries.length} industries · ${projects.length} projects total`;
      document.getElementById("industries-grid").innerHTML = industries.map(industryCardHTML).join("");

      const spotlights = industries
        .map((ind) => ({ ind, projects: projects.filter((p) => p.industry === ind.id) }))
        .filter((s) => s.projects.length > 0);

      document.getElementById("industries-spotlights").innerHTML = spotlights
        .map((s) => spotlightHTML(s.ind, s.projects))
        .join("");

      const animations = window.NEXORA.modules.animations;
      if (animations) animations.observe(document.querySelectorAll("#industries-spotlights [data-nx-reveal]"));
    } catch (err) {
      document.getElementById("industries-count").textContent = "Could not load industries.";
      console.error("[NEXORA Industries]", err);
    }
  }

  init();
})();
