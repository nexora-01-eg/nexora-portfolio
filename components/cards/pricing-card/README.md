# Pricing Card

`nx-pricing-card` — plan/tier display with price, feature list,
and CTA. Extends `.nx-card`.

## Usage
```html
<div class="nx-card nx-pricing-card">
  <p class="nx-caption">Starter</p>
  <p class="nx-pricing-card__price">$0<span class="nx-pricing-card__period">/mo</span></p>
  <ul class="nx-pricing-card__features"><li>Feature</li></ul>
  <button class="nx-btn nx-btn--secondary nx-w-full">Get started</button>
</div>
```

## Variants
Default · `nx-pricing-card--featured` (gold border + glow + optional badge, for the recommended tier)

## Sizes
No fixed size — place in `.nx-grid--3` for a standard 3-tier pricing row.

## States
Static; CTA button follows normal Button states.

## Accessibility
Feature checkmarks are decorative CSS pseudo-elements — the list item text itself must fully describe the feature (never rely on the checkmark to convey "included").

## Responsive
Stacks via the enclosing `.nx-grid` breakpoints (3 → 1 column under 768px, per `core/css/layout.css`).

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS, Badge CSS (for the featured badge), Button CSS, `.nx-w-full` utility.
