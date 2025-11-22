# Stack & Tooling

| Layer | Choice | Version / Notes |
| --- | --- | --- |
| Framework | Next.js App Router | 15.0.2 |
| Language | TypeScript | ^5 (strict mode in `tsconfig.json`) |
| Styling | Tailwind CSS + custom glassmorphism tokens | 3.4.x |
| Animation | Framer Motion | 11.x |
| Icons | Lucide React | 0.263.x |
| Maps | Mapbox GL JS (serverless tiles) | 3.x |
| Backend SDK | Firebase Modular SDK | 10.7.x |
| Validation | Zod schemas | 3.22.x |
| Analytics | PostHog (cookieless) via public API key | configurable |
| Notifications | Firebase Cloud Messaging (token reserved in env contract) | TBD |
| Feature Flags | Firestore doc referenced by `NEXT_PUBLIC_FEATURE_FLAGS_DOC` | string path |
| Testing | Node test runner (`node:test`) | built into Node 18 |
| CI | `npm run lint && npm run test` (GitHub/Vercel ready) | configurable |

## Scripts

- `npm run dev` – Local Next.js dev server.
- `npm run build` – Production build.
- `npm start` – Production runtime.
- `npm run lint` – ESLint gate.
- `npm run type-check` – Isolated TypeScript compile.
- `npm test` – Node test runner for scoring helpers.

## Infra Notes

- Deploy targets: Vercel (preferred) or Docker (Dockerfile provided).
- CDN / Edge caching inherits from Vercel defaults.
- Mapbox token must have URL restriction set to the deployment domain for safety.
- Firebase project should enable Authentication (Email/Password + Anonymous), Firestore, Storage, and Cloud Functions for future realm automations.
