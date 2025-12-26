import React from 'react';
import Footer from '../components/Footer';

interface SuccessPageProps {
  onBack: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onBack }) => {
  // In a real app, we would fetch the specific order details here.
  const wifiPassword = "DISCOVERY-GUEST-24"; 

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-brand-500 p-8 text-center">
            <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Payment Successful!</h1>
            <p className="text-brand-100 mt-2">Welcome to Discovery Parks Pambula Beach.</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="space-y-6">
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">Network Name (SSID)</p>
                <p className="text-lg font-bold text-gray-900 mb-4">Discovery_Pambula_Guest</p>
                
                <div className="h-px bg-gray-200 w-full mb-4"></div>

                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">Your Access Password</p>
                <div className="bg-white border border-gray-300 rounded-lg py-3 px-4 inline-block">
                  <code className="text-xl font-mono text-brand-600 font-bold select-all">
                    {wifiPassword}
                  </code>
                </div>
                <p className="text-xs text-gray-400 mt-2">Tap text to copy</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Connection Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                  <li>Open Wi-Fi settings on your device.</li>
                  <li>Find and select <strong>Discovery_Pambula_Guest</strong>.</li>
                  <li>Enter the password shown above.</li>
                  <li>Enjoy the Sapphire Coast online!</li>
                </ol>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex gap-3">
                 <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                 </svg>
                 <p className="text-xs text-orange-800">
                   A receipt has been sent to your email.
                 </p>
              </div>

              <button 
                onClick={onBack}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-full transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;