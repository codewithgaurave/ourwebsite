import React, { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center px-10 py-6 bg-transparent text-white w-full z-50 relative">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-[42px] object-contain" />
          </NavLink>
        </div>

        {/* Nav Links - Pushed to right of center */}
        <div className="hidden md:flex items-center gap-10 text-[16px] font-semibold text-gray-200 ml-auto mr-16">
          <span className="cursor-pointer transition-all duration-300 hover:text-purple-400">
            Home
          </span>

          {/* About Us Dropdown */}
          <div className="relative group/dropdown">
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-all duration-300 py-4">
              About Us{" "}
              <ChevronDown
                size={14}
                className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-full left-0 w-[200px] opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 z-50 pt-2">
              <div className="bg-[#0b0612] border-t-2 border-purple-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Team
                </a>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group/dropdown">
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-all duration-300 py-4">
              Services{" "}
              <ChevronDown
                size={14}
                className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-full left-0 w-[200px] opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 z-50 pt-2">
              <div className="bg-[#0b0612] border-t-2 border-purple-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Single Services
                </a>
              </div>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group/dropdown">
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-all duration-300 py-4">
              Pages{" "}
              <ChevronDown
                size={14}
                className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-full left-0 w-[200px] opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 z-50 pt-2">
              <div className="bg-[#0b0612] border-t-2 border-purple-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Pricing Plan
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                >
                  404
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          {/* Contact Button from Image 1 */}
          <button className="relative group h-[52px] w-[190px] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(43,91,163,0.3)] cursor-pointer">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-[#0d0714]"></div>

            {/* The Specific Blue Glow on Right Side */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#2b5ba3]/60 to-transparent blur-md group-hover:from-[#2b5ba3]/80 transition-all"></div>

            {/* Border Inner */}
            <div className="absolute inset-0 border border-white/10 rounded-full"></div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Text */}
            <span className="relative z-10 text-[15px] font-bold tracking-wider text-white">
              Contact Us
            </span>
          </button>

          {/* Search Icon */}
          <div
            className="cursor-pointer group"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search
              size={20}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{
              height: 0,
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "50%",
            }}
            animate={{
              height: "100vh",
              borderTopLeftRadius: "0%",
              borderTopRightRadius: "0%",
            }}
            exit={{
              height: 0,
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "50%",
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0a0510]/80 z-[100] flex flex-col items-center justify-center p-6 overflow-hidden origin-bottom"
            style={{ bottom: 0, top: "auto" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/10 cursor-pointer transition-colors transform hover:rotate-90 duration-300"
            >
              <X size={24} />
            </button>

            {/* Search Input Field */}
            <div className="w-full max-w-2xl relative group">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className="w-full h-[65px] bg-transparent border-2 border-white rounded-full px-10 text-xl text-white placeholder-white border-white outline-none transition-all font-jakarta pr-16"
                />
                <div className="absolute right-6 cursor-pointer text-white transition-colors">
                  <Search size={24} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
