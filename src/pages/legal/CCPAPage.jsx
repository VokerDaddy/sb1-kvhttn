import React from 'react';
import { Link } from 'react-router-dom';

const CCPAPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#230635] mb-8">CCPA Privacy Notice</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Your Rights Under CCPA</h2>
          <p>Under the California Consumer Privacy Act (CCPA), California residents have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to know what personal information is collected</li>
            <li>Right to know whether personal information is sold or disclosed</li>
            <li>Right to say no to the sale of personal information</li>
            <li>Right to access personal information</li>
            <li>Right to request deletion of personal information</li>
            <li>Right to equal service and price</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Information We Collect</h2>
          <p>Categories of personal information we've collected in the past 12 months:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identifiers (name, email, phone number, etc.)</li>
            <li>Commercial information</li>
            <li>Internet activity information</li>
            <li>Geolocation data</li>
            <li>Audio and electronic information</li>
            <li>Professional or employment information</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">How to Exercise Your Rights</h2>
          <p>You can submit requests to exercise your CCPA rights by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Emailing privacy@mimis.ai</li>
            <li>Calling our toll-free number: [Phone Number]</li>
            <li>Submitting a request through our website</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Verification Process</h2>
          <p>
            To protect your privacy, we will verify your identity before responding to your request. 
            We may ask you to provide additional information for verification purposes.
          </p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Non-Discrimination</h2>
          <p>
            We will not discriminate against you for exercising your CCPA rights. However, we may offer different prices, rates, levels, or qualities of goods or services if the difference is reasonably related to the value provided by your personal information.
          </p>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              For questions about your CCPA rights or to submit a request, please contact us at{' '}
              <a href="mailto:privacy@mimis.ai" className="text-[#64007B] hover:text-[#C80D83]">
                privacy@mimis.ai
              </a>
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600">
              Related policies:{' '}
              <Link to="/privacy" className="text-[#64007B] hover:text-[#C80D83]">Privacy Policy</Link>{' '}
              | <Link to="/cookie-policy" className="text-[#64007B] hover:text-[#C80D83]">Cookie Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCPAPage;