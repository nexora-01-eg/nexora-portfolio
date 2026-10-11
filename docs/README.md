# NEXORA Portfolio Platform

Enterprise Demo Library — an Enterprise Demo Library platform built
to eventually host 500+ demo projects across 20+ industries, 100+
design systems, and 1000+ reusable components.

Open `index.html` directly in a browser to see the static UI. Pages
that load live data (Projects, Industries, Design Systems,
Collections, Project Details, Components) need a local static
server to fetch `/data/*.json` — browsers block `fetch()` of local
files under `file://`. From the project root:

```
npx serve
# or
python3 -m http.server
```

Then open the server's URL instead of the file directly.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full architecture
report: module dependencies, data/search/filter/sort/pagination
flow diagrams, and folder responsibilities.

## Status

**Phase 4 — Demo Library Engine. Complete.**

| Phase | Status |
|---|---|
| 1 — Foundation | ✔ Complete |
| 2 — Component Library (55 components) | ✔ Complete |
| 3 — Portfolio Platform (7 pages) | ✔ Complete |
| 3.5 — Architecture Refactoring | ✔ Complete |
| 4 — Demo Library Engine | ✔ Complete |
| 5 — next | Not started |

The Phase 3.5 architecture remains frozen and unmodified; Phase 4
extended it with real project discovery (12 example projects, each
in its own folder, auto-populating every catalog/collection/filter/
search view), a Quick Preview / Open Demo system, and the remaining
7 filter dimensions.

## Pages

- `/index.html` — Home
- `/pages/projects/` — Projects catalog
- `/pages/projects/detail/` — Project details
- `/pages/industries/` — Industries
- `/pages/design-systems/` — Design Systems
- `/pages/component-explorer/` — Components (Storybook-style browser)
- `/pages/collections/` — Collections
