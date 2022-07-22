import React from "react";
import "./Home.css";
import "./App.css";
import PlayerStats from "./PlayerStats";
import Navbar from "./Navbar";
import "./TermsOfService";

const BettsStatline = () => {
  function redirect() {
    alert("You are now leaving this Website");
  }
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
      <ul className="footerPlayer">
        <div class="row">
          <div class="column">
            <br></br>
            <a href="/TermsOfService">Terms of Service</a>
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
export default BettsStatline;
