import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Globe, Award } from 'lucide-react';

export default function FinalEmotionalCTA({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section id="final-cta" className="py-28 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 text-center">
        
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-purple-500/20 border border-orange-500/30 px-5 py-2 rounded-full text-amber-300 text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>The Restaurant Ownership Movement</span>
        </div>

        {/* Powerful Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight">
            Your Restaurant Deserves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">
              Its Own Digital Identity.
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Stop giving away your profits and customer relationships to third-party aggregators. Build a brand that belongs entirely to you.
          </p>
        </div>

        {/* 4 Emotional Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-orange-500/40 transition-all">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase block">01. Ownership</span>
            <h4 className="font-bold text-white text-base">Own Your Customers</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every phone number, order history, and customer address stays inside your private database.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-orange-500/40 transition-all">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase block">02. Identity</span>
            <h4 className="font-bold text-white text-base">Own Your Brand</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Your own domain name, your custom brand colors, your custom logo. Zero forced watermarks.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-orange-500/40 transition-all">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase block">03. Independence</span>
            <h4 className="font-bold text-white text-base">Own Your Profits</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              100% direct bank payouts with 0% marketplace commission cuts on direct orders.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-orange-500/40 transition-all">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase block">04. Scalability</span>
            <h4 className="font-bold text-white text-base">Own Your Future</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Adaptable modular architecture that grows seamlessly as you open new branches.
            </p>
          </div>

        </div>

        {/* CTA Button Box */}
        <div className="pt-6 max-w-xl mx-auto space-y-4">
          <button
            onClick={onBookDemo}
            className="w-full py-5 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-black text-sm sm:text-base rounded-2xl uppercase tracking-wider transition-all hover:scale-105 cursor-pointer shadow-2xl shadow-orange-950/80 flex items-center justify-center gap-3"
          >
            <span>Schedule 5-Minute Live Interactive Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-slate-400 text-xs font-mono">
            ⚡ Live in under 24 hours • 0% Commission • Dedicated Onboarding Manager
          </p>
        </div>

      </div>
    </section>
  );
}
