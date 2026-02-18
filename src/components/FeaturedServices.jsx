import React from "react";
import { Rocket, MousePointer2, Search, Video } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <Rocket className="w-12 h-12 text-white/40 group-hover:text-purple-400 transition-colors" />
    ),
    title: "SEO OPTIMIZATION",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: false,
  },
  {
    icon: <MousePointer2 className="w-12 h-12 text-purple-400" />,
    title: "PAY PER CLICK",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    icon: (
      <Search className="w-12 h-12 text-white/40 group-hover:text-purple-400 transition-colors" />
    ),
    title: "ADVANCED ANALYTIC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: false,
  },
  {
    icon: (
      <Video className="w-12 h-12 text-white/40 group-hover:text-purple-400 transition-colors" />
    ),
    title: "VIDEO MARKETING",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: false,
  },
];

const FeaturedServices = () => {
  return (
    <section
      className="py-28 px-4 md:px-6 text-white my-12"
      style={{
        background: "linear-gradient(to right, #0A0C1F, #0A0C1F, #0A0C1F)",
      }}
    >
      {/* Top Section: Header & Description */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14 ">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mt-0 shrink-0 ml-4"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]"></div>
          <span className="text-sm font-bold tracking-[4px] uppercase text-white/50">
            Featured Services
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-end w-full mr-4"
        >
          <h2 className="text-[50px] sm:text-[70px] md:text-4xl font-[300] font-unbounded text-left uppercase tracking-[5px] leading-[0.85] mb-12 select-none">
            BOOST YOUR WEBSITE TRAFFIC!
          </h2>
          <p className="text-white text-[14px] md:text-[15px] text-left max-w-2xl leading-[1.8] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </motion.div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 ">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative group p-6 rounded-2xl border transition-all duration-400 overflow-hidden h-[220px] flex flex-col justify-between cursor-pointer hover:-translate-y-3 ${
              service.active
                ? "bg-gradient-to-br from-[#1c1d3a] to-[#0A0C1F] border-white/20 shadow-2xl"
                : "bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/20"
            }`}
          >
            {/* Active Glow/Gradient Effect */}
            {service.active && (
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-transparent opacity-60"></div>
            )}

            <div className="relative z-10 transition-transform duration-500">
              {service.icon}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold font-syne uppercase tracking-tight mb-4 text-white group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-[14px] font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-700"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(FeaturedServices);
