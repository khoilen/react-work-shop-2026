# React Workshop 2026

React 19 + Vite monorepo starter with pnpm, Turborepo, Storybook, TanStack Query, React Hook Form, Tailwind CSS, and shared packages.

## Requirements

- Node.js 20.19+ or 22.12+
- pnpm 10+

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` - run all development tasks through Turborepo
- `pnpm build` - build apps and packages
- `pnpm lint` - lint all workspaces
- `pnpm typecheck` - type-check all workspaces
- `pnpm storybook` - run the UI package Storybook

## Workspace

- `apps/web` - Vite React app
- `packages/ui` - shared UI components developed with Storybook
- `packages/http-client` - shared typed fetch client
- `packages/eslint-config` - shared ESLint flat configs
- `packages/tsconfig` - shared TypeScript configs
