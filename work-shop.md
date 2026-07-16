# Work React 2026

- Building modern React applications with the right architecture, tools, and best practices.

## About

Modern React development is much more than writing components.

In this workshop, we'll explore:

- The modern React ecosystem
- How to structure a scalable React application
- Common mistakes developers make
- How to avoid those mistakes using modern tools and practices

## Prerequisites

Participants should be familiar with:

- JavaScript (ES6+)
- React fundamentals

## Modern React Ecosystem

React focuses on building user interfaces.

Everything else comes from the React ecosystem.

We'll briefly introduce the most commonly used libraries and discuss:

- What problem they solve
- When to use them
- Common alternatives

| Category      | Popular Libraries                |
| ------------- | ---------------------------------|
| Build Tool    | Vite,                            |
| Routing       | React Router                     |
| Handle with http  | TanStack Query, Axios            |
| Client State      | Zustand, Redux                   |
| Forms         | React Hook Form, form milk       |
| Validation    | Zod (options)                    |
| Styling       | Tailwind CSS, Boostrap, Material |
| UI Components | shadcn/ui, MUI,  antd            |
| Testing       | Vitest, React Testing Library    |

## Recommended Project Structure

We'll discuss how to organize React applications as they grow.

Topics include:

- Feature-based architecture
- Shared components
- Custom hooks
- API layer
- Folder organization
- Separation of concerns

The goal is not to create many folders from the beginning.

The goal is to make code easy to find, easy to change, and hard to accidentally break.

Recommended structure:

```txt
src/
|-- page/
|   |-- page-1.tsx
|   |-- router.tsx
|   |-- providers.tsx
|   `-- config.ts
|-- layout/
|-- components/
|-- features/
|   |-- products/
|   |   |-- api/
|   |   |-- components/
|   |   |-- hooks/
|   |   |-- stores/
|   -- cart/
|       |-- api/
|       |-- components/
|       |-- hooks/
|       |-- stores/
|-- hooks/
|-- lib/
|-- services/
|-- stores/
|-- styles/
|-- types/
|-- utils/
`-- index.tsx
```

### What each folder is for

| Folder        | Purpose                                                          | Example content                                     |
| ------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| `app/`        | Application setup and wiring                                     | router, providers, app-level config                 |
| `components/` | Shared UI that is not tied to one business feature               | buttons, inputs, modal, header, sidebar             |
| `features/`   | Business modules grouped by domain                               | products, cart, checkout, authentication            |
| `hooks/`      | Reusable hooks shared across multiple features                   | `useDebounce`, `useMediaQuery`, `useLocalStorage`   |
| `lib/`        | Third-party library setup and small wrappers                     | query client, date formatter, analytics client      |
| `services/`   | Cross-feature services and external integrations                 | HTTP client, storage service, notification service  |
| `stores/`     | Global client state used by multiple features                    | theme store, user preferences, auth session         |
| `styles/`     | Global styles, CSS variables, and framework entry files          | Tailwind entry file, reset styles, design tokens    |
| `types/`      | Shared TypeScript types used across the application              | API response types, common pagination types         |
| `utils/`      | Pure helper functions with no React or browser-specific behavior | currency formatter, string helpers, sorting helpers |

### Feature folder pattern

A feature should contain the code needed to support one business area.

Example:

```txt
features/products/
|-- api/
|   |-- get-products.ts
|   `-- get-product-detail.ts
|-- components/
|   |-- product-card.tsx
|   |-- product-grid.tsx
|   `-- product-filter.tsx
|-- hooks/
|   |-- use-products.ts
|   `-- use-product-detail.ts
|-- schemas/
|   `-- product-filter.schema.ts
```

This keeps product-related API calls, UI, hooks, validation, and types close together.

When a developer needs to change the product page, they know where to start.

## Common React Mistakes

## Mistake 1 — Managing Server State Manually

Using useEffect + fetch for every API request.

Topics

- Loading state
- Error handling
- Retry
- Caching
- Background refetch

Solution

- TanStack Query

Key takeaway

Server State should not be managed like local component state.

---

## Mistake 2 — Using the Wrong State Management

Using Context or global state for everything.

Topics

- Local state
- Lifting state
- Context
- Zustand

Solution

Choose the simplest state management solution that fits the problem.

Key takeaway

Not every state belongs in a global store.

---

## Mistake 3 — Complex Forms with useState

Managing every input with useState.

Topics

- Validation
- Form state
- Error messages
- Submission

Solution

- React Hook Form

Key takeaway

Forms become easier to build and maintain with dedicated tools.

---

## Mistake 4 — Components Doing Too Much

One component handles:

- UI
- API calls
- Business logic
- Validation
- State management

Solution

Refactor into:

- Components
- Custom Hooks

Key takeaway

Each module should have a single responsibility.

---

## Mistake 5: Project without linting and typecheck, unittest

The project runs, so developers assume it's ready to ship.

Without linting and type checking, simple mistakes can reach production.

Examples:

- Missing useEffect dependencies
- Unused variables and dead code
- Incorrect prop types
- Type errors causing runtime crashes

Run these checks before every commit or in CI:

``
pnpm typecheck
pnpm lint
pnpm test
pnpm build
``

## Mistake 6: Project without rule codding convention

## Mistake 7: Design component not flexible

### Best Practices

We'll conclude with several practical guidelines that apply to almost every React project.

Topics include:

- Prefer composition over large components
- Avoid unnecessary state
- Don't abuse useEffect
- Server State ≠ Client State
- Organize by feature
- Choose libraries based on problems, not popularity
- Keep components focused and reusable

---
