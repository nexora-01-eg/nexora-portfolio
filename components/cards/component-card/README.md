# Component Card

`nx-component-card` — live mini-preview + name + category
badge, used by the Component Explorer's index grid to represent
each component in the library. Extends `.nx-card` +
`.nx-card--interactive`.

## Usage
```html
<a class="nx-card nx-card--interactive nx-component-card" href="#button">
  <div class="nx-component-card__preview">
    <button class="nx-btn nx-btn--primary nx-btn--sm" tabindex="-1">Button</button>
  </div>
  <div class="nx-component-card__meta">
    <h3 class="nx-h4">Button</h3>
    <span class="nx-badge nx-badge--neutral">UI</span>
  </div>
</a>
```

## Variants
Preview content is whatever the represented component renders as (a button, a badge, a small card, etc.).

## Sizes
Preview area fixed at 96px height.

## States
Inherits Card's hover lift. Preview content itself is `pointer-events: none` and any interactive elements inside it get `tabindex="-1"` — it's illustrative, not a functioning instance (clicking the card should navigate to the component's full docs, not trigger the mini Button inside it).

## Accessibility
Because the preview is non-interactive by design, any control inside it (buttons, checkboxes) must carry `tabindex="-1"` so it isn't reachable inside the card link's own focus stop.

## Responsive
Place in `.nx-grid--auto` for the Component Explorer's index grid.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS, Badge CSS, plus the CSS of whatever component is being previewed.
