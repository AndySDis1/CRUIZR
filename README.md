# SceneHim / CRUIZR

SceneHim is a premium social presence network for queer men who want intentional discovery. It blends selective realms, atmospheric maps, GhostChat, and monetization rails into a cinematic web experience.

## ✨ Pillars
- **Selective Realms** – Professional, Social, Dating, Sexual (18+), and Neutral moods each unlock dedicated feeds, maps, and wardrobe options.
- **Atmospheric Map** – Realm-colored auras visualize nearby vibes. Drop-ins, GhostChat, and boosts all respect privacy jitter + scope rules.
- **Circles & Events** – Network-ready cohorts with promoted venues, pro mixers, and ticketed events mapped to real spaces.
- **Safety-first** – Age-gating, realm mutual-opt-in, evidence-rich reporting, and privacy-friendly analytics.
- **Monetization Ready** – Boosts, Cruizr Pro, promoted events, and brand pages documented in `docs/MONETIZATION.md`.

## 🧱 Repo Tour
| Path | Description |
| --- | --- |
| `app/(site)` | Landing experience with hero, realm explorer, map preview, monetization grid, and moderation highlights. |
| `app/lib` | Shared constants, realm types, and the compatibility algorithm exercised via Node tests. |
| `docs/` | Stack, data model, testing, monetization, and security briefs. |
| `.env.example` | Minimal environment contract for Firebase, Mapbox, PostHog, and OAuth toggles. |
| `DECISIONS.md` | Running log of architectural choices. |

## 🚀 Getting Started
```bash
git clone https://github.com/AndySDis1/CRUIZR.git
cd CRUIZR
npm install
cp .env.example .env # fill with Firebase + Mapbox creds
npm run dev
```
Visit **http://localhost:3000** to view the cinematic landing.

## 🔐 Environment Variables
See `.env.example` for the complete list, including:
- Firebase web config (`NEXT_PUBLIC_FIREBASE_*`)
- Mapbox token (`NEXT_PUBLIC_MAPBOX_TOKEN`)
- Analytics + feature flags (`NEXT_PUBLIC_POSTHOG_*`, `NEXT_PUBLIC_FEATURE_FLAGS_DOC`)
- Optional OAuth toggles (`NEXT_PUBLIC_ENABLE_OAUTH`, Apple/Google client IDs)

## 🧪 Quality Gates
| Command | Purpose |
| --- | --- |
| `npm run lint` | ESLint (Next.js config). |
| `npm run type-check` | Standalone TypeScript compiler. |
| `npm test` | Node test runner executing compatibility helper specs. |
| `npm run build` | Production build (fails when perf budgets exceeded). |

## 📚 Documentation
- [`docs/STACK.md`](docs/STACK.md) – Tooling, versions, and scripts.
- [`docs/DATA_MODEL.md`](docs/DATA_MODEL.md) – Collections for users, presence, stories, events, etc.
- [`docs/SECURITY_PRIVACY.md`](docs/SECURITY_PRIVACY.md) – Safety model, age gating, analytics hygiene.
- [`docs/TESTING.md`](docs/TESTING.md) – Testing strategy and performance budgets.
- [`docs/MONETIZATION.md`](docs/MONETIZATION.md) – Boosts, subscriptions, brand pages, and drops.

## 📦 Deployment
- **Vercel** – One-click deploy via repo import. Configure env variables during setup.
- **Docker** – `docker build -t scenehim .` then `docker run -p 3000:3000 --env-file .env scenehim`.
- **Manual** – `npm run build && npm start` behind your preferred process manager.

## 🛡️ License
MIT
