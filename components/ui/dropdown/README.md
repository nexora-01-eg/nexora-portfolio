# Dropdown

`nx-dropdown` — menu button, following the
[WAI-ARIA Menu Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

## Usage
```html
<div class="nx-dropdown" data-nx-dropdown>
  <button class="nx-btn nx-btn--secondary nx-dropdown__trigger" aria-haspopup="true" aria-expanded="false" id="dd-trigger">
    Actions
  </button>
  <ul class="nx-dropdown__menu" role="menu" aria-labelledby="dd-trigger" hidden>
    <li role="none"><button class="nx-dropdown__item" role="menuitem">Edit</button></li>
  </ul>
</div>
<script src="dropdown.js"></script>
```

## Variants
Standard item, danger item (`nx-dropdown__item--danger`), divider (`nx-dropdown__divider`).

## Sizes
Menu min-width 200px, grows to fit content.

## States
Open/closed (`hidden` attribute + `aria-expanded`), item hover/focus.

## Accessibility
Trigger uses `aria-haspopup="true"` + `aria-expanded`; menu uses `role="menu"`/`"menuitem"`. Keyboard: Enter/Space/↓ opens and focuses the first item, ↑/↓ move between items, Escape closes and returns focus to the trigger, Tab closes without trapping focus, outside click closes.

## Responsive
Menu is absolutely positioned relative to the trigger — reposition via your own layout CSS if the trigger sits near a viewport edge (Phase 3 concern: a `flip` behavior can be added to `dropdown.js` later).

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-scale-in`), Button component CSS for the trigger. `dropdown.js` required.
