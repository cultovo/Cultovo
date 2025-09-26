
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const projects = [
  {
    title: "London VIP Group",
    category: "SME that's innovating",
    description: "A robust, end-to-end back-office system for London VIP Group to manage all aspects of their chauffeuring business.",
    image: "https://cultovo.com/wp-content/uploads/2025/06/Slice2-ezgif.com-png-to-webp-converter-scaled.webp",
    tags: ["Web App", "Back-office", "Payment Integration"],
    results: ["230+ weekly orders", "Doubled weekend sales", "98% customer satisfaction"]
  },
  {
    title: "Secops - Close Protection",
    category: "Critical Innovations",
    description: "A Fast and secure iOS and Android application with a full back-office suite to handle Close Protection Jobs.",
    image: "https://cultovo.com/wp-content/uploads/2023/10/id-secops-ezgif.com-jpg-to-webp-converter-scaled.webp",
    tags: ["iOS", "Android", "Booking System"],
    results: ["300% more inquiries", "Higher-value clients", "Streamlined workflow"]
  },
  {
    title: "Cuzo",
    category: "WaaS",
    description: "Affordable Websites with AI Lead Monitoring – from £19.99/mo",
    image: "https://cultovo.com/wp-content/uploads/2025/09/cuzoshowcasedark1-ezgif.com-png-to-webp-converter.webp",
    tags: ["Booking System", "Progress Tracking", "Payments"],
    results: ["Customer Satisfaction", "Zero double-bookings"]
  }];


  return (
    <section id="portfolio" className="bg-slate-50 py-24 from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real People, <span className="text-indigo-700">Real Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These aren't huge corporations - they're people just like you who had 
              a great idea and decided to make it happen. Now look at them go!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) =>
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer">

                <div className="relative overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="text-indigo-700 mb-2 text-sm font-medium">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) =>
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">

                        {tag}
                      </span>
                  )}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Amazing Results:</h4>
                    {project.results.map((result, resultIndex) =>
                  <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {result}
                      </div>
                  )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <p className="text-lg text-gray-600 mb-8">
              Your success story could be next! 
            </p>
            <Button
              size="lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-700 text-white px-8 py-4 text-lg font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">


              Start My Success Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>);

}
