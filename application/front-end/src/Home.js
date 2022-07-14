import React from "react";
// import "./Home.css";
import "./Navbar.css";
import InputSubmission from "./InputSubmission";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// import Display from "./Display.js";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Navbar />
      <InputSubmission />
    </>
  );
};

export default Home;
