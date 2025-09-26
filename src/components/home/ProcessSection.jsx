
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Palette, Code2, Rocket, HeartHandshake } from "lucide-react";

export default function ProcessSection() {
  const steps = [
  {
    icon: MessageCircle,
    title: "Let's Chat",
    description: "Tell us about your amazing idea! We'll listen to your vision and help you shape it into something incredible.",
    details: ["Free consultation call", "Understand your goals", "Discuss your audience", "Share our ideas"]
  },
  {
    icon: Palette,
    title: "Design Magic",
    description: "We'll create beautiful designs that make your app look professional and feel amazing to use.",
    details: ["User-friendly layouts", "Your brand colors", "Mobile-first design", "Easy navigation"]
  },
  {
    icon: Code2,
    title: "Building Time",
    description: "This is where the magic happens! We'll code your app with care, keeping you updated every step of the way.",
    details: ["Regular progress updates", "Quality testing", "Performance optimization", "Security built-in"]
  },
  {
    icon: Rocket,
    title: "Launch Day",
    description: "The big moment! We'll help you launch your app and make sure everything works perfectly from day one.",
    details: ["App store submission", "Launch support", "Performance monitoring", "Quick fixes if needed"]
  },
  {
    icon: HeartHandshake,
    title: "We've Got You",
    description: "Your success is our success! We'll be here to help you grow and improve your app as your business grows.",
    details: ["Ongoing support", "Updates & improvements", "Growth advice", "Always here to help"]
  }];


  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="text-indigo-700">5-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No complicated tech talk, no confusing steps. Just a clear, friendly path 
              from your brilliant idea to a real, working app that people love.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) =>
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative">

                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-16 h-16 bg-white border-4 border-indigo-500 rounded-full flex items-center justify-center mb-6 relative z-10 mx-auto shadow-lg">
                        <step.icon className="w-7 h-7 text-indigo-500" />
                      </div>
                      <div className="bg-indigo-700 text-white text-xs font-bold absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) =>
                    <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                          <div className="bg-indigo-400 mr-2 w-1 h-1 rounded-full flex-shrink-0"></div>
                          {detail}
                        </li>
                    )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
