# Feature Card

`nx-feature-card` — icon + title + description, for
service/feature grids (e.g. a "Main Services" section). Extends
`.nx-card`.

## Usage
```html
<div class="nx-card nx-feature-card">
  <div class="nx-feature-card__icon" aria-hidden="true">⚡</div>
  <h3 class="nx-h4">Feature title</h3>
  <p class="nx-body nx-text-secondary">Description.</p>
</div>
```

## Variants
Single layout — icon can be a glyph (shown) or an SVG from `/assets/icons/`.

## Sizes
Icon box fixed at 44px.

## States
Use `.nx-card--interactive` alongside `.nx-feature-card` if the whole card should link somewhere.

## Accessibility
Icon is decorative (`aria-hidden="true"`); title uses a real heading tag matching the surrounding document outline.

## Responsive
Place in `.nx-grid--3`/`--4` for a standard feature grid; reflows per `core/css/layout.css` breakpoints.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS.
