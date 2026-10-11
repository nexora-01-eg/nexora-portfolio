# Hero Block

`nx-hero` — full-width introductory section for a homepage or
landing page.

## Usage
```html
<section class="nx-hero">
  <div class="nx-container nx-hero__inner">
    <p class="nx-caption nx-text-accent">Eyebrow</p>
    <h1 class="nx-display">Headline</h1>
    <p class="nx-body-lg nx-text-secondary nx-hero__lead">Supporting copy.</p>
    <div class="nx-row nx-gap-3">
      <button class="nx-btn nx-btn--primary nx-btn--lg">Primary action</button>
    </div>
  </div>
</section>
```
Add `data-nx-reveal` to any child to fade it in via `core/js/animations.js`'s IntersectionObserver.

## Variants
Single layout, centered. A left-aligned variant can be added in Phase 3 if a project needs it.

## Sizes
Content capped at `max-width: 780px`, centered.

## States
Optional scroll-reveal entrance via `[data-nx-reveal]` (respects `prefers-reduced-motion` — see `core/js/animations.js`).

## Accessibility
Uses a real `<h1>` — only one per page. Actions are real `<button>`s (or `<a>` styled the same for navigation).

## Responsive
Vertical padding reduces under 768px; action buttons stack full-width instead of sitting side-by-side.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, `core/css/layout.css` (`.nx-container`, `.nx-row`), Button component CSS. `core/js/animations.js` optional, only if using `data-nx-reveal`.
