import Petals from "./components/Petals";
import SamuraiBackground from "./components/SamuraiBackground";
import ScrollNav from "./components/ScrollNav"; // <--- Import it
import "./App.css";
import logoImg from "./assets/hackstreet_logo.png";

function App() {
  return (
    <div className="main-wrapper">

      <SamuraiBackground />
      <Petals />

      <div className="vertical-text left">武士道</div>
      <div className="vertical-text right">ハックストリート</div>

      <div className="content-layer">
        <img src={logoImg} alt="HACKSTREET" className="hero-logo" />

        {/* Note: I removed the "Enter Dojo" button since you are adding 5 scrolls now.
            If you want to keep the big button AND the scrolls, just leave this line here: */}
        {/* <button className="enter-btn">ENTER DOJO</button> */}
      </div>

      {/* --- ADD THE SCROLL NAV HERE --- */}
      <ScrollNav />
      {/* ------------------------------- */}

    </div>
  );
}

export default App;