import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Layers, Award } from 'lucide-react';

export default function PricingSection({ onBookDemo }: { onBookDemo: () => void }) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 px-4 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Honest Transparent Growth Tiering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Fair Pricing Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Every Stage Of Growth</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No hidden commissions, no expensive hardware, no mandatory AMC surprises. Simple, predictable subscriptions that pay for themselves in days.
          </p>

          {/* Billing Toggle Switch */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs font-bold font-mono ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-slate-900 border border-slate-800 rounded-full p-1 relative cursor-pointer transition-colors"
            >
              <div
                className={`w-6 h-6 bg-[#FF5C35] rounded-full shadow-md transform transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>

            <span className={`text-xs font-bold font-mono flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-amber-400' : 'text-slate-400'}`}>
              Annual Savings (Best Value)
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full uppercase font-mono font-extrabold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Main Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Starter Plan (₹399/mo / ₹4,599/yr) */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between space-y-6 relative hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">Starter Plan</span>
              <h3 className="text-2xl font-bold text-white">Dine-In QR Table Menu</h3>
              
              <div className="pt-2">
                <span className="text-4xl font-black font-mono text-white">
                  {billingCycle === 'monthly' ? '₹399' : '₹4,599'}
                </span>
                <span className="text-slate-400 text-xs"> / {billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <p className="text-slate-400 text-xs leading-relaxed">
                Ideal for cafes, dhabas, and small eateries looking for clean digital QR table ordering with zero paper menu hassle.
              </p>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive High-Speed QR Table Menu</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dine-In Table Order Routing & Kitchen Ticker</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct UPI Bank Payments (0% Fee)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited Menu Edits & Food Photos</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500">
                  <span className="w-4 text-center">✕</span>
                  <span>Direct Delivery GPS System</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-all cursor-pointer"
            >
              Get Starter Setup
            </button>
          </div>

          {/* Plan 2: Growth Plan (₹599/mo / ₹6,999/yr) - MOST POPULAR */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-[#FF5C35] rounded-3xl p-8 flex flex-col justify-between space-y-6 relative shadow-2xl ring-1 ring-orange-500/20 transform lg:-translate-y-3">
            
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5C35] text-white text-[10px] font-black uppercase font-mono tracking-widest px-4 py-1 rounded-full shadow-md">
              Most Popular For Restaurant Growth
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-orange-400 tracking-wider">Growth Plan</span>
              <h3 className="text-2xl font-bold text-white">Direct Delivery & Customer Ownership</h3>
              
              <div className="pt-2">
                <span className="text-4xl font-black font-mono text-white">
                  {billingCycle === 'monthly' ? '₹599' : '₹6,999'}
                </span>
                <span className="text-slate-400 text-xs"> / {billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <p className="text-slate-300 text-xs leading-relaxed">
                For cloud kitchens, cafes, and restaurants looking to launch 0% commission direct delivery, collect verified customer phone lists, and boost repeat sales.
              </p>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Everything in Starter Plan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>0% Commission Direct Delivery Website</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>GPS Map Pinning & Saved Customer Addresses</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Verified Customer Database Access</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Smart Up-sell Combo Engine & Coupons</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full py-3.5 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-orange-950/50"
            >
              Start Growth Plan Demo
            </button>
          </div>

          {/* Plan 3: Premium Plan (₹799/mo / ₹8,999/yr) */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between space-y-6 relative hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider">Premium Plan</span>
              <h3 className="text-2xl font-bold text-white">White-Label & Custom Domain</h3>
              
              <div className="pt-2">
                <span className="text-4xl font-black font-mono text-white">
                  {billingCycle === 'monthly' ? '₹799' : '₹8,999'}
                </span>
                <span className="text-slate-400 text-xs"> / {billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <p className="text-slate-400 text-xs leading-relaxed">
                For established brands, fine dining, and multi-branch outlets wanting complete white-label branding, custom domain mapping, and multi-outlet hubs.
              </p>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Everything in Growth Plan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Domain Mapping (order.yourbrand.com)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>White-Label Branding (No MenuSarthi Logo)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Multi-Outlet Central Admin Hub</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Priority 24/7 Account Engineer</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-all cursor-pointer"
            >
              Request White-Label Demo
            </button>
          </div>

        </div>

        {/* Enterprise & Franchise Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">FRANCHISE & CUSTOM DEVELOPMENT TIER</span>
            <h3 className="text-xl font-bold text-white">Need Custom Modular Extensions, POS Sync, or WhatsApp AI?</h3>
            <p className="text-slate-400 text-xs max-w-2xl">
              Our engineering team builds custom integrations for multi-branch franchise chains, local POS billing software, and specialized ERPs.
            </p>
          </div>
          <button
            onClick={onBookDemo}
            className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-all shrink-0 cursor-pointer"
          >
            Talk to Enterprise Engineer
          </button>
        </div>

      </div>
    </section>
  );
}
