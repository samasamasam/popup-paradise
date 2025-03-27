
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AgeVerificationPopupProps {
  onConfirm: () => void;
}

const AgeVerificationPopup: React.FC<AgeVerificationPopupProps> = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay before showing the popup for a better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="age-verification-overlay">
      <motion.div 
        className="age-verification-modal max-w-md w-full bg-modal rounded-xl overflow-hidden animate-scale-up"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="px-6 py-6 text-center">
          <h2 className="text-blue-500 text-3xl font-bold mb-3">Warning 18+</h2>
          
          <p className="text-white text-base font-medium mb-2">This site is for adults only!</p>
          <p className="text-white text-base font-medium mb-4">It contains AI-generated adult content.</p>
          
          <div className="text-gray-300 text-sm mb-6 leading-relaxed">
            <p className="mb-4">
              By entering this website, you confirm that you are 18 years old or more. Providing inaccurate information about your age constitutes a violation of our Terms of Service. By using the site, you agree to our Terms of Service and Policies. Our privacy notice details how we collect and use your data, including your email address for marketing purposes. By continuing to use this site, you consent to receive email updates and offers from us, which you may opt out of at any time. We use cookies for basic analytics and spam detection. All content on this website is AI-generated! Any generations that resemble real people are purely coincidental.
            </p>
          </div>
          
          <div className="flex justify-center space-x-3 mb-6">
            <button 
              className="modal-link-button text-blue-500 border border-blue-500/30 rounded-md px-4 py-2 text-sm font-medium"
              onClick={() => window.open('#', '_blank')}
            >
              Terms of Service
            </button>
            <button 
              className="modal-link-button text-blue-500 border border-blue-500/30 rounded-md px-4 py-2 text-sm font-medium"
              onClick={() => window.open('#', '_blank')}
            >
              Privacy Notice
            </button>
            <button 
              className="modal-link-button text-blue-500 border border-blue-500/30 rounded-md px-4 py-2 text-sm font-medium"
              onClick={() => window.open('#', '_blank')}
            >
              Cookies
            </button>
          </div>
          
          <button 
            className="modal-button w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
            onClick={onConfirm}
          >
            I am over 18 - Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AgeVerificationPopup;
