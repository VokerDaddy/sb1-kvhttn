import React from 'react';
import { Link } from 'react-router-dom';

const StartFree = () => {
  return (
    <section className="bg-gradient-to-br from-[#64007B] to-[#C80D83] py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-2/3 h-full bg-[#BD0076] rounded-l-full opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start for free today
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            See how easy phone support can be with <span className="font-semibold">Mimis AI</span>.
          </p>
          <Link
            to="https://app.Mimis AI.ai/sign-up"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#64007B] bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Started
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartFree;