import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeadline from './AnimatedHeadline';
import TrustedBy from './TrustedBy';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F7E0F9] via-white to-[#DFF2FF] pt-[100px] md:pt-[120px] pb-12 md:pb-16 px-4 md:px-[10%] z-0">
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7E0F9]/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center lg:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full max-w-2xl space-y-6 md:space-y-8 text-center lg:text-left">
            <AnimatedHeadline />
            <p className="text-[#5E6B76] text-lg md:text-xl font-medium leading-relaxed">
              Humans Can't Compete. Mimis.AI Is the New Standard 
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="https://calendly.com/mimis-ai/30min"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-[#64007B] rounded-full hover:bg-[#C80D83] transition-colors shadow-lg hover:shadow-xl"
              >
                Book a demo
                <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hero Animation - Mobile */}
          <div className="w-full max-w-lg lg:hidden">
            <div className="relative min-h-[300px] md:min-h-[400px]">
              <HeroAnimation />
            </div>
          </div>

          {/* Hero Animation - Desktop */}
          <div className="hidden lg:block lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%]">
            <HeroAnimation />
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <TrustedBy />
        </div>
      </div>
    </section>
  );
}