import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeadline from './AnimatedHeadline';
import TrustedBy from './TrustedBy';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section className="relative bg-[#F4F7FF] pt-[100px] pb-[40px] px-[10%] z-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <AnimatedHeadline />
          <p className="text-[#5E6B76] text-xl font-medium leading-relaxed w-4/5">
            Humans Can’t Compete. Mimis.AI Is the New Standard 
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="https://app.phonely.ai/sign-up"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-[#64007B] rounded-full hover:bg-[#C80D83] transition-colors"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              to="http://www.calendly.com/phonely"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-[#64007B] bg-white border-2 border-[#64007B] rounded-full hover:bg-gray-50"
            >
              <span>Book a demo</span>
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative">
          <HeroAnimation />
        </div>
      </div>
      <div className="mt-8">
        <TrustedBy />
      </div>
    </section>
  );
}