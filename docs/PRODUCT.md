# SceneHim Product Spec

## Environment Variables

Create `.env.local` from `.env.example` and add the following keys:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase web API key. |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth domain for email + OAuth. |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Used for Firestore + Functions. |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Asset uploads (avatars, wardrobe packs). |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Required for FCM push. |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app identifier. |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox GL access token for atmospheric map tiles. |
| `NEXT_PUBLIC_POSTHOG_KEY` | Optional analytics key (cookieless mode). |
| `NEXT_PUBLIC_POSTHOG_HOST` | Custom PostHog host if self-hosted. |
| `NEXT_PUBLIC_FEATURE_FLAGS_DOC_ID` | Firestore doc path that holds remote feature flags. |

## Data Model

| Entity | Fields |
| --- | --- |
| **UserProfile** | `uid`, `displayName`, `photoURL`, `ageVerified`, `interests[]`, `circles[]`, `activeRealm`. |
| **PresenceSpot** | `id`, `label`, `realm`, `auraIntensity`, `compatibility`, `vibe`, `intent`. |
| **DropIn** | `id`, `title`, `realm`, `content`, `coordinates`, `expiresInMinutes`. |
| **StoryCard** | `id`, `author`, `realm`, `headline`, `duration`, `cover`. |
| **CircleSpotlight** | `id`, `name`, `realm`, `location`, `members`, `type`, `status`. |
| **SafetyFlag** | `id`, `title`, `description`, `badges[]`. |
| **MonetizationTier** | `id`, `title`, `price`, `description`, `benefits[]`. |

Firestore collections should follow `users/{uid}/presence`, `dropins`, `stories`, `circles`, `reports`, `boosts`, `events`, and `featureFlags`.

## Algorithms

1. **Realm Compatibility** – `calculateRealmCompatibility(viewerRealm, profileRealm, sharedInterests, proximityKm)` from
   `app/lib/utils.ts` outputs a score (0–100) weighting realm alignment (40%), intent bonus (15%), shared interests (30% max), and proximity (15%).
2. **Atmospheric Visibility** – map radius defaults to 4.2km, but safety mode shrinks radius + increases jitter for the sexual realm. This UI mimics the logic with smaller aura intensity when `activeRealm === 'sexual'`.
3. **Discovery Ranking** – prioritized by compatibility score, then recency of vibe update, then mutual circles.

## Safety & Moderation

- **Location Jitter** – Offsets Mapbox coordinates ±120m and clamps to non-residential areas.
- **Age Gate** – Sexual realm requires ID verification (Stripe Identity or Persona) before entry.
- **GhostChat Protections** – Encryption-at-rest, screenshot tripwire that pings both participants, auto-deletes after 12h.
- **Report Flow** – Long-press on avatars triggers Radix Dialog with report categories, severity tags, and ability to attach screenshots.

## Monetization

1. **Boosts** – Paid placement on the atmospheric map. Bundled with Essentials tier (2/month) and unlimited for Pro.
2. **SceneHim Pro** – Subscription unlocking advanced avatars, analytics, scheduling, and unlimited GhostChat windows.
3. **Brand Galleries** – Custom microsites + promoted events for nightlife groups, fashion houses, or queer orgs.
4. **Promoted Events** – Managed via Firestore `events` collection with `promoted: true`, surfaced at top of Circles list.

## Acceptance Checklist

- [x] Realm selector with five modes and aura theming.
- [x] Atmospheric map panel with compatibility cards.
- [x] Drop-ins + GhostChat CTA.
- [x] Discovery scoring, Stories, Circles & Events.
- [x] Safety pillars + monetization tiers documented + rendered.
- [x] DECISIONS + STACK + PRODUCT docs.

## Deployment Notes

- Deploy the Next.js frontend to **Vercel** using Production build.
- Use **Firebase Hosting/Functions** for API routes that require location anonymization.
- Configure PostHog + Feature Flags environment variables in both local `.env` and Vercel dashboard.
