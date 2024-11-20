import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#230635] mb-8">About Mimis AI</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Mimis AI is revolutionizing contact centers with advanced AI voice technology, making customer interactions more efficient and natural than ever before.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div>
              <h2 className="text-2xl font-bold text-[#230635] mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To transform customer service by making AI voice assistants accessible to businesses of all sizes, enabling them to provide exceptional customer experiences 24/7.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#230635] mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the global standard for AI-powered voice communication, bridging the gap between businesses and their customers through natural, efficient conversations.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg my-16">
            <h2 className="text-2xl font-bold text-[#230635] mb-6">Why Choose Mimis AI?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced AI technology that understands context and nuance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 availability with consistent service quality</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Seamless integration with existing systems</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Scalable solution that grows with your business</span>
              </li>
            </ul>
          </div>

          <div className="my-16">
            <h2 className="text-2xl font-bold text-[#230635] mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#64007B] mb-3">Innovation</h3>
                <p className="text-gray-600">Constantly pushing the boundaries of what's possible with AI voice technology.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#64007B] mb-3">Reliability</h3>
                <p className="text-gray-600">Providing consistent, high-quality service that businesses can depend on.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#64007B] mb-3">Customer Focus</h3>
                <p className="text-gray-600">Putting our customers' needs at the heart of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;