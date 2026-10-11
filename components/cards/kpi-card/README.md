# KPI Card

`nx-kpi-card` — single headline metric with a trend badge, for
dashboard-style summary rows. Extends `.nx-card`.

## Usage
```html
<div class="nx-card nx-kpi-card">
  <div class="nx-kpi-card__header">
    <span class="nx-caption">Active Projects</span>
    <span class="nx-badge nx-badge--success">+12%</span>
  </div>
  <p class="nx-kpi-card__value">248</p>
  <p class="nx-small">vs. 221 last month</p>
</div>
```

## Variants
Plain number · With unit suffix (`.nx-kpi-card__unit`, e.g. "1.2s")

## Sizes
Value font-size is fixed at `--nx-fs-700`; place inside `.nx-grid--3`/`--4` for a KPI row.

## States
Static display; trend badge color (success/danger via Badge variants) communicates direction.

## Accessibility
Trend badge text should always include the direction/sign ("+12%", not just a colored arrow icon) since color alone isn't sufficient.

## Responsive
Inherits Card's no-intrinsic-sizing — place in `.nx-grid--auto` for automatic reflow across breakpoints.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS, Badge component CSS for the trend indicator.
