import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Team from "./Components/Team";
import About from "./Components/About";
import Jobs from "./Components/Jobs";
import Press from "./Components/Press";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import Footer from "./Components/Footer";
import Terms from "./Components/Terms";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="features" element={<Features />} />
      <Route path="team" element={<Team />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="press" element={<Press />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="footer" element={<Footer />} />
    </Routes>
  );
};

export default App;
