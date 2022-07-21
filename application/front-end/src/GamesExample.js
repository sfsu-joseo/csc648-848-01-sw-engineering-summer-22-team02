import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const GamesExample = () => {
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
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
      <div className="statement12">
        Check the Score, and chat with other people who are following the game
        through the discussion forum
      </div>
      {/* <div className="gamesExample">
        <a className="gameInfo">
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
      </div> */}
      {/* <div className="displayScore">

      </div> */}
      <div className="gamesExample">
        <div className="gamesInfoExample">
          <div className="columnExample">
            <img
              className="teamsExample1"
              alt="Warriors logo"
              src={require("./HomePage_Images/Golden_State_Warriors_logo.svg.png")}
              /*src\HomePage_Images\*/
            ></img>

            <div className="gameTextExample">Warriors</div>
          </div>

          <div className="columnExample">
            <div className="score2">103 - 90</div>
            <div className="time2">06-13-2022</div>
            <div className="versusText2">Chase Center,San Francisco</div>
          </div>
          <div className="columnExample">
            <img
              className="teamsExample"
              alt="Celtics logo"
              src={require("./HomePage_Images/Boston_Celtics.svg.png")}
            ></img>
            <div className="gameTextExample">Celtics</div>
          </div>
        </div>
      </div>

      <div className="comment" id="myDIV">
        <div className="column">
          <div className="userName">TestUser:</div>
        </div>
        <div className="column">
          <div className="commentText">oh yeah this game is so good</div>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faTrash} onClick={myFunction} />
        </div>
      </div>
      <div className="comment" id="myDIV1" onClick={myFunction1}>
        <div className="column">SportsLover:</div>
        <div className="commentText">I love the warriors</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="comment" id="myDIV2">
        <div className="column">LuckyLep:</div>
        <div className="commentText">Steph Curry is the G.O.A.T</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={myFunction2} />
        </div>
      </div>
      <div className="comment" id="myDIV3">
        <div className="column">MjoverLebron:</div>
        <div className="commentText">How does this impact Lebron's legacy</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={myFunction3} />
        </div>
      </div>

      <div className="comment" id="myDIV4">
        <div className="column">LAforLife:</div>
        <div className="commentText">Next year the Lakers will take it</div>
        <div className="commentIcon">
          <FontAwesomeIcon icon={faTrash} onClick={myFunction4} />
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
      <Footer />
    </>
  );
};

export default GamesExample;
