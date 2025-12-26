import React from 'react';
import { WifiPlan } from '../types';

interface PlanCardProps {
  plan: WifiPlan;
  onSelect: (plan: WifiPlan) => void;
  isLoading: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect, isLoading }) => {
  return (
    <div 
      className={`relative flex flex-col p-6 bg-white border-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
        plan.popular ? 'border-brand-500 scale-105 z-10' : 'border-gray-100 hover:border-brand-200'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
      </div>

      <div className="mb-6 flex items-baseline">
        <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
        <span className="text-gray-500 font-medium ml-1">AUD</span>
      </div>

      <ul className="mb-8 space-y-3 flex-1">
        <li className="flex items-center text-sm text-gray-600">
          <svg className="w-5 h-5 text-brand-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {plan.durationLabel} Access
        </li>
        <li className="flex items-center text-sm text-gray-600">
          <svg className="w-5 h-5 text-brand-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Unlimited Data (Fair Use)
        </li>
        <li className="flex items-center text-sm text-gray-600">
          <svg className="w-5 h-5 text-brand-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          1 Device
        </li>
      </ul>

      <button
        onClick={() => onSelect(plan)}
        disabled={isLoading}
        className={`w-full py-3 px-4 rounded-full font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
          plan.popular 
            ? 'bg-brand-600 text-white hover:bg-brand-700' 
            : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isLoading ? 'Processing...' : 'Choose Plan'}
      </button>
    </div>
  );
};

export default PlanCard;