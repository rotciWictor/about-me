import React, { createContext, useContext } from 'react';
import siteData from '../data/site.json';
import heroData from '../data/hero.json';
import aboutData from '../data/about.json';
import credibilityData from '../data/credibility.json';
import techStackData from '../data/techStack.json';
import contactData from '../data/contact.json';
import footerData from '../data/footer.json';
import caseStudyData from '../data/caseStudy.json';
import workProcessData from '../data/workProcess.json';

// Create the context
const SiteContext = createContext();

// Custom hook to use the site context
export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};

// Provider component
export const SiteProvider = ({ children }) => {
  // Combine all data
  const siteContent = {
    site: siteData,
    hero: heroData,
    about: aboutData,
    credibility: credibilityData,
    techStack: techStackData,
    contact: contactData,
    footer: footerData,
    caseStudy: caseStudyData,
    workProcess: workProcessData
  };

  // Helper function to get nested values with fallback
  const getValue = (path, fallback = '') => {
    return path.split('.').reduce((obj, key) => obj?.[key], siteContent) || fallback;
  };

  // Helper function to get WhatsApp link
  const getWhatsAppLink = (message) => {
    const number = contactData.whatsappNumber;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const value = {
    // Direct access to content
    content: siteContent,
    
    // Helper functions
    getValue,
    getWhatsAppLink,
    
    // Quick access to main sections
    site: siteData,
    hero: heroData,
    about: aboutData,
    credibility: credibilityData,
    techStack: techStackData,
    contact: contactData,
    footer: footerData,
    caseStudy: caseStudyData,
    workProcess: workProcessData
  };

  return (
    <SiteContext.Provider value={value}>
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
