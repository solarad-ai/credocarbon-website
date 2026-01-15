import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ExplorePopup from "./components/ui/ExplorePopup";

// Main Pages
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Developers from "./pages/Developers";
import VVB from "./pages/VVB";
import Buyers from "./pages/Buyers";
import About from "./pages/About";

// Route Configurations
import { productRoutes } from "./routes/productRoutes";
import { companyRoutes } from "./routes/companyRoutes";
import { resourceRoutes } from "./routes/resourceRoutes";
import { legalRoutes } from "./routes/legalRoutes";
import { adminRoutes } from "./routes/adminRoutes";


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/vvb" element={<VVB />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />

        {/* Footer Pages - Organized by Category */}
        {productRoutes}
        {companyRoutes}
        {resourceRoutes}
        {legalRoutes}
        {adminRoutes}
      </Routes>

      <Footer />

      {/* Explore Platform Popup */}
      <ExplorePopup />
    </>
  );
}
