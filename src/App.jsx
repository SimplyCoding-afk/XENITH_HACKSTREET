// src/App.jsx
import React from "react";
import Petals from "./components/Petals";
import SamuraiBackground from "./components/SamuraiBackground";
import SideScrollMenu from "./components/SideScrollMenu";
import CountdownTimer from "./components/CountdownTimer"; // <--- Import the timer
import "./App.css";

// Your logo
import logoImg from "./assets/hackstreet logo.png";

function App() {
  return (
    <div className="main-wrapper">

      {/* 1. Background Layer */}
      <SamuraiBackground />
      <Petals />

      {/* 3. Center Content Layer */}
      <div className="content-layer">

        {/* Logo */}
        <img src={logoImg} alt="HACKSTREET 4.0" className="hero-logo" />

        {/* Timer added right here below the logo */}
        <CountdownTimer />

      </div>

      {/* 4. The Menu */}
      <SideScrollMenu />

    </div>
  );
}

export default App;