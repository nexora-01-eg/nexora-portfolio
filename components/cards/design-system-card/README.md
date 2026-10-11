# Design System Card

`nx-design-system-card` — color-swatch preview + name +
component count, for the design-systems index grid. Maps to a
`/data/design-systems.json` entry. Extends `.nx-card` +
`.nx-card--interactive`.

## Usage
```html
<a class="nx-card nx-card--interactive nx-design-system-card" href="/design-systems/medical/">
  <div class="nx-design-system-card__swatches" aria-hidden="true">
    <span style="background: #0a0a0a;"></span>
    <span style="background: #cda449;"></span>
  </div>
  <h3 class="nx-h4">Medical</h3>
  <p class="nx-small nx-text-secondary">14 components · v0.1.0</p>
</a>
```

## Variants
Swatch count/colors vary per design system (2–5 swatches recommended).

## Sizes
Swatch strip fixed at 40px height.

## States
Inherits Card's hover lift.

## Accessibility
Swatch strip is purely decorative (`aria-hidden="true"`) — the design system's identity is conveyed by the name text, not the colors alone.

## Responsive
Place in `.nx-grid--auto` for the design-systems index.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS.
