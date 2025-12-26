import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg">Pambula Beach Wi-Fi</h4>
          <p className="text-sm mt-2">Powered by CampConnect Satellite Services.</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
        
        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Pambula Beach Holiday Park.
        </div>
      </div>
    </footer>
  );
};

export default Footer;