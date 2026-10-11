# Progress

`nx-progress` — linear bar; `nx-progress-circle` — circular ring.

## Usage
```html
<div class="nx-progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
  <div class="nx-progress__bar" style="width: 65%;"></div>
</div>
```

## Variants
Linear (default) · Linear small (`nx-progress--sm`) · Indeterminate (`nx-progress--indeterminate`) · Circular (`nx-progress-circle`, set `--nx-progress-value` 0–100)

## Sizes
Linear: default / `--sm`. Circular: fixed 48px (scale via `width`/`height` + adjust `r`/`stroke-dasharray` together if resized).

## States
Determinate (known %, animates width/dashoffset on change) and indeterminate (looping animation, unknown duration).

## Accessibility
`role="progressbar"` with `aria-valuenow/min/max` on determinate bars; indeterminate bars omit `aria-valuenow` and rely on `aria-label` alone, per ARIA spec.

## Responsive
Linear progress is width: 100% of its container by default. Circular is fixed-size (SVG viewBox scales if you resize the element).

## Dependencies
`core/css/tokens.css` only. No JS required — update `style="width"` / `--nx-progress-value` from your own page logic.
