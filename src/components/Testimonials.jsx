import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "HAZEL LILY",
    role: "Our Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
    isFeatured: false,
  },
  {
    name: "OWEN SAMUEL",
    role: "Our Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "DANIEL LEO",
    role: "Our Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
    isFeatured: false,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 md:px-10 bg-[#0A0C1F]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span className="text-white/60 text-sm font-medium uppercase tracking-[3px]">
              Our Testimonials
            </span>
          </div>
          <h2 className="text-[36px] md:text-[52px] lg:text-5xl font-[300] font-unbounded text-white leading-[1.1] uppercase tracking-tighter max-w-4xl mx-auto">
            HEAR IT FROM THOSE WHO <br />
            KNOW US BEST.
          </h2>
        </motion.div>

        {/* Testimonials Container - Flex for precise width control */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 pt-0 max-w-7xl mx-auto px-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-default ${
                testimonial.isFeatured ? "lg:flex-[1.2] z-10" : "lg:flex-1"
              }`}
            >
              {/* Profile Image - Moved further up (-top-12 instead of -top-6) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                <div
                  className={`w-32 h-32 rounded-full p-2 transition-all duration-700 ${
                    testimonial.isFeatured
                      ? "bg-gradient-to-b from-purple-500/60 to-transparent shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                      : "bg-white/10"
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-[#0A0C1F]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[0.1]"
                    />
                  </div>
                </div>
              </div>

              {/* Main Card Container */}
              <div
                className={`flex-1 relative px-8 pt-24 pb-12 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center cursor-pointer ${
                  testimonial.isFeatured
                    ? "border-white/20 shadow-[0_0_80px_rgba(168,85,247,0.1)]"
                    : "bg-[#12142B] border-white/5 shadow-xl"
                }`}
                style={{
                  background: testimonial.isFeatured
                    ? "linear-gradient(135deg, #2D1B36 0%, #17192C 40%, #202D45 70%, #352342 100%)"
                    : "",
                  borderBottom: `4px solid ${testimonial.isFeatured ? "#6B3A5B" : "rgba(255,255,255,0.05)"}`,
                }}
              >
                {/* Stylized Quote Icons - Purple ones from image */}
                <div className="absolute top-36 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                  <span className="text-[42px] font-black font-unbounded text-purple-500/40 select-none opacity-50">
                    ''
                  </span>
                  <span className="text-[42px] font-black font-unbounded text-purple-500/40 select-none opacity-50">
                    ''
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col h-full">
                  {/* Name & Role */}
                  <div className="mb-8">
                    <h3 className="text-[22px] font-bold font-unbounded text-white uppercase tracking-tight mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/40 text-[12px] font-bold uppercase tracking-[2px]">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Testimonial Text */}
                  <div className="px-2 mb-6">
                    <p className="text-gray-300 text-[15px] leading-relaxed italic font-medium">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Star Rating - Glowing stars */}
                  <div className="flex items-center justify-center gap-1.5 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-orange-400 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
