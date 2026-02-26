import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Search as SearchIcon,
  MessageCircle,
  ChevronRight,
  Shield,
  Zap,
  Cpu,
  Globe,
  Star,
  CheckCircle2,
} from "lucide-react";

const FaqItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white/10 border-purple-500/30 shadow-2xl" : "bg-white/5 hover:bg-white/8"}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-6 flex items-center justify-between text-left gap-4"
      >
        <div className="flex items-center gap-4">
          <div
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isOpen ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400"}`}
          >
            ?
          </div>
          <span className="text-lg md:text-xl font-bold text-white leading-tight">
            {question}
          </span>
        </div>
        <div
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? (
            <Minus size={20} className="text-purple-400" />
          ) : (
            <Plus size={20} className="text-gray-500" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 pt-2">
              <div className="pl-12 border-l-2 border-purple-500/20">
                <p className="text-gray-400 text-lg leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: "GENERAL QUESTIONS",
      icon: <Globe className="text-purple-400" size={24} />,
      items: [
        {
          q: "What services do you provide?",
          a: "We offer website development, custom software solutions, SEO optimization, digital marketing, UI/UX design, and technology consulting services tailored to business needs.",
        },
        {
          q: "How do I start a project with you?",
          a: "Simply contact us through our website or email. We will discuss your requirements, provide consultation, and suggest the best solution for your business.",
        },
        {
          q: "Do you work with startups and small businesses?",
          a: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable to match different business sizes.",
        },
      ],
    },
    {
      title: "WEBSITE & SOFTWARE DEVELOPMENT",
      icon: <Cpu className="text-blue-400" size={24} />,
      items: [
        {
          q: "How long does it take to build a website?",
          a: "Project timelines depend on complexity. A basic website may take 1–2 weeks, while advanced projects may take longer.",
        },
        {
          q: "Do you provide custom software development?",
          a: "Yes, we specialize in building customized software solutions designed specifically for your business requirements.",
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
        },
      ],
    },
    {
      title: "SEO & DIGITAL MARKETING",
      icon: <SearchIcon className="text-pink-400" size={24} />,
      items: [
        {
          q: "How long does SEO take to show results?",
          a: "SEO is a long-term strategy. Typically, noticeable results appear within 2–4 months depending on competition and industry.",
        },
        {
          q: "Do you guarantee top search rankings?",
          a: "While no one can guarantee rankings, we use proven strategies to significantly improve visibility and performance.",
        },
        {
          q: "Do you provide digital marketing services?",
          a: "Yes, we offer SEO, PPC campaigns, social media marketing, and performance optimization services.",
        },
      ],
    },
    {
      title: "PRICING & SUPPORT",
      icon: <Star className="text-orange-400" size={24} />,
      items: [
        {
          q: "Do you offer custom pricing plans?",
          a: "Yes, pricing can be customized based on your project requirements and business goals.",
        },
        {
          q: "Is ongoing support included?",
          a: "Yes, we provide continuous technical support, maintenance, and updates depending on your chosen plan.",
        },
        {
          q: "Can I upgrade my plan later?",
          a: "Absolutely. You can upgrade services anytime as your business grows.",
        },
      ],
    },
    {
      title: "SECURITY & QUALITY",
      icon: <Shield className="text-green-400" size={24} />,
      items: [
        {
          q: "Do you ensure website security?",
          a: "Yes, we implement security best practices including SSL, secure coding, and regular updates.",
        },
        {
          q: "How do you ensure quality?",
          a: "We follow a structured development process including planning, testing, and quality checks before delivery.",
        },
      ],
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
        {/* ⭐ FAQ Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/20 to-blue-500/20 border border-white/10 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
              <HelpCircle size={18} className="text-purple-400" /> FAQ CENTER
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Frequently Asked{" "}
              <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing,
              process, and support. If you need more information, feel free to
              contact our team anytime.
            </p>
          </motion.div>
        </section>

        {/* ⭐ FAQ Accordion Sections */}
        <section className="px-6 md:px-10 max-w-4xl mx-auto space-y-20 mb-32">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.div
                {...fadeIn}
                className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
                  {category.title}
                </h2>
              </motion.div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const currentIndex = `${catIndex}-${itemIndex}`;
                  return (
                    <FaqItem
                      key={itemIndex}
                      index={itemIndex}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === currentIndex}
                      onClick={() =>
                        setOpenIndex(
                          openIndex === currentIndex ? null : currentIndex,
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* ⭐ Final CTA */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-purple-500/20 p-12 md:p-24 text-center group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                <MessageCircle size={44} className="text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Still Have{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Questions?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Our team is always ready to help. Contact us anytime for
                personalized assistance and consultation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-2xl">
                  Contact Us Now <ChevronRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95">
                  Request Consultation
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default Faq;
