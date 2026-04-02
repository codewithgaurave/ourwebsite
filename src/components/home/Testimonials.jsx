import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rekha Gupta",
    role: "Our Client",
    text: "Working with this team was a great experience. Their digital marketing strategies significantly improved our online presence and helped us attract more customers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Abhay Sharma",
    role: "Our Client",
    text: "Excellent service and professional approach. Their SEO and marketing solutions delivered measurable results and boosted our business visibility effectively.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Irshad Singh",
    role: "Our Client",
    text: "Highly satisfied with the quality of work. The team delivered on time and helped us achieve better engagement and business growth online.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Our Client",
    text: "Their mobile app development team built an incredible cross-platform app for our business. The UI/UX design was outstanding and user engagement skyrocketed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Our Client",
    text: "Exceptional web development services. They transformed our outdated website into a modern, responsive platform that loads incredibly fast.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Our Client",
    text: "Their cloud and DevOps expertise helped us scale our infrastructure seamlessly. Deployment times reduced by 80% and uptime improved dramatically.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    role: "Our Client",
    text: "Amazing API development and blockchain integration. They delivered a secure, scalable solution that exceeded our expectations in every way possible.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, isActive }) => (
  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-22px)] relative pt-14 md:pt-16 group">
    {/* Profile Image */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div
        className={`w-24 h-24 md:w-28 md:h-28 rounded-full p-[3px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] ${
          isActive
            ? "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            : "bg-white/10"
        }`}
      >
        <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-[#0A0C1F]">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>

    {/* Card */}
    <div
      className={`relative px-6 py-8 rounded-2xl border transition-all duration-500 h-full flex flex-col items-center text-center ${
        isActive
          ? "border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.15)]"
          : "border-white/5 bg-[#12142B]"
      }`}
      style={{
        background: isActive
          ? "linear-gradient(160deg, #2D1B36 0%, #1a1b30 40%, #202D45 70%, #352342 100%)"
          : undefined,
      }}
    >
      {/* Quote Mark */}
      <div className="absolute top-6 left-4 pointer-events-none select-none">
        <span className="text-5xl font-bold text-purple-500/20 leading-none font-unbounded">
          &ldquo;
        </span>
      </div>

      {/* Name */}
      <h3 className="text-lg md:text-xl font-bold font-unbounded text-white uppercase tracking-tight mb-1 mt-2">
        {testimonial.name}
      </h3>
      <p className="text-white/40 text-[11px] font-bold uppercase tracking-[2px] mb-6">
        {testimonial.role}
      </p>

      {/* Text */}
      <p className="text-gray-300 text-[14px] leading-relaxed italic font-medium mb-6 flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex items-center justify-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-orange-400 text-orange-400 drop-shadow-[0_0_6px_rgba(251,146,60,0.5)]"
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const goNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goPrev = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleCards = [];
  for (let i = 0; i < itemsPerView; i++) {
    const idx = (currentIndex + i) % testimonials.length;
    visibleCards.push({ ...testimonials[idx], originalIndex: idx });
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-[#0A0C1F] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-[2px] md:tracking-[3px]">
              Our Testimonials
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-[300] font-unbounded text-white leading-[1.1] uppercase tracking-tighter max-w-4xl mx-auto">
            HEAR IT FROM THOSE WHO <br className="hidden md:block" />
            KNOW US BEST.
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-2 md:-left-12 top-[55%] -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500/40 transition-all cursor-pointer"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-2 md:-right-12 top-[55%] -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500/40 transition-all cursor-pointer"
          >
            <ChevronRight size={22} className="text-white" />
          </button>

          {/* Cards */}
          <div
            className="flex gap-6 md:gap-8 justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {visibleCards.map((item, idx) => (
              <TestimonialCard
                key={`${currentIndex}-${idx}`}
                testimonial={item}
                isActive={idx === 1}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-14">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-400 cursor-pointer ${
                  i === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                    : "bg-white/15 hover:bg-white/30 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
