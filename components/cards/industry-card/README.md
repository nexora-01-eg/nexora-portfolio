# Industry Card

`nx-industry-card` — compact icon-led card linking to one of the
14 industry verticals. Maps to a `/data/industries.json` entry.
Extends `.nx-card` + `.nx-card--interactive`.

## Usage
```html
<a class="nx-card nx-card--interactive nx-industry-card" href="/design-systems/finance/">
  <div class="nx-industry-card__icon" aria-hidden="true">🏦</div>
  <h3 class="nx-h4">Finance</h3>
  <p class="nx-small nx-text-secondary">24 projects</p>
</a>
```

## Variants
Single layout.

## Sizes
Icon fixed at 56px, centered.

## States
Inherits Card's hover lift.

## Accessibility
Icon is decorative; project count text should reflect real data (`{{projectCount}}` from `industries.json`), not be hardcoded in production use.

## Responsive
Place in `.nx-grid--auto` for the industries index — reflows automatically.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS.
