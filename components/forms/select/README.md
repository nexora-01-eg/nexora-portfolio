# Select

Two variants: `.nx-select` (styled native `<select>` — **default
choice**) and `.nx-custom-select` (fully custom listbox, only for
cases the native element can't visually achieve).

## Usage
Native (preferred):
```html
<select class="nx-select"><option>...</option></select>
```
Custom listbox:
```html
<div class="nx-custom-select" data-nx-select>
  <button class="nx-custom-select__trigger" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="label id">...</button>
  <ul class="nx-custom-select__list" role="listbox" hidden>
    <li class="nx-custom-select__option" role="option" aria-selected="false" tabindex="-1">Option</li>
  </ul>
</div>
<script src="select.js"></script>
```

## Variants
Native select · Custom listbox

## Sizes
Single size, `width: 100%` of container.

## States
Native: default/hover/focus/disabled (all free from the browser). Custom: closed/open, option hover/selected, `:focus-visible`.

## Accessibility
**Prefer the native `<select>` whenever possible** — it gets full keyboard, screen reader, and mobile OS picker support with zero extra code. Only reach for `.nx-custom-select` when you need fully custom option markup (icons, multi-line options, etc.), and note it requires manually implementing the WAI-ARIA Listbox pattern (which `select.js` does: arrow keys, Enter/Space to select, Escape to close, outside-click to close).

## Responsive
Both variants are `width: 100%` of their container; the custom listbox's dropdown matches the trigger's width and scrolls internally past 220px.

## Dependencies
`core/css/tokens.css`. `select.js` required only for `.nx-custom-select`.
