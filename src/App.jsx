import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

// Lazy load the Home component
const Home = lazy(() => import("./pages/Home/Home"));

// Simple Loader Component
const PageLoader = () => (
  <div className="fixed inset-0 bg-[#0A0510] flex items-center justify-center z-[9999]">
    <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
