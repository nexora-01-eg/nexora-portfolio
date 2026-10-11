# Navbar

`nx-navbar` — sticky top navigation bar with brand, primary
links, search, and a mobile hamburger menu.

## Usage
```html
<header class="nx-navbar">
  <div class="nx-navbar__inner nx-container">
    <a class="nx-navbar__brand" href="/">NEXORA</a>
    <nav class="nx-navbar__links" aria-label="Primary">
      <a class="nx-navbar__link nx-navbar__link--active" href="#" aria-current="page">Projects</a>
    </nav>
    <button class="nx-navbar__menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav class="nx-navbar__mobile" id="mobile-nav" aria-label="Primary mobile" hidden>...</nav>
</header>
<script src="navbar.js"></script>
```

## Variants
Single style; active link indicated via `nx-navbar__link--active` + `aria-current="page"`.

## Sizes
Fixed 72px height.

## States
Desktop (full link row + search visible) vs. mobile (hamburger, links move to `.nx-navbar__mobile`) — CSS-driven by breakpoint, not JS. Menu toggle open/closed.

## Accessibility
`<nav aria-label="Primary">` distinguishes this from any other nav landmark on the page (e.g. Sidebar, Footer nav). Active link uses `aria-current="page"`, not color alone. Hamburger button has `aria-expanded` + `aria-controls` pointing at the mobile panel's id.

## Responsive
Collapses to a hamburger menu under 1024px; search box hides at the same breakpoint (surface it inside the mobile panel or a separate search page at the call site if needed).

## Dependencies
`core/css/tokens.css`, `core/css/layout.css` (`.nx-container`), Search Box component CSS for the embedded search. `navbar.js` required for the mobile toggle.
