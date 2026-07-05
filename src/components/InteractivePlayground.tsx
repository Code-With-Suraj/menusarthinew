import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Monitor, Tablet, ShoppingCart, ArrowRight, CheckCircle2, 
  Search, Plus, Minus, CreditCard, ChevronRight, Play, Utensils, 
  RefreshCcw, AlertCircle, TrendingUp, DollarSign, Download, Settings, 
  Eye, ToggleLeft, ToggleRight, Radio, Bell, ChefHat, CheckSquare, Check
} from 'lucide-react';
import { MenuItem, Order, OrderItem, OrderStatus } from '../types';

// Hardcoded initial digital menu items
const INITIAL_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'Cheese Lava Burger',
    price: 149,
    description: 'Hot sizzling burger packed with overflowing liquid cheese and a crispy veg patty.',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=200',
    isVeg: true,
    addOns: [
      { name: 'Extra Liquid Cheese', price: 30 },
      { name: 'Double Patty', price: 50 }
    ]
  },
  {
    id: 'm2',
    name: 'Spicy Paneer Pizza',
    price: 249,
    description: 'Fresh dough topped with premium diced paneer, red onions, capsicum, and hot peri peri sauce.',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200',
    isVeg: true,
    addOns: [
      { name: 'Extra Paneer', price: 40 },
      { name: 'Cheese Burst Crust', price: 60 }
    ]
  },
  {
    id: 'm3',
    name: 'Peri Peri Chicken Pizza',
    price: 299,
    description: 'Tender peri peri chicken chunks, roasted capsicum, loaded with mozzarella cheese.',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=200',
    isVeg: false,
    addOns: [
      { name: 'Extra Chicken chunks', price: 60 },
      { name: 'Cheese Burst Crust', price: 60 }
    ]
  },
  {
    id: 'm4',
    name: 'Classic Cold Coffee',
    price: 99,
    description: 'Creamy milk blended with dark roasted espresso, vanilla ice cream scoop, and chocolate sauce.',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=200',
    isVeg: true,
    addOns: [
      { name: 'Extra Vanilla Scoop', price: 25 },
      { name: 'Chocolate Syrup', price: 15 }
    ]
  },
  {
    id: 'm5',
    name: 'Crispy French Fries',
    price: 89,
    description: 'Golden salt-sprinkled crispy potato fries served with creamy mayo dip.',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=200',
    isVeg: true,
    addOns: [
      { name: 'Peri Peri Seasoning', price: 15 },
      { name: 'Cheese Dip Sauce', price: 20 }
    ]
  }
];

