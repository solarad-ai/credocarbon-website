import { Routes, Route } from "react-router-dom";

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Developers from "./pages/Developers";
import VVB from "./pages/VVB";
import Buyers from "./pages/Buyers";
import About from "./pages/About";


export default function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/vvb" element={<VVB />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
