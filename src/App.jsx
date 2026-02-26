import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Team = lazy(() => import("./pages/Team/Team"));
const Services = lazy(() => import("./pages/Services/Services"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Faq = lazy(() => import("./pages/Faq/Faq"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Simple Loader Component
const PageLoader = () => (
  <div className="fixed inset-0 bg-[#0A0510] flex items-center justify-center z-9999">
    <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
