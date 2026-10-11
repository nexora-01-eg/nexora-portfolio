# Skeleton Loader

`nx-skeleton` — content-shaped shimmer placeholder shown while
real data loads. The shimmer keyframe/animation itself lives in
`core/css/animations.css` (`.nx-skeleton` base class + `nx-shimmer`
keyframe) — this component file adds the specific shapes
(text line, avatar, card, thumbnail) on top of it.

## Usage
```html
<div class="nx-skeleton nx-skeleton--text" style="width: 80%;"></div>
<div class="nx-skeleton nx-skeleton--avatar"></div>
<div class="nx-skeleton nx-skeleton--card"></div>
```

## Variants (shapes)
`nx-skeleton--text` · `nx-skeleton--avatar` · `nx-skeleton--card` · `nx-skeleton--thumbnail`

## Sizes
Text-line width is set per-instance via inline `style="width: …"` to mimic real content of varying length; avatar/card/thumbnail have fixed proportions matching their real counterparts.

## States
Single shimmering state. Swap the skeleton element out for real content once data resolves — don't animate a transition between them (avoid layout jank).

## Accessibility
Wrap the loading region in a container with `role="status"` and an `aria-label` (e.g. "Loading projects") so screen readers get one announcement instead of reading each placeholder shape. Respects `prefers-reduced-motion` (shimmer disabled) via the base animation in `core/css/animations.css`.

## Responsive
Shapes are percentage/aspect-ratio based where it matters (`--card`, `--thumbnail`), so they scale with their container.

## Dependencies
`core/css/tokens.css` + `core/css/animations.css` (for `.nx-skeleton` shimmer base). No JS required.
