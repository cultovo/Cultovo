
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer({ onScheduleCall }) {
  const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }];


  const services = [
  "Custom Software Development",
  "Mobile App Development",
  "AI & Automation",
  "Cloud Solutions",
  "Digital Strategy",
  "Security & Compliance"];


  const handleScrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2">

              <div className="mb-6">
                 <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbcfe7f9dca4798a252b0b/d8fe661b6_Cultovo-Logo---darks.png"
                  alt="Cultovo Logo"
                  className="h-6" />

                <p className="text-gray-400 mt-4">Software Development Excellence</p>
              </div>
              
              <p className="text-gray-900 mb-6 leading-relaxed max-w-md">We transform innovative ideas into powerful software solutions that drive business growth and create lasting competitive advantages.


              </p>
              
              <div className="space-y-3">
                <div className="text-gray-400 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-900 lg:col-span-2">build@cultovo.com</span>
                </div>
                <div className="text-gray-400 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-900">020 3432 3534</span>
                </div>
                <div className="text-gray-400 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-900">London, UK</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>

              <h4 className="text-gray-900 mb-6 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) =>
                <li key={index}>
                    {link.name === "Contact" ? (
                      <button
                        onClick={onScheduleCall}
                        className="text-indigo-500 hover:text-black transition-colors duration-200">
                        {link.name}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleScrollToSection(link.href)}
                        className="text-indigo-500 hover:text-black transition-colors duration-200">
                        {link.name}
                      </button>
                    )}
                  </li>
                )}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>

              <h4 className="text-gray-900 mb-6 text-lg font-semibold">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) =>
                <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                )}
              </ul>
            </motion.div>
          </div>

          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-12 border-t border-gray-300">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 Cultovo Ltd. All rights reserved.

              </p>
              <p className="text-gray-400 text-sm">
                Built with ❤️ for businesses ready to innovate.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>);

}
