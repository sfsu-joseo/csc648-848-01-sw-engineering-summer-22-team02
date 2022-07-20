import React from "react";
import "./Home.css";
import "./App.css";
import PlayerStats from "./PlayerStats";

const CurryPlayerStats = () => {
  return (
    <>
      <div className="curryStatline">
        <div className="column">
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
};

export default CurryPlayerStats;
