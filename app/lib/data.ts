import { REALM_COLORS, REALM_LABELS } from './constants';
import type {
  RealmDefinition,
  FeatureCard,
  StoryTemplate,
  CircleMoment,
  SafetyLayer,
  MonetizationTier,
  RealmType,
} from './types';

export const realmDefinitions: RealmDefinition[] = [
  {
    id: 'professional',
    title: 'Professional',
    description: 'Studio-grade networking, industry circles, and curated deal flow.',
    aura: 'from-sky-400/40 via-cyan-300/20 to-transparent',
    accent: REALM_COLORS.professional,
    gradient: 'from-sky-500 via-sky-400 to-cyan-300',
    mapStats: { live: 1280, dropIns: 342, avgResponse: '8m' },
    protocols: [
      'Verified company badges and LinkedIn sync',
      'Meeting mode with calendar safe windows',
      'Anti-spam heuristics tuned for hiring teams',
    ],
    avatarStyles: ['Editorial blazer', 'Gallery curator', 'Runway tech lead'],
  },
  {
    id: 'social',
    title: 'Social',
    description: 'Bring your crew to the same vibe with cinematic aura drops.',
    aura: 'from-emerald-400/40 via-lime-300/20 to-transparent',
    accent: REALM_COLORS.social,
    gradient: 'from-emerald-400 via-teal-400 to-sky-300',
    mapStats: { live: 2410, dropIns: 980, avgResponse: '2m' },
    protocols: [
      'Adaptive visibility radius for on-the-go hangouts',
      'GhostChat auto-expiry after the moment passes',
      'Location jitter + safe roaming for nightlife',
    ],
    avatarStyles: ['Holographic bomber', 'Sequin nights', 'Street vogue'],
  },
  {
    id: 'dating',
    title: 'Dating',
    description: 'High-intent matches that read the room and keep respect first.',
    aura: 'from-pink-400/40 via-fuchsia-300/20 to-transparent',
    accent: REALM_COLORS.dating,
    gradient: 'from-pink-500 via-fuchsia-500 to-rose-400',
    mapStats: { live: 760, dropIns: 190, avgResponse: '5m' },
    protocols: [
      'Dual-consent intros with vibe prompts',
      'AI-style avatars derived from your photo set',
      'Aftercare reminders + blocklist intelligence',
    ],
    avatarStyles: ['Velvet suit', 'Gilded muse', 'Luminous romantic'],
  },
  {
    id: 'sexual',
    title: 'Sexual',
    description: '18+ space with mutual opt-in gates and safety-forward controls.',
    aura: 'from-red-500/40 via-rose-500/20 to-transparent',
    accent: REALM_COLORS.sexual,
    gradient: 'from-red-600 via-rose-500 to-orange-500',
    mapStats: { live: 320, dropIns: 145, avgResponse: '3m' },
    protocols: [
      'Age verification tokens on every interaction',
      'Scene boundaries + after dark do-not-disturb',
      'Rapid response moderation with anonymous tips',
    ],
    avatarStyles: ['Noir latex', 'Gilded harness', 'Editorial fetish couture'],
  },
  {
    id: 'neutral',
    title: 'Neutral',
    description: 'Default realm that keeps you discoverable without signaling intent.',
    aura: 'from-slate-400/30 via-slate-300/10 to-transparent',
    accent: REALM_COLORS.neutral,
    gradient: 'from-slate-500 via-slate-400 to-zinc-300',
    mapStats: { live: 512, dropIns: 120, avgResponse: '10m' },
    protocols: [
      'Baseline privacy posture for new members',
      'Curated onboarding prompts',
      'Gentle nudges to set real intent',
    ],
    avatarStyles: ['Minimal monochrome', 'Refined street', 'Laid-back luxe'],
  },
];

