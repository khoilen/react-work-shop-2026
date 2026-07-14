---
name: github-copilot-workflow
description: Use when Codex or GitHub Copilot needs to make, review, or plan changes in this React Workshop 2026 repository, especially changes involving the Vite React app, shared UI components, ecommerce mock data, Figma/Furniro design implementation, GitHub Copilot repository instructions, or validation commands.
---

# GitHub Copilot Workflow

## Workflow

1. Inspect before editing. Read the relevant app/package files, existing static Furniro pages, and shared UI components before choosing an implementation pattern.
2. Preserve user work. Check `git status --short` before edits and do not revert unrelated changes.
3. Prefer existing architecture. Keep changes within the pnpm/Turborepo workspace structure:
   - `apps/web` is the Vite React app.
   - `packages/ui` contains shared Tailwind UI primitives.
   - `packages/http-client` contains the typed Axios wrapper.
   - `static` contains HTML references for the Furniro ecommerce design.
4. Keep React code data-driven when repeating sections such as products, navigation, footer links, cart rows, and feature cards.
5. Reuse shared UI components when they fit the existing behavior and visual style. Add shared abstractions only when the pattern is reused or clearly belongs in `packages/ui`.
6. Validate with the narrowest useful command first, then broaden when the change crosses package or app boundaries.

## React Workshop Conventions

- Use TypeScript, React function components, Tailwind classes, and existing path aliases from `apps/web/vite.config.ts`.
- Keep public image paths rooted at `/images/...` for assets in `apps/web/public/images`.
- For the Furniro ecommerce UI, use `static/*.html` as the local visual reference and Figma as the source of truth when available.
- Match the existing Furniro colors already present in shared UI, especially brand gold `#b88e2f`.
- Keep body/global styles in `apps/web/src/styles.css`; keep component-specific styling in class names unless a reusable global rule is justified.
- Avoid adding runtime dependencies unless the feature materially needs them.

## Validation

Run the most relevant checks after changes:

```bash
pnpm --filter @react-workshop/web typecheck
pnpm lint
pnpm test
pnpm build
```

Use the filtered web typecheck for app-only edits. Use full repo checks when touching shared packages, workspace config, or cross-package contracts.
