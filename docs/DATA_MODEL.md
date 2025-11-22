# Data Model Snapshot

| Collection | Purpose | Key Fields |
| --- | --- | --- |
| `users` | Core profile and verification status. | `displayName`, `avatar`, `ageVerified`, `currentRealm`, `interests`, `visibilityScope`, `realmPreferences` |
| `presence` | Ephemeral location & vibe broadcast per realm. TTL/cron cleans up stale docs. | `userId`, `realm`, `coords`, `vibe`, `intent`, `expiresAt`, `jitteredBounds`, `isBoosted` |
| `stories` | Realm-scoped ephemeral media. | `userId`, `realm`, `mediaUrl`, `caption`, `visibleUntil`, `viewers` |
| `circles` | Groups & professional cohorts. | `title`, `realm`, `location`, `memberCount`, `admissionRules`, `sponsors` |
| `events` | Geo-tied gatherings. | `hostCircleId`, `realm`, `start`, `end`, `location`, `ticketing`, `safetyChecklist` |
| `messages` | GhostChat threads & DMs. | `participants`, `realm`, `geoFence`, `ttl`, `encryptedPayload` |
| `reports` | Safety + moderation queue. | `reportedUserId`, `reason`, `realm`, `evidenceUrls`, `status`, `moderatorNotes` |
| `boosts` | Monetized reach upgrades. | `userId`, `realm`, `product`, `start`, `end`, `reachLift` |
| `featureFlags` | Remote config to toggle experiments. | `realmOverrides`, `mapExperiments`, `paywallConfig` |

## Realm Compatibility Inputs
- Mutual intent alignment (Professional, Social, Dating, Sexual, Neutral).
- Distance bucket (Mapbox haversine) plus realm-specific comfort radius.
- Interest overlap and vibe intensity (self-reported mood sliders).
- Recency of presence beacon.

These inputs feed the compatibility helpers implemented in `app/lib/algorithms.ts` and exercised via the Node test suite.
