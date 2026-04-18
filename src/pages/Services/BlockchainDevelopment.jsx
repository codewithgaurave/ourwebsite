import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Blocks, CheckCircle2, Code2, Layers, Zap, Shield, Gauge, Lock } from "lucide-react";
import WhatsAppIcon from "../../components/icons/WhatsAppIcon";

const BlockchainDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Smart Contract Development",
    "Decentralized Applications (DApps)",
    "Token Development (ERC-20, ERC-721)",
    "Blockchain Integration",
    "Web3 Development",
    "NFT Marketplace Development",
    "DeFi Solutions",
    "Wallet Integration",
    "Blockchain Security Audits",
    "Cross-Chain Solutions",
    "Blockchain Consulting",
    "Maintenance & Support"
  ];

  const technologies = [
    { name: "Solidity", color: "from-gray-500/20 to-transparent" },
    { name: "Ethereum", color: "from-blue-500/20 to-transparent" },
    { name: "Web3.js", color: "from-orange-500/20 to-transparent" },
    { name: "Hardhat", color: "from-yellow-500/20 to-transparent" },
    { name: "IPFS", color: "from-blue-600/20 to-transparent" },
    { name: "Polygon", color: "from-purple-500/20 to-transparent" }
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
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-violet-600/10 via-transparent to-purple-600/10 blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-violet-500/20 to-purple-500/20 border border-white/10 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
                <Blocks size={18} className="text-violet-400" /> Blockchain Development
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Build Decentralized{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-purple-400">
                  Solutions
                </span>{" "}
                For The Future
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 mx-auto">
                We develop decentralized applications, smart contracts, and blockchain solutions. 
                We build secure, transparent, and immutable systems for your business.
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
                What We <span className="text-violet-400">Offer</span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-10">
                Our blockchain development services cover everything from simple smart contracts to complex 
                decentralized applications, ensuring your solutions are secure and scalable.
              </p>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 group">
                    <CheckCircle2 size={18} className="text-violet-400 group-hover:scale-125 transition-transform" />
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
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-purple-500/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                <Blocks size={120} className="text-violet-400/30 mx-auto mb-6" />
                <h3 className="text-white font-bold text-2xl text-center mb-4">Secure & Transparent</h3>
                <p className="text-gray-400 text-center">
                  We build blockchain solutions that are secure, transparent, and immutable.
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
              We leverage the latest blockchain technologies to build high-performance applications.
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
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all text-center`}
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
      className="relative rounded-[3.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-violet-500/20 p-8 md:p-24 text-center group"
    >
      <div className="relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Ready To Build Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-purple-400">
            Blockchain Solution?
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Let's discuss your blockchain needs and create a solution that drives results.
        </p>
        <a 
          href="https://wa.me/917610000127?text=Hello!%20I%20want%20to%20enquire%20about%20Blockchain%20Development%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-4 md:px-10 md:py-5 bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-white font-bold text-base md:text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transform hover:scale-105 transition-all outline-none group whitespace-nowrap"
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

export default BlockchainDevelopment;
