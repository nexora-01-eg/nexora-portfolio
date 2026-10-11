# Footer

`nx-footer` — site-wide footer with brand, link columns, and a
copyright bar.

## Usage
```html
<footer class="nx-footer">
  <div class="nx-container nx-footer__inner">
    <div class="nx-footer__brand"><p class="nx-h4">NEXORA</p></div>
    <nav class="nx-footer__col" aria-label="Library">
      <p class="nx-caption">Library</p>
      <a href="#">Projects</a>
    </nav>
  </div>
  <div class="nx-container nx-footer__bottom">
    <p class="nx-small">© 2026 NEXORA.</p>
  </div>
</footer>
```

## Variants
Single style; number of `.nx-footer__col` groups is flexible.

## Sizes
4-column grid (brand + 3 link groups) at desktop width.

## States
Static; links have hover color shift.

## Accessibility
Each link group is its own `<nav aria-label="...">` landmark so screen reader users can jump between them, distinct from the page's main Navbar/Sidebar navs.

## Responsive
4 columns → 2 columns (768px) → 1 column (480px).

## Dependencies
`core/css/tokens.css`, `core/css/typography.css` (`.nx-h4`, `.nx-small`, `.nx-caption`), `core/css/layout.css` (`.nx-container`). No JS required.
