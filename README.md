# SceneHim · Social Presence Network

SceneHim (codename **CRUIZR**) is a fashion-editorial social presence network where intent, vibe, and location are filtered
through **Selective Realms**: professional, social, dating, sexual (18+), and neutral fallback. Animated atmospheric maps,
GhostChat (ephemeral location-bound DMs), circles, and monetization tiers are modeled in this MVP so the product narrative is
clear before backend integration.

## Highlights

- 🎚️ **Selective Realms** – Realm selector drives aura colors, compatibility scoring, and exposure radius.
- 🗺️ **Atmospheric Map** – Cinematic gradients visualize presence clusters, compatibility, and drop-ins.
- 💬 **GhostChat & Drop-ins** – Ephemeral communication windows + geo-pinned micro posts.
- 🌀 **Circles & Events** – Spotlight cards for community spaces and promoted events.
- 🛡️ **Safety Stack** – Location jitter, consent-first flows, and moderator guardrails documented + surfaced.
- 💸 **Monetization** – Boosts, SceneHim Pro, and Brand Galleries tiers included for go-to-market planning.

## Getting Started

### 1. Install deps
```bash
npm install
```

### 2. Configure environment
Copy the sample env file and fill in Firebase + Mapbox + analytics keys.
```bash
cp .env.example .env.local
```
Review `docs/PRODUCT.md` for the full variable list (PostHog + feature flags included).

### 3. Run locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to explore the cinematic landing experience.

### 4. Preview production build
```bash
npm run preview
```
This runs a full build and starts Next.js in production mode so you can validate motion, gradients, and realm theming with the optimized bundle.

## Scripts

- `npm run dev` – Start Next.js dev server
- `npm run build` – Production build
- `npm run start` – Run production server locally
- `npm run preview` – Build then run production server for parity checks
- `npm run lint` – ESLint (quality gate)
- `npm run type-check` – TypeScript project validation

## Documentation

- [`DECISIONS.md`](./DECISIONS.md) – Opinionated choices + tradeoffs.
- [`docs/STACK.md`](./docs/STACK.md) – Tooling matrix, versions, CI expectations.
- [`docs/PRODUCT.md`](./docs/PRODUCT.md) – Data models, env vars, safety + monetization specs.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) – Existing deployment instructions (Vercel, Docker, etc.).

## Tech Stack

- **Framework** – Next.js 15 (App Router) + React 18 (RSC + Client components where needed)
- **Language** – TypeScript
- **Styling** – Tailwind CSS + custom gradients
- **Motion** – Framer Motion
- **Maps** – Mapbox GL JS (placeholder gradient until token is wired)
- **Backend Targets** – Firebase Auth/Firestore/Storage, Firebase Cloud Messaging, PostHog analytics

## Deployment

- Deploy on **Vercel** with the env variables configured in the dashboard.
- Use **Firebase Functions** for location-jittered APIs, GhostChat encryption helpers, and moderation hooks.
- Optional Docker path: `docker-compose up --build`.

## Status

This repository ships a polished marketing + product experience with real data models so engineering can continue wiring
Firebase + Mapbox integrations without redoing UI. Refer to `docs/PRODUCT.md` for acceptance checklist coverage.
