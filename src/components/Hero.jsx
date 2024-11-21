import React from 'react';
import AnimatedHeadline from './AnimatedHeadline';
import TrustedBy from './TrustedBy';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F7E0F9] via-[#E9D1FF] to-[#DFF2FF] py-16 md:py-20 px-[10%] z-0 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-400/20" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <AnimatedHeadline />
        </div>

        {/* Right Column - Hero Animation */}
        <div className="relative">
          <HeroAnimation />
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative mt-12">
        <h3 className="text-xl text-white/90 font-medium mb-8 text-left">
          Trusted by companies<br />
          big and small
        </h3>
        <TrustedBy />
      </div>
    </section>
  );
}