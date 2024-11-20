import React from 'react';
import Hero from '../components/Hero';
import HowToStart from '../components/HowToStart';
import ClientReactivation from '../components/ClientReactivation';
import NotifyAndInform from '../components/NotifyAndInform';
import CollectDebt from '../components/CollectDebt';
import IndustrySection from '../components/IndustrySection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <HowToStart />
      <ClientReactivation />
      <NotifyAndInform />
      <CollectDebt />
      <IndustrySection />
    </main>
  );
};

export default HomePage;