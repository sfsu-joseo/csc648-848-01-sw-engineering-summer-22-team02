import React, { useEffect, useState } from "react";
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
import LoginFooter from "./LoginFooter";
import useToken from "./useToken";

// Import other team member's file names
import Ireland from "./PersonalAbout/Ireland";
import Ip from "./PersonalAbout/Ip";
import Islas from "./PersonalAbout/Islas";
import Guo from "./PersonalAbout/Guo";
import Saigani from "./PersonalAbout/Saigani";
import Abiola from "./PersonalAbout/Abiola";
import Sareen from "./PersonalAbout/Sareen";
import ForgotPassword from "./ForgotPassword";
import TermsOfService from "./TermsOfService";
import UserContext from "./UserContext";


function App() {

  const [accountID, setAccountID] = useState("");
  const [creator,setCreator] = useState(0);

  useEffect(()=>{
    let accountID = localStorage.getItem('accountID');
    if(accountID!=null)
    {
      setAccountID(accountID);
    }
    let storedCreator = localStorage.getItem('creator');
    setCreator(storedCreator);
  })

  return (
    <div className="App">
      <UserContext.Provider value={{accountID,
      setAccountID,
      creator,
      setCreator
      }}>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/LoginFooter" element={<LoginFooter />} />
        <Route path="/GamesExample/:gameID" element={<GamesExample />} />
        <Route path="PlayerStats" element={<PlayerStats />} />
        <Route path="/TempPage" element={<TempPage />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/BettsStatline" element={<BettsStatline />} />
        <Route path="/CurryPlayerStats" element={<CurryPlayerStats />} />
        <Route path="/ArticleView/:articleID" element={<ArticleView />} />
        <Route path="/UploadArticle" element={<UploadArticle />} />
        <Route path="/Account_Settings" element={<Account_Settings />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/useToken" element={<useToken />} />
        {/* Route other team member's file names */}
        <Route path="/PersonalAbout/Ireland" element={<Ireland />} />
        <Route path="/PersonalAbout/Ip" element={<Ip />} />
        <Route path="/PersonalAbout/Islas" element={<Islas />} />
        <Route path="/PersonalAbout/Guo" element={<Guo />} />
        <Route path="/PersonalAbout/Saigani" element={<Saigani />} />
        <Route path="/PersonalAbout/Abiola" element={<Abiola />} />
        <Route path="/PersonalAbout/Sareen" element={<Sareen />} />
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
