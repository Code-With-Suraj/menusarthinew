import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Calculator, HelpCircle, Calendar, Bot, User, Check, Sparkles, TrendingUp } from 'lucide-react';
import { ChatMessage, DemoBooking } from '../types';

export default function ConversationalSarthi() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [calculatorState, setCalculatorState] = useState<{
    printingCost?: number;
    tables?: number;
    staff?: number;
    step: 'none' | 'printing' | 'tables' | 'staff' | 'result';
  }>({ step: 'none' });

  const [bookingState, setBookingState] = useState<{
    restaurantName?: string;
    ownerName?: string;
    phone?: string;
    date?: string;
    timeSlot?: string;
    step: 'none' | 'restaurant' | 'owner' | 'phone' | 'date' | 'slot' | 'completed';
  }>({ step: 'none' });

  const [bookings, setBookings] = useState<DemoBooking[]>([]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load existing bookings
  useEffect(() => {
    const saved = localStorage.getItem('menusarthi_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'init-1',
          sender: 'bot',
          text: "Namaste! 🙏 Welcome to MenuSarthi. I can help you modernize your restaurant operations, increase average orders by 18%, and eliminate paper printing costs entirely.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          id: 'init-2',
          sender: 'bot',
          text: "How can I help you today? Feel free to select an option below:",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: ["📊 Calculate My ROI & Savings", "📅 Book a Free Live Demo", "❓ Ask a Question / FAQ", "📱 How does it work?"]
        }
      ]);
    }
  }, [messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (text: string, options?: string[], actionType?: ChatMessage['actionType']) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options,
          actionType
        }
      ]);
    }, 600);
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);

    // Parse options
    if (option.includes("Calculate My ROI") || option === "ROI Calculator") {
      setCalculatorState({ step: 'printing' });
      setBookingState({ step: 'none' });
      addBotMessage("Awesome! Let's calculate your exact savings. 💸\n\nFirst question: **How much do you spend on printing & designing paper menus every month?** (Including replacements, updates, and seasonal redesigns)", ["₹500 - ₹1,000", "₹1,000 - ₹2,500", "₹2,500 - ₹5,000", "More than ₹5,000"]);
    } else if (option.includes("Book a Free Live Demo") || option === "Book Demo") {
      setBookingState({ step: 'restaurant' });
      setCalculatorState({ step: 'none' });
      addBotMessage("Perfect! Let's get you set up with a free, no-obligation demo. 📅\n\nWhat is the **name of your restaurant, cafe, or food truck**?");
    } else if (option.includes("Ask a Question") || option === "FAQ Guide") {
      addBotMessage("I can answer your questions instantly! Please select one of our most common questions:", [
        "🌐 Does it require installing an app?",
        "💵 How do payments go to my account?",
        "⚡ What is Google Apps Script?",
        "🛠️ Is there setup support?",
        "⬅️ Back to Main Options"
      ]);
    } else if (option.includes("How does it work?") || option === "How it Works") {
      addBotMessage("MenuSarthi is incredibly simple for you and your guests! Here's how: \n\n1️⃣ **Scan**: Customers scan the high-quality QR code on their table.\n2️⃣ **Order**: They browse your beautiful digital menu, customize, and hit order.\n3️⃣ **Track**: The order instantly sounds on your Restaurant Dashboard. Kitchen prepares it.\n4️⃣ **Pay**: Customers pay via UPI directly from their phone screen. Zero contact!\n\nWould you like to try the live simulation or calculate your savings?", ["🎮 Try the Live Simulation Below", "📊 Calculate My Savings", "📅 Book Demo Now"]);
    } else if (option === "⬅️ Back to Main Options" || option === "Main Menu") {
      setCalculatorState({ step: 'none' });
      setBookingState({ step: 'none' });
      addBotMessage("Back to the main menu! What can I do for you?", [
        "📊 Calculate My ROI & Savings",
        "📅 Book a Free Live Demo",
        "❓ Ask a Question / FAQ",
        "📱 How does it work?"
      ]);
    }
    // ROI Calculator State Handling
    else if (calculatorState.step === 'printing') {
      const val = parseInt(option.replace(/[^0-9]/g, '')) || 1500;
      setCalculatorState(prev => ({ ...prev, printingCost: val, step: 'tables' }));
      addBotMessage(`Noted! ₹${val.toLocaleString('en-IN')}/month on menu printing. \n\nNext: **How many seating tables do you have in your restaurant?**`, [
        "1 to 10 tables",
        "11 to 25 tables",
        "26 to 50 tables",
        "More than 50 tables"
      ]);
    } else if (calculatorState.step === 'tables') {
      let tablesCount = 15;
      if (option.includes("1 to 10")) tablesCount = 8;
      else if (option.includes("11 to 25")) tablesCount = 18;
      else if (option.includes("26 to 50")) tablesCount = 38;
      else if (option.includes("More than 50")) tablesCount = 60;
      else tablesCount = parseInt(option.replace(/[^0-9]/g, '')) || 15;

      setCalculatorState(prev => ({ ...prev, tables: tablesCount, step: 'staff' }));
      addBotMessage(`Understood, ${tablesCount} tables. \n\nFinal question: **How many floor staff / waiters do you employ?**`, [
        "1 - 3 Staff members",
        "4 - 8 Staff members",
        "9 or more Staff members"
      ]);
    } else if (calculatorState.step === 'staff') {
      let staffCount = 4;
      if (option.includes("1 - 3")) staffCount = 2;
      else if (option.includes("4 - 8")) staffCount = 6;
      else if (option.includes("9 or more")) staffCount = 12;
      else staffCount = parseInt(option.replace(/[^0-9]/g, '')) || 4;

      const printingCost = calculatorState.printingCost || 1500;
      const tables = calculatorState.tables || 15;
      
      // Calculate savings
      const annualPrintingSavings = printingCost * 12;
      
      // Staff efficiency savings (waiters spend less time taking orders, can manage more tables, reducing labor stress or needing 1 less waiter)
      // Say 1 waiter salary is ₹12,000/month. We save at least ₹40,000/year in labor efficiency.
      const laborSavings = staffCount >= 4 ? 48000 : 24000;
      
      // Table turnover boost: faster ordering increases table turnover by 20%
      // Average order of ₹400, 15 tables, 3 cycles a day = ₹18,000/day. 20% boost = ₹3,600/day additional potential revenue.
      const revenueBoost = Math.round(tables * 400 * 0.15 * 30 * 12 * 0.08); // conservative revenue boost

      const totalAnnualBenefit = annualPrintingSavings + laborSavings + revenueBoost;

      setCalculatorState(prev => ({ ...prev, staff: staffCount, step: 'result' }));
      
      addBotMessage(
        `🎉 **Your Dynamic MenuSarthi ROI Report is Ready!** \n\n` +
        `Here is how MenuSarthi pays for itself and makes your restaurant highly profitable:\n\n` +
        `🚫 **Zero Printing Cost**: Save **₹${annualPrintingSavings.toLocaleString('en-IN')}** per year on paper menu prints.\n` +
        `⚡ **Staff Optimization**: Save **₹${laborSavings.toLocaleString('en-IN')}** per year in labor coordination and order-taking speed.\n` +
        `📈 **Table Turnover Boost**: Potential extra revenue of **₹${revenueBoost.toLocaleString('en-IN')}** per year through faster orders and smart upselling.\n\n` +
        `🔥 **TOTAL ESTIMATED VALUE**: **₹${totalAnnualBenefit.toLocaleString('en-IN')} / year**! \n\n` +
        `All this for just **₹9,999/year** (less than ₹28 a day). Ready to start?`,
        ["📅 Book My Free Demo", "💵 View Plans & Pricing", "⬅️ Back to Main Options"]
      );
    }
    // Booking Demo Actions
    else if (option.includes("Book My Free Demo") || option === "📅 Book My Free Demo") {
      setBookingState({ step: 'restaurant' });
      addBotMessage("Awesome! Let's get your details.\n\nWhat is your **Restaurant / Cafe Name**?");
    } else if (option.includes("Confirm on WhatsApp") || option === "💬 Confirm on WhatsApp") {
      const lastBooking = bookings[bookings.length - 1] || {
        restaurantName: bookingState.restaurantName || "My Restaurant",
        ownerName: bookingState.ownerName || "Owner",
        phone: bookingState.phone || "",
        date: bookingState.date || "Tomorrow",
        timeSlot: bookingState.timeSlot || "Anytime"
      };

      const message = `*New Free Live Demo Booking* 🚀\n` +
        `-----------------------------------\n` +
        `*Restaurant/Cafe:* ${lastBooking.restaurantName}\n` +
        `*Owner Name:* ${lastBooking.ownerName}\n` +
        `*WhatsApp:* ${lastBooking.phone}\n` +
        `*Date:* ${lastBooking.date}\n` +
        `*Time Slot:* ${lastBooking.timeSlot}\n` +
        `-----------------------------------\n` +
        `Please confirm my demo schedule. Thank you!`;

      const encodedText = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918851666208?text=${encodedText}`;
      window.open(whatsappUrl, '_blank');
      addBotMessage("Opened WhatsApp to confirm schedule! Let me know if you need help with anything else.", ["Main Menu"]);
    } else if (option.includes("View Plans & Pricing")) {
      const section = document.getElementById('pricing-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      addBotMessage("I have scrolled to the Pricing Section! Feel free to review the Monthly, Yearly, and One-Time setup options. What would you like to do next?", ["📅 Book Demo Now", "⬅️ Back to Main Options"]);
    }
    // FAQ Handlers
    else if (option.includes("Does it require installing an app?")) {
      addBotMessage("🚫 **No app install needed!**\n\nCustomers scan the QR code and your beautiful digital menu opens instantly in their native mobile browser (Safari, Chrome, etc.). They can browse, order, customize, and pay directly without wasting space or waiting to download an app. \n\nWould you like to ask another question?", ["💵 How do payments go to my account?", "⚡ What is Google Apps Script?", "⬅️ Back to Main Options"]);
    } else if (option.includes("How do payments go to my account?")) {
      addBotMessage("💰 **Direct UPI Payments to your Bank!**\n\nUnlike other apps that charge 2% to 5% commission and hold your money, MenuSarthi creates a custom dynamic UPI QR Code pointing directly to your own UPI ID (PhonePe, GPay, Paytm, or BHIM).\n\nThis means **0% commissions** and **instant settlement** directly into your bank account! You keep 100% of your earnings.", ["🌐 Does it require installing an app?", "⚡ What is Google Apps Script?", "⬅️ Back to Main Options"]);
    } else if (option.includes("What is Google Apps Script?")) {
      addBotMessage("🚀 **Google Apps Script Powered!**\n\nMenuSarthi uses standard Google Cloud and Google Apps Script to run. This means:\n- **No expensive server hosting fees** for you.\n- **Unbelievable speed and stability** powered by Google infrastructure.\n- Your menu data and orders can sync directly with a Google Sheet if you wish, making it incredibly transparent!", ["🛠️ Is there setup support?", "⬅️ Back to Main Options"]);
    } else if (option.includes("Is there setup support?")) {
      addBotMessage("🛠️ **Yes! Complete Hands-Free Setup!**\n\nWith our **₹2,999 One-Time Setup** service, we do everything for you:\n- Complete menu configuration (categories, prices)\n- Food photos upload & labeling\n- High-quality QR code generation\n- Premium custom QR Table Standees delivered to your door\n- Full staff training so you can start smoothly from Day 1!", ["📅 Book My Free Demo", "⬅️ Back to Main Options"]);
    } else if (option.includes("Try the Live Simulation")) {
      const section = document.getElementById('playground-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      addBotMessage("I've scrolled down to the Live Interactive Playground! You can add food items on the simulated phone screen and watch the order appear live on the Restaurant Chef Dashboard in real-time. Give it a try!", ["📊 Calculate My Savings", "📅 Book Demo Now", "⬅️ Back to Main Options"]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    setInputValue('');

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);

    // Check custom flows
    if (bookingState.step === 'restaurant') {
      setBookingState(prev => ({ ...prev, restaurantName: text, step: 'owner' }));
      addBotMessage(`Nice to meet the team at **${text}**! \n\nWhat is your name (Owner / Manager Name)?`);
    } else if (bookingState.step === 'owner') {
      setBookingState(prev => ({ ...prev, ownerName: text, step: 'phone' }));
      addBotMessage(`Thank you, **${text}**. What is your **WhatsApp / Mobile Number** to coordinate the demo?`);
    } else if (bookingState.step === 'phone') {
      setBookingState(prev => ({ ...prev, phone: text, step: 'date' }));
      // Generate some dates (today, tomorrow, etc.)
      const today = new Date();
      const dates = Array.from({ length: 3 }, (_, i) => {
        const d = new Date();
        d.setDate(today.getDate() + i);
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      });
      addBotMessage(`Got it, we will contact you on **${text}**. \n\nWhen would you like to schedule the free 10-minute online demo?`, dates);
    } else if (bookingState.step === 'date') {
      setBookingState(prev => ({ ...prev, date: text, step: 'slot' }));
      addBotMessage(`Great, **${text}** works! What time slot suits you best?`, ["11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "6:00 PM - 7:00 PM", "Anytime"]);
    } else if (bookingState.step === 'slot') {
      const newBooking: DemoBooking = {
        restaurantName: bookingState.restaurantName || "My Restaurant",
        ownerName: bookingState.ownerName || "Owner",
        phone: bookingState.phone || "",
        date: bookingState.date || "Tomorrow",
        timeSlot: text
      };

      const updatedBookings = [...bookings, newBooking];
      setBookings(updatedBookings);
      localStorage.setItem('menusarthi_bookings', JSON.stringify(updatedBookings));

      setBookingState(prev => ({ ...prev, timeSlot: text, step: 'completed' }));

      const message = `*New Free Live Demo Booking* 🚀\n` +
        `-----------------------------------\n` +
        `*Restaurant/Cafe:* ${newBooking.restaurantName}\n` +
        `*Owner Name:* ${newBooking.ownerName}\n` +
        `*WhatsApp:* ${newBooking.phone}\n` +
        `*Date:* ${newBooking.date}\n` +
        `*Time Slot:* ${newBooking.timeSlot}\n` +
        `-----------------------------------\n` +
        `Please confirm my demo schedule. Thank you!`;

      const encodedText = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918851666208?text=${encodedText}`;

      // Open WhatsApp in a new tab immediately
      window.open(whatsappUrl, '_blank');

      addBotMessage(
        `🎉 **Demo Successfully Requested!** \n\n` +
        `**Details:**\n` +
        `🏢 Restaurant: ${newBooking.restaurantName}\n` +
        `👤 Contact: ${newBooking.ownerName}\n` +
        `📞 Mobile: ${newBooking.phone}\n` +
        `📅 Date: ${newBooking.date} at ${newBooking.timeSlot}\n\n` +
        `We are redirecting you to WhatsApp to confirm your schedule with our onboarding specialist on **8851666208**. Click the link below if it doesn't open automatically!`,
        ["💬 Confirm on WhatsApp", "Main Menu"]
      );
    } else {
      // General NLP fallback (or responsive keywords)
      const lower = text.toLowerCase();
      if (lower.includes('dhaba') || lower.includes('dhaba') || lower.includes('roadside') || lower.includes('small restaurant') || lower.includes('eatery')) {
        addBotMessage("🌾 **Dhabas ke liye bilkul perfect hai!**\n\nMenuSarthi local dhabas aur small roadside eateries ke liye ekdum perfect solution hai:\n- 🚫 **No Order Shouting**: Ab baar-baar chilane aur manual order likhne ki jhanjhat bilkul khatam.\n- 📱 **Direct Table Orders**: Customers khud table par baith kar scan karke order kar sakte hain.\n- 💰 **UPI payments directly to your account**: Cash aur badle paise ki chinta khatam, payment seedhe aapke bank account me 0% commission par.\n\nKya aap apne dhabe ke liye ek free demo book karna chahenge?", ["📅 Book Demo Now", "📊 Calculate My Savings", "⬅️ Back to Main Options"]);
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('plan') || lower.includes('charge')) {
        addBotMessage("MenuSarthi offers simple pricing:\n\n- **Monthly**: ₹999/month (Perfect to start)\n- **Yearly**: ₹9,999/year (Get 2 months free! 🔥)\n- **One-time Onboarding**: ₹2,999 (Complete setup & stands)\n\nWhich plan fits your budget?", ["Monthly Plan", "Yearly Plan (Best Value)", "Book Demo Now", "⬅️ Back to Main Options"]);
      } else if (lower.includes('upi') || lower.includes('pay') || lower.includes('google pay') || lower.includes('phonepe')) {
        addBotMessage("MenuSarthi supports UPI direct payments! There are absolutely **0% transaction fees**. Customers scan, select UPI apps, and send money directly to your UPI ID instantly.", ["📊 Calculate My Savings", "⬅️ Back to Main Options"]);
      } else if (lower.includes('demo') || lower.includes('book') || lower.includes('schedule')) {
        setBookingState({ step: 'restaurant' });
        addBotMessage("Perfect! Let's get you registered for a live demo. What is the **name of your restaurant**?");
      } else if (lower.includes('saving') || lower.includes('roi') || lower.includes('calculator') || lower.includes('benefit')) {
        setCalculatorState({ step: 'printing' });
        addBotMessage("Let's calculate your exact savings! 💸\n\nHow much do you spend on printing menus every month?", ["₹500 - ₹1,000", "₹1,000 - ₹2,500", "₹2,500 - ₹5,000", "More than ₹5,000"]);
      } else {
        addBotMessage("I hear you! MenuSarthi makes QR table ordering, digital menus, and UPI payments extremely easy. Would you like to check out the FAQ or calculate your restaurant's annual savings?", ["📊 Calculate My Savings", "📅 Book Demo Now", "❓ Ask a Question / FAQ"]);
      }
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        id="chat-trigger-btn"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FF5C35] hover:bg-[#E6431D] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#FF5C35] animate-ping" />
        </div>
        <span className="font-display tracking-wide text-sm">Talk to MenuSarthi</span>
      </button>

      {/* Floating Chat Drawer / Window */}
      <div
        id="chat-window-container"
        className={`fixed top-0 right-0 sm:top-auto sm:bottom-6 sm:right-6 w-full sm:w-[410px] h-full sm:h-[620px] bg-white sm:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-100 transition-all duration-500 ease-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full sm:translate-y-12 sm:translate-x-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100/10 border border-orange-200/30 flex items-center justify-center text-[#FF5C35]">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-display font-semibold text-sm leading-none">MenuSarthi Bot</h4>
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Your Restaurant Modernizer</p>
            </div>
          </div>
          <button
            id="close-chat-btn"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-1.5 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookings Tracker (Sub-header if there is an active booking) */}
        {bookings.length > 0 && (
          <div className="bg-amber-50 border-b border-amber-100 px-4 py-2 flex items-center justify-between text-xs text-amber-800">
            <div className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Active request for {bookings[bookings.length - 1].restaurantName}</span>
            </div>
            <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-semibold uppercase text-[9px] tracking-wider animate-pulse">Pending WhatsApp Link</span>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 flex flex-col">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
            >
              {/* Avatar */}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${msg.sender === 'user' ? 'bg-[#FF5C35] text-white' : 'bg-slate-200 text-slate-700'}`}>
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              {/* Message Bubble */}
              <div className="space-y-2">
                <div
                  className={`p-3 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#FF5C35] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {msg.text}
                </div>

                {/* Timestamp */}
                <div className={`text-[10px] text-slate-400 px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp}
                </div>

                {/* Option Buttons */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        id={`chat-opt-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => handleOptionClick(opt)}
                        className="bg-white hover:bg-orange-50 hover:border-orange-200 text-[#FF5C35] hover:text-[#E6431D] border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 shadow-sm active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-2.5 max-w-[85%] self-start">
              <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Form */}
        <form
          id="chat-input-form"
          onSubmit={handleSendMessage}
          className="p-3 bg-white border-t border-slate-100 flex gap-2"
        >
          <input
            id="chat-message-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              bookingState.step !== 'none'
                ? "Type your answer here..."
                : "Ask about pricing, UPI setup..."
            }
            className="flex-1 text-sm border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none px-4 py-2.5 rounded-xl"
          />
          <button
            id="chat-submit-btn"
            type="submit"
            disabled={!inputValue.trim()}
            className="bg-[#FF5C35] hover:bg-[#E6431D] disabled:bg-slate-100 disabled:text-slate-400 text-white p-2.5 rounded-xl transition-colors shrink-0"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </form>
      </div>
    </>
  );
}
