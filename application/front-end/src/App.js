import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import About from "./About";
import SignUp from "./SignUp";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import TempPage from "./TempPage";

// Import other team member's file names
import Ireland from "./PersonalAbout/Ireland";
import Ip from "./PersonalAbout/Ip";
import Islas from "./PersonalAbout/Islas";
import Guo from "./PersonalAbout/Guo";
import Saigani from "./PersonalAbout/Saigani";
import Abiola from "./PersonalAbout/Abiola";
import Sareen from "./PersonalAbout/Sareen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/TempPage" element={<TempPage />} />

        {/* Route other team member's file names */}
        <Route path="/PersonalAbout/Ireland" element={<Ireland />} />
        <Route path="/PersonalAbout/Ip" element={<Ip />} />
        <Route path="/PersonalAbout/Islas" element={<Islas />} />
        <Route path="/PersonalAbout/Guo" element={<Guo />} />
        <Route path="/PersonalAbout/Saigani" element={<Saigani />} />
        <Route path="/PersonalAbout/Abiola" element={<Abiola />} />
        <Route path="/PersonalAbout/Sareen" element={<Sareen />} />
      </Routes>
    </div>
  );
}

export default App;
