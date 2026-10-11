/* ============================================================
   NEXORA — Project Details
   Phase 3.5: reads ?slug= from the URL and resolves the project
   through Manifest.getProject() (not a raw fetch of
   projects.json). Rendering logic is unchanged from Phase 3.
   ============================================================ */
(function () {
  "use strict";

  const TIER_PRICE = {
    starter: "$0 – $499",
    growth: "$500 – $2,499",
    enterprise: "Custom pricing",
  };

  function badgeVariantForStatus(status) {
    return { live: "success", draft: "warning", archived: "neutral" }[status] || "neutral";
  }

  function capitalize(str) {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function projectCardHTML(p) {
    return `
      <a class="nx-card nx-card--flush nx-card--interactive nx-project-card" href="../detail/index.html?slug=${p.slug}">
        <div class="nx-project-card__media">
          <img src="../../..${p.media.thumbnail}" alt="" loading="lazy" onerror="window.NEXORA.modules.shell.imageFallback(this, '../../../')" />
          <span class="nx-badge nx-badge--${badgeVariantForStatus(p.status)} nx-project-card__status">${p.status}</span>
        </div>
        <div class="nx-project-card__body">
          <p class="nx-caption">${capitalize(p.industry)} · ${p.service}</p>
          <h3 class="nx-h4">${p.title}</h3>
          <p class="nx-small nx-clamp-2">${p.tagline}</p>
        </div>
      </a>`;
  }

  function galleryItemHTML(src, alt, wide) {
    return `
      <figure class="nx-gallery-grid__item${wide ? " nx-gallery-grid__item--wide" : ""}" role="listitem">
        <img src="../../..${src}" alt="${alt}" loading="lazy" onerror="window.NEXORA.modules.shell.imageFallback(this, '../../../')" />
      </figure>`;
  }

  async function init() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const manifest = window.NEXORA.modules.manifest;

    try {
      const [project, allProjects] = await Promise.all([manifest.getProject(slug), manifest.getProjects()]);
      const resolved = project || allProjects[0];
      if (!resolved) throw new Error("No project found");

      document.getElementById("detail-page-title").textContent = `${resolved.title} — NEXORA`;
      document.getElementById("detail-breadcrumb-current").textContent = resolved.title;
      document.getElementById("detail-industry-service").textContent = `${capitalize(resolved.industry)} · ${resolved.service}`;
      document.getElementById("detail-title").textContent = resolved.title;
      document.getElementById("detail-tagline").textContent = resolved.tagline;

      const statusBadge = document.getElementById("detail-status-badge");
      statusBadge.textContent = capitalize(resolved.status);
      statusBadge.className = `nx-badge nx-badge--${badgeVariantForStatus(resolved.status)}`;
      document.getElementById("detail-version-badge").textContent = `v${resolved.version}`;
      document.getElementById("detail-tags").innerHTML = (resolved.tags || [])
        .map((t) => `<span class="nx-tag">${t}</span>`)
        .join("");

      document.getElementById("detail-cover-image").src = "../../.." + (resolved.media.cover || resolved.media.thumbnail);
      document.getElementById("detail-cover-image").alt = `${resolved.title} cover`;

      document.getElementById("detail-description").textContent = resolved.description;

      const featuresList = document.getElementById("detail-features");
      const featureItems = resolved.features && resolved.features.length
        ? resolved.features
        : [`Built for the ${capitalize(resolved.industry)} industry`, `${capitalize(resolved.tier)}-tier architecture, ${resolved.difficulty} complexity`];
      featuresList.innerHTML = featureItems.map((f) => `<li>${f}</li>`).join("");

      document.getElementById("detail-tech-stack").innerHTML = resolved.technologies
        .map((t) => `<span class="nx-tag">${t}</span>`)
        .join("");

      document.getElementById("detail-components-used").innerHTML = resolved.componentsUsed
        .map((c) => `<span class="nx-tag">${capitalize(c)}</span>`)
        .join("");

      const timelineList = document.getElementById("detail-timeline");
      const timelineEvents = resolved.timeline && resolved.timeline.length ? [...resolved.timeline].reverse() : [];
      timelineList.innerHTML = timelineEvents.length
        ? timelineEvents
            .map(
              (event) => `
        <li class="nx-timeline__item">
          <div class="nx-timeline__marker" aria-hidden="true"></div>
          <div class="nx-timeline__content">
            <p class="nx-caption">${event.date}</p>
            <h4 class="nx-h4">${event.label}</h4>
            <p class="nx-body nx-text-secondary">${event.description}</p>
          </div>
        </li>`
            )
            .join("")
        : `<p class="nx-small nx-text-muted">No timeline events recorded yet.</p>`;

      const galleryImages = resolved.media.gallery && resolved.media.gallery.length
        ? resolved.media.gallery
        : [resolved.media.cover, resolved.media.thumbnail].filter(Boolean);
      const gallerySection = document.getElementById("detail-gallery");
      if (galleryImages.length) {
        document.getElementById("detail-gallery-grid").innerHTML = galleryImages
          .map((src, i) => galleryItemHTML(src, `${resolved.title} screenshot ${i + 1}`, i === 0))
          .join("");
      } else {
        gallerySection.hidden = true;
      }

      const related = allProjects.filter((p) => resolved.relatedProjects.includes(p.slug));
      const relatedSection = document.getElementById("detail-related-projects").closest(".nx-detail-section");
      if (related.length) {
        document.getElementById("detail-related-projects").innerHTML = related.map(projectCardHTML).join("");
      } else {
        relatedSection.hidden = true;
      }

      document.getElementById("detail-fact-industry").textContent = capitalize(resolved.industry);
      document.getElementById("detail-fact-service").textContent = resolved.service;
      document.getElementById("detail-fact-design-system").textContent = capitalize(resolved.industry);
      document.getElementById("detail-fact-tier").textContent = capitalize(resolved.tier);
      document.getElementById("detail-fact-difficulty").textContent = capitalize(resolved.difficulty);
      document.getElementById("detail-fact-version").textContent = `v${resolved.version}`;
      document.getElementById("detail-fact-status").textContent = capitalize(resolved.status);
      document.getElementById("detail-fact-price").textContent = TIER_PRICE[resolved.tier] || "—";
      document.getElementById("detail-fact-updated").textContent = resolved.updatedAt;

      // "Open Demo" opens the project's real index.html in a new tab —
      // distinct from Quick Preview, which loads preview.html inside a
      // modal. Neither ever modifies the project itself.
      document.querySelectorAll("#detail-open-demo, #detail-sidebar-open-demo").forEach((btn) => {
        btn.addEventListener("click", () => {
          window.open("../../.." + resolved.demoUrl, "_blank", "noopener");
        });
      });

      // Quick Preview: set the iframe src only when actually opened
      // (not on page load) so the preview page's own assets aren't
      // fetched until the user asks to see it.
      document.querySelectorAll('[data-nx-modal-open="quick-preview-modal"]').forEach((btn) => {
        btn.addEventListener("click", () => {
          const previewPath = "../../.." + resolved.media.preview;
          document.getElementById("quick-preview-frame").src = previewPath;
          document.getElementById("quick-preview-new-tab").href = previewPath;
          document.getElementById("quick-preview-title").textContent = `Quick Preview — ${resolved.title}`;
        });
      });
    } catch (err) {
      document.getElementById("detail-title").textContent = "Project not found";
      document.getElementById("detail-tagline").textContent =
        "If you're viewing this via file://, run a local static server from the project root — browsers block fetch() of local files under file://.";
      console.error("[NEXORA Project Detail]", err);
    }
  }

  init();
})();
