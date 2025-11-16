export type RealmType = 'professional' | 'social' | 'dating' | 'sexual' | 'neutral';

export type VisibilityScope = 'public' | 'friends' | 'circles' | 'mutualRealm';

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string | null;
  photoURL: string | null;
  ageVerified: boolean;
  interests: string[];
  circles: string[];
}

export interface RealmDefinition {
  id: RealmType;
  title: string;
  description: string;
  aura: string;
  accent: string;
  gradient: string;
  mapStats: { live: number; dropIns: number; avgResponse: string };
  protocols: string[];
  avatarStyles: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  scope: 'core' | 'safety' | 'monetization' | 'community';
}

export interface StoryTemplate {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  privacy: VisibilityScope;
  accent: string;
}

export interface CircleMoment {
  id: string;
  title: string;
  realm: RealmType;
  location: string;
  date: string;
  description: string;
}

export interface SafetyLayer {
  id: string;
  title: string;
  detail: string;
  badge: string;
}

export interface MonetizationTier {
  id: string;
  title: string;
  price: string;
  description: string;
  perks: string[];
}
