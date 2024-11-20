import React from 'react';
import { motion } from 'framer-motion';

const TechSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#230635] mb-6"
            >
              Tech we have built for you...
            </motion.h2>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-[#BD3078] bg-white rounded-lg shadow-lg mb-6">
                <div className="flex items-start">
                  <div className="text-[#BD3078] mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live appointment scheduling</h3>
                    <p className="text-gray-600">Connect your scheduling software, define the information you need Mimis AI to know, and Mimis AI will automatically answer and schedule your customers in.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-l-4 border-[#BD3078] bg-white rounded-lg shadow-lg mb-6">
                <div className="flex items-start">
                  <div className="text-[#BD3078] mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automatic phone follow ups</h3>
                    <p className="text-gray-600">Reduce your no show percentage by letting Mimis AI automatically call, and reschedule appointments.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-l-4 border-[#BD3078] bg-white rounded-lg shadow-lg mb-6">
                <div className="flex items-start">
                  <div className="text-[#BD3078] mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">FAQ voice engine</h3>
                    <p className="text-gray-600">Stop wasting time answering questions around pricing, hours, locations and let Mimis AI's FAQ engine answer your customers most asked questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="/images/dashboard.webp" 
                alt="Mimis AI Dashboard"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;