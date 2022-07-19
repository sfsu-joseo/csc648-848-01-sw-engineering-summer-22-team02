import React from "react";
import "./Home.css";
import Navbar from "./Navbar";


function About() {
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
      <Navbar/>
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
    </>
  );
}

export default About;
