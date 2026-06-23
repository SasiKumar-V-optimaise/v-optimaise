import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";
import Customers from "./components/Customers/Customers";
import ContactUs from "./components/ContactUs/ContactUs";
import NotFound from "./components/NotFound/NotFound";
import VisionAI from "./components/ProductsPage/VisionAI";
import SmartFactory from "./components/ProductsPage/SmartFactory";
import CoOperate from "./components/ProductsPage/CoOperate";
import Store from "./components/Store/Store";
import ProductOverview from "./components/Store/ProductOverview";
import Card from "./components/test/test";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

const ScrollAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => AOS.refreshHard(), 120);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <ScrollAnimations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/productspage/vision-ai" element={<VisionAI/>} />
        <Route path="/productspage/smart-factory" element={<SmartFactory/>} />
        <Route path="/productspage/cooperate" element={<CoOperate/>} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:productId" element={<ProductOverview />} />
        <Route path="/test" element={<Card/>} />

      </Routes>
    </Router>
  );
}

export default App;
