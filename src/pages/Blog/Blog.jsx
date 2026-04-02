import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  MessageSquare,
  Bookmark,
  TrendingUp,
  Cpu,
  Globe,
  Settings,
  Mail,
  ChevronRight,
} from "lucide-react";

const Blog = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const blogs = [
    {
      title: "How SEO Helps Businesses Grow Online",
      excerpt:
        "Search Engine Optimization plays a crucial role in improving online visibility, increasing website traffic, and attracting potential customers. A well-planned SEO strategy helps businesses achieve sustainable digital growth.",
      date: "Feb 24, 2026",
      author: "Admin",
      category: "SEO & Marketing",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Why Every Business Needs a Professional Website",
      excerpt:
        "A professional website builds credibility, improves customer engagement, and provides a strong digital identity. It acts as a powerful marketing tool for modern businesses.",
      date: "Feb 20, 2026",
      author: "Admin",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
    {
      title: "Top Digital Marketing Strategies for 2026",
      excerpt:
        "Digital marketing continues to evolve with new technologies and trends. Businesses must adopt modern strategies like SEO, content marketing, social media promotion, and performance analytics to stay competitive.",
      date: "Feb 15, 2026",
      author: "Admin",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2062",
    },
    {
      title: "Custom Software vs Ready-Made Solutions",
      excerpt:
        "Custom software provides flexibility, scalability, and better business alignment, while ready-made solutions offer faster deployment. Choosing the right option depends on business goals and budget.",
      date: "Feb 10, 2026",
      author: "Admin",
      category: "Software",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Importance of Mobile-Friendly Websites",
      excerpt:
        "With increasing mobile users, responsive website design is essential. Mobile-friendly websites improve user experience, SEO rankings, and conversion rates.",
      date: "Feb 05, 2026",
      author: "Admin",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt:
        "Choosing between native and cross-platform development depends on your project requirements. Native apps offer superior performance, while cross-platform solutions like React Native and Flutter provide faster development and cost efficiency.",
      date: "Mar 28, 2026",
      author: "Admin",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt:
        "Modern web frameworks like React, Angular, and Vue.js enable developers to build scalable, maintainable applications. Learn best practices for architecture, state management, and performance optimization.",
      date: "Mar 25, 2026",
      author: "Admin",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
    {
      title: "API Development: RESTful vs GraphQL",
      excerpt:
        "Understanding the differences between RESTful APIs and GraphQL helps developers choose the right approach. REST offers simplicity and wide adoption, while GraphQL provides flexibility and efficient data fetching.",
      date: "Mar 22, 2026",
      author: "Admin",
      category: "API Development",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Cloud Development: AWS, Azure, and Google Cloud",
      excerpt:
        "Cloud platforms offer scalable infrastructure, serverless computing, and managed services. Learn how to leverage AWS, Azure, and Google Cloud to build robust, cost-effective applications.",
      date: "Mar 18, 2026",
      author: "Admin",
      category: "Cloud Development",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    },
    {
      title: "Blockchain Development: Smart Contracts and DApps",
      excerpt:
        "Blockchain technology enables decentralized applications and smart contracts. Explore how Ethereum, Solidity, and Web3.js are revolutionizing industries from finance to supply chain management.",
      date: "Mar 15, 2026",
      author: "Admin",
      category: "Blockchain",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2032",
    },
    {
      title: "Game Development: Unity vs Unreal Engine",
      excerpt:
        "Game development requires powerful engines and creative tools. Compare Unity and Unreal Engine for 2D and 3D game development, including performance, scripting, and platform support.",
      date: "Mar 12, 2026",
      author: "Admin",
      category: "Game Development",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=2065",
    },
    {
      title: "Desktop Application Development in 2026",
      excerpt:
        "Desktop applications remain relevant for enterprise solutions and specialized tools. Learn about Electron, Qt, and .NET for building cross-platform desktop applications with modern UI/UX.",
      date: "Mar 08, 2026",
      author: "Admin",
      category: "Desktop Development",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "DevOps: CI/CD Pipelines and Infrastructure as Code",
      excerpt:
        "DevOps practices streamline development and deployment. Master CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure automation using Terraform.",
      date: "Mar 05, 2026",
      author: "Admin",
      category: "DevOps",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Software Development Life Cycle: Agile Methodology",
      excerpt:
        "Agile methodology transforms software development with iterative planning, continuous delivery, and adaptive processes. Learn Scrum, Kanban, and best practices for team collaboration.",
      date: "Mar 01, 2026",
      author: "Admin",
      category: "Software Development",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  const categories = [
    {
      title: "Technology & Development",
      desc: "Insights on software development, web technologies, and innovation trends.",
      icon: <Cpu size={24} />,
    },
    {
      title: "SEO & Digital Marketing",
      desc: "Tips, strategies, and updates related to search optimization and digital growth.",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Business & Strategy",
      desc: "Guidance on digital transformation, growth strategies, and market trends.",
      icon: <Settings size={24} />,
    },
  ];

  return (
    <div
      className="min-h-screen selection:bg-purple-500 selection:text-white"
      style={{
        background:
          "linear-gradient(to right, #0A0510, #3C3243, #434456, #283645, #1A2533)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
      </div>

      <main className="pt-32 pb-20 overflow-hidden">
        {/* ⭐ Blog Hero Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 p-12 md:p-24 shadow-3xl text-center"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-purple-600/10 via-transparent to-blue-600/10 blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold tracking-[0.3em] uppercase mb-8">
                Official Blog
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Insights, Trends &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Digital Expertise
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 mx-auto">
                Stay updated with the latest insights on technology, website
                development, software solutions, SEO strategies, and digital
                marketing trends. Our blog shares expert knowledge to help
                businesses grow smarter in the digital world.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/5">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-widest">
                  <Bookmark size={16} className="text-purple-500" />
                  Expert Knowledge
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-widest">
                  <TrendingUp size={16} className="text-blue-500" />
                  Market Trends
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-widest">
                  <Globe size={16} className="text-pink-500" />
                  Global Reach
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ⭐ Blog Intro Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Dedicated to sharing{" "}
                <span className="text-purple-400">industry insights.</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Our blog is dedicated to sharing valuable industry insights,
                practical tips, and expert guidance. Whether you are a startup,
                business owner, or tech enthusiast, you will find useful
                information to improve your digital presence and business
                performance.
              </p>
            </motion.div>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 blur-3xl rounded-[2.5rem]"></div>
              <div className="relative z-10 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">
                      Expert Editorial Team
                    </p>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                      Curated Content
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Knowledge is power in the digital age. We empower our clients
                  with the information they need to succeed."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ Featured Blog Posts Grid */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
              FEATURED BLOG POSTS
            </h2>
            <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-purple-400 uppercase tracking-widest">
                    {blog.category}
                  </div>
                </div>

                <div className="p-8 grow flex flex-col">
                  <div className="flex items-center gap-4 text-gray-500 text-xs uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-purple-500" />{" "}
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-blue-500" /> {blog.author}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8 grow">
                    {blog.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm group/btn">
                    Read More{" "}
                    <ArrowRight
                      size={18}
                      className="text-purple-500 group-hover/btn:translate-x-2 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⭐ Blog Categories Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-32">
          <div className="bg-[#0b0612]/50 backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

            <div className="text-center mb-20 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                BLOG CATEGORIES
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto border-b border-white/10 pb-10 uppercase tracking-widest text-sm font-medium">
                Explore topics that matter to your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="flex flex-col p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all text-left group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-10 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-lg">
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                    {cat.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Category <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ Blog CTA Section */}
        <section className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] overflow-hidden bg-linear-to-br from-[#1a0b2e] to-[#0a0510] border border-purple-500/20 p-12 md:p-24 text-center group"
          >
            <div className="absolute inset-0 bg-linear-to-bl from-purple-500/5 to-transparent -z-10"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform shadow-2xl">
                <Mail size={44} className="text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight uppercase tracking-tighter">
                Stay Updated With{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Latest Trends
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                Subscribe to our blog for expert insights, industry updates, and
                valuable business tips.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  Subscribe Now <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95">
                  Explore More Articles
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ⭐ Blog Closing Text */}
        <section className="px-6 md:px-10 max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-lg leading-relaxed italic border-t border-white/5 pt-10">
            "We believe in sharing knowledge that helps businesses grow. Our
            goal is to simplify technology, explain digital strategies, and
            empower businesses to succeed online."
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
