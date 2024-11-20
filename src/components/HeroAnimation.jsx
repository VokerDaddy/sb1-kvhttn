import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Vapi from '@vapi-ai/web';

const ASSISTANT_ID = '9b8055da-ff58-4bdd-8aa8-05bbc3c14493';
const API_KEY = 'af449405-9f0e-41ba-8243-a62b3ef86ae1';

export default function HeroAnimation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapiInstance, setVapiInstance] = useState(null);

  const handleClick = async () => {
    if (isCallActive && vapiInstance) {
      vapiInstance.stop();
      setIsCallActive(false);
      setVapiInstance(null);
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      try {
        const vapi = new Vapi(API_KEY);

        vapi.on('call-start', () => {
          setIsLoading(false);
          setIsCallActive(true);
        });

        vapi.on('call-end', () => {
          setIsCallActive(false);
          setVapiInstance(null);
        });

        vapi.on('error', (error) => {
          console.error('Call error:', error);
          setIsLoading(false);
          setIsCallActive(false);
          setVapiInstance(null);
        });

        await vapi.start(ASSISTANT_ID);
        setVapiInstance(vapi);
      } catch (error) {
        console.error('Call initialization failed:', error);
        setIsLoading(false);
        setVapiInstance(null);
      }
    }
  };

  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col items-center justify-center">
      {/* Main content area */}
      <div className="w-full max-w-sm text-center space-y-6">
        {/* Main call button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
          className="w-[150px] h-[150px] bg-gradient-to-br from-[#64007B] to-[#C80D83] rounded-full border-2 border-white outline-none relative group cursor-pointer shadow-xl disabled:opacity-75 disabled:cursor-wait mx-auto"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <PhoneIcon 
              className={`w-16 h-16 text-white transition-transform duration-300 ${
                isCallActive ? 'rotate-135' : ''
              }`}
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
          </div>
          <div className="absolute inset-0 rounded-full border-[5px] border-[#255cff] animate-ripple opacity-30" />
          <div className="absolute inset-0 rounded-full border-[5px] border-[#255cff] animate-ripple-delayed opacity-20" />
        </motion.button>

        {/* Title and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#64007B] bg-white/90 backdrop-blur-sm rounded-xl py-3 px-6 inline-block shadow-lg">
            {isLoading ? 'Connecting...' : isCallActive ? 'In call with Mimis' : 'Talk to Mimis'}
          </h3>
          <p className="text-base md:text-lg text-gray-700 bg-white/90 backdrop-blur-sm rounded-xl py-3 px-6 leading-relaxed shadow-lg">
            {isLoading ? 'Please wait' : isCallActive ? 'Click to end call' : 'Experience our AI assistant live - right here in your browser!'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}