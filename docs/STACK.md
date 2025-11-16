# Stack & Tooling

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) | React Server Components, streaming, SEO metadata |
| Styling | Tailwind CSS + custom glass tokens | Editorial gradients, dark luxury palette |
| Animation | Framer Motion | Used for hero + feature reveals |
| Icons | Lucide | Lightweight, configurable |
| State | React hooks (RSC + client components) | Realm selector + preview handled client-side |
| Maps | Mapbox GL JS | Atmospheric map, Drop-ins, GhostChat halos |
| Backend | Firebase (Auth, Firestore, Storage, Functions) | Email/password, anon dev mode, Apple/Google optional via env |
| Analytics | PostHog (cookieless) + Firebase Remote Config | Privacy-safe metrics + feature flags |
| Notifications | Firebase Cloud Messaging (planned) | Aligns with mobile/web push |
| Testing | ESLint + TypeScript | Expand with Playwright & unit tests in future sprint |
| CI/CD | Vercel + GitHub Actions (future) | PR previews + lint/type-check gate |

## Environment Profiles
- `.env.local` – local dev secrets (Mapbox token, Firebase web config, PostHog key).
- Vercel env groups – `production`, `preview`, `development`.
- Feature flags stored in Firestore `config/flags` or Firebase Remote Config for mobile parity.

## Deployment Flow
1. Branch + PR.
2. Lint + type-check gate via CI.
3. Deploy to Vercel (App Router) with environment variables + Mapbox token.
4. Firebase Functions deploy for backend (future) via `firebase deploy --only functions,firestore:rules` (script stub TBD).

## Data Model Draft
- `users` – profile, avatar wardrobe selections, verification state, active realm.
- `presence` – ephemeral location pulses (realm, aura intensity, jittered coordinates).
- `stories` – template used, media, expiration timestamp, visibility scope.
- `circles` – membership, dues, events, host roles.
- `events` – map pin, host circle, capacity, monetization toggles.
- `messages` – GhostChat threads keyed by location/realm.
- `reports` – moderation queue with escalation states.
- `boosts` – purchase metadata, impressions, auto-expiry.

## Testing & Quality Gates
- `npm run lint` and `npm run type-check` must pass before merging.
- Visual QA: capture screenshots (Playwright or manual) for hero or color changes.
- Performance budget: Lighthouse 85+ on desktop (target) by limiting bundle size + RSC usage.
