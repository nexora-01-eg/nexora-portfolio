# Image Preview

`nx-image-preview` — thumbnail with an expand button that opens
a shared full-screen lightbox.

## Usage
```html
<figure class="nx-image-preview" data-nx-image-preview>
  <img class="nx-image-preview__img" src="..." alt="Descriptive text" loading="lazy" />
  <button class="nx-image-preview__expand" type="button" aria-label="View full size">⤢</button>
</figure>
<!-- one shared lightbox per page, placed once near </body> -->
<div class="nx-lightbox" role="dialog" aria-modal="true" aria-label="Image preview" hidden>
  <button class="nx-lightbox__close" aria-label="Close">×</button>
  <img class="nx-lightbox__img" src="" alt="" />
</div>
<script src="image-preview.js"></script>
```

## Variants
Single style — one `.nx-lightbox` is shared across every `.nx-image-preview` instance on a page.

## Sizes
Thumbnail is `aspect-ratio: 16/9`, `object-fit: cover`; lightbox image caps at 90vh.

## States
Expand button fades in on hover/focus of the thumbnail; lightbox open/closed.

## Accessibility
Lightbox uses `role="dialog"` + `aria-modal="true"`; opening moves focus to the close button, closing returns focus to whatever triggered it (no focus loss). Escape and backdrop click both close it. `loading="lazy"` on thumbnails improves performance on image-heavy grids.

## Responsive
Lightbox padding (`--nx-space-6`) keeps the image off-edge on all screens; image itself scales via `max-width`/`max-height`.

## Dependencies
`core/css/tokens.css`, `core/css/animations.css` (`nx-fade-in`). `image-preview.js` required.
