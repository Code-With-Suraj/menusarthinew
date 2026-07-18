import React, { useState } from 'react';
import { 
  Smartphone, Monitor, Tablet, ShoppingCart, ArrowRight, CheckCircle2, 
  Search, Plus, Minus, CreditCard, ChevronRight, Play, Utensils, 
  RefreshCcw, AlertCircle, TrendingUp, Download, Settings, 
  Eye, ToggleLeft, ToggleRight, Radio, Bell, ChefHat, CheckSquare, 
  Check, Edit2, Trash2, FileSpreadsheet, Calendar, User, AppWindow,
  Briefcase, Shield, Layers, HelpCircle, FileText
} from 'lucide-react';

export default function LiveAppGallery() {
  const [roleTab, setRoleTab] = useState<'customer' | 'owner'>('customer');
  const [activeScreen, setActiveScreen] = useState<string>('cust-menu');

  // Customer Screens Configuration
  const customerScreens = [
    { id: 'cust-menu', name: '1. Customer Menu', desc: 'Sleek browsing experience with dynamic sizing and instant Add-to-cart.' },
    { id: 'cust-cart', name: '2. Customer Cart & Upselling', desc: 'One-click upselling chips (Papad, Drinks) to drive higher average order values.' },
    { id: 'cust-track', name: '3. Real-time Order Tracking', desc: 'Step-by-step progress update so clients never have to yell for waiter status.' }
  ];

  // Owner Screens Configuration
  const ownerScreens = [
    { id: 'owner-dash', name: '1. Live Orders Dashboard', desc: 'Centralized live orders feed with instant push actions for kitchen staff.' },
    { id: 'owner-stock', name: '2. Menu Stock Manager', desc: 'Instantly toggle dish availability to prevent guests from placing wrong orders.' },
    { id: 'owner-addons', name: '3. Add-ons Panel', desc: 'Quickly modify standard add-ons like butter naans and extra portions.' },
    { id: 'owner-reports', name: '4. Financial & CA Reports', desc: 'CA-compliant GST breakdowns and revenue logs ready to export as CSV.' }
  ];

  const handleRoleChange = (role: 'customer' | 'owner') => {
    setRoleTab(role);
    setActiveScreen(role === 'customer' ? 'cust-menu' : 'owner-dash');
  };

  return (
    <div className="py-20 px-4 bg-slate-950 text-white scroll-mt-20 border-b border-slate-900" id="app-screenshots">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="bg-[#FF5C35]/10 text-[#FF5C35] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono border border-[#FF5C35]/20">
            Live Application Tour
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Explore the Real App Interface
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Take a visual tour of MenuSarthi's operational screens. Reconstructed with exact pixel-by-pixel fidelity from our active merchant applications in India.
          </p>
        </div>

        {/* Desktop vs Mobile Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex gap-2 shadow-2xl">
            <button
              onClick={() => handleRoleChange('customer')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                roleTab === 'customer' 
                  ? 'bg-[#FF5C35] text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4.5 h-4.5" />
              <span>Customer Application</span>
            </button>
            <button
              onClick={() => handleRoleChange('owner')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                roleTab === 'owner' 
                  ? 'bg-[#FF5C35] text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4.5 h-4.5" />
              <span>Owner Admin Console</span>
            </button>
          </div>
        </div>

        {/* Interactive Layout Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Screen Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#FF5C35] font-bold">
                {roleTab === 'customer' ? 'Customer Experience Flows' : 'Merchant Operations Suite'}
              </h4>
              <p className="text-slate-400 text-xs">
                {roleTab === 'customer' 
                  ? 'Zero friction flow designed for maximum ticket conversion and smooth ordering.' 
                  : 'Powerful, high-efficiency panels to run dhabas, cafes, and multi-table restaurants.'}
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {(roleTab === 'customer' ? customerScreens : ownerScreens).map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 group flex items-start gap-3.5 ${
                    activeScreen === screen.id 
                      ? 'bg-slate-900 border-[#FF5C35]/40 shadow-xl scale-102' 
                      : 'bg-slate-900/40 border-slate-900 hover:bg-slate-900/80 hover:border-slate-800'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeScreen === screen.id ? 'bg-[#FF5C35] text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                  }`}>
                    {roleTab === 'customer' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                  </div>
                  <div>
                    <h5 className={`font-bold text-sm transition-colors ${activeScreen === screen.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {screen.name}
                    </h5>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed group-hover:text-slate-400">
                      {screen.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Direct Interactive Demo Launcher */}
            <div className="bg-slate-900 border border-[#FF5C35]/20 p-4.5 rounded-2xl space-y-3.5 mt-4">
              <div>
                <span className="bg-[#FF5C35]/15 text-[#FF5C35] text-[10px] font-bold font-mono px-2 py-0.5 rounded-md">
                  TRY IT NOW
                </span>
                <p className="text-xs text-slate-300 font-semibold mt-1.5">
                  Want to see this screen in action on your browser?
                </p>
              </div>
              
              {roleTab === 'customer' ? (
                <a
                  href="https://demomenusarthi.surajdx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF5C35] hover:bg-[#E6431D] text-white text-xs font-black py-3 px-4 rounded-xl text-center uppercase tracking-wider block transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/15"
                >
                  <span>Launch Live Customer App</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              ) : (
                <div className="space-y-2">
                  <a
                    href="https://demomenusarthi.surajdx.com/?page=admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-100 hover:bg-white text-slate-950 text-xs font-black py-3 px-4 rounded-xl text-center uppercase tracking-wider block transition-colors flex items-center justify-center gap-2 font-display"
                  >
                    <span>Launch Live Admin Console 🖥️</span>
                    <ArrowRight className="w-4 h-4 shrink-0 text-slate-950" />
                  </a>
                  <p className="text-[10px] text-slate-400 text-center font-mono leading-relaxed">
                    🔑 Enter password <strong className="text-yellow-400">admin123</strong> to log into the live Admin panel.
                  </p>
                </div>
              )}
            </div>

            {roleTab === 'owner' && (
              <div className="bg-slate-900/30 border border-slate-900 p-4 rounded-2xl space-y-2 mt-4">
                <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold font-mono">
                  <Shield className="w-4 h-4" />
                  <span>SECURE OWNER PROTOCOLS</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  All admin panels are end-to-end synchronized using encrypted Google Cloud scripts. Your financials and menus remain completely secure under multi-factor merchant credentials.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: High Fidelity Screen Simulation */}
          <div className="lg:col-span-8 flex justify-center items-center">
            
            {/* If Customer flow, we show a gorgeous Phone frame */}
            {roleTab === 'customer' ? (
              <div className="relative w-full max-w-[360px] aspect-[9/18.5] bg-[#0E1013] rounded-[45px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[12px] border-slate-800 overflow-hidden flex flex-col ring-1 ring-white/10">
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-40 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-900 rounded-full mb-1" />
                  <div className="w-2.5 h-2.5 bg-slate-950 rounded-full ml-3 mb-1" />
                </div>

                {/* Simulated Screen Content Container */}
                <div className="flex-1 bg-[#121318] text-white mt-5 overflow-y-auto flex flex-col justify-between font-sans relative">
                  
                  {/* SCREEN 1: CUSTOMER MENU (SCREEN 7) */}
                  {activeScreen === 'cust-menu' && (
                    <div className="flex-1 flex flex-col h-full bg-[#121318] text-slate-100 p-4">
                      {/* Customer Header */}
                      <div className="flex items-center justify-between mb-4 mt-2">
                        <div>
                          <span className="text-[10px] text-slate-400 font-mono tracking-wider">Hi, Suraj Singh!</span>
                          <h4 className="text-base font-extrabold font-display leading-tight">MenuSarthi Cafe</h4>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                          <User className="w-4 h-4 text-[#FF5C35]" />
                        </div>
                      </div>

                      {/* Custom Search bar */}
                      <div className="relative flex items-center bg-[#1A1C23] border border-slate-800 rounded-xl px-3 py-2 mb-4">
                        <Search className="w-4 h-4 text-slate-500 mr-2" />
                        <span className="text-slate-500 text-xs">Search dishes...</span>
                      </div>

                      {/* Categories chips horizontal list */}
                      <div className="flex gap-2 overflow-x-auto pb-4 shrink-0 no-scrollbar">
                        <span className="bg-[#FF5C35] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shrink-0">Starters</span>
                        <span className="bg-[#1A1C23] border border-slate-800 text-slate-400 text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0">Main Course</span>
                        <span className="bg-[#1A1C23] border border-slate-800 text-slate-400 text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0">Breads</span>
                        <span className="bg-[#1A1C23] border border-slate-800 text-slate-400 text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0">Beverage</span>
                      </div>

                      {/* Dish List */}
                      <div className="space-y-3.5 flex-1">
                        {/* Paneer Tikka Item */}
                        <div className="bg-[#1A1C23] border border-slate-800/80 p-3 rounded-2xl flex items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                              <span className="text-xl">🍢</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 border border-green-600 flex items-center justify-center shrink-0 rounded-xs">
                                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                </span>
                                <h5 className="font-bold text-xs">Paneer Tikka</h5>
                              </div>
                              <p className="text-[10px] text-slate-400">Marinated cottage cheese grilled...</p>
                              <p className="text-xs font-extrabold text-[#FF5C35]">₹149 - ₹249</p>
                            </div>
                          </div>
                          <button className="bg-[#FF5C35] hover:bg-[#E6431D] text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wide">
                            Select
                          </button>
                        </div>

                        {/* Chicken Tikka Item */}
                        <div className="bg-[#1A1C23] border border-slate-800/80 p-3 rounded-2xl flex items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                              <span className="text-xl">🍗</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 border border-red-600 flex items-center justify-center shrink-0 rounded-xs">
                                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                </span>
                                <h5 className="font-bold text-xs">Chicken Tikka</h5>
                              </div>
                              <p className="text-[10px] text-slate-400">Succulent chicken pieces with smoky...</p>
                              <p className="text-xs font-extrabold text-[#FF5C35]">₹179 - ₹279</p>
                            </div>
                          </div>
                          <button className="bg-[#FF5C35] hover:bg-[#E6431D] text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wide">
                            Select
                          </button>
                        </div>

                        {/* Crispy Corn Item */}
                        <div className="bg-[#1A1C23] border border-slate-800/80 p-3 rounded-2xl flex items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                              <span className="text-xl">🌽</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 border border-green-600 flex items-center justify-center shrink-0 rounded-xs">
                                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                </span>
                                <h5 className="font-bold text-xs">Crispy Corn</h5>
                              </div>
                              <p className="text-[10px] text-slate-400">Golden fried corn kernels with spices</p>
                              <p className="text-xs font-extrabold text-[#FF5C35]">₹179</p>
                            </div>
                          </div>
                          <button className="bg-[#FF5C35] hover:bg-[#E6431D] text-white text-[10px] font-bold px-3.5 py-1.5 rounded-xl uppercase tracking-wide">
                            Add
                          </button>
                        </div>
                      </div>

                      {/* Bottom tab bar simulation */}
                      <div className="border-t border-slate-800 pt-3 flex justify-around text-slate-400 text-[10px] bg-[#121318]">
                        <span className="text-[#FF5C35] flex flex-col items-center gap-0.5 font-bold"><Utensils className="w-4 h-4" />Menu</span>
                        <span className="flex flex-col items-center gap-0.5"><ShoppingCart className="w-4 h-4" />Cart</span>
                        <span className="flex flex-col items-center gap-0.5"><Radio className="w-4 h-4" />Track</span>
                        <span className="flex flex-col items-center gap-0.5"><Layers className="w-4 h-4" />Orders</span>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: CUSTOMER CART & UPSELLING (SCREEN 5) */}
                  {activeScreen === 'cust-cart' && (
                    <div className="flex-1 flex flex-col h-full bg-[#121318] text-slate-100 p-4">
                      {/* Cart Title */}
                      <div className="flex items-center justify-between mb-4 mt-2 border-b border-slate-800 pb-2">
                        <span className="text-xs font-semibold text-[#FF5C35]">← Back</span>
                        <h4 className="text-sm font-extrabold font-display">Your Cart</h4>
                        <span className="text-xs text-red-500 font-semibold cursor-pointer">Clear</span>
                      </div>

                      {/* Items in Cart */}
                      <div className="bg-[#1A1C23] border border-slate-800 p-3 rounded-2xl flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="w-2.5 h-2.5 border border-green-600 flex items-center justify-center rounded-xs">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                            </span>
                            <span className="font-bold text-xs">Paneer Tikka (Half)</span>
                          </div>
                          <span className="text-slate-400 text-xs">₹149 × 1 = ₹149</span>
                        </div>
                        <div className="flex items-center gap-2.5 bg-slate-800 border border-slate-700 px-2 py-1 rounded-xl">
                          <Minus className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                          <span className="text-xs font-bold">1</span>
                          <Plus className="w-3.5 h-3.5 text-[#FF5C35] cursor-pointer" />
                        </div>
                      </div>

                      {/* Upselling Section */}
                      <div className="mb-4">
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                          🍽️ Complete Your Meal
                        </h5>
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Item 1: Masala Papad */}
                          <div className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl flex flex-col items-center text-center">
                            <span className="text-lg">🍘</span>
                            <span className="text-[10px] font-bold mt-1 text-slate-200 truncate w-full">Masala Papad</span>
                            <span className="text-[10px] text-[#FF5C35] font-extrabold mb-1.5">₹49</span>
                            <button className="w-full bg-[#FF5C35]/10 hover:bg-[#FF5C35]/20 border border-[#FF5C35]/30 text-[#FF5C35] text-[9px] font-extrabold py-1 rounded-lg uppercase tracking-wider">
                              + ADD
                            </button>
                          </div>
                          {/* Item 2: Cold Drink */}
                          <div className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl flex flex-col items-center text-center">
                            <span className="text-lg">🥤</span>
                            <span className="text-[10px] font-bold mt-1 text-slate-200 truncate w-full">Cold Drink (300ml)</span>
                            <span className="text-[10px] text-[#FF5C35] font-extrabold mb-1.5">₹45</span>
                            <button className="w-full bg-[#FF5C35]/10 hover:bg-[#FF5C35]/20 border border-[#FF5C35]/30 text-[#FF5C35] text-[9px] font-extrabold py-1 rounded-lg uppercase tracking-wider">
                              + ADD
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Receipt calculations */}
                      <div className="bg-[#1A1C23]/60 border border-slate-800/80 p-3 rounded-2xl space-y-2.5 mb-4 text-xs">
                        <div className="flex justify-between text-slate-400">
                          <span>Subtotal (1)</span>
                          <span>₹149</span>
                        </div>
                        <div className="flex justify-between font-extrabold text-white border-t border-slate-800 pt-2">
                          <span>Total</span>
                          <span className="text-[#FF5C35]">₹149.00</span>
                        </div>
                      </div>

                      {/* Input fields */}
                      <div className="space-y-3 mb-4 text-xs">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 font-bold uppercase">Table Number</label>
                          <input 
                            type="text" 
                            disabled 
                            placeholder="Table 4" 
                            className="w-full bg-[#1A1C23] border border-slate-800 px-3 py-2 rounded-xl text-xs text-slate-400 outline-none" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 font-bold uppercase">Special Instructions</label>
                          <textarea 
                            disabled 
                            placeholder="e.g. Extra spicy, no onions..." 
                            className="w-full bg-[#1A1C23] border border-slate-800 px-3 py-2 rounded-xl text-xs text-slate-400 outline-none h-12 resize-none" 
                          />
                        </div>
                      </div>

                      {/* Checkout Action */}
                      <button className="w-full bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg uppercase tracking-wider mb-2">
                        🚀 Place Order — ₹149.00
                      </button>
                    </div>
                  )}

                  {/* SCREEN 3: REAL-TIME TRACKING (SCREEN 4) */}
                  {activeScreen === 'cust-track' && (
                    <div className="flex-1 flex flex-col h-full bg-[#121318] text-slate-100 p-4 justify-between">
                      <div className="space-y-4">
                        {/* Tracker Header */}
                        <div className="bg-[#1A1C23] border border-slate-800 p-3 rounded-2xl text-center">
                          <h4 className="text-xs font-bold text-[#FF5C35] tracking-wider uppercase">ORD-20260705-5297</h4>
                          <span className="text-[10px] text-slate-400">Takeaway • 05 Jul 2026, 04:07 PM</span>
                        </div>

                        {/* Tracker Status Stepper */}
                        <div className="bg-[#1A1C23] border border-slate-800 p-3.5 rounded-2xl">
                          <div className="flex justify-between items-center relative">
                            {/* Horizontal Line Connector */}
                            <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-800 z-0" />
                            <div className="absolute top-4 left-4 w-1/3 h-0.5 bg-[#FF5C35] z-0" />

                            {/* Node 1: Received */}
                            <div className="flex flex-col items-center gap-1.5 z-10 relative">
                              <div className="w-8 h-8 rounded-full bg-[#FF5C35] text-white flex items-center justify-center border-2 border-[#121318]">
                                <FileText className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[9px] font-bold text-[#FF5C35]">Received</span>
                            </div>

                            {/* Node 2: Preparing */}
                            <div className="flex flex-col items-center gap-1.5 z-10 relative">
                              <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center border-2 border-[#121318]">
                                <ChefHat className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[9px] font-semibold text-slate-500">Preparing</span>
                            </div>

                            {/* Node 3: Ready */}
                            <div className="flex flex-col items-center gap-1.5 z-10 relative">
                              <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center border-2 border-[#121318]">
                                <CheckSquare className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[9px] font-semibold text-slate-500">Ready!</span>
                            </div>

                            {/* Node 4: Completed */}
                            <div className="flex flex-col items-center gap-1.5 z-10 relative">
                              <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center border-2 border-[#121318]">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[9px] font-semibold text-slate-500">Done</span>
                            </div>
                          </div>
                        </div>

                        {/* Order details items */}
                        <div className="bg-[#1A1C23] border border-slate-800 p-4 rounded-2xl space-y-3.5">
                          <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                            Order Details
                          </h5>
                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-200">Chicken Tikka (Half) × 1</span>
                              <span className="font-bold text-slate-100">₹179</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-200">Cold Drink (300ml) × 1</span>
                              <span className="font-bold text-slate-100">₹45</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-200">Butter Naan × 1</span>
                              <span className="font-bold text-slate-100">₹49</span>
                            </div>
                            <div className="flex justify-between font-extrabold text-white border-t border-slate-800 pt-2 text-sm">
                              <span>Total</span>
                              <span className="text-[#FF5C35]">₹273</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Order tracking footer action */}
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <button className="bg-slate-900 border border-slate-800 text-slate-300 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider">
                          🍽️ Order More
                        </button>
                        <button className="bg-[#FF5C35] hover:bg-[#E6431D] text-white py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 uppercase tracking-wider">
                          <RefreshCcw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} /> Refresh
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full" />
              </div>
            ) : (
              /* Owner Screens View (Mockup of a beautiful laptop / tablet screen) */
              <div className="w-full bg-[#0E1013] rounded-2xl border border-slate-800 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col font-sans ring-1 ring-white/10">
                {/* Window Top Bar Chrome */}
                <div className="bg-[#16171B] border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-slate-500 font-mono ml-4">MenuSarthi Merchant Portal (Live)</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-emerald-500">Live Server Connected</span>
                  </div>
                </div>

                {/* Owner Inner Console Screen */}
                <div className="bg-[#121318] text-white p-4 min-h-[440px] flex flex-col justify-between">
                  
                  {/* Top Stats Grid Row for Owner Console (Screens 1, 2, 3) */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Today's Orders</span>
                      <span className="text-lg font-extrabold text-white mt-1 block">2</span>
                    </div>
                    <div className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Revenue</span>
                      <span className="text-lg font-extrabold text-emerald-500 mt-1 block">₹1,122.45</span>
                    </div>
                    <div className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Active Orders</span>
                      <span className="text-lg font-extrabold text-[#FF5C35] mt-1 block">1</span>
                    </div>
                    <div className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Avg Order</span>
                      <span className="text-lg font-extrabold text-amber-500 mt-1 block">₹561</span>
                    </div>
                  </div>

                  {/* Operational Tab row icons from the real app screenshots */}
                  <div className="flex gap-2 bg-[#16171B] border border-slate-800 p-1.5 rounded-xl mb-4 text-xs font-semibold shrink-0">
                    <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${activeScreen === 'owner-dash' ? 'bg-[#FF5C35] text-white' : 'text-slate-400 hover:text-white'}`}>
                      <Bell className="w-3.5 h-3.5" /> Orders
                    </button>
                    <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${activeScreen === 'owner-stock' ? 'bg-[#FF5C35] text-white' : 'text-slate-400 hover:text-white'}`}>
                      <Utensils className="w-3.5 h-3.5" /> Menu
                    </button>
                    <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${activeScreen === 'owner-addons' ? 'bg-[#FF5C35] text-white' : 'text-slate-400 hover:text-white'}`}>
                      <Layers className="w-3.5 h-3.5" /> Add-ons
                    </button>
                    <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${activeScreen === 'owner-reports' ? 'bg-[#FF5C35] text-white' : 'text-slate-400 hover:text-white'}`}>
                      <FileSpreadsheet className="w-3.5 h-3.5" /> Reports
                    </button>
                  </div>

                  {/* Main Simulated Panel View */}
                  <div className="flex-1 overflow-y-auto pr-1">

                    {/* OWNER SCREEN 1: ORDERS DASHBOARD (SCREEN 3) */}
                    {activeScreen === 'owner-dash' && (
                      <div className="space-y-3">
                        <div className="bg-[#1A1C23] border-l-4 border-[#FF5C35] border-y border-r border-slate-800 p-3 rounded-r-xl space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-extrabold text-sm text-slate-200">ORD-20260705-5297</h5>
                              <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                                Table Takeaway • Suraj Singh
                              </p>
                            </div>
                            <span className="text-[10px] text-slate-500">9 min ago</span>
                          </div>

                          <div className="flex gap-2">
                            <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                              Received
                            </span>
                            <span className="bg-[#FF5C35]/10 border border-[#FF5C35]/20 text-[#FF5C35] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                              Unpaid
                            </span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed font-mono">
                            Chicken Tikka (Half) × 1, Cold Drink (300ml) × 1, Butter Naan × 1
                          </p>

                          <div className="flex items-center justify-between border-t border-slate-800 pt-2.5">
                            <span className="text-sm font-extrabold text-[#FF5C35]">₹273</span>
                            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-[10px] uppercase tracking-wide flex items-center gap-1">
                              <ChefHat className="w-3 h-3" /> Start Preparing
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* OWNER SCREEN 2: MENU STOCK MANAGER (SCREEN 6) */}
                    {activeScreen === 'owner-stock' && (
                      <div className="space-y-2.5 text-xs">
                        <div className="flex justify-between items-center mb-3">
                          <button className="bg-[#FF5C35] hover:bg-[#E6431D] text-white font-bold px-4 py-1.5 rounded-lg text-[10px] uppercase tracking-wider">
                            + Add Item
                          </button>
                          <span className="text-[11px] text-slate-400">Total Items: 12</span>
                        </div>

                        {/* List items mimicking screenshot 6 */}
                        {[
                          { name: 'Paneer Tikka', category: 'Starters', price: '₹249', code: 'M001', stock: true },
                          { name: 'Chicken Tikka', category: 'Starters', price: '₹279', code: 'M002', stock: true },
                          { name: 'Crispy Corn', category: 'Starters', price: '₹179', code: 'M003', stock: true },
                          { name: 'Veg Spring Rolls', category: 'Starters', price: '₹199', code: 'M004', stock: true },
                          { name: 'Tandoori Chicken', category: 'Starters', price: '₹349', code: 'M005', stock: false }
                        ].map((dish, i) => (
                          <div key={i} className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${dish.stock ? 'bg-green-500' : 'bg-red-500'}`} />
                              <div>
                                <h6 className="font-bold text-slate-200">{dish.name}</h6>
                                <p className="text-[9px] text-slate-500 font-mono mt-0.5">{dish.category} • {dish.price} • {dish.code}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 scale-85">
                                {dish.stock ? (
                                  <span className="text-green-500 font-mono text-[10px] font-bold">IN STOCK</span>
                                ) : (
                                  <span className="text-red-500 font-mono text-[10px] font-bold">OUT</span>
                                )}
                                <span className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${dish.stock ? 'bg-green-500 flex justify-end' : 'bg-slate-700 flex justify-start'}`}>
                                  <span className="w-4 h-4 rounded-full bg-white shadow-xs" />
                                </span>
                              </div>
                              <Edit2 className="w-3.5 h-3.5 text-slate-400 hover:text-white cursor-pointer" />
                              <Trash2 className="w-3.5 h-3.5 text-red-500/80 hover:text-red-500 cursor-pointer" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* OWNER SCREEN 3: ADD-ONS PANEL (SCREEN 1) */}
                    {activeScreen === 'owner-addons' && (
                      <div className="space-y-2.5 text-xs">
                        <div className="flex justify-between items-center mb-3">
                          <button className="bg-[#FF5C35] hover:bg-[#E6431D] text-white font-bold px-4 py-1.5 rounded-lg text-[10px] uppercase tracking-wider">
                            + Add Add-On
                          </button>
                          <span className="text-[11px] text-slate-400 font-mono">Modifiers</span>
                        </div>

                        {[
                          { name: 'Butter Naan', price: '₹49', links: 'M006, M007, M008... • A001' },
                          { name: 'Garlic Naan', price: '₹59', links: 'M006, M007, M008... • A002' },
                          { name: 'Jeera Rice', price: '₹129', links: 'M006, M007, M008... • A003' },
                          { name: 'Raita', price: '₹69', links: 'M009, M010, M006... • A004' }
                        ].map((addon, i) => (
                          <div key={i} className="bg-[#1A1C23] border border-slate-800 p-2.5 rounded-xl flex justify-between items-center">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <h6 className="font-bold text-slate-200">{addon.name}</h6>
                                <span className="text-[10px] text-slate-400">({addon.price})</span>
                              </div>
                              <p className="text-[9px] text-slate-500 font-mono">{addon.links}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-5 rounded-full p-0.5 bg-green-500 flex justify-end cursor-pointer scale-85">
                                <span className="w-4 h-4 rounded-full bg-white shadow-xs" />
                              </span>
                              <Edit2 className="w-3.5 h-3.5 text-slate-400 hover:text-white cursor-pointer" />
                              <Trash2 className="w-3.5 h-3.5 text-red-500/80 hover:text-red-500 cursor-pointer" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* OWNER SCREEN 4: FINANCIAL REPORTS (SCREEN 2) */}
                    {activeScreen === 'owner-reports' && (
                      <div className="space-y-4 text-xs">
                        <div className="bg-[#1A1C23] border border-slate-800 p-3.5 rounded-xl">
                          <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#FF5C35] mb-3 flex items-center gap-1.5">
                            📊 Financial Reports (for Owner & CA)
                          </h6>
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="space-y-1">
                              <label className="text-[9px] uppercase font-mono text-slate-500">Start Date</label>
                              <div className="bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg text-[11px] flex items-center justify-between text-slate-300">
                                <span>05/07/2026</span>
                                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] uppercase font-mono text-slate-500">End Date</label>
                              <div className="bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg text-[11px] flex items-center justify-between text-slate-300">
                                <span>05/07/2026</span>
                                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                            </div>
                          </div>

                          <button className="w-full bg-[#FF5C35] hover:bg-[#E6431D] text-white py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
                            🔍 Get Report
                          </button>

                          <button className="w-full bg-[#22C55E] hover:bg-[#1E9E4C] text-slate-950 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest flex items-center justify-center gap-1.5">
                            📥 Export CA-Compliant CSV
                          </button>
                        </div>

                        {/* Recent logs */}
                        <div className="bg-[#1A1C23] border border-slate-800 p-3 rounded-xl">
                          <h6 className="text-[10px] font-bold uppercase text-slate-400 mb-2 font-mono">Detailed Order Log</h6>
                          <div className="overflow-x-auto">
                            <table className="w-full text-[10px] font-mono">
                              <thead>
                                <tr className="border-b border-slate-800 text-slate-500 text-left">
                                  <th className="pb-1">Order ID</th>
                                  <th className="pb-1">Table</th>
                                  <th className="pb-1">Taxable</th>
                                  <th className="pb-1">GST</th>
                                  <th className="pb-1">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="text-slate-300">
                                  <td className="py-1.5 text-slate-400">705-5297</td>
                                  <td>Takeaway</td>
                                  <td>₹809.00</td>
                                  <td>₹40.45</td>
                                  <td className="text-emerald-500 font-bold">₹849.45</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Windows Control Frame Footer */}
                  <div className="border-t border-slate-800/80 pt-3 text-[10px] text-slate-500 font-mono text-center shrink-0">
                    MenuSarthi Admin Panel Framework v3.5 • Powered by secure Apps Script triggers
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
