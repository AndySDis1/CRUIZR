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