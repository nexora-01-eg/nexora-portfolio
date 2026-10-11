# File Upload

`nx-file-upload` — drag-and-drop dropzone with a native, keyboard-accessible file input underneath.

## Usage
```html
<div class="nx-file-upload" data-nx-file-upload>
  <input class="nx-file-upload__input" type="file" id="fu-input" multiple />
  <label class="nx-file-upload__dropzone" for="fu-input">
    Drag files here or <span class="nx-text-accent">browse</span>
  </label>
  <ul class="nx-file-upload__list" aria-live="polite"></ul>
</div>
<script src="file-upload.js"></script>
```

## Variants
Single style; `multiple` attribute controls single vs. multi-file selection.

## Sizes
Dropzone padding is generous by default (`--nx-space-8`) — a `--compact` modifier can be added in Phase 3 if a denser layout is needed.

## States
Idle, hover/focus (border + tint), drag-over (`.nx-file-upload--dragover`), files-selected (list renders with per-file remove buttons).

## Accessibility
The real `<input type="file">` is visually hidden but linked via `<label for>`, so it's fully keyboard-operable (Tab to it, Enter/Space opens the OS file dialog) and screen-reader-friendly — never replace it with a plain `<div>` and JS click handler alone. The file list is `aria-live="polite"` so additions/removals are announced.

## Responsive
Dropzone is `width: 100%` of its container; padding could be reduced via a page-level media query for very narrow forms.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-body`, `.nx-caption`), `.nx-truncate` utility. `file-upload.js` required for drag/drop and the file list — actual upload transport is left to the consuming page.
