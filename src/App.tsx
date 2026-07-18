import React, { useState, useEffect } from 'react';
import { 
  Utensils, ChefHat, Smartphone, Monitor, QrCode, Sparkles, AlertCircle, 
  CheckCircle2, Check, X, TrendingUp, Menu, ArrowRight, Coffee, Pizza, 
  Flame, FileSpreadsheet, Star, CheckSquare, Layers, HelpCircle, 
  Send, Calendar, ChevronRight, Phone, Clock, Landmark, AlertTriangle, 
  Sparkle, ShieldCheck, ChevronDown, Sparkles as SparklesIcon 
} from 'lucide-react';
import InteractivePlayground from './components/InteractivePlayground';
import ConversationalSarthi from './components/ConversationalSarthi';
import LiveAppGallery from './components/LiveAppGallery';
import { DemoBooking } from './types';

// ============================================================================
// BRAND CONFIGURATION
// ============================================================================
// To add your professional logo, simply paste your hosted image URL here!
// E.g., 'https://yourdomain.com/logo.png'. If left empty, it renders an elegant,
// premium custom-designed vector SVG logo representing MenuSarthi.
const PROFESSIONAL_LOGO_URL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWGUCurqhLZ-7V2-wcMFhgoNymvoazjkrBpPa6TJ3lR445ivycZcueMpdGY8S7iQArzZ1KuotJHBPUaOO9YRnayLvNXkqJa1LKtGS1xVxFYqyk9wPiwwgzj2V5-fGk3TX_BmgPO5Qrlnt9w-vdrPrszIMntaPA0uEKbQn3Y9zdwE2sHyQkvqhjFbdXqyxP/s1600-rw/Logo.png';
// ============================================================================

