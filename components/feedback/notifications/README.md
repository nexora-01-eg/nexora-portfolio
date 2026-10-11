# Notifications

`nx-notif-panel` — persistent, reviewable notification inbox.
Use Toast instead for transient, auto-dismissing messages.

## Usage
```html
<div class="nx-notif-panel" role="region" aria-label="Notifications">
  <div class="nx-notif-panel__header">
    <h3 class="nx-h4">Notifications</h3>
    <button class="nx-btn nx-btn--ghost nx-btn--sm">Mark all read</button>
  </div>
  <ul class="nx-notif-list">
    <li class="nx-notif nx-notif--unread"> ... </li>
  </ul>
</div>
<script src="notifications.js"></script>
```

## Variants
Single visual style; items are `nx-notif` (read) or `nx-notif--unread` (with accent dot).

## Sizes
Fixed max-width panel (380px), scrollable list capped at 360px height.

## States
Unread (accent dot) → read (dot fades) on click; "Mark all read" clears every unread dot at once.

## Accessibility
Panel has `role="region"` + `aria-label="Notifications"`. List uses semantic `<ul>/<li>`. Unread state is conveyed by more than color alone in a full build — pair with an `aria-label` like "Unread: …" if you add real data binding.

## Responsive
Panel width caps at 380px and shrinks to fill narrower containers (e.g. mobile dropdowns).

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-h4`, `.nx-caption`), Button component CSS for the header action. `notifications.js` required for read/unread interaction.
