import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockClosedIcon, ServerIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const SecurityPage = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Enterprise-Grade Security",
      description: "Our infrastructure is built on secure foundations with multiple layers of protection."
    },
    {
      icon: LockClosedIcon,
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols."
    },
    {
      icon: ServerIcon,
      title: "Private Cloud Infrastructure",
      description: "Dedicated infrastructure with physical and network security measures."
    },
    {
      icon: DocumentTextIcon,
      title: "Compliance & Certifications",
      description: "Compliant with GDPR, HIPAA, SOC 2, and other major security standards."
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#230635] mb-6"
          >
            Enterprise-Grade Security
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your data security is our top priority. We implement multiple layers of protection to ensure your information remains safe and confidential.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4">
                <feature.icon className="w-8 h-8 text-[#64007B]" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#64007B] to-[#C80D83] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Security Measures</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Infrastructure Security</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    DDoS protection
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    WAF (Web Application Firewall)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 monitoring
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Security</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    End-to-end encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Regular security audits
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Data backup & recovery
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="https://calendly.com/mimis-ai/30min"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-[#64007B] bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                Schedule a Security Review
                <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;