import React, { useState, useEffect } from "react";
import { Search, ChevronDown, X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Home", dropdown: null },
  { name: "About Us", dropdown: ["About Us", "Team"] },
  { name: "Services", dropdown: null },
  { name: "Pages", dropdown: ["Pricing Plan", "FAQs", "Blog"] },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#0b0612]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 text-white w-full relative">
          {/* Logo Section */}
          <div className="flex-shrink-0 z-50">
            <NavLink to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[36px] md:h-[42px] object-contain"
              />
            </NavLink>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10 text-[16px] font-semibold text-gray-200 absolute left-1/2 -translate-x-1/2">
            <NavLink
              to="/"
              className="cursor-pointer transition-all duration-300 hover:text-purple-400"
            >
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div className="relative group/dropdown">
              <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-all duration-300 py-4">
                About Us{" "}
                <ChevronDown
                  size={14}
                  className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-full left-0 w-[220px] opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-500 z-50 pt-2">
                <div className="bg-[#0b0612]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-xl">
                  <NavLink
                    to="/about-us"
                    className="block px-6 py-4 text-[15px] font-medium text-white hover:bg-white/5 transition-colors border-b border-white/5"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/team"
                    className="block px-6 py-4 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                  >
                    Team
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/services"
              className="cursor-pointer transition-all duration-300 hover:text-purple-400"
            >
              Services
            </NavLink>

            {/* Pages Dropdown */}
            <div className="relative group/dropdown">
              <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-all duration-300 py-4">
                Pages{" "}
                <ChevronDown
                  size={14}
                  className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-full left-0 w-[220px] opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-500 z-50 pt-2">
                <div className="bg-[#0b0612]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-xl">
                  <NavLink
                    to="/pricing"
                    className="block px-6 py-4 text-[15px] font-medium text-white hover:bg-white/5 transition-colors border-b border-white/5"
                  >
                    Pricing Plan
                  </NavLink>
                  <NavLink
                    to="/faqs"
                    className="block px-6 py-4 text-[15px] font-medium text-white hover:bg-white/5 transition-colors border-b border-white/5"
                  >
                    FAQs
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="block px-6 py-4 text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
                  >
                    Blog
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Contact Button */}
            <NavLink
              to="/contact"
              className="hidden sm:flex relative group h-[46px] md:h-[52px] w-[150px] md:w-[190px] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(43,91,163,0.3)] cursor-pointer items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#0d0714]"></div>
              <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#2b5ba3]/60 to-transparent blur-md group-hover:from-[#2b5ba3]/80 transition-all"></div>
              <div className="absolute inset-0 border border-white/10 rounded-full"></div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-[13px] md:text-[15px] font-bold tracking-wider text-white">
                Contact Us
              </span>
            </NavLink>

            {/* Search Icon */}
            <div
              className="cursor-pointer group p-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search
                size={20}
                className="text-white group-hover:scale-110 transition-transform"
              />
            </div>

            {/* Hamburger Menu Toggle */}
            <div
              className="lg:hidden cursor-pointer group p-2 z-50 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-[#0b0612] z-[40] flex flex-col p-10 pt-32 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {item.dropdown ? (
                    <div className="flex items-center justify-between text-2xl font-bold text-white uppercase tracking-tight">
                      {item.name}
                      <ChevronDown size={20} className="opacity-50" />
                    </div>
                  ) : (
                    <NavLink
                      to={
                        item.name === "Home"
                          ? "/"
                          : item.name === "Services"
                            ? "/services"
                            : "#"
                      }
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold text-white uppercase tracking-tight hover:text-purple-400 transition-colors"
                    >
                      {item.name}
                    </NavLink>
                  )}
                  {item.dropdown && (
                    <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={
                            sub === "About Us"
                              ? "/about-us"
                              : sub === "Team"
                                ? "/team"
                                : sub === "Services"
                                  ? "/services"
                                  : sub === "Pricing Plan"
                                    ? "/pricing"
                                    : sub === "FAQs"
                                      ? "/faqs"
                                      : sub === "Blog"
                                        ? "/blog"
                                        : "#"
                          }
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg text-white/50 hover:text-purple-400 transition-colors"
                        >
                          {sub}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="sm:hidden relative group h-[52px] w-full rounded-full overflow-hidden mt-8 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#0d0714]"></div>
                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#2b5ba3]/60 to-transparent blur-md group-hover:from-[#2b5ba3]/80 transition-all"></div>
                <div className="absolute inset-0 border border-white/10 rounded-full"></div>
                <span className="relative z-10 text-[15px] font-bold tracking-wider text-white">
                  Contact Us
                </span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default React.memo(Navbar);
