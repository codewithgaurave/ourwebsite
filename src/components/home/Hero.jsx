import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Sparkles, Code2, Smartphone, Globe, Cpu, Database, Cloud, Blocks, Settings, Palette, Gamepad2, Zap, Award, Users, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import favicon from '../../assets/favicon.png'

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
];

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Node", color: "#68A063" },
  { name: "Python", color: "#3776AB" },
  { name: "TS", color: "#3178C6" },
  { name: "Flutter", color: "#02569B" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Mongo", color: "#47A248" },
  { name: "Java", color: "#E76F00" },
  { name: "Go", color: "#00ADD8" },
  { name: "Rust", color: "#DEA584" },
  { name: "K8s", color: "#326CE5" },
];

const services = [
  { icon: <Smartphone size={16} />, name: "Mobile Apps", route: "/services/mobile-app-development" },
  { icon: <Globe size={16} />, name: "Web Dev", route: "/services/web-development" },
  { icon: <Code2 size={16} />, name: "Web Apps", route: "/services/web-app-development" },
  { icon: <Cpu size={16} />, name: "Software", route: "/services/software-development" },
  { icon: <Gamepad2 size={16} />, name: "Games", route: "/services/game-development" },
  { icon: <Database size={16} />, name: "APIs", route: "/services/api-development" },
  { icon: <Cloud size={16} />, name: "Cloud", route: "/services/cloud-development" },
  { icon: <Blocks size={16} />, name: "Blockchain", route: "/services/blockchain-development" },
  { icon: <Settings size={16} />, name: "DevOps", route: "/services/devops-services" },
  { icon: <Palette size={16} />, name: "UI/UX", route: "/services/ui-ux-design" },
];

const stats = [
  { num: "500+", label: "Projects" },
  { num: "98%", label: "Clients" },
  { num: "12+", label: "Years" },
];

