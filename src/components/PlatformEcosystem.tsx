import React, { useState } from 'react';
import { 
  Smartphone, Bike, Cpu, Database, Sparkles, CheckCircle2, 
  ArrowRight, ShieldCheck, Zap, Layers, RefreshCw, MessageSquare
} from 'lucide-react';

export default function PlatformEcosystem({ onBookDemo }: { onBookDemo: () => void }) {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "Digital Identity & Smart QR Menu",
      tagline: "Dynamic, high-speed digital menu that updates in seconds",
      icon: Smartphone,
      accentColor: "from-orange-500 to-amber-500",
      description: "Replace soiled paper menus with an interactive, ultra-fast mobile web menu. Let guests explore category filters, Veg/Non-Veg badges, half/full portion selectors, and high-res food photos directly on their phone without downloading any app.",
      features: [
        "Instant price & item availability toggles",
        "Half/Full portion and customization add-ons",
        "Multiple language support (Hindi, English & regional)",
        "Zero app download needed — opens in 1 second"
      ]
    },
    {
      title: "0% Commission Direct Delivery",
      tagline: "Your own delivery ordering website with exact GPS map pinning",
      icon: Bike,
      accentColor: "from-emerald-500 to-teal-500",
      description: "Stop paying 30% commission cuts to marketplace apps. MenuSarthi gives you a dedicated direct delivery link with exact Google GPS address pinning, saved customer locations, and instant Razorpay / UPI direct bank settlement.",
      features: [
        "100% direct bank payout with 0% platform commission",
        "Exact GPS customer location pinning on Google Maps",
        "Live order status tracking link for customers",
        "Automated WhatsApp delivery updates"
      ]
    },
    {
      title: "Kitchen & Live Operations Engine",
      tagline: "Real-time Firebase order sync across table & delivery channels",
      icon: Cpu,
      accentColor: "from-purple-500 to-indigo-500",
      description: "No expensive KOT hardware or thermal printer code required. Orders stream live onto your kitchen phone, tablet, or laptop screen with real-time status updates (Received -> Preparing -> Ready -> Delivered).",
      features: [
        "Instant audio alert chime on incoming orders",
        "Table number & item customization breakdown",
        "One-tap status updates sent directly to customer WhatsApp",
        "Runs on any existing phone, tablet, or laptop"
      ]
    },
    {
      title: "100% Owned Customer CRM & Growth Engine",
      tagline: "Build a loyal customer database that drives repeat orders",
      icon: Database,
      accentColor: "from-amber-500 to-rose-500",
      description: "When customers order via MenuSarthi, you own their verified phone numbers, names, and order preferences. Broadcast promo coupons, festival specials, and loyalty points directly on WhatsApp.",
      features: [
        "100% verified customer database exportable to Excel anytime",
        "Smart up-sell combo engine at checkout (+24% ticket boost)",
        "Automated WhatsApp re-engagement broadcasts",
        "Customer review & instant feedback collector"
      ]
    }
  ];

  const currentPillar = pillars[activePillar];

  return (
    <section id="platform-ecosystem" className="py-24 px-4 bg-slate-900/80 relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>The Restaurant Growth Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            4 Core Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Business Independence</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            MenuSarthi connects your entire guest experience, kitchen queue, direct delivery, and customer relationships into one simple, unified platform.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer space-y-3 relative overflow-hidden ${isSelected ? 'bg-slate-950 border-orange-500 shadow-xl ring-1 ring-orange-500/30' : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${p.accentColor} flex items-center justify-center text-white shadow-md`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{p.title}</h4>
                <p className="text-slate-400 text-xs line-clamp-2">{p.tagline}</p>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep Showcase Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider block">
              PILLAR 0{activePillar + 1} DEEP DIVE
            </span>

            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              {currentPillar.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentPillar.description}
            </p>

            <div className="space-y-3 pt-2">
              {currentPillar.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onBookDemo}
                className="px-6 py-3 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>See {currentPillar.title} In Action</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF5C35] to-amber-400 mx-auto flex items-center justify-center text-white shadow-lg">
              {React.createElement(currentPillar.icon, { className: 'w-8 h-8' })}
            </div>
            
            <h4 className="font-bold text-white text-lg">{currentPillar.title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Fully integrated into MenuSarthi Platform. Zero extra plugins or setup required.
            </p>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-emerald-400 font-mono text-xs font-bold">
              ⚡ Instant Sync via Google Firebase
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
