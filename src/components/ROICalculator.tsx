import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Sparkles, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ROICalculator({ onBookDemo }: { onBookDemo: () => void }) {
  const [monthlyOrders, setMonthlyOrders] = useState<number>(450);
  const [avgTicket, setAvgTicket] = useState<number>(380);
  const [aggregatorCommissionPct, setAggregatorCommissionPct] = useState<number>(26);

  const totalMonthlySales = monthlyOrders * avgTicket;
  const monthlyCommissionBleed = (totalMonthlySales * aggregatorCommissionPct) / 100;
  const annualCommissionBleed = monthlyCommissionBleed * 12;

  // MenuSarthi Growth Plan cost: ₹599/mo (or ₹6,999/year)
  const menuSarthiAnnualCost = 6999;
  const netAnnualSavings = Math.max(0, annualCommissionBleed - menuSarthiAnnualCost);

  return (
    <section id="roi-calculator" className="py-24 px-4 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Interactive Profit Recovery Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Stop Losing Profit To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              High Marketplace Commissions
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Calculate exactly how much money your restaurant bleeds every month on third-party aggregator commissions — and how much profit you recover with MenuSarthi Direct Delivery.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Slider 1: Monthly Delivery Orders */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold">Estimated Monthly Delivery/Takeaway Orders</span>
                <span className="text-amber-400 font-extrabold text-sm font-mono">{monthlyOrders} orders/mo</span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                className="w-full accent-orange-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>50 orders</span>
                <span>1,500 orders</span>
                <span>3,000 orders</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold">Average Order Value (AOV)</span>
                <span className="text-amber-400 font-extrabold text-sm font-mono">₹{avgTicket}</span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="20"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full accent-orange-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>₹100</span>
                <span>₹750</span>
                <span>₹1,500</span>
              </div>
            </div>

            {/* Slider 3: Aggregator Commission % */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold">Third-Party Aggregator Commission Rate</span>
                <span className="text-rose-400 font-extrabold text-sm font-mono">{aggregatorCommissionPct}%</span>
              </div>
              <input
                type="range"
                min="18"
                max="35"
                step="1"
                value={aggregatorCommissionPct}
                onChange={(e) => setAggregatorCommissionPct(Number(e.target.value))}
                className="w-full accent-rose-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>18% (Low)</span>
                <span>26% (Average)</span>
                <span>35% (High)</span>
              </div>
            </div>

            {/* Summary Breakdown Pills */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Monthly Delivery Revenue:</span>
                <span className="text-white font-mono font-bold">₹{totalMonthlySales.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-rose-400 font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Monthly Aggregator Cut ({aggregatorCommissionPct}%):
                </span>
                <span className="font-mono">₹{monthlyCommissionBleed.toLocaleString('en-IN')} / mo</span>
              </div>
            </div>

          </div>

          {/* Savings Highlight Box */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-emerald-500/40 rounded-3xl p-8 space-y-6 text-center relative shadow-2xl">
            
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 font-extrabold text-[10px] uppercase font-mono px-3 py-1 rounded-full border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              100% Direct Profit Recovery
            </span>

            <div className="space-y-1">
              <span className="text-slate-400 text-xs font-mono uppercase block">Estimated Annual Commission Bleed Saved</span>
              <span className="text-4xl sm:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                ₹{Math.round(netAnnualSavings).toLocaleString('en-IN')}
              </span>
              <span className="text-slate-400 text-xs block pt-1">
                net annual profit added directly to your restaurant's bank account
              </span>
            </div>

            <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-2xl text-xs text-emerald-200 text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>With MenuSarthi Growth Plan (₹599/mo):</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                You pay a flat subscription fee with <strong>0% commission</strong> on direct orders. Even if you shift just 30% of your loyal repeat customers to your own MenuSarthi delivery link, you save tens of thousands every year.
              </p>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full py-3.5 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-orange-950/50 flex items-center justify-center gap-2"
            >
              <span>Claim Your Direct Delivery Setup</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
