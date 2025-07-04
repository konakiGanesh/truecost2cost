import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComparisonSection from '@/components/ComparisonSection';
import ProjectsSection from '@/components/ProjectsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ComparisonSection />
      <ProjectsSection />
      <AmenitiesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
