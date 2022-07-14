import React from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import "./ArticleView";
import "./UploadArticle";

const Navbar = () => {
  return (
    <>
    {/* <ul className="firstNavbar">
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
    </ul> */}

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
      <li className="signup">
        <a className="login_signup_click" href="/SignUp">
          Signup
        </a>
      </li>
      <li className="login">
        <a className="login_signup_click" href="/TempPage">
          Login
        </a>
      </li>
    </ul>

    <ul className="thirdNavbar">
      <div className="navbar_align">
        <li className="third_align">
          <a className="twitter_feed" href="/Home">
            Home
          </a>
        </li>
        <li>
          <a className="live_games" href="/TempPage">
          Twitter Feeds
          </a>
        </li>
        <li>
          <a className="player_stats" href="/TempPage">
            Games
          </a>
        </li>
        <li>
          <a className="player_stats" href="/TempPage">
            Player Statistics
          </a>
        </li>
        <li>
          <a className="player_stats" href="/UploadArticle">
            Upload Articles
          </a>
        </li>
        <li>
          <a className="player_stats" href="/About">
            About
          </a>
        </li>
      </div>
    </ul>
  </>
  );
}

export default Navbar;
