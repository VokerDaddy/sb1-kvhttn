import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#230635] mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using Mimis AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily use Mimis AI's services for personal, non-commercial transitory viewing only.</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">3. Service Description</h2>
          <p>Mimis AI provides AI-powered voice communication services for businesses. We reserve the right to modify or discontinue any service at any time.</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">4. Privacy and Data Protection</h2>
          <p>Your use of Mimis AI's services is also governed by our <Link to="/privacy" className="text-[#64007B] hover:text-[#C80D83]">Privacy Policy</Link>.</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">5. Limitation of Liability</h2>
          <p>Mimis AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@mimis.ai" className="text-[#64007B] hover:text-[#C80D83]">
                legal@mimis.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;