import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Users,
  Cpu,
  Layout,
  BarChart3,
  Settings,
  CheckCircle2,
  HeartHandshake,
  Smartphone,
  Trophy,
  Rocket,
  Wrench,
  GraduationCap,
  Sparkles,
  PieChart,
  Gamepad2,
  Laptop,
  Cloud,
  Database,
  Blocks,
} from "lucide-react";

const Team = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const coreTeam = [
    {
      role: "Founder & Technical Lead",
      icon: <Settings className="text-purple-400" size={40} />,
      desc: "Leads the technical vision of the company, oversees development architecture, ensures scalability, performance, and security of all projects.",
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/20",
    },
    {
      role: "UI/UX Designer",
      icon: <Layout className="text-blue-400" size={40} />,
      desc: "Designs modern, user-friendly, and responsive interfaces that enhance user experience and improve customer engagement.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/20",
    },
    {
      role: "Full Stack Developer",
      icon: <Smartphone className="text-green-400" size={40} />,
      desc: "Builds secure and scalable web applications using modern technologies, ensuring smooth performance and reliability.",
      color: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/20",
    },
    {
      role: "Mobile App Developer",
      icon: <Smartphone className="text-cyan-400" size={40} />,
      desc: "Develops high-performance iOS and Android applications with native and cross-platform technologies for seamless user experiences.",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "border-cyan-500/20",
    },
    {
      role: "Game Developer",
      icon: <Gamepad2 className="text-pink-400" size={40} />,
      desc: "Creates engaging 2D and 3D games for mobile, desktop, and web platforms using Unity, Unreal Engine, and custom frameworks.",
      color: "from-pink-500/20 to-transparent",
      borderColor: "border-pink-500/20",
    },
    {
      role: "Backend Developer",
      icon: <Database className="text-orange-400" size={40} />,
      desc: "Builds robust server-side applications, APIs, and database architectures that power modern web and mobile applications.",
      color: "from-orange-500/20 to-transparent",
      borderColor: "border-orange-500/20",
    },
    {
      role: "Cloud Engineer",
      icon: <Cloud className="text-sky-400" size={40} />,
      desc: "Designs and manages cloud infrastructure on AWS, Azure, and GCP, ensuring scalability, security, and cost optimization.",
      color: "from-sky-500/20 to-transparent",
      borderColor: "border-sky-500/20",
    },
    {
      role: "DevOps Engineer",
      icon: <Wrench className="text-emerald-400" size={40} />,
      desc: "Implements CI/CD pipelines, infrastructure automation, and containerization for faster and more reliable deployments.",
      color: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/20",
    },
    {
      role: "Blockchain Developer",
      icon: <Blocks className="text-violet-400" size={40} />,
      desc: "Develops decentralized applications, smart contracts, and blockchain solutions for secure and transparent systems.",
      color: "from-violet-500/20 to-transparent",
      borderColor: "border-violet-500/20",
    },
    {
      role: "SEO & Digital Marketing Specialist",
      icon: <BarChart3 className="text-pink-400" size={40} />,
      desc: "Creates data-driven marketing strategies that improve search rankings, increase website traffic, and generate quality leads.",
      color: "from-pink-500/20 to-transparent",
      borderColor: "border-pink-500/20",
    },
    {
      role: "Project Manager",
      icon: <PieChart className="text-orange-400" size={40} />,
      desc: "Coordinates projects, communicates with clients, ensures timely delivery, and maintains quality standards.",
      color: "from-orange-500/20 to-transparent",
      borderColor: "border-orange-500/20",
    },
  ];

  const workCulture = [
    {
      text: "Innovation & Continuous Learning",
      icon: <GraduationCap size={20} />,
    },
    { text: "Transparent Communication", icon: <CheckCircle2 size={20} /> },
    { text: "Team Collaboration", icon: <Users size={20} /> },
    { text: "Quality Over Quantity", icon: <Trophy size={20} /> },
    { text: "Client Satisfaction First", icon: <HeartHandshake size={20} /> },
  ];

  return (
    <div
      className="min-h-screen selection:bg-purple-500 selection:text-white"
      style={{
        background:
          "linear-gradient(to right, #0A0510, #3C3243, #434456, #283645, #1A2533)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
      </div>

      <main className="w-full pt-32 pb-20 overflow-hidden">
        {/* ⭐ Team Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20 lg:mb-32">
          <div className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-10 md:p-20 shadow-3xl">
            {/* Animated Glow Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full -ml-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full -mr-32 -mb-32 animate-pulse"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/20 to-blue-500/20 border border-white/10 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
                <Users size={18} className="text-purple-400" /> OUR EXPERTS
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Meet The{" "}
                <span className="bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Experts
                </span>{" "}
                Behind Your Digital Growth
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Our team is made up of skilled developers, creative designers,
                SEO strategists, game developers, mobile app developers, cloud engineers,
                DevOps specialists, blockchain developers, and digital marketing professionals who are
                passionate about building powerful digital solutions.
              </p>
              <div className="flex items-center gap-4 text-purple-400 font-medium">
                <Sparkles size={24} />
                <span>
                  Great results come from teamwork, innovation, and continuous
                  learning.
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⭐ Intro Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Behind every success is a{" "}
                <span className="text-purple-400">dedicated team.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Behind every successful project is a dedicated team working with
                commitment and expertise. Our professionals combine technical
                knowledge with creative thinking to deliver high-performance
                software, modern websites, mobile apps, games, desktop applications,
                cloud solutions, and impactful digital strategies.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">10+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">
                    Experts
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">
                    Dedication
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">
                    Support
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                We focus on collaboration, transparency, and long-term
                partnerships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-blue-600/20 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                alt="Our Vision"
                className="relative z-10 rounded-[3rem] border border-white/10 shadow-3xl w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* ⭐ Core Team Structure */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              CORE TEAM STRUCTURE
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our structured approach ensures every aspect of your project is
              handled by a specialized expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative p-10 rounded-[2.5rem] bg-white/5 border ${member.borderColor} transition-all duration-500 hover:bg-white/10 h-full flex flex-col`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-b ${member.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]`}
                ></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {member.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {member.role}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⭐ Work Culture & Why Us combined effect */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-24 lg:mb-32">
          <div className="relative rounded-[4rem] bg-[#0A0510] border border-white/5 overflow-hidden p-12 md:p-24 shadow-inner">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 flex items-center gap-4">
                  <Rocket className="text-purple-500" /> OUR CULTURE
                </h2>
                <div className="space-y-6">
                  {workCulture.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeIn}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all cursor-default group"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <span className="text-lg text-gray-200 font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                  WHY OUR TEAM <span className="text-blue-500">STANDS OUT</span>
                </h2>
                <p className="text-gray-300 text-xl leading-relaxed mb-8">
                  Our strength lies in combining technical expertise with
                  strategic thinking. Each team member plays a crucial role in
                  delivering solutions that are efficient, scalable, and
                  future-ready.
                </p>
                <div className="p-8 rounded-3xl bg-linear-to-br from-purple-600 to-blue-600 text-white shadow-2xl">
                  <p className="text-xl font-bold italic leading-relaxed">
                    "We don't just complete projects — we build long-term
                    digital success stories."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ Team Closing Statement */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12 md:p-24 text-center group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                <HeartHandshake size={44} className="text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Together, we work with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  one goal
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Helping businesses grow through smart technology and innovative
                digital solutions — from mobile apps and web development to games,
                desktop software, cloud infrastructure, and enterprise systems.
              </p>
              <button className="px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Join Our Journey
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
