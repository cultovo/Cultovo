
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Zap } from "lucide-react";

export default function PricingSection({ onScrollToContact }) {
  const packages = [
  {
    name: "MVP Launch",
    price: "£3,500",
    description: "Perfect for testing your idea without breaking the bank",
    features: [
    "WebApp Front End",
    "WebApp Back-office",
    "SRS Documentation",
    "Logo and Branding"],

    popular: false,
    ctaText: "Start Small & Smart"
  },
  {
    name: "MVP Plus",
    price: "£5,000",
    description: "Everything you need plus business strategy to succeed",
    features: [
    "WebApp Front End",
    "WebApp Back-office",
    "SRS Documentation",
    "Business Plan & Research",
    "Logo and Branding"],

    popular: true,
    ctaText: "Most Popular Choice"
  },
  {
    name: "MVP Ultimate",
    price: "£8,500",
    description: "The complete package - go big and reach everyone",
    features: [
    "WebApp Front End",
    "WebApp Back-office",
    "SRS Documentation",
    "Business Plan & Research",
    "Deck",
    "Logo and Branding",
    "iOS and Android Application"],

    popular: false,
    ctaText: "Go All In"
  }];


  return (
    <section id="pricing" className="bg-slate-50 py-24 from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, <span className="text-indigo-700">Affordable Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No surprises, no hidden costs, no complicated contracts. Just clear, honest pricing
              that makes your app dream totally achievable. Pick what works for your budget!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) =>
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 ${
              pkg.popular ?
              "ring-2 ring-indigo-500 transform scale-105" :
              "hover:transform hover:scale-105"}`
              }>

                {/* Popular package banner removed from here */}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-indigo-700 font-bold">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 ml-2">that&apos;s it!</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-500" />
                    Everything Included:
                  </h4>
                  
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) =>
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3">

                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <Button
                onClick={onScrollToContact} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full py-4 text-lg rounded-xl transition-all duration-300 group bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl">






                  {pkg.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Popular package value proposition removed from here */}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16">

            <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Got Something Unique in Mind?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your idea might need something totally different - and that&apos;s exciting!
                Let&apos;s chat about creating something custom that&apos;s perfect for your vision.
              </p>
              <Button
                onClick={onScrollToContact}
                variant="outline"
                className="rounded-xl px-8 py-3 border-2 hover:bg-blue-50">

                Let&apos;s Talk About Your Idea
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
