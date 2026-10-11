# Breadcrumbs

`nx-breadcrumbs` — hierarchical location trail.

## Usage
```html
<nav class="nx-breadcrumbs" aria-label="Breadcrumb">
  <ol class="nx-breadcrumbs__list">
    <li><a class="nx-breadcrumbs__link" href="/">Home</a></li>
    <li><span class="nx-breadcrumbs__sep" aria-hidden="true">/</span><span class="nx-breadcrumbs__current" aria-current="page">Current Page</span></li>
  </ol>
</nav>
```

## Variants
Single style.

## Sizes
Single size; wraps to multiple lines on narrow screens rather than truncating (`flex-wrap: wrap`).

## States
Link (hover-responsive) vs. current page (`aria-current="page"`, not a link).

## Accessibility
Wrapped in `<nav aria-label="Breadcrumb">`, using an ordered list (`<ol>`) since sequence matters. Separators are `aria-hidden="true"` decorative characters; the actual hierarchy is conveyed by DOM order, not the separator glyph.

## Responsive
Wraps naturally via flexbox; for very deep hierarchies, consider truncating middle items with an ellipsis menu at the call site (Phase 3 concern).

## Dependencies
`core/css/tokens.css` only. No JS required.
