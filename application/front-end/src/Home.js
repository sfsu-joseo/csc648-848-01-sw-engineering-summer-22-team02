import React from "react";
// import "./Home.css";
import "./Navbar.css";
import InputSubmission from "./InputSubmission";
import { Link } from "react-router-dom";

// import Display from "./Display.js";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => {


function popup(){
  alert("will be implemented in the next prototype");
}


  return (
    <>
      <ul className="firstNavbar">
        <li>
          <a className="first_header" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="first_header" href="/About">
            About
          </a>
        </li>
      </ul>

      <ul className="secondNavbar">
        <li>
        <a className="iconn" href="/Home">
          <img
            alt="logo"
            class="Logo_Img"
            src={require("./HomePage_Images/YourSports.png")}
          />
          </a>
        </li>
        <li className="user_Img">
          {/* <button><img class="user" src={require('./HomePage_Images/user.png')} /></button> */}
          {/* <FontAwesomeIcon icon={faUser}  /> */}
          
          <button onClick={popup}>
          {/* <a className="iconn" href="/TempPage"> */}
            <img
              class="user"
              alt="User"
              src={require("./HomePage_Images/user.png")}
            />
            {/* </a> */}
          </button>
        </li>
        <li className="signup">
          <a className="login_signup_click" href="/SignUp">
            SignUp
          </a>
        </li>
        <li className="login">
          <a onClick={popup} className="login_signup_click" href="/Home">
            Login
          </a>
        </li>
      </ul>

      <ul className="thirdNavbar">
        <div className="navbar_align">
          <li className="third_align">
            <a onClick={popup} className="twitter_feed" href="/Home">
              Twitter Feeds
            </a>
          </li>
          <li>
            <a onClick={popup} className="live_games" href="/Home">
              Live Games
            </a>
          </li>
          <li>
            <a onClick={popup} className="player_stats" href="/Home">
              Player Statistics
            </a>
          </li>
        </div>
      </ul>
      <InputSubmission />
    </>
  );
};

export default Home;
