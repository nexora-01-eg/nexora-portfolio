/* ============================================================
   NEXORA — Projects Catalog
   Phase 3.5 routed all data/filter/sort/pagination through the
   shared core modules. Phase 4 finishes wiring the remaining
   filter dimensions (Service, Technology, Difficulty, Version,
   Components, Design System, Collections) into this page's UI —
   the engine already supported all 10; only 3 had checkboxes
   before. This file still only holds page state (which boxes are
   checked, which view mode) and rendering.
   ============================================================ */
(function () {
  "use strict";

  const PAGE_SIZE = 6;

  let allProjects = [];
  let industries = [];
  let collections = [];
  let paginator = null;
  let query = "";
  let criteria = null; // built from core/js/filters.js once it's available
  let sortKey = "newest";
  let view = "grid";

  const grid = document.getElementById("projects-grid");
  const empty = document.getElementById("projects-empty");
  const resultCount = document.getElementById("projects-result-count");
  const paginationNav = document.getElementById("projects-pagination");

  function badgeVariantForStatus(status) {
    return { live: "success", draft: "warning", archived: "neutral" }[status] || "neutral";
  }

  function capitalize(str) {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function projectCardHTML(p) {
    const detailHref = `detail/index.html?slug=${p.slug}`;
    const demoHref = `../..${p.demoUrl}`;
    const previewPath = `../..${p.media.preview}`;
    return `
      <div class="nx-card nx-card--flush nx-card--interactive nx-project-card" role="listitem">
        <a class="nx-project-card__media" href="${detailHref}" style="display: block;" aria-label="Open ${p.title} details">
          <img src="../..${p.media.thumbnail}" alt="" loading="lazy" onerror="window.NEXORA.modules.shell.imageFallback(this, '../../')" />
          <span class="nx-badge nx-badge--${badgeVariantForStatus(p.status)} nx-project-card__status">${p.status}</span>
        </a>
        <div class="nx-project-card__body">
          <p class="nx-caption">${capitalize(p.industry)} · ${p.service}</p>
          <a href="${detailHref}" style="color: inherit; text-decoration: none;">
            <h3 class="nx-h4">${p.title}</h3>
          </a>
          <p class="nx-small nx-clamp-2">${p.tagline}</p>
          <div class="nx-tag-group" style="margin-top: var(--nx-space-3);">
            ${p.technologies.map((t) => `<span class="nx-tag">${t}</span>`).join("")}
          </div>
          <div class="nx-row nx-gap-2" style="margin-top: var(--nx-space-4);">
            <button class="nx-btn nx-btn--secondary nx-btn--sm nx-ripple-host" type="button" data-nx-modal-open="quick-preview-modal" data-preview-path="${previewPath}" data-preview-title="${p.title}">Quick Preview</button>
            <a class="nx-btn nx-btn--ghost nx-btn--sm nx-ripple-host" href="${demoHref}" target="_blank" rel="noopener">Open Demo</a>
          </div>
        </div>
      </div>`;
  }

  function filterOptionsHTML(groupTitle, groupKey, options) {
    return `
      <div class="nx-filter-group">
        <p class="nx-caption nx-filter-group__title">${groupTitle}</p>
        <div class="nx-filter-group__options">
          ${options
            .map(
              (opt) => `
            <label class="nx-checkbox">
              <input type="checkbox" class="nx-checkbox__input" data-filter-group="${groupKey}" value="${opt.value}" />
              <span class="nx-checkbox__box" aria-hidden="true"></span>
              <span class="nx-checkbox__label">${opt.label}</span>
            </label>`
            )
            .join("")}
        </div>
      </div>`;
  }

  function uniqueOptions(values) {
    return [...new Set(values)].sort().map((v) => ({ value: v, label: v.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) }));
  }

  function renderFilters() {
    const knownIndustryIds = new Set(industries.map((i) => i.id));
    const industryOptions = industries.map((i) => ({ value: i.id, label: `${i.label} (${i.projectCount})` }));

    // Mass-imported demos (or anything else without a real industry
    // assigned) get "uncategorized" — without this, those items have
    // no matching filter checkbox anywhere and effectively vanish the
    // moment any industry filter is applied, with no way to select
    // them specifically. Only shown when it actually applies.
    const uncategorizedCount = allProjects.filter((p) => !knownIndustryIds.has(p.industry)).length;
    if (uncategorizedCount > 0) {
      industryOptions.push({ value: "uncategorized", label: `Uncategorized (${uncategorizedCount})` });
    }

    const statusOptions = [
      { value: "live", label: "Live" },
      { value: "draft", label: "Draft" },
      { value: "archived", label: "Archived" },
    ];
    const tierOptions = [
      { value: "starter", label: "Starter" },
      { value: "growth", label: "Growth" },
      { value: "enterprise", label: "Enterprise" },
    ];
    const difficultyOptions = [
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" },
    ];

    // Derived dynamically from whatever projects are actually loaded —
    // never a hardcoded list, so a new project's service/technology/
    // component automatically gets a filter option with zero code changes.
    const serviceOptions = uniqueOptions(allProjects.map((p) => p.service).filter(Boolean));
    const technologyOptions = uniqueOptions(allProjects.flatMap((p) => p.technologies || []));
    const componentOptions = uniqueOptions(allProjects.flatMap((p) => p.componentsUsed || []));
    const versionOptions = uniqueOptions(allProjects.map((p) => p.version).filter(Boolean));
    const designSystemOptions = industries.map((i) => ({ value: i.id, label: i.label }));
    if (uncategorizedCount > 0) {
      designSystemOptions.push({ value: "uncategorized", label: "Uncategorized" });
    }
    const collectionOptions = collections.map((c) => ({ value: c.id, label: c.label }));

    const html =
      filterOptionsHTML("Industry", "industry", industryOptions) +
      filterOptionsHTML("Status", "status", statusOptions) +
      filterOptionsHTML("Tier", "tier", tierOptions) +
      filterOptionsHTML("Service", "service", serviceOptions) +
      filterOptionsHTML("Technology", "technology", technologyOptions) +
      filterOptionsHTML("Difficulty", "difficulty", difficultyOptions) +
      filterOptionsHTML("Version", "version", versionOptions) +
      filterOptionsHTML("Components", "components", componentOptions) +
      filterOptionsHTML("Design System", "designSystem", designSystemOptions) +
      filterOptionsHTML("Collections", "collections", collectionOptions);

    document.getElementById("projects-filters-content").innerHTML = html;
    document.getElementById("projects-filters-mobile").innerHTML = html;
  }

  function matchesQuery(p) {
    // Phase 3.5: text matching goes through the one shared search
    // engine (core/js/search.js via Manifest) instead of this
    // page's own substring check — every page queries the same index.
    if (!query) return true;
    const searchModule = window.NEXORA.modules.search;
    if (!searchModule) return true;
    const matches = searchModule.query(query, { type: "project" });
    return matches.some((m) => m.id === p.id);
  }

  function getFilteredSorted() {
    const manifest = window.NEXORA.modules.manifest;
    const textFiltered = allProjects.filter(matchesQuery);
    const filtered = manifest.filter(textFiltered, criteria);
    return manifest.sort(filtered, sortKey);
  }

  function renderPagination() {
    const totalPages = paginator.pageCount();
    const page = paginator.currentPage();
    if (totalPages <= 1) {
      paginationNav.innerHTML = "";
      return;
    }
    let pagesHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      pagesHTML += `<li><button class="nx-pagination__page${i === page ? " nx-pagination__page--active" : ""}" type="button" data-page="${i}" ${i === page ? 'aria-current="page"' : ""}>${i}</button></li>`;
    }
    paginationNav.innerHTML = `
      <button class="nx-pagination__btn nx-pagination__btn--prev" type="button" aria-label="Previous page" ${page === 1 ? "disabled" : ""}>‹</button>
      <ul class="nx-pagination__list">${pagesHTML}</ul>
      <button class="nx-pagination__btn nx-pagination__btn--next" type="button" aria-label="Next page" ${page === totalPages ? "disabled" : ""}>›</button>
    `;
  }

  function updateResults() {
    const results = getFilteredSorted();
    paginator.setItems(results); // a new result set may invalidate the old page number, so this intentionally resets to page 1
    renderPage();
  }

  function renderPage() {
    const pageItems = paginator.getPageItems();
    const total = paginator.total();

    resultCount.textContent = `${total} project${total === 1 ? "" : "s"} found`;
    grid.classList.toggle("nx-projects-grid--list", view === "list");
    grid.innerHTML = pageItems.map(projectCardHTML).join("");
    empty.hidden = total > 0;
    grid.hidden = total === 0;

    renderPagination();
  }

  async function init() {
    const manifest = window.NEXORA.modules.manifest;
    const filtersModule = window.NEXORA.modules.filters;
    const paginationModule = window.NEXORA.modules.pagination;
    criteria = filtersModule.createCriteria();

    try {
      [allProjects, industries, collections] = await Promise.all([
        manifest.getProjects(),
        manifest.getIndustries(),
        manifest.getCollections(),
        window.NEXORA.modules.search.ensureIndex(),
      ]);
      paginator = paginationModule.create(allProjects, PAGE_SIZE);
      renderFilters();
      updateResults();
    } catch (err) {
      resultCount.textContent = "Could not load projects.";
      empty.hidden = false;
      empty.querySelector(".nx-h4").textContent = "Could not load project data";
      empty.querySelector(".nx-body").textContent =
        "If you're viewing this via file://, run a local static server from the project root — browsers block fetch() of local files under file://.";
      console.error("[NEXORA Projects]", err);
    }
  }

  // ---------- Events ----------
  document.getElementById("projects-search").addEventListener(
    "input",
    debounce((e) => {
      query = e.target.value.trim();
      updateResults();
    }, 200)
  );

  document.getElementById("projects-sort").addEventListener("change", (e) => {
    sortKey = e.target.value;
    updateResults();
  });

  document.querySelectorAll(".nx-view-toggle__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nx-view-toggle__btn").forEach((b) => {
        b.classList.remove("nx-view-toggle__btn--active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("nx-view-toggle__btn--active");
      btn.setAttribute("aria-pressed", "true");
      view = btn.getAttribute("data-view");
      renderPage();
    });
  });

  document.addEventListener("change", (e) => {
    const input = e.target.closest("[data-filter-group]");
    if (!input) return;
    const group = input.getAttribute("data-filter-group");
    const value = input.value;
    // Keep the desktop sidebar and mobile drawer checkboxes in sync
    document.querySelectorAll(`[data-filter-group="${group}"][value="${value}"]`).forEach((el) => (el.checked = input.checked));

    if (input.checked) criteria[group].add(value);
    else criteria[group].delete(value);
    updateResults();
  });

  document.getElementById("projects-clear-filters").addEventListener("click", () => {
    const filtersModule = window.NEXORA.modules.filters;
    query = "";
    criteria = filtersModule.createCriteria();
    document.getElementById("projects-search").value = "";
    document.querySelectorAll("[data-filter-group]").forEach((el) => (el.checked = false));
    updateResults();
  });

  // Quick Preview: delegated on the grid container since cards are
  // re-rendered on every filter/sort/page change — this listener
  // never needs re-binding. Sets the iframe src only on click, so
  // preview pages aren't fetched until actually requested.
  grid.addEventListener("click", (e) => {
    const trigger = e.target.closest('[data-nx-modal-open="quick-preview-modal"]');
    if (!trigger) return;
    document.getElementById("quick-preview-frame").src = trigger.getAttribute("data-preview-path");
    document.getElementById("quick-preview-new-tab").href = trigger.getAttribute("data-preview-path");
    document.getElementById("quick-preview-title").textContent = `Quick Preview — ${trigger.getAttribute("data-preview-title")}`;
  });

  paginationNav.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    const prev = e.target.closest(".nx-pagination__btn--prev");
    const next = e.target.closest(".nx-pagination__btn--next");
    if (btn) paginator.goTo(Number(btn.getAttribute("data-page")));
    if (prev) paginator.previous();
    if (next) paginator.next();
    renderPage();
    document.getElementById("nx-main").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  init();
})();
