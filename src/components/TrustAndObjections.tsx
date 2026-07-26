import React, { useState } from 'react';
import { ShieldCheck, Lock, Headphones, Database, Globe, HelpCircle, ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';
import { TrustQuestion } from '../types';

export default function TrustAndObjections({ onBookDemo }: { onBookDemo: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions: TrustQuestion[] = [
    {
      question: "Why should I trust MenuSarthi over traditional software?",
      answer: "Unlike traditional POS vendors who lock you into expensive proprietary hardware or third-party aggregators who take 30% of your revenue, MenuSarthi is built as an open, white-label Restaurant Growth Platform. You get 100% direct bank payouts, full customer phone list access, and your own branded website domain from Day 1.",
      category: 'security',
      icon: 'ShieldCheck'
    },
    {
      question: "Will my branding, domain, and customer database remain 100% mine?",
      answer: "YES! 100% guaranteed. Your customer phone numbers, addresses, order history, and brand assets belong exclusively to you. If you ever upgrade or migrate, you can export your entire database in Excel/CSV format anytime with one click.",
      category: 'branding',
      icon: 'Globe'
    },
    {
      question: "Is my customer and transaction data secure?",
      answer: "MenuSarthi is engineered on Google Cloud Firebase & Enterprise SSL infrastructure. Your database is isolated, end-to-end encrypted, and compliant with enterprise data protection standards. We never sell or share your restaurant's customer data with third parties or competitors.",
      category: 'security',
      icon: 'Lock'
    },
    {
      question: "Can MenuSarthi work for a single small outlet AND scale to 20+ branches later?",
      answer: "Absolutely. Our Starter (₹399/mo) and Growth (₹599/mo) plans are tailored for single-outlet cafes, dhabas, and cloud kitchens. When you expand to multiple outlets or launch a franchise, our Multi-Branch Admin panel allows you to control all locations from one central dashboard seamlessly.",
      category: 'growth',
      icon: 'Database'
    },
    {
      question: "What kind of onboarding and daily technical support will I receive?",
      answer: "You receive dedicated 24/7 WhatsApp & Phone Support from a dedicated account engineer. We also offer a Hands-Free Setup service where our team uploads your entire menu, categorizes items with high-res food photos, and ships custom QR table standees directly to your doorstep.",
      category: 'support',
      icon: 'Headphones'
    },
    {
      question: "Can I use my own custom domain (e.g., order.myrestaurant.com) and colors?",
      answer: "Yes! On our Premium plan, you can map your custom domain or subdomain, apply your exact brand hex colors, upload your custom logo, and remove all third-party branding.",
      category: 'branding',
      icon: 'Globe'
    },
    {
      question: "Can I request custom feature development or API integrations as my business grows?",
      answer: "Yes! Because MenuSarthi is built on modular microservices, our engineering team can build custom integrations for your brand — including POS billing sync, WhatsApp AI bots, custom loyalty programs, KDS kitchen screens, and ERP accounting sync.",
      category: 'growth',
      icon: 'Database'
    },
    {
      question: "How quickly can my restaurant go live with MenuSarthi?",
      answer: "In less than 24 hours! Simply upload your menu spreadsheet or send us your menu card photo on WhatsApp. Our onboarding team configures your digital menu, generates your table QR codes, and sets up your UPI direct payments on the same day.",
      category: 'migration',
      icon: 'CheckCircle'
    }
  ];

  const filteredQuestions = selectedCategory === 'all'
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  return (
    <section id="trust-and-security" className="py-24 px-4 bg-slate-900/90 relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Honest Answers & Absolute Security Guarantees</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Every Objection Answered. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">Zero Fine Print.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We know restaurant owners are tired of hidden costs, complex contracts, and software vendors who disappear after taking payment. Here is our transparent promise to you.
          </p>
        </div>

        {/* Security & Ownership Pillar Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mx-auto">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">100% Brand Ownership</h4>
            <p className="text-slate-400 text-xs">Your domain, your logo, your colors. Zero forced third-party watermarks.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">100% Owned Customer Data</h4>
            <p className="text-slate-400 text-xs">Export customer phones & addresses anytime. We never sell or share your data.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Google Cloud Encryption</h4>
            <p className="text-slate-400 text-xs">Enterprise SSL security and real-time database backups on Firebase.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
              <Headphones className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">24/7 Dedicated Support</h4>
            <p className="text-slate-400 text-xs">Direct WhatsApp & phone line to human onboarding engineers in India.</p>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'branding', label: 'Branding & Domain' },
            { id: 'security', label: 'Data Security & Ownership' },
            { id: 'growth', label: 'Scale & Custom Dev' },
            { id: 'support', label: 'Support & Onboarding' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === tab.id ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredQuestions.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                >
                  <span className="font-bold text-white text-sm sm:text-base pr-2">
                    {q.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900 bg-slate-950/80 animate-fadeIn">
                    <p>{q.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white">Still Have Questions About Your Specific Restaurant Setup?</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Our technical team will walk you through a live screen-share demo, show you real restaurant dashboards, and answer all your operational questions in 10 minutes.
          </p>
          <button
            onClick={onBookDemo}
            className="px-8 py-3.5 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-orange-950/50"
          >
            <span>Talk To Product Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
