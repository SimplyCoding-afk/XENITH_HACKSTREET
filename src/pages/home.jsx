// src/pages/Home.jsx
import React from "react";
import CountdownTimer from "../components/CountdownTimer"; 
import logoImg from "../assets/hackstreet logo.png"; // Check filename

const Home = () => {
  return (
    // We removed the big style={{...}} block because it's now in App.css
    <div className="home-container">
      
      {/* 1. The Logo */}
      <img 
        src={logoImg} 
        alt="HACKSTREET 4.0" 
        className="hero-logo"
        style={{ minHeight: '100px' }} 
      />

      {/* 2. The Timer */}
      <CountdownTimer />
      
    </div>
  );
};

export default Home;