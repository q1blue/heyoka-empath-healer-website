import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import ServicesOverview from '../components/ServicesOverview';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;