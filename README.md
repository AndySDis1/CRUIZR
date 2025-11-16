# SceneHim / Cruizr

SceneHim is a couture-level social presence network inspired by fashion editorials and selective queer spaces. Realms keep your
intent explicit, atmospheric maps keep location private-but-useful, and monetization is respectful. This repo contains the
Next.js 15 App Router experience, product docs, and reference data to ship an MVP quickly.

## ✨ Highlights
- **Selective Realms** – Professional, Social, Dating, Sexual, and Neutral modes with realm-specific intents, avatars, and
  safety protocols.
- **Atmospheric Map** – Realm-colored auras, GhostChat DM halos, and geo-pinned Drop-ins (Mapbox-ready).
- **Stories & Avatars** – Cinematic wardrobe presets, AI-avatar slots, and realm-aware expiry defaults.
- **Circles & Events** – Invite-only groups with dues, promoted venues, and live RSVP sync.
- **Guardian Safety Stack** – Identity weave, Guardian AI, panic handoff, age/realm gates.
- **Monetization** – Boosts, Cruizr Pro, Scene Director host plans, and promoted events.

## 🏁 Quick Start
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Copy environment template**
   ```bash
   cp .env.example .env.local
   ```
3. **Fill environment variables** (see table below).
4. **Run the dev server**
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to explore the cinematic landing page.

## 🔐 Environment Variables
| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox tiles for atmospheric map + Drop-ins |
| `NEXT_PUBLIC_FIREBASE_API_KEY` etc. | Firebase web credentials for auth + storage |
| `NEXT_PUBLIC_POSTHOG_KEY` (optional) | Privacy-safe analytics (cookieless mode) |
| `NEXT_PUBLIC_AUTH_PROVIDERS` | Comma list (email,apple,google) to toggle OAuth |

> Document additional keys in `docs/STACK.md` when adding integrations.

## 🧠 Product Pillars
- **Realm Engine** – intent + aura modeling, wardrobe presets, and guardian protocols (`app/lib/data.ts`).
- **Discovery System** – feature registry for Map, GhostChat, Drop-ins, and Boosts (see Discovery section in UI).
- **Story Studio** – curated templates for Atelier Drop, GhostChat Trace, After Dark.
- **Circles & Events** – timeline module for venues, hosts, and invite-only modes.
- **Safety Layers** – Identity Weave, Guardian AI, Panic Handoff.
- **Monetization** – SceneHim free tier, Cruizr Pro, Scene Director host plan.

## 📦 Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js App Router dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint checks |
| `npm run type-check` | TypeScript project references |

## 📚 Documentation
- [`DECISIONS.md`](./DECISIONS.md) – running log of architectural and product trade-offs.
- [`docs/STACK.md`](./docs/STACK.md) – stack, tooling, and deployment matrix.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) – previous deployment notes (supplementary).

## 🚀 Deployment Notes
- Designed for **Vercel** frontend + **Firebase** (Auth, Firestore, Storage, Functions) + **Mapbox** maps.
- Analytics via **PostHog** with cookieless mode; feature flags via Firestore / Remote Config.
- Use `npm run build` before deploying. Provide environment variables in Vercel dashboard.

## 🤝 Contributing
1. Fork + branch.
2. Keep docs updated (README, DECISIONS, STACK).
3. Run `npm run lint && npm run type-check`.
4. Submit PR with screenshots for notable UI updates.

## 📄 License
MIT.
