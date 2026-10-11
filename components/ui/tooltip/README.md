# Tooltip

`data-nx-tooltip="..."` — short, non-essential supplementary
label shown on hover/focus. Never put essential information only
in a tooltip (touch users may never see it).

## Usage
```html
<button data-nx-tooltip="Duplicate this project">⧉</button>
<script src="tooltip.js"></script>
```
Position with `data-nx-tooltip-position="top|bottom"` (default `top`).

## Variants
`nx-tooltip--top` (default) · `nx-tooltip--bottom`

## Sizes
Single size — sized to fit its text content, `white-space: nowrap`.

## States
Hidden → visible (fade + slight rise), triggered by hover, keyboard focus, or Escape to dismiss.

## Accessibility
Deliberately avoids the native `title` attribute (inconsistent screen reader support, no keyboard access, delayed/uncontrollable timing). Instead: shows on both `mouseenter` **and** `focus` (so keyboard users get it too), sets `aria-describedby` pointing at the tooltip element while visible, and hides on `blur`/`mouseleave`/Escape.

## Responsive
Positioned via JS against the trigger's actual bounding rect, so it stays anchored correctly at any viewport size. Viewport-edge collision avoidance (flipping sides) is a Phase 3 enhancement.

## Dependencies
`core/css/tokens.css`. `tooltip.js` required — it creates and positions the tooltip element dynamically.
