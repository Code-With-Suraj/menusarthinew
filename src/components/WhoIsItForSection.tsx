import React, { useState } from 'react';
import { 
  Coffee, Pizza, Utensils, Flame, Sparkles, Building2, Store, 
  Bike, ChefHat, GlassWater, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { RestaurantCategory } from '../types';

export default function WhoIsItForSection({ onBookDemo }: { onBookDemo: () => void }) {
  const categories: RestaurantCategory[] = [
    {
      id: 'cafes',
      name: 'Cafes & Coffee Shops',
      icon: 'Coffee',
      tagline: 'Instant QR menu at every table + High-margin addon combos',
      description: 'Cafes thrive on fast repeat visits and aesthetic menus. MenuSarthi lets cafe guests order coffee, fries, and desserts straight from table QR codes without waiting for waiters during peak morning & evening rushes.',
      metrics: '+35% higher average bill via automated beverage & dessert upselling',
      badge: 'Table QR & Quick Order'
    },
    {
      id: 'cloud_kitchens',
      name: 'Cloud Kitchens',
      icon: 'Bike',
      tagline: '0% commission direct delivery website & instant WhatsApp notifications',
      description: 'Stop giving away 30% to aggregators. Launch your own online brand storefront with exact GPS address pinning, Razorpay prepayments, and direct customer phone collection.',
      metrics: 'Save ₹18,000–₹45,000/mo in aggregator commission fees',
      badge: 'Direct Delivery Champion'
    },
    {
      id: 'dhabas',
      name: 'Dhabas & Roadside Eateries',
      icon: 'Flame',
      tagline: 'No order shouting, direct table QR ordering & 0% UPI payments',
      description: 'Baar-baar chilane aur manual KOT likhne ki jhanjhat khatam. Customers scan table QR, select thalis or tandoori rotis, and pay directly to your UPI ID without cash change hassle.',
      metrics: 'Zero order shouting & 100% accurate kitchen thali delivery',
      badge: 'Highway & Roadside Proven'
    },
    {
      id: 'pizza_burgers',
      name: 'Pizza & Burger Outlets',
      icon: 'Pizza',
      tagline: 'Smart size selectors, extra topping add-ons & meal combos',
      description: 'Seamlessly offer 7" / 10" / 12" size choices, cheese-burst crust add-ons, extra patties, and dip add-ons that boost revenue effortlessly on every ticket.',
      metrics: '+28% ticket value with smart crust & dip upselling',
      badge: 'Custom Portion Selector'
    },
    {
      id: 'tea_juice',
      name: 'Tea, Juice & Snack Bars',
      icon: 'GlassWater',
      tagline: 'High-frequency micro-transactions with zero order bottleneck',
      description: 'Handle hundreds of fast tea, bun maska, or juice orders during rush hours with instant QR display and pay-at-counter code integration.',
      metrics: '2x faster order processing during peak evening rush',
      badge: 'High Speed Micro-Orders'
    },
    {
      id: 'fine_dining',
      name: 'Fine Dining & Restos',
      icon: 'Utensils',
      tagline: 'Elegant digital menu with HD food photography & wine pairings',
      description: 'Elevate your guest dining experience with sleek multi-course digital menus, chef recommendation tags, ingredient allergen details, and instant feedback reviews.',
      metrics: '4.8★ average customer rating with instant review collector',
      badge: 'Premium Guest Experience'
    },
    {
      id: 'food_trucks',
      name: 'Food Trucks & Pop-ups',
      icon: 'Store',
      tagline: '100% wireless, runs on any smartphone with zero heavy hardware',
      description: 'No space for bulky billing computers or wires. Manage your entire menu, live queue, and payments directly from your smartphone or tablet anywhere.',
      metrics: '100% mobile-friendly with zero hardware footprint',
      badge: '100% Portable'
    },
    {
      id: 'bakeries_sweets',
      name: 'Bakeries & Sweet Shops',
      icon: 'ChefHat',
      tagline: 'Weight-based pricing (250g/500g/1kg) & advance cake pre-orders',
      description: 'Let customers choose custom cake weights, eggless options, and advance pickup dates for festive sweet boxes and custom celebrations.',
      metrics: 'Effortless pre-orders during festive seasons',
      badge: 'Weight & Pre-Order Ready'
    },
    {
      id: 'multi_franchise',
      name: 'Multi-Outlet & Franchises',
      icon: 'Building2',
      tagline: 'Centralized admin control for menus, prices & multi-branch sales',
      description: 'Manage 3 to 50+ restaurant outlets from one central dashboard. Update prices, run region-wide offers, and compare branch performance live.',
      metrics: 'Unified multi-outlet control with white-label domain',
      badge: 'Franchise Scale Ready'
    }
  ];

  const [selectedCatId, setSelectedCatId] = useState<string>('cafes');
  const activeCategory = categories.find(c => c.id === selectedCatId) || categories[0];

  return (
    <section id="who-is-it-for" className="py-24 px-4 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Built For Every Food & Beverage Format</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Designed Specifically For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Your Business Model</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you run a single-outlet chai corner, a high-order cloud kitchen, or a multi-branch franchise network — MenuSarthi adapts to your daily operational reality.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const isSelected = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${isSelected ? 'bg-[#FF5C35] text-white shadow-lg shadow-orange-950 border border-orange-400/30 scale-105' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'}`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Deep Dive Display Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-mono font-bold px-3 py-1 rounded-full border border-orange-500/30">
              {activeCategory.badge}
            </span>

            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              {activeCategory.name}
            </h3>

            <p className="text-amber-300 font-semibold text-sm sm:text-base">
              "{activeCategory.tagline}"
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeCategory.description}
            </p>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-emerald-400 font-mono">
                {activeCategory.metrics}
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookDemo}
                className="px-6 py-3 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>See Demo For {activeCategory.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">RECOMMENDED SETUP</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                READY IN 24 HOURS
              </span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom QR Code Table Standees</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0% Commission Direct Delivery Link</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Razorpay / UPI Direct Bank Settlement</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Owned Verified Customer Phone List</span>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-slate-400 text-center font-mono">
              Works on Android, iOS, Windows, Mac, or Tablet without any app download.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
