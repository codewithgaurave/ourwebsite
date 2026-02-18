import React from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full p-6 sm:p-10 md:p-16 flex flex-col justify-center min-h-[85vh] md:min-h-screen overflow-hidden">
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
        {/* Left Section (Client info + Rotating Badge) - Visible on lg */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex lg:col-span-4 flex-col justify-between h-full min-h-[500px] py-12"
        >
          <div className="py-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Ezra Michael"
                loading="lazy"
                className="w-16 h-16 rounded-full border-2 border-white/10 object-cover shadow-lg"
              />
              <div className="flex flex-col">
                <h3 className="font-unbounded uppercase tracking-tight text-white leading-none">
                  EZRA MICHAEL
                </h3>
                <p className="text-sm text-gray-400 font-medium mt-1">
                  Our Client
                </p>
              </div>
            </div>
            <p className="text-gray-200 text-xs font-medium italic max-w-[280px] leading-snug">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
            </p>
          </div>

          <div className="relative w-32 h-32 flex items-center justify-center -ml-4 rounded-full bg-[#302734]">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="fill-white/30 text-[8px] uppercase font-unbounded tracking-[3px]">
                  <textPath xlinkHref="#circlePath">
                    Smarter * Grow Faster * Smarter *{" "}
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
        <div className="lg:col-span-8 flex flex-col items-center lg:items-end justify-center w-full">
          {/* Headings Block - Using flex to force single lines */}
          <div className="w-full flex flex-col items-center lg:items-end mb-10 lg:mb-16 relative font-unbounded text-white uppercase select-none space-y-2 lg:space-y-0">
            {/* OPTIMIZING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-end w-full"
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
                  OPTIM
                </span>
                IZING
              </h1>
            </motion.div>

            {/* VISIBILITY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-end w-full lg:-mt-6 2xl:-mt-10 lg:mr-12"
            >
              <h1 className="text-[34px] sm:text-[54px] md:text-[74px] lg:text-[100px] 2xl:text-[110px] font-bold whitespace-nowrap flex items-center tracking-tighter">
                VISIB
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
                  ILITY
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
            className="w-full max-w-xl flex flex-col items-center lg:items-end lg:mr-16 text-center lg:text-right px-4"
          >
            <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-relaxed mb-10 max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-end w-full sm:w-auto">
              <button className="flex items-center gap-3 border-2 border-white/10 px-8 lg:px-10 py-4 lg:py-[18px] rounded-full text-[13px] lg:text-sm font-bold uppercase tracking-[2px] text-white cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] transition-all group w-full sm:w-auto justify-center">
                Learn More
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <div className="relative group cursor-pointer h-16 w-16">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl overflow-hidden">
                  <Play
                    size={20}
                    fill="white"
                    className="ml-1 text-white relative z-10"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
