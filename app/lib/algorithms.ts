import { RealmType } from './types';

export interface PresenceSignal {
  userId: string;
  realm: RealmType;
  distanceMeters: number;
  sharedInterests: number; // 0-10 scale
  vibeIntensity: number; // 0-1
  lastActiveMinutes: number;
  isBoosted?: boolean;
}

export interface CompatibilityPreferences {
  realm: RealmType;
  preferredRadiusMeters: number;
  minSharedInterests: number;
  freshnessMinutes: number;
}

const REALM_COMPATIBILITY_MATRIX: Record<RealmType, Record<RealmType, number>> = {
  professional: { professional: 1, social: 0.7, dating: 0.25, sexual: 0.1, neutral: 0.6 },
  social: { professional: 0.6, social: 1, dating: 0.75, sexual: 0.35, neutral: 0.8 },
  dating: { professional: 0.25, social: 0.65, dating: 1, sexual: 0.8, neutral: 0.7 },
  sexual: { professional: 0.1, social: 0.35, dating: 0.8, sexual: 1, neutral: 0.4 },
  neutral: { professional: 0.6, social: 0.8, dating: 0.7, sexual: 0.4, neutral: 1 },
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function computeRealmCompatibility(source: RealmType, target: RealmType) {
  return REALM_COMPATIBILITY_MATRIX[source][target];
}

export function scorePresenceSignal(signal: PresenceSignal, preferences: CompatibilityPreferences) {
  const realmScore = computeRealmCompatibility(preferences.realm, signal.realm);
  const distanceScore = clamp(1 - signal.distanceMeters / Math.max(preferences.preferredRadiusMeters, 1));
  const interestScore = clamp(signal.sharedInterests / Math.max(preferences.minSharedInterests, 1));
  const freshnessScore = clamp(1 - signal.lastActiveMinutes / Math.max(preferences.freshnessMinutes, 1));
  const vibeScore = clamp(signal.vibeIntensity);

  let weightedScore =
    realmScore * 0.3 +
    distanceScore * 0.2 +
    interestScore * 0.2 +
    freshnessScore * 0.2 +
    vibeScore * 0.1;

  if (signal.isBoosted) {
    weightedScore *= 1.15;
  }

  return Number(weightedScore.toFixed(4));
}

export function rankPresenceCandidates(
  signals: PresenceSignal[],
  preferences: CompatibilityPreferences,
): PresenceSignal[] {
  return [...signals]
    .map((signal) => ({ signal, score: scorePresenceSignal(signal, preferences) }))
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.signal);
}
