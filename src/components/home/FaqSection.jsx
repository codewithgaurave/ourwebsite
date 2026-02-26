import React, { useState } from "react";
import { ArrowUpCircle, ArrowDownCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const FaqItem = React.memo(({ faq, isActive, onToggle, isFirst }) => {
  return (
    <motion.div
      layout
      className={`${!isFirst ? "border-t border-white/5 pt-8 mt-8" : ""}`}
    >
      <div
        className="flex items-start gap-5 cursor-pointer group"
        onClick={onToggle}
      >
        <div className="mt-1 flex-shrink-0">
          <motion.div
            layout
            animate={{
              backgroundColor: isActive
                ? "rgb(168, 85, 247)"
                : "rgba(168, 85, 247, 0)",
              borderColor: isActive
                ? "rgb(168, 85, 247)"
                : "rgba(168, 85, 247, 0.3)",
            }}
            transition={{ duration: 0.3 }}
            className="w-7 h-7 rounded-full border flex items-center justify-center"
          >
            {isActive ? (
              <ArrowUpCircle
                className="text-white"
                size={18}
                strokeWidth={2.5}
              />
            ) : (
              <ArrowDownCircle
                className="text-purple-500/60 group-hover:text-purple-500"
                size={18}
                strokeWidth={2.5}
              />
            )}
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.h3
            layout="position"
            animate={{
              color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
            }}
            className="text-[17px] md:text-[19px] font-[300] font-unbounded uppercase tracking-tight leading-tight group-hover:text-white/80 transition-colors"
          >
            {faq.question}
          </motion.h3>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  y: 0,
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 250,
                      damping: 32,
                    },
                    opacity: { duration: 0.2, delay: 0.1 },
                    y: { type: "spring", stiffness: 250, damping: 32 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  y: -10,
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 250,
                      damping: 32,
                    },
                    opacity: { duration: 0.2 },
                    y: { duration: 0.2 },
                  },
                }}
                className="overflow-hidden"
              >
                <div className="pt-6">
                  <p className="text-gray-400 text-[15px] md:text-[16px] leading-[1.8] font-medium max-w-xl">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
});

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
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
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 mt-10 px-9 py-4 hover:py-5 hover:px-10 cursor-pointer rounded-full border border-white/10  transition-all duration-500 flex items-center gap-4 group"
          >
            <span className="text-[12px] font-[700] text-white uppercase tracking-[2px]">
              Learn More
            </span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500">
              <ArrowRight
                size={14}
                className="text-white transition-all duration-500"
              />
            </div>
          </motion.button>
        </div>

        {/* FAQs Grid - Perfectly Balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {[0, 1].map((colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: colIndex * 0.2 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-700 hover:border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              <div className="flex flex-col gap-0 overflow-hidden">
                {faqs.map((faq, idx) => {
                  const globalIdx = colIndex === 0 ? idx : idx + 3;
                  return (
                    <FaqItem
                      key={globalIdx}
                      faq={faq}
                      isActive={activeIndex === globalIdx}
                      isFirst={idx === 0}
                      onToggle={() =>
                        setActiveIndex(
                          activeIndex === globalIdx ? -1 : globalIdx,
                        )
                      }
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FaqSection);
