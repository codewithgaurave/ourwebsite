import React from "react";
import { motion } from "framer-motion";

const words = [
  "EXECUTION",
  "SUCCESS",
  "STRATEGIC",
  "OPTIMIZATION",
  "GROWTH",
  "VISIBILITY",
  "EXECUTION",
  "SUCCESS",
  "STRATEGIC",
  "OPTIMIZATION",
  "GROWTH",
  "VISIBILITY",
];

const ScrollingText = () => {
  return (
    <div className="w-full px-4 md:px-10 mb-10 -mt-10">
      <div className="w-full max-w-[1440px] mx-auto bg-white/5 backdrop-blur-sm border border-white/10 py-6 rounded-2xl overflow-hidden relative">
        <motion.div
          className="flex whitespace-nowrap items-center gap-10"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {words.map((word, index) => (
            <div key={index} className="flex items-center gap-10">
              <span className="text-3xl md:text-5xl font-[300] font-unbounded text-white/80 tracking-tighter uppercase">
                {word}
              </span>
              <span className="text-2xl text-purple-500/50 flex items-center justify-center">
                {/* Decorative star separator */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L14.5 9H21.5L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2.5 9H9.5L12 2Z" />
                </svg>
              </span>
            </div>
          ))}
        </motion.div>

        {/* Fade effect on edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0510]/50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0510]/50 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default React.memo(ScrollingText);
