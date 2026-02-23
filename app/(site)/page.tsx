'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Shield,
  Zap,
  Briefcase,
  Heart,
  Compass,
  Smartphone,
  Lock,
  Sparkles,
  SignalHigh,
  Layers,
  Satellite,
  CalendarCheck2,
  Fingerprint,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { REALM_COLORS, REALM_LABELS, RealmType } from '../lib/types';

const heroStats = [
  { label: 'Cities live today', value: '42' },
  { label: 'Presence moments shared / hr', value: '18k' },
  { label: 'Realm switches per minute', value: '3.7k' },
];

const featureStack = [
  {
    title: 'Presence Engine',
    description: 'Realm-aware location streaming with intent & availability metadata.',
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Privacy Lattice',
    description: 'Multi-layered encryption, location jitter, and consent handshakes.',
    icon: Shield,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Signal Graph',
    description: 'Interest + circles graphing for high-signal introductions.',
    icon: Layers,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Atmospheric UI',
    description: 'Realm-colored auras and tactile map interactions on every device.',
    icon: Smartphone,
    color: 'from-pink-500 to-orange-500',
  },
];

const flows = [
  {
    title: 'Switch intent instantly',
    steps: ['Pick Professional, Social, Dating, or Sexual realms', 'Presence preview updates live', 'Only matching people can request you'],
    icon: Compass,
  },
  {
    title: 'Drop a signal',
    steps: ['Choose a signal template (coffee, brainstorm, spark, vibe)', 'Set radius & duration', 'Cruizr handles invitations + guardrails'],
    icon: SignalHigh,
  },
  {
    title: 'Meet on your terms',
    steps: ['Mutual intent confirmation', 'AI safety concierge verifies context', 'Ephemeral chat with auto-expiring location'],
    icon: CalendarCheck2,
  },
];

const safetyProtocols = [
  {
    title: 'Adaptive Jitter',
    description: 'Dynamic fuzzing keeps your dot private until trust is confirmed.',
    icon: Satellite,
  },
  {
    title: 'Biometric Locks',
    description: 'Realm switching can require FaceID/TouchID for high-risk contexts.',
    icon: Fingerprint,
  },
  {
    title: 'Consent Receipts',
    description: 'Every invite + location share ships with cryptographic proof.',
    icon: Lock,
  },
];

const testimonials = [
  {
    quote:
      'Cruizr nails the balance of being seen without being exposed. My whole crew flips between creative work sessions and social hangs effortlessly.',
    name: 'Tara - Creative Producer',
  },
  {
    quote: 'Meeting new collaborators in new cities now feels curated, intentional, and safe. I trust the guardrails.',
    name: 'Noah - Touring DJ',
  },
];

const faqs = [
  {
    q: 'How does Cruizr protect my exact location?',
    a: 'We blend adaptive jitter, encrypted relays, and realm-gated reveal windows so only trusted matches ever see precise coordinates.',
  },
  {
    q: 'Is this only for dating?',
    a: 'No. Cruizr supports professional networking, creative collabs, social hangs, and intimacy with separate privacy rules per realm.',
  },
  {
    q: 'What platforms are supported?',
    a: 'iOS, Android, and web. The presence engine syncs across them in real time.',
  },
];

const waitlistBenefits = ['48-hour VIP onboarding', 'Realm concierge session', 'Founding member badge'];

const timeline = [
  { phase: 'Now', title: 'Private beta waitlist', detail: 'Curating high-signal communities in 10 anchor cities.' },
  { phase: 'Soon', title: 'Open realm editor', detail: 'Design custom realms for your crew, team, or club.' },
  { phase: 'Next', title: 'Creator monetization', detail: 'Paywalled maps, guided sessions, and signal templates.' },
];

const signalTemplates = [
  { title: 'Deep Work Sprint', detail: '2 hr focus pod · professional realm', icon: Briefcase },
  { title: 'Open Studio', detail: 'Co-create session · social realm', icon: Sparkles },
  { title: 'Midnight Drive', detail: 'Late-night adventure · dating realm', icon: MapPin },
  { title: 'Private Afterhours', detail: 'Invite-only energy · sexual realm', icon: Heart },
];

