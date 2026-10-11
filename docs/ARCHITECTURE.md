# NEXORA Portfolio Platform — Architecture

**Status: Phase 4 complete.** The Phase 3.5 architecture (module
boundaries, Page → Manifest → JSON contract, one search/filter/sort/
pagination engine each) remains frozen and unmodified — Phase 4 only
extended it with a real project-discovery engine, a preview system,
and the remaining filter/collection wiring, per its own explicit scope.

## History

| Phase | Delivered |
|---|---|
| 1 — Foundation | Folder structure, design tokens, empty data schemas |
| 2 — Component Library | 55 production components across 7 categories |
| 3 — Portfolio Platform | 7 real pages built from the component library |
| 3.5 — Architecture Refactoring | Centralized data/search/filter/sort/pagination; removed dead code |
| 4 — Demo Library Engine | Real project discovery, Quick Preview/Open Demo, expanded filters/collections, image placeholders, statistics |

## Principles

1. **Zero build step.** Pure HTML5/CSS3/vanilla JS. Every page opens
   directly as a file — no bundler, no Node, no framework. (Pages that
   fetch JSON data need a local static server to do so, since browsers
   block `fetch()` of local files under `file://` — see "Known
   Limitations" below. The pages themselves still open fine either way.)
2. **Data-driven, not code-driven.** Every project, industry, design
   system, component, and collection is an entry in `/data/*.json`.
   Adding the 501st project means adding a JSON entry — never touching
   platform code.
3. **One module owns each concern.** As of Phase 3.5, every
   cross-cutting feature has exactly one implementation, used by every
   page that needs it. See "Data Flow" below for the full picture.
4. **Isolation over coupling.** Each design system in
   `/design-systems/` is self-contained (including its own dormant
   `tokens.css` token-override file — see "Design Systems" below).
   Each project in `/projects/` follows one fixed template shape.
5. **Tokens are the only source of visual truth.** All color,
   spacing, radius, shadow, motion, and z-index values live in
   `core/css/tokens.css`. No other file hardcodes a raw value.

## Folder responsibilities

| Folder             | Responsibility |
|--------------------|-----------------|
| `core/`            | Platform infrastructure: CSS tokens/foundation, JS modules — the only place cross-cutting logic lives |
| `assets/`          | Global, platform-wide images/icons/fonts/animations |
| `data/`            | JSON single source of truth for all dynamic content |
| `pages/`           | Every real page (Home lives at the project root instead) |
| `components/`      | 55 reusable UI components, organized by category |
| `widgets/`         | Reserved for future composite/interactive widgets |
| `projects/`        | `_template/` shape every future demo project follows |
| `industries/`      | Reserved for future industry-specific landing content |
| `design-systems/`  | 14 isolated design-system folders, each with a README and a dormant token-override file |
| `docs/`            | Platform documentation (this file) |

## Module Dependencies

Every page loads the same core stack in the same order, then whatever
component scripts it uses, then its own page script last:

```
core.js            → defines window.NEXORA + register()
storage.js         → localStorage wrapper (no other module touches localStorage directly)
helpers.js         → generic utilities (debounce, slugify, etc.)
theme.js           → dark/light mode, built on storage.js
manifest.js        → THE data layer (see below) — depends on nothing but the network
search.js          → depends on manifest.js (builds its index from it)
filters.js         → standalone pure functions, no dependencies
sort.js            → standalone pure functions, no dependencies
pagination.js      → standalone, no dependencies
favorites.js       → depends on storage.js
animations.js      → standalone (IntersectionObserver)
shell.js           → standalone (scroll progress, loader, ripple, counters)
─────────────────────────────────────────────
[component scripts as needed: navbar.js, drawer.js, tabs.js, command-palette.js, ...]
─────────────────────────────────────────────
[page script: home.js / projects.js / detail.js / industries.js / design-systems.js / collections.js / component-explorer.js]
```

`core.js` runs every registered module's `init()` on `DOMContentLoaded`.
Modules are available for pages to call immediately after their own
script tag runs (registration is synchronous) — pages don't need to
wait for `DOMContentLoaded` to call e.g. `NEXORA.modules.manifest.get()`.

## Data Flow

**The rule: Page → Manifest → JSON. Never Page → JSON.**

No page fetches `/data/*.json` directly. Every page calls a typed
method on `core/js/manifest.js`:

```
Page script
   │
   │  manifest.getProjects() / getIndustries() / getDesignSystems() /
   │  getComponents() / getCollections() / getProject(slug) /
   │  getCollectionProjects(id)
   ▼
core/js/manifest.js
   │  — caches both in-flight requests and resolved data, so concurrent
   │    calls from the same page (or a page + the search index building
   │    in parallel) share one fetch, not one each
   │
   │  fetch("/data/....json")   (root-relative — works from any page depth)
   ▼
/data/*.json
```

`manifest.search()`, `.filter()`, `.sort()`, and `.paginate()` are thin
delegating wrappers — they call into `search.js`, `filters.js`,
`sort.js`, and `pagination.js` respectively rather than reimplementing
any of that logic themselves.

## Manifest Flow

`core/js/manifest.js` is the single source of truth for platform data.

- `loadX()` / `getX()` pairs are identical (the `get*` names exist so
  call sites read as intent — "get the projects I need" vs "load
  the projects source").
- `getProject(idOrSlug)` resolves a single project by either field.
- `getCollectionProjects(id)` resolves a collection definition from
  `collections.json` into its actual matching project list (see
  "Collections" below).
- Absolute root paths (`/data/projects.json`, not `../../data/...`)
  are intentional: the same module works unmodified no matter how
  deeply nested the calling page is.

## Search Flow

**One search engine — `core/js/search.js` — used by every page,
including the Command Palette.**

```
Home, Projects, Industries, Design Systems,
Collections, Components, Command Palette
   │
   │  manifest.search(query)  OR  directly: search.query(query)
   ▼
core/js/search.js
   │  ensureIndex() — builds an in-memory index once, from
   │  Manifest-loaded projects + industries + design systems +
   │  components (never from scraped HTML). Cached after first build;
   │  concurrent calls share one build.
   │
   │  query(q) — normalizes text (case folding, Latin diacritic
   │  stripping, Arabic tashkeel/alef/yaa normalization) so a query
   │  in either script matches consistently, then ranks exact/prefix
   │  label matches above mid-string keyword matches.
   ▼
Ranked results: [{ type, id, label, href, keywords }, ...]
```

`data/search-index.json` is a generated static snapshot of the same
index shape, for documentation/offline reference — it is **not**
hand-edited and is not what pages query at runtime; regenerate it
whenever `projects/industries/design-systems/components.json` change.

The Command Palette renders these results directly (grouped by type)
and navigates to `result.href` on selection — it no longer carries
its own hardcoded, page-specific option lists.

## Filter Flow

**One filter engine — `core/js/filters.js` — used by every page that
filters a list.**

```
Page's own checkbox/select UI state
  (page-local — which boxes are checked is that page's own data,
   not duplicated logic)
   │
   │  criteria = filters.createCriteria()   → { industry: Set, service: Set, ... }
   │  criteria.industry.add("finance")      → page fills it in from its UI
   ▼
manifest.filter(items, criteria)  →  filters.js's apply(items, criteria)
   │  the ONE implementation of "does this project match these
   │  criteria" — AND across filter groups, OR within a group
   ▼
Filtered array
```

10 filter dimensions are supported by the engine (industry, service,
technology, difficulty, tier, status, version, components, design
system, collections). Phase 3.5 centralized the engine but only wired
3 into the Projects catalog's UI (industry, status, tier), per its
own scope ("architecture only, do not add features"). **Phase 4
wired the remaining 7** — Service, Technology, Components, and
Version options are derived dynamically from whatever projects are
actually loaded (never hardcoded), so a new project's own values
automatically get a filter checkbox.

## Sort Flow

**One sort engine — `core/js/sort.js`.** `Sort.apply(items, key)`
supports: `az`, `za`, `newest`, `oldest`, `popular`, `version`,
`price` (tier as a price proxy), `difficulty`, `industry`, `status`.
Every page that sorts a list calls this instead of writing its own
comparator.

## Pagination Flow

**One pagination module — `core/js/pagination.js`.** Two entry
points: `Pagination.slice(items, page, pageSize)` (stateless, for
callers that track their own page number) and
`Pagination.create(items, pageSize)` (a stateful paginator exposing
`next()` / `previous()` / `goTo(n)` / `pageCount()` / `currentPage()`
/ `getPageItems()` / `total()`). The Projects catalog uses the
stateful paginator.

## Routing

There is no client-side router. `core/js/router.js` (a Phase 1
stub with no callers) was removed in Phase 3.5 rather than
integrated, per the explicit "dead modules are forbidden, audit and
either integrate or remove" instruction — every page-to-page
navigation is a plain anchor link and a full page load, which is the
correct fit for a zero-build static site with 7 pages.

## Collections

`data/collections.json` defines every collection as data: an `id`,
`label`, `description`, and a `rule` (`featured`, `latest`,
`popular`, `enterprise`, `favorites`, or `industry` + `industryId`).
`manifest.getCollectionProjects(id)` resolves a definition into its
actual project list. The Collections page itself contains no
hardcoded grouping logic — it asks Manifest for each collection's
resolved list and renders it. Adding a new collection (e.g.
"Retail") is a JSON edit, not a code change.

## Favorites

`core/js/favorites.js` is a complete, working module (`add` /
`remove` / `toggle` / `has` / `list` / `clear`, persisted via
`storage.js`) with **no UI wired to it yet**, per Phase 3.5's
explicit scope — the Collections page's Favorites tab already
reads from it (falling back to the existing empty state when
nothing is favorited), but no star/favorite button exists anywhere
yet. That's the first item under "Ready for Phase 4."

## Design Systems

Each of the 14 `/design-systems/<name>/` folders now has a
`tokens.css` file that overrides exactly three custom properties
(`--nx-accent-primary`, `--nx-accent-hover`, `--nx-accent-muted`)
under a `[data-design-system="<name>"]` scope selector — everything
else is inherited from `core/css/tokens.css` unchanged, and no
component CSS is duplicated anywhere. **These files are not linked
into any live page** — they're architecture-only, ready to be
activated by adding the matching `data-design-system` attribute and
`<link>` tag to a real page in a future phase, without touching this
phase's UI at all.

## Component Library

55 components across `ui/`, `cards/`, `navigation/`, `modals/`,
`forms/`, `media/`, `feedback/` — unchanged since Phase 2, verified
intact this phase. `pages/component-explorer/` is the Storybook-style
browser for all of them, and (as of Phase 3.5) loads the same core
module stack as every other page instead of fetching its own
registry copy.

## Project Discovery Engine (Phase 4)

Every project now lives in its own folder and is discovered
automatically — no page is ever edited to add a project.

```
projects/<industry>/<slug>/
├── project.json     ← the ONLY place this project's data lives
├── index.html        ← the real demo ("Open Demo" opens this, new tab)
├── preview.html       ← a lighter preview ("Quick Preview" opens this, in a modal iframe)
├── README.md
├── gallery/
└── assets/
```

Adding a project means: copy `projects/_template/`, fill in
`project.json`, add one `{ "industry", "slug" }` entry to
`/data/project-index.json`. Nothing else changes — it appears in
Projects, Collections, Industries, Search, and Filters automatically,
because all of those already read from Manifest, and Manifest now
resolves projects by discovery instead of a hand-maintained catalog:

```
manifest.getProjects()
   │
   ▼
/data/project-index.json          ← "which project folders exist" (the one
   │                                 file touched when adding a project)
   │  for each { industry, slug } entry:
   ▼
/projects/<industry>/<slug>/project.json   ← that project's actual data
   │
   ▼
normalizeProject() — computes media paths (thumb.webp, cover.webp,
   gallery/, index.html, preview.html) BY CONVENTION from the folder
   path. No project.json ever repeats a file path.
   │
   ▼
Full project objects, cached — same shape every page already consumed
```

`/data/projects.json` (the Phase 3 monolithic catalog) is kept only
as a deprecated historical artifact — nothing reads it anymore.

Every project is also enriched with `_collectionIds` (which
collections it belongs to, computed once during loading) — this is
what Filters.js's "Collections" dimension reads, and what fixed a
real gap: the field existed in the filter engine since Phase 3.5 but
nothing had ever populated it until now.

## Preview System (Phase 4)

Every project card and the Project Details page offer two distinct,
non-destructive actions, neither of which ever modifies the project:

- **Quick Preview** — opens the project's own `preview.html` inside
  the existing Modal component (an iframe), lazy-loaded (the iframe's
  `src` is only set on click, not on page load).
- **Open Demo** — opens the project's own `index.html` in a new tab.

Both are wired at the page level (`projects.js`, `detail.js`) using
the Modal component exactly as built in Phase 2 — no component file
was touched.

## Filters — finished (Phase 4)

All 10 dimensions Filters.js has supported since Phase 3.5 are now
wired into the Projects catalog's UI (previously only 3 were):
Industry, Service, Technology, Difficulty, Tier, Status, Version,
Components, Design System, Collections. Service/Technology/
Components/Version options are derived dynamically from whatever
projects are actually loaded — never a hardcoded list — so a new
project's own service or tech stack automatically gets a filter
checkbox with zero code changes.

## Collections — expanded (Phase 4)

`/data/collections.json` now defines 16 collections (up from 10),
adding two new rule types beyond Phase 3.5's `featured` / `latest` /
`popular` / `enterprise` / `favorites` / `industry`:

- `service` — membership by exact `service` field match (used for "CRM")
- `tag` — membership by tag presence (used for "Dashboard", "Landing
  Pages", "Websites")

The Collections page itself needed zero code changes to support
these — it already rendered whatever `manifest.getCollections()`
returned, which is exactly the payoff Phase 3.5's data-driven design
was built for.

## Image Placeholder System (Phase 4)

Every thumbnail/cover/gallery `<img>` across every page now falls
back to a shared placeholder graphic (`assets/images/placeholder.svg`)
on load failure, via `Shell.imageFallback(img, relPrefix)` — a small
addition to the existing `core/js/shell.js` (which already owned
cross-cutting page chrome). Previously a missing image just hid
itself; now it shows a clean, on-brand placeholder, which matters
because none of the 12 example projects have real photography yet —
this is the normal path, not an edge case.

## Statistics (Phase 4)

`manifest.getStatistics()` computes total projects, industries,
design systems, components, images, completed (live) projects, and
last-update date entirely from loaded data — nothing hardcoded. It's
built and tested but not wired into the homepage's hero counters,
which are intentionally aspirational platform-scale figures
("500+ Demo Projects") rather than today's literal count; wiring a
real live count into a visible page is a Phase 5 UI decision, not
made unilaterally here per "do not redesign existing pages."

## Virtual List (Phase 4)

`core/js/virtual-list.js` is a new, genuinely reusable module for
incremental batch-rendering of large grids (renders a batch, then the
next as an `IntersectionObserver` sentinel scrolls into view) — built
for pages that want infinite-scroll instead of numbered pages. It is
registered but **not currently wired into any page**: the Projects
catalog already scales via Pagination (a proven, working strategy at
any size), so Virtual List is available rather than forced in where
it isn't yet needed. Honest status, not overclaimed.

## Known Limitations

- **`fetch()` under `file://`**: every data-driven page needs a
  local static server (`npx serve`, `python3 -m http.server`, etc.)
  from the project root to load `/data/*.json` and every project's
  own `project.json`. Static markup still displays correctly opened
  directly via `file://`; only dynamic content needs a server. This
  has been true since Phase 1's `manifest.js` and is unchanged.
- **No real image assets yet** — every thumbnail/cover/gallery is
  genuinely missing for all 12 example projects; the Phase 4 image
  placeholder system (`Shell.imageFallback`) now shows a clean shared
  graphic instead of hiding the broken image, which is the intended
  long-term behavior, not a stopgap.
- **Discovery is one extra fetch per project**: loading the catalog
  now means 1 request for `project-index.json` + N requests (one per
  project's own `project.json`), run in parallel and cached after the
  first load. At 12 projects this is instant; at 500+ it's the
  scalability tradeoff explicitly accepted in exchange for true
  per-project isolation — see the Scalability Report delivered
  alongside this document for the threshold where that tradeoff
  should be revisited (e.g. a build step that pre-aggregates
  project.json files into one cached bundle).
- **Favorites-based collection membership can go stale within a
  session**: `_collectionIds` is computed once when projects first
  load and cached: if a user toggles a favorite (once that UI exists
  — see Phase 3.5's note that Favorites has no UI yet), the
  Favorites collection's membership won't reflect it until the cache
  is cleared. Low-impact today since nothing toggles favorites yet.

## What's Ready for Phase 5

See the "Files Changed" report delivered alongside this document
for the full list.
