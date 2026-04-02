import React from "react";
import { ArrowRight, BarChart3, Users, Edit3, Smartphone, Monitor, AppWindow, Code2, Gamepad2, Laptop, Cloud, Database, Palette, ShoppingCart, Blocks, Settings } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "MOBILE APP DEVELOPMENT",
    desc: "Build high-performance iOS and Android applications with native and cross-platform technologies. Our apps deliver seamless user experiences and robust functionality.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    icon: <Smartphone className="text-white" size={24} />,
  },
  {
    title: "WEB DEVELOPMENT",
    desc: "Create stunning, responsive websites with modern frontend and backend technologies. We build fast, secure, and SEO-optimized web solutions for your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    icon: <Monitor className="text-white" size={24} />,
  },
  {
    title: "WEB APP DEVELOPMENT",
    desc: "Develop powerful web applications with real-time features, offline capabilities, and cloud integration. Progressive Web Apps that work like native applications.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    icon: <AppWindow className="text-white" size={24} />,
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    desc: "Custom enterprise software solutions including ERP, CRM, and business automation tools. We build scalable software that streamlines your operations.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    icon: <Code2 className="text-white" size={24} />,
  },
  {
    title: "GAME DEVELOPMENT",
    desc: "Create engaging 2D and 3D games for mobile, desktop, and web platforms. We use Unity, Unreal Engine, and custom frameworks for immersive gaming experiences.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop",
    icon: <Gamepad2 className="text-white" size={24} />,
  },
  {
    title: "DESKTOP APP DEVELOPMENT",
    desc: "Build powerful desktop applications for Windows, macOS, and Linux. We deliver native performance with modern UI frameworks and seamless system integration.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    icon: <Laptop className="text-white" size={24} />,
  },
  {
    title: "API DEVELOPMENT",
    desc: "Design and develop RESTful and GraphQL APIs with robust authentication, comprehensive documentation, and scalable architecture for your applications.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    icon: <Database className="text-white" size={24} />,
  },
  {
    title: "CLOUD DEVELOPMENT",
    desc: "Deploy and manage cloud-native applications on AWS, Azure, and GCP. We ensure auto-scaling, high availability, and cost-effective cloud solutions.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
    icon: <Cloud className="text-white" size={24} />,
  },
  {
    title: "UI/UX DESIGN",
    desc: "Create intuitive and visually stunning user interfaces with user-centered design principles. We deliver pixel-perfect designs that enhance user engagement.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    icon: <Palette className="text-white" size={24} />,
  },
  {
    title: "E-COMMERCE DEVELOPMENT",
    desc: "Build scalable online stores with secure payment gateways, inventory management, and seamless shopping experiences that drive conversions and sales.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    icon: <ShoppingCart className="text-white" size={24} />,
  },
  {
    title: "BLOCKCHAIN DEVELOPMENT",
    desc: "Develop decentralized applications, smart contracts, and blockchain solutions. We build secure, transparent, and immutable systems for your business.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    icon: <Blocks className="text-white" size={24} />,
  },
  {
    title: "DEVOPS SERVICES",
    desc: "Implement CI/CD pipelines, infrastructure automation, and containerization. We streamline development workflows for faster and more reliable deployments.",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop",
    icon: <Settings className="text-white" size={24} />,
  },
  {
    title: "ADVANCED ANALYTICS",
    desc: "Gain valuable insights through advanced analytics tools that track performance, user behavior, and marketing effectiveness to improve business decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    icon: <BarChart3 className="text-white" size={24} />,
  },
  {
    title: "EXPERT CONSULTANCY",
    desc: "Get professional guidance from industry experts to choose the right digital strategies, technologies, and solutions for sustainable business growth.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    icon: <Users className="text-white" size={24} />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24" style={{ background: "#0A0C1F" }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        {/* Header Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#141627] backdrop-blur-md border border-white/5 rounded-2xl p-10 md:p-16 mb-16 relative overflow-hidden "
        >
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative py-8 px-4"
            >
              {/* This container gives space for the tilted cards peeking out */}
              <div className="relative group isolate h-full">
                {/* 1st Layer (Backmost) - Tilted Left */}
                <div
                  className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-2xl -z-20 transition-all duration-700"
                  style={{ transform: "rotate(-6deg) scale(1.02)" }}
                ></div>

                {/* Main Card Container */}
                <div className="relative z-10 bg-[#1a1c2e] border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-500 group-hover:border-white/20 h-full flex flex-col">
                  {/* Service Image (Rounded edges) */}
                  <div
                    className="rounded-2xl overflow-hidden aspect-[1/1] mb-8 relative"
                    style={{ transform: "rotate(4deg) scale(1.01)" }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ServicesGrid);
