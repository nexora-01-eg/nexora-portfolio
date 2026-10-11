# Button

`nx-btn` — the base interactive action element.

## Usage
```html
<button class="nx-btn nx-btn--primary nx-btn--md" type="button">Label</button>
```

## Variants
`nx-btn--primary` · `nx-btn--secondary` · `nx-btn--ghost` · `nx-btn--danger`

## Sizes
`nx-btn--sm` · `nx-btn--md` · `nx-btn--lg`

## States
- Default / hover / active (scale-down micro-interaction)
- `disabled` attribute — dimmed, `cursor: not-allowed`
- `nx-btn--loading` + `.nx-btn__spinner` + `aria-busy="true"` for async actions

## Accessibility
- Always a real `<button>` (or `<a>` styled the same way for navigation) — never a `<div>`.
- Visible `:focus-visible` ring via the shared token-based focus style in `base.css`.
- Loading buttons set `aria-busy="true"`; disable the button while loading to prevent double-submits.

## Responsive
No layout shift across breakpoints; `--lg` shrinks slightly under 480px to avoid oversized tap targets on small screens.

## Dependencies
`core/css/tokens.css` only. No JS required.
