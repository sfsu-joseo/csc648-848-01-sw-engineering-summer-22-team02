import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const GamesExample = () => {
  function popup() {
    alert("Comment deletion will be implemented next milestone");
  }
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
        <div className="column">TestUser:</div>
        <div className="commentText">oh yeah this game is so good</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={popup} />
        </div>
      </div>
      <div className="comment">
        <div className="column">SportsLover:</div>
        <div className="commentText">I love the warriors</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={popup} />
        </div>
      </div>
      <div className="comment">
        <div className="column">LuckyLep:</div>
        <div className="commentText">Steph Curry is the G.O.A.T</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={popup} />
        </div>
      </div>
      <div className="comment">
        <div className="column">MjoverLebron:</div>
        <div className="commentText">How does this impact Lebron's legacy</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={popup} />
        </div>
      </div>

      <div className="comment">
        <div className="column">LAforLife:</div>
        <div className="commentText">Next year the Lakers will take it</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={popup} />
        </div>
      </div>

      <div className="search_bar">
        <input
          placeholder="Enter comment here"
          className="search_feed"
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="submit_button"
          type="submit"
          onClick={handleComments}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default GamesExample;
