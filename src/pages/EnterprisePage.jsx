import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EnterprisePage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#230635] mb-6"
          >
            Enterprise Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Scalable AI voice solutions designed for large organizations with complex needs and high call volumes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#230635]">Built for Scale</h2>
            <p className="text-gray-600">
              Handle millions of calls simultaneously with our enterprise-grade infrastructure. Our solution scales seamlessly with your business needs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited concurrent calls</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>99.99% uptime guarantee</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Global infrastructure</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#230635]">Enterprise Features</h2>
            <p className="text-gray-600">
              Advanced features designed specifically for enterprise needs, including custom integrations and dedicated support.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom AI model training</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced analytics and reporting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#64007B] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 priority support</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#64007B] to-[#C80D83] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Contact Center?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Mimis AI can transform your contact center operations with enterprise-grade AI voice technology.
          </p>
          <Link
            to="https://calendly.com/mimis-ai/30min"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#64007B] bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterprisePage;