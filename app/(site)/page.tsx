'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Shield,
  Zap,
  Briefcase,
  Users,
  Heart,
  Flame,
  Sparkles,
  MessageCircle,
  Wand2,
  Coins,
  Radar,
  Send,
  Star,
  Calendar,
  Compass,
} from 'lucide-react';
import {
  CIRCLES_AND_EVENTS,
  DROP_INS,
  MAP_AVATARS,
  MONETIZATION,
  PRESENCE_SPOTS,
  REALMS,
  SAFETY_PILLARS,
  STORIES,
} from '../lib/data';
import { getRealmAccent, getRealmLabel } from '../lib/utils';
import type { RealmType } from '../lib/types';

const realmIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  professional: Briefcase,
  social: Users,
  dating: Heart,
  sexual: Flame,
  neutral: Sparkles,
};

const heroMetrics = [
  { label: 'Avg. Session', value: '18m', detail: 'twice industry norm' },
  { label: 'Realm match score', value: '94', detail: 'curated connections' },
  { label: 'Cities live', value: '23', detail: 'NA + EU launchpads' },
];

const discoveryHighlights = [
  { title: 'Realm Scheduling', copy: 'Auto-shift into pro mode for work hours, unlock social at 6pm.' },
  { title: 'GhostChat Windows', copy: 'Ephemeral DMs pinned to a geo-fence, vanish when you leave.' },
  { title: 'AI Wardrobe Avatars', copy: 'Upload one portrait, receive cinematic renderings across every realm.' },
];

