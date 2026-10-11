# Checkbox

`nx-checkbox` — custom-styled checkbox built on a real, visually-hidden `<input type="checkbox">` for native semantics and keyboard support.

## Usage
```html
<label class="nx-checkbox">
  <input type="checkbox" class="nx-checkbox__input" name="terms" />
  <span class="nx-checkbox__box" aria-hidden="true"></span>
  <span class="nx-checkbox__label">I agree to the terms</span>
</label>
```

## Variants
Single visual style; label text is always required (visible, not just `aria-label`, unless it's genuinely a standalone control with an icon label elsewhere).

## Sizes
Single size — 20px box, matches the input touch-target guidance.

## States
Unchecked, checked (checkmark), indeterminate (dash — set via `input.indeterminate = true` in JS, wire with `checkbox.js` + `data-nx-indeterminate`), disabled, `:focus-visible`.

## Accessibility
Uses a real `<input>` (visually hidden, not `display:none`, so it stays in the accessibility tree and tab order) — the custom box is `aria-hidden="true"` and purely decorative. Label wraps both, so clicking anywhere toggles the box.

## Responsive
Inline-flex — wraps naturally in any layout.

## Dependencies
`core/css/tokens.css` only for the default checked/unchecked states. `checkbox.js` only needed for indeterminate checkboxes.
