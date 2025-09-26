
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContactInquiry } from "@/api/entities";
import { SendEmail } from "@/api/integrations";
import { Send, CheckCircle, Calendar } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ContactSection({ onScheduleCall }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project_details: "",
    package_interest: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await ContactInquiry.create(formData);

      // Send email notification
      const packageLabels = {
        mvp_starter: "MVP Launch (£3,500)",
        mvp: "MVP Plus (£5,000)",
        mvp_full: "MVP Ultimate (£8,500)",
        custom: "Custom Project"
      };

      const timelineLabels = {
        asap: "ASAP",
        "1_3_months": "1-3 months",
        "3_6_months": "3-6 months",
        "6_months_plus": "6+ months",
        flexible: "Flexible"
      };

      const emailBody = `
New Project Inquiry from Cultovo Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Package Interest: ${packageLabels[formData.package_interest] || formData.package_interest}
Timeline: ${timelineLabels[formData.timeline] || formData.timeline || 'Not specified'}

Project Details:
${formData.project_details}

---
Submitted from: Cultovo Website Contact Form
      `;

      await SendEmail({
        to: "info@cuzo.io",
        subject: `New Project Inquiry - ${formData.name}`,
        body: emailBody,
        from_name: "Cultovo Website"
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        project_details: "",
        package_interest: "",
        timeline: ""
      });
    } catch (err) {
      setError("There was an error submitting your request. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 text-center shadow-2xl">

              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've received your project inquiry and our team will review your requirements carefully. 
                You can expect to hear from us within 24 hours with next steps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="px-8 py-3 rounded-xl">

                  Submit Another Request
                </Button>
                
                <Button
                  onClick={onScheduleCall} className="bg-indigo-700 text-primary-foreground px-8 py-3 text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 hover:bg-blue-700 rounded-xl">


                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>);

  }

  return (
    <section id="contact" className="bg-indigo-700 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make It Happen?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Your brilliant app idea deserves to become real. Fill out the form below 
              and let&apos;s start turning your dream into something amazing that people will love!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">

            {error &&
            <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            }

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Smith"
                    required
                    className="rounded-xl border-gray-200 focus:border-indigo-500" />

                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@company.com"
                    required
                    className="rounded-xl border-gray-200 focus:border-indigo-500" />

                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder="Your Company"
                  className="rounded-xl border-gray-200 focus:border-indigo-500" />

              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Package Interest *
                  </label>
                  <Select onValueChange={(value) => handleChange('package_interest', value)} required>
                    <SelectTrigger className="rounded-xl border-gray-200">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mvp_starter">MVP Starter (£3,500)</SelectItem>
                      <SelectItem value="mvp">MVP (£5,000)</SelectItem>
                      <SelectItem value="mvp_full">MVP Full (£8,500)</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Timeline
                  </label>
                  <Select onValueChange={(value) => handleChange('timeline', value)}>
                    <SelectTrigger className="rounded-xl border-gray-200">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1_3_months">1-3 months</SelectItem>
                      <SelectItem value="3_6_months">3-6 months</SelectItem>
                      <SelectItem value="6_months_plus">6+ months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Project Details *
                </label>
                <Textarea
                  value={formData.project_details}
                  onChange={(e) => handleChange('project_details', e.target.value)}
                  placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                  rows={4}
                  required
                  className="rounded-xl border-gray-200 focus:border-indigo-500" />

              </div>

              <Button
                type="submit"
                disabled={isSubmitting} className="bg-indigo-700 text-white px-4 py-4 text-lg font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 w-full hover:bg-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">


                {isSubmitting ?
                "Sending..." :

                <>
                    Send Project Request
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                }
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Prefer to talk directly? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => window.open('mailto:hello@cultovo.com', '_blank')}
                  className="rounded-xl">

                  Email: hello@cultovo.com
                </Button>
                <Button
                  variant="outline"
                  onClick={onScheduleCall}
                  className="rounded-xl">

                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
