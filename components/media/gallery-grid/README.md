# Gallery Grid

`nx-gallery-grid` — responsive image grid for project galleries.
Pair each item with the Image Preview component's lightbox for
click-to-expand behavior.

## Usage
```html
<div class="nx-gallery-grid" role="list" aria-label="Project gallery">
  <figure class="nx-gallery-grid__item" role="listitem">
    <img src="..." alt="Descriptive text" loading="lazy" />
  </figure>
  <figure class="nx-gallery-grid__item nx-gallery-grid__item--wide" role="listitem">
    <img src="..." alt="Descriptive text" loading="lazy" />
  </figure>
</div>
```

## Variants
Standard item (1 column) · `nx-gallery-grid__item--wide` (spans 2 columns, for a hero-style gallery image)

## Sizes
3-column desktop grid, drops to 2 columns at 768px, single column at 480px.

## States
Subtle zoom-on-hover (`scale(1.04)`) as a hover affordance, respects `prefers-reduced-motion`.

## Accessibility
Grid uses `role="list"`/`role="listitem"` since `<figure>` doesn't carry list semantics on its own. Every image requires real, descriptive `alt` text — never left empty for content images. `loading="lazy"` on every image, since galleries are typically long.

## Responsive
3 → 2 → 1 column breakpoints; the wide item collapses to a normal single-column span on mobile so nothing overflows.

## Dependencies
`core/css/tokens.css` only. Pair with Image Preview's lightbox JS for click-to-expand — this component provides the grid layout only.
