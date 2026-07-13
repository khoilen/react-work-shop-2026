# Work React 2026

> Building modern React applications with the right architecture, tools, and best practices.

## About

### What you'll learn

Modern React development is much more than writing components.

In this workshop, we'll explore:

- The modern React ecosystem
- Popular libraries and the problems they solve
- How to structure a scalable React application
- Common mistakes developers make
- How to avoid those mistakes using modern tools and practices

### Prerequisites

Participants should be familiar with:

- JavaScript (ES6+)
- React fundamentals

### Modern React Ecosystem

React focuses on building user interfaces.

Everything else comes from the React ecosystem.

We'll briefly introduce the most commonly used libraries and discuss:

- What problem they solve
- When to use them
- Common alternatives

| Category      | Popular Libraries             |
| ------------- | ----------------------------- |
| Build Tool    | Vite                          |
| Routing       | React Router                  |
| Server State  | TanStack Query                |
| Client State  | Zustand                       |
| Forms         | React Hook Form               |
| Validation    | Zod                           |
| Styling       | Tailwind CSS                  |
| UI Components | shadcn/ui, MUI                |
| Testing       | Vitest, React Testing Library |

### Recommended Project Structure

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
|-- app/
|   |-- app.tsx
|   |-- router.tsx
|   |-- providers.tsx
|   `-- config.ts
|-- components/
|   |-- ui/
|   `-- layout/
|-- features/
|   |-- products/
|   |   |-- api/
|   |   |-- components/
|   |   |-- hooks/
|   |   |-- schemas/
|   |   |-- types.ts
|   |   `-- index.ts
|   `-- cart/
|       |-- api/
|       |-- components/
|       |-- hooks/
|       |-- store.ts
|       |-- types.ts
|       `-- index.ts
|-- hooks/
|-- lib/
|-- services/
|-- stores/
|-- styles/
|-- types/
|-- utils/
`-- main.tsx
```

#### What each folder is for

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

#### Feature folder pattern

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

## What should be shared?

Move code to a shared folder only when it is reused by more than one feature.

Good shared code:

- Generic UI components such as `Button`, `Input`, `Card`, and `Modal`
- Reusable hooks such as `useDebounce` or `useClickOutside`
- Pure utilities such as `formatCurrency` or `sortByDate`
- Application setup such as router, providers, and query client configuration
- Business ui logic  that is reused across multiple features

Keep code inside a feature when it only belongs to that feature.

Examples:

- `ProductCard` should stay in `features/products/components/`
- `CartSummary` should stay in `features/cart/components/`
- `CheckoutFormSchema` should stay in `features/checkout/schemas/`

## Common React Mistakes

Instead of learning APIs, we'll learn by fixing real-world mistakes.

Each demo follows the same format:

1. The problem
2. Why it happens
3. Why it's bad
4. Modern solution
5. Best practice

---

## Mistake 1 — Managing Server State Manually

### Problem

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

### Problem

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

### Problem

Managing every input with useState.

Topics

- Validation
- Form state
- Error messages
- Submission

Solution

- React Hook Form
- Zod

Key takeaway

Forms become easier to build and maintain with dedicated tools.

---

## Mistake 4 — Components Doing Too Much

### Problem

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
- API layer
- Types
- Validation schema

Key takeaway

Each module should have a single responsibility.

---

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
