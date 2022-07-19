import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

function PlayerStats() {
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
        <div className="column">
        <a className="indPlayer" href="/CurryPlayerStats">
          Steph Curry
        </a>
        <a className="indPlayer" href="/BettsStatline">
          Mookie Betts
        </a>
      </div>
      </div>
    </>
  );
}

export default PlayerStats;
