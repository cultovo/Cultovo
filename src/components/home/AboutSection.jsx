
import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Handshake, Star } from "lucide-react";

export default function AboutSection() {
  const features = [
  {
    icon: Lightbulb,
    title: "We Get Your Vision",
    description: "Every great app starts with a spark of inspiration. We listen and understand exactly what you want to create"
  },
  {
    icon: Heart,
    title: "Built for Real People",
    description: "No tech jargon, no confusing processes. We make app development simple and enjoyable for everyone"
  },
  {
    icon: Handshake,
    title: "Your Success Partner",
    description: "We're not just developers - we're your cheerleaders, helping you succeed every step of the way"
  },
  {
    icon: Star,
    title: "Dreams Within Reach",
    description: "Fixed prices, clear timelines, and no hidden costs. Your app idea is closer than you think"
  }];


  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Hey There,
                  <span className="text-indigo-700"> Dream Builder!</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Remember that moment when you thought "There should be an app for that!" 
                  Well, guess what? You can actually make it happen, and it's not as 
                  complicated or expensive as you might think.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">We're Cultovo, and we specialise in helping small business owners, freelancers, and solo entrepreneurs like you turn brilliant ideas into real, working apps. No tech background needed - just bring your passion and vision!



                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6">

              {features.map((feature, index) =>
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer">

                  <div className="bg-indigo-100 mb-4 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}
