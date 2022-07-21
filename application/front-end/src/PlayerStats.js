import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PlayerStats() {
  return (
    <>
      <Navbar />
      <div className="statement12">
        View the Updated Statistic of your favorite players
      </div>
      <div className="column12">
        <div className="search_bar_player">
          <input
            placeholder="Search Player By Name. Ex. “Curry”."
            className="search_feed"
            // onChange={(e) => setInputText(e.target.value)}
          />
          <button className="search_button" type="submit"></button>
        </div>
        <div className="dropdownPlayer">
          <button class="dropbtn">Filter Article By Sport</button>
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
          <a className="indPlayer" href="/CurryPlayerStats">
            Steph Curry
          </a>
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
      <div className="column12">
        <div className="curryStatline">
          <img
            className="Stats_image"
            alt="Article Img"
            src={require("./HomePage_Images/StephCurry.jpg")}
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
      </div>
    </>
  );
}

export default PlayerStats;
