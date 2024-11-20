import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function HeroAnimation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
    if (!window.vapiSDK && !isSDKLoaded) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
      script.defer = true;
      script.async = true;
      script.onload = () => {
        console.log('Vapi SDK loaded');
        setIsSDKLoaded(true);
      };
      script.onerror = (error) => {
        console.error('Failed to load Vapi SDK:', error);
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [isSDKLoaded]);

  const handleClick = async () => {
    if (!window.vapiConfig || !window.vapiSDK) {
      console.error('Vapi configuration or SDK not found');
      return;
    }

    if (isCallActive) {
      setIsCallActive(false);
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      try {
        const vapiInstance = window.vapiSDK.run({
          apiKey: window.vapiConfig.apiKey,
          assistant: window.vapiConfig.assistant,
          enableDevelopmentMode: true,
          config: {
            position: "center",
            offset: "20px",
            width: "150px",
            height: "150px"
          }
        });

        vapiInstance.on('call-start', () => {
          setIsLoading(false);
          setIsCallActive(true);
        });

        vapiInstance.on('call-end', () => {
          setIsCallActive(false);
        });

        vapiInstance.on('error', (error) => {
          console.error('Vapi error:', error);
          setIsLoading(false);
          setIsCallActive(false);
        });
      } catch (error) {
        console.error('Failed to start call:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative w-full h-full min-h-[300px]">
      <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center bg-cover opacity-[0.93]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading || !isSDKLoaded}
          className="w-[150px] h-[150px] bg-gradient-to-br from-[#64007B] to-[#C80D83] rounded-full border-2 border-white outline-none relative group cursor-pointer shadow-lg disabled:opacity-75 disabled:cursor-wait"
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
        <div className="mt-4 space-y-1">
          <p className="text-[#64007B] font-medium text-lg">
            {isLoading ? 'Connecting...' : isCallActive ? 'In call with Mimis' : 'Talk to Mimis'}
          </p>
          <p className="text-gray-600 text-sm">
            {isLoading ? 'Please wait' : isCallActive ? 'Click to end call' : 'Try our AI assistant right from your browser'}
          </p>
        </div>
      </div>
    </div>
  );
}