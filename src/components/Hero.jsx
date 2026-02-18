import React from "react";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full p-8 md:p-16 flex flex-col justify-between overflow-hidden">
      {/* Background Gradient Layer (Exact specification) */}
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

      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-4 z-10 pt-10">
        {/* Left Section (Client info + Rotating Badge) */}
        <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[500px]">
          {/* Ezra Michael Box */}
          <div className="py-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Ezra Michael"
                className="w-16 h-16 rounded-full border-2 border-white/10 object-cover shadow-lg"
              />
              <div className="flex flex-col">
                <h3 className=" font-unbounded uppercase tracking-tight text-white leading-none">
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

          {/* Rotating Text (Bottom Left) */}
          <div className="relative w-30 h-30 flex items-center justify-center -ml-4 rounded-full bg-[#302734]">
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
        </div>

        {/* Right Section (Titles and Description) */}
        <div className="md:col-span-8 flex flex-col items-end justify-center -mt-19">
          {/* Headings Block */}
          <div className="w-full flex flex-col items-end mb-16 relative">
            {/* OPTIMZING */}
            <div className="relative w-full flex justify-end">
              <div
                className="absolute left-[7%] top-1/2 -translate-y-1/2 w-[55%] h-[70%] backdrop-blur-[35px] rounded-2xl border border-white/10 -z-10 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(133deg, #404D5F 0%, #2D2333 100%)",
                }}
              ></div>
              <h1 className="text-[70px] sm:text-[100px] md:text-[90px] font-[500] font-unbounded text-white uppercase  leading-[150px] select-none drop-shadow-2xl">
                OPTIMZING
              </h1>
            </div>

            {/* VISIBILITY */}
            <div className="relative w-full flex justify-end -mt-4 mr-15">
              <div
                className="absolute right-[-3%] top-1/2 -translate-y-1/2 w-[44%] h-[100%] backdrop-blur-[35px] rounded-2xl border border-white/10 -z-10 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(133deg, #404D5F 0%, #2D2333 100%)",
                }}
              ></div>
              <h1 className="text-[70px] sm:text-[100px] md:text-[100px] font-[500] font-unbounded text-white uppercase  tracking-tighter leading-none select-none drop-shadow-2xl">
                VISIBILITY
              </h1>
            </div>
          </div>

          {/* Description & Buttons */}
          <div className="w-full max-w-xl self-start md:self-auto md:mr-18">
            <p className="text-gray-300 text-[14px] font-medium leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-3 border-2 border-white/10 px-10 py-[18px] rounded-full text-sm font-bold uppercase tracking-widest text-white cursor-pointer bg-transparent transition-all duration-500 group shadow-lg">
                Learn More
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 transition-colors">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </button>
              <div className="relative group cursor-pointer h-16 w-16">
                {/* Wave Animations */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-wave"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-wave [animation-delay:0.7s]"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-wave [animation-delay:1.4s]"></div>

                <div className="relative w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl overflow-hidden">
                  <Play
                    size={22}
                    fill="white"
                    className="ml-1 text-white group-hover:text-purple-400 group-hover:fill-purple-400 transition-colors relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Container Border Overlay */}
      <div className="absolute inset-0 border border-white/5 rounded-[60px] pointer-events-none"></div>
    </div>
  );
};

export default Hero;
