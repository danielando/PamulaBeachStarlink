import React from 'react';

export interface WifiPlan {
  id: string;
  name: string;
  price: number;
  durationLabel: string;
  description: string;
  popular?: boolean;
}

export interface Feature {
  icon: React.ReactNode;
  text: string;
}

export type ViewState = 'landing' | 'success';