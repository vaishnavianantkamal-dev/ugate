import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import Security from "./pages/Security";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect, useState } from "react";
import { pricingData } from "./data/Pricingdata";
import { residentData } from "./data/residentData";
import Resident from "./pages/Resident";
import { securityData } from "./data/securityData";
import FAQ from "./components/resources-components/FAQ";
import Blog from "./pages/Blog";
import { blogData } from "./data/blogData";
import HelpCenter from "./pages/HelpCenter";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/security" element={<Security data={securityData} />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/pricing" element={<Pricing data={pricingData} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resident" element={<Resident data={residentData} />} />
        <Route path="/blog" element={<Blog data={blogData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpCenter/>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [showBlockNotice, setShowBlockNotice] = useState(false);

  useEffect(() => {
    const shouldBlock = import.meta.env.VITE_DISABLE_DEVTOOLS === "true";
    if (!shouldBlock) return;

    let noticeTimeout;

    const blockAndNotify = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setShowBlockNotice(true);

      clearTimeout(noticeTimeout);
      noticeTimeout = setTimeout(() => setShowBlockNotice(false), 3000);

      return false;
    };

    const handleKeyDown = (e) => {
      const key = e.key?.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;

      // Block F12
      if (key === "f12") return blockAndNotify(e);

      // Block Ctrl+Shift+I/J/C (Inspect, Console, Copy)
      if (ctrl && shift && ["i", "j", "c"].includes(key)) {
        return blockAndNotify(e);
      }

      // Block Ctrl+U (View Source)
      if (ctrl && key === "u") return blockAndNotify(e);

      // Block Ctrl+S (Save Page)
      if (ctrl && key === "s") return blockAndNotify(e);

      // Block Ctrl+C (Copy)
      if (ctrl && key === "c") return blockAndNotify(e);

      // Block Ctrl+A (Select All)
      if (ctrl && key === "a") return blockAndNotify(e);

      // Block Ctrl+P (Print)
      if (ctrl && key === "p") return blockAndNotify(e);
    };

    // Disable text selection
    const disableSelection = () => {
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      document.body.style.mozUserSelect = "none";
      document.body.style.msUserSelect = "none";
    };

    // Prevent drag and drop
    const preventDragDrop = (e) => {
      e.preventDefault();
      return false;
    };

    // DevTools detection (checks if console is open)
    // const detectDevTools = () => {
    //   const threshold = 160;
    //   const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    //   const heightThreshold =
    //     window.outerHeight - window.innerHeight > threshold;
    //
    //   if (widthThreshold || heightThreshold) {
    //     if (!devtoolsOpen) {
    //       devtoolsOpen = true;
    //       document.body.innerHTML = `
    //         <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; color: #fff; font-family: system-ui; text-align: center; padding: 20px;">
    //           <div>
    //             <h1 style="font-size: 2rem; margin-bottom: 1rem;">⚠️ Developer Tools Detected</h1>
    //             <p style="font-size: 1.2rem; opacity: 0.8;">Please close developer tools to continue browsing.</p>
    //           </div>
    //         </div>
    //       `;
    //     }
    //   }
    // };

    // Disable console
    // const disableConsole = () => {
    //   const noop = () => { };
    //   const methods = ["log", "debug", "info", "warn", "error", "dir", "trace"];
    //   methods.forEach((method) => {
    //     console[method] = noop;
    //   });
    // };

    // Clear console periodically
    // const clearConsole = setInterval(() => {
    //   console.clear();
    // }, 1000);

    // Apply protections
    // disableSelection();
    // disableConsole();

    // Event listeners
    // document.addEventListener("contextmenu", blockAndNotify);
    // document.addEventListener("keydown", handleKeyDown);
    // document.addEventListener("copy", blockAndNotify);
    // document.addEventListener("cut", blockAndNotify);
    // document.addEventListener("paste", blockAndNotify);
    // document.addEventListener("selectstart", blockAndNotify);
    // document.addEventListener("dragstart", preventDragDrop);
    // document.addEventListener("drop", preventDragDrop);

    // DevTools detection interval
    // const devToolsInterval = setInterval(detectDevTools, 500);

    // Cleanup
    return () => {
      clearTimeout(noticeTimeout);
      clearInterval(clearConsole);
      clearInterval(devToolsInterval);
      document.removeEventListener("contextmenu", blockAndNotify);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", blockAndNotify);
      document.removeEventListener("cut", blockAndNotify);
      document.removeEventListener("paste", blockAndNotify);
      document.removeEventListener("selectstart", blockAndNotify);
      document.removeEventListener("dragstart", preventDragDrop);
      document.removeEventListener("drop", preventDragDrop);

      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
      <ScrollToTopButton />
      {import.meta.env.PROD &&
        import.meta.env.VITE_DISABLE_DEVTOOLS === "true" &&
        showBlockNotice && (
          <div className="fixed bottom-4 right-4 z-9999 bg-red-600 text-white text-xs sm:text-sm px-4 py-3 rounded-lg shadow-2xl pointer-events-none select-none animate-pulse">
            🚫 Action Blocked - Content is protected
          </div>
        )}
    </Router>
  );
}

export default App;