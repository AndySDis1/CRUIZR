# DECISIONS

A living log of architectural and product calls for SceneHim / Cruizr.

## 2024-04-xx
- **Realm data embedded in repo** – The landing experience showcases real copy + aura values, so `app/lib/data.ts` holds
  curated defaults. Later, back this with Firestore collections per realm.
- **Mapbox + Firebase baseline** – Aligns with spec asking for privacy-safe analytics + serverless cost profile. Firebase Auth
  (email/password, anonymous dev mode, optional Apple/Google) + Firestore for presence logs. Mapbox handles atmospheric tiles.
- **PostHog analytics** – Selected for cookieless tracking and feature flag toggles through Remote Config, aligning with privacy
  goals.
- **Tailwind utility tokens** – Instead of component libraries, Tailwind + custom glassmorphism keeps the editorial look. Motion
  is handled through Framer Motion for key hero pieces.
- **Documentation-first workflow** – README, `docs/STACK.md`, and this file must be updated with every feature PR to keep the
  distributed team aligned.
