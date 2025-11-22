# DECISIONS

This document captures non-obvious defaults taken while scaffolding the SceneHim experience.

1. **Single premium landing** – Focused on a cinematic marketing surface that communicates Realms, Atmospheric Maps, monetization, and moderation before building full CRUD flows. This de-risks UX exploration while keeping the repo deployable.
2. **Realm algorithm prototype** – Added a deterministic scoring helper in `app/lib/algorithms.ts` plus unit tests. This allows future matchmaking services to reuse a vetted scoring formula.
3. **Node test runner for quality gate** – Leaned on the built-in `node:test` harness instead of heavier frameworks to keep dependencies minimal while still enforcing deterministic algorithms.
4. **Documentation-first** – Created a `docs/` workspace describing the stack, data model, monetization, testing strategy, and safety posture so that future contributors can align without extra context from product.
5. **Environment contract** – Added `.env.example` to make Firebase/Mapbox/PostHog expectations explicit for both Vercel and local Docker targets.
