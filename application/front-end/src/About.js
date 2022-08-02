import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  function redirect() {
    alert("You are now leaving this Website");
  }
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
      <Navbar />
      <div className="header">
        <h1> Software Engineering Class SFSU </h1>
        <h1>Summer 2022 </h1>
        <h1> Section 01 </h1>
        <h1> Team 2 </h1>
      </div>
      <div className="buttons">
        <h3>
          <a className="button-link" href="/PersonalAbout/Sareen">
            Kshitiz Sareen
          </a>
        </h3>

        <h3>
          <a className="button-link" href="/PersonalAbout/Islas">
            Kevin Islas
          </a>
        </h3>

        <h3>
          <a className="button-link" href="/PersonalAbout/Ireland">
            Shamar Ireland
          </a>
        </h3>

        <h3>
          <a className="button-link" href="/PersonalAbout/Saigani">
            Sabur Saigani
          </a>
        </h3>

        <h3>
          <a className="button-link" href="/PersonalAbout/Guo">
            Wenye Guo
          </a>
        </h3>

        <h3>
          <a className="button-link" href="/PersonalAbout/Abiola">
            Mathew O Abiola
          </a>
        </h3>

        <h3>
          <a className="button-link" href="/PersonalAbout/Ip">
            Jonathan Ip
          </a>
        </h3>
      </div>
      <ul className="footerAbout">
        <div class="row">
          <div class="column">
            <br></br>
            <a href="/ArticleView">Terms of Service</a>
          </div>
          <div class="column">
            <p>Contact Us</p>
            <a
              href="https://www.facebook.com/sanfranciscostate"
              onClick={redirect}
            >
              {" "}
              <p>Facebook</p>
            </a>
            <a
              href="https://twitter.com/SFSU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              onClick={redirect}
            >
              {" "}
              <p>Twitter</p>
            </a>
            <a
              href="https://www.instagram.com/sanfranciscostate/?hl=en"
              onClick={redirect}
            >
              {" "}
              <p>Instagram</p>
            </a>
          </div>
          <div class="column">
            <p>Address</p>
            <p>San Francisco State University</p>
            <p>San Francisco</p>
            <p>California</p>
          </div>
        </div>
      </ul>
    </>
  );
}

export default About;
