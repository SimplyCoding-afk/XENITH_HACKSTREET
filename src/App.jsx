// src/App.jsx
import Petals from './components/Petals';
import SamuraiBackground from './components/SamuraiBackground';
import './App.css';

function App() {
  return (
    <div className="main-wrapper">

      {/* LAYER 1: The Background Image */}
      <SamuraiBackground />

      {/* LAYER 2: The Moving Petals */}
      <Petals />

      {/* LAYER 3: The Text Content */}
      <div className="content-layer">
        <h1>HACKSTREET</h1>
        <p>Shadow of the Samurai</p>
        <button className="enter-btn">ENTER DOJO</button>
      </div>

    </div>
  );
}

export default App;