const RotatingCircle = () => {
  return (
    <div className="relative w-52 h-52">
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-purple-500/30"></div>
      
      {/* Inner Ring */}
      <div className="absolute inset-2 rounded-full border border-dashed border-purple-400/20"></div>
      
      {/* Rotating Icons Ring - Using Framer Motion */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {techIcons.map((tech, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const r = 85;
            const cx = 100 + r * Math.cos(angle);
            const cy = 100 + r * Math.sin(angle);
            return (
              <g key={i}>
                {/* Glow effect */}
                <circle cx={cx} cy={cy} r="12" fill={tech.color} opacity="0.3" />
                {/* Main circle */}
                <circle cx={cx} cy={cy} r="10" fill={tech.color} />
                {/* Tech name */}
                <text 
                  x={cx} 
                  y={cy} 
                  fontSize="7" 
                  fontWeight="bold" 
                  fill="#fff" 
                  textAnchor="middle" 
                  dominantBaseline="central"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {tech.name}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>
      
      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={favicon} 
          alt="Optivexa" 
          className="w-16 h-16 rounded-full  shadow-lg"
          style={{ background: '#120f1280', padding: '4px' }}
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % clientReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const review = clientReviews[currentReview];

  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: "#0a0612" }}>
      {/* Simple Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #0a0612 0%, #100818 100%)
        `,
      }}></div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }}></div>

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden items-center justify-center min-h-screen px-6 py-28 relative z-10">
        {/* Rotating Circle - Mobile */}
        <div className="w-28 h-28 relative mb-4">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/30"></div>
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {techIcons.slice(0, 8).map((tech, i) => {
                const angle = (i * 45 - 90) * (Math.PI / 180);
                const r = 80;
                const cx = 100 + r * Math.cos(angle);
                const cy = 100 + r * Math.sin(angle);
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="10" fill={tech.color} />
                    <text x={cx} y={cy} fontSize="6" fontWeight="bold" fill="#fff" textAnchor="middle" dominantBaseline="central">{tech.name}</text>
                  </g>
                );
              })}
            </svg>
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={favicon}
              alt="Optivexa" 
              className="w-10 h-10 rounded-full shadow-lg"
              style={{ background: '#120f1280', padding: '2px' }}
            />
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-green-500/30 mb-3">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          <span className="text-green-400 text-[10px] font-bold uppercase">Available</span>
        </div>

        {/* Heading */}
        <h1 className="text-[28px] font-bold text-white text-center uppercase font-unbounded mb-2">
          <span className="text-purple-400">CREATE</span> FUTURE
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs text-center mb-3 max-w-[280px]">
          Software Development Company
        </p>

        {/* Description */}
        <p className="text-gray-500 text-xs text-center leading-relaxed mb-3 max-w-[300px]">
          Mobile apps, websites, web apps, software, games, APIs, cloud, blockchain & more.
        </p>

        {/* Services Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-3 max-w-[320px]">
          {services.slice(0, 6).map((service, i) => (
            <Link
              key={i}
              to={service.route}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300 hover:text-white hover:border-purple-500/30 transition-all"
            >
              {service.icon}
              <span>{service.name}</span>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-3">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-white font-bold text-base">{stat.num}</div>
              <div className="text-gray-500 text-[8px] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Review */}
        <div className="flex flex-col items-center mb-3 p-2.5 rounded-xl bg-white/5 border border-white/5 w-full max-w-[240px]">
          <img src={review.image} alt={review.name} className="w-6 h-6 rounded-full border border-purple-500/30 object-cover mb-1" />
          <p className="text-gray-300 text-[9px] italic text-center">"{review.text}"</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 w-full max-w-[220px]">
          <Link to="/contact" className="flex items-center justify-center gap-2 bg-purple-600 px-4 py-2 rounded-full text-xs font-bold uppercase text-white hover:bg-purple-700 transition-all">
            Start Project <ArrowRight size={11} />
          </Link>
          <Link to="/services" className="flex items-center justify-center gap-2 border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase text-white bg-white/[0.02] hover:bg-white/[0.05] transition-all">
            Services <Play size={11} />
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center min-h-screen px-16 py-40 relative z-10">
        <div className="grid grid-cols-12 w-full max-w-[1536px] gap-10 items-center">
          {/* Left Section - 4 columns */}
          <div className="col-span-4 flex flex-col justify-center min-h-[450px]">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-green-500/30 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Available for Projects</span>
            </div>

            {/* Client Slider */}
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 p-5 rounded-2xl border border-white/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full border border-purple-500/30 object-cover" />
                    <div>
                      <h3 className="text-white text-xs font-bold uppercase">{review.name}</h3>
                      <p className="text-gray-500 text-[10px]">{review.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs italic">"{review.text}"</p>
                </motion.div>
              </AnimatePresence>
              <div className="flex gap-2 mt-3">
                {clientReviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReview(i)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${
                      i === currentReview ? "bg-purple-500 w-8" : "bg-white/20 w-4"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Rotating Circle - Desktop */}
            <RotatingCircle />
          </div>

          {/* Right Section - 8 columns */}
          <div className="col-span-8 flex flex-col items-start pl-4">
            {/* Tag */}
            <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Software Development Company
            </span>

            {/* Main Heading */}
            <div className="mb-6 font-unbounded text-white uppercase">
              <h1 className="text-[80px] 2xl:text-[100px] font-bold leading-[0.9]">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CREATE</span>
              </h1>
              <h1 className="text-[80px] 2xl:text-[100px] font-bold leading-[0.9] -mt-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">FUTURE</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-6 max-w-lg">
              We build world-class digital solutions — from mobile apps and websites to enterprise software, cloud, blockchain, games & AI.
            </p>

            {/* Services Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={service.route}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-gray-300 hover:text-white hover:border-purple-500/30 transition-all"
                >
                  {service.icon}
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-12 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-white font-bold text-2xl">{stat.num}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Link to="/contact" className="flex items-center gap-3 bg-purple-600 px-8 py-4 rounded-full text-sm font-bold uppercase text-white hover:bg-purple-700 transition-all">
                Start Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="flex items-center gap-3 border border-white/10 px-8 py-4 rounded-full text-sm font-bold uppercase text-white bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                Our Services <Play size={16} />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Zap size={12} className="text-yellow-400" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Award size={12} className="text-purple-400" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Users size={12} className="text-blue-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0612] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default React.memo(Hero);
