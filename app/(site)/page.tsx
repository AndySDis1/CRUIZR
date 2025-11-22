'use client';

import React from 'react';
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
  Star,
  Radar,
  Umbrella,
} from 'lucide-react';
import {
  realmCards,
  atmosphericSignals,
  monetizationStreams,
  safetyHighlights,
  circleSpotlights,
} from '../lib/data';
import { REALM_LABELS } from '../lib/types';
import { cn, formatAttendees } from '../lib/utils';

export default function HomePage() {
  const [selectedRealmId, setSelectedRealmId] = React.useState(realmCards[0].id);
  const selectedRealm = realmCards.find((realm) => realm.id === selectedRealmId)!;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
          >
            <Zap className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Fashion-editorial social presence for people who move in realms.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Switch moods, broadcast vibes, and meet intentionally. Atmospheric maps, wardrobe-driven avatars, and GhostChat keep
            you in control.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary inline-flex items-center text-lg shadow-lg hover:shadow-xl">
              Request early access
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary text-lg">
              Watch cinematic walkthrough
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { label: 'Realms live', value: '5', icon: Briefcase },
              { label: 'Cities covered', value: '120+', icon: MapPin },
              { label: 'Avg. session', value: '24 min', icon: Sparkles },
              { label: 'Moderation SLA', value: '< 3 min', icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4 flex items-center space-x-3">
                <stat.icon className="w-5 h-5 text-blue-300" />
                <div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Realm Explorer */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3">Selective realms</p>
            <h2 className="text-4xl font-display text-white mb-6">
              Tap into the realm that matches your current vibe + intent.
            </h2>
            <p className="text-gray-300 mb-6">
              Choose between professional, social, dating, sexual (18+), and a neutral soft-launch mode. Wardrobe, discovery, and
              privacy rules adapt instantly.
            </p>
            <div className="flex flex-wrap gap-3">
              {realmCards.map((realm) => (
                <button
                  key={realm.id}
                  onClick={() => setSelectedRealmId(realm.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                    selectedRealmId === realm.id
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 text-gray-300 hover:text-white',
                  )}
                >
                  {REALM_LABELS[realm.id]}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className={cn('absolute inset-0 blur-3xl opacity-80 pointer-events-none bg-gradient-to-br', selectedRealm.gradient)} />
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-sm text-gray-300 mb-2">{selectedRealm.title}</p>
                  <h3 className="text-3xl font-semibold text-white mb-3">{selectedRealm.headline}</h3>
                  <p className="text-gray-200 leading-relaxed">{selectedRealm.description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {selectedRealm.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-black/30 border border-white/10 p-4">
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Shield className="w-4 h-4 text-emerald-300" />
                  <span>Scope controls respect {selectedRealm.title} defaults and safety locking.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Map */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <p className="uppercase tracking-[0.3em] text-xs text-gray-400">Atmospheric map</p>
            <h2 className="text-4xl font-display text-white">Live auras, GhostChat, and drop-ins per realm.</h2>
            <p className="text-gray-300">
              Mapbox GL renders cinematic tiles while privacy jitter, consent gates, and panic buttons keep members safe. Boosted
              auras shimmer for 6 hours, while GhostChat envelopes expire automatically.
            </p>
            <div className="space-y-3">
              {atmosphericSignals.map((signal) => (
                <div key={signal.label} className="glass rounded-2xl p-4">
                  <p className="text-sm text-gray-400">{signal.label}</p>
                  <p className="text-xl text-white font-semibold">{signal.value}</p>
                  <p className="text-sm text-gray-300">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="glass rounded-[32px] p-8 relative h-full min-h-[320px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950" />
              <div className="relative z-10 h-full w-full">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{ scale: [0.7, 1, 0.7], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
                    className={cn(
                      'absolute rounded-full mix-blend-screen blur-3xl opacity-80',
                      index === 0 && 'bg-sky-400/50 w-48 h-48 left-6 top-12',
                      index === 1 && 'bg-fuchsia-400/40 w-64 h-64 right-12 top-6',
                      index === 2 && 'bg-emerald-400/40 w-44 h-44 left-20 bottom-10',
                    )}
                  />
                ))}
                <div className="relative h-full w-full border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Now trending</p>
                    <h3 className="text-2xl font-semibold text-white">Castro, San Francisco</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-black/40 p-4">
                      <p className="text-sm text-gray-400">Realm mix</p>
                      <p className="text-xl text-white">38% Social</p>
                      <p className="text-sm text-gray-300">22% Dating • 16% Neutral</p>
                    </div>
                    <div className="rounded-2xl bg-black/40 p-4">
                      <p className="text-sm text-gray-400">GhostChats</p>
                      <p className="text-xl text-white">142 live</p>
                      <p className="text-sm text-gray-300">Boosted: 18</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <Radar className="w-4 h-4 text-cyan-300" />
                    <span>Location jitter enabled • consent gates active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circles & Events */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-gray-400">Circles & Events</p>
              <h2 className="text-4xl font-display text-white">IRL communities with moderated hosts.</h2>
            </div>
            <button className="btn-secondary inline-flex items-center">
              Browse atlas
              <MapPin className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {circleSpotlights.map((circle) => (
              <div key={circle.title} className="glass rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-2">{REALM_LABELS[circle.realm]}</p>
                  <h3 className="text-2xl font-semibold text-white">{circle.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{circle.description}</p>
                </div>
                <div className="mt-6 text-sm text-gray-300 space-y-1">
                  <p className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-300" />
                    <span>{formatAttendees(circle.attendees)} attending</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-300" />
                    <span>{circle.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="uppercase tracking-[0.3em] text-xs text-gray-400">Monetization Suite</p>
            <h2 className="text-4xl font-display text-white mb-4">Premium, tasteful revenue flywheel.</h2>
            <p className="text-gray-300">
              Boosts, Cruizr Pro, and promoted events all respect privacy scopes and moderation rules. Members monetize their
              presence while brands host realm-specific activations.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {monetizationStreams.map((stream) => (
              <div key={stream.title} className="glass rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{stream.title}</h3>
                  <p className="text-gray-300 text-sm">{stream.description}</p>
                </div>
                <div className="mt-6 text-sm text-gray-400 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-300" />
                  <span>{stream.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-400">Safety & Moderation</p>
          <h2 className="text-4xl font-display text-white mb-4">Consent, control, and rapid response.</h2>
          <p className="text-gray-300">
            Realm-specific rules, encrypted reporting, and a live moderation console deliver safety without sacrificing
            expression.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {safetyHighlights.map((highlight) => (
            <div key={highlight.title} className="glass rounded-3xl p-6 text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{highlight.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3">Launch partners</p>
          <h2 className="text-4xl font-display text-white mb-4">
            Build hisScene with us. Early partners receive wardrobe budgets, boosted placement, and custom safety ops.
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you are a creative director, venue host, or community lead, SceneHim equips you with premium tools to curate
            safe spaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary inline-flex items-center">
              Book a product tour
              <Heart className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary inline-flex items-center">
              Download deck
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SceneHim by Cruizr. Built with privacy and intention.</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Safety hotline 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Umbrella className="w-4 h-4 text-blue-400" />
              <span>GDPR + CCPA ready</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
