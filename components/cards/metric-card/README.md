# Metric Card

`nx-metric-card` — icon + single value, horizontal layout.
Simpler and more compact than KPI Card (which is vertical and
trend-focused) — use Metric Card for icon-led stat displays
in a sidebar or dense grid. Extends `.nx-card`.

## Usage
```html
<div class="nx-card nx-metric-card">
  <div class="nx-metric-card__icon" aria-hidden="true">◎</div>
  <div>
    <p class="nx-metric-card__value">92%</p>
    <p class="nx-small nx-text-secondary">Client satisfaction</p>
  </div>
</div>
```

## Variants
Icon can be a text glyph (as shown) or swapped for an SVG icon from `/assets/icons/`.

## Sizes
Icon box fixed at 48px; value text at `--nx-fs-500`.

## States
Static display.

## Accessibility
Icon is decorative (`aria-hidden="true"`) — the value + label text carry the actual meaning.

## Responsive
No intrinsic breakpoints — flexes naturally within its grid cell.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS.
