/* ============================================================
   NEXORA — Command Palette
   Phase 3.5: results are rendered from the platform's one
   search engine (core/js/search.js via Manifest.search()) —
   this component no longer filters a static, hardcoded list.
   Every page's palette now searches the same live project/
   industry/design-system/component data and navigates directly
   on selection. Opens via trigger click or Cmd/Ctrl+K. Arrow
   keys move a roving highlight, Enter activates, Escape closes.
   ============================================================ */
(function () {
  "use strict";

  const overlay = document.querySelector("[data-nx-command-palette]");
  if (!overlay) return;

  const input = overlay.querySelector(".nx-command__input");
  const list = overlay.querySelector(".nx-command__list");
  let lastFocused = null;

  const TYPE_LABELS = {
    project: "Projects",
    industry: "Industries",
    "design-system": "Design Systems",
    component: "Components",
  };

  function options() {
    return Array.from(list.querySelectorAll('[role="option"]'));
  }

  function highlight(index) {
    const opts = options();
    opts.forEach((o) => o.removeAttribute("aria-selected"));
    if (opts[index]) {
      opts[index].setAttribute("aria-selected", "true");
      opts[index].scrollIntoView({ block: "nearest" });
    }
  }

  function renderResults(results) {
    if (!results.length) {
      list.innerHTML = `<li class="nx-command__empty">No results found.</li>`;
      return;
    }

    let html = "";
    let lastType = null;
    results.forEach((r) => {
      if (r.type !== lastType) {
        html += `<li class="nx-command__group-label" role="presentation">${TYPE_LABELS[r.type] || r.type}</li>`;
        lastType = r.type;
      }
      html += `<li class="nx-command__option" role="option" tabindex="-1" data-href="${r.href}">${r.label}</li>`;
    });
    list.innerHTML = html;
    highlight(0);
  }

  async function runQuery(query) {
    const manifest = window.NEXORA.modules.manifest;
    if (!manifest) return;
    await manifest.search(""); // ensures the index is built (no-op if already built)
    const searchModule = window.NEXORA.modules.search;
    const results = query.trim() ? searchModule.query(query) : searchModule.query("", { limit: 8 });
    renderResults(results);
  }

  async function open() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    list.innerHTML = `<li class="nx-command__empty">Loading…</li>`;
    input.focus();
    await runQuery("");
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    lastFocused?.focus();
  }

  function selectOption(option) {
    const href = option.getAttribute("data-href");
    overlay.dispatchEvent(new CustomEvent("nx:command-select", { bubbles: true, detail: { value: option.textContent, href } }));
    close();
    if (href) window.location.href = toRelativeHref(href);
  }

  /**
   * Search results carry site-root-relative hrefs (e.g.
   * "/pages/projects/detail/index.html?slug=x"), since the index
   * is built once and shared by every page regardless of depth.
   * This resolves one to a real relative URL from wherever the
   * palette was opened: go up to the site root, then back down
   * through the full root-relative path. Always correct,
   * regardless of how much of the path the current page shares.
   */
  function toRelativeHref(href) {
    const currentDir = window.location.pathname.replace(/[^/]*$/, "");
    const depth = currentDir.split("/").filter(Boolean).length;
    return "../".repeat(depth) + href.replace(/^\//, "");
  }

  document.querySelectorAll("[data-nx-command-trigger]").forEach((trigger) =>
    trigger.addEventListener("click", open)
  );

  document.addEventListener("keydown", (e) => {
    const isMeta = e.metaKey || e.ctrlKey;
    if (isMeta && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay.hidden ? open() : close();
      return;
    }
    if (overlay.hidden) return;

    if (e.key === "Escape") close();

    const opts = options();
    const currentIndex = opts.findIndex((o) => o.getAttribute("aria-selected") === "true");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlight((currentIndex + 1) % opts.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlight((currentIndex - 1 + opts.length) % opts.length);
    } else if (e.key === "Enter" && opts[currentIndex]) {
      selectOption(opts[currentIndex]);
    }
  });

  input.addEventListener(
    "input",
    debounce(() => runQuery(input.value), 120)
  );

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
    const option = e.target.closest('[role="option"]');
    if (option) selectOption(option);
  });

  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
})();
