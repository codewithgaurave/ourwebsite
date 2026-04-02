import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Team = lazy(() => import("./pages/Team/Team"));
const Services = lazy(() => import("./pages/Services/Services"));
const MobileAppDevelopment = lazy(() => import("./pages/Services/MobileAppDevelopment"));
const WebDevelopment = lazy(() => import("./pages/Services/WebDevelopment"));
const WebAppDevelopment = lazy(() => import("./pages/Services/WebAppDevelopment"));
const SoftwareDevelopment = lazy(() => import("./pages/Services/SoftwareDevelopment"));
const GameDevelopment = lazy(() => import("./pages/Services/GameDevelopment"));
const DesktopAppDevelopment = lazy(() => import("./pages/Services/DesktopAppDevelopment"));
const ApiDevelopment = lazy(() => import("./pages/Services/ApiDevelopment"));
const CloudDevelopment = lazy(() => import("./pages/Services/CloudDevelopment"));
const BlockchainDevelopment = lazy(() => import("./pages/Services/BlockchainDevelopment"));
const DevOpsServices = lazy(() => import("./pages/Services/DevOpsServices"));
const UiUxDesign = lazy(() => import("./pages/Services/UiUxDesign"));
const EcommerceDevelopment = lazy(() => import("./pages/Services/EcommerceDevelopment"));
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
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/game-development" element={<GameDevelopment />} />
          <Route path="/services/desktop-app-development" element={<DesktopAppDevelopment />} />
          <Route path="/services/api-development" element={<ApiDevelopment />} />
          <Route path="/services/cloud-development" element={<CloudDevelopment />} />
          <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/services/devops-services" element={<DevOpsServices />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
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
