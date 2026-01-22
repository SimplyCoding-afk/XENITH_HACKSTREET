import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1 className="home-title">Shadow of Samurai</h1>

      <div className="home-links">
        <Link to="/about">About</Link>
        <Link to="/themes">Themes</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/prizes">Prizes</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </section>
  );
}

export default Home;
