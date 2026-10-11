# Avatar

`nx-avatar` — user/entity representation, image or initials.

## Usage
```html
<img class="nx-avatar nx-avatar--md" src="..." alt="Full Name" />
<span class="nx-avatar nx-avatar--md nx-avatar--initials">JL</span>
```

## Variants
Image (`<img>` + `nx-avatar`) · Initials (`<span>` + `nx-avatar--initials`)

## Sizes
`nx-avatar--sm` (28px) · `nx-avatar--md` (40px) · `nx-avatar--lg` (56px)

## States
Optional presence dot via `nx-avatar--status` + `data-status="online|away|offline"`.

## Accessibility
- Image avatars require a real `alt` with the person's name (never `alt=""` unless purely decorative next to visible text).
- Initials avatars need `aria-label` with the full name, since the visible text is abbreviated.
- Status dots are decorative (`aria-hidden="true"`) — the status should also be conveyed in nearby text where it matters functionally.

## Responsive
Fixed pixel sizing (avatars shouldn't reflow); `nx-avatar-group` overlaps avatars with negative margin, degrades gracefully to wrapping on narrow containers.

## Dependencies
`core/css/tokens.css` only. No JS required.
