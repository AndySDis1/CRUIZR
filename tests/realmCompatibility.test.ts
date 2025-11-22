import assert from 'node:assert/strict';
import test from 'node:test';
import { rankPresenceCandidates, scorePresenceSignal, computeRealmCompatibility } from '../app/lib/algorithms';

const basePreferences = {
  realm: 'social' as const,
  preferredRadiusMeters: 1500,
  minSharedInterests: 5,
  freshnessMinutes: 120,
};

test('realm compatibility matrix prioritizes aligned intents', () => {
  const socialToDating = computeRealmCompatibility('social', 'dating');
  const socialToProfessional = computeRealmCompatibility('social', 'professional');

  assert.ok(socialToDating > socialToProfessional, 'Dating should be weighted higher than Professional for social vibe');
});

test('scorePresenceSignal rewards freshness, distance, and boosts', () => {
  const freshSignal = {
    userId: '1',
    realm: 'social' as const,
    distanceMeters: 200,
    sharedInterests: 7,
    vibeIntensity: 0.8,
    lastActiveMinutes: 8,
    isBoosted: true,
  };

  const staleSignal = {
    userId: '2',
    realm: 'professional' as const,
    distanceMeters: 4000,
    sharedInterests: 2,
    vibeIntensity: 0.3,
    lastActiveMinutes: 180,
  };

  const freshScore = scorePresenceSignal(freshSignal, basePreferences);
  const staleScore = scorePresenceSignal(staleSignal, basePreferences);

  assert.ok(freshScore > staleScore, 'recent boosted aura should outrank stale, distant aura');
});

test('rankPresenceCandidates sorts by score without mutating input', () => {
  const signals = [
    {
      userId: '1',
      realm: 'dating' as const,
      distanceMeters: 500,
      sharedInterests: 6,
      vibeIntensity: 0.7,
      lastActiveMinutes: 20,
    },
    {
      userId: '2',
      realm: 'professional' as const,
      distanceMeters: 900,
      sharedInterests: 4,
      vibeIntensity: 0.6,
      lastActiveMinutes: 10,
    },
  ];

  const sorted = rankPresenceCandidates(signals, basePreferences);

  assert.strictEqual(sorted[0].userId, '1');
  assert.strictEqual(sorted[1].userId, '2');
  assert.notStrictEqual(sorted, signals, 'should return a new array');
});
