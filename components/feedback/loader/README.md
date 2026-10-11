# Loader

`nx-loader` — spinner for in-progress async states shorter than
a few seconds. Use Skeleton Loader instead for content placeholders.

## Usage
```html
<span class="nx-loader nx-loader--md" role="status" aria-label="Loading"></span>
```

## Sizes
`nx-loader--sm` · `nx-loader--md` · `nx-loader--lg`

## States
Single animated state. Pair with a text label via `.nx-loader-inline` when the loading context isn't obvious from surrounding UI.

## Accessibility
`role="status"` + `aria-label="Loading"` (or more specific, e.g. "Loading projects") so screen readers announce it once rather than reading the empty spinner element.

## Responsive
Fixed pixel sizes by design (spinners shouldn't reflow with layout).

## Dependencies
`core/css/tokens.css` only. No JS required.
