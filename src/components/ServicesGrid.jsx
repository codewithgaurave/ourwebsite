import React from "react";
import { ArrowRight, BarChart3, Users, Edit3 } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "ADVANCED ANALYTICS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      icon: <BarChart3 className="text-white" size={24} />,
    },
    {
      title: "EXPERT CONSULTANCY",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      icon: <Users className="text-white" size={24} />,
    },
    {
      title: "CONTENT MARKETING",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
      icon: <Edit3 className="text-white" size={24} />,
    },
  ];

  return (
    <section className="py-24" style={{ background: "#0A0C1F" }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        {/* Header Box */}
        <div className="bg-[#141627] backdrop-blur-md border border-white/5 rounded-2xl p-10 md:p-16 mb-16 relative overflow-hidden ">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                <span className="text-sm font-bold tracking-[4px] uppercase text-white/50">
                  Featured Services
                </span>
              </div>
              {/* Heading */}
              <h2 className="text-[32px] md:text-[45px] lg:text-5xl font-[300] font-unbounded text-white uppercase leading-[1.2] tracking-tight">
                COMPREHENSIVE DIGITAL SOLUTIONS. SEAMLESS RESULTS.
              </h2>
            </div>
            {/* Learn More Button */}
            <button className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 hover:px-7 cursor-pointer hover:py-3 transition-all duration-300 group">
              <span className="text-white font-[300] text-sm uppercase tracking-wider">
                Learn More
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ArrowRight size={16} className="text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-24">
          {services.map((service, idx) => (
            <div key={idx} className="relative py-8 px-4">
              {/* This container gives space for the tilted cards peeking out */}
              <div className="relative group isolate h-full">
                {/* 1st Layer (Backmost) - Tilted Left */}
                <div
                  className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-2xl -z-20 transition-all duration-700"
                  style={{ transform: "rotate(-6deg) scale(1.02)" }}
                ></div>

                {/* 2nd Layer (Middle) - Tilted Right */}
                {/* <div
                  className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[35px] -z-10 transition-all duration-700"
                  style={{ transform: "rotate(4deg) scale(1.01)" }}
                ></div> */}

                {/* Main Card Container */}
                <div className="relative z-10 bg-[#1a1c2e] border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-500 group-hover:border-white/20 h-full flex flex-col">
                  {/* Service Image (Rounded edges) */}
                  <div className="rounded-2xl overflow-hidden aspect-[1/1] mb-8 relative" style={{ transform: "rotate(4deg) scale(1.01)" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c2e]/60 to-transparent"></div>
                  </div>

                  {/* Content Area (Icon + Text) */}
                  <div className="flex gap-5 items-start mb-10 px-1">
                    {/* Circular Icon Container */}
                    <div
                      className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border border-white/10 shadow-lg transition-all duration-500 ${
                        idx === 0
                          ? "bg-[#4B2A40]"
                          : idx === 1
                            ? "bg-[#324054]"
                            : "bg-[#403B52]"
                      } group-hover:scale-110`}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col">
                      <h3 className="text-[20px] font-bold font-unbounded text-white uppercase tracking-tight mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-[14px] leading-relaxed font-medium line-clamp-2">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Button - Exactly as pictured */}
                  <div className="mt-auto">
                    <button className="w-full py-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 flex items-center justify-center gap-3 group/btn cursor-pointer">
                      <span className="text-[11px] font-[600] text-white uppercase tracking-[2px]">
                        Learn More
                      </span>
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white transition-all">
                        <ArrowRight
                          size={12}
                          className="text-white group-hover/btn:text-[#0A0C1F] group-hover/btn:translate-x-0.5 transition-all outline-none"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
