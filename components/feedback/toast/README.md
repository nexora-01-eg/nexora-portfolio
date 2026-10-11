# Toast

`nx-toast` — transient, auto-dismissing notification. Use
Notifications instead for a persistent, reviewable inbox.

## Usage
```html
<script src="toast.js"></script>
<script>
  NexoraToast.show({ message: "Project published successfully.", variant: "success" });
</script>
```
No need to add the viewport markup manually — `toast.js` creates
`#nx-toast-viewport` on first use if it isn't already in the page.

## Variants
`info` · `success` · `warning` · `danger` (pass as `variant`)

## Sizes
Single size, max-width 360px, full-width minus gutters on mobile.

## States
Enter animation (slide/scale up), auto-dismiss after `duration` ms (default 4000, pass `0` for persistent), manual dismiss via close button, exit animation before DOM removal.

## Accessibility
Viewport uses `aria-live="polite"` + `aria-atomic="true"` so screen readers announce new toasts without interrupting. Close button has an explicit `aria-label`. Respects `prefers-reduced-motion` (animations disabled).

## Responsive
Viewport repositions to full-width-minus-gutters under 480px.

## Dependencies
`core/css/tokens.css`. `toast.js` is required (no build step — just include the script tag once).
