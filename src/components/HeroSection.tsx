import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowRight, Play, ShieldCheck, CheckCircle2, QrCode, 
  Smartphone, TrendingUp, Users, DollarSign, Clock, Star, Zap, ChevronRight
} from 'lucide-react';

export default function HeroSection({ onBookDemo }: { onBookDemo: () => void }) {
  const [activeScan, setActiveScan] = useState(false);
  const [liveOrdersCount, setLiveOrdersCount] = useState(1482);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScan(prev => !prev);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveOrdersCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 px-4 bg-slate-950 overflow-hidden border-b border-slate-800/80">
      
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-500/15 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-purple-500/20 border border-orange-500/30 px-4 py-1.5 rounded-full text-amber-300 text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>The Restaurant Growth Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black text-white tracking-tight leading-[1.1]">
            Grow Your Restaurant. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">
              Not Marketplace Commission.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            Build your own digital identity, own your customer database, eliminate 30% aggregator commission cuts, and run direct ordering at <strong className="text-amber-400 font-bold">₹399/mo</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-sm rounded-2xl shadow-2xl shadow-orange-950/80 uppercase tracking-wider transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-3 ring-2 ring-orange-500/50"
            >
              <span>Schedule 5-Min Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#white-label"
              className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-sm rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>Explore White Label</span>
            </a>

          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <span className="text-xl sm:text-2xl font-black font-mono text-white block">0%</span>
              <span className="text-slate-400 text-xs font-mono">Commission Cut</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black font-mono text-amber-400 block">100%</span>
              <span className="text-slate-400 text-xs font-mono">Owned Customer DB</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400 block">&lt; 24h</span>
              <span className="text-slate-400 text-xs font-mono">Deployment Speed</span>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Interactive Floating Mockup */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Mobile Device Container */}
          <div className="w-full max-w-[340px] bg-slate-950 border-4 border-slate-800 rounded-[2.8rem] shadow-2xl p-4 space-y-4 relative ring-1 ring-white/10 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            
            {/* Phone Notch */}
            <div className="w-32 h-4 bg-slate-800 rounded-b-xl mx-auto" />

            {/* Simulated Live Restaurant Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-400 font-mono font-bold uppercase block">LIVE DEMO RESTAURANT</span>
                <h4 className="font-display font-black text-white text-sm">Royal Punjab Dhaba & Cafe</h4>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* QR Scan Simulator Box */}
            <div className={`p-4 rounded-2xl border transition-all duration-500 text-center space-y-2 relative ${activeScan ? 'bg-orange-950/30 border-orange-500/60 shadow-lg' : 'bg-slate-900 border-slate-800'}`}>
              
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>TABLE #04 QR ORDER</span>
                <span className="text-emerald-400 font-bold">SCAN ACTIVE</span>
              </div>

              <div className="w-20 h-20 bg-white p-2 rounded-xl mx-auto shadow-md relative overflow-hidden flex items-center justify-center">
                <QrCode className="w-full h-full text-slate-950" />
                {activeScan && (
                  <div className="absolute inset-x-0 h-1 bg-orange-500 shadow-md animate-bounce top-1/2" />
                )}
              </div>

              <span className="text-[11px] text-slate-300 font-medium block">
                {activeScan ? "⚡ Guest Scanned & Browsing Menu..." : "Scan Table QR to Order"}
              </span>
            </div>

            {/* Live Order Card simulation */}
            <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-2xl text-xs space-y-1.5">
              <div className="flex justify-between items-center text-emerald-300 font-bold font-mono text-[11px]">
                <span>NEW ORDER #2048</span>
                <span>₹460 • PAID (UPI)</span>
              </div>
              <div className="text-[10px] text-slate-300">
                2x Special Paneer Tikka + 1x Butter Naan
              </div>
              <div className="flex justify-between items-center text-[10px] text-emerald-400 font-mono pt-1 border-t border-emerald-900/60">
                <span>0% Commission Kept</span>
                <span>Direct Bank Deposit</span>
              </div>
            </div>

            {/* Live Ticker Footnote */}
            <div className="text-[10px] text-slate-400 font-mono text-center flex items-center justify-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{liveOrdersCount} direct orders processed today across India</span>
            </div>

          </div>

          {/* Floating Glassmorphic Metric Badge 1 */}
          <div className="absolute -top-4 -left-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 animate-bounce">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              ₹
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-mono block">COMMISSION SAVED</span>
              <span className="text-xs font-bold text-white font-mono">₹1,45,000+ / Year</span>
            </div>
          </div>

          {/* Floating Glassmorphic Metric Badge 2 */}
          <div className="absolute -bottom-4 -right-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              ★
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-mono block">CUSTOMER DATABASE</span>
              <span className="text-xs font-bold text-white font-mono">100% Owned By You</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
