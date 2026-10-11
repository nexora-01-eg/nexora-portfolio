# Command Palette

`nx-command-palette` — full-screen keyboard-driven search
overlay (the "⌘K" pattern popularized by Linear/Notion/Raycast).

## Usage
```html
<button data-nx-command-trigger class="nx-btn nx-btn--secondary">Search <kbd>⌘K</kbd></button>

<div class="nx-command-overlay" data-nx-command-palette role="dialog" aria-modal="true" aria-label="Command palette" hidden>
  <div class="nx-command">
    <div class="nx-command__input-wrap">
      <input class="nx-command__input" role="combobox" aria-expanded="true" aria-controls="nx-command-list" aria-label="Search" />
    </div>
    <ul class="nx-command__list" id="nx-command-list" role="listbox">
      <li class="nx-command__group-label">Group</li>
      <li class="nx-command__option" role="option" tabindex="-1">Item</li>
    </ul>
  </div>
</div>
<script src="command-palette.js"></script>
```

## Variants
Single style; content is grouped via repeated `.nx-command__group-label` + `.nx-command__option` items.

## Sizes
`max-width: 560px`, `max-height: 60vh` with internal scroll.

## States
Closed/open, typing filters options (substring match, case-insensitive; empty groups auto-hide their label), roving highlight (`aria-selected`) via arrow keys, Enter activates.

## Accessibility
`role="dialog"` + `aria-modal="true"`; input is `role="combobox"` with `aria-expanded`/`aria-controls` pointing at the `role="listbox"`. Global `Cmd/Ctrl+K` shortcut toggles it from anywhere on the page. Opening moves focus to the input and locks body scroll; closing (Escape, backdrop click, selecting an option) restores focus to whatever was focused before opening.

## Responsive
Padded from the top (`12vh`) rather than centered, matching the familiar command-palette position; width caps at 560px and shrinks to fit narrow viewports via the `padding-inline` gutter.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-fade-in`, `nx-scale-in`), Button component CSS for the trigger, `.nx-search-box__shortcut` styling for the `<kbd>` hint. `command-palette.js` required. Filtering here is a simple substring match as the Phase 2 baseline — wire it to `core/js/search.js`'s real search index in a later phase for ranked/fuzzy results.
