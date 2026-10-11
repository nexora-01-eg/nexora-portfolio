# Calendar (UI only)

`nx-calendar` — month-grid date display/picker. This is a UI
scaffold: it defines the structure, states, and selection
interaction, but does not compute real month data (which day of
the week a month starts on, days-in-month, leap years, etc.) —
that's page-level date logic, out of scope for a static
component library.

## Usage
```html
<div class="nx-calendar" role="application" aria-label="Calendar">
  <div class="nx-calendar__header">
    <button class="nx-calendar__nav" aria-label="Previous month">‹</button>
    <p class="nx-calendar__title" aria-live="polite">July 2026</p>
    <button class="nx-calendar__nav" aria-label="Next month">›</button>
  </div>
  <table class="nx-calendar__grid" role="grid">...</table>
</div>
<script src="calendar.js"></script>
```

## Variants
Single style — pairs with Date Picker's popover shell for a full picker.

## Sizes
`max-width: 320px`.

## States
Muted (adjacent-month day), today (`--today`, gold outline), selected (`aria-selected="true"`, gold fill).

## Accessibility
`role="application"` + `role="grid"` for the month table, `aria-current="date"` on today, `aria-live="polite"` on the month/year title so screen readers announce month navigation. Days are real `<button>`s inside `<td>` for keyboard operability.

## Responsive
Fixed max-width, scales down within narrower containers.

## Dependencies
`core/css/tokens.css`. `calendar.js` handles selection only — month-grid population/navigation logic is a page-level responsibility in Phase 2+.