export default function HomePage() {
  const [activeRealm, setActiveRealm] = useState<RealmType>('professional');

  const selectedRealm = useMemo(() => REALMS.find((realm) => realm.id === activeRealm) ?? REALMS[0], [activeRealm]);
  const realmPresence = useMemo(
    () => PRESENCE_SPOTS.filter((spot) => spot.realm === activeRealm || activeRealm === 'neutral'),
    [activeRealm],
  );
  const mapAvatars = useMemo(
    () => MAP_AVATARS.filter((avatar) => avatar.realm === activeRealm || activeRealm === 'neutral'),
    [activeRealm],
  );

  return (
    <div className="min-h-screen text-white">
      <section className="relative py-24 px-4 md:px-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="w-28 h-28 mx-auto mb-8 rounded-[32px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-[0_15px_70px_rgba(147,51,234,.45)]"
          >
            <Zap className="w-14 h-14" />
          </motion.div>
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-4">SceneHim · Social Presence Network</p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight mb-6">
            Atmospheres for every version of you.
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
              Realms curate who can feel your energy.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            SceneHim blends cinematic fashion interfaces with privacy-rigorous infrastructure. Toggle between professional,
            social, dating, and sexual presences without cross-contamination. Every interaction honors consent, vibe, and intent.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition">
              Claim beta spot
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-white/30 font-semibold text-white/90 hover:border-white/70 transition">
              Review product paper
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center"
              >
                <p className="text-sm uppercase tracking-widest text-white/70">{metric.label}</p>
                <p className="text-4xl font-bold mt-3 mb-2">{metric.value}</p>
                <p className="text-sm text-white/60">{metric.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">Selective Realms</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2">Switch context. Keep boundaries sacred.</h2>
              <p className="text-white/70 mt-3 max-w-2xl">
                Every realm shifts map colors, messaging permissions, apparel-ready avatars, and exposure radius. Pick the
                aura you&apos;re in and SceneHim does the rest.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-emerald-300" />
              <span className="text-sm">Age-gated + location jitter</span>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {REALMS.map((realm) => {
              const Icon = realmIcons[realm.id] ?? Sparkles;
              const isActive = realm.id === activeRealm;
              return (
                <button
                  key={realm.id}
                  onClick={() => setActiveRealm(realm.id)}
                  className={`group relative rounded-3xl border px-5 py-6 text-left transition hover:-translate-y-1 ${
                    isActive ? 'border-white bg-white/10' : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isActive ? 'bg-white text-black' : 'bg-white/10'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">{realm.icon}</span>
                  </div>
                  <p className="text-lg font-semibold mt-4">{realm.title}</p>
                  <p className="text-sm text-white/70 mt-2">{realm.description}</p>
                  {isActive && <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className={`rounded-[32px] p-8 border border-white/10 ${selectedRealm.mapTheme}`}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="uppercase text-xs tracking-[0.3em] text-white/50">Atmospheric Map · Sniffles lane remix</p>
                  <h3 className="text-2xl font-semibold mt-2">{selectedRealm.title}</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Cinematic topography meets Snap-style avatars that move with you. Each realm renders its own aura lanes,
                    compatibility haze, and jittered pins so discovery feels intentional without leaking between vibes.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60">Visibility radius</p>
                  <p className="text-3xl font-bold">4.2 km</p>
                  <p className="text-xs text-white/50">Realm-lock + jitter enabled</p>
                </div>
              </div>
              <div className="grid md:grid-cols-[1.45fr_1fr] gap-6 mt-8 items-start">
                <div className="relative h-[420px] rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                  <div className={`absolute inset-0 bg-gradient-radial ${selectedRealm.aura}`} />
                  <div className="absolute inset-0 opacity-30 mix-blend-screen">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
                  </div>
                  <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 opacity-25">
                    {[...Array(35)].map((_, idx) => (
                      <div key={idx} className="border border-white/5" />
                    ))}
                  </div>
                  <div className="absolute inset-6 rounded-[28px] border border-white/10" />
                  <div className="absolute inset-10 rounded-[26px] border border-white/5 rotate-2" />
                  <div className="absolute inset-0">
                    {mapAvatars.map((avatar, index) => (
                      <motion.div
                        key={avatar.id}
                        className="absolute"
                        style={{ left: `${avatar.x}%`, top: `${avatar.y}%` }}
                        animate={{ y: [0, -6, 3, -3, 0], x: [0, 3, -2, 2, 0] }}
                        transition={{ duration: 6 + index * 0.3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }}
                      >
                        <div className="relative">
                          <div
                            className="absolute -inset-3 rounded-full blur-xl opacity-70"
                            style={{ background: `radial-gradient(circle at 50% 50%, ${avatar.accent}, transparent 60%)` }}
                          />
                          <div className="w-12 h-12 rounded-full bg-white text-black font-semibold flex items-center justify-center border border-black/30 shadow-lg">
                            {avatar.name.slice(0, 2)}
                          </div>
                          <div className="mt-2 px-3 py-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                            <p className="text-xs font-semibold" style={{ color: avatar.accent }}>
                              {avatar.intent}
                            </p>
                            <p className="text-[11px] text-white/70">{avatar.mood}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 text-[11px] text-white/70 px-3 py-2 rounded-xl bg-black/60 border border-white/10">
                    Snap-inspired avatars pulse along Sniffles-style lanes. Realm colors gate who can see whom.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-black/40 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <MapPin className="w-4 h-4 text-blue-300" />
                      Realm currents
                    </div>
                    <div className="mt-3 space-y-3">
                      {realmPresence.map((spot) => (
                        <motion.div
                          key={spot.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-xl border border-white/10 bg-white/5 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-sm">{spot.label}</p>
                              <p className="text-[11px] text-white/60">{spot.vibe}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-white/60">Compatibility</p>
                              <p className="text-xl font-bold">{spot.compatibility}%</p>
                            </div>
                          </div>
                          <div className="mt-2 text-[11px] text-white/70">{spot.intent}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-white/70">
                    <p className="font-semibold text-white">Realm notes</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Location jitter + visibility radius tailored per realm.</li>
                      <li>Avatar motion pauses when you disable map presence.</li>
                      <li>GhostChat unlocks only when two avatars share a lane.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 p-6 backdrop-blur-xl bg-white/5">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Radar className="w-4 h-4 text-blue-300" />
                Live drop-ins
              </div>
              <div className="space-y-4 mt-4">
                {DROP_INS.map((drop) => (
                  <div key={drop.id} className="rounded-2xl border border-white/10 p-4 bg-black/30">
                    <div className="flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.3em] text-white/40">{getRealmLabel(drop.realm)}</p>
                      <span className="text-xs text-white/60">Expires in {drop.expiresInMinutes}m</span>
                    </div>
                    <p className="font-semibold mt-2">{drop.title}</p>
                    <p className="text-sm text-white/70 mt-1">{drop.content}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                      <Compass className="w-4 h-4" />
                      {drop.coordinates}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 p-6 backdrop-blur-xl bg-white/5">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MessageCircle className="w-4 h-4 text-pink-300" />
                GhostChat windows
              </div>
              <p className="text-white/80 mt-3 text-sm">
                Secure ephemeral threads unlock only when both parties are inside the same realm radius. Auto-expire after 12
                hours or on screenshot event.
              </p>
              <button className="w-full mt-4 px-4 py-3 rounded-2xl bg-white/90 text-black font-semibold flex items-center justify-center gap-2">
                Launch GhostChat
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Discovery Intelligence</p>
            <h3 className="text-3xl font-display font-semibold">Compatibility that respects intent + proximity.</h3>
            <p className="text-white/70">
              SceneHim scores every potential connection with a live compatibility signal combining realm overlap, interest tags,
              proximity, and behavioral health. You decide thresholds.
            </p>
            <div className="rounded-[32px] border border-white/10 p-6 bg-white/5 backdrop-blur-xl space-y-4">
              {realmPresence.map((spot) => (
                <div key={spot.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{spot.label}</p>
                    <p className="text-xs text-white/60">{spot.intent}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Score</p>
                    <p className="text-2xl font-bold">{spot.compatibility}%</p>
                  </div>
                </div>
              ))}
            </div>
            <ul className="space-y-3 text-white/70">
              {discoveryHighlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Star className="w-4 h-4 text-amber-300 mt-1" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 p-6 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Calendar className="w-4 h-4 text-purple-300" />
                Circles & Events
              </div>
              <div className="mt-4 space-y-4">
                {CIRCLES_AND_EVENTS.map((circle) => (
                  <div key={circle.id} className="rounded-2xl border border-white/10 p-4 bg-black/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">{getRealmLabel(circle.realm)}</p>
                        <p className="font-semibold mt-1">{circle.name}</p>
                      </div>
                      <div className="text-right text-sm text-white/60">
                        {circle.type === 'event' ? 'Event' : 'Circle'} · {circle.status}
                        <p className="font-semibold text-white">{circle.members} seats</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mt-2">{circle.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Wand2 className="w-4 h-4 text-cyan-300" />
                Cinematic Stories
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {STORIES.map((story) => (
                  <div key={story.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">{getRealmLabel(story.realm)}</p>
                    <p className="font-semibold mt-2">{story.author}</p>
                    <p className="text-sm text-white/70 mt-1">{story.headline}</p>
                    <p className="text-xs text-white/50 mt-3">{story.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">Safety & Moderation</p>
              <h3 className="text-3xl font-display font-semibold mt-2">Consent-first infrastructure.</h3>
              <p className="text-white/70 mt-3 max-w-2xl">
                Location jitter, layered reporting, verified hosts, and age-gated flows keep the SceneHim map intentional.
                Moderators are realm-specific, so professional stays polished while sexual realm remains discreet.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white/70">
              <Shield className="w-4 h-4 text-emerald-300" />
              SOC2-in-progress · Data encrypted at rest
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {SAFETY_PILLARS.map((pillar) => (
              <div key={pillar.id} className="rounded-[32px] border border-white/10 p-6 bg-black/30">
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">Protocol</p>
                <h4 className="text-xl font-semibold mt-2">{pillar.title}</h4>
                <p className="text-sm text-white/70 mt-2">{pillar.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.badges.map((badge) => (
                    <span key={badge} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Monetization Stack</p>
            <h3 className="text-3xl font-display font-semibold mt-2">Boost presence, host scenes, fuel revenue.</h3>
            <p className="text-white/70 mt-3 max-w-3xl mx-auto">
              Ethical monetization: boosts + subscriptions + brand galleries, all respecting privacy budgets and consent logic.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {MONETIZATION.map((tier) => (
              <div key={tier.id} className="rounded-[32px] border border-white/10 p-6 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Coins className="w-4 h-4 text-amber-300" />
                  {tier.title}
                </div>
                <p className="text-3xl font-bold mt-4">{tier.price}</p>
                <p className="text-sm text-white/70 mt-2">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getRealmAccent(activeRealm) }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center rounded-[40px] border border-white/15 p-12 bg-gradient-to-br from-black/40 to-black/70">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Acceptance Checklist</p>
          <h3 className="text-3xl font-display font-semibold mt-4">Ready to deploy on Vercel + Firebase edge.</h3>
          <p className="text-white/70 mt-3">
            Auth (email + anonymous dev), realm selector, atmospheric map, discovery scoring, stories, circles, moderation, and
            monetization primitives ship in this MVP. PostHog + feature flags wired via env variables. Analytics respects
            cookieless mode.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
            {[
              'Next.js 15 App Router',
              'Tailwind + Framer Motion micro interactions',
              'Firebase-ready env schema',
              'Mapbox + GhostChat placeholders',
              'Safety + reporting specs documented',
              'Monetization tiers + boosts',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/80">
                <Shield className="w-4 h-4 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
          <button className="mt-10 px-10 py-4 rounded-2xl bg-white text-black font-semibold inline-flex items-center gap-2">
            Launch SceneHim Pilot
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
