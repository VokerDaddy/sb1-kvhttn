import React from 'react';
import { Link } from 'react-router-dom';

const GDPRPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#230635] mb-8">GDPR Compliance</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Your Rights Under GDPR</h2>
          <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Rights related to automated decision-making</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">How We Process Your Data</h2>
          <p>We process personal data only when we have a legal basis to do so:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent</li>
            <li>Contract fulfillment</li>
            <li>Legal obligations</li>
            <li>Legitimate interests</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Data Protection Measures</h2>
          <p>We implement appropriate technical and organizational measures to ensure data security:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of personal data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Staff training on data protection</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">International Transfers</h2>
          <p>
            When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard contractual clauses</li>
            <li>Adequacy decisions</li>
            <li>Binding corporate rules</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Data Protection Officer</h2>
          <p>
            We have appointed a Data Protection Officer who can be contacted for any GDPR-related queries:
          </p>
          <div className="mt-4">
            <p>Email: <a href="mailto:dpo@phonely.ai" className="text-[#64007B] hover:text-[#C80D83]">dpo@mimis.ai</a></p>
            <p>Address: [Company Address]</p>
          </div>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              To exercise your GDPR rights or for questions about our GDPR compliance, please contact our Data Protection Officer at{' '}
              <a href="mailto:dpo@phonely.ai" className="text-[#64007B] hover:text-[#C80D83]">
                dpo@mimis.ai
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

export default GDPRPage;