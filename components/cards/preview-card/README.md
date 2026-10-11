# Preview Card

`nx-preview-card` — large cover image with a "Live preview" CTA
that appears on hover, used on a project's own detail page.
Distinct from Project Card, which is the compact library-grid
tile. Extends `.nx-card` (`--flush`).

## Usage
```html
<div class="nx-card nx-card--flush nx-preview-card">
  <div class="nx-preview-card__frame">
    <img src="..." alt="Descriptive text" loading="lazy" />
    <button class="nx-btn nx-btn--primary nx-btn--sm nx-preview-card__cta" type="button">Live preview</button>
  </div>
  <div class="nx-preview-card__caption">
    <p class="nx-small nx-text-secondary">Full-screen preview available</p>
  </div>
</div>
```

## Variants
Single layout.

## Sizes
Frame at `aspect-ratio: 16/9`.

## States
CTA button fades/scales in on card hover or its own focus.

## Accessibility
CTA button is real and independently focusable (`:focus-visible` also reveals it, not just `:hover`) so keyboard users can reach it without a mouse.

## Responsive
Frame scales with container width via `aspect-ratio`.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS, Button CSS.
