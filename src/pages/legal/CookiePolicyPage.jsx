import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicyPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#230635] mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
          </p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-bold text-[#64007B] mt-6 mb-3">Essential Cookies</h3>
          <p>Required for the website to function properly. These cannot be disabled.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authentication</li>
            <li>Security</li>
            <li>Basic functionality</li>
          </ul>

          <h3 className="text-xl font-bold text-[#64007B] mt-6 mb-3">Analytics Cookies</h3>
          <p>Help us understand how visitors interact with our website.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Page views</li>
            <li>Navigation paths</li>
            <li>Error tracking</li>
          </ul>

          <h3 className="text-xl font-bold text-[#64007B] mt-6 mb-3">Marketing Cookies</h3>
          <p>Used to track visitors across websites to display relevant advertisements.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ad personalization</li>
            <li>Conversion tracking</li>
            <li>Behavioral profiling</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings and our cookie consent preferences. 
            Note that disabling certain cookies may limit your ability to use some features of our website.
          </p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Third-Party Cookies</h2>
          <p>
            We use services from third parties that may set their own cookies. 
            These third parties have their own privacy policies which we encourage you to review.
          </p>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              For questions about our Cookie Policy, please contact us at{' '}
              <a href="mailto:privacy@mimis.ai" className="text-[#64007B] hover:text-[#C80D83]">
                privacy@mimis.ai
              </a>
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600">
              Related policies:{' '}
              <Link to="/privacy" className="text-[#64007B] hover:text-[#C80D83]">Privacy Policy</Link>{' '}
              | <Link to="/gdpr" className="text-[#64007B] hover:text-[#C80D83]">GDPR</Link>{' '}
              | <Link to="/ccpa" className="text-[#64007B] hover:text-[#C80D83]">CCPA</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;