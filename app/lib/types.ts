export type RealmType = 'professional' | 'social' | 'dating' | 'sexual' | 'neutral';

export type VisibilityScope = 'public' | 'friends' | 'circles' | 'mutualRealm';

export interface RealmDefinition {
  id: RealmType;
  title: string;
  description: string;
  accent: string;
  aura: string;
  mapTheme: string;
  icon: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string | null;
  photoURL: string | null;
  ageVerified: boolean;
  interests: string[];
  circles: string[];
  activeRealm: RealmType;
}

export interface PresenceSpot {
  id: string;
  label: string;
  realm: RealmType;
  auraIntensity: number;
  compatibility: number;
  vibe: string;
  intent: string;
}

export interface MapAvatar {
  id: string;
  name: string;
  realm: RealmType;
  intent: string;
  mood: string;
  x: number; // percentage position on the map canvas
  y: number; // percentage position on the map canvas
  accent: string;
}

export interface DropIn {
  id: string;
  title: string;
  realm: RealmType;
  expiresInMinutes: number;
  content: string;
  coordinates: string;
}

export interface StoryCard {
  id: string;
  author: string;
  realm: RealmType;
  headline: string;
  duration: string;
  cover: string;
}

export interface CircleSpotlight {
  id: string;
  name: string;
  realm: RealmType;
  location: string;
  members: number;
  type: 'circle' | 'event';
  status: 'open' | 'curated';
}

export interface SafetyPillar {
  id: string;
  title: string;
  description: string;
  badges: string[];
}

export interface MonetizationTier {
  id: string;
  title: string;
  description: string;
  price: string;
  benefits: string[];
}

export const REALM_COLORS: Record<RealmType, string> = {
  professional: '#6BA4FF',
  social: '#27E1C1',
  dating: '#FF6B9A',
  sexual: '#E33E3E',
  neutral: '#94A3B8',
};

export const REALM_LABELS: Record<RealmType, string> = {
  professional: 'Professional',
  social: 'Social',
  dating: 'Dating',
  sexual: 'Sexual',
  neutral: 'Neutral',
};
