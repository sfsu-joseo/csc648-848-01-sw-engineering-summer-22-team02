import React from "react";
import Navbar from "./Navbar";

const Games = () => {
  return (
    <>
      <Navbar />
      <div className="search_bar">
        <input
          placeholder="Search Game by Team. Ex. “Warriors”."
          className="search_feed"
          // onChange={(e) => setInputText(e.target.value)}
        />
        <button className="search_button" type="submit"></button>
      </div>
      <div className="filter_section">
        <input
          type="date"
          className="dateSelect"
          // onChange={(e) => setDate(e.target.value)}
        />
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
      </div>
      <div className="games">
        <a className="gamesInfo" href="/GamesExample">
          <div className="column">
            <img
              className="teams"
              alt="Warriors logo"
              src={require("./HomePage_Images/Golden_State_Warriors_logo.svg.png")}
              /*src\HomePage_Images\*/
            ></img>

            <div className="gameText">Warriors</div>
          </div>
          <p> </p>
          <div className="column">
            <div className="score">103 - 90</div>
            <div className="time">06-13-2022</div>
            <div className="versusText">Chase Center,San Francisco</div>
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
      <div className="games">
        <a className="gamesInfo" href="/GamesExample">
          <div className="column">
            <img
              className="teams"
              alt="Warriors logo"
              src={require("./HomePage_Images/Golden_State_Warriors_logo.svg.png")}
              /*src\HomePage_Images\*/
            ></img>

            <p className="gameText">Warriors</p>
          </div>
          <p> </p>
          <div className="column">
            <div className="score">103 - 90</div>
            <div className="time">06-13-2022</div>
            <div className="versusText">Chase Center,San Francisco</div>
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
    </>
  );
};
export default Games;
