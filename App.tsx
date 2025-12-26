import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SuccessPage from './pages/SuccessPage';
import { ViewState } from './types';

const App: React.FC = () => {
  // Using simple state-based routing for this single-page flow
  // to ensure maximum compatibility and zero setup friction.
  const [view, setView] = useState<ViewState>('landing');

  // Helper to scroll top when view changes
  const changeView = (newView: ViewState) => {
    window.scrollTo(0, 0);
    setView(newView);
  };

  return (
    <>
      {view === 'landing' && (
        <LandingPage onSuccess={() => changeView('success')} />
      )}
      {view === 'success' && (
        <SuccessPage onBack={() => changeView('landing')} />
      )}
    </>
  );
};

export default App;