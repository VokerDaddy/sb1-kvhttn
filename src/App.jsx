import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import EnterprisePage from './pages/EnterprisePage';
import AboutPage from './pages/AboutPage';
import SecurityPage from './pages/SecurityPage';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import GDPRPage from './pages/legal/GDPRPage';
import CCPAPage from './pages/legal/CCPAPage';
import AccessibilityPage from './pages/legal/AccessibilityPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-[72px] md:pt-[80px]"> {/* Add padding to prevent content overlap */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/ccpa" element={<CCPAPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;