# Tabs

`nx-tabs` — follows the [WAI-ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

## Usage
```html
<div class="nx-tabs" data-nx-tabs>
  <div class="nx-tabs__list" role="tablist" aria-label="...">
    <button class="nx-tabs__tab" role="tab" id="tab-a" aria-controls="panel-a" aria-selected="true">A</button>
    <button class="nx-tabs__tab" role="tab" id="tab-b" aria-controls="panel-b" aria-selected="false" tabindex="-1">B</button>
  </div>
  <div class="nx-tabs__panel" role="tabpanel" id="panel-a" aria-labelledby="tab-a">...</div>
  <div class="nx-tabs__panel" role="tabpanel" id="panel-b" aria-labelledby="tab-b" hidden>...</div>
</div>
<script src="tabs.js"></script>
```

## Variants
Single visual style (underline indicator). Horizontal only.

## Sizes
Single size — scales with the font-size tokens already in use.

## States
Active/inactive tab, hover. Panels toggle via the `hidden` attribute (no display juggling in JS).

## Accessibility
Full WAI-ARIA Tabs pattern: `role="tablist"/"tab"/"tabpanel"`, `aria-selected`, roving `tabindex` (only the active tab is in the Tab order), Arrow Left/Right/Home/End to move between tabs.

## Responsive
Tab list scrolls horizontally (`overflow-x: auto`) rather than wrapping, so it stays usable on narrow screens without restructuring.

## Dependencies
`core/css/tokens.css`. `tabs.js` required for the interaction — markup alone only shows the first panel.
