import React from "react";
import { Facebook, Twitter, Youtube, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const scrollingText = [
  "APP DEVELOPMENT",
  "WEB DEVELOPMENT",
  "WEB APPS",
  "SOFTWARE",
  "STRATEGY",
  "EXECUTION",
  "SUCCESS",
  "GROWTH",
  "INNOVATION",
];

const Footer = () => {
  return (
    <footer
      className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #261221, #2A1625, #342C3B, #0A0C1F, #25303B, #0A0C1F)",
      }}
    >
      {/* Background Glow Overlays for depth */}
      <div className="absolute inset-0 bg-[#0A0C1F]/20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 blur-[150px]"></div>
      </div>
      {/* Scrolling Ticker Section */}
      <div className="max-w-[1440px] mx-auto mb-12 md:mb-20">
        <div className="relative py-1 border border-white/5 rounded-[20px] md:rounded-[30px] bg-white/[0.02] backdrop-blur-md overflow-hidden">
          <div className="flex gap-10 md:gap-20 animate-infinite-scroll whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-10 md:gap-20 items-center">
                {scrollingText.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-[24px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-unbounded font-[300] text-white/10 uppercase tracking-tighter">
                      {text}
                    </span>
                    <span className="text-purple-500/30 text-2xl md:text-4xl font-bold">
                      *
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="relative p-5 sm:p-8 md:p-14 lg:p-20 border border-white/5 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-white/[0.02] backdrop-blur-md">
          {/* Top Section: Logo & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-20 items-start">
            {/* Logo & Description */}
            <div className="flex flex-col">
              <div className="mb-6 md:mb-10">
                <img
                  src={logo}
                  alt="Optivexa Logo"
                  className="h-[36px] md:h-[48px] object-contain"
                />
              </div>
              <p className="text-white/40 text-[14px] md:text-[16px] leading-[1.8] font-medium max-w-sm">
                We deliver innovative digital solutions including mobile app development,
                web development, web app development, software services, and SEO strategies to help
                businesses grow online successfully.
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col lg:items-end w-full">
              <div className="w-full max-w-lg">
                <h3 className="text-[20px] md:text-[24px] lg:text-3xl font-unbounded font-[300] text-white uppercase tracking-tight mb-6 md:mb-10">
                  OUR NEWSLETTERS
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 w-full h-fit">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-[18px] text-white text-sm focus:outline-none focus:border-purple-500/30 transition-all placeholder:text-white/20"
                    />
                  </div>
                  <button className="px-8 md:px-10 py-3 md:py-[18px] bg-gradient-to-r from-[#261221] via-[#2D1B36] to-[#202D45] hover:opacity-90 cursor-pointer text-white rounded-full text-sm font-[700] uppercase tracking-[2px] whitespace-nowrap shadow-2xl transition-all duration-500">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/5 mb-16"></div>

          {/* Middle Section: Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-[2px] mb-6 md:mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about-us" },
                  { name: "Team", path: "/team" },
                  { name: "Services", path: "/services" },
                  { name: "Pricing Plan", path: "/pricing" },
                  { name: "Blog", path: "/blog" },
                  { name: "FAQs", path: "/faqs" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-white/40 hover:text-white text-[13px] md:text-[15px] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-[2px] mb-6 md:mb-8 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3">
                {[
                  { name: "Mobile App Dev", path: "/services/mobile-app-development" },
                  { name: "Web Development", path: "/services/web-development" },
                  { name: "Web App Dev", path: "/services/web-app-development" },
                  { name: "Software Dev", path: "/services/software-development" },
                  { name: "Game Dev", path: "/services/game-development" },
                  { name: "Desktop App Dev", path: "/services/desktop-app-development" },
                  { name: "API Development", path: "/services/api-development" },
                  { name: "Cloud Development", path: "/services/cloud-development" },
                  { name: "Blockchain Dev", path: "/services/blockchain-development" },
                  { name: "DevOps Services", path: "/services/devops-services" },
                  { name: "UI/UX Design", path: "/services/ui-ux-design" },
                  { name: "Ecommerce Dev", path: "/services/ecommerce-development" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-white/40 hover:text-white text-[11px] md:text-[13px] transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-[2px] mb-6 md:mb-8 relative inline-block">
                Location
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <div className="text-white/40 text-[13px] md:text-[15px] leading-relaxed mb-6 md:mb-8">
                123 High Street Kensington
                <br />
                London W8 7NX United Kingdom
              </div>
              <button className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer text-white text-xs md:text-sm font-bold uppercase transition-all">
                <Phone size={14} className="text-purple-400 md:hidden" />
                <Phone size={16} className="text-purple-400 hidden md:block" />
                Call Us
              </button>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/5 mb-10"></div>

          {/* Bottom Section: Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-white/40 text-xs md:text-sm">
              &copy; 2026 Optivexa. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex gap-3 md:gap-4">
                {[Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all"
                  >
                    <Icon size={16} className="text-white md:hidden" />
                    <Icon size={18} className="text-white hidden md:block" />
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="text-white/40 hover:text-white text-xs md:text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Definitions (Tailwind doesn't have infinite scroll by default) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 5s linear infinite;
        }
      `,
        }}
      />
    </footer>
  );
};

export default React.memo(Footer);
