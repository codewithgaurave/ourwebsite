import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Zap,
  Rocket,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  BarChart,
  Globe,
  Plus,
} from "lucide-react";

const Pricing = () => {
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

  const plans = [
    {
      name: "BASIC PLAN",
      subtitle: "Starter Plan",
      bestFor: "Small businesses & startups beginning their digital journey.",
      features: [
        { text: "Basic Website Optimization", included: true },
        { text: "Essential SEO Setup", included: true },
        { text: "Monthly Performance Report", included: true },
        { text: "Email Support", included: true },
        { text: "Basic Marketing Consultation", included: true },
        { text: "Responsive Web Design", included: true },
        { text: "Basic API Integration", included: true },
      ],
      description:
        "This plan helps businesses establish an online presence with essential optimization and marketing support.",
      icon: <Shield size={24} className="text-blue-400" />,
      color: "from-blue-500/10 to-transparent",
      popular: false,
    },
    {
      name: "STANDARD PLAN",
      subtitle: "Growth Plan",
      bestFor:
        "Businesses looking to improve visibility and attract more customers.",
      features: [
        { text: "Advanced SEO Optimization", included: true },
        { text: "Website Performance Enhancement", included: true },
        { text: "Social Media Marketing Support", included: true },
        { text: "Monthly Analytics Report", included: true },
        { text: "Priority Email Support", included: true },
        { text: "Custom Web Application Development", included: true },
        { text: "RESTful API Development", included: true },
        { text: "Database Design & Integration", included: true },
      ],
      description:
        "A balanced plan designed to enhance online visibility, improve traffic, and support steady business growth.",
      icon: <Rocket size={24} className="text-purple-400" />,
      color: "from-purple-500/20 to-transparent",
      popular: true,
    },
    {
      name: "PREMIUM PLAN",
      subtitle: "Professional Plan",
      bestFor:
        "Businesses aiming for aggressive growth and strong digital presence.",
      features: [
        { text: "Complete SEO Strategy", included: true },
        { text: "PPC Campaign Management", included: true },
        { text: "Conversion Optimization", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "Priority Support", included: true },
        { text: "Mobile App Development (iOS & Android)", included: true },
        { text: "GraphQL API Development", included: true },
        { text: "Cloud Deployment (AWS/Azure)", included: true },
        { text: "DevOps & CI/CD Setup", included: true },
      ],
      description:
        "A comprehensive digital marketing package for businesses seeking maximum online reach and performance.",
      icon: <Star size={24} className="text-pink-400" />,
      color: "from-pink-500/10 to-transparent",
      popular: false,
    },
    {
      name: "ENTERPRISE PLAN",
      subtitle: "Enterprise Solution",
      bestFor: "Large businesses & organizations requiring custom solutions.",
      features: [
        { text: "Custom Software & Web Development", included: true },
        { text: "Full Digital Marketing Strategy", included: true },
        { text: "Advanced Analytics & Reporting", included: true },
        { text: "Dedicated Technical Team", included: true },
        { text: "24/7 Priority Support", included: true },
        { text: "Blockchain & Smart Contract Development", included: true },
        { text: "Game Development (Unity/Unreal)", included: true },
        { text: "Desktop Application Development", included: true },
        { text: "Microservices Architecture", included: true },
        { text: "Kubernetes & Docker Orchestration", included: true },
      ],
      description:
        "Tailored solutions designed for enterprises requiring scalable, high-performance digital infrastructure.",
      icon: <Zap size={24} className="text-orange-400" />,
      color: "from-orange-500/10 to-transparent",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Do you offer custom plans?",
      a: "Yes, we provide customized pricing based on business requirements. Contact us to discuss your specific needs.",
    },
    {
      q: "Is support included?",
      a: "Yes, all plans include dedicated support options tailored to the plan level.",
    },
    {
      q: "Can I upgrade anytime?",
      a: "Absolutely — plans can be upgraded as your business grows to accommodate your evolving needs.",
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
        {/* ⭐ Pricing Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold tracking-[0.2em] uppercase mb-8">
              Pricing Options
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Flexible{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-purple-400">
                Pricing Plans
              </span>{" "}
              For Every Business
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Choose a plan that fits your business needs. Our pricing is
              designed to provide maximum value, transparency, and scalable
              digital solutions for businesses of all sizes.
            </p>

            <motion.div
              {...fadeIn}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto backdrop-blur-sm"
            >
              <p className="text-lg text-gray-400 italic">
                "We offer affordable and result-driven digital solutions
                tailored to startups, growing businesses, and enterprises. Our
                plans focus on performance and long-term business growth."
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ⭐ Pricing Cards Grid */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group flex flex-col p-10 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 h-full ${plan.popular ? "border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.1)]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase z-20">
                    Most Popular
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-linear-to-b ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]`}
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      {plan.icon}
                    </div>
                    <span className="text-white/20 font-bold text-xs uppercase tracking-widest">
                      {plan.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 font-medium">
                    Best For: {plan.bestFor}
                  </p>

                  <div className="space-y-4 mb-10 grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-white/10"}`}
                        >
                          {feature.included ? (
                            <Check size={12} />
                          ) : (
                            <X size={12} />
                          )}
                        </div>
                        <span
                          className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <p className="text-sm text-gray-500 leading-relaxed mb-8 italic">
                      {plan.description}
                    </p>
                    <Link to="/contact" className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 block text-center ${plan.popular ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"}`}>
                      Select Plan
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⭐ Why Our Pricing Is Different */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="bg-[#0b0612]/50 backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                  Why our <span className="text-purple-400">pricing</span> is
                  different
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Transparent Pricing",
                      desc: "No Hidden Charges",
                      icon: <Shield size={20} />,
                    },
                    {
                      title: "Scalable Plans",
                      desc: "Grows as you grow",
                      icon: <BarChart size={20} />,
                    },
                    {
                      title: "Focus On ROI",
                      desc: "Driven by performance",
                      icon: <Rocket size={20} />,
                    },
                    {
                      title: "Custom Solutions",
                      desc: "Flexible for your needs",
                      icon: <Plus size={20} />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-purple-500/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold mb-1 uppercase tracking-tight text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-10 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 italic">
                  <HelpCircle className="text-purple-500" /> FAQ Style Pricing
                  Note
                </h3>
                <div className="space-y-10">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <p className="text-white font-bold text-lg mb-2">
                        Q: {faq.q}
                      </p>
                      <p className="text-gray-400 leading-relaxed border-l-2 border-purple-500/30 pl-6">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ Pricing CTA Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-purple-500/20 p-12 md:p-24 text-center group"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready To{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Grow Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Choose your plan today and start building a stronger digital
                presence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  Get Started Now <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
