import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { REALM_COLORS } from './constants';
import type { RealmType } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLargeNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k`;
  return value.toString();
}

export function getRealmGradient(realm: RealmType) {
  const base = REALM_COLORS[realm];
  return `linear-gradient(135deg, ${base} 0%, rgba(255,255,255,0.2) 100%)`;
}

export function getRealmAura(realm: RealmType) {
  switch (realm) {
    case 'professional':
      return 'from-blue-500/40 via-blue-400/20 to-transparent';
    case 'social':
      return 'from-emerald-400/40 via-cyan-300/20 to-transparent';
    case 'dating':
      return 'from-pink-400/40 via-rose-300/20 to-transparent';
    case 'sexual':
      return 'from-red-500/40 via-red-400/20 to-transparent';
    default:
      return 'from-slate-400/30 via-slate-300/10 to-transparent';
  }
}
