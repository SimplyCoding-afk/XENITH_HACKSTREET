// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Global Components
import Petals from "./components/Petals";
import SamuraiBackground from "./components/SamuraiBackground";
import SideScrollMenu from "./components/SideScrollMenu"; 

// Pages
import Home from "./pages/Home";
import About from "./pages/About"; 
import FAQ from "./pages/FAQ";     

import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      
      {/* --- GLOBAL LAYER (Fixed Backgrounds) --- */}
      <SamuraiBackground />
      <Petals />
      <SideScrollMenu />

      {/* --- CONTENT LAYER (Dynamic Pages) --- */}
      <div className="content-layer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/themes" element={<h1 style={{color:'white'}}>THEMES COMING SOON</h1>} />
          <Route path="/prizes" element={<h1 style={{color:'white'}}>PRIZES COMING SOON</h1>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;