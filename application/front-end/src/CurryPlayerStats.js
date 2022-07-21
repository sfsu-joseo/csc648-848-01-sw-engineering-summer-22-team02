import React from "react";
import "./Home.css";
import "./App.css";
import PlayerStats from "./PlayerStats";
import Navbar from "./Navbar";

const CurryPlayerStats = () => {
  return (
    <>
      <Navbar />
      <h1>View the Updated Statistic of your favorite players</h1>
      <div className="search_bar_player">
        <input
          placeholder="Search Player By Name. Ex. “Curry”."
          className="search_feed"
          // onChange={(e) => setInputText(e.target.value)}
        />
        <button className="search_button" type="submit"></button>
      </div>
      <div className="dropdown">
        <button class="dropbtn">Filter Players by Sport</button>
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
        <div className="column">
          <div className="indPlayer" href="/CurryPlayerStats">
            Steph Curry
          </div>
          <a className="indPlayer" href="/BettsStatline">
            Mookie Betts
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 1
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 2
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 3
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 4
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 5
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 6
          </a>
          <a className="indPlayer" href="/BettsStatline">
            Player 7
          </a>
        </div>
      </div>
      <div className="curryStatline">
        <div className="column">
          <img
            className="Stats_image"
            alt="Article Img"
            src={require("./HomePage_Images/StephCurry.jpg")}
          ></img>
          <div className="statLine">Steph Curry</div>
          <div className="statLine">Games: 56 </div>
          <div className="statLine">Field Goals Made: 225.9</div>
          <p className="statLine">Field Goals Attempted: 431.0</p>
          <p className="statLine">Two Pointers Made: 169.1</p>
          <p className="statLine">Two Pointers Attempted: 272.9</p>
          <p className="statLine">Three Pointers Made: 56.8</p>
          <p className="statLine">Three Pointers Attempted: 158.1</p>
        </div>
      </div>
    </>
  );
};

export default CurryPlayerStats;
