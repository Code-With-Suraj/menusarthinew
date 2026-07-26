import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles, Phone, ShieldCheck, Globe } from 'lucide-react';

export default function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5C35] via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-orange-950/50">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-display font-black text-white text-lg tracking-wider">
              MS
            </div>
          </div>
          <div>
            <span className="font-display font-black text-white text-xl tracking-tight block">
              MenuSarthi
            </span>
            <span className="text-[10px] text-amber-400 font-mono block -mt-1 font-bold">
              Restaurant Growth Platform
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold font-mono text-slate-300">
          <a href="#video-demo" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-red-400 font-extrabold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            <span>Watch Demo</span>
          </a>
          <a href="#white-label" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>White Label</span>
          </a>
          <a href="#founder-story" className="hover:text-amber-400 transition-colors">
            Why MenuSarthi
          </a>
          <a href="#who-is-it-for" className="hover:text-amber-400 transition-colors">
            Who It's For
          </a>
          <a href="#platform-ecosystem" className="hover:text-amber-400 transition-colors">
            Growth Ecosystem
          </a>
          <a href="#roi-calculator" className="hover:text-amber-400 transition-colors text-emerald-400">
            Profit Calculator
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">
            Pricing (₹399/mo)
          </a>
          <a href="#trust-and-security" className="hover:text-amber-400 transition-colors">
            Guarantees
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onBookDemo}
            className="px-5 py-2.5 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl shadow-lg shadow-orange-950/50 uppercase tracking-wider transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <span>Schedule Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4 text-sm font-bold font-mono text-slate-300 animate-fadeIn">
          <a 
            href="#video-demo" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 text-red-400 font-bold flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Watch Live Video Demo</span>
          </a>
          <a 
            href="#white-label" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 text-amber-400 flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>100% White Label Engine</span>
          </a>
          <a href="#founder-story" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Why MenuSarthi Exists
          </a>
          <a href="#who-is-it-for" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Who It's Built For
          </a>
          <a href="#platform-ecosystem" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Platform Capabilities
          </a>
          <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-emerald-400">
            Profit Savings Calculator
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Pricing (Starts ₹399/mo)
          </a>
          <a href="#trust-and-security" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Security & Guarantees
          </a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemo();
              }}
              className="w-full py-3 bg-[#FF5C35] text-white font-black text-xs rounded-xl uppercase tracking-wider text-center"
            >
              Schedule Free Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
