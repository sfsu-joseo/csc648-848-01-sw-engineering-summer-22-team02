import React from "react";
import "./Home.css";
import "./App.css";
import Navbar from "./Navbar";

const BettsStatline = () => {
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
        <p className="statLine">Games: 14 </p>
        <p className="statLine">At Bats: 1.2</p>
        <p className="statLine">Runs: 0.0</p>
        <p className="statLine">Hits: 0.0</p>
        <p className="statLine">Singles: 0.0</p>
        <p className="statLine">Doubles: 0.0</p>
        <p className="statLine">Triples: 0.0</p>
        <p className="statLine">Home Runs: 0.0</p>
        <p className="statLine">Runs Batted In: 0.0</p>
        <p className="statLine">Batting Average: 0.0</p>
        <p className="statLine">Outs: 1.2</p>
      </div>
    </>
  );
};
export default BettsStatline;
