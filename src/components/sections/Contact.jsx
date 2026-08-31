import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Globe, Sparkles, Calendar } from "lucide-react";
import { useCalendly } from "../../context/CalendlyContext";

export default function Contact() {
  const { openCalendly } = useCalendly();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-24 bg-steel-100/70 overflow-hidden">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-steel-200/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200/60 text-navy-600 font-sans font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
            <span>Contact Us</span>
          </div>
          
          <h2 className="text-navy-950 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            Get In Touch
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3 md:mt-4 leading-relaxed font-sans">
            We'll create tailored engineering, marine logistics, and environmental solutions to suit your project specifications across West Africa.
          </p>
        </div>

        {/* Floating Dual-Column Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-3xl lg:rounded-4xl p-4 sm:p-6 lg:p-6 xl:p-8 shadow-xl shadow-slate-200/60 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch"
        >
          
          {/* Left Column: Dark Navy Brand Contact Information Box */}
          <div className="max-[350px]:hidden lg:col-span-5 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-7 xl:p-10 flex flex-col justify-between relative overflow-hidden shadow-lg">
            
            {/* Ambient Graphic Accent */}
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-steel-400/15 blur-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-navy-500/20 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-white font-display font-semibold text-2xl lg:text-3xl tracking-tight mb-3">
                Contact Information
              </h3>
              <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed font-sans max-w-sm mb-8 lg:mb-12">
                Reach out directly to our operational management team for technical proposals, vessel chartering, or project support.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 text-sm font-sans">
                
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-steel-300 group-hover:text-white group-hover:bg-navy-500/40 transition-colors shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium uppercase tracking-wider mb-0.5">Call Us</span>
                    <a href="tel:+2348033088942" className="text-white font-semibold hover:text-steel-300 transition-colors block text-xs sm:text-sm">
                      +234 803 308 8942
                    </a>
                    <a href="tel:+2348027823939" className="text-slate-300 hover:text-white transition-colors block text-xs">
                      +234 802 782 3939
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-steel-300 group-hover:text-white group-hover:bg-navy-500/40 transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium uppercase tracking-wider mb-0.5">Email Us</span>
                    <a href="mailto:info@davemenergy.com" className="text-white font-semibold hover:text-steel-300 transition-colors block text-xs sm:text-sm">
                      info@davemenergy.com
                    </a>
                    <a href="mailto:e.akaluogbo@davemenergy.com" className="text-slate-300 hover:text-white transition-colors block text-xs">
                      e.akaluogbo@davemenergy.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-steel-300 group-hover:text-white group-hover:bg-navy-500/40 transition-colors shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium uppercase tracking-wider mb-0.5">Operational Base</span>
                    <span className="text-slate-200 text-xs sm:text-sm leading-snug block">
                      6b Udom Close, D/Line, Port Harcourt, Rivers State, Nigeria.
                    </span>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-steel-300 group-hover:text-white group-hover:bg-navy-500/40 transition-colors shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium uppercase tracking-wider mb-0.5">Official Portal</span>
                    <a href="https://www.davemenergyltd.com" target="_blank" rel="noopener noreferrer" className="text-steel-300 hover:text-white transition-colors block text-xs sm:text-sm font-semibold">
                      www.davemenergyltd.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Decorative bottom rounded shape matching reference image */}
            <div className="relative mt-12 z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-sans">
              <span>Davem Energy Resources Ltd.</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Systems Active" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-steel-50/80 border border-steel-200 rounded-3xl p-8 text-center flex flex-col items-center justify-center my-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-navy-950 font-display font-semibold text-2xl mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out. A Davem Energy representative will review your query and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-navy-500 hover:bg-navy-600 text-white font-sans text-xs font-semibold rounded-full transition-colors shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/90 rounded-xl text-navy-950 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/90 rounded-xl text-navy-950 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                      Your Subject / Service Required
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Marine Vessel Chartering / Soil Remediation Proposal"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/90 rounded-xl text-navy-950 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 font-sans">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project message or inquiry here..."
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/90 rounded-xl text-navy-950 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit & Book Meeting Buttons */}
                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-navy-500 hover:bg-navy-600 disabled:opacity-70 text-white font-sans text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer min-w-[160px]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => openCalendly(undefined, {
                        email: formData.email,
                        name: formData.name,
                        customAnswers: {
                          a1: formData.subject || "General Contact Inquiry"
                        }
                      })}
                      className="px-6 py-3.5 border-2 border-navy-500 text-navy-600 hover:bg-navy-50 font-sans text-sm font-semibold rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Calendar size={18} />
                      <span>Book Meeting / Schedule Call</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
