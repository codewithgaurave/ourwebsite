import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Cpu,
  Layout,
  BarChart3,
  Smartphone,
  Settings,
  MessageSquare,
  Search,
  CheckCircle2,
  ArrowRight,
  Code2,
  Globe,
  Database,
  Cloud,
  Layers,
  Sparkles,
  Zap,
  Monitor,
  Tablet,
  Terminal,
  Braces,
  Server,
  Shield,
  Gauge,
  Palette,
  Rocket,
  Code,
  AppWindow,
  Globe2,
  Cctv,
} from "lucide-react";

const Services = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const servicesList = [
    // NEW: Mobile App Development
    {
      title: "MOBILE APP DEVELOPMENT",
      subtitle: "iOS & Android Native & Cross-Platform Apps",
      desc: "We build high-performance mobile applications for iOS and Android platforms. Our apps are designed to deliver seamless user experiences, robust functionality, and scalable architecture that grows with your business needs.",
      icon: <Smartphone size={48} className="text-cyan-400" />,
      features: [
        "Native iOS App Development (Swift/SwiftUI)",
        "Native Android App Development (Kotlin/Java)",
        "Cross-Platform Apps (React Native/Flutter)",
        "Progressive Web Apps (PWA)",
        "App Store Optimization & Deployment",
        "App Maintenance & Updates",
      ],
      color: "from-cyan-500/20 to-transparent",
    },
    // NEW: Web Development
    {
      title: "WEB DEVELOPMENT",
      subtitle: "Frontend & Backend Web Solutions",
      desc: "From stunning frontend interfaces to powerful backend systems, we create complete web solutions. Our websites are built with modern technologies to ensure optimal performance, security, and user engagement across all devices.",
      icon: <Monitor size={48} className="text-blue-400" />,
      features: [
        "Custom Website Development",
        "Frontend Development (React/Vue/Angular)",
        "Backend Development (Node.js/Python/PHP)",
        "Full-Stack Web Applications",
        "WordPress & CMS Development",
        "Website Performance Optimization",
      ],
      color: "from-blue-500/20 to-transparent",
    },
    // NEW: Web App Development
    {
      title: "WEB APP DEVELOPMENT",
      subtitle: "Progressive Web Apps & SaaS Solutions",
      desc: "We develop feature-rich web applications that function like native apps while being accessible through any web browser. Our web apps include real-time features, offline capabilities, and seamless integration with existing business systems.",
      icon: <AppWindow size={48} className="text-indigo-400" />,
      features: [
        "Progressive Web Apps (PWA)",
        "SaaS Application Development",
        "Single Page Applications (SPA)",
        "Real-time Web Applications",
        "Cloud-Based Web Solutions",
        "API Development & Integration",
      ],
      color: "from-indigo-500/20 to-transparent",
    },
    // Existing: Software Development
    {
      title: "SOFTWARE DEVELOPMENT",
      subtitle: "Custom Enterprise Software Solutions",
      desc: "We design and develop scalable software tailored to your business needs. From automation systems to enterprise applications, we create secure and efficient solutions that streamline operations and improve productivity.",
      icon: <Cpu size={48} className="text-purple-400" />,
      features: [
        "Custom Web Applications",
        "ERP & CRM Systems",
        "Business Automation Tools",
        "API Integration & Backend Systems",
        "Desktop Application Development",
        "Maintenance & Support",
      ],
      color: "from-purple-500/20 to-transparent",
    },
    // Existing: Website Development
    {
      title: "E-COMMERCE SOLUTIONS",
      subtitle: "Online Store & Marketplace Development",
      desc: "We build powerful e-commerce platforms that drive sales and provide exceptional shopping experiences. Our solutions include secure payment gateways, inventory management, and mobile-optimized designs.",
      icon: <Globe2 size={48} className="text-emerald-400" />,
      features: [
        "E-commerce Website Development",
        "Custom Shopping Cart Solutions",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Multi-Vendor Marketplace",
        "E-commerce SEO & Marketing",
      ],
      color: "from-emerald-500/20 to-transparent",
    },
    {
      title: "SEO & DIGITAL MARKETING",
      subtitle: "Search Engine Optimization & Marketing",
      desc: "Our SEO and digital marketing services help businesses rank higher, attract quality traffic, and increase brand visibility.",
      icon: <BarChart3 size={48} className="text-pink-400" />,
      features: [
        "On-Page & Technical SEO",
        "Keyword Research & Strategy",
        "Performance Optimization",
        "PPC Campaign Management",
        "Social Media Marketing",
        "Content Marketing Strategy",
      ],
      color: "from-pink-500/20 to-transparent",
    },
    {
      title: "UI/UX DESIGN",
      subtitle: "Creative & User-Centered Design",
      desc: "We design intuitive and visually appealing interfaces that enhance user experience and engagement.",
      icon: <Sparkles size={48} className="text-orange-400" />,
      features: [
        "Website UI/UX Design",
        "Mobile App Design",
        "Brand Identity Design",
        "Prototyping & Wireframing",
        "Design Systems & Guidelines",
        "User Research & Testing",
      ],
      color: "from-orange-500/20 to-transparent",
    },
    {
      title: "DIGITAL CONSULTING",
      subtitle: "Technology & Growth Consulting",
      desc: "We help businesses choose the right technology stack and digital strategies to achieve long-term success.",
      icon: <MessageSquare size={48} className="text-green-400" />,
      features: [
        "Technology Consulting",
        "Digital Transformation Planning",
        "Performance Optimization",
        "Growth Strategy Guidance",
        "Technical Audit Services",
        "Project Planning & Management",
      ],
      color: "from-green-500/20 to-transparent",
    },
  ];

  // Development Technologies Section
  const technologies = {
    mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    web: ["React", "Vue.js", "Angular", "Next.js", "Node.js", "PHP", "Python"],
    backend: ["Node.js", "Python Django", "Express.js", "PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Jenkins"],
  };

  const whyChooseUs = [
    { text: "Experienced Professional Team", icon: <CheckCircle2 size={20} /> },
    { text: "Latest Technology Stack", icon: <Code2 size={20} /> },
    { text: "Client-Centered Approach", icon: <Globe size={20} /> },
    { text: "Transparent Communication", icon: <MessageSquare size={20} /> },
    { text: "On-Time Delivery", icon: <Zap size={20} /> },
    { text: "Continuous Support", icon: <Settings size={20} /> },
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
        {/* ⭐ Services Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 p-12 md:p-24 shadow-3xl text-center"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-purple-600/10 via-transparent to-blue-600/10 blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold tracking-[0.3em] uppercase mb-8">
                Our Expertise
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Digital Solutions
                </span>{" "}
                For Your Business
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 mx-auto">
                We provide end-to-end digital services including software
                development, website creation, SEO optimization, and digital
                marketing strategies. Our goal is to help businesses grow
                faster, improve efficiency, and build a strong digital presence.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/5">
                {["Software", "Websites", "SEO", "Marketing", "Consulting"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="text-gray-500 text-sm font-medium uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ⭐ Services Intro */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                We combine <span className="text-purple-400">technology</span>,
                creativity, and strategy.
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                Whether you need a modern website, custom software, or effective
                digital marketing, our expert team ensures high-quality,
                scalable, and result-driven services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-[2.5rem]"
            >
              <div className="bg-[#0b0612] rounded-[2.4rem] p-10 md:p-14 border border-white/5">
                <blockquote className="text-2xl text-white font-medium italic leading-relaxed">
                  "Our mission is to help startups, businesses, and
                  organizations establish a strong online presence and achieve
                  sustainable growth through innovation."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⭐ Individual Services - Dynamic Mapping */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto space-y-24 lg:space-y-32 mb-32">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 shadow-2xl">
                  {service.icon}
                </div>
                <h3 className="text-purple-400 text-lg font-bold tracking-widest uppercase mb-4">
                  {service.title}
                </h3>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                  {service.subtitle}
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {service.desc}
                </p>
                <div className="space-y-4">
                  <p className="text-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                    <Layers size={18} className="text-purple-500" /> WHAT WE
                    OFFER:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-300 group"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-purple-400 group-hover:scale-125 transition-transform"
                        />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`relative ${index % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} blur-[100px] rounded-full`}
                ></div>
                <div className="relative z-10 p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-sm group hover:bg-white/10 transition-colors">
                  <div className="text-white/20 group-hover:text-white/40 transition-colors mb-6">
                    <Code2 size={120} strokeWidth={0.5} />
                  </div>
                  <p className="text-white font-bold text-xl tracking-tight opacity-40 group-hover:opacity-100 transition-all uppercase">
                    Enterprise Grade Solutions
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ⭐ Why Choose Our Services */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="bg-[#0b0612]/50 backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>

            <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                WHY CHOOSE OUR SERVICES
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto border-b border-white/10 pb-10">
                We focus on delivering measurable results and long-term value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-lg">
                    {item.icon}
                  </div>
                  <h5 className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-purple-400 transition-colors">
                    {item.text}
                  </h5>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ Technologies We Use */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              TECHNOLOGIES WE USE
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage the latest and most reliable technologies to build
              scalable, secure, and high-performance digital solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mobile Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Smartphone size={24} className="text-cyan-400" />
                <h3 className="text-white font-bold uppercase tracking-wide">Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.mobile.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-gray-300 text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Monitor size={24} className="text-blue-400" />
                <h3 className="text-white font-bold uppercase tracking-wide">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.web.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-gray-300 text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Server size={24} className="text-purple-400" />
                <h3 className="text-white font-bold uppercase tracking-wide">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.backend.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-gray-300 text-sm font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DevOps & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cloud size={24} className="text-emerald-400" />
                <h3 className="text-white font-bold uppercase tracking-wide">DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.tools.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-gray-300 text-sm font-medium hover:bg-emerald-500/20 hover:text-emerald-300 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⭐ Call To Action Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-purple-500/20 p-12 md:p-24 text-center group"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-blue-600/10 to-transparent -z-10"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready To{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Grow Your Business
                </span>{" "}
                Digitally?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let’s discuss your project and build solutions that help your
                business succeed in today’s competitive digital world.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  Contact Us Today <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
