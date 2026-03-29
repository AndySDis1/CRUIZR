# Stack & Tooling

| Layer | Choice | Reasoning |
| --- | --- | --- |
| Runtime | **Node.js 18 / Next.js 15.0.2 (App Router)** | App Router unlocks React Server Components, streaming, and simplified layouts while staying Vercel-ready. |
| Language | **TypeScript 5.x** | Strict typing for realm models, data contracts, and algorithm helpers. |
| Styling | **Tailwind CSS 3.4 + custom tokens** | Enables cinematic gradients + editorial typography without bespoke CSS debt. |
| Motion | **Framer Motion 11** | Lightweight primitives for aura pulses, hero entrances, and compatibility card transitions. |
| Icons | **lucide-react** | Crisp line icons that match the fashion-editorial language. |
| UI Primitives | **Radix UI** (installed) | Accessible underpinnings for future dialogs, dropdowns, and toasts. |
| Maps | **Mapbox GL JS 3** | Production-ready vector maps with serverless tiles; replaced temporarily with atmospheric gradient panel in UI. |
| Backend | **Firebase (Auth + Firestore + Storage)** | Fast to prototype with built-in email/password + anonymous modes, works with serverless functions. |
| Analytics | **PostHog (cookieless mode)** | Event + funnel tracking without cookies; feature flags pulled from Firestore doc for deterministic behavior. |
| Notifications | **Firebase Cloud Messaging** | Shared infra with Firebase Auth; gated behind env variables for production only. |
| Quality | **ESLint + TypeScript** | Lint + type-check scripts guard regressions; CI should run `npm run lint` + `npm run type-check`. |
| Deployment | **Vercel + Firebase Hosting for APIs** | Vercel serves the Next app; Firebase handles region-specific functions + messaging. |

## Commands

`package.json` already exposes the core scripts:

- `npm run dev` – start local dev server
- `npm run build` – production bundle
- `npm run start` – run compiled output
- `npm run preview` – build + start to mirror production locally
- `npm run lint` – ESLint
- `npm run type-check` – TypeScript project references

Extend with `npm run seed` once Firestore models are finalized.

## Versions

| Package | Version |
| --- | --- |
| next | 15.0.2 |
| react / react-dom | 18.x |
| tailwindcss | 3.4.x |
| framer-motion | 11.x |
| firebase | 10.7.x |
| mapbox-gl | 3.x |
| lucide-react | 0.263.x |
| zod | 3.22.x |
