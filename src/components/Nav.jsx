import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">XENITH 26</div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/themes">Themes</NavLink></li>
        <li><NavLink to="/timeline">Timeline</NavLink></li>
        <li><NavLink to="/prizes">Prizes</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
