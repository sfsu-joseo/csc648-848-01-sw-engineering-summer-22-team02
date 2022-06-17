import React from 'react'
//import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About';
import {Route, Link, Routes} from 'react-router-dom'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
