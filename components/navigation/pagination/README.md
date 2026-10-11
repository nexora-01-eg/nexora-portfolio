# Pagination

`nx-pagination` — page navigation for long lists (project grids, tables).

## Usage
```html
<nav class="nx-pagination" aria-label="Pagination" data-nx-pagination>
  <button class="nx-pagination__btn nx-pagination__btn--prev" aria-label="Previous page" disabled>‹</button>
  <ul class="nx-pagination__list">
    <li><button class="nx-pagination__page nx-pagination__page--active" aria-current="page">1</button></li>
    <li><button class="nx-pagination__page">2</button></li>
  </ul>
  <button class="nx-pagination__btn nx-pagination__btn--next" aria-label="Next page">›</button>
</nav>
<script src="pagination.js"></script>
```

## Variants
Numbered pages with ellipsis truncation for long ranges (`.nx-pagination__ellipsis`).

## Sizes
36×36px touch targets for every button/page.

## States
Active page (gold fill + `aria-current="page"`), disabled prev/next at range boundaries, hover.

## Accessibility
Wrapped in `<nav aria-label="Pagination">`. Active page uses `aria-current="page"`. Prev/Next buttons have explicit `aria-label`s since they're icon-only.

## Responsive
Under 480px, only the active page number stays visible (prev/next remain) to avoid an unusably cramped row — full page-number list returns above that breakpoint.

## Dependencies
`core/css/tokens.css`. `pagination.js` handles active-state switching and dispatches `nx:page-change` — actual data fetching/rendering for the new page is a page-level concern.
