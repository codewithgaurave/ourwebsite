import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
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
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add success toast or logic here if needed
  };

  const contactDetails = [
    {
      title: "Call & WhatsApp",
      content: (
        <div className="flex flex-col gap-1">
          <a href="tel:+917610000127" className="hover:text-purple-400 transition-colors">+91 7610000127 (Call)</a>
          <a href="https://wa.me/917610000127" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">+91 7610000127 (WhatsApp)</a>
        </div>
      ),
      subContent: "Monday – Saturday : 10 AM – 7 PM",
      icon: <Phone size={24} className="text-purple-400" />,
      color: "from-purple-500/20 to-transparent",
    },
    {
      title: "Email",
      content: "info@yourcompany.com",
      subContent: "Official Inquiries",
      icon: <Mail size={24} className="text-blue-400" />,
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Technical Support",
      content: "support@yourcompany.com",
      subContent: "24/7 Support Assistance",
      icon: <Zap size={24} className="text-pink-400" />,
      color: "from-pink-500/20 to-transparent",
    },
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

      <main className="pt-32 pb-20 overflow-hidden">
        {/* ⭐ Contact Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/20 to-blue-500/20 border border-white/10 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
              <MessageSquare size={18} className="text-purple-400" /> CONTACT US
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Get In{" "}
              <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>{" "}
              With Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind or need expert digital solutions? Our team
              is ready to help you with mobile app development (iOS & Android), web development,
              web app development, software development, SEO services, and digital growth strategies.
            </p>
          </motion.div>
        </section>

        {/* ⭐ Contact Info & Form Grid */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left side: Info */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-14 mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  We would love to hear from you. Whether you have a question,
                  need consultation, or want to start a project, feel free to
                  reach out.
                </p>

                <div className="space-y-8">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                        {detail.icon}
                      </div>
                      <div>
                        <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">
                          {detail.title}
                        </h4>
                        <p className="text-white text-xl font-bold mb-1">
                          {detail.content}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {detail.subContent}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-white/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 italic">
                    Our Office
                  </h3>
                    <div className="flex items-start gap-4 text-gray-400">
                      <MapPin
                        className="text-purple-400 shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <p className="text-white font-bold text-lg mb-2">
                          Hind Import Export International (OPC) Pvt. Ltd.
                        </p>
                        <p>Ground Floor, Jaipur, Rajasthan</p>
                        <p>India – 302021</p>
                      </div>
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors">
                  <MapPin size={200} strokeWidth={0.5} />
                </div>
              </motion.div>
            </div>

            {/* Right side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#0b0612]/50 backdrop-blur-xl border border-white/10 rounded-[3.5rem] p-10 md:p-16"
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Send Us A Message
                </h2>
                <p className="text-gray-400 text-lg">
                  Fill out the form and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest ml-4">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20"
                        size={18}
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-purple-500/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest ml-4">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20"
                        size={18}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-purple-500/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest ml-4">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Smartphone
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20"
                        size={18}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 7610000127"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-purple-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest ml-4">
                      Subject
                    </label>
                    <div className="relative">
                      <Type
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20"
                        size={18}
                      />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Discussion"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-purple-500/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/50 text-xs font-bold uppercase tracking-widest ml-4">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Describe your project or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white outline-none focus:border-purple-500/50 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-3 text-lg"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
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
