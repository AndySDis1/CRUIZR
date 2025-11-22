import { RealmType } from './types';

export const realmCards: Array<{
  id: RealmType;
  title: string;
  headline: string;
  description: string;
  gradient: string;
  stats: { label: string; value: string }[];
}> = [
  {
    id: 'neutral',
    title: 'Neutral',
    headline: 'Soft launch your vibe',
    description:
      'Default realm for feel-good browsing. Perfect for ghost mode, travel previews, and quick wardrobe saves without alerts.',
    gradient: 'from-slate-400/30 via-slate-500/30 to-slate-900/0',
    stats: [
      { label: 'Travelers online', value: '5.3k' },
      { label: 'Wardrobe saves', value: '19k' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    headline: 'Own your bookings',
    description:
      'Stand out with cinematic avatars, talent rosters, and brand pages that highlight expertise. Cruizr Pro unlocks analytics + leads.',
    gradient: 'from-sky-400/40 via-sky-500/40 to-slate-900/0',
    stats: [
      { label: 'Verified Talent', value: '12.4k' },
      { label: 'Brand Pages', value: '320' },
    ],
  },
  {
    id: 'social',
    title: 'Social',
    headline: 'Your weekend moodboard',
    description:
      'Atlas-style map reveals friends, lounges, and curated drops. Drop-ins last 2 hours and support wardrobe flex moments.',
    gradient: 'from-emerald-400/40 via-teal-400/30 to-slate-900/0',
    stats: [
      { label: 'Drop-ins today', value: '3.1k' },
      { label: 'Stylists online', value: '58' },
    ],
  },
  {
    id: 'dating',
    title: 'Dating',
    headline: 'Intentional chemistry',
    description:
      'GhostChat keeps you in control. Mutual realm gating + interest matches help surface thoughtful conversations.',
    gradient: 'from-pink-400/40 via-rose-500/40 to-slate-900/0',
    stats: [
      { label: 'Curated matches', value: '8.7k' },
      { label: 'GhostChats alive', value: '1.2k' },
    ],
  },
  {
    id: 'sexual',
    title: 'Sexual',
    headline: 'Adults only, fully gated',
    description:
      'Age-verified members gain access to bolder spaces with real-time consent tools, panic reporting, and discreet wardrobe swaps.',
    gradient: 'from-red-500/40 via-fuchsia-500/30 to-slate-900/0',
    stats: [
      { label: 'Active safeties', value: '92' },
      { label: 'Live spaces', value: '540' },
    ],
  },
];

export const atmosphericSignals = [
  { label: 'GhostChat invites', value: '+38% lift', description: 'Boosted Social realm presence this evening.' },
  { label: 'Drop-in heat', value: 'SoMa + Castro', description: 'Clusters trending between 9-11pm local time.' },
  { label: 'Safety status', value: 'All systems green', description: 'Moderation SLA < 3 minutes for urgent flags.' },
];

export const monetizationStreams = [
  {
    title: 'Boosts',
    description: 'Amplify your aura for 6 hours, include wardrobe spotlight + compatibility boost.',
    price: 'From $6',
  },
  {
    title: 'Cruizr Pro',
    description: 'Advanced filters, unlimited GhostChat replies, and professional insights.',
    price: '$29 / mo',
  },
  {
    title: 'Promoted Events',
    description: 'Cinematic map takeovers for venues with built-in safety checklist badge.',
    price: 'Dynamic CPM',
  },
  {
    title: 'Brand Pages',
    description: 'Fashion houses + agencies showcase roster, drops, and paid collaborations.',
    price: 'Contact sales',
  },
];

export const safetyHighlights = [
  {
    title: 'Location jitter',
    detail: 'Auto offsets up to 120m based on density. Users control realm + scope visibility per drop.',
  },
  {
    title: 'Evidence locker',
    detail: 'Reports store encrypted attachments and moderator notes. Only trust & safety staff can decrypt.',
  },
  {
    title: 'Consent-forward',
    detail: 'Sexual realm introduces mutual consent badges + panic flows mirrored to trusted contacts.',
  },
];

export const circleSpotlights = [
  {
    title: 'Vogue Lab',
    realm: 'social',
    description: 'Nightly ballroom practise with stylists on site.',
    attendees: 86,
    location: 'Lower East Side, NYC',
  },
  {
    title: 'Agency Haus',
    realm: 'professional',
    description: 'Talent agency office hours for castings + contract reviews.',
    attendees: 42,
    location: 'Downtown LA',
  },
  {
    title: 'Afterglow',
    realm: 'dating',
    description: 'Invite-only rooftop lounge with curated matches.',
    attendees: 64,
    location: 'Brickell, Miami',
  },
];
