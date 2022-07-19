import React from "react";
import "./Home.css";
import "./App.css";
import PlayerStats from "./PlayerStats";

const BettsStatline = () => {
  return (
    <>
      <PlayerStats />
      <div className="curryStatline">
        <div className="column">
          <img
            className="Stats_image"
            alt="Article Img"
            src={require("./HomePage_Images/MookieBetts.jpg")}
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
      </div>
    </>
  );
};
export default BettsStatline;
