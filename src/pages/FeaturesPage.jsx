import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  const features = [
    {
      title: "Voice AI Engine",
      description: "Advanced natural language processing for human-like conversations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows effortlessly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive insights and reporting for better decision making",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#230635] mb-6">Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Mimis AI's advanced features can transform your contact center operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-[#64007B] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#230635] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#230635]">Core Capabilities</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#64007B] mb-2">Natural Conversations</h3>
                <p className="text-gray-600">Advanced AI that understands context and maintains natural dialogue flow.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#64007B] mb-2">Multi-language Support</h3>
                <p className="text-gray-600">Communicate with customers in their preferred language.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#64007B] mb-2">Custom Workflows</h3>
                <p className="text-gray-600">Design and implement custom conversation flows for your specific needs.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#230635]">Advanced Features</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#64007B] mb-2">Sentiment Analysis</h3>
                <p className="text-gray-600">Real-time analysis of customer sentiment for better service.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#64007B] mb-2">Voice Authentication</h3>
                <p className="text-gray-600">Secure customer verification through voice biometrics.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#64007B] mb-2">Smart Routing</h3>
                <p className="text-gray-600">Intelligent call routing based on context and priority.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="http://www.calendly.com/Mimis AI"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#64007B] rounded-full hover:bg-[#C80D83] transition-colors"
          >
            See Features in Action
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;