export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  actionType?: 'roi' | 'demo' | 'faq';
}

export interface DemoBooking {
  restaurantName: string;
  ownerName: string;
  phone: string;
  date: string;
  timeSlot: string;
  restaurantType?: string;
  city?: string;
}

export interface RestaurantCategory {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  metrics: string;
  badge: string;
}

export interface WhiteLabelConfig {
  brandName: string;
  customDomain: string;
  primaryColor: string;
  logoType: string;
  enabledModules: string[];
}

export interface TrustQuestion {
  question: string;
  answer: string;
  category: 'security' | 'growth' | 'branding' | 'support' | 'migration';
  icon: string;
}

export interface Testimonial {
  id: string;
  ownerName: string;
  role: string;
  restaurantName: string;
  location: string;
  image: string;
  quote: string;
  growthStat: string;
  statLabel: string;
  category: string;
}
