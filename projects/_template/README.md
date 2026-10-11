# Project Name

> One-line tagline for this project.

Full description of what this project is and the business problem it solves.

## Metadata

See `project.json` in this folder — that file is the single source of
truth for this project's data (title, industry, tags, technologies,
components, features, timeline, etc.). Never duplicate its fields
anywhere else, including here.

## Media convention

Place these files directly in this folder — no subfolders, no paths
to configure:

- `thumb.webp` — grid thumbnail (used by Project Card)
- `cover.webp` — hero/detail-page cover image
- `gallery/` — additional screenshots, any filename, any count
- `assets/` — any other project-specific files (fonts, icons, data)

If `thumb.webp` or `cover.webp` is missing, the platform automatically
shows a placeholder — you never need a placeholder image yourself.

## Using this template

**Copy this whole folder** to `projects/<industry>/<your-slug>/` —
don't edit it in place at `projects/_template/`. Its `index.html` and
`preview.html` link back to `core/css/` with paths assuming that
3-levels-deep destination (`projects/<industry>/<slug>/`); the
template folder itself sits one level shallower, so those links only
resolve correctly once copied to a real project location. Then add
one entry to `/data/project-index.json` — that's the only other file
you touch.

## Demo files

- `index.html` — the actual working demo (opens in a new tab from "Open Demo")
- `preview.html` — a lighter-weight preview (opens in the Quick Preview modal/drawer)

Both are independent static pages — they may use the platform's own
`core/css/tokens.css` and components for visual consistency, but nothing
about the platform depends on their contents.
