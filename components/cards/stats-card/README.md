# Stats Card

`nx-stats-card` — multiple side-by-side numbers in one card
(e.g. platform-wide totals). Use KPI Card instead for a single
headline metric with a trend indicator. Extends `.nx-card`.

## Usage
```html
<div class="nx-card nx-stats-card">
  <div class="nx-stats-card__stat">
    <p class="nx-stats-card__number">500+</p>
    <p class="nx-caption">Demo Projects</p>
  </div>
</div>
```

## Variants
2–4 stats per card is the practical range before it gets cramped; beyond that, use a `.nx-grid` of individual KPI Cards instead.

## Sizes
Numbers fixed at `--nx-fs-600`; dividers between stats via border, not extra card nesting.

## States
Static display.

## Accessibility
Each number+label pair should read sensibly in DOM order for screen readers ("500+, Demo Projects", not just the numbers in isolation).

## Responsive
Row layout with vertical dividers on desktop; stacks to a column with horizontal dividers under 480px.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-caption`), Card base CSS.
