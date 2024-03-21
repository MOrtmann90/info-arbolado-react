import "./App.css";
import Nav from "./components/Nav";
import BackToTop from "./components/BackToTop";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Metrics from "./pages/Metrics";
import Maps from "./pages/Maps";
import Survey from "./pages/Survey";
import Info from "./pages/Info";
import Footer from "./components/Footer";

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
        <Survey />
        <Info />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
