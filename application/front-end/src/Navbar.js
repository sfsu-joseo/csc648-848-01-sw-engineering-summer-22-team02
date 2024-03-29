import React, { useContext } from "react";
import "./Navbar.css";
import "./ArticleView";
import "./UploadArticle";
import "./PlayerStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import UserContext from "./UserContext";

const Navbar = () => {

  const {accountID,
    setAccountID,
    creator,
    setCreator
    } = useContext(UserContext);
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
    </ul> */
    creator == true ? 
    <>
      <ul className="secondNavbar">
        <li>
          <a className="iconn" href="/">
            <img
              alt="logo"
              class="Logo_Img"
              src={require("./HomePage_Images/YourSports.png")}
            />
          </a>
        </li>
        <li className="gear">
          <a className="settings" href="/Account_Settings">
            <FontAwesomeIcon icon={faUserGear} />
          </a> 
        </li>
        <li className="signup">
          <a className="login_signup_click" href="/SignUp">
            Signup
          </a>
        </li>
        <li className="login">
          <a className="login_signup_click" href="/Login">
            Login
          </a>
        </li>
      </ul>

      <ul className="thirdNavbar">
        <div className="navbar_align">
        <li>
            <a className="player_stats" href="/Home">
              Articles
            </a>
          </li>
          <li>
            <a className="player_stats" href="/Games">
              Games
            </a>
          </li>
          <li>
            <a className="player_stats" href="/PlayerStats">
              Player Statistics
            </a>
          </li>
          <li>
            <a className="player_stats" href="/UploadArticle">
              Upload Article
            </a>
          </li>
          <li>
            <a className="player_stats" href="/About">
              About
            </a>
          </li>
        </div>
      </ul>
 </> : <>
      <ul className="secondNavbar">
        <li>
          <a className="iconn" href="/">
            <img
              alt="logo"
              class="Logo_Img"
              src={require("./HomePage_Images/YourSports.png")}
            />
          </a>
        </li>
        <li className="gear">
          <a className="settings" href="/Account_Settings">
            <FontAwesomeIcon icon={faUserGear} />
          </a>
        </li>
        <li className="signup">
          <a className="login_signup_click" href="/SignUp">
            Signup
          </a>
        </li>
        <li className="login">
          <a className="login_signup_click" href="/Login">
            Login
          </a>
        </li>
      </ul>

      <ul className="thirdNavbar">
        <div className="navbar_align">
        <li>
            <a className="player_stats" href="/Home">
              Articles
            </a>
          </li>
          <li>
            <a className="player_stats" href="/Games">
              Games
            </a>
          </li>
          <li>
            <a className="player_stats" href="/PlayerStats">
              Player Statistics
            </a>
          </li>
          <li>
            <a className="player_stats" href="/About">
              About
            </a>
          </li>
        </div>
      </ul>
 </>} 
    </>
  );
};

export default Navbar;
