# Card (base)

`nx-card` — the shared shell every specialized card in this
library (KPI, Stats, Metric, Pricing, Feature, Project,
Industry, Design System, Component, Preview) extends. Padding,
border, radius, background, and hover-lift live here once —
specialized cards only add their own internal content layout.

## Usage
```html
<div class="nx-card">
  <h3 class="nx-h4">Title</h3>
  <p class="nx-body nx-text-secondary">Content.</p>
</div>

<a class="nx-card nx-card--interactive" href="#">Whole card is a link</a>
```

## Variants
Static (`div`) · Interactive (`nx-card--interactive`, hover lift + can wrap an `<a>`) · Flush (`nx-card--flush`, no padding — for cards whose content is edge-to-edge media)

## Sizes
No fixed size — sizing/grid placement is the layout's responsibility (`.nx-grid` from `core/css/layout.css`).

## States
Default, hover/focus-visible lift (interactive variant only — border brightens, card rises 2px, shadow appears).

## Accessibility
When interactive, use a real `<a href>` (navigation) or `<button>` (action) as the card element itself — never a `<div>` with a click handler, so it's keyboard-reachable and announced correctly.

## Responsive
No intrinsic breakpoints — inherits whatever grid/flex layout it's placed in.

## Dependencies
`core/css/tokens.css` only. No JS required. Every other card component's CSS builds on top of `.nx-card` — load `card.css` before any specialized card's CSS.
