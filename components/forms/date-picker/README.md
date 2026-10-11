# Date Picker (UI only)

Two variants: styled native `<input type="date">` (preferred —
gets the OS date picker for free) and a custom trigger+popover
shell (`.nx-date-picker`) whose panel hosts the Calendar
component for full custom date-grid rendering.

## Usage
Native (preferred):
```html
<input class="nx-input nx-date-input" type="date" />
```
Custom shell + Calendar:
```html
<div class="nx-date-picker" data-nx-date-picker>
  <button class="nx-date-picker__trigger" aria-haspopup="dialog" aria-expanded="false">...</button>
  <div class="nx-date-picker__panel" role="dialog" hidden>
    <!-- insert Calendar component markup here -->
  </div>
</div>
<script src="date-picker.js"></script>
```

## Variants
Native input · Custom popover shell (date-grid logic lives in the Calendar component, not here)

## Sizes
Single size, `width: 100%` for the native variant.

## States
Native: relies entirely on the OS picker's own states. Custom: closed/open panel.

## Accessibility
Native `<input type="date">` gets full OS-level accessibility for free — **prefer it whenever a full custom calendar UI isn't a hard requirement**. The custom shell uses `aria-haspopup="dialog"` + `aria-expanded`, closes on outside click and Escape (returning focus to the trigger).

## Responsive
`color-scheme: dark`/`light` keeps the native picker's own chrome matching the active theme. Custom panel is positioned absolutely under the trigger — reposition logic for edge-of-viewport cases is a Phase 3 concern.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-scale-in`). Pair the custom panel with the Calendar component. `date-picker.js` required only for the custom variant.
