# Input

`nx-input` — single-line text field, wrapped in `.nx-field` for
label/hint/error composition.

## Usage
```html
<div class="nx-field">
  <label class="nx-field__label" for="inp-name">Project name</label>
  <input class="nx-input" type="text" id="inp-name" name="name" />
</div>
```

## Variants
Default · `nx-input--error` (validation failure) · icon-prefixed (`.nx-input-group` + `.nx-input--with-icon`)

## Sizes
Single size (comfortable 44px+ tap target via padding). Adjust via a future `--sm`/`--lg` modifier if a project needs it.

## States
Default, hover, `:focus-visible` (gold ring), `disabled`, error.

## Accessibility
Every input requires an associated `<label for>` — never a placeholder alone. Error state sets `aria-invalid="true"` and `aria-describedby` pointing at the `.nx-field__error` message id.

## Responsive
`width: 100%` — sizing is controlled by the parent layout/grid.

## Dependencies
`core/css/tokens.css` only. No JS required (validation logic is a page/form concern).
