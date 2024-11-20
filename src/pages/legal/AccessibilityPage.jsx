import React from 'react';
import { Link } from 'react-router-dom';

const AccessibilityPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#230635] mb-8">Accessibility Statement</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Our Commitment</h2>
          <p>
            Mimis AI is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. 
            It defines three levels of conformance: Level A, Level AA, and Level AAA. 
            Mimis AI is partially conformant with WCAG 2.1 level AA.
          </p>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Accessibility Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keyboard navigation support</li>
            <li>ARIA landmarks and labels</li>
            <li>Alt text for images</li>
            <li>Proper heading structure</li>
            <li>Color contrast compliance</li>
            <li>Resizable text support</li>
            <li>Screen reader compatibility</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Assistive Technologies Supported</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Screen readers</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Known Limitations</h2>
          <p>
            Despite our best efforts to ensure accessibility of Mimis AI, there may be some limitations. 
            Below is a description of known limitations, and potential solutions. 
            Please contact us if you observe an issue not listed below.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Some older PDF documents are not properly tagged</li>
            <li>Some video content may lack closed captions</li>
            <li>Some third-party content may not be fully accessible</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#230635] mt-8 mb-4">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of Mimis AI. 
            Please let us know if you encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone: [Phone Number]</li>
            <li>E-mail: <a href="mailto:accessibility@mimis.ai" className="text-[#64007B] hover:text-[#C80D83]">accessibility@mimis.ai</a></li>
            <li>Visitor Address: [Company Address]</li>
          </ul>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              We try to respond to feedback within 2 business days. To help us better understand your needs, please specify the web page where you experienced issues and describe what accessibility problems you encountered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;