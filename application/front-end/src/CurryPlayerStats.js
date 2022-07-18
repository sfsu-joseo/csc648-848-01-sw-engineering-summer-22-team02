import React from "react";
import "./Home.css";
import "./App.css";
import Navbar from "./Navbar";

const CurryPlayerStats = () => {
  return (
    <>
      <Navbar />
      <div className="search_bar_player">
        <input
          placeholder="Search Player By Name. Ex. “Curry”."
          className="search_feed"
          // onChange={(e) => setInputText(e.target.value)}
        />
        <button className="search_button" type="submit"></button>
      </div>
      <div className="dropdown">
        <button class="dropbtn">Sport Filter</button>
        <div className="dropdown-content">
          <select
            className="select_format"
            // onChange={(e) => setSport(e.target.value)}
          >
            <option className="selec" value="">
              Select One …
            </option>
            <option value="Basketball">Basketball</option>
            <option value="Baseball">Baseball</option>
          </select>
        </div>
      </div>
      <div className="playerDisplay">
        <button className="playerBtn" onclick="/Home">
          Steph Curry
        </button>

        <button className="playerBtn">Mookie Betts</button>
      </div>
      <div className="curryStatline">
        <img
          className="Stats_image"
          alt="Article Img"
          src={require("./HomePage_Images/Article_Img.png")}
        ></img>
        <p className="statLine">Steph Curry</p>
        <p className="statLine">Games: 56 </p>
        <p className="statLine">Field Goals Made: 225.9</p>
        <p className="statLine">Field Goals Attempted: 431.0</p>
        <p className="statLine">Two Pointers Made: 169.1</p>
        <p className="statLine">Two Pointers Attempted: 272.9</p>
        <p className="statLine">Three Pointers Made: 56.8</p>
        <p className="statLine">Three Pointers Attempted: 158.1</p>
      </div>
    </>
  );
};

export default CurryPlayerStats;
