import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  MessageSquare,
  User,
  Smartphone,
  Type,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Star,
  X,
} from "lucide-react";

const Contact = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form after a small delay or immediately
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      title: "Our Office",
      content: (
        <div className="flex flex-col">

          <p className="text-gray-400 font-medium">Jaipur, Rajasthan, India - 302021</p>
        </div>
      ),
      icon: <MapPin size={24} className="text-purple-400" />,
      color: "from-purple-500/20 to-transparent",
    },
    {
      title: "Call Us",
      content: (
        <div className="flex flex-col gap-1">
          <a href="tel:+917610000127" className="hover:text-purple-400 transition-colors">+919876543210 (Call)</a>

        </div>
      ),
      icon: <Phone size={24} className="text-blue-400" />,
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Email",
      content: "info@yourcompany.com",
      icon: <Mail size={24} className="text-pink-400" />,
      color: "from-pink-500/20 to-transparent",
    },
    {
      title: "Working Hours",
      content: "Mon - Sat | 10 AM - 7 PM",
      icon: <Clock size={24} className="text-orange-400" />,
      color: "from-orange-500/20 to-transparent",
    },
  ];

  const services = [
    "Mobile App Development",
    "Web Development",
    "Software Development",
    "UI/UX Design",
    "Digital Marketing",
    "Other",
  ];

  return (
    <div
      className="min-h-screen selection:bg-purple-500 selection:text-white"
      style={{
        background:
          "linear-gradient(to right, #0A0510, #3C3243, #434456, #283645, #1A2533)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
      </div>

      {/* ⭐ Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-[#0a0510]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0b0612]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 text-center shadow-3xl overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full -mt-20"></div>
              
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  Quote Request Sent! 🚀
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Thank you for reaching out to us. Our team will review your requirements and get back to you within <span className="text-white font-bold">24 hours</span>.
                </p>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl text-white font-bold transition-all transform active:scale-95 tracking-wider uppercase text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="pt-32 md:pt-40 pb-20 overflow-hidden relative">
        {/* Background Glow Overlays */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] -z-10"></div>

        <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Text & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/20 to-blue-500/20 border border-white/10 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 w-fit">
                <MessageSquare size={18} className="text-purple-400" /> CONTACT US
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 border-b border-white/10 pb-10 leading-[1.1]">
                Let’s Build Something <br />
                <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Great Together
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-12">
                Have a project in mind? Fill out the form or reach out to us directly – We'd love to help you grow 🚀
              </p>

              <div className="space-y-8 mb-16">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                      {React.cloneElement(detail.icon, { size: 20 })}
                    </div>
                    <div>
                      <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[2px] mb-1">
                        {detail.title}
                      </h4>
                      <div className="text-white text-sm md:text-base font-medium leading-relaxed">
                        {detail.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0510] bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                      <User size={14} />
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-sm font-medium">
                  <span className="text-white font-bold">100+ clients</span> trust us for their business growth
                </p>
              </div>
            </motion.div>

            {/* Right Column: Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0b0612]/50 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <div className="mb-10 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Get a Free Quote
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Fill out the form and our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-4">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. enter name "
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-6 text-white text-sm outline-none focus:border-purple-500/50 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-4">Phone Number *</label>
                      <div className="relative">
                        <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-6 text-white text-sm outline-none focus:border-purple-500/50 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-4">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" example@gmail.com "
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-6 text-white text-sm outline-none focus:border-purple-500/50 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-4">Service Required *</label>
                      <div className="relative">
                        <Zap className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-[#16111d] border border-white/10 rounded-xl py-3.5 pl-12 pr-6 text-white text-sm outline-none focus:border-purple-500/50 transition-colors appearance-none"
                          required
                        >
                          <option value="" disabled>Select Service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-4">Budget (Optional)</label>
                    <div className="relative">
                      <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g. $1000 - $5000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-6 text-white text-sm outline-none focus:border-purple-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-4">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Describe your project details..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-6 text-white text-sm outline-none focus:border-purple-500/50 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-linear-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-3 text-sm uppercase tracking-wider"
                  >
                    Get Free Quote 🚀
                  </button>

                  <div className="pt-6 space-y-3 border-t border-white/5">
                    <div className="flex items-center gap-3 text-[12px] text-gray-400">
                      <CheckCircle2 size={14} className="text-green-500" />
                      Your information is 100% secure and will never be shared.
                    </div>
                    <div className="flex items-center gap-3 text-[12px] text-gray-400">
                      <CheckCircle2 size={14} className="text-green-500" />
                      We usually respond within 24 hours.
                    </div>
                    <p className="text-[12px] text-gray-500 ml-7 italic">
                      For quick response, contact us on <a href="https://wa.me/917610000127" target="_blank" className="text-green-400 hover:underline">WhatsApp!</a>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⭐ Features CTA Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Services",
                desc: "Providing app, web, and software development services worldwide.",
                icon: <Globe size={20} />,
              },
              {
                title: "Reliability",
                desc: "Committed to high-quality development results.",
                icon: <Star size={20} />,
              },
              {
                title: "Growth Focused",
                desc: "Your business growth through technology is our priority.",
                icon: <Zap size={20} />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⭐ Call To Action Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-purple-500/20 p-12 md:p-24 text-center group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Let’s Build{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Something Great
                </span>{" "}
                Together
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Have an idea or project? Let’s discuss how we can turn it into a
                successful digital solution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95">
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        {/* ⭐ Google Map Section */}
        <section className="w-full px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[450px] rounded-[3rem] overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113812.28585472856!2d75.71960133405763!3d26.88544795361093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
