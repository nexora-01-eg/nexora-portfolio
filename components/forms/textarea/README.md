# Textarea

`nx-textarea` — multi-line text field, shares the `.nx-field`
label/hint/error wrapper with Input.

## Usage
```html
<div class="nx-field">
  <label class="nx-field__label" for="ta-desc">Description</label>
  <textarea class="nx-textarea" id="ta-desc" rows="4"></textarea>
</div>
```

## Variants
Default · character-limited (`maxlength` + `textarea.js` for a live counter)

## Sizes
`min-height: 96px`, vertically resizable by the user (`resize: vertical`); grows with `rows` attribute.

## States
Default, hover, `:focus-visible` (gold ring), `disabled` (resize disabled too, since a disabled field shouldn't invite interaction).

## Accessibility
Same labeling requirement as Input — always pair with `<label for>`. Character counters are wired via `aria-describedby` so the limit is announced alongside the field, not just visually.

## Responsive
`width: 100%`; height controlled by `rows` + user resize, not breakpoints.

## Dependencies
`core/css/tokens.css`, `.nx-field` styles from the Input component. `textarea.js` is optional — only needed for the live character counter.
