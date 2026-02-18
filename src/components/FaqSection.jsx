import React, { useState } from "react";
import { ArrowUpCircle, ArrowDownCircle, ArrowRight } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "HOW TO CHANGE MY PHOTO FROM ADMIN DASHBOARD?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      question: "HOW TO CHANGE MY PASSWORD EASILY?",
      answer:
        "To change your password, navigate to the Profile Settings in your dashboard, click on 'Security', and follow the prompts to update your credentials.",
    },
    {
      question: "HOW TO CHANGE MY SUBSCRIPTION PLAN USING PAYPAL?",
      answer:
        "You can update your subscription by going to the Billing section. Select your new plan, choose PayPal as the payment method, and confirm the transaction.",
    },
  ];

  return (
    <section
      className="py-28 px-4 md:px-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #281926, #37313F, #3F4A5A, #25303D)",
      }}
    >
      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-[#0A0C1F]/40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-purple-900/10 blur-[180px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[180px]"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header Area - Precise Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
              <span className="text-white/60 text-[13px] font-bold uppercase tracking-[4px]">
                Our FAQs
              </span>
            </div>
            <h2 className="text-[36px] md:text-[52px] lg:text-5xl font-[300] font-unbounded text-white leading-[1.05] uppercase tracking-tighter">
              FROM CURIOUS TO <br />
              CONFIDENT IN SECONDS.
            </h2>
          </div>

          <button className="flex-shrink-0 mt-10 px-9 py-4 hover:py-5 hover:px-10 cursor-pointer rounded-full border border-white/10  transition-all duration-500 flex items-center gap-4 group">
            <span className="text-[12px] font-[700] text-white uppercase tracking-[2px]">
              Learn More
            </span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500">
              <ArrowRight
                size={14}
                className="text-white transition-all duration-500"
              />
            </div>
          </button>
        </div>

        {/* FAQs Grid - Perfectly Balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {[0, 1].map((colIndex) => (
            <div
              key={colIndex}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-700 hover:border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              <div className="flex flex-col gap-8">
                {faqs.map((faq, idx) => {
                  const globalIdx = colIndex === 0 ? idx : idx + 3; // For future content
                  const isActive = activeIndex === globalIdx;

                  return (
                    <div
                      key={idx}
                      className={`${idx !== 0 ? "border-t border-white/5 pt-8 mt-8" : ""} transition-all duration-500`}
                    >
                      <div
                        className="flex items-start gap-5 cursor-pointer group"
                        onClick={() =>
                          setActiveIndex(isActive ? -1 : globalIdx)
                        }
                      >
                        {/* Icon - Circular Purple Arrows */}
                        <div className="mt-1 flex-shrink-0">
                          {isActive ? (
                            <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-500">
                              <ArrowUpCircle
                                className="text-white"
                                size={18}
                                strokeWidth={2.5}
                              />
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500">
                              <ArrowDownCircle
                                className="text-purple-500/60 group-hover:text-purple-500"
                                size={18}
                                strokeWidth={2.5}
                              />
                            </div>
                          )}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1">
                          <h3
                            className={`text-[17px] md:text-[19px] font-[300] font-unbounded transition-all duration-500 uppercase tracking-tight leading-tight ${
                              isActive
                                ? "text-white"
                                : "text-white/40 group-hover:text-white/80"
                            }`}
                          >
                            {faq.question}
                          </h3>

                          <div
                            className={`grid transition-all duration-500 ease-in-out ${
                              isActive
                                ? "grid-rows-[1fr] opacity-100 mt-6"
                                : "grid-rows-[0fr] opacity-0 mt-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-gray-400 text-[15px] md:text-[16px] leading-[1.8] font-medium max-w-xl">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
