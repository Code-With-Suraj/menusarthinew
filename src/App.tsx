import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhiteLabelCustomizer from './components/WhiteLabelCustomizer';
import FounderStory from './components/FounderStory';
import WhoIsItForSection from './components/WhoIsItForSection';
import PlatformEcosystem from './components/PlatformEcosystem';
import LiveAppGallery from './components/LiveAppGallery';
import DirectDeliverySection from './components/DirectDeliverySection';
import ROICalculator from './components/ROICalculator';
import SocialProofSection from './components/SocialProofSection';
import TrustAndObjections from './components/TrustAndObjections';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalEmotionalCTA from './components/FinalEmotionalCTA';
import ConversationalSarthi from './components/ConversationalSarthi';
import DemoBookingModal from './components/DemoBookingModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-[#FF5C35] selection:text-white">
      
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onBookDemo={handleOpenDemo} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onBookDemo={handleOpenDemo} />

        {/* 2. Interactive White Label & Custom Engine */}
        <WhiteLabelCustomizer onBookDemo={handleOpenDemo} />

        {/* 3. Founder Story & Mission */}
        <FounderStory onBookDemo={handleOpenDemo} />

        {/* 4. Who It Is Built For (Audience Spectrum) */}
        <WhoIsItForSection onBookDemo={handleOpenDemo} />

        {/* 5. Platform Growth Ecosystem (4 Pillars) */}
        <PlatformEcosystem onBookDemo={handleOpenDemo} />

        {/* 6. Live App Gallery Simulator */}
        <LiveAppGallery />

        {/* 7. Direct Delivery & GPS Module */}
        <DirectDeliverySection onBookDemo={handleOpenDemo} />

        {/* 8. Profit Savings Calculator */}
        <ROICalculator onBookDemo={handleOpenDemo} />

        {/* 9. Social Proof & Client Testimonials */}
        <SocialProofSection onBookDemo={handleOpenDemo} />

        {/* 10. Natural Trust & Security Guarantees */}
        <TrustAndObjections onBookDemo={handleOpenDemo} />

        {/* 11. Transparent Pricing Tiers */}
        <PricingSection onBookDemo={handleOpenDemo} />

        {/* 12. FAQ Section */}
        <FAQSection onBookDemo={handleOpenDemo} />

        {/* 13. Final Emotional Closing CTA */}
        <FinalEmotionalCTA onBookDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 text-center text-xs text-slate-500 font-mono space-y-3">
        <div className="flex justify-center items-center gap-3 text-slate-400 font-bold">
          <span>MenuSarthi</span>
          <span>•</span>
          <span>Restaurant Growth Platform</span>
          <span>•</span>
          <span>Google Cloud & Firebase Powered</span>
        </div>
        <p>
          © {new Date().getFullYear()} MenuSarthi. All rights reserved. Helping independent restaurants, cafes, and cloud kitchens build their own digital identity.
        </p>
      </footer>

      {/* Floating AI Conversational Widget */}
      <ConversationalSarthi />

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

    </div>
  );
}