const mapParticles = [
  { top: '8%', left: '18%' },
  { top: '15%', left: '70%' },
  { top: '28%', left: '30%' },
  { top: '35%', left: '55%' },
  { top: '50%', left: '20%' },
  { top: '62%', left: '72%' },
  { top: '74%', left: '40%' },
  { top: '82%', left: '15%' },
  { top: '10%', left: '45%' },
  { top: '22%', left: '80%' },
  { top: '48%', left: '60%' },
  { top: '66%', left: '32%' },
  { top: '78%', left: '68%' },
  { top: '40%', left: '10%' },
  { top: '58%', left: '85%' },
  { top: '88%', left: '52%' },
  { top: '5%', left: '5%' },
  { top: '25%', left: '12%' },
  { top: '32%', left: '85%' },
  { top: '70%', left: '5%' },
  { top: '90%', left: '80%' },
  { top: '60%', left: '50%' },
  { top: '44%', left: '78%' },
  { top: '18%', left: '55%' },
];

export default function HomePage() {
  const [activeRealm, setActiveRealm] = useState<RealmType>('professional');
  const [signal, setSignal] = useState(signalTemplates[0]);
  const [email, setEmail] = useState('');

  const realmDescription = useMemo(() => {
    switch (activeRealm) {
      case 'professional':
        return 'Build creative crews, close deals, and protect client-sensitive meetings.';
      case 'social':
        return 'Curate hangs, pop-up gatherings, and spontaneous meetups with friends-of-friends.';
      case 'dating':
        return 'Energy-aligned dates with transparent intent and AI-powered safety prompts.';
      case 'sexual':
        return 'High-consent, invitation-only spaces with layered verification.';
      default:
        return 'Stay invisible until you are ready to be discovered.';
    }
  }, [activeRealm]);

  const handleWaitlist = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen space-y-32 pb-32">
      {/* Hero */}
      <section className="relative px-4 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-dark text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live presence OS for humans who move with intention
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-white">
            Build the <span className="gradient-text">full stack</span> of real-world presence with Cruizr
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-6">
            A realm-aware social network that keeps your circles close, your boundaries protected, and your city instantly legible.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="btn-primary inline-flex items-center text-lg">
              Join the waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary inline-flex items-center text-lg">
              Watch the demo
              <PlayIcon />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl py-6">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Feature stack */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Full-stack presence</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
              Everything you need to flip intent in seconds
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featureStack.map((feature) => (
              <div key={feature.title} className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${feature.color}`} />
                <div className="relative z-10">
                  <feature.icon className="w-10 h-10 text-white mb-6" />
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 mt-3">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realms */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Intent realms</p>
            <h2 className="text-4xl font-display text-white mt-4">Flip realms without breaking flow</h2>
            <p className="text-gray-300 mt-4">Your identity adapts to every space while you stay in control.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {(Object.keys(REALM_LABELS) as RealmType[]).map((realm) => (
                <button
                  key={realm}
                  onClick={() => setActiveRealm(realm)}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                    activeRealm === realm ? 'bg-white text-black' : 'glass text-gray-300'
                  }`}
                >
                  {REALM_LABELS[realm]}
                </button>
              ))}
            </div>
            <p className="text-lg text-white font-medium mt-6">{realmDescription}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <CheckCircle2 className="text-emerald-400" /> Verified circles
              <CheckCircle2 className="text-blue-400" /> Consent guardrails
              <CheckCircle2 className="text-purple-400" /> Contextual identities
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-900">
              <div className="absolute inset-0">
                {mapParticles.map((point, idx) => (
                  <span
                    key={`${point.top}-${point.left}-${idx}`}
                    className="absolute w-1 h-1 rounded-full bg-white/30"
                    style={{ top: point.top, left: point.left }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-64 h-64 rounded-full opacity-70"
                  style={{ background: `radial-gradient(circle, ${REALM_COLORS[activeRealm]}55 0%, transparent 70%)` }}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-2xl p-4 text-sm">
                <div className="flex items-center justify-between text-gray-300">
                  <div>
                    <p className="text-white font-semibold">{REALM_LABELS[activeRealm]}</p>
                    <p className="text-xs">Visibility scoped to mutual realm</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs" style={{ color: REALM_COLORS[activeRealm] }}>
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signal templates */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Signals</p>
              <h2 className="text-4xl font-display text-white mt-4">Drop signals the city can feel</h2>
              <p className="text-gray-300 mt-4">
                Pick a template, set duration, and Cruizr broadcasts to the right people with automatic guardrails.
              </p>
              <div className="mt-8 space-y-4">
                {signalTemplates.map((template) => (
                  <button
                    key={template.title}
                    onClick={() => setSignal(template)}
                    className={`w-full text-left rounded-2xl p-4 transition ${
                      signal.title === template.title ? 'bg-white text-black' : 'glass text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <template.icon className="w-5 h-5" />
                      <div>
                        <p className="font-semibold">{template.title}</p>
                        <p className="text-sm opacity-80">{template.detail}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:flex-1 glass rounded-3xl p-8">
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-pink-400" /> Signal composer
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Expires in 45 min
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-400 text-sm">Template</p>
                <h3 className="text-3xl text-white font-semibold">{signal.title}</h3>
                <p className="text-gray-300 mt-2">{signal.detail}</p>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 text-sm">Radius</p>
                  <h4 className="text-white text-2xl font-semibold">2.0 km</h4>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Invite slots</p>
                  <h4 className="text-white text-2xl font-semibold">4 seats</h4>
                </div>
              </div>
              <div className="mt-10">
                <button className="btn-primary w-full text-lg inline-flex items-center justify-center">
                  Broadcast signal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Workflow</p>
            <h2 className="text-4xl font-display text-white mt-4">From spark to meetup in three flows</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {flows.map((flow) => (
              <div key={flow.title} className="glass rounded-3xl p-8">
                <flow.icon className="w-10 h-10 text-white mb-6" />
                <h3 className="text-2xl text-white font-semibold">{flow.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {flow.steps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="text-emerald-400">•</span> {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Safety stack</p>
            <h2 className="text-4xl font-display text-white mt-4">Safety engineered with intimacy in mind</h2>
            <p className="text-gray-300 mt-4">
              Every signal, invite, and meet is wrapped in encryption and proactive monitoring so you can focus on chemistry, not concerns.
            </p>
            <div className="mt-8 space-y-4">
              {safetyProtocols.map((protocol) => (
                <div key={protocol.title} className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white/10">
                    <protocol.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg text-white font-semibold">{protocol.title}</p>
                    <p className="text-gray-400 text-sm">{protocol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <div className="border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Shield className="text-emerald-400" /> AI Safety Concierge
              </div>
              <div className="mt-6 space-y-4 text-gray-300">
                <div>
                  <p className="text-sm">Context scan</p>
                  <p className="text-white text-xl font-semibold">Clean</p>
                </div>
                <div>
                  <p className="text-sm">Consent logs</p>
                  <p className="text-white text-xl font-semibold">Synced</p>
                </div>
                <div>
                  <p className="text-sm">Emergency relay</p>
                  <p className="text-white text-xl font-semibold">Ready</p>
                </div>
              </div>
              <button className="btn-secondary w-full mt-8">Review protocols</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass rounded-3xl p-8">
                <p className="text-lg text-white">“{testimonial.quote}”</p>
                <p className="text-sm text-gray-400 mt-6">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Roadmap</p>
            <h2 className="text-4xl font-display text-white mt-4">Where Cruizr is headed</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.phase} className="glass rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">{item.phase}</p>
                  <p className="text-2xl text-white font-semibold">{item.title}</p>
                </div>
                <p className="text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Waitlist */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">FAQ</p>
            <h2 className="text-4xl font-display text-white mt-4">Answers for the curious</h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass rounded-3xl p-5">
                  <p className="text-lg text-white font-semibold">{faq.q}</p>
                  <p className="text-gray-300 mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Private beta</p>
            <h2 className="text-4xl font-display text-white mt-4">Get on the Cruizr waitlist</h2>
            <p className="text-gray-300 mt-4">We approve members weekly with a focus on high-signal connectors.</p>
            <form className="mt-8 space-y-4" onSubmit={handleWaitlist}>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="input w-full"
              />
              <button type="submit" className="btn-primary w-full text-lg">
                Claim my spot
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              {waitlistBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm px-4">
        <p>© {new Date().getFullYear()} Cruizr. Presence for humans who know their intent.</p>
      </footer>
    </div>
  );
}

function PlayIcon() {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
      ▶
    </span>
  );
}
