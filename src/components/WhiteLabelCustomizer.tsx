import React, { useState } from 'react';
import { 
  Globe, ShieldCheck, Cpu, Smartphone, Layers, Sparkles, Check, 
  Settings, Database, MessageSquare, Award, ArrowRight, Zap, RefreshCw, Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WhiteLabelCustomizer({ onBookDemo }: { onBookDemo: () => void }) {
  const [brandName, setBrandName] = useState('Urban Chai & Cafe');
  const [subdomain, setSubdomain] = useState('urbanchai');
  const [selectedColor, setSelectedColor] = useState('#FF5C35');
  const [activeTab, setActiveTab] = useState<'brand' | 'modules' | 'architecture'>('brand');

  const [activeModules, setActiveModules] = useState<string[]>([
    'qr_menu',
    'direct_delivery',
    'customer_db',
    'whatsapp_ai',
    'loyalty_club'
  ]);

  const colorOptions = [
    { name: 'Saffron Sun', hex: '#FF5C35', bg: 'bg-[#FF5C35]' },
    { name: 'Emerald Spice', hex: '#10B981', bg: 'bg-emerald-500' },
    { name: 'Royal Crimson', hex: '#E11D48', bg: 'bg-rose-600' },
    { name: 'Amber Gold', hex: '#F59E0B', bg: 'bg-amber-500' },
    { name: 'Deep Indigo', hex: '#6366F1', bg: 'bg-indigo-500' },
  ];

  const availableModules = [
    { id: 'qr_menu', name: 'Interactive QR Table Menu', desc: 'Category filters, Half/Full portions, Veg/Non-Veg badges', included: true },
    { id: 'direct_delivery', name: '0% Commission Direct Delivery', desc: 'Live GPS Pinning, saved addresses & order status sync', included: true },
    { id: 'customer_db', name: '100% Owned Customer CRM', desc: 'Direct access to verified customer phones, addresses & order history', included: true },
    { id: 'whatsapp_ai', name: 'WhatsApp Marketing & Order Bot', desc: 'Automated order confirmations, retargeting & promo broadcasts', included: false },
    { id: 'loyalty_club', name: 'Digital Loyalty & Cashback Points', desc: 'Reward repeat customers with points redeemable on direct orders', included: false },
    { id: 'pos_sync', name: 'Billing & POS System Adapter', desc: 'Sync orders to third-party billing software or standalone POS', included: false },
    { id: 'kds_kitchen', name: 'Kitchen Display System (KDS)', desc: 'Real-time kitchen order screen for chefs with prep time timers', included: false },
    { id: 'multi_outlet', name: 'Franchise & Multi-Branch Hub', desc: 'Centralized admin management for multiple restaurant branches', included: false },
  ];

  const toggleModule = (id: string) => {
    if (activeModules.includes(id)) {
      setActiveModules(activeModules.filter(m => m !== id));
    } else {
      setActiveModules([...activeModules, id]);
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <section id="white-label" className="py-24 px-4 bg-slate-950 relative overflow-hidden border-b border-slate-800/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-purple-500/20 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>100% White Label & Custom Growth Engine</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Your Restaurant. Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Your Own Digital Identity.</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every restaurant is unique. MenuSarthi is built as an adaptable, white-label technology platform. You own your domain, logo, customer database, and custom feature upgrades as your business grows.
          </p>
        </div>

        {/* Interactive Customizer Workbench */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl ring-1 ring-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Mode Switcher Tabs */}
            <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold font-mono">
              <button
                onClick={() => setActiveTab('brand')}
                className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${activeTab === 'brand' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>1. Brand & Domain</span>
              </button>
              <button
                onClick={() => setActiveTab('modules')}
                className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${activeTab === 'modules' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>2. Feature Modules</span>
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${activeTab === 'architecture' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>3. Future Scale</span>
              </button>
            </div>

            {/* TAB 1: BRANDING & DOMAIN */}
            {activeTab === 'brand' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 font-mono uppercase block">
                    Restaurant Brand Name
                  </label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => {
                      setBrandName(e.target.value);
                      setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''));
                    }}
                    placeholder="e.g. Royal Punjab Dhaba"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 font-mono uppercase block">
                    Custom Domain / Subdomain URL
                  </label>
                  <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs font-mono text-slate-300">
                    <Globe className="w-4 h-4 text-slate-500 mr-2 shrink-0" />
                    <span className="text-amber-400 font-bold">{subdomain || 'myrestaurant'}</span>
                    <span className="text-slate-500">.menusarthi.com</span>
                    <span className="ml-auto text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-extrabold uppercase">
                      Custom SSL Included
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    *Premium plan includes custom domain mapping like <code className="text-amber-300">order.yourrestaurant.com</code>
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 font-mono uppercase block">
                    Brand Color Palette
                  </label>
                  <div className="flex gap-3">
                    {colorOptions.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => setSelectedColor(c.hex)}
                        className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center transition-all ${selectedColor === c.hex ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110' : 'opacity-70 hover:opacity-100'}`}
                        title={c.name}
                      >
                        {selectedColor === c.hex && <Check className="w-4 h-4 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero "Powered by Third-Party" Watermarks</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Your customers see only YOUR logo, YOUR colors, and YOUR brand identity. You own the customer relationships, phone numbers, and repeat order loyalty.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: MODULAR FEATURES */}
            {activeTab === 'modules' && (
              <div className="space-y-3 animate-fadeIn max-h-[380px] overflow-y-auto pr-1">
                <p className="text-xs text-slate-400">
                  Select feature modules to activate on your platform. MenuSarthi grows with your operational needs:
                </p>
                {availableModules.map((mod) => {
                  const isSelected = activeModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${isSelected ? 'bg-slate-950 border-orange-500/60 shadow-lg' : 'bg-slate-950/50 border-slate-800 opacity-60 hover:opacity-100'}`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${isSelected ? 'bg-[#FF5C35] border-orange-400 text-white' : 'border-slate-700'}`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white block">{mod.name}</span>
                          {mod.included && (
                            <span className="text-[9px] bg-slate-800 text-amber-400 font-mono px-1.5 py-0.5 rounded">Core</span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 block mt-0.5 leading-snug">{mod.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 3: FUTURE ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <span className="text-xs font-bold text-amber-400 font-mono block uppercase">
                    Never Trapped in Rigid Software
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Most SaaS platforms lock you into fixed features. Because MenuSarthi is built on modular Cloud & Firebase architecture, our engineering team can build custom integrations for your brand whenever you expand.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-white block text-[11px]">⚡ Custom API Integrations</span>
                    <span className="text-[10px] text-slate-400">Connect to ERP, SAP, Tally or local accounting systems.</span>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-white block text-[11px]">📱 Branded Mobile App</span>
                    <span className="text-[10px] text-slate-400">Option to publish custom Android/iOS apps on Play Store.</span>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-white block text-[11px]">🤖 AI WhatsApp Engine</span>
                    <span className="text-[10px] text-slate-400">Auto-respond to menu queries & take orders on WhatsApp.</span>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-white block text-[11px]">🏢 Franchise Control</span>
                    <span className="text-[10px] text-slate-400">Manage 5 to 500 outlets from one central dashboard.</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Live Interactive Preview Phone */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <div className="text-center pb-3">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Live Interactive White-Label Mobile Preview
              </span>
            </div>

            {/* Simulated Smartphone Shell */}
            <div className="w-full max-w-[320px] bg-slate-950 border-4 border-slate-800 rounded-[2.5rem] shadow-2xl p-4 space-y-3 relative ring-1 ring-white/10 overflow-hidden">
              
              {/* Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

              {/* Mobile Header with Live Dynamic Brand Colors */}
              <div 
                className="p-4 rounded-2xl text-white transition-all duration-300 space-y-2 shadow-lg"
                style={{ backgroundColor: selectedColor }}
              >
                <div className="flex justify-between items-center text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center font-black text-xs">
                      {brandName ? brandName.charAt(0) : 'M'}
                    </div>
                    <span className="font-display font-black text-sm">{brandName || 'Your Brand Name'}</span>
                  </div>
                  <span className="text-[9px] bg-black/30 px-2 py-0.5 rounded-full font-mono">LIVE</span>
                </div>
                
                <div className="text-[10px] opacity-90 font-mono flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  <span>{subdomain || 'myrestaurant'}.menusarthi.com</span>
                </div>
              </div>

              {/* Simulated Customer App Menu List */}
              <div className="space-y-2 text-xs">
                
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-b border-slate-800 pb-1">
                  <span>SPECIALTIES</span>
                  <span className="text-emerald-400 font-bold">30-Min Fast Prep</span>
                </div>

                {/* Item 1 */}
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-bold text-white text-xs">Signature Paneer Butter Masala</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Rich cashew gravy with butter naan</span>
                  </div>
                  <button 
                    className="px-2.5 py-1 rounded-lg text-white font-bold text-[10px] transition-all"
                    style={{ backgroundColor: selectedColor }}
                  >
                    + ADD ₹260
                  </button>
                </div>

                {/* Item 2 */}
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-bold text-white text-xs">Kulhad Masala Chai Combo</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Steaming hot with maska bun</span>
                  </div>
                  <button 
                    className="px-2.5 py-1 rounded-lg text-white font-bold text-[10px] transition-all"
                    style={{ backgroundColor: selectedColor }}
                  >
                    + ADD ₹70
                  </button>
                </div>

              </div>

              {/* Activated Feature Badges Pill Row */}
              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1">
                {activeModules.map((mId) => {
                  const item = availableModules.find(a => a.id === mId);
                  if (!item) return null;
                  return (
                    <span key={mId} className="text-[9px] bg-slate-900 text-amber-300 border border-slate-800 px-2 py-0.5 rounded-full font-mono">
                      ✓ {item.name.split(' ')[0]}
                    </span>
                  );
                })}
              </div>

              {/* Direct Order Floating Bar */}
              <div className="p-2.5 bg-emerald-950/80 border border-emerald-800/80 rounded-xl flex items-center justify-between text-xs text-emerald-300">
                <span className="font-extrabold text-[11px]">0% Marketplace Commission</span>
                <span className="font-mono text-emerald-400 font-bold">100% Direct Profit</span>
              </div>

            </div>

            {/* Call to action for custom white label */}
            <div className="pt-6 text-center">
              <button
                onClick={onBookDemo}
                className="px-6 py-3 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl shadow-lg shadow-orange-950/50 uppercase tracking-wider transition-all hover:scale-105 cursor-pointer flex items-center gap-2 mx-auto"
              >
                <span>Request Custom White Label Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
