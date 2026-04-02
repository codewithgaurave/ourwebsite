import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Clock,
  Share2,
  ArrowLeft,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How SEO Helps Businesses Grow Online",
    excerpt:
      "Search Engine Optimization plays a crucial role in improving online visibility, increasing website traffic, and attracting potential customers. A well-planned SEO strategy helps businesses achieve sustainable digital growth.",
    fullContent: `Search Engine Optimization (SEO) is one of the most powerful digital marketing strategies that helps businesses establish a strong online presence. In today's competitive digital landscape, having a website is not enough — your target audience needs to find you easily.

**Why SEO Matters for Business Growth**

SEO helps improve your website's ranking on search engines like Google, Bing, and Yahoo. When your website appears on the first page of search results, it attracts more organic traffic, which translates into more leads and conversions.

**Key Benefits of SEO:**

• **Increased Visibility:** Higher rankings mean more people see your website when searching for relevant keywords.
• **Cost-Effective Marketing:** Unlike paid advertising, organic traffic from SEO doesn't require ongoing ad spend.
• **Builds Credibility:** Websites that rank higher are perceived as more trustworthy and authoritative.
• **Better User Experience:** SEO involves optimizing site speed, mobile responsiveness, and content quality.
• **Long-Term Results:** Unlike paid campaigns, SEO provides sustainable traffic over time.

**Essential SEO Strategies:**

1. **Keyword Research:** Identify the terms your target audience is searching for and create content around those keywords.
2. **On-Page Optimization:** Optimize title tags, meta descriptions, headers, and content structure.
3. **Technical SEO:** Ensure your website loads fast, is mobile-friendly, and has proper site architecture.
4. **Content Marketing:** Create valuable, informative content that addresses your audience's needs.
5. **Link Building:** Earn high-quality backlinks from authoritative websites in your industry.

**Measuring SEO Success**

Track your SEO performance using tools like Google Analytics, Google Search Console, and SEMrush. Monitor metrics such as organic traffic, keyword rankings, bounce rate, and conversion rate to understand what's working and what needs improvement.

Investing in SEO is essential for any business looking to grow online. With the right strategy and consistent effort, SEO can deliver remarkable results that drive sustainable business growth.`,
    date: "Feb 24, 2026",
    author: "Admin",
    readTime: "8 min read",
    category: "SEO & Marketing",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    tags: ["SEO", "Digital Marketing", "Business Growth"],
  },
  {
    id: 2,
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "A professional website builds credibility, improves customer engagement, and provides a strong digital identity. It acts as a powerful marketing tool for modern businesses.",
    fullContent: `In the digital age, having a professional website is no longer optional — it's essential. Your website is often the first interaction potential customers have with your business, and first impressions matter.

**The Importance of a Professional Website**

A well-designed website serves as your digital storefront, working 24/7 to attract and convert visitors into customers. It establishes credibility and builds trust with your audience.

**Key Benefits:**

• **Credibility & Trust:** A professional website makes your business appear legitimate and trustworthy.
• **24/7 Availability:** Unlike a physical store, your website is always accessible to potential customers.
• **Wider Reach:** Your website allows you to reach customers beyond your local area.
• **Cost-Effective Marketing:** A website is more affordable than traditional advertising methods.
• **Customer Insights:** Analytics tools help you understand your audience better.

**Essential Features of a Professional Website:**

1. **Responsive Design:** Your website must look great on all devices — desktops, tablets, and smartphones.
2. **Fast Loading Speed:** Pages should load within 3 seconds to prevent visitors from leaving.
3. **Clear Navigation:** Users should easily find what they're looking for.
4. **Compelling Content:** High-quality content that educates and engages your audience.
5. **Strong Call-to-Actions:** Guide visitors toward desired actions like making a purchase or contacting you.

**How to Get Started**

Whether you're building a new website or redesigning an existing one, focus on user experience, mobile responsiveness, and clear messaging. A professional website is an investment that pays for itself through increased leads and sales.`,
    date: "Feb 20, 2026",
    author: "Admin",
    readTime: "6 min read",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    tags: ["Web Development", "Business", "Digital Presence"],
  },
  {
    id: 3,
    title: "Top Digital Marketing Strategies for 2026",
    excerpt:
      "Digital marketing continues to evolve with new technologies and trends. Businesses must adopt modern strategies like SEO, content marketing, social media promotion, and performance analytics to stay competitive.",
    fullContent: `The digital marketing landscape is constantly evolving, and businesses need to stay ahead of the curve to remain competitive. Here are the top strategies that will dominate in 2026.

**1. AI-Powered Marketing**

Artificial Intelligence is transforming how businesses interact with customers. From chatbots to personalized recommendations, AI enables smarter, more efficient marketing campaigns.

**2. Video Marketing**

Video content continues to dominate social media platforms. Short-form videos on TikTok, Instagram Reels, and YouTube Shorts are essential for reaching younger audiences.

**3. Voice Search Optimization**

With the rise of smart speakers and voice assistants, optimizing for voice search is becoming increasingly important for local businesses.

**4. Content Marketing Excellence**

Quality content remains king. Businesses that create valuable, informative content will continue to outperform their competitors in search rankings and audience engagement.

**5. Social Commerce**

Social media platforms are becoming shopping destinations. Instagram Shop, Facebook Marketplace, and Pinterest Shopping allow businesses to sell directly through social media.

**6. Data-Driven Decision Making**

Using analytics and data to inform marketing decisions ensures better ROI and more effective campaigns.

**7. Personalization**

Consumers expect personalized experiences. Tailoring your marketing messages to individual preferences increases engagement and conversions.

**Implementing These Strategies**

Start by auditing your current marketing efforts and identifying areas for improvement. Focus on one or two strategies at a time, measure results, and iterate based on what works best for your business.`,
    date: "Feb 15, 2026",
    author: "Admin",
    readTime: "7 min read",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2062",
    tags: ["Marketing", "Strategy", "Digital Trends"],
  },
  {
    id: 4,
    title: "Custom Software vs Ready-Made Solutions",
    excerpt:
      "Custom software provides flexibility, scalability, and better business alignment, while ready-made solutions offer faster deployment. Choosing the right option depends on business goals and budget.",
    fullContent: `When it comes to choosing software for your business, you have two main options: custom-built solutions or off-the-shelf software. Each has its advantages and drawbacks.

**Custom Software**

Custom software is built specifically for your business needs. It's designed to address your unique workflows, processes, and requirements.

**Advantages:**
• Tailored to your exact needs
• Scalable as your business grows
• Competitive advantage through unique features
• Full ownership and control
• Better integration with existing systems

**Disadvantages:**
• Higher upfront costs
• Longer development time
• Requires ongoing maintenance
• Dependency on development team

**Ready-Made Solutions**

Off-the-shelf software is pre-built and available for immediate use. Examples include CRM tools, project management software, and accounting platforms.

**Advantages:**
• Lower initial cost
• Quick deployment
• Regular updates and support
• Large user community
• Proven reliability

**Disadvantages:**
• May not fit all business needs
• Limited customization options
• Ongoing subscription costs
• Vendor dependency

**Making the Right Choice**

Consider your budget, timeline, and specific requirements. If your business has unique workflows that off-the-shelf software can't accommodate, custom development is the way to go. For standard operations, ready-made solutions often provide excellent value.`,
    date: "Feb 10, 2026",
    author: "Admin",
    readTime: "6 min read",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    tags: ["Software", "Business", "Technology"],
  },
  {
    id: 5,
    title: "Importance of Mobile-Friendly Websites",
    excerpt:
      "With increasing mobile users, responsive website design is essential. Mobile-friendly websites improve user experience, SEO rankings, and conversion rates.",
    fullContent: `With over 60% of web traffic coming from mobile devices, having a mobile-friendly website is no longer optional — it's a necessity.

**Why Mobile-Friendly Design Matters**

Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking. If your site isn't mobile-friendly, your search rankings will suffer.

**Benefits of Responsive Design:**

• **Better User Experience:** Visitors can easily navigate your site on any device.
• **Improved SEO:** Google favors mobile-friendly websites in search results.
• **Higher Conversion Rates:** Mobile users are more likely to convert on optimized sites.
• **Faster Load Times:** Responsive sites are optimized for speed on all devices.
• **Reduced Bounce Rate:** Users stay longer on sites that work well on their devices.

**Mobile Optimization Best Practices:**

1. **Use Responsive Design:** Ensure your site adapts to any screen size.
2. **Optimize Images:** Compress images to reduce load times.
3. **Simplify Navigation:** Use hamburger menus and clear CTAs.
4. **Touch-Friendly Buttons:** Make buttons large enough for finger taps.
5. **Test on Multiple Devices:** Check your site on various phones and tablets.

**The Cost of Not Being Mobile-Friendly**

Businesses that ignore mobile optimization risk losing customers to competitors with better mobile experiences. In 2026, a mobile-first approach is essential for online success.`,
    date: "Feb 05, 2026",
    author: "Admin",
    readTime: "5 min read",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
    tags: ["Mobile", "UI/UX", "Responsive Design"],
  },
  {
    id: 6,
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt:
      "Choosing between native and cross-platform development depends on your project requirements. Native apps offer superior performance, while cross-platform solutions like React Native and Flutter provide faster development and cost efficiency.",
    fullContent: `One of the biggest decisions in mobile app development is choosing between native and cross-platform development. Let's explore both approaches.

**Native Development**

Native apps are built specifically for one platform using platform-specific languages: Swift/Objective-C for iOS and Kotlin/Java for Android.

**Pros:**
• Best performance and user experience
• Full access to device features
• Platform-specific UI components
• Better security

**Cons:**
• Higher development cost
• Longer development time
• Separate codebases for each platform

**Cross-Platform Development**

Cross-platform frameworks like React Native, Flutter, and Xamarin allow you to build apps for multiple platforms with a single codebase.

**Popular Frameworks:**

• **React Native:** JavaScript-based, backed by Facebook
• **Flutter:** Dart-based, backed by Google
• **Xamarin:** C#-based, backed by Microsoft

**Pros:**
• Single codebase for iOS and Android
• Faster development
• Lower cost
• Easier maintenance

**Cons:**
• Slightly lower performance
• Limited access to some native features
• Larger app size

**Which Should You Choose?**

For apps requiring high performance (games, AR/VR), native is better. For business apps, MVPs, and startups, cross-platform offers excellent value. Consider your budget, timeline, and feature requirements.`,
    date: "Mar 28, 2026",
    author: "Admin",
    readTime: "9 min read",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
    tags: ["Mobile App", "React Native", "Flutter"],
  },
  {
    id: 7,
    title: "Building Scalable Web Applications with Modern Frameworks",
    excerpt:
      "Modern web frameworks like React, Angular, and Vue.js enable developers to build scalable, maintainable applications. Learn best practices for architecture, state management, and performance optimization.",
    fullContent: `Modern web development requires frameworks that can handle complex applications while remaining maintainable and scalable.

**Top Frontend Frameworks in 2026:**

**React (Meta)**
The most popular JavaScript library for building user interfaces. React's component-based architecture makes it ideal for large-scale applications.

**Angular (Google)**
A full-featured framework with built-in tools for routing, forms, HTTP requests, and state management.

**Vue.js**
A progressive framework that's easy to learn and integrate. Vue offers excellent performance and a gentle learning curve.

**Best Practices for Scalable Apps:**

1. **Component Architecture:** Break your UI into reusable, modular components.
2. **State Management:** Use tools like Redux, Zustand, or Pinia for managing application state.
3. **Code Splitting:** Load only the code needed for each page to improve performance.
4. **TypeScript:** Add type safety to catch errors early and improve code quality.
5. **Testing:** Implement unit tests, integration tests, and end-to-end tests.

**Performance Optimization:**

• Lazy loading of images and components
• Server-side rendering (SSR) for faster initial load
• Caching strategies with Service Workers
• CDN integration for static assets
• Database query optimization

**Choosing the Right Framework**

Consider your team's expertise, project requirements, and long-term maintenance needs. All three frameworks are capable of building production-grade applications.`,
    date: "Mar 25, 2026",
    author: "Admin",
    readTime: "10 min read",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    tags: ["Web Development", "React", "Angular", "Vue"],
  },
  {
    id: 8,
    title: "API Development: RESTful vs GraphQL",
    excerpt:
      "Understanding the differences between RESTful APIs and GraphQL helps developers choose the right approach. REST offers simplicity and wide adoption, while GraphQL provides flexibility and efficient data fetching.",
    fullContent: `APIs are the backbone of modern applications. Understanding when to use REST vs GraphQL is crucial for building efficient systems.

**RESTful APIs**

REST (Representational State Transfer) is the traditional approach to building APIs. It uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.

**Advantages of REST:**
• Simple and widely understood
• Excellent tooling and documentation support
• Caching is straightforward
• Works well for simple CRUD operations

**Disadvantages:**
• Over-fetching (getting more data than needed)
• Under-fetching (multiple requests for related data)
• Versioning challenges

**GraphQL**

GraphQL is a query language for APIs developed by Facebook. It allows clients to request exactly the data they need.

**Advantages of GraphQL:**
• No over-fetching or under-fetching
• Single endpoint for all operations
• Strongly typed schema
• Real-time subscriptions

**Disadvantages:**
• More complex to implement
• Caching is more challenging
• Learning curve for teams

**When to Use Each:**

• **Use REST** for simple CRUD applications, microservices, and when caching is critical.
• **Use GraphQL** for complex data requirements, mobile apps, and when frontend flexibility is needed.

Many modern applications use both — REST for simple endpoints and GraphQL for complex data fetching.`,
    date: "Mar 22, 2026",
    author: "Admin",
    readTime: "7 min read",
    category: "API Development",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    tags: ["API", "REST", "GraphQL"],
  },
  {
    id: 9,
    title: "Cloud Development: AWS, Azure, and Google Cloud",
    excerpt:
      "Cloud platforms offer scalable infrastructure, serverless computing, and managed services. Learn how to leverage AWS, Azure, and Google Cloud to build robust, cost-effective applications.",
    fullContent: `Cloud computing has revolutionized how businesses build and deploy applications. The three major cloud providers — AWS, Azure, and Google Cloud — each offer unique strengths.

**Amazon Web Services (AWS)**

AWS is the market leader with the broadest range of services.

**Key Services:**
• EC2 for compute
• S3 for storage
• RDS for databases
• Lambda for serverless
• DynamoDB for NoSQL

**Microsoft Azure**

Azure integrates seamlessly with Microsoft products and is popular among enterprises.

**Key Services:**
• Azure App Service
• Azure Functions
• Azure SQL Database
• Azure DevOps
• Active Directory

**Google Cloud Platform (GCP)**

GCP excels in data analytics and machine learning.

**Key Services:**
• Compute Engine
• Cloud Storage
• BigQuery
• Cloud Run
• Vertex AI

**Choosing a Cloud Provider:**

• **AWS:** Best for broad service selection and startup ecosystem
• **Azure:** Best for Microsoft/.NET environments and enterprises
• **GCP:** Best for data analytics and machine learning workloads

**Cost Optimization Tips:**

1. Use reserved instances for predictable workloads
2. Implement auto-scaling to match demand
3. Use spot instances for non-critical workloads
4. Monitor and optimize with cost management tools
5. Choose the right region for your users`,
    date: "Mar 18, 2026",
    author: "Admin",
    readTime: "8 min read",
    category: "Cloud Development",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    tags: ["Cloud", "AWS", "Azure", "Google Cloud"],
  },
  {
    id: 10,
    title: "Blockchain Development: Smart Contracts and DApps",
    excerpt:
      "Blockchain technology enables decentralized applications and smart contracts. Explore how Ethereum, Solidity, and Web3.js are revolutionizing industries from finance to supply chain management.",
    fullContent: `Blockchain technology is transforming industries by enabling transparent, secure, and decentralized applications.

**What is Blockchain?**

A blockchain is a distributed ledger that records transactions across multiple computers. Once recorded, data cannot be altered retroactively.

**Smart Contracts**

Smart contracts are self-executing contracts with the terms directly written into code. They automatically execute when conditions are met.

**Popular Blockchain Platforms:**

• **Ethereum:** The most popular platform for smart contracts and DApps
• **Solana:** High-performance blockchain for fast transactions
• **Polygon:** Layer 2 solution for Ethereum scaling
• **Hyperledger:** Enterprise blockchain for private networks

**Building DApps:**

1. **Solidity:** The primary programming language for Ethereum smart contracts
2. **Web3.js/Ethers.js:** JavaScript libraries for interacting with the blockchain
3. **Hardhat/Truffle:** Development frameworks for testing and deployment
4. **IPFS:** Decentralized file storage

**Use Cases:**

• **DeFi:** Decentralized finance applications
• **NFTs:** Non-fungible tokens for digital assets
• **Supply Chain:** Transparent tracking of goods
• **Voting:** Secure and transparent voting systems
• **Identity:** Decentralized identity management

**Getting Started**

Start with Ethereum and Solidity. Learn the basics of smart contract development, then explore frameworks like Hardhat for testing and deployment.`,
    date: "Mar 15, 2026",
    author: "Admin",
    readTime: "9 min read",
    category: "Blockchain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2032",
    tags: ["Blockchain", "Smart Contracts", "DApps"],
  },
  {
    id: 11,
    title: "Game Development: Unity vs Unreal Engine",
    excerpt:
      "Game development requires powerful engines and creative tools. Compare Unity and Unreal Engine for 2D and 3D game development, including performance, scripting, and platform support.",
    fullContent: `Game development is one of the most exciting fields in software development. Two engines dominate the industry: Unity and Unreal Engine.

**Unity**

Unity is known for its ease of use and versatility.

**Strengths:**
• Excellent for 2D and mobile games
• C# scripting (easier to learn)
• Massive asset store
• Cross-platform support (25+ platforms)
• Large community and tutorials

**Best For:**
• Mobile games
• Indie developers
• 2D games
• AR/VR applications
• Rapid prototyping

**Unreal Engine**

Unreal Engine is known for its stunning graphics and AAA game development.

**Strengths:**
• Superior graphics quality
• Blueprint visual scripting
• Built-in multiplayer support
• Free for projects under $1M revenue
• Nanite and Lumen technologies

**Best For:**
• AAA games
• First-person shooters
• Open-world games
• Cinematic experiences
• High-fidelity graphics

**Key Differences:**

| Feature | Unity | Unreal |
|---------|-------|--------|
| Language | C# | C++ |
| Graphics | Good | Excellent |
| Learning Curve | Easier | Steeper |
| Mobile Support | Excellent | Good |
| VR Support | Excellent | Excellent |

**Which to Choose?**

Choose Unity for mobile, 2D, and indie projects. Choose Unreal for high-end 3D games and projects requiring photorealistic graphics.`,
    date: "Mar 12, 2026",
    author: "Admin",
    readTime: "7 min read",
    category: "Game Development",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=2065",
    tags: ["Game Dev", "Unity", "Unreal Engine"],
  },
  {
    id: 12,
    title: "Desktop Application Development in 2026",
    excerpt:
      "Desktop applications remain relevant for enterprise solutions and specialized tools. Learn about Electron, Qt, and .NET for building cross-platform desktop applications with modern UI/UX.",
    fullContent: `Despite the rise of web and mobile apps, desktop applications remain essential for many use cases, especially in enterprise environments.

**Why Desktop Apps Still Matter:**

• **Performance:** Direct access to hardware resources
• **Offline Functionality:** No internet dependency
• **Security:** Data stays on local machines
• **Complex Workflows:** Better suited for power users
• **Integration:** Deep OS integration capabilities

**Top Desktop Development Frameworks:**

**Electron**
Build desktop apps with web technologies (JavaScript, HTML, CSS). Used by VS Code, Slack, and Discord.

**Pros:**
• Use existing web development skills
• Cross-platform (Windows, macOS, Linux)
• Large ecosystem

**Cons:**
• Higher memory usage
• Larger app size

**Qt**
A powerful C++ framework for native-looking desktop applications.

**Pros:**
• Native performance
• Professional UI components
• Cross-platform

**Cons:**
• Steeper learning curve
• Licensing costs for commercial use

**.NET MAUI**
Microsoft's framework for building cross-platform apps with C#.

**Pros:**
• Native performance
• Tight Windows integration
• Visual Studio support

**Cons:**
• Better for Windows than other platforms

**Choosing the Right Framework**

For web developers wanting to build desktop apps, Electron is the easiest path. For performance-critical applications, Qt or .NET MAUI are better choices.`,
    date: "Mar 08, 2026",
    author: "Admin",
    readTime: "6 min read",
    category: "Desktop Development",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    tags: ["Desktop", "Electron", ".NET"],
  },
  {
    id: 13,
    title: "DevOps: CI/CD Pipelines and Infrastructure as Code",
    excerpt:
      "DevOps practices streamline development and deployment. Master CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure automation using Terraform.",
    fullContent: `DevOps combines development and operations to deliver software faster and more reliably.

**Core DevOps Practices:**

**1. Continuous Integration (CI)**
Automatically build and test code changes to catch issues early.

**Tools:** Jenkins, GitHub Actions, GitLab CI, CircleCI

**2. Continuous Deployment (CD)**
Automatically deploy tested code to production environments.

**3. Containerization with Docker**

Docker packages applications with their dependencies into containers.

**Benefits:**
• Consistent environments
• Easy scaling
• Simplified deployment

**4. Orchestration with Kubernetes**

Kubernetes manages containerized applications at scale.

**Features:**
• Auto-scaling
• Load balancing
• Self-healing
• Rolling updates

**5. Infrastructure as Code (IaC)**

Terraform and Ansible allow you to define infrastructure in code.

**Benefits:**
• Version controlled infrastructure
• Reproducible environments
• Reduced human error

**Building a CI/CD Pipeline:**

1. Developers push code to Git repository
2. CI server runs automated tests
3. Build container image
4. Push to container registry
5. Deploy to staging environment
6. Run integration tests
7. Deploy to production

**Monitoring & Observability**

Use tools like Prometheus, Grafana, and ELK Stack for monitoring application health and performance.`,
    date: "Mar 05, 2026",
    author: "Admin",
    readTime: "10 min read",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=2070",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
  },
  {
    id: 14,
    title: "Software Development Life Cycle: Agile Methodology",
    excerpt:
      "Agile methodology transforms software development with iterative planning, continuous delivery, and adaptive processes. Learn Scrum, Kanban, and best practices for team collaboration.",
    fullContent: `Agile methodology has become the standard for software development, replacing traditional waterfall approaches with iterative, flexible processes.

**What is Agile?**

Agile is a project management approach that breaks work into small, manageable iterations called sprints. It emphasizes collaboration, customer feedback, and continuous improvement.

**Agile Frameworks:**

**Scrum**
The most popular Agile framework, using fixed-length sprints (usually 2 weeks).

**Key Roles:**
• Product Owner: Defines what to build
• Scrum Master: Facilitates the process
• Development Team: Builds the product

**Ceremonies:**
• Sprint Planning
• Daily Standup
• Sprint Review
• Sprint Retrospective

**Kanban**
A visual workflow management method using boards and cards.

**Principles:**
• Visualize work
• Limit work in progress
• Manage flow
• Make policies explicit

**Benefits of Agile:**

• Faster time to market
• Better quality through continuous testing
• Improved customer satisfaction
• Greater flexibility to change
• Better team collaboration

**Best Practices:**

1. Keep user stories small and focused
2. Maintain a prioritized backlog
3. Conduct regular retrospectives
4. Embrace change and feedback
5. Automate testing and deployment

**Agile Tools**

Jira, Trello, Asana, and Monday.com are popular tools for managing Agile projects.`,
    date: "Mar 01, 2026",
    author: "Admin",
    readTime: "8 min read",
    category: "Software Development",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    tags: ["Agile", "Scrum", "Software Development"],
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

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

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

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

      <AnimatePresence mode="wait">
        {selectedBlog ? (
          <motion.div
            key="blog-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <main className="pt-32 pb-20 overflow-hidden">
              <section className="px-6 md:px-10 max-w-[1440px] mx-auto">
                {/* Back Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={closeBlog}
                  className="flex items-center gap-3 text-white/60 hover:text-white mb-10 transition-colors cursor-pointer group"
                >
                  <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Back to Blog
                  </span>
                </motion.button>

                {/* Blog Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[2.5rem] overflow-hidden h-[300px] md:h-[450px] lg:h-[550px] mb-12"
                >
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 rounded-full bg-purple-600/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest">
                      {selectedBlog.category}
                    </span>
                  </div>
                </motion.div>

                {/* Blog Content */}
                <div className="max-w-4xl mx-auto">
                  {/* Meta Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-500" />
                      {selectedBlog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} className="text-blue-500" />
                      {selectedBlog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-green-500" />
                      {selectedBlog.readTime}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
                  >
                    {selectedBlog.title}
                  </motion.h1>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-3 mb-12"
                  >
                    {selectedBlog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-wider"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="prose prose-lg prose-invert max-w-none"
                  >
                    {selectedBlog.fullContent
                      .split("\n\n")
                      .map((paragraph, i) => {
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                          return (
                            <h3
                              key={i}
                              className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-tight"
                            >
                              {paragraph.replace(/\*\*/g, "")}
                            </h3>
                          );
                        }
                        if (paragraph.startsWith("•")) {
                          return (
                            <ul key={i} className="list-none space-y-3 my-6">
                              {paragraph.split("\n").map((item, j) => (
                                <li
                                  key={j}
                                  className="text-gray-300 leading-relaxed pl-4 border-l-2 border-purple-500/30"
                                >
                                  {item.replace("• ", "").replace(/\*\*/g, "")}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        if (paragraph.match(/^\d\./)) {
                          return (
                            <ol
                              key={i}
                              className="list-decimal list-inside space-y-3 my-6 text-gray-300"
                            >
                              {paragraph.split("\n").map((item, j) => (
                                <li key={j} className="leading-relaxed">
                                  {item.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "")}
                                </li>
                              ))}
                            </ol>
                          );
                        }
                        if (paragraph.startsWith("|")) {
                          const rows = paragraph.split("\n").filter((r) => !r.match(/^\|[-|]+\|$/));
                          const headers = rows[0]
                            .split("|")
                            .filter(Boolean)
                            .map((h) => h.trim());
                          const data = rows.slice(1).map((r) =>
                            r.split("|").filter(Boolean).map((c) => c.trim())
                          );
                          return (
                            <div key={i} className="overflow-x-auto my-8">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b border-white/10">
                                    {headers.map((h, j) => (
                                      <th
                                        key={j}
                                        className="text-left py-3 px-4 text-purple-400 font-bold uppercase text-sm tracking-wider"
                                      >
                                        {h}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.map((row, j) => (
                                    <tr
                                      key={j}
                                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                      {row.map((cell, k) => (
                                        <td
                                          key={k}
                                          className="py-3 px-4 text-gray-300"
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        }
                        return (
                          <p
                            key={i}
                            className="text-gray-300 leading-relaxed mb-6 text-lg"
                          >
                            {paragraph.replace(/\*\*/g, "")}
                          </p>
                        );
                      })}
                  </motion.div>

                  {/* Share Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-white/10"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 text-sm font-bold uppercase tracking-widest">
                          Share this article
                        </span>
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition-all cursor-pointer">
                          <Share2 size={16} className="text-white" />
                        </button>
                      </div>
                      <button
                        onClick={closeBlog}
                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer"
                      >
                        <ArrowLeft size={16} />
                        Back to All Blogs
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
            </main>
          </motion.div>
        ) : (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <main className="pt-32 pb-20 overflow-hidden">
              {/* Blog Hero Section */}
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

              {/* Blog Intro Section */}
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

              {/* Featured Blog Posts Grid */}
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
                            <Calendar size={14} className="text-purple-500" />
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

                        <button
                          onClick={() => openBlog(blog)}
                          className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm group/btn cursor-pointer"
                        >
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

              {/* Blog Categories Section */}
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

              {/* Blog CTA Section */}
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

              {/* Blog Closing Text */}
              <section className="px-6 md:px-10 max-w-4xl mx-auto text-center">
                <p className="text-gray-500 text-lg leading-relaxed italic border-t border-white/5 pt-10">
                  "We believe in sharing knowledge that helps businesses grow. Our
                  goal is to simplify technology, explain digital strategies, and
                  empower businesses to succeed online."
                </p>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Blog;
