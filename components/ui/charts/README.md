# Charts (UI only)

Pure SVG/CSS chart shells — line, bar, donut — with no charting
library, per Phase 2 scope ("Charts — UI only"). These are
visual primitives, not a data-binding engine: generate the same
`points`/`--nx-bar-value`/`--nx-progress-value` values from real
data at the page level.

## Usage
Line:
```html
<svg viewBox="0 0 300 100" class="nx-chart__svg" preserveAspectRatio="none">
  <polyline class="nx-chart__line" points="0,80 50,70 100,60 ..." />
</svg>
```
Bar:
```html
<div class="nx-chart__bars">
  <div class="nx-chart__bar" style="--nx-bar-value: 60%;"><span class="nx-caption">Label</span></div>
</div>
```
Donut: same technique as Progress's circular variant — see `.nx-chart__donut`.

## Variants
Line (polyline) · Horizontal bar (`--nx-bar-value` 0–100%) · Donut (`--nx-progress-value` 0–100, same mechanism as `nx-progress-circle`)

## Sizes
Line: `viewBox="0 0 300 100"`, scales via CSS width/height. Bars: fixed 8px height. Donut: 64×64px.

## States
Static display — values are set once per render. Animated width/dashoffset transition when values change (e.g. re-rendering with new data).

## Accessibility
Every chart wrapper needs `role="img"` + a descriptive `aria-label` that states the actual data trend/values in words (see examples) — SVG shapes convey nothing to screen readers on their own. For charts with legends or exact values that matter, also provide an adjacent visually-hidden data table (Phase 3 enhancement) rather than relying on the aria-label alone for complex datasets.

## Responsive
Line chart's `viewBox` + `preserveAspectRatio="none"` scales to its container's width. Bar/donut are intrinsically sized.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-caption`). No JS required — these are pure CSS/SVG shells; a page renders new `points`/CSS-variable values when data changes.
