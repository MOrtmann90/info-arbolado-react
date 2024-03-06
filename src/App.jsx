import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Metrics from "./components/Metrics";
import Maps from "./components/Maps";
import Info from "./components/Info";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <main className="relative">
      <Router>
        <Nav />
        <BackToTop />
        <Hero />
        <About />
        <Metrics />
        <Maps />
        <Info />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
