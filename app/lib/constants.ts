import type { RealmType } from './types';

export const APP_NAME = 'Cruizr';
export const APP_TAGLINE = 'Express Your Presence, Connect Your World';
export const APP_DESCRIPTION = 'A modern social presence network that respects your privacy and connects you with the right people at the right time.';

export const DEFAULT_MAP_CENTER = { lat: 37.7749, lng: -122.4194 };
export const DEFAULT_MAP_ZOOM = 13;

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
