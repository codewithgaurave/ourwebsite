import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic Plan",
    price: "31.99",
    desc: "Perfect for startups looking to establish their digital presence with essential web and mobile development services.",
    features: [
      "Responsive Web Development",
      "Basic Mobile App (Single Platform)",
      "UI/UX Design (Up to 5 Pages)",
      "Basic API Integration",
      "Monthly Performance Reports",
      "Email Support Included",
    ],
    isPopular: false,
    color: "purple",
  },
  {
    name: "Premium Plan",
    price: "76.99",
    desc: "Advanced development solution for businesses needing custom software, cross-platform apps, cloud deployment, and DevOps automation.",
    features: [
      "Custom Software Development",
      "Cross-Platform Mobile Apps",
      "Desktop App Development",
      "Game Development (Unity/Unreal)",
      "GraphQL API Development",
      "Cloud Deployment (AWS/Azure)",
      "DevOps & CI/CD Pipeline",
      "Advanced UI/UX Design System",
      "Priority Support Access",
    ],
    isPopular: true,
    color: "blue",
  },
  {
    name: "STANDARD PLAN",
    price: "46.99",
    desc: "Balanced package with web applications, ecommerce solutions, and RESTful API development for growing businesses.",
    features: [
      "Custom Web App Development",
      "Ecommerce Store Setup",
      "RESTful API Development",
      "Database Design & Integration",
      "Cloud Hosting Setup",
      "Campaign Performance Tracking",
      "Dedicated Email Support",
    ],
    isPopular: false,
    color: "purple",
  },
];




const PricingSection = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-10"
      style={{
        background:
          "linear-gradient(to right, #281926, #37313F, #3F4A5A, #25303D)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#6B3A5B]"></div>
            <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-[2px]">
              Our Pricing
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[48px] lg:text-6xl font-[300] font-unbounded text-white leading-[1.1] uppercase tracking-tighter max-w-4xl mx-auto">
            SMART PRICING FOR <br />
            SMART CHOICES.
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-end ">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group ${plan.isPopular ? "z-10" : "z-0"}`}
            >
              {/* Popular Highlight - Outer Glow */}
              {plan.isPopular && (
                <div className="absolute -inset-[2px] bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent rounded-[32px] -z-10 blur-xl opacity-50"></div>
              )}

              {/* Main Card */}
              <div
                className={`relative px-5 sm:px-6 md:px-8 py-8 md:py-12 rounded-2xl md:rounded-[32px] border transition-all duration-500 flex flex-col h-full hover:translate-y-[-10px] cursor-pointer ${plan.isPopular
                    ? "border-white/20 shadow-[0_0_60px_rgba(74,98,132,0.2)] min-h-[600px] md:min-h-[780px]"
                    : "bg-white/[0.03] border-white/5 hover:border-white/10 min-h-[550px] md:min-h-[700px]"
                  }`}
                style={
                  plan.isPopular
                    ? {
                      background:
                        "linear-gradient(to bottom right, #1B2737, #404F62, #373250, #4A6284)",
                    }
                    : {}
                }
              >
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${plan.isPopular ? "bg-purple-500" : "bg-purple-900/60"}`}
                    ></div>
                    <span className="text-white/80 font-medium">
                      {plan.name}
                    </span>
                  </div>
                  {plan.isPopular && (
                    <span className="px-4 py-1.5 rounded-full bg-black/40 text-white text-xs font-bold border border-white/10 uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-[48px] md:text-[64px] font-[300] font-unbounded text-white leading-none">
                    ${plan.price}
                  </span>
                  <span className="text-white/40 font-medium text-lg">
                    /Month
                  </span>
                </div>

                {/* Desc */}
                <p className="text-gray-400 text-[15px] leading-relaxed mb-10">
                  {plan.desc}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-10"></div>

                {/* Features List */}
                <ul className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9b4dca] mt-2"></div>
                      <span className="text-white/70 text-[15px] leading-tight font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Link
                  to="/pricing"
                  className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 group/btn cursor-pointer ${plan.isPopular
                      ? "bg-[#6B3054] hover:bg-[#823b66] border border-white/10"
                      : "bg-white/[0.05] hover:bg-white/[0.1] border border-white/5"
                    }`}
                >
                  <span className="text-sm font-bold text-white uppercase tracking-widest">
                    Learn More
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-white group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Disclaimer Footer */}
                <p className="mt-10 text-[12px] text-white/30 italic leading-relaxed">
                  *Perfect balance between affordability and performance
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(PricingSection);
