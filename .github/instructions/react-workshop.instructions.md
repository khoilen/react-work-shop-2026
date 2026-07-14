---
applyTo: "**/*.{ts,tsx,css,json}"
---

# React Workshop File Rules

- Keep React app code in `apps/web/src` and shared reusable primitives in `packages/ui/src`.
- Use existing Vite aliases instead of deep relative imports for workspace packages.
- Keep API concerns behind `apps/web/src/api.ts` or `packages/http-client` rather than calling Axios directly from components.
- For Furniro UI work, compare against `static/index.html`, `static/shop.html`, `static/product-detail.html`, `static/cart.html`, `static/contact.html`, and `static/about.html`.
- Do not remove accessibility basics: labels for form fields, meaningful image alt text where content-bearing, and button/link semantics for interactive controls.
- After TypeScript or React changes, run `pnpm --filter @react-workshop/web typecheck`.
