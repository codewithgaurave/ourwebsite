import React from "react";
import { Facebook, Twitter, Youtube, Phone, Send } from "lucide-react";
import logo from "../assets/logo.png";

const scrollingText = [
  "STRATEGY",
  "EXECUTION",
  "SUCCESS",
  "GROWTH",
  "INNOVATION",
];

const Footer = () => {
  return (
    <footer
      className="pt-24 pb-12 px-4 md:px-10 relative overflow-hidden"
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
      <div className="max-w-[1440px] mx-auto mb-20">
        <div className="relative py-1 border border-white/5 rounded-[30px] bg-white/[0.02] backdrop-blur-md overflow-hidden">
          <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                {scrollingText.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-[40px] md:text-[60px] lg:text-[80px] font-unbounded font-[300] text-white/10 uppercase tracking-tighter">
                      {text}
                    </span>
                    <span className="text-purple-500/30 text-4xl font-bold">
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
        <div className="relative p-8 md:p-14 lg:p-20 border border-white/5 rounded-[40px] bg-white/[0.02] backdrop-blur-md">
          {/* Top Section: Logo & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-start">
            {/* Logo & Description */}
            <div className="flex flex-col">
              <div className="mb-10">
                <img
                  src={logo}
                  alt="Optivexa Logo"
                  className="h-[48px] object-contain"
                />
              </div>
              <p className="text-white/40 text-[16px] leading-[1.8] font-medium max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col lg:items-end w-full">
              <div className="w-full max-w-lg">
                <h3 className="text-[24px] md:text-3xl font-unbounded font-[300] text-white uppercase tracking-tight mb-10">
                  OUR NEWSLETTERS
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 w-full h-fit">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-8 py-[18px] text-white text-sm focus:outline-none focus:border-purple-500/30 transition-all placeholder:text-white/20"
                    />
                  </div>
                  <button className="px-10 py-[18px] bg-gradient-to-r from-[#261221] via-[#2D1B36] to-[#202D45] hover:opacity-90 cursor-pointer text-white rounded-full text-sm font-[700] uppercase tracking-[2px] whitespace-nowrap shadow-2xl transition-all duration-500">
                    Submit Button
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/5 mb-16"></div>

          {/* Middle Section: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8 relative inline-block">
                Navigation
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <ul className="space-y-4">
                {["Home", "Pages", "About Us", "Services"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-[15px] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8 relative inline-block">
                Quick Link
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <ul className="space-y-4">
                {["Pages", "Contact", "About Us", "404"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-[15px] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <ul className="space-y-4">
                {["Contact Us", "FAQs", "Booking", "Services"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-[15px] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8 relative inline-block">
                Location
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500"></span>
              </h4>
              <div className="text-white/40 text-[15px] leading-relaxed mb-8">
                123 High Street Kensington
                <br />
                London W8 7NX United Kingdom
              </div>
              <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer text-white text-sm font-bold uppercase transition-all">
                <Phone size={16} className="text-purple-400" />
                Call Us
              </button>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/5 mb-10"></div>

          {/* Bottom Section: Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white/40 text-sm">
              SEO Digital Agency Template Kit by Kitpro
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                {[Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all"
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="text-white/40 hover:text-white text-sm transition-colors"
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
