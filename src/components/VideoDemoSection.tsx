import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, Volume2 } from 'lucide-react';

interface VideoDemoSectionProps {
  onBookDemo?: () => void;
}

export default function VideoDemoSection({ onBookDemo }: VideoDemoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "48ihNrXTGVE";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  const highlights = [
    { title: "QR Menu & Table Ordering", desc: "Customers scan & order without app download" },
    { title: "0% Commission Direct Delivery", desc: "Keep 100% profits without Zomato/Swiggy cut" },
    { title: "Instant UPI Bank Payment", desc: "Money directly goes into owner's PhonePe/GPay" },
    { title: "Live Kitchen KDS Display", desc: "Real-time ticket updates for chefs & staff" },
  ];

  return (
    <section id="video-demo" className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#FF5C35]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Play className="w-3.5 h-3.5 fill-red-400" />
            <span>See MenuSarthi In Action (2-Min Demo)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Dekhiye MenuSarthi Kaise Aapke Restaurant Ko <span className="bg-gradient-to-r from-amber-400 to-[#FF5C35] bg-clip-text text-transparent">Automation Studio</span> Banata Hai
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            QR Ordering, Live KDS Kitchen Display, Dynamic UPI Payments aur Direct Delivery ko live working model me dekhiye.
          </p>
        </div>

        {/* Video Player Frame Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl shadow-orange-950/20 group">
            
            {/* Top Bar Studio Aesthetic Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 rounded-t-2xl border-b border-slate-800/80 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">MenuSarthi Product Walkthrough HD</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                <Sparkles className="w-3 h-3" />
                <span>Official Walkthrough</span>
              </div>
            </div>

            {/* Video Container (Aspect Ratio 16:9) */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-inner">
              {!isPlaying ? (
                <div className="relative w-full h-full flex items-center justify-center bg-slate-900 group/poster cursor-pointer" onClick={() => setIsPlaying(true)}>
                  {/* High Quality Thumbnail Cover */}
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt="MenuSarthi Live Demo Video" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/poster:scale-105 group-hover/poster:opacity-90 transition-all duration-500"
                    onError={(e) => {
                      // Fallback thumbnail if maxresdefault isn't available
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play MenuSarthi Demo Video"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#FF5C35] to-amber-500 text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover/poster:scale-110 transition-transform duration-300 ring-8 ring-amber-500/20"
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-white ml-1.5" />
                    </button>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-mono font-bold border border-slate-700">
                        Watch Official Demo (HD)
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={embedUrl}
                  title="MenuSarthi Product Demo Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div className="mt-3 px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Audio Language: Hindi / English mix (Full setup demo)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Setup Demo
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Highlight Grid Under Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white font-display">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5C35] to-amber-500 hover:from-[#E6431D] hover:to-amber-600 text-white font-bold text-sm uppercase font-mono tracking-wider shadow-xl shadow-orange-950/50 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Book Live 1-on-1 Demo For Your Restaurant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
