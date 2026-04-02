import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Eye,
  Users,
  Cpu,
  BarChart3,
  Lightbulb,
  Clock,
  MessageSquare,
  HeartHandshake,
  Search,
  Layout,
  Smartphone,
  Globe,
  Settings,
  Gamepad2,
  Laptop,
  Cloud,
  Database,
  Palette,
  ShoppingCart,
  Blocks,
} from "lucide-react";

const AboutUs = () => {
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

  const services = [
    {
      icon: <Smartphone className="text-cyan-400" size={24} />,
      text: "Mobile App Development (iOS & Android)",
    },
    {
      icon: <Layout className="text-blue-400" size={24} />,
      text: "Website & Web Application Development",
    },
    {
      icon: <Globe className="text-indigo-400" size={24} />,
      text: "Progressive Web App (PWA) Development",
    },
    {
      icon: <Settings className="text-purple-400" size={24} />,
      text: "Custom Software Development",
    },
    {
      icon: <Gamepad2 className="text-pink-400" size={24} />,
      text: "Game Development (2D & 3D)",
    },
    {
      icon: <Laptop className="text-green-400" size={24} />,
      text: "Desktop Application Development",
    },
    {
      icon: <Database className="text-orange-400" size={24} />,
      text: "API Development & Integration",
    },
    {
      icon: <Cloud className="text-sky-400" size={24} />,
      text: "Cloud Development & Deployment",
    },
    {
      icon: <Palette className="text-rose-400" size={24} />,
      text: "UI/UX Design & Prototyping",
    },
    {
      icon: <ShoppingCart className="text-emerald-400" size={24} />,
      text: "E-commerce Development",
    },
    {
      icon: <Blocks className="text-violet-400" size={24} />,
      text: "Blockchain & Web3 Development",
    },
    {
      icon: <BarChart3 className="text-pink-400" size={24} />,
      text: "SEO & Digital Marketing Solutions",
    },
    {
      icon: <Cpu className="text-green-400" size={24} />,
      text: "Business Automation Systems",
    },
    {
      icon: <HeartHandshake className="text-orange-400" size={24} />,
      text: "Technical Consulting & Support",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users size={32} />,
      title: "Experienced Development Team",
      color: "from-purple-500/20 to-transparent",
    },
    {
      icon: <Cpu size={32} />,
      title: "Latest Technology Stack",
      color: "from-blue-500/20 to-transparent",
    },
    {
      icon: <Target size={32} />,
      title: "Client-Focused Approach",
      color: "from-pink-500/20 to-transparent",
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Delivery",
      color: "from-green-500/20 to-transparent",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Transparent Communication",
      color: "from-orange-500/20 to-transparent",
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Long-Term Support",
      color: "from-indigo-500/20 to-transparent",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Understanding Requirements",
      icon: <Search size={20} />,
    },
    { step: "02", title: "Planning", icon: <Layout size={20} /> },
    { step: "03", title: "Development", icon: <Cpu size={20} /> },
    { step: "04", title: "Testing", icon: <Settings size={20} /> },
    { step: "05", title: "Delivery", icon: <CheckCircle2 size={20} /> },
    {
      step: "06",
      title: "Continuous Support",
      icon: <HeartHandshake size={20} />,
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

      <main className="w-full pt-32 pb-20">
        {/* ⭐ Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20 lg:mb-32">
          <div className="relative rounded-3xl overflow-hidden bg-[#0A0510]/40 backdrop-blur-xl border border-white/10 p-8 md:p-16 lg:p-24 shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-600/10 to-transparent blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-blue-600/10 to-transparent blur-3xl -z-10"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-semibold tracking-wider uppercase mb-6">
                <Lightbulb size={16} /> ABOUT US
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Empowering Businesses Through{" "}
                <span className="bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Digital Innovation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                We are a passionate team of developers, designers, and digital
                marketing experts committed to helping businesses grow in the
                digital world. Our focus is on delivering high-quality mobile app development,
                web development, web app development, software solutions, game development,
                desktop applications, API development, cloud solutions, UI/UX design,
                e-commerce, blockchain, and result-driven SEO strategies
                that create real business impact.
              </p>
              <p className="text-lg text-gray-400 italic border-l-4 border-purple-500 pl-6">
                With a blend of technical expertise and creative thinking, we
                build solutions that are not only visually impressive but also
                highly functional, scalable, and performance-oriented.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ⭐ Who We Are */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Users className="text-purple-500" /> WHO WE ARE
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  We specialize in mobile app development (iOS & Android), web development,
                  web app development, custom software solutions, game development, desktop applications,
                  API development, cloud solutions, UI/UX design, e-commerce, blockchain, SEO optimization,
                  and digital growth strategies. Our goal is to help startups, businesses, and organizations
                  establish a strong online presence and achieve sustainable
                  growth.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                  We believe technology should simplify business operations,
                  improve customer engagement, and unlock new growth
                  opportunities. From native mobile apps to progressive web applications,
                  games, desktop software, and enterprise solutions, we build solutions that work seamlessly across all platforms.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ⭐ Mission & Vision */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                OUR MISSION
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our mission is to deliver innovative digital solutions that
                empower businesses to grow faster, perform better, and stay
                competitive in an ever-evolving digital landscape. We aim to
                provide reliable, scalable, and future-ready technology
                solutions tailored to each client's needs.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">OUR VISION</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become a trusted global digital solutions partner known for
                quality, innovation, and long-term client success. We envision a
                future where businesses leverage technology effectively to
                maximize their potential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ⭐ What We Do */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24 py-20 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              WHAT WE DO
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine creativity, strategy, and technology to deliver
              solutions that drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-[#0b0612]/50 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-default"
              >
                <div className="shrink-0">{item.icon}</div>
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⭐ Why Choose Us */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              WHY CHOOSE US
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our priority is building lasting relationships with clients by
              consistently delivering quality and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⭐ Our Approach */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              OUR APPROACH
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto border-b border-white/10 pb-10">
              We follow a structured approach to every project, ensuring
              quality, reliability, and client satisfaction at every stage.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-linear-to-r from-purple-500/20 via-blue-500/50 to-purple-500/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1a1325] border-2 border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:border-purple-500 group-hover:scale-110 transition-all z-10 relative shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <span className="absolute -top-10 text-xs font-bold text-purple-500/50 tracking-[0.2em]">
                      {item.step}
                    </span>
                    {item.icon}
                  </div>
                  <h5 className="text-white font-bold leading-tight group-hover:text-purple-400 transition-colors uppercase text-sm tracking-wide">
                    {item.title}
                  </h5>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ Closing Statement */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-purple-500/20 p-12 md:p-20 text-center shadow-3xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                We don't just build apps, websites, or software — we create{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  digital solutions
                </span>{" "}
                that help businesses grow.
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Ready to transform your business in today's fast-moving digital
                world? Let's build something extraordinary together — from mobile apps
                to web applications, games, desktop software, cloud solutions, and enterprise systems.
              </p>
              <Link to="/contact" className="px-10 py-5 bg-linear-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transform hover:scale-105 transition-all outline-none">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
