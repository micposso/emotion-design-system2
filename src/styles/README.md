Design tokens: colors

- Location: `src/styles/tokens.css`
- Purpose: Centralize all color values as CSS variables. Use these variables in components and styles — never raw hex/rgba values.

Usage examples:
- Background: `background: var(--color-bg-main);`
- Primary button: `background: var(--color-primary-base); color: var(--color-text-on-dark);`
- Text: `color: var(--color-text-main);`

Button examples (use the `Button` atom):
- Primary: `<Button variant="primary">Primary</Button>` — filled brand button.
- Secondary: `<Button variant="secondary">Secondary</Button>` — surface + border.
- Ghost: `<Button variant="ghost">Ghost</Button>` — transparent, for subtle actions.
Button examples (use the `Button` atom):
- Primary: `<Button variant="primary">Primary</Button>` — filled brand button.
- Secondary: `<Button variant="secondary">Secondary</Button>` — surface + border.
- Disabled: `<Button variant="disabled" disabled>Disabled</Button>` — visually inert, non-interactive.

Migration notes:
- Search for hex/rgb/rgba literals in `src/` and replace them with the appropriate `--color-*` variable.
- Avoid hardcoded color tokens inside components; prefer semantic aliases (e.g., `--color-surface`, `--color-border`).
