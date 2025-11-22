# Testing & Quality Gates

1. **Unit tests** – Node's built-in `node:test` runner (`npm test`) executes deterministic scoring helpers and any future pure functions.
2. **Lint + Types** – `npm run lint` and `npm run type-check` must both pass before merging/deploying. Integrate them into CI (GitHub Actions or Vercel checks).
3. **Visual QA** – Landing page relies on Tailwind tokens only; Percy/Chromatic can be layered later. For now, take hero screenshots per release.
4. **Performance budgets** – `next build` fails when First Load JS exceeds 180 kB thanks to App Router defaults. Keep hero animations lightweight and prefer RSC data.
5. **Security checks** – `npm audit` monthly plus Firebase Security Rules tests before enabling write access to `presence`, `stories`, or `reports`.
