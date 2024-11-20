import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const acceptAll = () => {
    setIsVisible(false);
  };

  const acceptEssential = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. 
              Read our <Link to="/cookie-policy" className="text-[#64007B] hover:text-[#C80D83]">Cookie Policy</Link> to learn more.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-[#64007B] rounded-md hover:bg-[#C80D83] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;