export const discoveryFeatures: FeatureCard[] = [
  {
    title: 'Atmospheric Map',
    description: 'Realm-colored auras pulse on an adaptive map with safety jitter.',
    icon: 'MapPin',
    scope: 'core',
  },
  {
    title: 'GhostChat',
    description: 'Ephemeral, geo-anchored DMs that vanish after you leave the zone.',
    icon: 'Ghost',
    scope: 'core',
  },
  {
    title: 'Drop-Ins',
    description: 'Micro posts pinned to venues with live reactions and DJ energy.',
    icon: 'Sparkles',
    scope: 'community',
  },
  {
    title: 'Circles',
    description: 'Invite-only groups with event calendars, dues, and shared stories.',
    icon: 'Users',
    scope: 'community',
  },
  {
    title: 'Safety Pulse',
    description: 'Live trust signals, identity locks, and do-not-disturb flows.',
    icon: 'Shield',
    scope: 'safety',
  },
  {
    title: 'Boosts',
    description: 'Intent-based boosts and premium placements per realm.',
    icon: 'Zap',
    scope: 'monetization',
  },
];

export const storyTemplates: StoryTemplate[] = [
  {
    id: 'atelier',
    title: 'Atelier Drop',
    subtitle: 'Show the fit, log the mood, last 8 hours',
    duration: '8h',
    privacy: 'friends',
    accent: 'from-sky-500 via-violet-500 to-rose-400',
  },
  {
    id: 'ghost',
    title: 'GhostChat Trace',
    subtitle: 'Location bound, auto expires once aura fades',
    duration: '30m',
    privacy: 'mutualRealm',
    accent: 'from-emerald-400 via-teal-400 to-blue-400',
  },
  {
    id: 'afterdark',
    title: 'After Dark',
    subtitle: 'Age gated, encrypted reactions only',
    duration: '4h',
    privacy: 'circles',
    accent: 'from-rose-500 via-red-500 to-amber-400',
  },
];

export const circleMoments: CircleMoment[] = [
  {
    id: 'vogueball',
    title: 'Vogue Ball, Warehouse 17',
    realm: 'social',
    location: 'Bushwick, NYC',
    date: 'Fri 11:30 PM',
    description: 'Circle: Ballroom Syndicate · 94 confirmed · Drop-in queue open',
  },
  {
    id: 'summit',
    title: 'Queer Founder Summit',
    realm: 'professional',
    location: 'SoMa, SF',
    date: 'Sat 10:00 AM',
    description: 'Circle: Venture Vogue · Panels + curated 1:1 intros',
  },
  {
    id: 'playdate',
    title: 'Sensory Play Date',
    realm: 'sexual',
    location: 'Arts District, LA',
    date: 'Invite-only',
    description: 'Circle: Aftercare Guild · Consent workshops + sanctuary rooms',
  },
];

export const safetyLayers: SafetyLayer[] = [
  {
    id: 'identity',
    title: 'Identity Weave',
    detail: 'Biometric-linked avatars, manual review, and encrypted proofs.',
    badge: 'ID Sync',
  },
  {
    id: 'guardian',
    title: 'Guardian AI',
    detail: 'Detects harassment, filters screenshots, and pauses risky chats.',
    badge: 'Live Scan',
  },
  {
    id: 'panic',
    title: 'Panic Handoff',
    detail: 'One-press alert shares fuzzy location with trusted guardians.',
    badge: 'Signal+',
  },
];

export const monetizationTiers: MonetizationTier[] = [
  {
    id: 'free',
    title: 'SceneHim',
    price: '$0',
    description: 'Core realms, Drop-ins, and private GhostChats.',
    perks: ['2 boosts / month', 'Access to public circles', 'Map presence in neutral realm'],
  },
  {
    id: 'pro',
    title: 'Cruizr Pro',
    price: '$18/mo',
    description: 'Premium networking, analytics, and avatar wardrobes.',
    perks: ['Unlimited realm switching', 'AI stylist for avatars', 'Priority verification'],
  },
  {
    id: 'elite',
    title: 'Scene Director',
    price: '$38/mo',
    description: 'For hosts, curators, and nightlife leaders.',
    perks: ['Promoted events', 'Revenue share on boosts', 'Concierge moderation'],
  },
];

export const realmOptions = realmDefinitions.map((realm) => ({
  id: realm.id,
  label: REALM_LABELS[realm.id as RealmType],
  accent: realm.accent,
}));
