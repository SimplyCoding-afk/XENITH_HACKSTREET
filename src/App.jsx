import { Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/About";
import Themes from "./pages/Themes";
import Timeline from "./pages/Timeline";
import Prizes from "./pages/Prizes";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/prizes" element={<Prizes />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
