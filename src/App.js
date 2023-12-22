import React from 'react';
import { useState, useEffect } from 'react';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
 const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <Router>
      <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
          <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/About" index element={<About />} />
            <Route path="/Projects" index element={<Projects />} />
            <Route path="/Contact" index element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
