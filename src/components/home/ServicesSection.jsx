
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, FileText, TrendingUp, Palette, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
  {
    icon: Globe,
    title: "Web Apps That Work",
    description: "Beautiful, user-friendly web applications that your customers will love using",
    features: ["Easy to use interface", "Works on all devices", "Fast and reliable", "Customer dashboard"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps for Everyone",
    description: "Get your app on iPhone and Android - reach your customers wherever they are",
    features: ["iOS App Store", "Google Play Store", "Native experience", "Offline features"]
  },
  {
    icon: FileText,
    title: "All the Paperwork Done",
    description: "We handle the boring technical documentation so you can focus on your business",
    features: ["Clear project plan", "Technical specifications", "User guides", "Support documentation"]
  },
  {
    icon: Palette,
    title: "Brand Identity & Logo",
    description: "Professional branding that makes your app look amazing and trustworthy",
    features: ["Custom logo design", "Brand colors & fonts", "App store graphics", "Marketing materials"]
  },
  {
    icon: TrendingUp,
    title: "Business Strategy Help",
    description: "Not sure how to turn your app into a business? We'll help you figure it out",
    features: ["Market research", "Business model advice", "Pricing strategy", "Launch planning"]
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description: "Your app will be built to last, with security and reliability built right in",
    features: ["Data protection", "Secure payments", "Regular backups", "24/7 monitoring"]
  }];


  return (
    <section id="services" className="bg-slate-50 py-24 from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Handle <span className="text-indigo-700">Everything</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the first sketch to the moment your app goes live, we take care of 
              every single detail. You focus on your brilliant idea - we'll handle the rest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">

                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-500" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="bg-indigo-400 mr-3 w-1.5 h-1.5 rounded-full"></div>
                      {feature}
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
