import { REALM_COLORS, REALM_LABELS, RealmType } from './types';

export const getRealmAccent = (realm: RealmType) => REALM_COLORS[realm];

export const getRealmLabel = (realm: RealmType) => REALM_LABELS[realm];

export const getAuraGradient = (realm: RealmType) => {
  const base = getRealmAccent(realm);
  return `linear-gradient(135deg, ${base} 0%, rgba(5,5,7,0.6) 100%)`;
};

export const calculateRealmCompatibility = (
  viewerRealm: RealmType,
  profileRealm: RealmType,
  sharedInterests = 0,
  proximityKm = 2,
) => {
  const realmMatch = viewerRealm === profileRealm ? 40 : 20;
  const intentBonus = viewerRealm === 'neutral' || profileRealm === 'neutral' ? 5 : 15;
  const interestScore = Math.min(sharedInterests * 8, 30);
  const proximityScore = Math.max(0, 25 - proximityKm * 4);
  return Math.min(100, realmMatch + intentBonus + interestScore + proximityScore);
};

export const formatMinutes = (minutes: number) => {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};
