import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Component/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Industries from "./pages/Industries.jsx";
import Package from "./pages/Package.jsx";
import Career from "./pages/Career.jsx";
import Policies from "./pages/Policies.jsx"; // <-- New Page
import Admin from "./pages/Admin.jsx";
import Footer from "./assets/Component/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic Services */}
        <Route path="/service/:serviceName" element={<Services />} />
        {/* Static Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/package" element={<Package />} />
        <Route path="/career" element={<Career />} />
        <Route path="/policies" element={<Policies />} /> {/* Added */}
        {/* Admin */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
