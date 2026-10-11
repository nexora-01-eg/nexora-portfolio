# Accordion

`nx-accordion` — vertically stacked disclosure widgets, following
the [WAI-ARIA Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Usage
```html
<div class="nx-accordion" data-nx-accordion>
  <div class="nx-accordion__item">
    <h3>
      <button class="nx-accordion__trigger" aria-expanded="true" aria-controls="p1" id="t1">
        Question <span class="nx-accordion__icon" aria-hidden="true">⌄</span>
      </button>
    </h3>
    <div class="nx-accordion__panel" id="p1" role="region" aria-labelledby="t1">Answer</div>
  </div>
</div>
<script src="accordion.js"></script>
```

## Variants
Multi-open (default) · Single-open (add `data-nx-accordion-single` to the root — opening one item closes the others)

## Sizes
Single size — width follows the container.

## States
Expanded / collapsed, with a rotating chevron icon and hover color shift on the trigger.

## Accessibility
Trigger is a real `<button>` inside a heading (`<h3>`) so it's both keyboard-operable and shows up in a screen reader's heading navigation. `aria-expanded` reflects state; panels use `role="region"` + `aria-labelledby` pointing back at the trigger; collapsed panels use the `hidden` attribute rather than `display:none` via a utility class.

## Responsive
No layout changes needed — the trigger already spans 100% width and wraps naturally on narrow screens.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-body`). `accordion.js` required for the toggle interaction.
