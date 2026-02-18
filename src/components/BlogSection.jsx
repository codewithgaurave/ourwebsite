import React from "react";
import { User, FolderOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    date: "06",
    month: "May",
    author: "kitpro",
    category: "Uncategorized",
    title: "RIGHT SEO AGENCY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "06",
    month: "May",
    author: "kitpro",
    category: "Uncategorized",
    title: "COMMON SEO MISTAKES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "06",
    month: "May",
    author: "kitpro",
    category: "Uncategorized",
    title: "DIGITAL SEO PARTNER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 px-4 bg-[#0A0C1F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span className="text-white/60 text-sm font-bold uppercase tracking-[4px]">
              Our Article
            </span>
          </div>
          <h2 className="text-[32px] md:text-[52px] lg:text-[64px] font-[300] font-unbounded text-white leading-[1.1] uppercase tracking-tighter max-w-4xl">
            WHERE KNOWLEDGE <br />
            MEETS INSPIRATION.
          </h2>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col h-full bg-[#12142B]/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/10 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Date Tag */}
                <div className="absolute top-0 left-0">
                  <div className="bg-[#12142B] border-r border-b border-white/10 px-4 py-2 rounded-br-2xl flex flex-col items-center">
                    <span className="text-[20px] font-bold text-white leading-none">
                      {blog.date}
                    </span>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      {blog.month}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1">
                {/* Meta Tags */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-purple-500" />
                    <span className="text-white/40 text-[13px] font-semibold uppercase tracking-wider">
                      {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FolderOpen size={14} className="text-purple-500" />
                    <span className="text-white/40 text-[13px] font-semibold uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-[700] font-unbounded text-white mb-4 uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-[15px] leading-relaxed font-medium mb-8 flex-1">
                  {blog.description}
                </p>

                {/* Action */}
                <button className="flex items-center gap-3 px-6 py-3 rounded-2xl cursor-pointer bg-purple-900/20 border border-purple-500/20 text-white/80 hover:bg-purple-500 hover:text-white transition-all duration-300 self-start group/btn">
                  <span className="text-[12px] font-bold uppercase tracking-[2px]">
                    Learn more
                  </span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(BlogSection);
