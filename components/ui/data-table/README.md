# Data Table

`nx-data-table` — extends the base Table with sortable column
headers. For very large datasets, pair with the Pagination
component and slice/fetch rows per page at the page level
(sorting the full dataset client-side and paginating server-side
are both reasonable — pick based on data volume).

## Usage
```html
<table class="nx-table nx-data-table" data-nx-data-table>
  <thead>
    <tr><th><button class="nx-data-table__sort" data-sort="text">Name <span aria-hidden="true">↕</span></button></th></tr>
  </thead>
  <tbody><tr><td>Row value</td></tr></tbody>
</table>
<script src="data-table.js"></script>
```
For numeric columns, add `data-value="1204"` on the `<td>` so sorting compares numbers, not the formatted text ("1,204").

## Variants
Text sort · Numeric sort (`data-sort="text"|"number"` on the header button)

## Sizes
Inherits Table's sizing.

## States
Unsorted → ascending → descending, cycling on each header click; only one column sorted at a time.

## Accessibility
Sort buttons are real `<button>`s inside `<th>`; the current sort direction is exposed via `aria-sort="ascending"|"descending"` on the `<th>` itself, per the standard pattern for accessible sortable tables.

## Responsive
Inherits Table's horizontal-scroll wrapper.

## Dependencies
`core/css/tokens.css`, Table component CSS (`.nx-table`, `.nx-table-wrap`). `data-table.js` required for sorting.
