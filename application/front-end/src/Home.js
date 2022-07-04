import React from "react";
import { useState } from "react";
// import "./Home.css";
import "./Navbar.css";
import InputSubmission from "./InputSubmission";


const Home = () => {
  
  return (
  
    <>
      <ul className="firstNavbar">
        <li>
          <a className="first_header" href="/">Home</a>
        </li>
        <li>
          <a className="first_header" href="/About">About</a>
        </li>
      </ul>


      <ul className="secondNavbar">
        <li>
          <img class="Logo_Img" src={require('./HomePage_Images/YourSports.png')} />
        </li>
        <li className="user_Img">
        <button><img class="user" src={require('./HomePage_Images/user.png')} /></button>
        </li>
        <li className="signup">
          <a className="login_signup_click" href="/About">SignUp</a>
        </li>
        <li className="login">
          <a className="login_signup_click" href="/About">Login</a>
        </li>
        
      </ul>

      <ul className="thirdNavbar">

        <div className="navbar_align">
          <li className="third_align">
            <a className="twitter_feed" href="">Twitter Feeds</a>
          </li>
          <li>
            <a className="live_games" href="">Live Games</a>
          </li>
          <li>
            <a className="player_stats" href="">Player Statistics</a>
          </li>
        </div>
      </ul>
      <InputSubmission />

      {/* <div className="search_bar">
        
        
        <input placeholder="Search Feed"  />
     
        <button className="search_button" type="submit"></button>
      </div> */}
    </>
  );
};


//   const requestUrl = "url of whatever you want to make a request to";
// fetch('/search',)
// .then(response => response.json())
// .then(data => { 
//    // do something with the data the API has returned
// })


// </div>

export default Home;
