import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, ArrowRight, Code2, Layers, Zap, Shield, Gauge } from "lucide-react";
import WhatsAppIcon from "../../components/icons/WhatsAppIcon";

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Native iOS App Development (Swift/SwiftUI)",
    "Native Android App Development (Kotlin/Java)",
    "Cross-Platform Apps (React Native/Flutter)",
    "Progressive Web Apps (PWA)",
    "App Store Optimization & Deployment",
    "App Maintenance & Updates",
    "UI/UX Design for Mobile",
    "API Integration & Backend",
    "Push Notifications & Analytics",
    "Offline Functionality",
    "Performance Optimization",
    "Security & Data Protection"
  ];

  const technologies = [
    { name: "React Native", color: "from-cyan-500/20 to-transparent" },
    { name: "Flutter", color: "from-blue-500/20 to-transparent" },
    { name: "Swift", color: "from-orange-500/20 to-transparent" },
    { name: "Kotlin", color: "from-purple-500/20 to-transparent" },
    { name: "Firebase", color: "from-yellow-500/20 to-transparent" },
    { name: "Node.js", color: "from-green-500/20 to-transparent" }
  ];

  return (
    <div
      className="min-h-screen selection:bg-purple-500 selection:text-white"
      style={{
        background: "linear-gradient(to right, #0A0510, #3C3243, #434456, #283645, #1A2533)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
      </div>

      <main className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 p-12 md:p-24 shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-cyan-600/10 via-transparent to-blue-600/10 blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
                <Smartphone size={18} className="text-cyan-400" /> Mobile App Development
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Build Powerful{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                  Mobile Apps
                </span>{" "}
                For iOS & Android
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 mx-auto">
                We create high-performance mobile applications that deliver seamless user experiences, 
                robust functionality, and scalable architecture that grows with your business needs.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                What We <span className="text-cyan-400">Offer</span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-10">
                Our mobile app development services cover everything from concept to deployment, 
                ensuring your app stands out in the competitive app stores.
              </p>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 group">
                    <CheckCircle2 size={18} className="text-cyan-400 group-hover:scale-125 transition-transform" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                <Smartphone size={120} className="text-cyan-400/30 mx-auto mb-6" />
                <h3 className="text-white font-bold text-2xl text-center mb-4">Native & Cross-Platform</h3>
                <p className="text-gray-400 text-center">
                  We build apps that work flawlessly on both iOS and Android platforms using the latest technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage the latest mobile development technologies to build high-performance applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-center`}
              >
                <span className="text-white font-bold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative rounded-[3.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-cyan-500/20 p-8 md:p-24 text-center group"
    >
      <div className="relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Ready To Build Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
            Mobile App?
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Let's discuss your mobile app idea and create a solution that drives results.
        </p>
        <a 
          href="https://wa.me/917610000127?text=Hello!%20I%20want%20to%20enquire%20about%20Mobile%20App%20Development%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-4 md:px-10 md:py-5 bg-linear-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-base md:text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transform hover:scale-105 transition-all outline-none group whitespace-nowrap"
        >
          <WhatsAppIcon size={24} className="group-hover:scale-110 transition-transform" />
          ENQUIRE NOW
        </a>
      </div>
    </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
