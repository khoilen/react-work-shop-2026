# React Workshop 2026 Instructions

This repository is a pnpm/Turborepo monorepo for a React ecommerce workshop.

## Project Shape

- `apps/web` is the Vite React 19 app.
- `packages/ui` contains shared Tailwind UI primitives.
- `packages/http-client` contains the typed Axios client and `HttpError` normalization.
- `static` contains completed static Furniro HTML pages that should be used as local design references.
- `apps/web/public/images` contains the runtime image assets. Reference them from React with `/images/...` paths.

## Coding Rules

- Inspect existing files before editing and follow the closest local pattern.
- Preserve unrelated user changes. Do not reset, overwrite, or revert files unless explicitly requested.
- Prefer TypeScript function components and data-driven rendering for repeated UI.
- Reuse `@react-workshop/ui` components when they fit. Do not add shared abstractions until reuse is clear.
- Keep styling consistent with Tailwind and the Furniro design colors, especially brand gold `#b88e2f`.
- Avoid adding dependencies unless there is a clear functional need.
- Keep implementation scope close to the requested feature.

## Validation

Use the narrowest useful command first:

```bash
pnpm --filter @react-workshop/web typecheck
```

For broader changes, also run:

```bash
pnpm lint
pnpm test
pnpm build
```
