// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar'; // Assuming you have this
//import Petals from '../components/Petals';
import SamuraiBackground from '../components/SamuraiBackground'; // <--- IMPORT THIS

const Home = () => {
  return (
    <div className="home-container">

      {/* 1. PUT THE BACKGROUND FIRST (So it sits behind everything) */}
      <SamuraiBackground />

      {/* 2. PUT THE PETALS SECOND */}
      <Petals />

      {/* 3. YOUR MAIN CONTENT */}
      <div className="content-layer">
        <h1>HACKSTREET</h1>
        <p>Shadow of the Samurai</p>
        <button className="enter-btn">ENTER DOJO</button>
      </div>

    </div>
  );
};

export default Home;