Design tokens: colors

- Location: `src/styles/tokens.css`
- Purpose: Centralize all color values as CSS variables. Use these variables in components and styles — never raw hex/rgba values.

Usage examples:
- Background: `background: var(--color-bg);`
- Primary button: `background: var(--color-primary); color: var(--color-primary-foreground);`
- Text: `color: var(--color-text);`

Migration notes:
- Search for hex/rgb/rgba literals in `src/` and replace them with the appropriate `--color-*` variable.
- Avoid hardcoded color tokens inside components; prefer semantic aliases (e.g., `--color-surface`, `--color-border`).
