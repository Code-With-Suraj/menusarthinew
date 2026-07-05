export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isVeg: boolean;
  addOns?: { name: string; price: number }[];
}

export type OrderStatus = 'received' | 'preparing' | 'ready' | 'completed';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  selectedAddOns: { name: string; price: number }[];
  instructions: string;
}

export interface Order {
  id: string;
  tableNumber: string;
  items: OrderItem[];
  subtotal: number;
  gst: number;
  total: number;
  status: OrderStatus;
  paymentStatus: 'pending' | 'paid';
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  options?: string[];
  actionType?: 'roi_calc' | 'book_demo' | 'faq' | 'general';
}

export interface DemoBooking {
  restaurantName: string;
  ownerName: string;
  phone: string;
  date: string;
  timeSlot: string;
}
