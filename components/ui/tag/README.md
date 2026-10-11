# Tag

`nx-tag` — metadata label (technology, topic, keyword). Use
`nx-badge` instead for status.

## Usage
```html
<div class="nx-tag-group" role="list">
  <span class="nx-tag" role="listitem">React</span>
</div>
```

Removable variant:
```html
<span class="nx-tag nx-tag--removable" data-nx-tag>
  Label <button class="nx-tag__remove" aria-label="Remove tag Label">×</button>
</span>
<script src="tag.js"></script>
```

## Variants
Default (outlined) · `nx-tag--removable` (adds a remove button)

## Sizes
Single size — tags are metadata, not calls to action; kept visually quiet by design.

## States
Hover (border/text brighten). Removable tags dispatch a bubbling `nx:tag-remove` custom event and remove themselves from the DOM on click.

## Accessibility
Wrap tag collections in `role="list"` / `role="listitem"` since `<span>` groups don't expose list semantics natively. Remove buttons require a descriptive `aria-label` (e.g. "Remove tag React").

## Responsive
`nx-tag-group` wraps via flexbox — no breakpoint overrides needed.

## Dependencies
`core/css/tokens.css`. `tag.js` only needed for the removable variant.
