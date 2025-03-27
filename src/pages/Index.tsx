
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AgeVerificationPopup from '../components/AgeVerificationPopup';
import { toast } from 'sonner';

const Index = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [ageVerified, setAgeVerified] = useState(false);

  const handleConfirmAge = () => {
    setShowAgeVerification(false);
    setAgeVerified(true);
    localStorage.setItem('ageVerified', 'true');
    toast.success('Age verification successful!');
  };

  useEffect(() => {
    // Check if user has already verified their age
    const isVerified = localStorage.getItem('ageVerified') === 'true';
    if (isVerified) {
      setShowAgeVerification(false);
      setAgeVerified(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {showAgeVerification && <AgeVerificationPopup onConfirm={handleConfirmAge} />}
      
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ageVerified ? 1 : 0, y: ageVerified ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
            Welcome to Your Premium Experience
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the future of digital interaction with our cutting-edge platform.
            Designed with precision, elegance, and attention to detail.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Feature cards would go here */}
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: ageVerified ? 1 : 0, y: ageVerified ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              >
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-pink-500 rounded-md"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Feature {i}</h3>
                <p className="text-gray-400">
                  Experience incredible digital interactions with our cutting-edge technology.
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ageVerified ? 1 : 0, y: ageVerified ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
