import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FAQSection({ onBookDemo }: { onBookDemo: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is MenuSarthi positioned as a Growth Platform instead of a standard POS software?",
      a: "Traditional POS software focuses purely on printing KOT bills inside the kitchen. MenuSarthi does that AND helps you build your own digital brand, take direct 0% commission delivery orders, collect verified customer phone lists, and launch white-labeled ordering links without requiring expensive thermal printer hardware or IT technicians."
    },
    {
      q: "Do my customers need to download any mobile app to order?",
      a: "NO! Your customers do not download any app. When they scan your QR code at the table or click your delivery link on Instagram/WhatsApp, your branded menu opens instantly in 1 second on any iOS or Android browser."
    },
    {
      q: "How does payment work? Does MenuSarthi hold my money?",
      a: "No! MenuSarthi takes 0% commission cut and NEVER holds your sales money. When customers pay via UPI, Google Pay, PhonePe, or cards, the money goes 100% directly into your restaurant's bank account or UPI ID instantly."
    },
    {
      q: "Can I use my own custom domain like order.myrestaurant.com?",
      a: "Yes! On our Premium plan, you can map your custom domain or subdomain, apply your exact brand hex colors, upload your logo, and remove all third-party watermarks."
    },
    {
      q: "What if I have multiple branches or plan to open a franchise?",
      a: "MenuSarthi includes a Multi-Outlet Central Admin Hub. You can view sales across all branches, update global or location-specific prices, and manage staff access from a single login."
    },
    {
      q: "Can I export my customer database if I ever decide to migrate?",
      a: "Yes! You own 100% of your data. You can download your customer phone numbers, names, addresses, and order histories in Excel/CSV format anytime with one click."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-slate-900/80 relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Clear Answers. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Zero Marketing Fluff.</span>
          </h2>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                >
                  <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900 bg-slate-950/80">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onBookDemo}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Have More Questions? Book Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
