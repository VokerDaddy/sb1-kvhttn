import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HowToStart = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-medium text-[#2D2D2D] mb-16"
        >
          How to Start
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Discuss the case",
              description: "Book a free demo and let us discuss how we can tailor our agent development to suit your business needs, and at a price that fits your budget.",
              step: "01"
            },
            {
              title: "Agent Development",
              description: "We collaborate with you to align the dialog script and scenario. Our team builds an agent, launches trial testing and makes final ajustings. Then we integrate the Agent with your infrastructure.",
              step: "02"
            },
            {
              title: "Going live",
              description: "We launch a pilot program and provide comprehensive AI monitoring for each client. Our team ensures your company's scalability by adding more lines and agents as needed.",
              step: "03"
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium text-[#9C70E6]">
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.description}
              </p>
              <div className="flex items-center gap-3 pt-4">
                <span className="text-2xl font-medium">{step.step}</span>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            to="https://calendly.com/mimis-ai/30min"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#9C70E6] rounded-full hover:bg-[#8B5FD5] transition-colors"
          >
            Book a Free demo
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToStart;