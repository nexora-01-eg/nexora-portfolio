# Timeline

`nx-timeline` — vertical chronological list for changelogs,
project history, or roadmap display.

## Usage
```html
<ol class="nx-timeline">
  <li class="nx-timeline__item">
    <div class="nx-timeline__marker" aria-hidden="true"></div>
    <div class="nx-timeline__content">
      <p class="nx-caption">Date</p>
      <h4 class="nx-h4">Event title</h4>
      <p class="nx-body nx-text-secondary">Description.</p>
    </div>
  </li>
</ol>
```

## Variants
Single style — most recent item first by convention (see example), though DOM order is up to the consuming page.

## Sizes
Single size; spacing between entries via `--nx-space-7`.

## States
Static — no interactive states.

## Accessibility
Uses a real ordered list (`<ol>`) since chronological sequence matters. Marker dots are `aria-hidden="true"` decoration; the date/title/description text carries all the meaning.

## Responsive
Single-column layout at all widths — reflows naturally with the parent container.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-caption`, `.nx-h4`, `.nx-body`). No JS required.
