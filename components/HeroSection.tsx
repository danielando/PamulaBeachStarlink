import React from 'react';

interface HeroSectionProps {
  onScrollToPlans: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPlans }) => {
  return (
    <div className="relative bg-black text-white overflow-hidden h-[600px] flex items-center">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/50 bg-brand-500/20 text-brand-100 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
          Discovery Parks Pambula Beach
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
          Stay Connected at<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-300">
            Pambula Beach Holiday Park
          </span>
        </h1>
        
        <p className="max-w-xl text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed font-light drop-shadow-md">
          Premium Wi-Fi for your cabin or campsite. Share your holiday moments, check the surf, or relax with a movie after a day at the beach.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onScrollToPlans}
            className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white text-lg font-bold rounded-full shadow-lg shadow-brand-900/40 transition-all transform hover:-translate-y-1"
          >
            Get Online Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;