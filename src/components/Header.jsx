import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-3 md:p-2 md:px-8 gap-4 md:gap-8 h-[72px] md:h-[80px]" aria-label="Global">
        {/* Logo - Hidden on mobile */}
        <div className="hidden md:flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              className="h-12 md:h-16 w-auto scale-[1.35] origin-left"
              src="https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/Mimis%20(2).svg?alt=media&token=3fe5e924-0e5f-45e5-b7dd-154c81e97cf0"
              alt="Mimis AI"
            />
          </Link>
        </div>
        
        {/* Mobile Tagline */}
        <div className="flex-1 text-center">
          <h1 className="text-base font-bold bg-gradient-to-r from-[#64007B] to-[#C80D83] text-transparent bg-clip-text whitespace-nowrap">
            No.1 AI Voice Agency of 2024
          </h1>
        </div>

        {/* Book Demo Button */}
        <div className="flex">
          <Link
            to="https://calendly.com/mimis-ai/30min"
            className="rounded-full bg-[#64007B] px-3 md:px-4 py-2 text-sm font-semibold text-white hover:bg-[#C80D83] transition-colors whitespace-nowrap"
          >
            Book a Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}