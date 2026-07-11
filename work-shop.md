# React in Practice 2026

> Building modern React applications with the right architecture, tools, and best practices.

---

# About

## What you'll learn

Modern React development is much more than writing components.

In this workshop, we'll explore:

- The modern React ecosystem
- Popular libraries and the problems they solve
- How to structure a scalable React application
- Common mistakes developers make
- How to avoid those mistakes using modern tools and practices

---

## Who is this workshop for?

- Junior developers learning React
- Mid-level developers building production applications
- Senior developers interested in modern React practices

---

## Prerequisites

Participants should be familiar with:

- JavaScript (ES6+)
- React fundamentals
- Functional components
- useState
- useEffect
- npm

---

# Workshop Agenda

| Time | Topic |
|------|-------|
| 0–10 min | Modern React Ecosystem |
| 10–15 min | Recommended Project Structure |
| 15–55 min | Common React Mistakes (Live Coding) |
| 55–60 min | Summary & Q&A |

---

# Modern React Ecosystem

React focuses on building user interfaces.

Everything else comes from the React ecosystem.

We'll briefly introduce the most commonly used libraries and discuss:

- What problem they solve
- When to use them
- Common alternatives

| Category | Popular Libraries |
|----------|-------------------|
| Build Tool | Vite |
| Routing | React Router |
| Server State | TanStack Query |
| Client State | Zustand |
| Forms | React Hook Form |
| Validation | Zod |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui, MUI |
| Testing | Vitest, React Testing Library |

---

# Recommended Project Structure

We'll discuss how to organize React applications as they grow.

Topics include:

- Feature-based architecture
- Shared components
- Custom hooks
- API layer
- Folder organization
- Separation of concerns

Example:

src/
├── components/
├── features/
├── hooks/
├── api/
├── stores/
├── router/
├── utils/
└── types/

---

# Common React Mistakes

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

# Best Practices

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

# Resources

Official documentation

- React
- Vite
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Zod
- Tailwind CSS
- React Testing Library

---

# Repository Structure

This repository contains:

/demos
    /01-server-state
    /02-client-state
    /03-forms
    /04-component-architecture

/slides

/assets

/solutions

---

# After the Workshop

After completing this workshop, participants should be able to:

✓ Understand the modern React ecosystem

✓ Know when to use popular React libraries

✓ Structure medium-to-large React applications

✓ Recognize common React mistakes

✓ Apply production-ready best practices

✓ Build React applications with greater confidence
