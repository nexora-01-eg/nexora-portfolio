# Empty State

`nx-empty-state` — shown when a list, search, or filter
returns zero results, or a section has no content yet.

## Usage
```html
<div class="nx-empty-state">
  <div class="nx-empty-state__icon" aria-hidden="true">◎</div>
  <h3 class="nx-h4">No projects yet</h3>
  <p class="nx-body nx-text-secondary">Projects you add will show up here.</p>
  <button class="nx-btn nx-btn--primary nx-btn--md" type="button">Add a project</button>
</div>
```

## Variants
Default (neutral, "nothing here yet") · `nx-empty-state--error` (something went wrong, tinted red)

## Sizes
Single size, centered, capped at 360px so text doesn't stretch full-width on large screens.

## States
Static content block; the primary action button uses the existing Button component.

## Accessibility
Icon is decorative (`aria-hidden="true"`) — the heading and body text carry the actual message. Action button follows normal Button accessibility (real `<button>`, focus-visible ring).

## Responsive
Centers and shrinks naturally in any container; padding scales down under the global `nx-section` mobile breakpoint rules in `core/css/layout.css`.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-h4`, `.nx-body`), and the Button component's CSS for the action.
