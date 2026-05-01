# Emotion Design System — Technical README

This repository contains a small, component-driven design system implemented with React + TypeScript and built with Vite. The goal is a pragmatic, CSS-variable-first system with co-located component styles and a clear atomic folder structure.

## Quick scripts
- Install dependencies: `npm install`
- Start local dev server: `npm run dev` (runs `vite`)
- Build (TypeScript build + Vite): `npm run build` (runs `tsc -b && vite build`)
- Lint: `npm run lint` (runs `eslint .`)
- Preview production build: `npm run preview` (runs `vite preview`)

## Tech stack
- Vite (dev server, build)
- React 19 + TypeScript
- Plain CSS files co-located with components
- CSS custom properties for tokens and theming (see `src/styles/tokens.css`)

## Project structure (high level)
- `src/` — application and demo entry
  - `assets/` — images and static assets used by examples
  - `components/` — design-system components
    - `atoms/` — lowest-level building blocks (e.g. `button/`, `download-button/`)
    - `molecules/` — composed components built from atoms (e.g. `card/`)
    - `organisms/` — larger, layout-level components
  - `styles/` — global styles and design tokens (`tokens.css`)

Open the implementation to see the conventions used (examples below).

## Design tokens
Tokens live in `src/styles/tokens.css` and expose a stable set of CSS custom properties used throughout the system. Key characteristics:

- Color, typography, spacing, radii, and shadow tokens are defined as `--` variables on `:root`.
- A dark-mode variant is provided via `@media (prefers-color-scheme: dark)`.
- Compatibility aliases (for migration) exist such as `--color-primary` that point to the canonical token values.

Example (how to consume tokens in CSS):

```css
.my-component {
  background: var(--color-surface);
  color: var(--color-text-high);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}
```

Because `src/index.css` imports `src/styles/tokens.css`, tokens are available globally in the demo app.

## Component conventions
- File layout: each component is a folder containing a `.tsx` and a `.css` file (co-located styles). Example: `src/components/atoms/button/Button.tsx` + `Button.css`.
- CSS namespace: components use `ds-` or a namespaced class (e.g. `.ds-button`, `.m-card`) to avoid global collisions.
- Variants and modifiers: components expose simple `variant` props (e.g. `primary` / `secondary`) and map those to modifier classes like `ds-button--primary`.
- Accessibility: components use ARIA attributes where appropriate (e.g. `aria-disabled`) and expose focus-visible styles.

Example usage (React):

```tsx
import Button from './components/atoms/button/Button'

function Example() {
  return <Button variant="primary">Save</Button>
}
```

Example CSS for a button (already used in the system):

```css
.ds-button--primary {
  background: var(--color-primary-base);
  color: var(--color-text-on-dark);
}
```

## Theming and dark mode
- Dark mode is handled with `@media (prefers-color-scheme: dark)` inside `tokens.css`. To implement programmatic theme switching, create a top-level data attribute (for example `data-theme="dark"`) and apply token overrides under that selector.

## Adding a new token
1. Add a semantically named variable to `src/styles/tokens.css` under the appropriate category (colors, spacing, typography).
2. Prefer adding aliases (e.g. `--color-primary`) only when necessary for compatibility.
3. Run your changes in the demo app to verify visual regressions.

## Component development workflow
1. Create the component folder under `src/components/<level>/Name/`.
2. Implement `Name.tsx` and `Name.css` with `ds-` prefixed classes.
3. Use existing tokens and atomic components where possible (do not duplicate visual primitives).
4. Add examples to `App.tsx` (or create a Storybook entry if you add Storybook).

## Accessibility
- Buttons use `disabled` and `aria-disabled` consistently.
- Focus styles use `:focus-visible`; do not remove browser focus outlines without providing a clear replacement.

## Tests & tooling
- There are no test runners configured by default. Recommended next steps:
  - Add unit tests with `vitest` or `jest` + `@testing-library/react`.
  - Add visual regression tests (Chromatic, Percy) if you need strict UI guarantees.

## Recommendations / next steps
- Add Storybook for live component documentation and visual testing.
- Add automated accessibility checks (axe-core) in CI.
- Standardize token naming if more platforms (native/mobile) will consume these tokens.

## Where to look in this repo
- Tokens: [src/styles/tokens.css](src/styles/tokens.css)
- Button atom: [src/components/atoms/button/Button.tsx](src/components/atoms/button/Button.tsx)
- Card molecule: [src/components/molecules/card/Card.tsx](src/components/molecules/card/Card.tsx)
- Entry/demo: [src/main.tsx](src/main.tsx) and [src/index.css](src/index.css)

---

If you want, I can also:
- add a short contribution guide & PR checklist,
- scaffold Storybook and a basic story for `Button`, or
- add a CI job template for lint and build.

