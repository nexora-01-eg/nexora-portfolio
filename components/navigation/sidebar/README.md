# Sidebar

`nx-sidebar` — persistent vertical navigation for browsing a
section or library (e.g. project categories, component
categories).

## Usage
```html
<aside class="nx-sidebar" aria-label="Section navigation">
  <nav>
    <p class="nx-caption">Library</p>
    <ul class="nx-sidebar__list">
      <li><a class="nx-sidebar__link nx-sidebar__link--active" href="#" aria-current="page">All Projects</a></li>
    </ul>
  </nav>
</aside>
```

## Variants
Single style; supports multiple grouped sections via repeated `.nx-caption` + `.nx-sidebar__list` pairs.

## Sizes
Fixed `width: 260px` on desktop; full-width on narrow viewports (see Responsive).

## States
Default, hover, active (`nx-sidebar__link--active` + `aria-current="page"` — accent-colored with a left border indicator, not color alone).

## Accessibility
Wrapped in `<aside aria-label="Section navigation">` as a distinct landmark from Navbar's `<nav aria-label="Primary">`. Active state indicated by both color and a border, not color alone.

## Responsive
Below 1024px, switches from a fixed-width side column to a full-width top block (pairs naturally with a mobile layout that stacks sidebar above content) — this is a pure CSS reflow, no JS needed.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-caption`). No JS required.
