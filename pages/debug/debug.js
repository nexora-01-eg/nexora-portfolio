/* ============================================================
   NEXORA — Import Engine Debug Dashboard
   Reads real data through Manifest (same as every other page —
   no separate data path, no duplicated fetch/merge logic) and
   visualizes what the Mass Import Engine actually produced.

   Network-dependent checks (does this file really exist? does
   this link really load?) use fetch(), which — like everywhere
   else in this platform — is blocked by browsers under file://.
   Rather than fake a pass, those checks report "needs a local
   server" honestly. Every other check here is computed purely
   from already-loaded data and is fully accurate regardless of
   how this page was opened.
   ============================================================ */
(function () {
  "use strict";

  let importStartTime = 0;

  function badgeFor(status) {
    if (status === "pass") return `<span class="nx-badge nx-badge--success">✓ Pass</span>`;
    if (status === "fail") return `<span class="nx-badge nx-badge--danger">✕ Fail</span>`;
    if (status === "warn") return `<span class="nx-badge nx-badge--warning">⚠ Warning</span>`;
    return `<span class="nx-badge nx-badge--neutral">needs server</span>`;
  }

  /**
   * Best-effort existence check. Real and accurate when this page
   * is served over HTTP; under file:// fetch() itself throws before
   * ever reaching a real network check, so that case is reported
   * as "unknown", never silently treated as a pass.
   */
  async function checkFileExists(path) {
    try {
      const res = await fetch(path, { method: "HEAD" });
      return res.ok ? "pass" : "fail";
    } catch {
      return "unknown";
    }
  }

  function renderKPIs({ demoItems, realItems, total, importDate }) {
    document.getElementById("kpi-demos").textContent = demoItems.length;
    document.getElementById("kpi-real").textContent = realItems.length;
    document.getElementById("kpi-total").textContent = total;
    document.getElementById("kpi-import-date").textContent = importDate || "—";
  }

  function renderCacheStatus(cacheStatus) {
    document.getElementById("debug-cache-status").innerHTML = cacheStatus
      .map(
        (entry) => `
      <div class="debug-cache-row">
        <span><span class="debug-cache-row__dot" style="background: ${entry.cached ? "var(--nx-color-success)" : "var(--nx-color-gray-500)"};"></span>${entry.key}</span>
        <span class="nx-small nx-text-muted">${entry.cached ? "cached" : "not loaded"}</span>
      </div>`
      )
      .join("");
  }

  function renderStatsPanel(stats) {
    const rows = [
      ["Total Projects", stats.totalProjects],
      ["Industries", stats.industries],
      ["Design Systems", stats.designSystems],
      ["Components", stats.components],
      ["Images (est.)", stats.images],
      ["Completed (live)", stats.completedProjects],
      ["Last Update", stats.lastUpdate],
    ];
    document.getElementById("debug-stats-panel").innerHTML = rows
      .map(([label, value]) => `<div class="debug-stat-row"><span class="nx-text-secondary">${label}</span><span class="nx-body" style="font-weight:var(--nx-fw-medium);">${value}</span></div>`)
      .join("");
  }

  async function renderDemosTable(demoItems) {
    const empty = document.getElementById("debug-demos-empty");
    const tbody = document.getElementById("debug-demos-table");

    if (!demoItems.length) {
      empty.hidden = false;
      tbody.innerHTML = "";
      return;
    }
    empty.hidden = true;

    const rowsHTML = await Promise.all(
      demoItems.map(async (item) => {
        const validation = await checkFileExists(item.demoUrl);
        const collectionsLabel = (item._collectionIds || []).length ? item._collectionIds.join(", ") : "—";
        return `
        <tr>
          <td><code class="debug-mono">${item.demoUrl}</code></td>
          <td><code class="debug-mono">${item.slug}</code></td>
          <td>${item.title}</td>
          <td><span class="nx-tag">${item.industry}</span></td>
          <td class="nx-small">${collectionsLabel}</td>
          <td>${badgeFor(validation)}</td>
          <td>
            <div class="nx-row nx-gap-2">
              <a class="nx-btn nx-btn--secondary nx-btn--sm" href="../..${item.demoUrl}" target="_blank" rel="noopener">Open Demo</a>
              <a class="nx-btn nx-btn--ghost nx-btn--sm" href="../..${item.media.preview}" target="_blank" rel="noopener">Preview</a>
            </div>
          </td>
        </tr>`;
      })
    );
    tbody.innerHTML = rowsHTML.join("");
  }

  function alertHTML(variant, icon, title, message) {
    return `
      <div class="nx-alert nx-alert--${variant}" role="status">
        <span class="nx-alert__icon" aria-hidden="true">${icon}</span>
        <div class="nx-alert__body">
          <p class="nx-alert__title">${title}</p>
          <p class="nx-alert__message">${message}</p>
        </div>
      </div>`;
  }

  function findDuplicateSlugs(allProjects) {
    const seen = new Map();
    allProjects.forEach((p) => seen.set(p.slug, (seen.get(p.slug) || 0) + 1));
    return [...seen.entries()].filter(([, count]) => count > 1).map(([slug]) => slug);
  }

  function findMissingMetadata(allProjects) {
    const required = ["title", "slug", "industry", "createdAt", "updatedAt"];
    const problems = [];
    allProjects.forEach((p) => {
      const missing = required.filter((field) => !p[field]);
      if (missing.length) problems.push({ slug: p.slug, missing });
    });
    return problems;
  }

  async function renderWarnings(allProjects, demoItems) {
    const container = document.getElementById("debug-warnings");
    const html = [];

    const duplicates = findDuplicateSlugs(allProjects);
    if (duplicates.length) {
      html.push(alertHTML("danger", "✕", "Duplicate slugs found", `These slugs appear more than once: ${duplicates.join(", ")}. Every project/demo must have a unique slug.`));
    } else {
      html.push(alertHTML("success", "✓", "No duplicate slugs", "Every project and imported demo has a unique slug."));
    }

    const missingMeta = findMissingMetadata(allProjects);
    if (missingMeta.length) {
      html.push(alertHTML("warning", "!", "Missing required metadata", missingMeta.map((m) => `${m.slug} (missing: ${m.missing.join(", ")})`).join(" · ")));
    } else {
      html.push(alertHTML("success", "✓", "No missing metadata", "Every item has title, slug, industry, and both dates."));
    }

    if (demoItems.length) {
      const results = await Promise.all(demoItems.map((d) => checkFileExists(d.demoUrl)));
      const missingFiles = demoItems.filter((_, i) => results[i] === "fail");
      const unknown = results.filter((r) => r === "unknown").length;
      if (missingFiles.length) {
        html.push(alertHTML("danger", "✕", "Missing demo files", `${missingFiles.map((d) => d.demoUrl).join(", ")} could not be found.`));
      } else if (unknown > 0) {
        html.push(alertHTML("info", "ℹ", "File existence unverified", `${unknown} demo file${unknown === 1 ? "" : "s"} couldn't be checked — this page needs a local server to verify real file existence (expected under file://).`));
      } else {
        html.push(alertHTML("success", "✓", "All demo files found", "Every entry in demos-index.json resolved to a real file."));
      }
    }

    container.innerHTML = html.join("");
  }

  async function runChecks(allProjects, demoItems, industries, collections) {
    const manifest = window.NEXORA.modules.manifest;
    const checks = [];

    // ---- Network-dependent checks ----
    if (demoItems.length) {
      const existResults = await Promise.all(demoItems.map((d) => checkFileExists(d.demoUrl)));
      const anyUnknown = existResults.includes("unknown");
      const anyFail = existResults.includes("fail");
      checks.push({
        label: "Every HTML file exists",
        status: anyFail ? "fail" : anyUnknown ? "unknown" : "pass",
        detail: anyFail ? "One or more demo files are missing." : anyUnknown ? "Needs a local server to verify." : "All files found.",
      });
      checks.push({
        label: "Every Open Demo link works",
        status: anyFail ? "fail" : anyUnknown ? "unknown" : "pass",
        detail: "Same check as file existence — Open Demo links directly to the file.",
      });
      checks.push({
        label: "Every Preview page works",
        status: anyFail ? "fail" : anyUnknown ? "unknown" : "pass",
        detail: "Imported demos use the same file for Preview and Open Demo.",
      });
    } else {
      ["Every HTML file exists", "Every Open Demo link works", "Every Preview page works"].forEach((label) =>
        checks.push({ label, status: "pass", detail: "No imported demos to check yet." })
      );
    }

    // ---- Pure data checks (always accurate) ----
    const duplicates = findDuplicateSlugs(allProjects);
    checks.push({ label: "Every slug is unique", status: duplicates.length ? "fail" : "pass", detail: duplicates.length ? duplicates.join(", ") : "Confirmed across all " + allProjects.length + " items." });

    const idDuplicates = (() => {
      const seen = new Map();
      allProjects.forEach((p) => seen.set(p.id, (seen.get(p.id) || 0) + 1));
      return [...seen.entries()].filter(([, c]) => c > 1);
    })();
    checks.push({ label: "No duplicate IDs", status: idDuplicates.length ? "fail" : "pass", detail: idDuplicates.length ? idDuplicates.map(([id]) => id).join(", ") : "Confirmed." });

    const badPaths = allProjects.filter((p) => !p.demoUrl || !p.demoUrl.startsWith("/"));
    checks.push({ label: "No broken paths", status: badPaths.length ? "fail" : "pass", detail: badPaths.length ? `${badPaths.length} item(s) have a malformed demoUrl.` : "Every demoUrl is a well-formed root-relative path." });

    const missingMeta = findMissingMetadata(allProjects);
    checks.push({ label: "No missing metadata", status: missingMeta.length ? "warn" : "pass", detail: missingMeta.length ? `${missingMeta.length} item(s) missing a required field.` : "Every item has its required fields." });

    if (demoItems.length) {
      const searchResults = await Promise.all(demoItems.map((d) => manifest.search(d.title)));
      const foundAll = demoItems.every((d, i) => searchResults[i].some((r) => r.id === d.id));
      checks.push({ label: "Search index contains every imported demo", status: foundAll ? "pass" : "fail", detail: foundAll ? "Every imported demo is searchable by title." : "One or more imported demos didn't return from a title search." });
    } else {
      checks.push({ label: "Search index contains every imported demo", status: "pass", detail: "No imported demos yet." });
    }

    if (demoItems.length) {
      const allHaveCollections = demoItems.every((d) => Array.isArray(d._collectionIds));
      checks.push({ label: "Collections include imported demos", status: allHaveCollections ? "pass" : "fail", detail: allHaveCollections ? "Every imported demo has computed collection membership (may be empty, which is valid)." : "Some imported demos are missing _collectionIds entirely." });
    } else {
      checks.push({ label: "Collections include imported demos", status: "pass", detail: "No imported demos yet." });
    }

    const stats = await manifest.getStatistics();
    checks.push({ label: "Statistics match the imported count", status: stats.totalProjects === allProjects.length ? "pass" : "fail", detail: `Statistics report ${stats.totalProjects}, actual merged total is ${allProjects.length}.` });

    document.getElementById("debug-tests-table").innerHTML = checks
      .map((c) => `<tr><td>${c.label}</td><td>${badgeFor(c.status)}</td><td class="nx-small nx-text-secondary">${c.detail}</td></tr>`)
      .join("");

    return checks;
  }

  function renderBuildReport({ demoItems, duplicates, missingMetaCount, missingFilesCount, importTimeMs }) {
    const cards = [
      ["Files Imported", demoItems.length],
      ["Successful", demoItems.length - missingFilesCount],
      ["Warnings", missingMetaCount],
      ["Errors", duplicates.length + missingFilesCount],
      ["Duplicates", duplicates.length],
      ["Missing Files", missingFilesCount],
      ["Import Time", `${importTimeMs.toFixed(0)} ms`],
    ];
    document.getElementById("debug-build-report").innerHTML = cards
      .map(([label, value]) => `<div class="nx-card debug-report-card"><p class="debug-report-card__value">${value}</p><p class="nx-caption">${label}</p></div>`)
      .join("");
  }

  async function run() {
    importStartTime = performance.now();
    const manifest = window.NEXORA.modules.manifest;

    const [allProjects, demosIndexRaw, industries, collections] = await Promise.all([
      manifest.getProjects(),
      manifest.get("demosIndex").catch(() => ({ demos: [], updatedAt: null })),
      manifest.getIndustries(),
      manifest.getCollections(),
      window.NEXORA.modules.search.ensureIndex(),
    ]);

    const demoItems = allProjects.filter((p) => p._source === "mass-import");
    const realItems = allProjects.filter((p) => p._source === "discovery");

    renderKPIs({ demoItems, realItems, total: allProjects.length, importDate: demosIndexRaw.updatedAt });
    renderCacheStatus(manifest.getCacheStatus());
    renderStatsPanel(await manifest.getStatistics());

    document.getElementById("debug-search-status").innerHTML = `<span class="nx-badge nx-badge--success">Built</span> covering ${allProjects.length} projects, ${industries.length} industries, and every component.`;

    await renderDemosTable(demoItems);
    await renderWarnings(allProjects, demoItems);
    const checks = await runChecks(allProjects, demoItems, industries, collections);

    const duplicates = findDuplicateSlugs(allProjects);
    const missingMetaCount = findMissingMetadata(allProjects).length;
    const fileResults = demoItems.length ? await Promise.all(demoItems.map((d) => checkFileExists(d.demoUrl))) : [];
    const missingFilesCount = fileResults.filter((r) => r === "fail").length;

    renderBuildReport({
      demoItems,
      duplicates,
      missingMetaCount,
      missingFilesCount,
      importTimeMs: performance.now() - importStartTime,
    });
  }

  document.getElementById("debug-reload-btn").addEventListener("click", () => {
    window.NEXORA.modules.manifest.clearCache();
    window.NEXORA.modules.search.invalidate();
    run();
  });

  run();
})();
