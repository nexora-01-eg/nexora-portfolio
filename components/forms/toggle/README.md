# Toggle

`nx-toggle` — on/off switch, following the
[WAI-ARIA Switch pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).
Use Checkbox instead for form selections (multiple choices from a set); use Toggle for immediate settings (dark mode, notifications on/off).

## Usage
```html
<label class="nx-toggle">
  <input type="checkbox" class="nx-toggle__input" role="switch" aria-checked="false" />
  <span class="nx-toggle__track" aria-hidden="true"><span class="nx-toggle__thumb"></span></span>
  <span class="nx-toggle__label">Dark mode</span>
</label>
```
Keep `aria-checked` in sync with `checked` from your page JS when toggling programmatically (native click/keyboard toggling already updates both).

## Variants
Single visual style.

## Sizes
Single size — 40×22px track.

## States
Off, on (thumb slides + track fills gold), disabled, `:focus-visible`.

## Accessibility
Built on `<input type="checkbox">` with `role="switch"` — this is the WAI-ARIA-recommended approach (native checkbox semantics + switch role override) since a plain checkbox reads as "checkbox" not "switch" to screen readers. Label text is required and visible.

## Responsive
Inline-flex — wraps naturally.

## Dependencies
`core/css/tokens.css` only. No JS required for the toggle itself (native input handles the click/keyboard state).
