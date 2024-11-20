import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1F3F] to-[#1A1A1A] pointer-events-none"></div>
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/Mimis%20(2).svg?alt=media&token=3fe5e924-0e5f-45e5-b7dd-154c81e97cf0" 
                alt="Mimis AI" 
                className="h-24 w-auto scale-[1.35] origin-left"
              />
              <p className="text-gray-400 text-sm">
                Mimis AI is revolutionizing contact centers with advanced voice AI technology, making customer interactions more efficient and natural than ever before.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/mimisai" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/mimisai" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
                <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="mailto:support@mimisai.com" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Mimis AI. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
                <Link to="/gdpr" className="text-gray-400 hover:text-white text-sm transition-colors">GDPR</Link>
                <Link to="/ccpa" className="text-gray-400 hover:text-white text-sm transition-colors">CCPA</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#64007B]/10 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-[#C80D83]/10 to-transparent blur-3xl pointer-events-none"></div>
    </footer>
  );
}