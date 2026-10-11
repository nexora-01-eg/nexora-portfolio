# Search Box

`nx-search-box` — inline search input embedded in a page (e.g.
above a project grid). For a full-screen keyboard-driven search
overlay, use the Command Palette component instead.

## Usage
```html
<div class="nx-search-box" role="search">
  <span class="nx-search-box__icon" aria-hidden="true">⌕</span>
  <input class="nx-search-box__input" type="search" placeholder="Search…" aria-label="Search" />
  <button class="nx-search-box__clear" type="button" aria-label="Clear search" hidden>×</button>
</div>
<script src="search-box.js"></script>
```

## Variants
Single style; `<kbd>` shortcut hint is optional (hidden on mobile).

## Sizes
`max-width: 480px`, `width: 100%` up to that.

## States
Empty (clear button hidden) → typed (clear button shown), `:focus-within` ring on the container.

## Accessibility
Wrapping element has `role="search"`; input is `type="search"` with an explicit `aria-label` since there's no visible `<label>`. Clear button has `aria-label="Clear search"`.

## Responsive
Shortcut hint (`⌘K`) hides under 480px where there's no keyboard to reference.

## Dependencies
`core/css/tokens.css`. `search-box.js` dispatches `nx:search-input` — pair with `core/js/search.js` (Phase 2+) to actually filter results.
