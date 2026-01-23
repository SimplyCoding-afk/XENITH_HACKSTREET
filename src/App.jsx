import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Themes from "./pages/Themes";
import Timeline from "./pages/Timeline";
import Prizes from "./pages/Prizes";
import FAQ from "./pages/FAQ";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
