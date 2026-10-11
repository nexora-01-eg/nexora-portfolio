# Popover

`nx-popover` — anchored panel with interactive content (forms,
buttons, links). Richer than Tooltip (which is text-only,
hover-triggered); lighter than Modal (no focus trap, no
backdrop, no scroll lock — it's dismissed by outside click).

## Usage
```html
<div class="nx-popover-wrap" data-nx-popover>
  <button class="nx-btn nx-btn--secondary nx-popover__trigger" aria-haspopup="dialog" aria-expanded="false">Share</button>
  <div class="nx-popover" role="dialog" aria-label="Share options" hidden>
    ...interactive content...
  </div>
</div>
<script src="popover.js"></script>
```

## Variants
Single style; content is fully custom (form fields, buttons, lists).

## Sizes
Fixed `width: 280px` — adjust per instance via an inline style or a page-level override class if needed.

## States
Closed/open with scale-in entrance animation.

## Accessibility
`aria-haspopup="dialog"` + `aria-expanded` on the trigger; panel is `role="dialog"` with an `aria-label`. Closes on outside click and Escape (returning focus to the trigger) — since it isn't modal, focus isn't trapped inside, so users can Tab out of it entirely if desired.

## Responsive
Fixed width may overflow very narrow viewports — cap with `max-width: calc(100vw - 2rem)` at the call site for small-screen contexts.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-scale-in`), Button/Input CSS for typical popover contents. `popover.js` required.
