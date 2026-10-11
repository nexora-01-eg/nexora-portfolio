# Context Menu

`nx-context-menu` — right-click-activated menu, positioned at
the cursor. Shares menu-item styling conventions with Dropdown
(and reuses its divider class).

## Usage
```html
<div data-nx-context-menu="ctx-1">Right-click me</div>

<ul class="nx-context-menu" id="ctx-1" role="menu" aria-label="Actions" hidden>
  <li role="none"><button class="nx-context-menu__item" role="menuitem">Open</button></li>
</ul>
<script src="context-menu.js"></script>
```

## Variants
Standard item, danger item (`nx-context-menu__item--danger`), divider (reuses `.nx-dropdown__divider`).

## Sizes
`min-width: 180px`, grows to fit content.

## States
Hidden → shown at cursor position on right-click; closes on outside click, Escape, or after an item is activated (wire item `click` handlers at the page level).

## Accessibility
Menu uses `role="menu"`/`"menuitem"`, same as Dropdown. Right-click is a mouse-only trigger by nature — **always provide an equivalent way to reach the same actions** (e.g. a visible "⋯" button opening a regular Dropdown) so keyboard-only and touch users aren't locked out.

## Responsive
Positioned via `clientX`/`clientY` at fixed coordinates — viewport-edge collision avoidance (flipping when near the right/bottom edge) is a Phase 3 enhancement.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-scale-in`), `.nx-dropdown__divider` from the Dropdown component. `context-menu.js` required.
