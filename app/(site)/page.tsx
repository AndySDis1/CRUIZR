'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Shield,
  Zap,
  Briefcase,
  Users,
  Heart,
  Sparkles,
  Ghost,
  Compass,
  Radar,
  MessageSquare,
  Flame,
  Crown,
} from 'lucide-react';
import {
  realmDefinitions,
  discoveryFeatures,
  storyTemplates,
  circleMoments,
  safetyLayers,
  monetizationTiers,
} from '../lib/data';
import { cn, formatLargeNumber } from '../lib/utils';
import type { RealmType } from '../lib/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Shield,
  Zap,
  Users,
  Sparkles,
  Ghost,
};

export default function HomePage() {
  const [activeRealm, setActiveRealm] = useState<RealmType>('professional');
  const currentRealm = realmDefinitions.find((realm) => realm.id === activeRealm)!;

  return (
    <div className="min-h-screen space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-4">SceneHim · Social Presence OS</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Realm-shifting connections with couture level safety.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              SceneHim blends multi-realm identity, cinematic avatars, and atmospheric maps so you can show up exactly how you
              feel—professional over brunch, nightlife legend by dusk. Every interaction is privacy-forward, moderated, and
              monetizable.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary inline-flex items-center text-base">
                Claim Your Handle
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary">Preview Realms</button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 text-center">
              {[
                { label: 'Monthly pulses', value: '24.9k' },
                { label: 'Match respect rate', value: '96%' },
                { label: 'Guardian interventions', value: '0 major' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl py-4">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="relative glass rounded-[32px] p-8 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Live Realm</p>
                  <p className="text-2xl font-semibold text-white">{currentRealm.title}</p>
                </div>
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="h-60 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.3),transparent_45%)]" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-48 h-48 rounded-full blur-2xl opacity-80"
                    style={{ background: `radial-gradient(circle, ${currentRealm.accent}, rgba(255,255,255,0.4))` }}
                  />
                </div>
                <div className="absolute top-6 left-6 glass px-4 py-2 rounded-2xl text-sm">
                  Aura Density · {formatLargeNumber(currentRealm.mapStats.live)} online
                </div>
                <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-2xl text-sm">
                  Avg. Response {currentRealm.mapStats.avgResponse}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Avatar wardrobe</p>
                <div className="flex flex-wrap gap-2">
                  {currentRealm.avatarStyles.map((style) => (
                    <span key={style} className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-200">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Realm Selector */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-2">Selective Realms</p>
              <h2 className="text-4xl font-display font-bold">Mood-based presence and intent.</h2>
            </div>
            <p className="text-gray-300 max-w-xl">
              Toggle realms to recalibrate who can discover, DM, or map-drop you. Each realm has independent moderation,
              wardrobe, and monetization levers.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {realmDefinitions.map((realm) => (
              <button
                key={realm.id}
                className={cn(
                  'px-6 py-3 rounded-2xl text-sm font-medium transition-all border border-white/10',
                  activeRealm === realm.id ? 'bg-white text-black shadow-lg' : 'bg-white/5 text-gray-200 hover:bg-white/10'
                )}
                onClick={() => setActiveRealm(realm.id)}
              >
                {realm.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="glass rounded-[32px] p-8 space-y-8">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{currentRealm.title} Aura Map</p>
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="h-72 rounded-[28px] bg-black/40 border border-white/5 relative overflow-hidden">
                <div className={cn('absolute inset-0 opacity-70 bg-gradient-to-br', currentRealm.gradient)} />
                <div className="absolute inset-0 mix-blend-screen opacity-60 bg-[radial-gradient(circle_at_center,#fff,transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white/20 blur-3xl" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-white animate-ping" />
                    <p className="text-sm text-white/90">{formatLargeNumber(currentRealm.mapStats.live)} live pulses</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-white/90">
                      <Radar className="w-5 h-5" />
                      {formatLargeNumber(currentRealm.mapStats.dropIns)} Drop-ins curated
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/90">
                      <MessageSquare className="w-5 h-5" />
                      GhostChat replies in {currentRealm.mapStats.avgResponse}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {currentRealm.protocols.map((protocol) => (
                <div key={protocol} className="glass rounded-3xl p-6 flex items-start gap-4">
                  <Shield className="w-6 h-6 text-white mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-white">{protocol.split(' ')[0]}</p>
                    <p className="text-gray-300">{protocol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discovery & Matching */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Discovery Engine</p>
            <h2 className="text-4xl font-display">Map, Drop-ins, and signals tuned per realm.</h2>
            <p className="text-gray-300 max-w-3xl">
              Real-time aura overlays, AI-matched compatibility, and ephemeral messaging drive respectful connections with
              cinematic flair. Feature flags run through Firebase Remote Config + PostHog analytics for privacy-safe insights.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {discoveryFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? Sparkles;
              return (
                <div key={feature.title} className="glass rounded-3xl p-6 space-y-4 border border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500">{feature.scope}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories & Avatars */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto glass rounded-[36px] p-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Stories · Avatars</p>
              <h2 className="text-4xl font-display">Expressive, realm-aware storytelling.</h2>
            </div>
            <button className="btn-secondary">Launch Story Studio</button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {storyTemplates.map((story) => (
              <div key={story.id} className={cn('rounded-[28px] p-6 border border-white/10 bg-gradient-to-br text-white', story.accent)}>
                <div className={cn('h-40 rounded-2xl mb-6 bg-gradient-to-br', story.accent)} />
                <p className="text-sm uppercase tracking-[0.3em] text-gray-300">{story.duration} · {story.privacy}</p>
                <h3 className="text-2xl font-semibold mt-2">{story.title}</h3>
                <p className="text-gray-200 mt-2">{story.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circles & Events */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Circles · Events</p>
            <h2 className="text-4xl font-display">Where community meets real venues.</h2>
            <p className="text-gray-300 max-w-3xl">
              Host circles, collect dues, and drop GPS-anchored events with trust layers. Every RSVP syncs to the atmospheric
              map so the right people feel welcome without compromising privacy.
            </p>
          </div>
          <div className="space-y-4">
            {circleMoments.map((moment) => (
              <div key={moment.id} className="glass rounded-3xl p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{moment.date}</p>
                  <h3 className="text-2xl font-semibold">{moment.title}</h3>
                  <p className="text-gray-300">{moment.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{moment.location}</p>
                  <p className="text-lg font-semibold capitalize">{moment.realm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Monetization */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="glass rounded-[32px] p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Safety Stack</p>
                <h3 className="text-3xl font-display">Guardian-first architecture.</h3>
              </div>
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              {safetyLayers.map((layer) => (
                <div key={layer.id} className="border border-white/10 rounded-3xl p-5 flex items-start gap-4">
                  <div className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.3em]">{layer.badge}</div>
                  <div>
                    <p className="text-lg font-semibold">{layer.title}</p>
                    <p className="text-gray-300 text-sm">{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[32px] p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Monetization</p>
                <h3 className="text-3xl font-display">Premium done tastefully.</h3>
              </div>
              <Crown className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              {monetizationTiers.map((tier) => (
                <div key={tier.id} className="border border-white/10 rounded-3xl p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">{tier.title}</h4>
                    <p className="text-lg text-gray-300">{tier.price}</p>
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-300">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-white" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto glass rounded-[40px] p-10 text-center space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Ready</p>
          <h2 className="text-5xl font-display">Ship a safer, hotter social presence.</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Deploy on Vercel + Firebase, connect Mapbox, seed trusted hosts, and start selling boosts. SceneHim is designed for
            privacy-first analytics, moderated monetization, and couture-level UI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary inline-flex items-center">
              Get Early Access <Heart className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary">Download Product Deck</button>
          </div>
        </div>
      </section>
    </div>
  );
}
