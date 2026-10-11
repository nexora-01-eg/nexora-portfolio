# Modal

`nx-modal` — centered dialog with backdrop, following the
[WAI-ARIA Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

## Usage
```html
<button data-nx-modal-open="my-modal" class="nx-btn nx-btn--primary">Open</button>

<div class="nx-modal-overlay" id="my-modal" data-nx-modal role="dialog" aria-modal="true" aria-labelledby="my-modal-title" hidden>
  <div class="nx-modal">
    <div class="nx-modal__header">
      <h2 class="nx-h4" id="my-modal-title">Title</h2>
      <button class="nx-modal__close" aria-label="Close dialog" data-nx-modal-close>×</button>
    </div>
    <div class="nx-modal__body">...</div>
    <div class="nx-modal__footer">
      <button class="nx-btn nx-btn--ghost" data-nx-modal-close>Cancel</button>
      <button class="nx-btn nx-btn--primary">Confirm</button>
    </div>
  </div>
</div>
<script src="modal.js"></script>
```

## Variants
Single visual style; content composition (header/body/footer) is flexible.

## Sizes
`max-width: 480px`, scrollable internally past `90vh`.

## States
Closed (`hidden`) / open, with fade+scale entrance animation.

## Accessibility
`role="dialog"` + `aria-modal="true"` + `aria-labelledby` pointing at the title. Opening moves focus into the modal and traps Tab/Shift+Tab within it; closing (via close button, Cancel, Escape, or backdrop click) restores focus to whatever opened it. Body scroll is locked while open.

## Responsive
Footer actions stack full-width, reversed order, under 480px.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-fade-in`, `nx-scale-in`), Button component CSS. `modal.js` required — handles open/close, focus trap, and Escape globally for every modal on the page.
