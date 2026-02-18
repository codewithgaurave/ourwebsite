import React, { useEffect, useState, useRef } from "react";
import { Megaphone, Search, ArrowUpRight } from "lucide-react";
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

  // Extract number and suffix (e.g., "18k+" -> number: 18, suffix: "k+")
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
      icon: <Megaphone size={20} className="text-white" />,
      title: "MARKETING AGENCY",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      icon: <Search size={20} className="text-white" />,
      title: "SEO SERVICES",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10">
      {/* Main Rounded Container */}
      <div
        className="relative w-full max-w-[1440px] mx-auto min-h-[700px] rounded-2xl overflow-hidden p-8 md:p-16 border border-white/5"
        style={{
          background: "linear-gradient(135deg, #1A1F2E 0%, #0A0510 100%)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
      >
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            {/* Layered Cards Behind */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-6 translate-x-4 translate-y-2 border border-white/10"></div>
            <div className="absolute inset-0 bg-white/5 rounded-3xl rotate-3 translate-x-2 translate-y-1 border border-white/10"></div>

            {/* Main Image Card */}
            <div className="relative bg-[#1a1c2e] rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden">
              {/* CEO Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                  CEO Optivexa
                </span>
              </div>

              {/* The Image */}
              <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Team Working"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Client Profile Info */}
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
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
              <span className="text-sm font-bold tracking-[4px] uppercase text-white/50">
                About Optivexa
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl w-[95%] font-[300] md:text-[55px] lg:text-4xl font-unbounded text-white uppercase leading-[1.5] mb-12 tracking-[4px]">
              FUELING YOUR GROWTH WITH{" "}
              <span className="text-white/90">SEARCH POWER.</span>
            </h2>

            {/* Features + Right Box Layout */}
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              {/* Feature Items List */}
              <div className="flex-1 space-y-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div
                      className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        idx === 0 ? "bg-[#4B2A40]" : "bg-[#324054]"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[22px] md:text-[26px] font-[300] font-unbounded text-white uppercase tracking-tight mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-[15px] leading-relaxed font-medium max-w-[340px]">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Large Vertical Box from Reference */}
              <div className="w-full md:w-[320px] h-[380px] bg-white/[0.05] border border-white/10 rounded-2xl backdrop-blur-sm self-center"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <ArrowUpRight
                    className="absolute top-4 right-4 text-purple-500/50 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    size={20}
                  />
                  <h4 className="text-4xl font-[300] font-unbounded text-white mb-2 leading-none">
                    <Counter value={stat.value} />
                  </h4>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-[2px]">
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
