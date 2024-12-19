import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Podcast from "./pages/Podcast";
import LetsWadeIn from "./pages/LetsWadeIn";
import Contact from "./pages/Contact";
import Partnership from "./pages/Partnership";
import "./App.css";
import background from "./assets/living_water.jpg";

function App() {
  return (
    <div
      className="app-background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/let-s-wade-in" element={<LetsWadeIn />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partnership" element={<Partnership />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
