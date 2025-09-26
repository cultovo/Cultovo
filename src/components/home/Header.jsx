
import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header({ onScrollToContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    const sections = ["hero", "about", "services", "process", "portfolio", "pricing", "contact"]; // Added "pricing" here
    let currentSection = "hero";

    sections.forEach((sectionId) => {
      // For "hero" section, we might want to check against the document body or a specific hero div.
      // If "hero" is truly the root, then 'document.getElementById("root")' might work,
      // but typically 'hero' would be a section element itself.
      // Assuming "hero" has an ID of "hero" like others.
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop - 100; // Offset for header height
        if (window.scrollY >= sectionTop) {
          currentSection = sectionId;
        }
      }
    });

    setActiveSection((prevSection) => {
      if (prevSection !== currentSection) {
        return currentSection;
      }
      return prevSection;
    });
  }, []); // Empty dependency array because state updates are functional, and handleScroll does not depend on external mutable values.

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // handleScroll is now stable due to useCallback

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "process", name: "Process" },
  { id: "portfolio", name: "Portfolio" },
  { id: "pricing", name: "Packages" }];


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"}`
      }
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>

      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbcfe7f9dca4798a252b0b/d8fe661b6_Cultovo-Logo---darks.png"
            alt="Cultovo Logo"
            className="h-5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />


          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)} className="text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-indigo-600">






                {link.name}
              </button>
            )}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={onScrollToContact} className="bg-indigo-700 text-primary-foreground px-6 py-2 text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 hover:bg-blue-700 rounded-xl">


              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu can be added here */}
            <Button
              variant="ghost"
              onClick={onScrollToContact}>

              Contact
            </Button>
          </div>
        </div>
      </div>
    </motion.header>);

}