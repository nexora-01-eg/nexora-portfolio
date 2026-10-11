# Drawer

`nx-drawer` — edge-anchored slide-in panel (filters, details,
settings). Same dialog semantics as Modal, different entrance
animation and positioning.

## Usage
```html
<button data-nx-drawer-open="my-drawer" class="nx-btn nx-btn--secondary">Open</button>

<div class="nx-drawer-overlay" id="my-drawer" data-nx-drawer role="dialog" aria-modal="true" aria-labelledby="my-drawer-title" hidden>
  <div class="nx-drawer nx-drawer--right">
    <div class="nx-drawer__header">
      <h2 class="nx-h4" id="my-drawer-title">Title</h2>
      <button class="nx-drawer__close" aria-label="Close panel" data-nx-drawer-close>×</button>
    </div>
    <div class="nx-drawer__body">...</div>
  </div>
</div>
<script src="drawer.js"></script>
```

## Variants
`nx-drawer--right` (default, slides from the right) · `nx-drawer--left` (slides from the left)

## Sizes
`max-width: 400px`, full-width on screens ≤480px.

## States
Closed (`hidden`) / open, with slide-in entrance animation from the relevant edge.

## Accessibility
Same pattern as Modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, focus trapped while open, focus restored to the trigger on close, Escape closes, body scroll locked. Namespaced under separate `data-nx-drawer-*` attributes/JS so a page can have both a Modal and a Drawer without conflict.

## Responsive
Full viewport width on mobile (≤480px) rather than a fixed 400px panel.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-fade-in`). `drawer.js` required.
