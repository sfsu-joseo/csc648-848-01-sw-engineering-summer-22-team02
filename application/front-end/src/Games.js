import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Games = () => {
  function redirect() {
    alert("You are now leaving this Website");
  }
  return (
    <>
      <Navbar />
      <div className="statement12">
        Want to Check the live scores of your favourite games?
      </div>
      <div className="statement12">
        Search Games by the teams playing, and view there scores in an instant.
      </div>
      <div className="search_bar_Games">
        <input
          placeholder="Search Game by Team. Ex. “Warriors”."
          className="search_feed"
          // onChange={(e) => setInputText(e.target.value)}
        />
        <button className="search_button_Games" type="submit"></button>
      </div>
      <div className="filter_section">
        <input
          type="date"
          className="dateSelect"
          // onChange={(e) => setDate(e.target.value)}
        />
        <div className="dropdown">
          <button class="dropbtn">Filter by Sport</button>
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
      <div className="columnGames">
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
              <div className="gameText">Celtics</div>
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

              <div className="gameText">Warriors</div>
            </div>

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
              <div className="gameText">Celtics</div>
            </div>
          </a>
        </div>
      </div>
      <div className="columnGames">
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
              <div className="gameText">Celtics</div>
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

              <div className="gameText">Warriors</div>
            </div>

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
              <div className="gameText">Celtics</div>
            </div>
          </a>
        </div>
      </div>
      <ul className="footerGames">
        <div class="row">
          <div class="column">
            <br></br>
            <a href="/ArticleView">Terms of Service</a>
          </div>
          <div class="column">
            <p>Contact Us</p>
            <a
              href="https://www.facebook.com/sanfranciscostate"
              onClick={redirect}
            >
              {" "}
              <p>Facebook</p>
            </a>
            <a
              href="https://twitter.com/SFSU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              onClick={redirect}
            >
              {" "}
              <p>Twitter</p>
            </a>
            <a
              href="https://www.instagram.com/sanfranciscostate/?hl=en"
              onClick={redirect}
            >
              {" "}
              <p>Instagram</p>
            </a>
          </div>
          <div class="column">
            <p>Address</p>
            <p>San Francisco State University</p>
            <p>San Francisco</p>
            <p>California</p>
          </div>
        </div>
      </ul>
    </>
  );
};
export default Games;
