import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#230635] mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Voice recordings and transcripts</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Improve and personalize user experience</li>
            <li>Process payments and transactions</li>
            <li>Send administrative information</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">3. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers and business partners</li>
            <li>Legal authorities when required</li>
            <li>Other parties with your consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">4. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">5. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information.</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">6. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.</p>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              For questions about our Privacy Policy, please contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@mimis.ai" className="text-[#64007B] hover:text-[#C80D83]">
                privacy@mimis.ai
              </a>
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600">
              Related policies:{' '}
              <Link to="/cookie-policy" className="text-[#64007B] hover:text-[#C80D83]">Cookie Policy</Link>{' '}
              | <Link to="/gdpr" className="text-[#64007B] hover:text-[#C80D83]">GDPR</Link>{' '}
              | <Link to="/ccpa" className="text-[#64007B] hover:text-[#C80D83]">CCPA</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;