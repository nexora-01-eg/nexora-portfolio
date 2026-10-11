# Table

`nx-table` — static tabular data display. See Data Table for
the sortable/paginated interactive version.

## Usage
```html
<div class="nx-table-wrap">
  <table class="nx-table">
    <caption class="nx-sr-only">Table description</caption>
    <thead><tr><th scope="col">Column</th></tr></thead>
    <tbody><tr><td>Value</td></tr></tbody>
  </table>
</div>
```

## Variants
Single style. Cells can host other components (Badge shown in the example) for richer display.

## Sizes
Row padding is fixed (`--nx-space-4`); a `--compact` density modifier can be added in Phase 3.

## States
Row hover highlight.

## Accessibility
Real `<table>` markup with `scope="col"` on headers and a `<caption>` (visually hidden via `.nx-sr-only` when a visible section title already exists above the table) so screen readers announce the table's purpose.

## Responsive
Wrapped in `.nx-table-wrap` with horizontal scroll (`overflow-x: auto`) rather than collapsing columns — preserves the table's data relationships at any viewport width.

## Dependencies
`core/css/tokens.css`, `core/css/base.css` (`.nx-sr-only`). No JS required.
