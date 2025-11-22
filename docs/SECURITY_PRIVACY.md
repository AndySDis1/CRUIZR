# Security & Privacy Posture

1. **Location Safety** – All realtime pins receive jitter (random offset up to 120m) before reaching clients. Realm access requires mutual consent except Neutral.
2. **Scoped Visibility** – Presence defaults to `mutualRealm` scope. Users can opt into friends-only or circle-only via Firestore security rules enforcing membership.
3. **Age-Gating** – `sexual` realm is hidden unless `ageVerified` boolean is true. Verification flows lean on government ID via third-party vendor (future integration).
4. **Audit-friendly Reporting** – Reports collection stores immutable evidence plus moderator notes. Only designated Cloud Function service accounts can transition status fields.
5. **Content Lifecycle** – Stories and GhostChat data rely on TTL indexes to auto-purge, ensuring data minimization and compliance with privacy promises.
6. **Data in Transit** – All APIs hit Firebase/Mapbox over HTTPS; Web Crypto used for client-side payload encryption before writing to `messages`.
7. **Analytics Hygiene** – PostHog is configured in cookieless mode with random session IDs. Sensitive fields are never sent; only derived metrics (realm switch count, boosts purchased).