export default function InteractivePlayground() {
  // Shared States between Admin and Customer
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU);
  const [activeItemsStatus, setActiveItemsStatus] = useState<Record<string, boolean>>({
    'm1': true, 'm2': true, 'm3': true, 'm4': true, 'm5': true
  });
  
  // Custom states for orders
  const [ordersHistory, setOrdersHistory] = useState<Order[]>([
    {
      id: 'MS-2034',
      tableNumber: 'Table 2',
      items: [
        {
          item: INITIAL_MENU[0],
          quantity: 1,
          selectedAddOns: [{ name: 'Extra Liquid Cheese', price: 30 }],
          instructions: 'Serve hot'
        }
      ],
      subtotal: 179,
      gst: 9,
      total: 188,
      status: 'completed',
      paymentStatus: 'paid',
      timestamp: '10 mins ago'
    },
    {
      id: 'MS-2035',
      tableNumber: 'Table 8',
      items: [
        {
          item: INITIAL_MENU[3],
          quantity: 2,
          selectedAddOns: [],
          instructions: 'No ice cream scoop'
        },
        {
          item: INITIAL_MENU[4],
          quantity: 1,
          selectedAddOns: [{ name: 'Peri Peri Seasoning', price: 15 }],
          instructions: ''
        }
      ],
      subtotal: 302,
      gst: 15,
      total: 317,
      status: 'preparing',
      paymentStatus: 'paid',
      timestamp: '3 mins ago'
    }
  ]);

  // Mobile App Interface State
  const [mobileScreen, setMobileScreen] = useState<'welcome' | 'menu' | 'cart' | 'upi' | 'tracking'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Active Customer Cart State
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [selectedCustomizingItem, setSelectedCustomizingItem] = useState<MenuItem | null>(null);
  const [tempAddOns, setTempAddOns] = useState<{ name: string; price: number }[]>([]);
  const [tempInstructions, setTempInstructions] = useState<string>('');
  const [tempQty, setTempQty] = useState<number>(1);
  
  // Active customer submitted order
  const [activeCustomerOrder, setActiveCustomerOrder] = useState<Order | null>(null);
  const [selectedPaymentApp, setSelectedPaymentApp] = useState<string>('gpay');

  // Admin Dashboard Interface State
  const [adminTab, setAdminTab] = useState<'orders' | 'menu-stock' | 'analytics'>('orders');
  const [adminSearchQuery, setAdminSearchQuery] = useState<string>('');
  
  // Sounds & Notification alerts
  const [notification, setNotification] = useState<string | null>(null);

  // Play Sound Utility (synthesized web audio API so no external asset dependency)
  const playDing = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      oscillator.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.1); // A5
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.45);
    } catch (e) {
      console.log('Audio Context blocked or not supported');
    }
  };

  // Sync order statuses between customer phone and admin dashboard
  useEffect(() => {
    if (activeCustomerOrder) {
      // Find matching order in history and keep sync
      const matched = ordersHistory.find(o => o.id === activeCustomerOrder.id);
      if (matched && matched.status !== activeCustomerOrder.status) {
        setActiveCustomerOrder(matched);
      }
    }
  }, [ordersHistory, activeCustomerOrder]);

  // Handle Menu Item toggle from Admin Panel
  const handleToggleStock = (id: string) => {
    setActiveItemsStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    // If the customer has this item in cart, let's remove/notify (simulated)
    if (cart.some(c => c.item.id === id)) {
      setCart(prev => prev.filter(c => c.item.id !== id));
      showToastNotification("Cart updated: An item went out of stock!");
    }
  };

  const showToastNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Customer adds item to cart details
  const openCustomization = (item: MenuItem) => {
    setSelectedCustomizingItem(item);
    setTempAddOns([]);
    setTempInstructions('');
    setTempQty(1);
  };

  const toggleTempAddOn = (addOn: { name: string; price: number }) => {
    if (tempAddOns.some(a => a.name === addOn.name)) {
      setTempAddOns(prev => prev.filter(a => a.name !== addOn.name));
    } else {
      setTempAddOns(prev => [...prev, addOn]);
    }
  };

  const handleAddToCart = () => {
    if (!selectedCustomizingItem) return;
    
    const newCartItem: OrderItem = {
      item: selectedCustomizingItem,
      quantity: tempQty,
      selectedAddOns: tempAddOns,
      instructions: tempInstructions
    };

    setCart(prev => [...prev, newCartItem]);
    setSelectedCustomizingItem(null);
    showToastNotification(`Added ${selectedCustomizingItem.name} to Cart!`);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  // Calculate cart metrics
  const getCartSubtotal = () => {
    return cart.reduce((total, entry) => {
      const itemBase = entry.item.price;
      const addOnsTotal = entry.selectedAddOns.reduce((acc, curr) => acc + curr.price, 0);
      return total + (itemBase + addOnsTotal) * entry.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setMobileScreen('upi');
  };

  // Customer places order and pays via UPI
  const handlePayAndOrder = () => {
    const subtotal = getCartSubtotal();
    const gst = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + gst;
    const orderId = `MS-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: Order = {
      id: orderId,
      tableNumber: 'Table 4', // Simulated QR scan on Table 4
      items: cart,
      subtotal,
      gst,
      total,
      status: 'received',
      paymentStatus: 'paid',
      timestamp: 'Just now'
    };

    // Update orders history and active customer view
    setOrdersHistory(prev => [newOrder, ...prev]);
    setActiveCustomerOrder(newOrder);
    setCart([]);
    setMobileScreen('tracking');
    playDing();
    showToastNotification(`🔔 New Order placed from Table 4! ₹${total}`);
  };

  // Revise/Edit Order Customer feature (Allows editing before kitchen starts)
  const handleReviseOrder = () => {
    if (!activeCustomerOrder || activeCustomerOrder.status !== 'received') return;
    
    // Put items back in cart
    setCart(activeCustomerOrder.items);
    
    // Remove from active records
    setOrdersHistory(prev => prev.filter(o => o.id !== activeCustomerOrder.id));
    setActiveCustomerOrder(null);
    setMobileScreen('menu');
    showToastNotification("Order recalled! You can now edit and place it again.");
  };

  // Admin updates order status
  const updateOrderStatus = (orderId: string, nextStatus: OrderStatus) => {
    setOrdersHistory(prev => prev.map(order => {
      if (order.id === orderId) {
        return { ...order, status: nextStatus };
      }
      return order;
    }));
    
    showToastNotification(`Order ${orderId} is now: ${nextStatus.toUpperCase()}`);
  };

  // Admin cancels/rejects order
  const handleDeclineOrder = (orderId: string) => {
    setOrdersHistory(prev => prev.filter(o => o.id !== orderId));
    if (activeCustomerOrder?.id === orderId) {
      setActiveCustomerOrder(null);
      setMobileScreen('menu');
    }
    showToastNotification(`Order ${orderId} declined`);
  };

  // Analytics Helpers
  const getTotalSales = () => {
    return ordersHistory
      .filter(o => o.status === 'completed' || o.status === 'preparing' || o.status === 'ready')
      .reduce((sum, curr) => sum + curr.total, 0);
  };

  const getGSTCollected = () => {
    return ordersHistory
      .filter(o => o.status === 'completed' || o.status === 'preparing' || o.status === 'ready')
      .reduce((sum, curr) => sum + curr.gst, 0);
  };

  const handleDownloadCAReport = () => {
    const headers = "Order ID,Table Number,Timestamp,Amount (₹),GST (₹),Status,Payment Status\n";
    const rows = ordersHistory.map(o => 
      `"${o.id}","${o.tableNumber}","${o.timestamp}",${o.total},${o.gst},"${o.status}","${o.paymentStatus}"`
    ).join("\n");
    
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `MenuSarthi_GST_CA_Report_${new Date().toISOString().slice(0,10)}.csv`);
    a.click();
    showToastNotification("📥 CA Export CSV downloaded successfully!");
  };

  // Filter menu items on category selection
  const filteredMenuItems = menuItems.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div id="playground-section" className="scroll-mt-20 py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-display">
          Live Product Simulator
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mt-3 tracking-tight">
          Experience MenuSarthi Live
        </h2>
        <p className="text-slate-600 mt-2 text-base md:text-lg">
          Add an item to the digital menu on the customer mobile screen. Watch it reflect instantly on the kitchen dashboard with live sounds!
        </p>
      </div>

      {/* Simulator Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-900/5 p-4 md:p-6 rounded-3xl border border-slate-200">
        
        {/* LEFT COLUMN: CUSTOMER SMARTPHONE MOCKUP (4 or 5 columns on lg) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="text-center mb-3">
            <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-1.5 justify-center">
              <Smartphone className="w-4 h-4 text-brand-500" />
              1. Customer Screen (Table 4)
            </h4>
            <p className="text-xs text-slate-500">Scan QR Code experience</p>
          </div>

          {/* Smartphone Container */}
          <div className="relative w-[340px] sm:w-[350px] h-[640px] bg-slate-950 rounded-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[10px] border-slate-800 overflow-hidden flex flex-col">
            
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-900 rounded-full mb-1" />
              <div className="w-2 h-2 bg-slate-950 rounded-full ml-4 mb-1" />
            </div>

            {/* Simulated Live Toast Alert Inside Phone */}
            {notification && (
              <div className="absolute top-8 left-4 right-4 bg-slate-900 text-white p-2.5 rounded-xl text-xs z-50 flex items-center gap-2 shadow-lg animate-slide-up border border-slate-800">
                <Bell className="w-4 h-4 text-brand-500 animate-swing" />
                <span className="flex-1 font-medium">{notification}</span>
              </div>
            )}

            {/* Inside Screen Content */}
            <div className="flex-1 bg-white mt-4 flex flex-col h-full overflow-hidden relative">
              
              {/* SCREEN: WELCOME SCAN STATE */}
              {mobileScreen === 'welcome' && (
                <div className="flex-1 flex flex-col justify-between p-6 text-center bg-gradient-to-b from-brand-50 to-white">
                  <div className="pt-8">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg animate-bounce mt-4">
                      <Utensils className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-950 mt-4 leading-tight">
                      MenuSarthi
                    </h3>
                    <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider font-display mt-1">
                      Cafe Coffee & Kitchen
                    </p>
                    <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm inline-block mt-6">
                      <div className="w-28 h-28 bg-slate-200 border-2 border-slate-300 flex items-center justify-center rounded-lg relative overflow-hidden">
                        {/* Simulated QR block code */}
                        <div className="grid grid-cols-5 gap-1 p-1 opacity-85">
                          {Array.from({ length: 25 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-4 h-4 rounded-xs ${
                                (i % 2 === 0 && i % 3 !== 0) || i === 0 || i === 4 || i === 20 || i === 24 
                                  ? 'bg-slate-900' 
                                  : 'bg-transparent'
                              }`} 
                            />
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-brand-500/10 flex items-center justify-center">
                          <span className="bg-white text-[9px] font-bold text-slate-800 px-1.5 py-0.5 rounded-md border border-brand-500/20 shadow-xs">
                            TABLE 4
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pb-6">
                    <p className="text-xs text-slate-500 leading-normal px-4 mb-4">
                      Place your smartphone on the restaurant table QR standee to view, order, and track your food instantly!
                    </p>
                    <button
                      id="sim-scan-qr-btn"
                      onClick={() => setMobileScreen('menu')}
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold font-display py-3 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      Scan Table 4 QR Code
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN: MENU BROWSING STATE */}
              {mobileScreen === 'menu' && (
                <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
                  {/* Digital Menu Header */}
                  <div className="bg-white p-3 pt-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">TABLE 4</span>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-sm leading-tight">Cafe Sarthi Menu</h4>
                    </div>
                    {cart.length > 0 && (
                      <button 
                        id="view-cart-btn"
                        onClick={() => setMobileScreen('cart')}
                        className="bg-brand-500 text-white p-2 rounded-xl flex items-center gap-1.5 shadow-sm text-xs font-semibold relative"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Cart</span>
                        <span className="absolute -top-1.5 -right-1.5 bg-slate-950 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                          {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Search Bar */}
                  <div className="p-2 bg-white border-b border-slate-100">
                    <div className="relative flex items-center bg-slate-100 rounded-xl px-2.5 py-1.5">
                      <Search className="w-4 h-4 text-slate-400 mr-1.5" />
                      <input 
                        id="customer-menu-search"
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search food, beverages..."
                        className="bg-transparent border-none outline-none text-xs w-full text-slate-800 placeholder-slate-400"
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="text-slate-400 text-xs font-bold hover:text-slate-600 px-1">✕</button>
                      )}
                    </div>
                  </div>

                  {/* Category Chips Horizontal List */}
                  <div className="p-2 flex gap-1.5 overflow-x-auto bg-white border-b border-slate-100 shrink-0">
                    {['All', 'Burgers', 'Pizzas', 'Beverages', 'Sides'].map(cat => (
                      <button
                        key={cat}
                        id={`cat-chip-${cat.toLowerCase()}`}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-[11px] font-medium font-display px-3 py-1.5 rounded-full shrink-0 transition-colors ${
                          selectedCategory === cat 
                            ? 'bg-brand-600 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Menu Items List */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3">
                    {filteredMenuItems.length === 0 ? (
                      <div className="text-center py-10">
                        <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-xs text-slate-500 font-medium">No menu items found</p>
                      </div>
                    ) : (
                      filteredMenuItems.map(item => {
                        const isAvailable = activeItemsStatus[item.id] !== false;
                        return (
                          <div 
                            key={item.id}
                            className={`bg-white rounded-2xl p-2.5 flex gap-2.5 shadow-xs border border-slate-100 transition-opacity duration-300 ${!isAvailable ? 'opacity-50' : 'opacity-100'}`}
                          >
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 rounded-xl object-cover shrink-0 bg-slate-100" 
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center gap-1">
                                  <span className={`w-2.5 h-2.5 border flex items-center justify-center shrink-0 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                                  </span>
                                  <h5 className="font-display font-bold text-slate-900 text-xs truncate leading-none">{item.name}</h5>
                                </div>
                                <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-normal">{item.description}</p>
                              </div>
                              <div className="flex items-center justify-between mt-1">
                                <span className="font-display font-bold text-slate-900 text-xs">₹{item.price}</span>
                                {isAvailable ? (
                                  <button
                                    id={`add-btn-${item.id}`}
                                    onClick={() => openCustomization(item)}
                                    className="bg-brand-50 hover:bg-brand-100 text-brand-700 hover:text-brand-800 text-[10px] font-bold px-2.5 py-1.5 rounded-lg border border-brand-200 transition-colors active:scale-95"
                                  >
                                    + ADD
                                  </button>
                                ) : (
                                  <span className="text-[10px] font-bold text-red-500 uppercase bg-red-50 px-2 py-1 rounded">Out of Stock</span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Cart Bar at bottom if cart not empty */}
                  {cart.length > 0 && (
                    <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-bold uppercase text-slate-400">Total Bill</span>
                        <p className="font-display font-extrabold text-slate-900 text-sm">₹{getCartSubtotal()}</p>
                      </div>
                      <button
                        id="checkout-bottom-btn"
                        onClick={() => setMobileScreen('cart')}
                        className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold font-display px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5"
                      >
                        <span>View Cart & Pay</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* SCREEN: SMART CART STATE */}
              {mobileScreen === 'cart' && (
                <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
                  <div className="bg-white p-3 pt-6 border-b border-slate-100 flex items-center gap-2">
                    <button onClick={() => setMobileScreen('menu')} className="text-slate-600 font-bold hover:text-slate-900 px-1 text-sm">✕</button>
                    <h4 className="font-display font-bold text-slate-900 text-sm">Review Your Cart</h4>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-3">
                    {cart.length === 0 ? (
                      <div className="text-center py-12 bg-white rounded-2xl p-6 border border-slate-100">
                        <ShoppingCart className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                        <p className="text-xs text-slate-500 font-semibold">Your cart is empty!</p>
                        <button 
                          onClick={() => setMobileScreen('menu')} 
                          className="text-brand-600 text-xs font-bold underline mt-2"
                        >
                          Browse Menu
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="bg-white rounded-2xl p-3 shadow-xs border border-slate-100 space-y-3">
                          {cart.map((entry, index) => {
                            const addOnsCost = entry.selectedAddOns.reduce((sum, curr) => sum + curr.price, 0);
                            const unitPrice = entry.item.price + addOnsCost;
                            return (
                              <div key={index} className="flex gap-2.5 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-display font-semibold text-slate-900 text-xs truncate">{entry.item.name}</h5>
                                  {entry.selectedAddOns.length > 0 && (
                                    <p className="text-[10px] text-slate-400 mt-0.5">
                                      Add-ons: {entry.selectedAddOns.map(a => `${a.name} (+₹${a.price})`).join(', ')}
                                    </p>
                                  )}
                                  {entry.instructions && (
                                    <p className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded italic mt-1 font-mono">
                                      💬 "{entry.instructions}"
                                    </p>
                                  )}
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="font-display font-bold text-slate-900 text-xs">₹{unitPrice * entry.quantity}</span>
                                  <div className="flex items-center gap-2 mt-1 bg-slate-100 rounded-lg p-1">
                                    <span className="text-[10px] text-slate-500 px-1">Qty: {entry.quantity}</span>
                                    <button 
                                      onClick={() => removeFromCart(index)} 
                                      className="text-red-500 hover:text-red-700 text-[10px] font-bold px-1"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bill Breakdown */}
                        <div className="bg-white rounded-2xl p-3 shadow-xs border border-slate-100 space-y-2">
                          <h6 className="font-display font-bold text-slate-800 text-[11px] uppercase tracking-wider">Bill Details</h6>
                          <div className="flex justify-between text-xs text-slate-600">
                            <span>Subtotal</span>
                            <span>₹{getCartSubtotal()}</span>
                          </div>
                          <div className="flex justify-between text-xs text-slate-600">
                            <span>GST (5% Restaurant Tax)</span>
                            <span>₹{Math.round(getCartSubtotal() * 0.05)}</span>
                          </div>
                          <div className="border-t border-slate-100 pt-2 flex justify-between font-display font-extrabold text-slate-900 text-sm">
                            <span>Grand Total</span>
                            <span>₹{getCartSubtotal() + Math.round(getCartSubtotal() * 0.05)}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="p-3 bg-white border-t border-slate-100">
                      <button
                        id="checkout-pay-btn"
                        onClick={handleCheckout}
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold font-display py-3 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm cursor-pointer"
                      >
                        <span>Proceed to Pay</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* SCREEN: UPI PAYMENT SIMULATOR */}
              {mobileScreen === 'upi' && (
                <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden justify-between">
                  <div className="bg-white p-3 pt-6 border-b border-slate-100 flex items-center gap-2">
                    <button onClick={() => setMobileScreen('cart')} className="text-slate-600 font-bold hover:text-slate-900 px-1 text-sm">← Back</button>
                    <h4 className="font-display font-bold text-slate-900 text-sm">Direct UPI Payment</h4>
                  </div>

                  <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                    {/* QR Code Graphic */}
                    <div className="text-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm max-w-[240px] mx-auto">
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">Scan & Pay securely</p>
                      <div className="w-36 h-36 bg-slate-100 border-2 border-slate-200 flex items-center justify-center rounded-lg mx-auto relative">
                        {/* Dynamic custom UPI QR simulation */}
                        <div className="grid grid-cols-4 gap-1.5 p-2 opacity-90">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-5 h-5 rounded-xs ${
                                (i * 7 % 4 === 0) || i === 0 || i === 3 || i === 12 || i === 15 
                                  ? 'bg-slate-900' 
                                  : 'bg-transparent'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="absolute text-[8px] font-bold bg-brand-600 text-white px-1 py-0.5 rounded-md border border-brand-500/20 shadow-xs">
                          ₹{getCartSubtotal() + Math.round(getCartSubtotal() * 0.05)}
                        </span>
                      </div>
                      <p className="font-display font-bold text-slate-900 text-xs mt-3">CAFE SARTHI UPI ID</p>
                      <p className="text-[9px] font-mono text-slate-400 mt-0.5">menusarthi@upi (Direct Bank settlement)</p>
                    </div>

                    {/* Choose App Option */}
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 font-medium">Or select any installed UPI app:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'gpay', name: 'Google Pay', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                          { id: 'phonepe', name: 'PhonePe', color: 'bg-purple-50 text-purple-800 border-purple-200' },
                          { id: 'paytm', name: 'Paytm', color: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
                          { id: 'bhim', name: 'BHIM UPI', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' }
                        ].map(app => (
                          <button
                            key={app.id}
                            onClick={() => setSelectedPaymentApp(app.id)}
                            className={`p-2.5 rounded-xl border text-center text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                              selectedPaymentApp === app.id 
                                ? 'ring-2 ring-brand-500 border-brand-500 bg-brand-50/50' 
                                : 'bg-white text-slate-700 border-slate-200'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-brand-500" />
                            {app.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white border-t border-slate-100 space-y-1.5">
                    <button
                      id="simulate-payment-btn"
                      onClick={handlePayAndOrder}
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold font-display py-3 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Simulate Payment (₹{getCartSubtotal() + Math.round(getCartSubtotal() * 0.05)})
                    </button>
                    <p className="text-[10px] text-slate-400 text-center">🔐 Secure bank-to-bank UPI payment sandbox</p>
                  </div>
                </div>
              )}

              {/* SCREEN: LIVE ORDER TRACKING STATE */}
              {mobileScreen === 'tracking' && activeCustomerOrder && (
                <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden justify-between">
                  <div className="bg-white p-3 pt-6 border-b border-slate-100 text-center">
                    <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Payment Successful ✅
                    </span>
                    <h4 className="font-display font-bold text-slate-900 text-sm mt-1">Live Order Status</h4>
                    <p className="text-[10px] font-mono text-slate-400">Order ID: #{activeCustomerOrder.id}</p>
                  </div>

                  <div className="p-4 flex-1 overflow-y-auto space-y-5">
                    
                    {/* Live Tracker Steps Visual */}
                    <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-5">
                      {[
                        { key: 'received', title: 'Order Received', desc: 'Sent to kitchen for approval' },
                        { key: 'preparing', title: 'Preparing', desc: 'Chef is preparing your fresh order' },
                        { key: 'ready', title: 'Ready for Table', desc: 'Waiters are serving it now!' },
                        { key: 'completed', title: 'Completed', desc: 'Thank you! Enjoy your meal.' }
                      ].map((step, idx, arr) => {
                        const statusOrder: OrderStatus[] = ['received', 'preparing', 'ready', 'completed'];
                        const currentIdx = statusOrder.indexOf(activeCustomerOrder.status);
                        const stepIdx = statusOrder.indexOf(step.key as OrderStatus);
                        
                        const isDone = stepIdx < currentIdx;
                        const isActive = stepIdx === currentIdx;
                        const isPending = stepIdx > currentIdx;

                        return (
                          <div key={step.key} className="flex gap-3 relative">
                            {/* Connector line */}
                            {idx < arr.length - 1 && (
                              <div className={`absolute left-3.5 top-7 bottom-[-20px] w-0.5 ${
                                stepIdx < currentIdx ? 'bg-brand-500' : 'bg-slate-200'
                              }`} />
                            )}

                            {/* Circle Indicator */}
                            <div className={`w-7.5 h-7.5 rounded-full flex items-center justify-center border-2 shrink-0 ${
                              isDone ? 'bg-brand-500 border-brand-500 text-white' :
                              isActive ? 'bg-brand-100 border-brand-500 text-brand-600 animate-pulse-slow' :
                              'bg-white border-slate-200 text-slate-300'
                            }`}>
                              {isDone ? (
                                <Check className="w-4 h-4 font-bold" />
                              ) : (
                                <span className="text-xs font-bold">{idx + 1}</span>
                              )}
                            </div>

                            {/* Content text */}
                            <div className="flex-1 min-w-0">
                              <h5 className={`font-display font-bold text-xs ${
                                isActive ? 'text-brand-600 font-extrabold' : 'text-slate-800'
                              }`}>
                                {step.title}
                              </h5>
                              <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">{step.desc}</p>
                            </div>

                            {/* Animated Pulse or Loader */}
                            {isActive && (
                              <div className="flex items-center shrink-0">
                                <span className="flex h-2 w-2 relative">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Order Revision CTA (Highlighting requested feature: order placed wrong order? Allow editing before kitchen starts) */}
                    {activeCustomerOrder.status === 'received' && (
                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center space-y-2">
                        <p className="text-[10px] text-amber-800 font-medium">
                          💡 **Placed wrong order?** You can recall and edit your order before the kitchen starts preparing it.
                        </p>
                        <button
                          id="revise-order-btn"
                          onClick={handleReviseOrder}
                          className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-amber-300 flex items-center gap-1.5 mx-auto transition-colors"
                        >
                          <RefreshCcw className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                          Revise / Recall Order
                        </button>
                      </div>
                    )}

                    {/* Summary of ordered items */}
                    <div className="bg-slate-100 rounded-2xl p-3 text-xs space-y-1">
                      <p className="font-bold text-slate-700">Order Summary:</p>
                      {activeCustomerOrder.items.map((i, k) => (
                        <div key={k} className="flex justify-between text-[11px] text-slate-500">
                          <span>{i.item.name} x{i.quantity}</span>
                          <span>₹{i.item.price * i.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-white border-t border-slate-100">
                    <button
                      id="order-more-btn"
                      onClick={() => setMobileScreen('menu')}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold font-display py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Browse & Order More
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL FOR CUSTOMIZATION (ADDED) */}
              {selectedCustomizingItem && (
                <div className="absolute inset-0 bg-black/60 z-50 flex items-end justify-center">
                  <div className="bg-white w-full rounded-t-3xl max-h-[85%] overflow-y-auto p-4 space-y-4 animate-slide-up shadow-2xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 border flex items-center justify-center shrink-0 ${selectedCustomizingItem.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${selectedCustomizingItem.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </span>
                          <h4 className="font-display font-extrabold text-slate-900 text-sm">{selectedCustomizingItem.name}</h4>
                        </div>
                        <p className="font-display font-bold text-brand-600 text-xs mt-1">₹{selectedCustomizingItem.price}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedCustomizingItem(null)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 leading-normal">{selectedCustomizingItem.description}</p>

                    {/* Add-ons */}
                    {selectedCustomizingItem.addOns && selectedCustomizingItem.addOns.length > 0 && (
                      <div className="space-y-2 border-t border-slate-100 pt-3">
                        <h5 className="font-display font-bold text-slate-800 text-xs">Customizations (Add-ons)</h5>
                        <div className="space-y-1.5">
                          {selectedCustomizingItem.addOns.map(addon => {
                            const isSelected = tempAddOns.some(a => a.name === addon.name);
                            return (
                              <button
                                key={addon.name}
                                id={`addon-opt-${addon.name.replace(/\s+/g, '-').toLowerCase()}`}
                                onClick={() => toggleTempAddOn(addon)}
                                className={`w-full text-left flex items-center justify-between p-2 rounded-xl text-xs border ${
                                  isSelected 
                                    ? 'border-brand-500 bg-brand-50 text-brand-900' 
                                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                <span>{addon.name}</span>
                                <span className="font-semibold">+₹{addon.price}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Special Instructions */}
                    <div className="space-y-1.5 border-t border-slate-100 pt-3">
                      <h5 className="font-display font-bold text-slate-800 text-xs">Special Instructions</h5>
                      <input 
                        id="special-instruction-input"
                        type="text"
                        value={tempInstructions}
                        onChange={(e) => setTempInstructions(e.target.value)}
                        placeholder="E.g., No onions, Make it spicy, serve extra mayo..."
                        className="w-full text-xs border border-slate-200 focus:border-brand-500 outline-none px-3 py-2 rounded-xl"
                      />
                    </div>

                    {/* Quantity & Button */}
                    <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl">
                        <button 
                          onClick={() => setTempQty(Math.max(1, tempQty - 1))}
                          className="bg-white hover:bg-slate-200 text-slate-800 w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">{tempQty}</span>
                        <button 
                          onClick={() => setTempQty(tempQty + 1)}
                          className="bg-white hover:bg-slate-200 text-slate-800 w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs"
                        >
                          +
                        </button>
                      </div>

                      <button
                        id="add-customized-cart-btn"
                        onClick={handleAddToCart}
                        className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold font-display px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Add To Cart • ₹{(selectedCustomizingItem.price + tempAddOns.reduce((sum, curr) => sum + curr.price, 0)) * tempQty}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Screen Bar */}
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-slate-800 rounded-full z-40" />
          </div>
        </div>

        {/* RIGHT COLUMN: RESTAURANT WEB ADMIN DASHBOARD (7 columns on lg) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="text-center lg:text-left mb-3">
            <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-1.5 justify-center lg:justify-start">
              <Monitor className="w-4 h-4 text-brand-600" />
              2. Restaurant Kitchen & Analytics Dashboard (Admin View)
            </h4>
            <p className="text-xs text-slate-500">Google Apps Script Powered Cloud Center</p>
          </div>

          {/* Admin Dashboard Mockup Frame */}
          <div className="flex-1 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl flex flex-col min-h-[500px]">
            
            {/* Dashboard Header Bar */}
            <div className="bg-slate-950 p-4 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-display font-semibold text-white text-sm">Cafe Sarthi Central Admin</h5>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5 font-mono">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                    ONLINE & SYNCED • Table 4 Connected
                  </p>
                </div>
              </div>

              {/* Sales Metrics Mini Pill */}
              <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-mono">
                <div className="text-slate-400">
                  Daily Sales: <span className="text-brand-500 font-bold">₹{getTotalSales()}</span>
                </div>
                <div className="text-slate-400">
                  GST Reports: <span className="text-blue-400 font-bold">₹{getGSTCollected()}</span>
                </div>
              </div>
            </div>

            {/* Sub-navigation Tabs */}
            <div className="bg-slate-950/40 px-4 border-b border-slate-800 flex justify-between items-center py-1">
              <div className="flex gap-2">
                {[
                  { id: 'orders', name: 'Live Orders Queue', icon: Bell, badge: ordersHistory.filter(o => o.status !== 'completed').length },
                  { id: 'menu-stock', name: 'Menu Inventory', icon: Settings },
                  { id: 'analytics', name: 'Sales & GST Audit', icon: TrendingUp }
                ].map(tab => (
                  <button
                    key={tab.id}
                    id={`admin-tab-${tab.id}`}
                    onClick={() => setAdminTab(tab.id as any)}
                    className={`flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium border-b-2 transition-colors ${
                      adminTab === tab.id 
                        ? 'border-brand-500 text-brand-500 bg-slate-800/10' 
                        : 'border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.name}</span>
                    {tab.badge !== undefined && tab.badge > 0 && (
                      <span className="bg-brand-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-950 text-slate-200">
              
              {/* TAB: LIVE ORDERS QUEUE */}
              {adminTab === 'orders' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <h6 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-400">
                      Real-Time Incoming Orders Queue
                    </h6>
                    <div className="relative w-full sm:w-48 bg-slate-900 rounded-lg px-2.5 py-1 flex items-center border border-slate-800">
                      <Search className="w-3.5 h-3.5 text-slate-500 mr-1.5" />
                      <input 
                        id="admin-order-search"
                        type="text" 
                        value={adminSearchQuery}
                        onChange={(e) => setAdminSearchQuery(e.target.value)}
                        placeholder="Search table, order id..." 
                        className="bg-transparent border-none outline-none text-xs w-full text-slate-300 placeholder-slate-600"
                      />
                    </div>
                  </div>

                  {ordersHistory.length === 0 ? (
                    <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 border-dashed p-6">
                      <ChefHat className="w-10 h-10 text-slate-700 mx-auto mb-2 animate-pulse" />
                      <p className="text-slate-500 text-xs">No active orders in the kitchen. Add items on the simulated phone on the left to fire a live order!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ordersHistory
                        .filter(o => o.id.toLowerCase().includes(adminSearchQuery.toLowerCase()) || o.tableNumber.toLowerCase().includes(adminSearchQuery.toLowerCase()))
                        .map(order => (
                          <div 
                            key={order.id} 
                            className={`bg-slate-900 border rounded-2xl p-3.5 space-y-3 transition-all duration-300 ${
                              order.status === 'received' 
                                ? 'border-amber-500/50 bg-amber-950/10 shadow-[0_0_15px_rgba(245,158,11,0.05)]' :
                              order.status === 'preparing' 
                                ? 'border-brand-500/40 bg-orange-950/10' :
                              order.status === 'ready' 
                                ? 'border-green-500/40 bg-green-950/10' :
                              'border-slate-800'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className={`w-2 h-2 rounded-full ${
                                    order.status === 'received' ? 'bg-amber-400' :
                                    order.status === 'preparing' ? 'bg-brand-500 animate-spin' :
                                    order.status === 'ready' ? 'bg-green-500' : 'bg-slate-400'
                                  }`} />
                                  <span className="font-display font-extrabold text-sm text-white">{order.tableNumber}</span>
                                </div>
                                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Order ID: #{order.id}</p>
                              </div>
                              <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                                order.status === 'received' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20' :
                                order.status === 'preparing' ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20' :
                                order.status === 'ready' ? 'bg-green-500/15 text-green-400 border border-green-500/20' :
                                'bg-slate-800 text-slate-400'
                              }`}>
                                {order.status}
                              </span>
                            </div>

                            {/* Ordered Items list */}
                            <div className="space-y-1.5 border-t border-b border-slate-800 py-2">
                              {order.items.map((entry, idx) => (
                                <div key={idx} className="text-xs">
                                  <div className="flex justify-between text-slate-200">
                                    <span className="font-medium">{entry.item.name} <span className="text-slate-500">x{entry.quantity}</span></span>
                                    <span className="font-mono text-slate-400">₹{entry.item.price * entry.quantity}</span>
                                  </div>
                                  {entry.selectedAddOns.length > 0 && (
                                    <div className="text-[10px] text-slate-400">
                                      ↳ Add-ons: {entry.selectedAddOns.map(a => `${a.name} (+₹${a.price})`).join(', ')}
                                    </div>
                                  )}
                                  {entry.instructions && (
                                    <div className="text-[10px] text-amber-400/90 italic mt-0.5 bg-slate-950 p-1 rounded font-mono">
                                      "💬 {entry.instructions}"
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-400 font-mono">Payment: <strong className="text-green-400 uppercase text-[10px]">Direct UPI ✅</strong></span>
                              <span className="font-display font-extrabold text-white">Total: ₹{order.total}</span>
                            </div>

                            {/* Action Operations */}
                            <div className="grid grid-cols-2 gap-2 pt-1">
                              {order.status === 'received' && (
                                <>
                                  <button
                                    id={`admin-decline-${order.id}`}
                                    onClick={() => handleDeclineOrder(order.id)}
                                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[11px] font-bold py-2 rounded-xl border border-red-500/20 transition-colors"
                                  >
                                    Decline
                                  </button>
                                  <button
                                    id={`admin-accept-${order.id}`}
                                    onClick={() => updateOrderStatus(order.id, 'preparing')}
                                    className="bg-brand-600 hover:bg-brand-700 text-white text-[11px] font-bold py-2 rounded-xl transition-all shadow-md"
                                  >
                                    Accept & Cook
                                  </button>
                                </>
                              )}

                              {order.status === 'preparing' && (
                                <button
                                  id={`admin-ready-${order.id}`}
                                  onClick={() => updateOrderStatus(order.id, 'ready')}
                                  className="col-span-2 bg-gradient-to-r from-brand-600 to-orange-500 hover:from-brand-700 hover:to-orange-600 text-white text-[11px] font-bold py-2 rounded-xl transition-all shadow-md"
                                >
                                  🔔 Mark as Ready to Serve
                                </button>
                              )}

                              {order.status === 'ready' && (
                                <button
                                  id={`admin-complete-${order.id}`}
                                  onClick={() => updateOrderStatus(order.id, 'completed')}
                                  className="col-span-2 bg-green-600 hover:bg-green-700 text-white text-[11px] font-bold py-2 rounded-xl transition-all shadow-md"
                                >
                                  ✓ Mark Completed
                                </button>
                              )}

                              {order.status === 'completed' && (
                                <span className="col-span-2 text-center text-[10px] text-slate-500 bg-slate-900/40 p-2 rounded-xl border border-slate-800">
                                  Served & Closed successfully
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB: MENU INVENTORY */}
              {adminTab === 'menu-stock' && (
                <div className="space-y-4">
                  <div>
                    <h6 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-400">
                      Live Menu Stock & Pricing Management
                    </h6>
                    <p className="text-[11px] text-slate-500 mt-0.5">Changes made here will instantly reflect on the left customer smartphone menu screen.</p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                          <th className="p-3">Item Details</th>
                          <th className="p-3">Category</th>
                          <th className="p-3">Base Price</th>
                          <th className="p-3 text-center">Status Control</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {menuItems.map(item => {
                          const isAvailable = activeItemsStatus[item.id] !== false;
                          return (
                            <tr key={item.id} className="hover:bg-slate-900/40">
                              <td className="p-3 flex items-center gap-2.5">
                                <img src={item.image} alt="" className="w-8 h-8 rounded-lg object-cover bg-slate-800" referrerPolicy="no-referrer" />
                                <div>
                                  <p className="font-semibold text-slate-200">{item.name}</p>
                                  <p className="text-[10px] text-slate-500">{item.isVeg ? 'Veg' : 'Non-Veg'}</p>
                                </div>
                              </td>
                              <td className="p-3 text-slate-400">{item.category}</td>
                              <td className="p-3 font-mono font-bold text-slate-200">
                                ₹{item.price}
                              </td>
                              <td className="p-3 text-center">
                                <button
                                  id={`stock-toggle-${item.id}`}
                                  onClick={() => handleToggleStock(item.id)}
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                                    isAvailable 
                                      ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20' 
                                      : 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20'
                                  }`}
                                >
                                  {isAvailable ? <ToggleRight className="w-4 h-4 text-green-400" /> : <ToggleLeft className="w-4 h-4 text-red-400" />}
                                  <span>{isAvailable ? 'In Stock' : 'Out of Stock'}</span>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB: SALES & GST AUDIT */}
              {adminTab === 'analytics' && (
                <div className="space-y-5">
                  <div>
                    <h6 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-400">
                      Accounting Auditor & CA Export Panel
                    </h6>
                    <p className="text-[11px] text-slate-500 mt-0.5">Complies with Indian tax structures (CGST/SGST audit trail reports).</p>
                  </div>

                  {/* Analytics bento box */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase font-bold text-slate-500">Total Net Revenue</span>
                        <span className="bg-green-500/10 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-bold">100% Secure</span>
                      </div>
                      <p className="font-display font-extrabold text-white text-2xl mt-3">₹{(getTotalSales() * 0.95).toFixed(0)}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Settled instantly to bank account</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase font-bold text-slate-500">GST Collected (5%)</span>
                        <span className="bg-blue-500/10 text-blue-400 text-[10px] px-2 py-0.5 rounded-full font-bold">Tax Compliant</span>
                      </div>
                      <p className="font-display font-extrabold text-white text-2xl mt-3">₹{getGSTCollected()}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Audit ready CGST / SGST records</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase font-bold text-slate-500">Table Turnover Boost</span>
                        <span className="bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded-full font-bold">MenuSarthi Impact</span>
                      </div>
                      <p className="font-display font-extrabold text-white text-2xl mt-3">+22%</p>
                      <p className="text-[10px] text-slate-500 mt-1">Faster orders, zero waiting</p>
                    </div>
                  </div>

                  {/* Actions & Export */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center space-y-4">
                    <div className="max-w-md mx-auto">
                      <h7 className="font-display font-bold text-slate-200 text-sm block">Export GST Reports for CA</h7>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Download full transaction spreadsheets. Easily send records to your auditor/CA for zero-headache quarterly filing.
                      </p>
                    </div>
                    <button
                      id="export-ca-btn"
                      onClick={handleDownloadCAReport}
                      className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold font-display px-5 py-2.5 rounded-xl flex items-center gap-1.5 mx-auto transition-transform active:scale-95 cursor-pointer shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      Export Spreadsheet (.CSV)
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
