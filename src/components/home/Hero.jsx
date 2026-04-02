import React, { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clientReviews = [
  {
    name: "EZRA MICHAEL",
    role: "Our Client",
    text: "Optivexa transformed our business with a stunning mobile app and website. Their team delivered beyond expectations with incredible speed and quality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "PRIYA VERMA",
    role: "Our Client",
    text: "Their mobile app development team built an incredible cross-platform app. The UI/UX design was outstanding and user engagement skyrocketed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "RAHUL MEHTA",
    role: "Our Client",
    text: "Exceptional web development services. They transformed our outdated website into a modern, responsive platform that loads incredibly fast.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "SNEHA REDDY",
    role: "Our Client",
    text: "Their cloud and DevOps expertise helped us scale our infrastructure seamlessly. Deployment times reduced by 80% and uptime improved dramatically.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "VIKRAM JOSHI",
    role: "Our Client",
    text: "Amazing API development and blockchain integration. They delivered a secure, scalable solution that exceeded our expectations in every way.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % clientReviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const review = clientReviews[currentReview];

  return (
    <div className="relative w-full px-6 sm:px-10 md:px-16 pt-32 pb-16 md:pt-40 md:pb-32 flex flex-col justify-center min-h-[85vh] md:min-h-screen overflow-hidden">
      {/* Background Gradient Layer */}
      <div
        className="absolute inset-0 -z-20 scale-110"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(57, 37, 53, 0.9) 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(78, 87, 102, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 85% 85%, rgba(31, 45, 58, 0.9) 0%, transparent 45%)
          `,
          backgroundColor: "#110c18",
        }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1536px] mx-auto h-full gap-8 z-10 items-center">
        {/* Left Section (Client info + Rotating Badge) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex lg:col-span-4 flex-col justify-between h-full min-h-[500px] py-12"
        >
          {/* Client Slider */}
          <div className="py-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-full border-2 border-white/10 object-cover shadow-lg"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-unbounded uppercase tracking-tight text-white leading-none">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-200 text-xs font-medium italic max-w-[280px] leading-snug">
                  "{review.text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {clientReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentReview(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentReview
                      ? "bg-purple-500 w-6 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Rotating Badge */}
          <div className="relative w-32 h-32 flex items-center justify-center -ml-4 rounded-full bg-[#302734]">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="fill-white/30 text-[8px] uppercase text-start font-unbounded tracking-[3px]">
                  <textPath xlinkHref="#circlePath">
                    Code * Create * Innovate * Scale *{" "}
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="w-2.5 h-2.5 bg-purple-600 rounded-full shadow-[0_0_15px_#a855f7]"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Titles and Description) */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start justify-center w-full">
          {/* Headings Block */}
          <div className="w-full flex flex-col items-center lg:items-start mb-10 lg:mb-16 relative font-unbounded text-white uppercase select-none space-y-2 lg:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start w-full"
            >
              <h1 className="text-[34px] sm:text-[54px] md:text-[74px] lg:text-[100px] 2xl:text-[110px] font-bold whitespace-nowrap flex items-center">
                <span className="relative inline-block px-2 sm:px-4 ml-[-8px]">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: "circOut" }}
                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[75%] -z-10 rounded-2xl md:rounded-[32px] backdrop-blur-[35px] border border-white/10 origin-left"
                    style={{
                      background:
                        "linear-gradient(133deg, #404D5F 0%, #2D2333 100%)",
                    }}
                  ></motion.div>
                  CREA
                </span>
                TE
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start w-full lg:-mt-6 2xl:-mt-10 lg:ml-12"
            >
              <h1 className="text-[34px] sm:text-[54px] md:text-[74px] lg:text-[100px] 2xl:text-[110px] font-bold whitespace-nowrap flex items-center tracking-tighter">
                FUTU
                <span className="relative inline-block px-2 sm:px-4 ml-1">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[85%] -z-10 rounded-2xl md:rounded-[32px] backdrop-blur-[35px] border border-white/10 origin-right"
                    style={{
                      background:
                        "linear-gradient(133deg, #404D5F 0%, #2D2333 100%)",
                    }}
                  ></motion.div>
                  RE
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Description & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full max-w-xl flex flex-col items-center lg:items-start lg:ml-16 text-center lg:text-left px-4"
          >
            <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-relaxed mb-6 max-w-[600px]">
              <span className="text-white font-bold block mb-2 text-lg sm:text-xl">
                End-to-End Software Development & Digital Innovation
              </span>
              <span className="block mb-2 text-sm sm:text-base text-gray-400">
                From mobile apps (iOS & Android) and responsive websites to web applications, desktop software,
                game development, API integrations, cloud solutions, blockchain, DevOps automation, UI/UX design,
                and ecommerce platforms — we build it all.
              </span>
              We deliver cutting-edge technology solutions that transform your ideas into reality.
              Our expert team crafts scalable, secure, and high-performance software across every platform
              to help your business innovate, grow, and lead in the digital era.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-start w-full sm:w-auto">
              <button className="flex items-center gap-3 border-2 border-white/10 px-8 lg:px-10 py-4 lg:py-[18px] rounded-full text-[13px] lg:text-sm font-bold uppercase tracking-[2px] text-white cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] transition-all group w-full sm:w-auto justify-center">
                Get Started
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <button className="flex items-center gap-3 border-2 border-white/10 px-8 lg:px-10 py-4 lg:py-[18px] rounded-full text-[13px] lg:text-sm font-bold uppercase tracking-[2px] text-white cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] transition-all group w-full sm:w-auto justify-center">
                Contact Us
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10">
                  <Play
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
