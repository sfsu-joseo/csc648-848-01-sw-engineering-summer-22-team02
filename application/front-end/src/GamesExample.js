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
            <div className="versusText2">Basketball</div>
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
        <div className="userName">
          Test User
          <div className="commentIcon">
            <FontAwesomeIcon icon={faTrash} onClick={myFunction} />
          </div>
        </div>
        <div className="commentText">
          Oh yeah this game is so good, we are witnessing one of, if not the
          best, shooter of all time. KD needs Steph not the other way around{" "}
        </div>
    
        {/* </div> */}
      </div>
      <div className="comment" id="myDIV1">
        <div className="userName">
          SportsLover:
          <div className="commentIcon">
            <FontAwesomeIcon icon={faTrash} onClick={myFunction1} />
          </div>
        </div>
        <div className="commentText">
          I love the warriors. They'll repeat again for sure. A healthy Curry
          and Klay duo is unstoppable. #Gold Blooded.{" "}
        </div>
      </div>
      <div className="comment" id="myDIV2">
        <div className="userName">
          LuckyLep:
          <div className="commentIcon">
            <FontAwesomeIcon icon={faTrash} onClick={myFunction2} />
          </div>
        </div>
        <div className="commentText">
          Jayson Tatum gave up on the team. He looks like Westbrick out there. 5
          turnovers is horrendous. We will be back next year.
        </div>
      </div>
      <div className="comment" id="myDIV3">
        <div className="userName">
          MjoverLebron:
          <div className="commentIcon">
            <FontAwesomeIcon icon={faTrash} onClick={myFunction3} />
          </div>
        </div>
        <div className="commentText">
          This isn't real basketball. Michael Jordan would be dropping 80+
          points a night in this era. Too soft.Curry good but he's no Jordan
        </div>
      </div>

      <div className="comment" id="myDIV4">
        <div className="userName">
          LAforLife:
          <div className="commentIcon">
            <FontAwesomeIcon icon={faTrash} onClick={myFunction4} />
          </div>
        </div>
        <div className="commentText">
          Enjoy it while you can Warriors Fans, next year the Lakers will take
          it. Lebron and a healthy Anthony Davis {">"} Steph and Klay all day
        </div>
      </div>

      <div className="comment_bar">
        <input
          placeholder="Write your post here"
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
