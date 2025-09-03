import React from 'react';
import './globals.css';
import { SiteProvider } from './context/SiteContext';
import HeroSection from './components/sections/HeroSection';
import CredibilitySection from './components/sections/CredibilitySection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import CaseStudySection from './components/sections/CaseStudySection';
import WorkProcessSection from './components/sections/WorkProcessSection';
import TechStackSection from './components/sections/TechStackSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <SiteProvider>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <HeroSection />
        <CredibilitySection />
        <AboutSection />
        <ServicesSection />
        <CaseStudySection />
        <WorkProcessSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
              </div>
    </SiteProvider>
  );
}

export default App;
