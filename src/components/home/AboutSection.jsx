import React, { useEffect, useState, useRef } from "react";
import { Megaphone, Search, ArrowUpRight, Smartphone, Monitor, Code2, AppWindow } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const number = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    if (value.includes(".")) {
      return latest.toFixed(1) + suffix;
    }
    return Math.floor(latest) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const AboutSection = () => {
  const stats = [
    { value: "18K+", label: "Project Done" },
    { value: "13K+", label: "Happy Customers" },
    { value: "4.9", label: "Customer Rating" },
  ];

  const features = [
    {
      icon: <Smartphone size={18} className="text-white md:size-[20px]" />,
      title: "APP DEVELOPMENT",
      desc: "We build high-performance mobile applications for iOS and Android platforms with native and cross-platform technologies.",
    },
    {
      icon: <Monitor size={18} className="text-white md:size-[20px]" />,
      title: "WEB DEVELOPMENT",
      desc: "Our team creates stunning, responsive websites with modern frontend and backend technologies optimized for speed.",
    },
    {
      icon: <AppWindow size={18} className="text-white md:size-[20px]" />,
      title: "WEB APP DEVELOPMENT",
      desc: "We develop powerful web applications with real-time features, offline capabilities, and cloud integration.",
    },
    {
      icon: <Code2 size={18} className="text-white md:size-[20px]" />,
      title: "SOFTWARE DEVELOPMENT",
      desc: "Custom enterprise software solutions including ERP, CRM, and business automation tools that streamline operations.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 overflow-hidden">
      <div
        className="relative w-full max-w-[1440px] mx-auto min-h-auto md:min-h-[700px] rounded-xl md:rounded-2xl overflow-hidden p-5 sm:p-8 md:p-16 border border-white/5"
        style={{
          background: "linear-gradient(135deg, #1A1F2E 0%, #0A0510 100%)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/5 blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/5 blur-[120px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative group hidden md:block"
          >
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-3 translate-x-1 translate-y-1 border border-white/10"></div>
            <div className="absolute inset-0 bg-white/5 rounded-3xl rotate-2 translate-x-0.5 translate-y-0.5 border border-white/10"></div>

            <div className="relative bg-[#1a1c2e] rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                  CEO Optivexa
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Team Working"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="px-2 pb-2">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
                    alt="Ezra Michael"
                    loading="lazy"
                    className="w-12 h-12 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <h4 className="font-unbounded text-sm uppercase text-white tracking-wider">
                      EZRA MICHAEL
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      Our Client
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-5 md:mb-8">
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
              <span className="text-xs sm:text-sm font-bold tracking-[2px] md:tracking-[4px] uppercase text-white/50">
                About Optivexa
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[40px] lg:text-4xl font-[300] font-unbounded text-white uppercase leading-[1.3] md:leading-[1.5] mb-2 md:mb-12 tracking-[2px] md:tracking-[4px]">
              FUELING YOUR GROWTH WITH
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-[40px] lg:text-4xl font-[300] font-unbounded text-white/90 uppercase leading-[1.3] md:leading-[1.5] mb-8 md:mb-12 tracking-[2px] md:tracking-[4px]">
              SEARCH POWER.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-16">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 md:gap-5 group">
                  <div
                    className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${idx === 0 ? "bg-[#4B2A40]" : idx === 1 ? "bg-[#324054]" : idx === 2 ? "bg-[#403B52]" : "bg-[#2A3B4A]"
                      }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[300] font-unbounded text-white uppercase tracking-tight mb-1 md:mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group p-3 sm:p-5 md:p-8 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <ArrowUpRight
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-purple-500/50 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    size={16}
                  />
                  <h4 className="text-xl sm:text-2xl md:text-4xl font-[300] font-unbounded text-white mb-1 md:mb-2 leading-none">
                    <Counter value={stat.value} />
                  </h4>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-[1px] md:tracking-[2px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection);
