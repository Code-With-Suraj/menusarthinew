import React from 'react';
import { Heart, Shield, Users, TrendingUp, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FounderStory({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section id="founder-story" className="py-24 px-4 bg-slate-900/80 relative overflow-hidden border-b border-slate-800">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Our Mission & Founder Story</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Why MenuSarthi Was Built: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">
              A Guarantee for Every Independent Restaurant
            </span>
          </h2>
        </div>

        {/* Narrative Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative">
          
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF5C35] to-amber-400 p-0.5 shrink-0 shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-display font-black text-white text-xl">
                MS
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">A Note From Our Team</h3>
              <span className="text-xs text-amber-400 font-mono">Built after visiting 300+ restaurant owners across India</span>
            </div>
          </div>

          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            
            <p>
              Over the last three years, our team sat down inside <strong className="text-white">over 300 cafes, dhabas, cloud kitchens, and family restaurants</strong>. We watched owners work 14-hour days—prepping ingredients at 6 AM, managing kitchen rushes, and doing everything possible to deliver delicious food.
            </p>

            <p>
              Yet, despite their tireless dedication, we kept hearing the exact same heartbreaking story over and over:
            </p>

            {/* Pain Point Highlight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-1">
                <span className="text-rose-400 font-bold text-xs block font-mono">💔 The Commission Bleed</span>
                <p className="text-slate-400 text-xs">
                  Marketplace delivery platforms take 25% to 30% of every order while hiding customer phone numbers and addresses from the restaurant owner.
                </p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-1">
                <span className="text-rose-400 font-bold text-xs block font-mono">💔 No Customer Ownership</span>
                <p className="text-slate-400 text-xs">
                  When a customer orders through third-party apps, the restaurant never gets their data. They can't send offer updates or build repeat loyalty.
                </p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-1">
                <span className="text-rose-400 font-bold text-xs block font-mono">💔 Outdated Printed Menus</span>
                <p className="text-slate-400 text-xs">
                  Paper menus get damaged, soiled, and outdated. Every minor price change forces re-printing costs and creates order mistakes during peak hours.
                </p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-1">
                <span className="text-rose-400 font-bold text-xs block font-mono">💔 Unaffordable Enterprise Tech</span>
                <p className="text-slate-400 text-xs">
                  Big chains have custom digital platforms, but small single-outlet restaurants were asked to pay ₹15,000–₹25,000+ setup fees for legacy software.
                </p>
              </div>
            </div>

            <p className="font-semibold text-white">
              We decided that independent restaurants deserved better.
            </p>

            <p>
              That is why we built <strong className="text-amber-400">MenuSarthi</strong> — not as another stiff POS software or a disposable QR tool, but as a genuine <strong className="text-white">Restaurant Growth Platform</strong>.
            </p>

            <p>
              Our vision is simple: <strong className="text-emerald-400">Every restaurant deserves enterprise-level digital technology without enterprise-level pricing.</strong> Technology should help your business grow, give you ownership of your brand and customers, and never become an expensive burden.
            </p>

          </div>

          {/* Core Guarantees Callout Banner */}
          <div className="bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-slate-900 border border-orange-500/30 p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2.5 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>100% Owned Customer Database</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>0% Commission Direct Delivery</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Modular Tech That Scales With You</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">Ready to own your restaurant's digital future?</span>
              <span className="text-sm font-bold text-white block">Talk to our product team in a 5-minute live demo.</span>
            </div>
            <button
              onClick={onBookDemo}
              className="px-6 py-3 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-105 cursor-pointer shrink-0 flex items-center gap-2"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
