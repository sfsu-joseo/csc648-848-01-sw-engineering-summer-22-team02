import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import About from "./About";
import SignUp from "./SignUp";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import TempPage from "./TempPage";
import PlayerStats from "./PlayerStats";
import ArticleView from "./ArticleView";
import UploadArticle from "./UploadArticle";
import Login from "./Login";
import Account_Settings from "./Account_Settings";
import BettsStatline from "./BettsStatline";
import CurryPlayerStats from "./CurryPlayerStats";
import Games from "./Games";
import GamesExample from "./GamesExample";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

// Import other team member's file names
import Ireland from "./PersonalAbout/Ireland";
import Ip from "./PersonalAbout/Ip";
import Islas from "./PersonalAbout/Islas";
import Guo from "./PersonalAbout/Guo";
import Saigani from "./PersonalAbout/Saigani";
import Abiola from "./PersonalAbout/Abiola";
import Sareen from "./PersonalAbout/Sareen";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/GamesExample" element={<GamesExample />} />
        <Route path="PlayerStats" element={<PlayerStats />} />
        <Route path="/TempPage" element={<TempPage />} />
        <Route path="/BettsStatline" element={<BettsStatline />} />
        <Route path="/CurryPlayerStats" element={<CurryPlayerStats />} />
        <Route path="/ArticleView" element={<ArticleView />} />
        <Route path="/UploadArticle" element={<UploadArticle />} />
        <Route path="/Account_Settings" element={<Account_Settings />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

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
