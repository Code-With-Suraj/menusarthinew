import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, Send, Phone, Building2, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DemoBooking } from '../types';

export default function DemoBookingModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<DemoBooking>({
    restaurantName: '',
    ownerName: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM - 12:00 PM',
    restaurantType: 'Cafe / Coffee Shop',
    city: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const targetNumber = '918851666208';

    const message = `🔥 *NEW 5-MIN LIVE DEMO REQUEST* 🔥\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 *OWNER DETAILS*\n` +
      `• *Owner Name:* ${formData.ownerName}\n` +
      `• *Phone / WhatsApp:* ${formData.phone}\n` +
      `• *City / Location:* ${formData.city || 'Not specified'}\n\n` +
      `🏪 *RESTAURANT DETAILS*\n` +
      `• *Restaurant Name:* ${formData.restaurantName}\n` +
      `• *Outlet Type:* ${formData.restaurantType || 'Restaurant'}\n\n` +
      `📅 *PREFERRED DEMO SCHEDULE*\n` +
      `• *Date:* ${formData.date}\n` +
      `• *Time Slot:* ${formData.timeSlot}\n\n` +
      `💡 *Message:* "Hi MenuSarthi Team, I want to see a live 5-minute screen-share demo of MenuSarthi QR ordering & KDS!"\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🚀 *Sent via MenuSarthi Online Portal*`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMsg}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5C35] flex items-center justify-center font-display font-black text-white text-base">
              MS
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Schedule 5-Min Live Demo</h3>
              <p className="text-xs text-amber-400 font-mono">See real restaurant dashboards live on WhatsApp screen-share</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">Demo Booking Confirmed!</h4>
              <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
                Opening WhatsApp to connect you directly with your MenuSarthi Onboarding Specialist...
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-left text-xs space-y-2 text-slate-300 font-mono">
              <div><strong className="text-slate-400">Restaurant:</strong> {formData.restaurantName}</div>
              <div><strong className="text-slate-400">Date & Slot:</strong> {formData.date} ({formData.timeSlot})</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/918851666208?text=${encodeURIComponent(
                  `🔥 *NEW 5-MIN LIVE DEMO REQUEST* 🔥\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n👤 *OWNER DETAILS*\n• *Owner Name:* ${formData.ownerName}\n• *Phone / WhatsApp:* ${formData.phone}\n• *City / Location:* ${formData.city || 'Not specified'}\n\n🏪 *RESTAURANT DETAILS*\n• *Restaurant Name:* ${formData.restaurantName}\n• *Outlet Type:* ${formData.restaurantType || 'Restaurant'}\n\n📅 *PREFERRED DEMO SCHEDULE*\n• *Date:* ${formData.date}\n• *Time Slot:* ${formData.timeSlot}\n\n💡 *Message:* "Hi MenuSarthi Team, I want to see a live 5-minute screen-share demo of MenuSarthi QR ordering & KDS!"\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 *Sent via MenuSarthi Online Portal*`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open WhatsApp Chat (8851666208)</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                  Restaurant / Cafe Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    placeholder="e.g. Royal Chai Cafe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                  WhatsApp Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                  City / Location
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Jaipur / Delhi / Mumbai"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                Restaurant Type
              </label>
              <select
                value={formData.restaurantType}
                onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
              >
                <option value="Cafe / Coffee Shop">Cafe / Coffee Shop</option>
                <option value="Cloud Kitchen">Cloud Kitchen</option>
                <option value="Dhaba / Roadside Eatery">Dhaba / Roadside Eatery</option>
                <option value="Pizza / Burger QSR">Pizza / Burger QSR</option>
                <option value="Tea / Juice Bar">Tea / Juice Bar</option>
                <option value="Fine Dining Restaurant">Fine Dining Restaurant</option>
                <option value="Multi-Outlet Franchise">Multi-Outlet Franchise</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 font-mono uppercase block">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                  <option value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-orange-950/50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Open WhatsApp Demo</span>
              </button>
            </div>

            <div className="text-center text-[10px] text-slate-500 font-mono">
              🔒 Zero commitment. Free screen-share walk-through with our product engineer.
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
