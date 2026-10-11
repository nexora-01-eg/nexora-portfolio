# Project Card

`nx-project-card` — thumbnail, status badge, title, description,
and tech tags. The primary unit of the 500+ project library
grid. Extends `.nx-card` (`--flush` for edge-to-edge media +
`--interactive` since the whole card links to the project page).

## Usage
```html
<a class="nx-card nx-card--flush nx-card--interactive nx-project-card" href="/projects/aurora-crm/">
  <div class="nx-project-card__media">
    <img src="..." alt="" loading="lazy" />
    <span class="nx-badge nx-badge--success nx-project-card__status">Live</span>
  </div>
  <div class="nx-project-card__body">
    <p class="nx-caption">Industry · Service</p>
    <h3 class="nx-h4">Project Name</h3>
    <p class="nx-small nx-clamp-2">Description.</p>
    <div class="nx-tag-group"><span class="nx-tag">Tech</span></div>
  </div>
</a>
```
Fields map directly to a `/data/projects.json` entry: `title`, `industry`, `service`, `description`, `technologies`, `status`, `media.thumbnail`.

## Variants
Status badge variant follows project status (`success`=live, `warning`=draft, `neutral`=archived — see Badge).

## Sizes
Media `aspect-ratio: 16/10`; description clamped to 2 lines (`.nx-clamp-2`) so cards stay equal-height in a grid.

## States
Hover (image scales 1.05×, inherited card lift from `.nx-card--interactive`).

## Accessibility
Thumbnail `alt` is left empty (`alt=""`) here because the title text right below already names the project — set real alt text if the image conveys something the title doesn't. Whole card is a real `<a href>`.

## Responsive
Place in `.nx-grid--auto` or `.nx-grid--3`/`--4` for the project library — reflows automatically per `core/css/layout.css`.

## Dependencies
`core/css/tokens.css`, `core/css/typography.css`, Card base CSS, Badge CSS, Tag CSS, `.nx-clamp-2` utility.
