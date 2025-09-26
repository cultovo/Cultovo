
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
  {
    name: "London VIP Group",
    role: "Management Team",
    company: "London VIP Group",
    content: "Working with Cultovo transformed our entire chauffeuring operation. The robust back-office system they built handles everything seamlessly - from bookings to payments. Our weekly orders have grown to 230+ and our efficiency has doubled!",
    rating: 5,
    project: "End-to-End Back-Office System"
  },
  {
    name: "Secops Team",
    role: "Operations Director",
    company: "Secops - Close Protection",
    content: "We needed a fast, secure solution for our close protection services. Cultovo delivered both iOS and Android apps with a comprehensive back-office suite. The results speak for themselves - 300% more inquiries and much higher-value clients.",
    rating: 5,
    project: "iOS & Android App + Back-Office Suite"
  },
  {
    name: "Cuzo Team",
    role: "Founder",
    company: "Cuzo",
    content: "Cultovo helped us create an affordable website solution with AI lead monitoring. The platform we built together is serving customers from £19.99/mo and delivering exceptional customer satisfaction. Couldn't be happier with the partnership!",
    rating: 5,
    project: "WaaS Platform with AI Integration"
  }];


  const stats = [
  { value: "£3.5k+", label: "Starting From" },
  { value: "22+", label: "Dreams Realized" },
  { value: "100%", label: "Happy Customers" },
  { value: "3 months", label: "Typical Timeline" }];


  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hear From <span className="text-indigo-700">Dream Builders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These amazing people took a leap of faith with their ideas - and look what happened! 
              They're not tech experts, they're just like you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) =>
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative">

                <div className="absolute -top-4 left-8">
                  <div className="bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) =>
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-indigo-700 text-sm font-medium">{testimonial.company}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Project: {testimonial.project}</p>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat, index) =>
            <div key={stat.label} className="text-center">
                <div className="text-indigo-700 mb-2 font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}
