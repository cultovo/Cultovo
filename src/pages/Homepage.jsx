import React, { useRef, useState } from "react";
import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import PortfolioSection from "../components/home/PortfolioSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PricingSection from "../components/home/PricingSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import ScheduleCallModal from "../components/modals/ScheduleCallModal";

export default function Homepage() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openScheduleCallModal = () => setIsCallModalOpen(true);
  const closeScheduleCallModal = () => setIsCallModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onScrollToContact={scrollToContact} />
      <HeroSection onScrollToContact={scrollToContact} />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection onScrollToContact={scrollToContact} />
      <ContactSection onScheduleCall={openScheduleCallModal} />
      <Footer onScheduleCall={openScheduleCallModal} />
      <ScheduleCallModal isOpen={isCallModalOpen} onClose={closeScheduleCallModal} />
    </div>
  );
}