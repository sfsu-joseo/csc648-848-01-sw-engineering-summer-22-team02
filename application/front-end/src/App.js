import React from 'react'
//import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About';
import {Route, Link, Routes} from 'react-router-dom'
import Navbar from './Navbar';

// Import other team member's file names
import Ireland from "./PersonalAbout/Ireland";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        {/* Route other team member's file names */}
        <Route path="/PersonalAbout/Ireland" element={<Ireland />} />



      </Routes>
      
      
    </div>
  );
}

export default App;
