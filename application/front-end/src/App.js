import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";

// Import other team member's file names
import Ireland from "./PersonalAbout/Ireland";
import Islas from "./PersonalAbout/Islas";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        {/* Route other team member's file names */}
        <Route path="/PersonalAbout/Ireland" element={<Ireland />} />
        <Route path="/PersonalAbout/Ip" element={<Ip />} />
        <Route path="/PersonalAbout/Islas" element={<Islas />} />
      </Routes>
    </div>
  );
}

export default App;
