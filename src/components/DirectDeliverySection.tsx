import React, { useState } from 'react';
import { 
  Truck, MapPin, Percent, Navigation, CheckCircle2, XCircle, 
  Smartphone, Zap, ArrowRight, DollarSign, ShieldCheck, Clock, 
  MessageSquare, Calculator, Check, AlertCircle, ExternalLink, Sparkles
} from 'lucide-react';

interface DirectDeliverySectionProps {
  onBookDemo: () => void;
}

export default function DirectDeliverySection({ onBookDemo }: DirectDeliverySectionProps) {
  const [calcOrderVal, setCalcOrderVal] = useState<number>(600);
  const [calcOrdersPerDay, setCalcOrdersPerDay] = useState<number>(15);

  // Swiggy/Zomato ~28% average commission
  const monthlyCommissionToAggregators = Math.round(calcOrderVal * calcOrdersPerDay * 30 * 0.28);
  const yearlySavingsWithMenuSarthi = monthlyCommissionToAggregators * 12;

  return (
    <section id="direct-delivery" className="py-20 px-4 bg-slate-950 text-white scroll-mt-20 relative overflow-hidden border-t border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-brand-500/20 border border-orange-500/30 px-4 py-1.5 rounded-full text-orange-400 text-xs font-bold font-mono tracking-wider uppercase">
            <Truck className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>Direct Delivery System</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Stop Paying 30% Commission to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-400 to-amber-300">Swiggy & Zomato!</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Launch your restaurant’s own direct delivery service with MenuSarthi. Get exact GPS location pinning, live order tracking, and keep 100% of your hard-earned profit directly in your bank account!
          </p>

          {/* Plan Availability Badge */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <span className="bg-emerald-500/20 text-emerald-400 font-extrabold px-2 py-0.5 rounded text-[10px] uppercase font-mono">Included in Growth & Premium</span>
              <span className="text-slate-400 font-medium">| Not available in ₹499 Starter Plan</span>
            </span>
          </div>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="delivery-start-free-btn"
              onClick={onBookDemo}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-orange-950 uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start Delivery Service Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#live-demo-section"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm rounded-2xl transition-all text-center flex items-center justify-center gap-2"
            >
              <span>See Live Demo</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 2. KEY FEATURES GRID */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-brand-400 text-xs font-mono uppercase tracking-widest font-bold">Built For Direct Deliveries</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">Key Delivery Features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 p-6 rounded-3xl space-y-4 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Percent className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">0% Commission Ordering</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Stop losing 25% to 30% on every delivery order. Every rupee paid by your customer goes 100% directly into your bank account.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 p-6 rounded-3xl space-y-4 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">Precise GPS Location Pinning</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Customers mark their exact delivery location on Google Maps. Your delivery rider reaches the exact doorstep without annoying phone calls.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 p-6 rounded-3xl space-y-4 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">Dynamic Delivery Fee Control</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Set distance-based delivery charges (e.g., ₹20 base fee + ₹10/km) or offer Free Delivery on orders over ₹500 automatically.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 p-6 rounded-3xl space-y-4 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">Real-Time Order Tracking</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Customers get a live status screen: Received ➔ Preparing ➔ Out for Delivery ➔ Delivered with live status updates.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 p-6 rounded-3xl space-y-4 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-white text-lg">Instant UPI & Online Payments</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Direct UPI / Razorpay payment integration with instant digital order confirmation sent straight to your customer.
              </p>
            </div>

            {/* Feature 6 - Interactive Commission Calculator */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-brand-500/30 p-6 rounded-3xl space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <Calculator className="w-4 h-4" />
                  <span>Savings Calculator</span>
                </div>
                <span className="bg-brand-500/20 text-brand-400 text-[10px] font-bold px-2 py-0.5 rounded-full">Interactive</span>
              </div>
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs text-slate-300 font-medium">
                  <span>Avg Order Value:</span>
                  <span className="font-bold text-white">₹{calcOrderVal}</span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="1500" 
                  step="50" 
                  value={calcOrderVal} 
                  onChange={(e) => setCalcOrderVal(Number(e.target.value))}
                  className="w-full accent-brand-500 cursor-pointer"
                />

                <div className="flex justify-between text-xs text-slate-300 font-medium pt-1">
                  <span>Delivery Orders / Day:</span>
                  <span className="font-bold text-white">{calcOrdersPerDay} orders</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5" 
                  value={calcOrdersPerDay} 
                  onChange={(e) => setCalcOrdersPerDay(Number(e.target.value))}
                  className="w-full accent-brand-500 cursor-pointer"
                />
              </div>

              <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 text-center space-y-1">
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Your Yearly Savings vs Swiggy/Zomato</span>
                <p className="text-2xl font-black text-emerald-400 font-mono">₹{yearlySavingsWithMenuSarthi.toLocaleString('en-IN')} / year</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3. SWIGGY / ZOMATO vs MENUSARTHI COMPARISON TABLE */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest font-bold">Smart Comparison</span>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
              Swiggy / Zomato vs MenuSarthi Direct Delivery
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              See why hundreds of Indian restaurants are shifting to direct delivery.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-display font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6 text-rose-400 bg-rose-950/20">Swiggy / Zomato</th>
                    <th className="py-4 px-6 text-emerald-400 bg-emerald-950/20">MenuSarthi Direct Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-medium">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <span>Commission Charge</span>
                    </td>
                    <td className="py-4 px-6 text-rose-300 bg-rose-950/10 font-bold">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>25% – 30% per order</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-300 bg-emerald-950/10 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>0% Commission (100% Yours)</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      Customer Data Ownership
                    </td>
                    <td className="py-4 px-6 text-slate-400 bg-rose-950/10">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Kept by aggregator platform</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-300 bg-emerald-950/10 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>100% Your Own Customer Data</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      Payment Settlement Time
                    </td>
                    <td className="py-4 px-6 text-slate-400 bg-rose-950/10">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>7 to 14 days delay</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-300 bg-emerald-950/10 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Instant / Same Day Direct to Bank</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      Customer Loyalty
                    </td>
                    <td className="py-4 px-6 text-slate-400 bg-rose-950/10">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Customer orders from any competitor</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-300 bg-emerald-950/10 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Builds Your Own Restaurant Brand</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      Plan Requirement
                    </td>
                    <td className="py-4 px-6 text-slate-400 bg-rose-950/10">
                      <span>High ongoing commission model</span>
                    </td>
                    <td className="py-4 px-6 text-emerald-300 bg-emerald-950/10 font-bold">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Growth Plan (₹999) & Premium Plan (₹1,999)</span>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4. HOW IT WORKS (4 SIMPLE STEPS) */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-orange-400 text-xs font-mono uppercase tracking-widest font-bold">Simple Process</span>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
              How Direct Delivery Works
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Start accepting direct delivery orders in 4 easy steps without complex tech setup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-extrabold font-mono flex items-center justify-center text-sm shadow-md">
                01
              </div>
              <h4 className="font-display font-bold text-white text-base">Customer Scans QR / Opens Link</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Customer views your mobile-optimized menu through your QR code or custom domain website link.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white font-extrabold font-mono flex items-center justify-center text-sm shadow-md">
                02
              </div>
              <h4 className="font-display font-bold text-white text-base">Selects Delivery & Pins Location</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                On the order screen, customer chooses "Delivery" and marks live location pin on Google Maps.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white font-extrabold font-mono flex items-center justify-center text-sm shadow-md">
                03
              </div>
              <h4 className="font-display font-bold text-white text-base">Direct Payment & Instant Order</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Customer pays via direct UPI, Card, or Cash on Delivery with automatic instant order confirmation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white font-extrabold font-mono flex items-center justify-center text-sm shadow-md">
                04
              </div>
              <h4 className="font-display font-bold text-white text-base">Live Kitchen & Order Tracking</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Kitchen dashboard receives live ticket, and customer tracks order status live from preparing to delivered.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-brand-600 rounded-3xl p-8 text-center text-white space-y-4 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-display font-black">
              Ready to Save Thousands in Aggregator Commissions?
            </h3>
            <p className="text-orange-100 text-xs sm:text-sm">
              Get MenuSarthi Direct Delivery enabled with our Growth (₹999) or Premium (₹1,999) plan.
            </p>
            <div className="pt-2">
              <button
                id="delivery-bottom-cta-btn"
                onClick={onBookDemo}
                className="px-8 py-3.5 bg-white text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Book Your Free Demo Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
