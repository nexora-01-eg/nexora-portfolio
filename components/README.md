# Components

Architecture only — no components are implemented in Phase 1.

Every reusable UI component the platform will ever need is
organized into one of the categories below. A component always
belongs to exactly one category, is self-contained (its own
markup/CSS/JS), and is registered in `/data/components.json`
once it exists.

| Category     | Purpose                                              |
|--------------|-------------------------------------------------------|
| `ui/`        | Primitives — buttons, inputs, badges, tooltips        |
| `cards/`     | Project cards, industry cards, stat cards              |
| `navigation/`| Navbars, sidebars, breadcrumbs, pagination            |
| `modals/`    | Dialogs, overlays, lightboxes                         |
| `forms/`     | Form controls, validation states                      |
| `media/`     | Galleries, carousels, video players                   |
| `feedback/`  | Toasts, banners, empty/error/loading states           |

## Standard component shape (Phase 2+)

\`\`\`
components/<category>/<component-name>/
├── <component-name>.html   # markup fragment
├── <component-name>.css    # scoped styles
├── <component-name>.js     # behavior
└── <component-name>.json   # metadata (props, variants, usage)
\`\`\`
