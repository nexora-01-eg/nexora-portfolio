# Radio

`nx-radio` — custom-styled radio button, always used inside a
`<fieldset>`/`<legend>` group for a set of mutually-exclusive options.

## Usage
```html
<fieldset class="nx-radio-group">
  <legend class="nx-field__label">Project tier</legend>
  <label class="nx-radio">
    <input type="radio" class="nx-radio__input" name="tier" value="starter" checked />
    <span class="nx-radio__circle" aria-hidden="true"></span>
    <span class="nx-radio__label">Starter</span>
  </label>
</fieldset>
```

## Variants
Single visual style.

## Sizes
Single size — 20px circle.

## States
Unchecked, checked (filled dot), disabled, `:focus-visible`.

## Accessibility
Real `<input type="radio">` (visually hidden) preserves native grouping/arrow-key behavior within a shared `name`. Always wrap the group in `<fieldset>` + `<legend>` so screen readers announce the group's purpose, not just each option in isolation.

## Responsive
Stacks vertically by default (`.nx-radio-group` is a column flex); switch to `flex-direction: row` at the call site for a horizontal layout if the option set is short.

## Dependencies
`core/css/tokens.css`, `.nx-field__label` from the Input component for the legend style. No JS required.
