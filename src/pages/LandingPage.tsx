import React, { useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import PlanCard from '../components/PlanCard';
import Footer from '../components/Footer';
import { WIFI_PLANS, FEATURES_LIST } from '../constants';
import { WifiPlan } from '../types';
import { initiateCheckout } from '../services/paymentService';

interface LandingPageProps {
  onSuccess: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSuccess }) => {
  const plansRef = useRef<HTMLDivElement>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanSelect = async (plan: WifiPlan) => {
    try {
      setLoadingId(plan.id);
      await initiateCheckout(plan);
      onSuccess();
    } catch (error) {
      console.error("Checkout failed", error);
      alert("Something went wrong initializing checkout. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Hero */}
      <HeroSection onScrollToPlans={scrollToPlans} />

      {/* How it Works / Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Make the Most of Your Pambula Holiday</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Whether you're in a Deluxe Cabin or a powered safari tent, our park-wide network keeps you connected to what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES_LIST.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-200 transition-colors group">
                <div className="w-12 h-12 bg-white text-brand-500 shadow-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{feature.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" ref={plansRef} className="py-20 px-4 bg-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Holiday Access Pass</h2>
            <p className="text-gray-600">Simple, secure payment. Instant connection code.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WIFI_PLANS.map((plan) => (
              <PlanCard 
                key={plan.id} 
                plan={plan} 
                onSelect={handlePlanSelect} 
                isLoading={loadingId === plan.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Important Info / Terms */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto prose prose-orange">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Park Internet Guidelines</h3>
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-8">
            <p className="text-brand-900 font-medium m-0 flex items-start">
              <span className="text-xl mr-2">🏖️</span>
              This is a shared satellite service for Discovery Parks guests. 
              Please help us keep it fast for everyone by avoiding massive downloads.
            </p>
          </div>
          <ul className="space-y-4 text-gray-600 list-disc pl-5">
             <li><strong>Ideal For:</strong> Staying in touch, social media, maps, and standard streaming.</li>
             <li><strong>Please Avoid:</strong> Large game console updates or 4K downloads during peak evening times.</li>
             <li><strong>Coverage:</strong> The network covers the main park areas, cabins, and pool.</li>
             <li><strong>Support:</strong> If you have trouble connecting, visit reception during office hours.</li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gray-900 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Share Your Pambula Moments</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Get your access code instantly and show the world the kangaroos on the beach!
          </p>
          <button 
            onClick={scrollToPlans}
            className="px-8 py-4 bg-brand-500 text-white font-bold rounded-full hover:bg-brand-600 transition-colors shadow-lg shadow-brand-900/50"
          >
            Get Connected
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;