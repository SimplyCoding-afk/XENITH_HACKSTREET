import React from 'react';
import Petals from '../components/Petals';
import SamuraiBackground from '../components/SamuraiBackground';
import Samurai from '../components/Samurai'; // <--- Import him

const Home = () => {
  return (
    <div className="home-container">
      <SamuraiBackground />

      {/* The Samurai stands on the platform */}
      <Samurai />

      {/* Petals fall IN FRONT of the samurai */}
      <Petals />

      <div className="content-layer">
        <h1>HACKSTREET</h1>
        <button className="enter-btn">ENTER DOJO</button>
      </div>
    </div>
  );
};