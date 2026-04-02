import React, { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clientReviews = [
  {
    name: "EZRA MICHAEL",
    role: "Our Client",
    text: "Optivexa transformed our business with a stunning mobile app and website.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "PRIYA VERMA",
    role: "Our Client",
    text: "Their mobile app development team built an incredible cross-platform app.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "RAHUL MEHTA",
    role: "Our Client",
    text: "Exceptional web development services. Modern and responsive platform.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "SNEHA REDDY",
    role: "Our Client",
    text: "Cloud and DevOps expertise helped us scale seamlessly.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "VIKRAM JOSHI",
    role: "Our Client",
    text: "Amazing API and blockchain integration. Exceeded expectations.",
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
    <div className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: "#110c18" }}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(57, 37, 53, 0.9) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(78, 87, 102, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 85% 85%, rgba(31, 45, 58, 0.9) 0%, transparent 45%)
        `,
      }}></div>

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden items-center justify-center min-h-screen px-6 py-28 relative z-10">
        {/* Rotating Programming Icons Circle Mobile */}
        <div className="w-32 h-32 relative mb-2">
          <div className="absolute inset-0 rounded-full bg-[#302734]/30 border border-purple-500/10"></div>
          <div className="absolute inset-0" style={{ animation: "rotateCircleReverse 15s linear infinite" }}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {[
                { name: "JS", color: "#F7DF1E", textColor: "#000", angle: 0 },
                { name: "TS", color: "#3178C6", textColor: "#fff", angle: 30 },
                { name: "Py", color: "#3776AB", textColor: "#FFD43B", angle: 60 },
                { name: "Re", color: "#61DAFB", textColor: "#000", angle: 90 },
                { name: "No", color: "#339933", textColor: "#fff", angle: 120 },
                { name: "Ja", color: "#ED8B00", textColor: "#fff", angle: 150 },
                { name: "Go", color: "#00ADD8", textColor: "#fff", angle: 180 },
                { name: "Rs", color: "#DEA584", textColor: "#fff", angle: 210 },
                { name: "C+", color: "#00599C", textColor: "#fff", angle: 240 },
                { name: "PH", color: "#777BB4", textColor: "#fff", angle: 270 },
                { name: "Sw", color: "#FA7343", textColor: "#fff", angle: 300 },
                { name: "Kt", color: "#7F52FF", textColor: "#fff", angle: 330 },
              ].map((icon, i) => {
                const r = 80;
                const cx = 100 + r * Math.cos((icon.angle - 90) * (Math.PI / 180));
                const cy = 100 + r * Math.sin((icon.angle - 90) * (Math.PI / 180));
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="10" fill={icon.color} opacity="0.9" />
                    <text x={cx} y={cy} fontSize="6" fontWeight="bold" fill={icon.textColor} textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif">
                      {icon.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Rotating Text Badge Mobile */}
        <div className="w-24 h-24 relative mb-6">
          <div className="absolute inset-0 rounded-full bg-[#302734]"></div>
          <div className="absolute inset-0" style={{ animation: "rotateCircle 8s linear infinite" }}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="mobileCircle" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="transparent" />
              </defs>
              <text fill="rgba(255,255,255,0.35)" fontSize="13" fontFamily="sans-serif" letterSpacing="3">
                <textPath href="#mobileCircle">CODE * CREATE * INNOVATE * SCALE *</textPath>
              </text>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.7)]"></div>
        </div>

        {/* Heading Mobile */}
        <h1 className="text-[32px] font-bold text-white text-center uppercase font-unbounded mb-1">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#404D5F] to-[#2D2333] border border-white/10 -z-10"></span>
            CREA
          </span>
          TE
        </h1>
        <h1 className="text-[32px] font-bold text-white text-center uppercase font-unbounded mb-6 tracking-tight">
          FUTU
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#404D5F] to-[#2D2333] border border-white/10 -z-10"></span>
            RE
          </span>
        </h1>

        {/* Description Mobile */}
        <p className="text-gray-400 text-sm text-center leading-relaxed mb-2 max-w-[320px]">
          <span className="text-white font-bold block mb-1">End-to-End Software Development</span>
          Mobile apps, websites, web apps, software, games, APIs, cloud, blockchain, DevOps, UI/UX, ecommerce.
        </p>

        {/* Client Review Mobile */}
        <div className="flex flex-col items-center mt-6 mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-white/10 object-cover mb-2"
              />
              <h3 className="text-white text-xs font-bold uppercase">{review.name}</h3>
              <p className="text-gray-400 text-[10px] mb-1">{review.role}</p>
              <p className="text-gray-300 text-[11px] italic max-w-[250px]">"{review.text}"</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-3">
            {clientReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentReview(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentReview ? "bg-purple-500 w-4" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Buttons Mobile */}
        <div className="flex flex-col gap-3 w-full max-w-[280px]">
          <button className="flex items-center justify-center gap-2 border border-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/[0.02]">
            Get Started <ArrowRight size={14} />
          </button>
          <button className="flex items-center justify-center gap-2 border border-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/[0.02]">
            Contact Us <Play size={14} />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center min-h-screen px-16 py-40 relative z-10">
        <div className="grid grid-cols-12 w-full max-w-[1536px] gap-8 items-center">
          {/* Left Section */}
          <div className="col-span-4 flex flex-col justify-between min-h-[500px] py-12">
            {/* Client Slider */}
            <div className="py-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full border-2 border-white/10 object-cover" />
                    <div>
                      <h3 className="font-unbounded uppercase text-white text-sm">{review.name}</h3>
                      <p className="text-sm text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-xs italic max-w-[280px]">"{review.text}"</p>
                </motion.div>
              </AnimatePresence>
              <div className="flex gap-2 mt-6">
                {clientReviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReview(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      i === currentReview ? "bg-purple-500 w-6" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Rotating Icons Circle */}
            <div className="relative w-44 h-44 mb-4">
              <div className="absolute inset-0 rounded-full bg-[#302734]/50 border border-purple-500/10"></div>
              <div className="absolute inset-0" style={{ animation: "rotateCircleReverse 15s linear infinite" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[
                    { name: "JS", color: "#F7DF1E", textColor: "#000", angle: 0 },
                    { name: "TS", color: "#3178C6", textColor: "#fff", angle: 30 },
                    { name: "Py", color: "#3776AB", textColor: "#FFD43B", angle: 60 },
                    { name: "Re", color: "#61DAFB", textColor: "#000", angle: 90 },
                    { name: "No", color: "#339933", textColor: "#fff", angle: 120 },
                    { name: "Ja", color: "#ED8B00", textColor: "#fff", angle: 150 },
                    { name: "Go", color: "#00ADD8", textColor: "#fff", angle: 180 },
                    { name: "Rs", color: "#DEA584", textColor: "#fff", angle: 210 },
                    { name: "C+", color: "#00599C", textColor: "#fff", angle: 240 },
                    { name: "PH", color: "#777BB4", textColor: "#fff", angle: 270 },
                    { name: "Sw", color: "#FA7343", textColor: "#fff", angle: 300 },
                    { name: "Kt", color: "#7F52FF", textColor: "#fff", angle: 330 },
                  ].map((icon, i) => {
                    const r = 85;
                    const cx = 100 + r * Math.cos((icon.angle - 90) * (Math.PI / 180));
                    const cy = 100 + r * Math.sin((icon.angle - 90) * (Math.PI / 180));
                    return (
                      <g key={i}>
                        <circle cx={cx} cy={cy} r="12" fill={icon.color} opacity="0.9" />
                        <text x={cx} y={cy} fontSize="7" fontWeight="bold" fill={icon.textColor} textAnchor="middle" dominantBaseline="central">{icon.name}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Rotating Text Circle */}
            <div className="relative w-36 h-36 -ml-4">
              <div className="absolute inset-0 rounded-full bg-[#302734]"></div>
              <div className="absolute inset-0" style={{ animation: "rotateCircle 8s linear infinite" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs><path id="textCircle" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="transparent" /></defs>
                  <text fill="rgba(255,255,255,0.35)" fontSize="12" fontFamily="sans-serif" letterSpacing="3">
                    <textPath href="#textCircle">CODE * CREATE * INNOVATE * SCALE * DEVELOP * BUILD *</textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.7)]"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-8 flex flex-col items-start justify-center">
            <div className="mb-16 font-unbounded text-white uppercase">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className="text-[90px] 2xl:text-[110px] font-bold">
                  <span className="relative inline-block px-3">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#404D5F] to-[#2D2333] border border-white/10 rounded-[32px] -z-10"></span>
                    CREA
                  </span>
                  TE
                </h1>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="-mt-6 ml-12">
                <h1 className="text-[90px] 2xl:text-[110px] font-bold tracking-tighter">
                  FUTU
                  <span className="relative inline-block px-3">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#404D5F] to-[#2D2333] border border-white/10 rounded-[32px] -z-10"></span>
                    RE
                  </span>
                </h1>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} className="ml-16 max-w-xl">
              <p className="text-gray-300 text-lg font-medium leading-relaxed mb-6">
                <span className="text-white font-bold block mb-2 text-xl">End-to-End Software Development & Digital Innovation</span>
                From mobile apps and responsive websites to web applications, desktop software, game development, API integrations, cloud solutions, blockchain, DevOps automation, UI/UX design, and ecommerce platforms — we build it all.
              </p>
              <div className="flex gap-8">
                <button className="flex items-center gap-3 border-2 border-white/10 px-10 py-[18px] rounded-full text-sm font-bold uppercase tracking-[2px] text-white bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                  Get Started <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10"><ArrowRight size={16} /></span>
                </button>
                <button className="flex items-center gap-3 border-2 border-white/10 px-10 py-[18px] rounded-full text-sm font-bold uppercase tracking-[2px] text-white bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                  Contact Us <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10"><Play size={16} /></span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotateCircle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCircleReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default React.memo(Hero);
