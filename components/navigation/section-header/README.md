# Section Header

`nx-section-header` — eyebrow label + heading + description +
optional trailing action, used to introduce any major page
section (project grid, industry list, component category).

## Usage
```html
<div class="nx-section-header">
  <div>
    <p class="nx-caption nx-text-accent">Eyebrow</p>
    <h2 class="nx-h2">Section Title</h2>
    <p class="nx-body-lg nx-text-secondary">Supporting description.</p>
  </div>
  <button class="nx-btn nx-btn--secondary">Action</button>
</div>
```

## Variants
With or without the trailing action button.

## Sizes
Description text caps at `max-width: 560px` to keep line length readable regardless of section width.

## States
Static content block.

## Accessibility
Uses a real heading tag (`<h2>`, adjust level to match document outline) so the section shows up correctly in a screen reader's heading navigation.

## Responsive
Switches from a horizontal (heading + action side-by-side) to a stacked layout under 768px.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Button component CSS for the optional action.
