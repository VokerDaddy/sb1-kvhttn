import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Answer', 'Transfer', 'Schedule', 'Analyze'];

export default function AnimatedHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      <div className="flex flex-wrap">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#BD0076] mr-2"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
        <span>your</span>
      </div>
      <span className="block">calls with Mimis AI</span>
    </h1>
  );
}