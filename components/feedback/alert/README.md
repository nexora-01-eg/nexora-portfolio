# Alert

`nx-alert` — persistent inline message banner (not auto-dismissing — see Toast for that).

## Usage
```html
<div class="nx-alert nx-alert--info" role="status">
  <span class="nx-alert__icon" aria-hidden="true">ℹ</span>
  <div class="nx-alert__body"><p class="nx-alert__message">Message text.</p></div>
</div>
```

## Variants
`nx-alert--info` · `nx-alert--success` · `nx-alert--warning` · `nx-alert--danger`

## Sizes
Single size — width is controlled by the containing layout, not the component.

## States
Optional dismiss button (`.nx-alert__dismiss`) — wire up removal in the consuming page's JS; the component itself ships markup/styles only, since dismissal behavior is often page-specific (e.g. "don't show again").

## Accessibility
- Use `role="status"` for info/success/warning (polite announcement).
- Use `role="alert"` only for danger/urgent messages (assertive announcement — interrupts screen readers, so reserve it).
- Icons are `aria-hidden="true"`; the message text carries all meaning.

## Responsive
Flexes to container width; icon and dismiss button never shrink (`flex-shrink: 0`).

## Dependencies
`core/css/tokens.css` only. No JS required.
