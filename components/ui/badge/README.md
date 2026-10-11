# Badge

`nx-badge` — compact status or category indicator.

## Usage
```html
<span class="nx-badge nx-badge--success">Active</span>
```

## Variants
`nx-badge--neutral` · `nx-badge--success` · `nx-badge--warning` · `nx-badge--danger` · `nx-badge--accent`

## Sizes
`nx-badge--sm` · default (no modifier) · `nx-badge--lg`

## States
Static — badges display status, they don't have interactive states. Use `nx-badge--dot` + `.nx-badge__dot` to add a status dot before the label.

## Accessibility
When a badge conveys meaning through color alone (e.g. status), always pair it with a text label, never color only. Add `aria-label` if the visible text is abbreviated.

## Responsive
Fixed intrinsic size — wraps naturally in flex/grid layouts, no breakpoint overrides needed.

## Dependencies
`core/css/tokens.css` only. No JS required.
