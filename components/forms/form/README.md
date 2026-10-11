# Form

`nx-form` — the layout shell every NEXORA form follows. It is
not a new input type: it composes Input, Textarea, Select,
Checkbox, Radio, Toggle, and Button into one consistent rhythm
(section heading → fields → sticky bottom actions).

## Usage
```html
<form class="nx-form" novalidate>
  <div class="nx-form__section">
    <h3 class="nx-h4">Section title</h3>
  </div>
  <div class="nx-field">...</div>
  <div class="nx-form__actions">
    <button class="nx-btn nx-btn--ghost" type="reset">Cancel</button>
    <button class="nx-btn nx-btn--primary" type="submit">Save</button>
  </div>
</form>
```

## Variants
Single layout pattern; multiple `.nx-form__section` blocks for multi-section forms.

## Sizes
`max-width: 480px` by default — override at the call site for wider forms (e.g. two-column layouts using `.nx-grid--2` inside a section).

## States
Delegates all field-level states (error, disabled, focus) to the individual field components. `novalidate` is used in the example so custom validation UI (via `.nx-field__error`) can be shown instead of the browser's native bubble — add real-time validation JS at the page level.

## Accessibility
Section headings use real heading tags (`<h3>`) for screen-reader navigation. Actions place the primary (submit) action last, matching the reading/tab order convention.

## Responsive
Actions stack to full-width, reversed order (primary action on top) under 480px, matching common mobile form conventions.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, plus the CSS of every field component actually used inside a given form (Input, Textarea, Select, Checkbox, Radio, Toggle, Button).
