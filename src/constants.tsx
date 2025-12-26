import React from 'react';
import { WifiPlan, Feature } from './types';

// Mock Stripe Publishable Key
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_mock_key_12345';

export const WIFI_PLANS: WifiPlan[] = [
  {
    id: 'price_1day',
    name: '1 Day Pass',
    price: 8,
    durationLabel: '24 Hours',
    description: 'Perfect for a quick surf check and emails.',
    popular: false,
  },
  {
    id: 'price_3day',
    name: 'Long Weekend',
    price: 20,
    durationLabel: '3 Days',
    description: 'Ideal for your Sapphire Coast getaway.',
    popular: true,
  },
  {
    id: 'price_7day',
    name: 'Weekly Holiday',
    price: 35,
    durationLabel: '7 Days',
    description: 'Stay connected for the whole family trip.',
    popular: false,
  },
];

export const FEATURES_LIST: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Share Holiday Snaps"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Check Local Attractions"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    text: "Keep the Kids Entertained"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    text: "Video Call Home"
  }
];