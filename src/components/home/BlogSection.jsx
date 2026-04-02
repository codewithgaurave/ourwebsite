import React from "react";
import { User, FolderOpen, ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    date: "28",
    month: "Mar",
    author: "Tech Team",
    category: "Mobile Dev",
    title: "Native vs Cross-Platform: Which is Better for Your App?",
    description: "Explore the pros and cons of native mobile development versus cross-platform frameworks like React Native and Flutter.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read",
  },
  {
    date: "25",
    month: "Mar",
    author: "Dev Team",
    category: "Web Dev",
    title: "Building Scalable Web Apps with React in 2026",
    description: "Learn the best practices for building enterprise-grade React applications with modern architecture patterns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    readTime: "12 min read",
  },
  {
    date: "22",
    month: "Mar",
    author: "Cloud Team",
    category: "Cloud",
    title: "Cloud Migration Strategy: AWS vs Azure vs GCP",
    description: "A comprehensive guide to choosing the right cloud platform for your business needs and budget.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min read",
  },
  {
    date: "18",
    month: "Mar",
    author: "Block Team",
    category: "Blockchain",
    title: "How Smart Contracts Are Revolutionizing Business",
    description: "Discover how blockchain technology and smart contracts are transforming traditional business processes.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    readTime: "9 min read",
  },
  {
    date: "15",
    month: "Mar",
    author: "Game Team",
    category: "Game Dev",
    title: "Unity vs Unreal Engine: Game Dev Comparison 2026",
    description: "An in-depth comparison of the two leading game engines to help you choose the right one for your project.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read",
  },
  {
    date: "12",
    month: "Mar",
    author: "UI/UX Team",
    category: "Design",
    title: "UI/UX Trends That Will Define 2026",
    description: "Stay ahead of the curve with these emerging user interface and experience design trends.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  return (
    <section className="py-28 px-4 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0C1F 0%, #0f0d1a 50%, #0A0C1F 100%)" }}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-bold uppercase tracking-[3px]">
              Latest Insights
            </span>
          </motion.div>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-[300] font-unbounded text-white leading-[1.1] uppercase tracking-tighter max-w-4xl">
            Latest <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Technology</span> Insights
          </h2>
          <p className="text-gray-400 text-base mt-4 max-w-2xl">
            Stay updated with expert insights on software development, cloud computing, mobile apps, and digital innovation.
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col h-full bg-[#12142B]/60 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12142B] via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-purple-600/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta Tags */}
                <div className="flex items-center justify-between mb-4 text-xs">
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {blog.date} {blog.month}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {blog.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold font-unbounded text-white mb-3 uppercase tracking-tight group-hover:text-purple-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[13px] leading-relaxed mb-5 flex-1 line-clamp-2">
                  {blog.description}
                </p>

                {/* Action */}
                <Link 
                  to='/blog' 
                  className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider group/link hover:text-purple-300 transition-colors"
                >
                  Read Article
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link 
            to='/blog' 
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-sm hover:bg-purple-600 hover:border-purple-600 transition-all group"
          >
            View All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(BlogSection);
