import React from 'react';
import { Link } from 'react-router-dom';
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
          <p className="text-white/90 text-xl md:text-2xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
            Humans Can't Compete. Mimis.AI Is the New Standard 
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="https://calendly.com/mimis-ai/30min"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-[#64007B] rounded-full hover:bg-[#C80D83] transition-colors shadow-lg"
            >
              Book a demo
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column - Hero Animation */}
        <div className="relative">
          <HeroAnimation />
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative mt-12">
        <TrustedBy />
      </div>
    </section>
  );
}