'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Shield, Zap, Briefcase, Users, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
          >
            <Zap className="w-12 h-12 text-white" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Express Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Presence
            </span>,<br />
            Connect Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The only social network that respects your intent, protects your privacy, 
            and connects you with the right people at the right time.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Privacy First</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Location Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Real Connections</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Selective Realms</h3>
              <p className="text-gray-300 text-center">
                Switch between Professional, Social, Dating, or Sexual realms. 
                Your intent shapes who you see.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Atmospheric Map</h3>
              <p className="text-gray-300 text-center">
                Beautiful realm-colored auras show presence and intent. 
                See who&apos;s nearby right now.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Privacy & Safety</h3>
              <p className="text-gray-300 text-center">
                Location jitter, mutual realm gating, and granular controls. 
                Your safety isn&apos;t optional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Cruizr. Built with privacy and intention.
          </p>
        </div>
      </footer>
    </div>
  );
}