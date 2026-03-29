# DECISIONS

This log captures the opinionated calls made while building the SceneHim MVP so future contributors understand the intent.

## Architecture
- **Next.js 15 App Router + React Server Components** remain the base because they ship the fastest SSR + streaming experience and integrate cleanly with Vercel + Firebase edge functions.
- **Client components** are limited to motion-heavy surfaces (realm selector, atmospheric map, GhostChat teaser) so that everything else can stay cache-friendly.
- **Firebase + Mapbox** stay as the backend + geospatial pairing per original stack, but analytics and feature flags are routed through PostHog + Firestore doc as described in docs/PRODUCT.md.

## Experience
- **Selective Realms** are modeled as first-class objects in `app/lib/data.ts` and typed in `app/lib/types.ts` so realm colors, aura themes, and icons stay consistent between UI + backend.
- **Atmospheric Map** is rendered with layered gradients instead of a live Mapbox canvas for now to keep bundle size low; the gradient block mirrors the production API contract so it can be swapped with the real map client later.
- **GhostChat + Drop-ins** run as documented placeholders—copy + interaction flows are specified without wiring to Firebase to keep scope in check while still demonstrating product narrative.

## Safety & Monetization
- **Safety pillars** are codified in data structures so they can back moderation dashboards later.
- **Monetization tiers** are included even without payments so stakeholders can model pricing prior to launch.

## Tooling
- **Tailwind + Framer Motion** were kept to satisfy the high-fashion micro-interaction brief with minimal runtime overhead.
- **Docs-first workflow** (docs/STACK.md + docs/PRODUCT.md) ensures every environment variable, algorithm, and acceptance criterion is tracked before deeper backend work.
- **Preview script** (`npm run preview`) was added to mirror production behavior locally so gradients, animations, and realm theming can be validated against the optimized Next.js build.
