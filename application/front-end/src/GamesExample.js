import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

const GamesExample = () => {
  const [data, setData] = useState("");

  function handleComments() {
    let temp = data;
    setData(temp);
    console.log(temp);
  }
  return (
    <>
      <Navbar />
      <div className="gamesExample">
        <a className="gamesInfo">
          <div className="column">
            <img
              className="teams"
              alt="Warriors logo"
              src={require("./HomePage_Images/Golden_State_Warriors_logo.svg.png")}
            ></img>

            <p className="gameText">Warriors</p>
          </div>
          <p> </p>
          <div className="column">
            <div className="score2">103 - 90</div>
            <div className="time2">06-13-2022</div>
            <div className="versusText2">Chase Center,San Francisco</div>
          </div>
          <div className="column">
            <img
              className="teams"
              alt="Celtics logo"
              src={require("./HomePage_Images/Boston_Celtics.svg.png")}
            ></img>
            <p className="gameText">Celtics</p>
          </div>
        </a>
      </div>
      <div className="comment">
        <div className="commentText">
          TestUser: oh yeah this game is so good
        </div>
      </div>
      <div className="comment">
        <div className="commentText">TestUser: I love the warriors</div>
      </div>
      {data ? (
        [data].map((data) => {
          return (
            <div className="comment">
              <h1 className="commentText">{data}</h1>
            </div>
          );
        })
      ) : (
        <h3></h3>
      )}
      <textarea
        className="textArea"
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <button className="submit_button" type="submit" onClick={handleComments}>
        Submit
      </button>
    </>
  );
};

export default GamesExample;
