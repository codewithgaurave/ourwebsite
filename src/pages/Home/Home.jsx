import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import BrandLogos from "../../components/BrandLogos";
import FeaturedServices from "../../components/FeaturedServices";
import AboutSection from "../../components/AboutSection";
import ScrollingText from "../../components/ScrollingText";
import ServicesGrid from "../../components/ServicesGrid";
import PricingSection from "../../components/PricingSection";
import Testimonials from "../../components/Testimonials";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen selection:bg-purple-500 selection:text-white pb-0"
      style={{
        background:
          "linear-gradient(to right, #0A0510, #3C3243, #434456, #283645, #1A2533)",
      }}
    >
      {/* Navbar stays outside but constrained */}
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
      </div>

      <main className="w-full">
        {/* Elements that need side padding */}
        <div className="px-4 md:px-10">
          {/* The "Main Card" container exactly matching the reference */}
          <div className="relative w-full max-w-[1440px] mx-auto min-h-[650px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
            <Hero />
          </div>

          {/* Logo Section */}
          <div className="max-w-[1440px] mx-auto mt-0">
            <BrandLogos />
          </div>
        </div>

        {/* Featured Services Section - Fully fluid width */}
        <div className="w-full">
          <FeaturedServices />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Infinite Scrolling Text */}
        <ScrollingText />

        {/* Services Grid Section */}
        <ServicesGrid />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FaqSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
};

export default React.memo(Home);
