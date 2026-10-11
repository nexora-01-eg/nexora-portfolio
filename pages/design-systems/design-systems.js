/* ============================================================
   NEXORA — Design Systems
   Phase 3.5: data comes through Manifest (not a raw fetch).
   Rendering logic (grid + colors/typography/components drawer)
   is unchanged from Phase 3.
   ============================================================ */
(function () {
  "use strict";

  const PALETTE = [
    { name: "Black", varName: "--nx-color-black" },
    { name: "Dark Gray", varName: "--nx-color-dark-gray-900" },
    { name: "Gold", varName: "--nx-color-gold-500" },
    { name: "White", varName: "--nx-color-white" },
  ];

  let designSystems = [];

  function cardHTML(ds) {
    return `
      <button class="nx-card nx-card--interactive nx-design-system-card" type="button" data-ds-id="${ds.id}" data-nx-drawer-open="ds-detail-drawer" role="listitem" style="text-align: left; width: 100%;">
        <div class="nx-design-system-card__swatches" aria-hidden="true">
          <span style="background: var(--nx-color-black);"></span>
          <span style="background: var(--nx-color-dark-gray-900);"></span>
          <span style="background: var(--nx-color-gold-500);"></span>
          <span style="background: var(--nx-color-white);"></span>
        </div>
        <h3 class="nx-h4">${ds.label}</h3>
        <p class="nx-small nx-text-secondary">${ds.componentCount} components · ${ds.status}</p>
      </button>`;
  }

  function populateDrawer(ds) {
    document.getElementById("ds-detail-title").textContent = ds.label;
    document.getElementById("ds-detail-colors").innerHTML = PALETTE.map(
      (c) => `<div class="nx-ds-swatch-row"><span class="nx-ds-swatch" style="background: var(${c.varName});"></span><span class="nx-small">${c.name}</span></div>`
    ).join("");
    document.getElementById("ds-detail-component-count").textContent =
      ds.componentCount > 0
        ? `${ds.componentCount} components are defined for this design system.`
        : "No system-specific component overrides yet — this design system currently inherits every component from the shared library unmodified.";
    document.getElementById("ds-detail-open").href = `../projects/index.html`;
  }

  // drawer.js (loaded before this script) already handles the actual
  // open/close/focus-trap mechanics via [data-nx-drawer-open] — this
  // listener only fills in the drawer's content for the clicked system.
  document.getElementById("ds-grid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-ds-id]");
    if (!card) return;
    const ds = designSystems.find((d) => d.id === card.getAttribute("data-ds-id"));
    if (ds) populateDrawer(ds);
  });

  async function init() {
    const manifest = window.NEXORA.modules.manifest;
    try {
      designSystems = await manifest.getDesignSystems();
      document.getElementById("ds-count").textContent = `${designSystems.length} isolated design systems, one per industry vertical`;
      document.getElementById("ds-grid").innerHTML = designSystems.map(cardHTML).join("");
    } catch (err) {
      document.getElementById("ds-count").textContent = "Could not load design systems.";
      console.error("[NEXORA Design Systems]", err);
    }
  }

  init();
})();
