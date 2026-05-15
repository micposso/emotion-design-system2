# How to Publish a React + TypeScript Library to npm

---

## 1. Create an npm Organization

1. Go to [npmjs.com](https://www.npmjs.com) and sign in
2. Click your avatar → **Add Organization**
3. Enter an organization name (e.g. `micposso`) — this becomes your scope prefix: `@micposso/`
4. Choose **Unlimited public packages** (free tier)
5. Click **Create Organization**

---

## 2. Set Up Your Repo as an npm Package

### 2a. Create a barrel entry file

Create `src/lib.ts` — this is the single entry point that exports everything:

```ts
// Atoms
export { default as Button } from './components/atoms/button/Button'
export { default as Badge } from './components/atoms/badge/Badge'
// ... all other components

// Tokens CSS
import './styles/tokens.css'
```

### 2b. Create a dedicated Vite lib config

Create `vite.lib.config.ts` at the project root:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'YourLibraryName',
      fileName: (format) => `your-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
      },
    },
    cssCodeSplit: false,
  },
})
```

### 2c. Create a TypeScript lib config

Create `tsconfig.lib.json` at the project root:

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "rootDir": "./src",
    "noEmit": false,
    "declaration": true,
    "declarationDir": "dist/types",
    "emitDeclarationOnly": true,
    "allowImportingTsExtensions": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  },
  "include": ["src/lib.ts", "src/components/**/*", "src/styles/**/*"]
}
```

### 2d. Update `package.json`

```json
{
  "name": "@your-org/your-package",
  "version": "1.0.0",
  "description": "Your library description",
  "author": "your-username",
  "license": "MIT",
  "private": false,
  "type": "module",
  "main": "./dist/your-library.umd.js",
  "module": "./dist/your-library.es.js",
  "types": "./dist/types/lib.d.ts",
  "exports": {
    ".": {
      "import": "./dist/your-library.es.js",
      "require": "./dist/your-library.umd.js",
      "types": "./dist/types/lib.d.ts"
    },
    "./style.css": "./dist/your-library.css"
  },
  "files": ["dist"],
  "scripts": {
    "build:lib": "tsc -p tsconfig.lib.json && vite build --config vite.lib.config.ts",
    "prepublishOnly": "npm run build:lib"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  }
}
```

> **Important:** Remove `"private": true` if it exists — private packages cannot be published.

### 2e. Add `.npmignore`

Create `.npmignore` to keep the published package lean:

```
src/
public/
*.config.ts
*.config.js
tsconfig*.json
index.html
```

---

## 3. Build the Library

Run the build to generate the `dist/` folder:

```bash
npm run build:lib
```

Verify `dist/` contains:
- `your-library.es.js`
- `your-library.umd.js`
- `your-library.css`
- `types/lib.d.ts`

---

## 4. Create an npm Automation Token (bypasses 2FA)

1. Go to [npmjs.com](https://www.npmjs.com) → click your avatar → **Access Tokens**
2. Click **Generate New Token** → choose **Granular Access Token**
3. Fill in:
   - **Token name**: e.g. `publish-token`
   - **Expiration**: set to your preference
   - **Packages and scopes**: select **Read and write**
   - **Organizations**: select your org, set to **Read and write**
4. Click **Generate Token**
5. **Copy the token immediately** — it will not be shown again

### Set the token in npm

```bash
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE
```

Or use it inline per-command:

```bash
npm publish --access public --//registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE
```

---

## 5. Publish to npm

```bash
npm publish --access public
```

The `--access public` flag is required for scoped packages (`@org/name`) on a free npm account — scoped packages default to private otherwise.

Your package will be live at:
```
https://www.npmjs.com/package/@your-org/your-package
```

---

## 6. Install and Use the Published Package

```bash
npm install @your-org/your-package
```

```tsx
import { Button, Badge, Card } from '@your-org/your-package'
import '@your-org/your-package/style.css'
```

---

## Publishing a New Version

1. Bump the version in `package.json` (follow [semver](https://semver.org/)):
   - Patch fix: `1.0.0` → `1.0.1`
   - New feature: `1.0.0` → `1.1.0`
   - Breaking change: `1.0.0` → `2.0.0`

   Or use npm's built-in version bump:
   ```bash
   npm version patch   # or minor / major
   ```

2. Publish:
   ```bash
   npm publish --access public
   ```