// ============================================================================
// LIVE DEMO LINKS (PROFESSIONAL & SMARTLY DECLARED WITH PASSWORD)
// ============================================================================
const CUSTOMER_DEMO_URL = 'https://demomenusarthi.surajdx.com';
const ADMIN_DEMO_URL = 'https://demomenusarthi.surajdx.com/?page=admin';
const ADMIN_DEMO_PASSWORD = 'admin123';
// ============================================================================

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Local states for custom lead collection
  const [restaurantName, setRestaurantName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('3:00 PM - 4:00 PM');
  const [activeBookings, setActiveBookings] = useState<DemoBooking[]>([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Dynamic state for an interactive ROI Calculator section
  const [roiPrintingCost, setRoiPrintingCost] = useState<number>(2000);
  const [roiTables, setRoiTables] = useState<number>(15);
  const [roiStaff, setRoiStaff] = useState<number>(4);

  // Load bookings
  useEffect(() => {
    const saved = localStorage.getItem('menusarthi_bookings');
    if (saved) {
      try {
        setActiveBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, [bookingSuccess]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName || !ownerName || !phone || !bookingDate) return;

    const newBooking: DemoBooking = {
      restaurantName,
      ownerName,
      phone,
      date: bookingDate,
      timeSlot
    };

    const updated = [...activeBookings, newBooking];
    setActiveBookings(updated);
    localStorage.setItem('menusarthi_bookings', JSON.stringify(updated));

    setBookingSuccess(true);

    const message = `*New Free Live Demo Booking* 🚀\n` +
      `-----------------------------------\n` +
      `*Restaurant/Cafe:* ${restaurantName}\n` +
      `*Owner Name:* ${ownerName}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*Date:* ${bookingDate}\n` +
      `*Time Slot:* ${timeSlot}\n` +
      `-----------------------------------\n` +
      `Please confirm my demo schedule. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918851666208?text=${encodedText}`;

    // Open WhatsApp in a new tab immediately
    window.open(whatsappUrl, '_blank');
    
    // Clear inputs after 8 seconds to allow user to manually click the WhatsApp button if popup was blocked
    setTimeout(() => {
      setIsBookingModalOpen(false);
      setBookingSuccess(false);
      setRestaurantName('');
      setOwnerName('');
      setPhone('');
      setBookingDate('');
    }, 8000);
  };

  // ROI calculations
  const calculateAnnualSavings = () => {
    const printingSavings = roiPrintingCost * 12;
    const laborSavings = roiStaff >= 4 ? 48000 : 24000;
    const revenueBoost = Math.round(roiTables * 400 * 0.15 * 30 * 12 * 0.08); // 8% conservative boost
    return printingSavings + laborSavings + revenueBoost;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-4 text-center text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="bg-brand-500 text-white font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wide font-display">LAUNCH OFFER</span>
          <p className="font-medium font-display tracking-wide">
            Get our Limited-Time <strong>Early Bird Yearly Offer</strong> for ₹7,999/year (Only <strong className="text-white font-black">₹22/day</strong>!) & Hands-Free Menu Setup!
          </p>
        </div>
      </div>

      {/* 2. MAIN HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-11 h-11 bg-gradient-to-tr from-[#FF5C35] to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-all overflow-hidden border border-orange-400/20">
              {PROFESSIONAL_LOGO_URL ? (
                <img 
                  src={PROFESSIONAL_LOGO_URL} 
                  alt="MenuSarthi" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <svg className="w-6.5 h-6.5 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 70H80C80 70 75 45 50 45C25 45 20 70 20 70Z" fill="currentColor" />
                  <path d="M15 75H85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M50 20V35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path d="M38 23V32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path d="M62 23V32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="50" cy="40" r="5" fill="currentColor" />
                </svg>
              )}
            </div>
            <div>
              <span className="font-display font-black text-[#1A1A1A] text-2xl tracking-tight leading-none block">
                Menu<span className="text-[#FF5C35]">Sarthi</span>
              </span>
              <span className="text-[10px] text-brand-600 font-bold uppercase tracking-widest font-mono mt-0.5 block">
                Smart QR Dining
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-gray-600">
            <a href="#problem" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#live-demo-section" className="hover:text-[#FF5C35] transition-colors flex items-center gap-1">
              Live Demo <span className="bg-orange-100 text-[#FF5C35] text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse font-display">New</span>
            </a>
            <a href="#app-screenshots" className="hover:text-slate-900 transition-colors">Live App Tour</a>
            <a href="#playground" className="hover:text-slate-900 transition-colors">Sandbox Demo</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </nav>

          {/* Nav Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#live-demo-section" className="text-[#FF5C35] hover:text-[#E6431D] text-sm font-bold transition-colors flex items-center gap-1">
              ⚡ Try Live Demo
            </a>
            <button
              id="nav-book-demo-btn"
              onClick={() => setIsBookingModalOpen(true)}
              className="px-6 py-2.5 bg-[#FF5C35] hover:bg-[#E6431D] text-white rounded-full font-bold text-sm shadow-lg shadow-orange-200 uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

         {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-3 animate-slide-up">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-semibold text-sm">Features</a>
            <a href="#live-demo-section" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#FF5C35] font-bold text-sm flex items-center gap-1.5">
              Live Demo ⚡ <span className="bg-orange-100 text-[#FF5C35] text-[9px] px-1.5 py-0.5 rounded-full">Try Now</span>
            </a>
            <a href="#app-screenshots" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-semibold text-sm">Live App Tour</a>
            <a href="#playground" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-semibold text-sm">Sandbox Demo</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-semibold text-sm">Pricing</a>
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a 
                href={CUSTOMER_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-orange-50 text-[#FF5C35] text-xs font-bold text-center py-2.5 rounded-xl border border-orange-100 block"
              >
                Customer App 📱
              </a>
              <a 
                href={ADMIN_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-slate-900 text-white text-xs font-bold text-center py-2.5 rounded-xl block relative group"
              >
                Admin Panel 🖥️
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-yellow-400 text-[8px] text-slate-950 px-1 py-0.2 rounded font-black tracking-wide leading-none whitespace-nowrap shadow-xs uppercase">
                  PW: admin123
                </span>
              </a>
            </div>
            <button
              id="mobile-book-demo-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full bg-[#FF5C35] text-white font-bold font-display py-3 rounded-xl text-center text-xs uppercase tracking-wider block"
            >
              Book Free Demo
            </button>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-white">
        
        {/* Background Decorative Rings */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF5C35] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-display">
              <Sparkle className="w-3.5 h-3.5 text-[#FF5C35]" />
              🚀 The Future of Dining
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#1A1A1A] tracking-tight leading-[1.1]">
              Stop Printing Menus <span className="text-[#FF5C35]">Every Month.</span> <br className="hidden sm:inline" />
              Let Customers Scan, Order & Pay — Right From Their Table.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Let customers scan, order, and pay right from their table. A modern QR system for Cafes, Restaurants, Local Dhabas, and Food Trucks.
            </p>

            {/* Quick Flow Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 py-2">
              <span className="bg-slate-900 text-white font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1">
                No Waiting.
              </span>
              <span className="bg-slate-900 text-white font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1">
                No Paper Menus.
              </span>
              <span className="bg-slate-900 text-white font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1">
                No Shouting for Waiters.
              </span>
            </div>

            {/* Step badges */}
            <div className="bg-[#FFF9F5] border border-orange-100 rounded-2xl p-4 inline-block text-left w-full sm:w-auto">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2 font-display">Super Simple Customer Path:</p>
              <div className="flex flex-col sm:flex-row gap-4 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF5C35] text-white flex items-center justify-center font-display text-[10px]">1</div>
                  <span>Scan QR Table Code</span>
                </div>
                <div className="hidden sm:block text-slate-300">➔</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF5C35] text-white flex items-center justify-center font-display text-[10px]">2</div>
                  <span>Order Digital Menu</span>
                </div>
                <div className="hidden sm:block text-slate-300">➔</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF5C35] text-white flex items-center justify-center font-display text-[10px]">3</div>
                  <span>Enjoy & UPI Pay</span>
                </div>
              </div>
            </div>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-left text-sm font-semibold text-slate-800 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E6F3EC] flex items-center justify-center text-[#2D6A4F] text-xs">✔</div>
                <span className="font-semibold text-sm">Digital Menu & UPI Pay</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E6F3EC] flex items-center justify-center text-[#2D6A4F] text-xs">✔</div>
                <span className="font-semibold text-sm">Live Kitchen Status</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E6F3EC] flex items-center justify-center text-[#2D6A4F] text-xs">✔</div>
                <span className="font-semibold text-sm">QR Table Ordering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E6F3EC] flex items-center justify-center text-[#2D6A4F] text-xs">✔</div>
                <span className="font-semibold text-sm">Admin Dashboard</span>
              </div>
            </div>

            {/* Primary Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
              <button
                id="hero-book-demo-btn"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#FF5C35] hover:bg-[#E6431D] text-white rounded-2xl font-bold text-sm shadow-lg shadow-orange-200 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-102 active:scale-95"
              >
                Book Free Setup
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#live-demo-section"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold font-display px-8 py-4 rounded-2xl shadow-sm transition-all text-center block text-sm flex items-center justify-center gap-2"
              >
                ⚡ Try Live Demo
              </a>
            </div>

            {/* Quick Demo links callout */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 justify-center lg:justify-start border-t border-slate-100">
              <span className="text-slate-500 text-xs font-semibold">Try active demo instantly:</span>
              <div className="flex flex-wrap gap-2 justify-center">
                <a 
                  href={CUSTOMER_DEMO_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-50 hover:bg-orange-100 text-[#FF5C35] text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 border border-orange-100 shrink-0"
                >
                  Customer App 📱
                </a>
                <a 
                  href={ADMIN_DEMO_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 border border-slate-900 shrink-0 relative group"
                >
                  Admin Portal 🖥️
                  <span className="bg-yellow-400 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded ml-1 uppercase leading-none">
                    PW: admin123
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Mockup Graphic Container */}
            <div className="relative w-full max-w-[320px] aspect-[4/5] bg-white rounded-[3rem] shadow-2xl border-8 border-[#1A1A1A] p-4 flex flex-col justify-between overflow-hidden transform rotate-3">
              
              {/* Top Banner */}
              <div className="flex items-center justify-between border-b border-orange-100 pb-3 bg-orange-50/50 p-2 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5C35]" />
                  <span className="text-[10px] font-bold text-[#1A1A1A] font-display">TABLE STAND QR</span>
                </div>
                <span className="text-[9px] font-mono bg-[#1A1A1A] text-white px-2 py-0.5 rounded font-bold">TABLE 12</span>
              </div>

              {/* Centered Large QR Graphic */}
              <div className="my-auto text-center space-y-4">
                <div className="w-40 h-40 bg-white rounded-3xl mx-auto border-4 border-[#1A1A1A] p-3 flex flex-col items-center justify-center shadow-lg relative">
                  
                  {/* Decorative corner borders */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-[#FF5C35]" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-[#FF5C35]" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-4 border-l-4 border-[#FF5C35]" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-[#FF5C35]" />

                  <QrCode className="w-28 h-28 text-[#1A1A1A] animate-pulse-slow" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[#1A1A1A] text-sm">Scan to Order & Pay</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Direct Bank settlement • No app required</p>
                </div>
              </div>

              {/* Bottom UPI icons */}
              <div className="bg-[#1A1A1A] text-white p-3.5 rounded-2xl flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">Accepted UPI:</span>
                <div className="flex gap-2 text-[10px] font-bold font-display text-orange-200">
                  <span>GPay</span>
                  <span className="text-slate-600">•</span>
                  <span>PhonePe</span>
                  <span className="text-slate-600">•</span>
                  <span>Paytm</span>
                </div>
              </div>

            </div>

            {/* floating absolute cards to add realism */}
            <div className="absolute top-1/4 -left-8 bg-white border border-orange-100 shadow-xl p-3.5 rounded-2xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-8 h-8 rounded-full bg-[#E6F3EC] text-[#2D6A4F] flex items-center justify-center font-bold text-xs">
                ✔
              </div>
              <div>
                <p className="text-[11px] text-slate-400 leading-none">Order status</p>
                <p className="font-display font-extrabold text-xs text-[#1A1A1A] mt-1">Food is Preparing...</p>
              </div>
            </div>

            <div className="absolute bottom-6 -right-6 bg-white border border-orange-100 shadow-xl p-3.5 rounded-2xl flex items-center gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#FF5C35] text-xs font-bold">
                ₹
              </div>
              <div>
                <p className="text-[11px] text-slate-400 leading-none">UPI Settlement</p>
                <p className="font-display font-extrabold text-xs text-[#1A1A1A] mt-1">₹1,240 Paid Directly</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TRUST SECTION */}
      <section className="bg-slate-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-xs font-mono">
            Everything Your Restaurant Needs In One Smart System
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight max-w-2xl mx-auto">
            Designed for modern restaurants that want faster service, happier customers and higher profits.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto text-left">
            {[
              { label: "Table Turnovers", val: "22% Faster", desc: "No waiting for waiters to bring menus or bills" },
              { label: "Average Order Ticket", val: "18% Higher", desc: "Automatic add-on recommendations at checkouts" },
              { label: "Menu Printing Expense", val: "₹0 / Zero Cost", desc: "Instantly update items & prices from administrative panel" },
              { label: "Payment Transaction Fees", val: "0% Commission", desc: "UPI transfers go directly to your own UPI ID" }
            ].map(pill => (
              <div key={pill.label} className="bg-slate-800/50 border border-slate-800 p-4 rounded-2xl space-y-1">
                <p className="text-xs text-slate-400 leading-none">{pill.label}</p>
                <p className="font-display font-black text-brand-500 text-lg sm:text-xl mt-1">{pill.val}</p>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">{pill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: LIVE DEMO SECTION */}
      <section id="live-demo-section" className="py-20 px-4 bg-gradient-to-b from-orange-50/70 via-white to-white scroll-mt-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 bg-orange-100 text-[#FF5C35] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-display">
              ⚡ Try Real Live System
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Test the Fully Functional Demo Right Now
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              No forms, no waiting, no app store downloads. Experience both sides of our lightning-fast QR ordering loop directly in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Customer-Facing Demo */}
            <div className="bg-white border border-slate-200 hover:border-[#FF5C35]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-orange-100/10 transition-all hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all pointer-events-none" />
              <div className="space-y-6">
                <div className="w-12 h-12 bg-orange-100 text-[#FF5C35] rounded-2xl flex items-center justify-center font-bold text-2xl shadow-sm border border-orange-200/20">
                  📱
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-extrabold text-slate-900 text-xl">Customer Ordering App</h3>
                    <span className="bg-green-100 text-green-700 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full animate-pulse">Live Sandbox</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    This is what your diners see when they scan your tabletop QR. Browse a beautiful Indian restaurant menu with food tags, customize portion sizes, add special instructions, test-out the cart, and simulate safe UPI payments!
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-4 h-4 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span>Browse food items categorized neatly (Starters, Breads, Main Course)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-4 h-4 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span>Add customized items to cart & see real-time tax/price calculations</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-4 h-4 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span>Simulate UPI checkout & receive real-time order tracking status updates</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <a
                  href={CUSTOMER_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF5C35] hover:bg-[#E6431D] text-white font-black font-display py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  Launch Customer Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[10px] text-slate-400 font-mono leading-none">
                  💡 Tip: Open this link on your phone for the best visual experience!
                </p>
              </div>
            </div>

            {/* Card 2: Restaurant Owner/Admin Demo */}
            <div className="bg-slate-950 text-white border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/10 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-6">
                <div className="w-12 h-12 bg-slate-900 text-[#FF5C35] rounded-2xl flex items-center justify-center font-bold text-2xl shadow-sm border border-slate-800">
                  🖥️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-extrabold text-white text-xl">Restaurant Owner Admin Console</h3>
                    <span className="bg-brand-500/20 text-brand-400 border border-brand-500/30 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full animate-pulse">Live Control</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    This is your control command panel. See table orders appear in real-time, click to accept/reject tickets, change food prices, toggle item stock status, view active table queues, and print out daily automated tax spreadsheets.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">DEMO PASSWORD:</span>
                    <span className="bg-yellow-400 text-slate-950 px-2 py-0.5 rounded font-black font-display uppercase tracking-wide">
                      {ADMIN_DEMO_PASSWORD}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    Enter <strong className="text-white">{ADMIN_DEMO_PASSWORD}</strong> on the admin password page to gain secure root dashboard control access instantly.
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="w-4 h-4 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span>Real-time Kitchen Display System (KDS) for kitchen coordinators</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="w-4 h-4 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span>Manage item catalog (Instant price changes & item toggle on/off)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="w-4 h-4 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span>UPI transaction audit logs, daily sales charts, & compliance logs</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <a
                  href={ADMIN_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-100 hover:bg-white text-slate-950 font-black font-display py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-white/5 active:scale-95"
                >
                  Launch Merchant Console
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>
                <p className="text-center text-[10px] text-slate-500 font-mono leading-none">
                  💡 Tip: Open this link on your Laptop or Tablet for the best layout!
                </p>
              </div>
            </div>

          </div>

          {/* Connected Flow Explanation Alert */}
          <div className="mt-12 bg-orange-50 border border-orange-100/60 p-4 rounded-2xl max-w-3xl mx-auto flex gap-3 text-xs text-slate-700 shadow-sm">
            <span className="text-xl">✨</span>
            <div>
              <p className="font-bold text-slate-900">How to test the connected flow:</p>
              <p className="text-slate-600 mt-1 leading-relaxed">
                Open both demo links in separate windows (or side-by-side). Place an order from the <strong>Customer Ordering App</strong>. You will see it instantly flash up with a sound cue on the <strong>Restaurant Owner Admin Console</strong> (using the password <strong>{ADMIN_DEMO_PASSWORD}</strong> to log in)! Change the status to 'Preparing' on the Admin console and watch the customer app status update automatically. It is that smart!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PROBLEM SECTION */}
      <section id="problem" className="py-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-display">
            The Traditional Dining Loophole
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Still Taking Orders Manually?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every day restaurants lose high-value customers and bleed revenue because paper-based workflows are bottlenecked and slow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Customers wait too long", desc: "Waiting 10 mins to get the menu, 15 mins to place order, and 10 mins to pay the bill kills the dining experience." },
            { title: "Staff writes wrong orders", desc: "Manual transcription errors lead to food wastage, customer frustration, and wrong billing disputes." },
            { title: "Printed menus become outdated", desc: "Price changes, out-of-stock dishes, or seasonal updates mean expensive printing and laminating every month." },
            { title: "Bills take time", desc: "Splitting bills, swiping cards, or chasing change causes table logjams during peak weekend hours." },
            { title: "Customers can't track orders", desc: "Anxious customers constantly shout and ask waiters: 'Where is my order?' creating unnecessary noise." },
            { title: "No proper sales reports", desc: "Struggling with cash registers, manual logs, and spending hours reconciling GST reports for tax audits." }
          ].map((prob, i) => (
            <div key={i} className="bg-slate-50 hover:bg-slate-100/75 border border-slate-100 p-5 rounded-2xl flex gap-3 transition-colors">
              <span className="text-red-500 text-lg shrink-0 select-none">❌</span>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-sm">{prob.title}</h4>
                <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">{prob.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm font-semibold font-display italic">
            There is a better way.
          </p>
          <div className="inline-flex items-center gap-2 mt-2 bg-brand-50 text-brand-800 font-bold px-4 py-2 rounded-full border border-brand-100">
            <SparklesIcon className="w-4.5 h-4.5 text-brand-600 animate-spin" style={{ animationDuration: '4s' }} />
            <span>MenuSarthi solves all of this.</span>
          </div>
        </div>
      </section>

      {/* 6. SOLUTION SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left image mock of table stand */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 space-y-6">
              <div className="w-full aspect-[4/3] bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 border border-brand-100 relative">
                <QrCode className="w-24 h-24 text-brand-600" />
                <span className="absolute top-3 right-3 bg-white text-[9px] font-bold px-2 py-0.5 rounded-full border shadow-xs">Scan Table 4</span>
              </div>
              <div className="space-y-3">
                <h4 className="font-display font-bold text-slate-900 text-sm">A Complete Digital Ordering Experience</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  No app download is required. Guests scan the custom tabletop standee QR and browse the restaurant menu straight in their mobile browser.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="bg-slate-100 text-slate-800 font-mono text-[10px] font-bold px-2 py-1 rounded">No App Install</span>
                  <span className="bg-slate-100 text-slate-800 font-mono text-[10px] font-bold px-2 py-1 rounded">Mobile Browser</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right text layout */}
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-display">
              Seamless Digital Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              A Zero-Friction Dining Loop
            </h2>
            <p className="text-slate-600 text-base">
              Say goodbye to waiter coordination and order taking bottlenecks. Give customers immediate control over their dining speed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Direct QR Scanning", text: "Customers simply scan a QR code placed on the table." },
                { label: "Browse Gorgeous Menus", text: "Browse your beautiful digital menu with photos & tags." },
                { label: "Flexible Customizations", text: "Customize items, select portion sizes, and add extras." },
                { label: "Smart Instant Ordering", text: "Place orders instantly which flash directly to the kitchen." },
                { label: "Live Food Prep Tracking", text: "Track preparation progress step-by-step from their table." },
                { label: "Direct UPI Cash Out", text: "Pay securely via any UPI app directly from their screen." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl flex gap-3 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 text-brand-600 flex items-center justify-center font-display font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-slate-900 text-xs">{step.label}</h5>
                    <p className="text-slate-500 text-[11px] mt-1 leading-normal">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100/60 p-4 rounded-2xl flex gap-3 text-xs text-amber-800 max-w-lg">
              <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Works Directly In Any Browser</p>
                <p className="text-amber-700 mt-0.5">Compatible with Safari, Google Chrome, Firefox, and Samsung Internet. No app installation needed!</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6.5 LIVE APP INTERFACE TOUR */}
      <LiveAppGallery />

      {/* 7. PLAYGROUND SIMULATOR (OUR SPECTACULAR INTERACTIVE SECTION) */}
      <section id="playground" className="border-t border-b border-slate-200/80 bg-slate-100/40">
        <InteractivePlayground />
      </section>

      {/* 8. DETAILED FEATURES SECTION */}
      <section id="features" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-display">
            Built for High Scale Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Powerful Features Packed in One Solution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No expensive integrations or server hosting. Fully optimized features for busy Indian food spaces.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            {
              title: "QR Table Ordering",
              desc: "Customers simply scan tabletop QR stickers and start ordering instantly. Each QR is uniquely generated for individual tables so orders hit the kitchen with exact table numbers.",
              icon: QrCode
            },
            {
              title: "Beautiful Digital Menu",
              desc: "Upload professional food images, group items into categories, enable direct keyword searches, add Veg & Non-Veg color-coded labels, and set multiple pricing tiers (e.g. half/full).",
              icon: Coffee
            },
            {
              title: "Smart Cart Engine",
              desc: "Let guests select quantities, add special preparation instructions ('make it less spicy'), configure add-ons (extra cheese), and see automated live pricing with GST calculations.",
              icon: CheckSquare
            },
            {
              title: "Flexible Payments (Online & Offline)",
              desc: "Fully integrated with premium Razorpay support, direct UPI, Debit/Credit Cards, Wallets, and offline Cash payments. Sab supported hai! Restaurant ko payments receive karna absolute easy aur seamless banata hai.",
              icon: TrendingUp
            },
            {
              title: "Secure Payment Verification",
              desc: "Stops fraud instantly. Fake screenshots strictly accept nahi honge. Real-time automatic payment verification ensures you only serve when paid, keeping your restaurant completely safe and secure.",
              icon: ShieldCheck
            },
            {
              title: "Live Order Tracking",
              desc: "Customers can track their active food order status in real-time: Received ➔ Preparing ➔ Ready ➔ Completed. Customers instantly know progress, so they don't repeatedly disturb or shout for waiters.",
              icon: Landmark
            },
            {
              title: "Interactive ETA Timer",
              desc: "Displays an active live countdown directly on the guest's mobile screen (e.g., '18 min left', '15 min left', '10 min left'). Customer patiently and calmly waits because they see real progress.",
              icon: Clock
            },
            {
              title: "Dynamic Order Revision",
              desc: "Allows guests to self-edit (add/remove items or change cooking instructions) for a few seconds post-placement. Eliminates accidental orders without needing to call the restaurant or alert a waiter.",
              icon: AlertTriangle
            },
            {
              title: "Restaurant Admin Dashboard",
              desc: "Manage live table queues, approve orders, edit menu prices, toggles item availability (stock switches), and check total daily revenue from a single intuitive command console.",
              icon: Monitor
            },
            {
              title: "Auditor-Friendly Reports",
              desc: "Export detailed daily sales spreadsheets, CGST/SGST tax logs, and customer transaction tables. One-click CA export file helps you file your tax audits with zero bookkeeping stress.",
              icon: FileSpreadsheet
            },
            {
              title: "Google Apps Script Powered",
              desc: "No expensive hosting subscriptions or server maintenance. Built on cloud-safe Google infrastructure, making it lightning-fast, exceptionally secure, and virtually maintenance-free.",
              icon: Sparkle
            }
          ].map((feat, idx) => (
            <div key={idx} className="bg-slate-50 hover:bg-slate-100/50 border border-slate-100 p-6 rounded-2xl space-y-4 transition-all hover:scale-101">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/10">
                <feat.icon className="w-5.5 h-5.5" />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 text-base">{feat.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* 9. INTERACTIVE ROI CALCULATOR SECTION */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Calculator Inputs Left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs font-mono">
              Savings Simulator
            </span>
            <h2 className="text-3xl font-display font-black tracking-tight">
              Calculate Your Custom MenuSarthi ROI
            </h2>
            <p className="text-slate-400 text-sm">
              Adjust the sliders based on your restaurant details to estimate how much cash and time MenuSarthi saves you annually.
            </p>

            <div className="space-y-4 pt-4">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Monthly Menu Printing Expense</span>
                  <span className="text-brand-400 font-bold font-mono">₹{roiPrintingCost.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  id="roi-printing-slider"
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="500"
                  value={roiPrintingCost}
                  onChange={(e) => setRoiPrintingCost(Number(e.target.value))}
                  className="w-full accent-brand-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">Includes seasonal prints, paper menu card replacements, lamination</span>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Number of Seating Tables</span>
                  <span className="text-brand-400 font-bold font-mono">{roiTables} Tables</span>
                </div>
                <input 
                  id="roi-tables-slider"
                  type="range" 
                  min="5" 
                  max="100" 
                  step="1"
                  value={roiTables}
                  onChange={(e) => setRoiTables(Number(e.target.value))}
                  className="w-full accent-brand-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Number of Floor Staff / Waiters</span>
                  <span className="text-brand-400 font-bold font-mono">{roiStaff} Staff Members</span>
                </div>
                <input 
                  id="roi-staff-slider"
                  type="range" 
                  min="1" 
                  max="20" 
                  step="1"
                  value={roiStaff}
                  onChange={(e) => setRoiStaff(Number(e.target.value))}
                  className="w-full accent-brand-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Savings Outcome Right */}
          <div className="lg:col-span-6 bg-slate-800 border border-slate-700/60 rounded-3xl p-6 sm:p-8 space-y-6 text-center lg:text-left">
            <h4 className="font-display font-extrabold text-white text-base flex items-center gap-2 justify-center lg:justify-start">
              <TrendingUp className="w-5 h-5 text-brand-500" />
              Annual Restaurant Revenue Boost
            </h4>

            <div className="border-b border-slate-700 pb-5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Estimated Annual Benefit</span>
              <p className="text-4xl sm:text-5xl font-display font-black text-brand-500 mt-1 font-mono">
                ₹{calculateAnnualSavings().toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-slate-400 mt-1.5">
                Based on zero paper menus, faster order turnovers, and custom up-sells.
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300 text-left">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>Save <strong className="text-white">₹{(roiPrintingCost * 12).toLocaleString('en-IN')}</strong> in pure menu printing costs every year.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>Increase staff efficiency by <strong className="text-white">35%</strong> (fewer manual transcription errors).</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>Increase table turnover speed by <strong className="text-white">22 mins</strong> per customer visit.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="roi-book-demo-btn"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold font-display tracking-wide py-3.5 rounded-xl shadow-md transition-colors text-xs uppercase cursor-pointer"
              >
                Claim My Free Setup & Demo Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 10. BENEFITS SECTION */}
      <section className="py-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-display">
              Why Owners Love Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Restaurant Owners Love MenuSarthi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered to bring absolute peace of mind to restaurant operators. No technical expertise or high budgets needed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Faster Table Turnover", desc: "No more waiting logs. Customers check out immediately upon finishing food." },
                { title: "Higher Average Order Value", desc: "Digital recommendations suggest customizable toppings & desserts at cart." },
                { title: "Less Staff Dependency", desc: "Reduce labor stress during rush hours. Waiters spend time serving, not noting orders." },
                { title: "Zero Printing Cost", desc: "Change seasonal items, add discounts, or edit pricing with 100% digital instant updates." },
                { title: "Better Customer Experience", desc: "Live food prep tracking sets professional transparency, making customers happier." },
                { title: "Modern Restaurant Image", desc: "A sleek, contactless, QR-first visual identity that sets you apart from traditional dine-ins." },
                { title: "Live Reports", desc: "View total cash flow, pending approvals, and active kitchen orders on one dashboard." },
                { title: "Easy Menu Updates", desc: "Instantly toggle 'out-of-stock' ingredients to block wrong orders before they occur." }
              ].map((benefit, i) => (
                <div key={i} className="bg-slate-50 hover:bg-slate-100/50 border border-slate-100 p-4 rounded-xl flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✔
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-slate-900 text-xs">{benefit.title}</h5>
                    <p className="text-slate-500 text-[11px] mt-1 leading-normal">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right graphics panel */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-6 max-w-sm w-full border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Onboarding Guarantee</h4>
              </div>
              <ul className="space-y-4 text-xs">
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span><strong>Setup inside 24 Hours</strong>: Submit your paper menu and we'll build your initial beautiful digital catalog for you.</span>
                </li>
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Downtime System</strong>: Running on Google's cloud server system, ensuring 99.9% up-time.</span>
                </li>
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span><strong>On-Demand Support</strong>: Dedicated WhatsApp support specialist for any emergency menu updates.</span>
                </li>
              </ul>
              <div className="bg-slate-950 p-3 rounded-xl text-[11px] text-slate-400 border border-slate-800">
                ⭐ <strong>Now launching in major cities</strong> — custom-designed for modern Indian Cafes, Dhabas, and Family Restaurants.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 11. PERFECT FOR / BUILT FOR */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-xs font-mono">
            Perfect For / Built For
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-950 tracking-tight">
            MenuSarthi is Tailored for Your Dining Space
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "☕", name: "Cafes", desc: "Perfect for fast coffee & snack rotations" },
            { icon: "🍕", name: "Pizza Shops", desc: "Let guests select crusts, add-ons" },
            { icon: "🍔", name: "QSR Restaurants", desc: "Reduce cash-register table queue jams" },
            { icon: "🥙", name: "Food Trucks", desc: "Accept mobile orders on busy streets" },
            { icon: "🥗", name: "Cloud Kitchens", desc: "Organize live ticket statuses smoothly" },
            { icon: "🥘", name: "Family Restaurants", desc: "Cater to large groups with ease" },
            { icon: "🍜", name: "Street Food Chains", desc: "Speed up massive footfalls" },
            { icon: "🍛", name: "Multi Outlet Restaurants", desc: "Centralized analytics management" }
          ].map((type, idx) => (
            <div key={idx} className="bg-white hover:bg-brand-50/50 border border-slate-200/80 p-4 rounded-2xl text-center space-y-2 transition-colors">
              <span className="text-3xl block select-none">{type.icon}</span>
              <h5 className="font-display font-bold text-slate-900 text-sm">{type.name}</h5>
              <p className="text-slate-500 text-[10px] leading-normal">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-display">
            Simple & Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Plans That Grow With Your Restaurant
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No hidden setup fees, no lock-in contracts. Switch or cancel at any time.
          </p>
        </div>

        {/* Pricing Layout Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Monthly */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h4 className="font-display font-extrabold text-slate-900 text-base">Monthly Starter</h4>
                <p className="text-slate-500 text-[11px] mt-1">Perfect for restaurants that want to start with low investment.</p>
              </div>

              <div className="pt-1 space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-slate-950 text-3.5xl font-mono">₹999</span>
                  <span className="text-slate-500 text-xs font-semibold"> / Month</span>
                </div>
                
                <div className="bg-slate-200/50 border border-slate-200/80 rounded-xl p-2.5 space-y-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 font-medium">Daily Breakdown:</span>
                    <span className="font-bold text-slate-900 font-mono text-xs">₹33 / Day</span>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center leading-none italic pt-1 border-t border-slate-200">
                    ☕ Less than the cost of one cutting chai!
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-600">
                {[
                  "Unlimited QR Table Ordering",
                  "Beautiful Digital Menu",
                  "Customer Ordering & Customizations",
                  "Live Food Preparation Tracking",
                  "Admin Kitchen Dashboard",
                  "Daily Sales Reports",
                  "Email & WhatsApp Support"
                ].map(inc => (
                  <li key={inc} className="flex items-center gap-2 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="select-monthly-btn"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold font-display py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Choose Monthly starter
              </button>
            </div>
          </div>

          {/* Card 2: Semi-Yearly Premium */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col justify-between shadow-xs relative hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div>
                <h4 className="font-display font-extrabold text-slate-900 text-base">Semi-Yearly Pro</h4>
                <p className="text-slate-500 text-[11px] mt-1">Excellent balance of savings and operational flexibility.</p>
              </div>

              <div className="pt-1 space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-slate-950 text-3.5xl font-mono">₹4,999</span>
                  <span className="text-slate-500 text-xs font-semibold"> / 6 Months</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 font-medium">Effective Monthly:</span>
                    <span className="font-bold text-slate-900 font-mono text-xs">₹833 / Month</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] border-t border-slate-100 pt-1.5">
                    <span className="text-slate-500 font-medium">Effective Daily:</span>
                    <span className="font-bold text-slate-900 font-mono text-xs">₹27 / Day</span>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center leading-none italic pt-1 border-t border-slate-100">
                    💼 Less than the cost of a single cup of tea/coffee!
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
                {[
                  "Everything included in Monthly",
                  "Priority Email & WhatsApp Support",
                  "Custom Menu Banner & Branding",
                  "Up to 5 Multi-Waiter Logins",
                  "Monthly Business Performance Audits",
                  "Free digital QR tabletop files (PDF)"
                ].map(inc => (
                  <li key={inc} className="flex items-center gap-2 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="select-semi-yearly-btn"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold font-display py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Choose Semi-Yearly Pro
              </button>
            </div>
          </div>

          {/* Card 3: Yearly (Best Value) */}
          <div className="bg-slate-900 text-white border-2 border-brand-500 rounded-3xl p-5 flex flex-col justify-between relative shadow-xl shadow-brand-500/5">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-600 to-orange-500 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 shrink-0 whitespace-nowrap">
              <Star className="w-2.5 h-2.5 fill-white" />
              Yearly Best Value ⭐
            </div>

            <div className="space-y-4">
              <div className="pt-2">
                <h4 className="font-display font-extrabold text-white text-base">Yearly Premium</h4>
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] text-brand-400 uppercase tracking-wider font-black">🔥 Early Bird Offer</span>
                    <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-orange-400 animate-ping"></span>
                      First 50 Customers Only
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Save thousands compared to monthly billing.</p>
                </div>
              </div>

              <div className="pt-1 space-y-3">
                <div className="text-slate-400 text-xs font-semibold flex items-center gap-1 font-mono">
                  <span>Regular:</span>
                  <span className="line-through">₹9,999 / Year</span>
                  <span className="text-slate-500 text-[10px] font-normal font-sans ml-auto">(₹833 / Month | ₹27 / Day)</span>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-xs font-semibold">Limited Time:</span>
                  <span className="font-display font-black text-brand-400 text-3.5xl font-mono">₹7,999</span>
                  <span className="text-slate-300 text-xs font-medium"> / Year</span>
                </div>

                <div className="bg-brand-500/15 border border-brand-500/30 rounded-2xl p-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Effective Monthly:</span>
                    <span className="font-extrabold text-brand-400 font-mono text-base">₹666 / Month</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t border-brand-500/10 pt-2">
                    <span className="text-slate-300 font-medium">Effective Daily:</span>
                    <span className="font-black text-white font-mono text-sm">₹22 / Day</span>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center leading-normal pt-1.5 border-t border-brand-500/10">
                    📉 Only <strong className="text-white">₹22/day</strong> to completely automate your restaurant menu!
                  </p>
                </div>
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 px-3 py-2.5 rounded-xl space-y-1.5">
                <p className="text-[11px] text-brand-400 font-extrabold flex items-center justify-between gap-1">
                  <span>🚀 Instant ₹2,000 Discount Applied</span>
                  <span className="text-[9px] text-orange-400 bg-orange-500/20 border border-orange-500/30 px-1.5 py-0.5 rounded font-black font-mono">
                    30/50 Claimed
                  </span>
                </p>
                <p className="text-[10px] text-orange-300 font-bold leading-normal">
                  ⚠️ Only for the first 50 customers! (यह ऑफर सिर्फ पहले 50 customers के लिए है)
                </p>
                <p className="text-[10px] text-slate-400 leading-normal font-medium pt-0.5 border-t border-slate-800">
                  Note: This special promo does not include 2 months free. (Isme 2 month free nahi honge)
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300 font-medium">
                {[
                  "Everything included in Monthly",
                  "Priority WhatsApp & Calling Support",
                  "Custom Domain Integration",
                  "Unlimited Multi-Waiter Logins",
                  "Weekly Email Sales Audits",
                  "Dedicated Success Manager",
                  "Free QR Standee Stickers pack"
                ].map(inc => (
                  <li key={inc} className="flex items-center gap-2 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="select-yearly-btn"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-gradient-to-r from-brand-600 to-orange-500 hover:from-brand-700 hover:to-orange-600 text-white font-bold font-display py-3 rounded-xl text-xs uppercase tracking-wider cursor-pointer shadow-md"
              >
                Choose Yearly Premium
              </button>
            </div>
          </div>

          {/* Card 4: One-Time Onboarding Add-on */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="bg-blue-50 text-blue-700 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">OPTIONAL SERVICE</span>
                <h4 className="font-display font-extrabold text-slate-900 text-base mt-2">One-Time Setup</h4>
                <p className="text-slate-500 text-[11px] mt-1">We'll do everything for you. Zero effort needed.</p>
              </div>

              <div className="pt-1">
                <span className="font-display font-black text-slate-950 text-3xl font-mono">₹2,999</span>
                <span className="text-slate-500 text-xs font-medium"> / Setup</span>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
                {[
                  "Complete digital menu setup",
                  "Food photos professional crop & upload",
                  "Category & price listing creation",
                  "High-quality QR Code tabletop generation",
                  "Premium acrylic QR Table Standees delivered",
                  "Staff training session via Zoom/Meet",
                  "Ready to accept digital orders from Day 1"
                ].map(inc => (
                  <li key={inc} className="flex items-center gap-2 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="select-setup-btn"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold font-display py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Add One-Time Setup
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 13. COMPARISON SECTION */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full font-mono">
            Traditional vs MenuSarthi Table
          </span>
          <h2 className="text-3xl font-display font-black text-slate-950 tracking-tight">
            How Does MenuSarthi Compare?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-display uppercase tracking-wider text-[11px]">
                <th className="p-4">Feature Profile</th>
                <th className="p-4 border-l border-slate-800">Traditional Restaurant</th>
                <th className="p-4 bg-brand-500 text-white border-l border-brand-600">MenuSarthi Digital</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {[
                { f: "Menu Medium", trad: "Printed paper (Tears, dirty, outdated)", menu: "Sleek Digital Web App (Instant updates) ✅" },
                { f: "Ordering Loop", trad: "Waiter takes order manually (Slow, errors)", menu: "Customer orders directly from phone ✅" },
                { f: "Billing Speed", trad: "Manual register prints, split issues", menu: "Automatic checkout calculations ✅" },
                { f: "Customer Tracking", trad: "None (Waiters repeatedly asked 'kahan hai?')", menu: "Live progress tracker screen ✅" },
                { f: "Analytics & Tax Audit", trad: "Manual logs (Reconciliation headache)", menu: "Automated CGST/SGST analytics ✅" },
                { f: "Printing Costs", trad: "₹1,500+ / month in print & lamination", menu: "Zero printing costs entirely ✅" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">{row.f}</td>
                  <td className="p-4 text-slate-500">{row.trad}</td>
                  <td className="p-4 bg-brand-50/50 text-brand-900 font-semibold border-l border-brand-100">{row.menu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 14. CTA BOOKING REGISTRATION AREA */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Background blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-tight">
            Ready To Modernize Your Restaurant?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Join restaurants that are serving customers faster with MenuSarthi. 
            Start today with just <span className="text-white font-semibold">₹999/month (₹33/day)</span>, or lock in our Limited-Time Early Bird Yearly Offer for <span className="text-brand-400 font-semibold">₹7,999/year (effective ₹22/day!)</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <button
              id="cta-book-demo-btn"
              onClick={() => setIsBookingModalOpen(true)}
              className="px-8 py-4 bg-[#FF5C35] hover:bg-[#E6431D] text-white rounded-full font-bold text-sm shadow-lg shadow-orange-200 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a
              href="https://wa.me/918851666208" 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold font-display px-8 py-4 rounded-full text-center block text-sm"
            >
              <Phone className="w-4 h-4 inline-block mr-1.5 align-middle" />
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* 15. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs font-mono">Common Questions</span>
          <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">FAQ / Need Clarifications?</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "Does it require guests to install any smartphone app?",
              a: "Absolutely not! Guests simply scan the table QR code using their default phone camera or Google Lens. Your digital menu opens instantly inside their default browser (Safari, Chrome, etc.). They can order and pay directly without downloads."
            },
            {
              q: "How do UPI payments settle into my restaurant account?",
              a: "We link the system directly with your existing restaurant UPI VPA handle (e.g., merchant@ybl or owner@paytm). Payments from Google Pay, PhonePe, Paytm, or BHIM bypass third-party wallets entirely and transfer cash straight into your bank instantly. No 2% merchant commission fees!"
            },
            {
              q: "Is there any expensive hosting fees or server maintenance?",
              a: "Zero. MenuSarthi operates using Google Cloud Apps Script engines. This means you do not pay for any monthly database hosting, VM servers, or system architects. It is fast, stable, and highly transparent."
            },
            {
              q: "What support do we get for setting up our restaurant menu?",
              a: "With our One-Time Setup service (₹2,999), our success specialists handle everything. Send us your printed menu card (or PDF/photos), and we will configure your categories, items, and toppings. We generate high-res QR codes and ship durable acrylic stands to your address."
            },
            {
              q: "Can we edit prices or toggle stock ourselves?",
              a: "Yes! Your central Admin panel lets you change prices, add dishes, and toggle 'Out of stock' instantly. If an ingredient runs out, toggle it off to prevent wrong table orders."
            },
            {
              q: "Kya yeh local dhabas aur small roadside eateries ke liye bhi perfect hai?",
              a: "Haan, bilkul! MenuSarthi local dhabas, roadside family restaurants, aur street-food corners ke liye ekdum perfect aur super easy hai. Table par QR codes lagane se clients khud mobile se seedhe order karte hain, jisse baar-baar chilane aur waiter dhoodhne ka tension khatam ho jaata hai. Aur customer se payment bhi seedhe aapke account me UPI se instant credit ho jaati hai!"
            }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <h5 className="font-display font-extrabold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 16. FOOTER CTA & BRAND DEPARTURE */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-900 text-xs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-900 pb-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-tr from-[#FF5C35] to-orange-500 rounded-xl flex items-center justify-center text-white overflow-hidden border border-orange-400/20">
                {PROFESSIONAL_LOGO_URL ? (
                  <img 
                    src={PROFESSIONAL_LOGO_URL} 
                    alt="MenuSarthi" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 70H80C80 70 75 45 50 45C25 45 20 70 20 70Z" fill="currentColor" />
                    <path d="M15 75H85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="50" cy="40" r="5" fill="currentColor" />
                  </svg>
                )}
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">Menu<span className="text-[#FF5C35]">Sarthi</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Your Customers Already Use QR Codes Every Day. Now let them order food the same way. 
              MenuSarthi makes your restaurant, cafe, or local dhaba smarter, faster, and more profitable.
            </p>
            <p className="text-slate-500 font-mono text-[10px]">
              Built with secure Google Cloud Apps Script protocols.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h6 className="font-display font-bold text-white text-xs uppercase tracking-wider">Product Features</h6>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#playground" className="hover:text-slate-300 transition-colors">QR Table Ordering</a></li>
              <li><a href="#playground" className="hover:text-slate-300 transition-colors">Digital Interactive Menu</a></li>
              <li><a href="#playground" className="hover:text-slate-300 transition-colors">Direct UPI Cashouts</a></li>
              <li><a href="#playground" className="hover:text-slate-300 transition-colors">Live Kitchen Monitor</a></li>
              <li><a href="#playground" className="hover:text-slate-300 transition-colors">CA Export Accounting</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h6 className="font-display font-bold text-white text-xs uppercase tracking-wider">Onboarding Support</h6>
            <p className="text-slate-500 leading-normal">
              Questions? Connect with our central sales desk for onboarding, bulk QR prints, or white-label solutions.
            </p>
            <div className="pt-1">
              <a 
                href="mailto:surajautomation.surajdx@gmail.com" 
                className="text-brand-500 font-semibold hover:underline block"
              >
                surajautomation.surajdx@gmail.com
              </a>
              <span className="text-slate-600 mt-1 block">Contact / WhatsApp: +91 8851666208</span>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-[10px] gap-4">
          <p>© {new Date().getFullYear()} MenuSarthi Systems Private Limited. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:underline">refunds</a>
          </div>
        </div>
      </footer>

      {/* 17. CHATBOT FLOATING AGENT (CONVERSATIONAL REQUIREMENT MET) */}
      <ConversationalSarthi />

      {/* 18. BOOKING FORM MODAL */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100 animate-slide-up relative">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-500" />
                <h3 className="font-display font-extrabold text-sm sm:text-base uppercase tracking-wide">Book Free Live Demo</h3>
              </div>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-1.5 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5">
              {bookingSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold mx-auto">
                    ✓
                  </div>
                  <h4 className="font-display font-extrabold text-slate-950 text-base">Booking Request Submitted!</h4>
                  <p className="text-xs text-slate-500 leading-normal px-2">
                    Opening WhatsApp to confirm your schedule with our specialist...
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/918851666208?text=${encodeURIComponent(
                        `*New Free Live Demo Booking* 🚀\n` +
                        `-----------------------------------\n` +
                        `*Restaurant/Cafe:* ${restaurantName}\n` +
                        `*Owner Name:* ${ownerName}\n` +
                        `*WhatsApp:* ${phone}\n` +
                        `*Date:* ${bookingDate}\n` +
                        `*Time Slot:* ${timeSlot}\n` +
                        `-----------------------------------\n` +
                        `Please confirm my demo schedule. Thank you!`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-emerald-200"
                    >
                      <Phone className="w-4 h-4" />
                      Send on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form id="booking-modal-form" onSubmit={handleBookingSubmit} className="space-y-4">
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Restaurant / Cafe Name</label>
                    <input 
                      id="modal-rest-name"
                      type="text" 
                      required
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      placeholder="E.g. Sarthi Pizza House" 
                      className="w-full text-xs border border-slate-200 focus:border-brand-500 outline-none px-3.5 py-2.5 rounded-xl text-slate-800 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Your Name (Owner / Manager)</label>
                    <input 
                      id="modal-owner-name"
                      type="text" 
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="E.g. Rajesh Kumar" 
                      className="w-full text-xs border border-slate-200 focus:border-brand-500 outline-none px-3.5 py-2.5 rounded-xl text-slate-800 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">WhatsApp / Calling Number</label>
                    <input 
                      id="modal-phone"
                      type="tel" 
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="E.g. 9876543210 (10 digits)" 
                      className="w-full text-xs border border-slate-200 focus:border-brand-500 outline-none px-3.5 py-2.5 rounded-xl text-slate-800 font-medium font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Preferred Date</label>
                      <input 
                        id="modal-date"
                        type="date" 
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full text-xs border border-slate-200 focus:border-brand-500 outline-none px-3 py-2.5 rounded-xl text-slate-800 font-medium font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Preferred Time Slot</label>
                      <select
                        id="modal-time-slot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full text-xs border border-slate-200 focus:border-brand-500 outline-none px-3 py-2.5 rounded-xl text-slate-800 font-medium bg-white"
                      >
                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                        <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                        <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="submit-booking-modal-btn"
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold font-display py-3.5 rounded-xl text-xs uppercase tracking-wide shadow-md shadow-brand-500/10 cursor-pointer mt-2"
                  >
                    Confirm Live Demo Schedule ➔
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 No credit card required. Demo is 100% free.
                  </p>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
