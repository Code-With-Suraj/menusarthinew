import React from 'react';
import { Star, TrendingUp, Users, ShieldCheck, Award, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function SocialProofSection({ onBookDemo }: { onBookDemo: () => void }) {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      ownerName: 'Aman Verma',
      role: 'Owner & Head Chef',
      restaurantName: 'Desi Swad Family Restaurant',
      location: 'Sector 62, Noida',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&auto=format&fit=crop&q=80',
      quote: 'Noida Sector 62 ke corporate offices ke regular orders pehle Swiggy-Zomato ko 30% commission me chale jaate the. MenuSarthi Direct Delivery link lagane ke baad, Sector 62 & 63 ke regular clients ab direct order kar rahe hain. Har mahine ₹25,000+ ki bachat hoti hai!',
      growthStat: '₹25,000+/mo',
      statLabel: 'Monthly Commission Saved',
      category: 'Family Restaurant & Dhaba'
    },
    {
      id: '2',
      ownerName: 'Pooja Sharma',
      role: 'Founder',
      restaurantName: 'The Sector 18 Artisan Cafe',
      location: 'Sector 18 Market, Noida',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      quote: 'Sector 18 Market me weekend rush bohot rehta hai. MenuSarthi QR Menu se guests khud table pe scan karke portion customization ke saath order place kar dete hain. Table turnover fast ho gaya hai aur 1,200+ Noida foodies ki phone database humare paas hai.',
      growthStat: '1,200+',
      statLabel: 'Noida Customer DB Owned',
      category: 'Cafe & Bakery'
    },
    {
      id: '3',
      ownerName: 'Rohit Agarwal',
      role: 'Co-Founder',
      restaurantName: 'Noida Biryani House',
      location: 'Sector 76, Noida',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: 'Sector 75, 76, 78 ke high-rise societies me exact tower & gate GPS location pinning flawless kaam karta hai. Direct WhatsApp order tracking link se customers bohot happy hain aur repeat orders 45% badh gaye hain.',
      growthStat: '+45%',
      statLabel: 'Direct Delivery Repeat Rate',
      category: 'Cloud Kitchen'
    }
  ];

  return (
    <section id="social-proof" className="py-24 px-4 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Real Restaurant Growth Metrics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Trusted By 5+ Restaurants <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Across Noida</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See how real restaurant, cafe, and cloud kitchen owners in Noida built their own digital identity and recovered thousands in profit.
          </p>
        </div>

        {/* Before vs After Impact Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Old Way */}
          <div className="p-6 bg-slate-950 border border-rose-900/40 rounded-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-rose-400 font-bold font-mono text-xs uppercase">OLD WAY (Aggregator Trap)</span>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded">
                Profit Bleed
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>28% to 32% commission deducted from every order</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Customer phone numbers & addresses hidden from you</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Third-party brand watermarks everywhere</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>No control over pricing or guest relationships</span>
              </li>
            </ul>
          </div>

          {/* New Way: MenuSarthi Growth Platform */}
          <div className="p-6 bg-slate-950 border border-emerald-500/40 rounded-2xl space-y-4 ring-1 ring-emerald-500/20">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-emerald-400 font-bold font-mono text-xs uppercase">MENUSARTHI WAY (Growth Platform)</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                100% Owned Profit
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>0% Commission cut on all direct table & delivery orders</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% Verified customer database exportable to Excel</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Your own custom domain, logo, and brand identity</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Flat subscription starting at ₹399/mo</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 relative hover:border-slate-700 transition-all">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <span className="text-[10px] bg-slate-950 border border-slate-800 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-full">
                    {t.category}
                  </span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">{t.statLabel}</span>
                  <span className="font-extrabold text-emerald-400 text-sm font-mono">{t.growthStat}</span>
                </div>

                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.ownerName} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                  <div>
                    <h4 className="font-bold text-white text-xs">{t.ownerName}</h4>
                    <span className="text-[10px] text-slate-400 block">{t.restaurantName} • {t.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
