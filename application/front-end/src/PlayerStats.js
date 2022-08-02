import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TermsOfService from "./TermsOfService";
import axios from "axios";
import Chart from "react-google-charts";

function PlayerStats() {
  function redirect() {
    alert("You are now leaving this Website");
  }

  const [playerName,setPlayerName] = useState('');
  const [players,setPlayers] = useState([]);
  const [searchApplied,setSearchApplied] = useState(false);
  const [playerType,setPlayerType] = useState('');
  const [playerID,setPlayerID] = useState(null);
  const [sport,setSport] = useState(null);
  const [playerDetails,setPlayerDetails] = useState(null);

  function getPlayers()
  {
    if(playerName=='' && playerType=='')
    {
      setSearchApplied(false);
    }
    else
    {
      setSearchApplied(true);
    }
    
    var config={
      method: "post",
      url: "http://localhost:8080/api/players/searchPlayer",
      data: {
        player: playerName,
        playerType: playerType
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setPlayers(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    getPlayers();
  },[])

  function setPlayer(playerID,playerType)
  {
    var config={
      method: "post",
      url: "http://localhost:8080/api/players/getPlayer",
      data: {
        playerID: playerID.toString(),
        sport : playerType.toString()
      }
    };
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setPlayerID(playerID);
      setSport(playerType);
      setPlayerDetails(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const options = {
    title: "Player Stats",
    backgroundColor: { fill : 'transparent'},
    width : '100%',
    height : '450px',
    top : 0,
    left: 0,
    position : 'absolute',
    fontSize: 22
  };

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
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button className="search_button" type="submit" onClick={getPlayers}></button>
        </div>
        <div className="dropdownPlayerStats">
          <button class="dropbtnStats">Filter Article By Sport</button>
          <div className="dropdown-content">
            <select
              className="select_format"
              onChange={(e) => setPlayerType(e.target.value)}
            >
              <option className="selec" value="">
                Select One …
              </option>
              <option value="basketball">Basketball</option>
              <option value="baseball">Baseball</option>
            </select>
          </div>
        </div>
        <div className="playerDisplay">
          <div className="scroll">
            {
              searchApplied == false ? 
              <div>
                <div style={{
                  display: 'block',
                  textAlign: 'center',
                  marginRight: '60%',
                  minWidth: '60%',
                }}>
                <h2>Since no filters of keywords were applied, all the players were returned</h2>
                <h2>{players.length} search results</h2>
                </div>
                {
              players.map(player=>
                <div onClick={()=>{
                  setPlayer(player.Player_ID,player.PlayerType);

                }}>
                <p className="indPlayer">
                {player.PlayerName}
              </p>
              </div>
                ) 
              }
                </div> : players.length == 0 ?
                        <div style={{
                          display: 'block',
                          textAlign: 'center',
                          marginRight: '60%',
                          minWidth: '60%',
                        }}>
                        <h2>{players.length} search results</h2>
                        <h2>Your Search did not match any players</h2>
                        <h2>Suggestions:</h2>
                        <h2>Try Keywords relevant to the names of players. Ex. "Brown"</h2>
                        <h2>
                          Filter Players By the sport they Play In. Ex. "Basketball"
                        </h2>
                      </div> :               players.map(player=>
                <div onClick={()=>{
                  setPlayer(player.Player_ID,player.PlayerType,player.PlayerName);

                }}>
                <p className="indPlayer">
                {player.PlayerName}
              </p>
              </div>
                ) 


            }
              
          </div>
        </div>
      </div>
      <div className="column12">
        {
          playerID == null ? 
          <div style={{
            position: 'absolute',
            top: '50%'
          }} onClick={()=>{

          }}>
          <h2>Please select a Player in the left to view their stats {" "}</h2>
          </div>
          : 

        <div className="curryStatline">
          {
            sport == 0 ?
            <div>
          <img
            className="Stats_image"
            alt="Article Img"
            src={playerDetails.playerURL}
          ></img>
                        <div>
                <Chart
  chartType="PieChart"
  data={[
    ["Statistic", "Number"],
    ["Games", playerDetails.Games],
    ["Field Goals Made", playerDetails.FieldGoalsMade],
    ["Field Goals Attempted", playerDetails.FieldGoalsAttempted],
    ["Two Pointers Made", playerDetails.TwoPointersMad],
    ["Two Pointers Attempted", playerDetails.TwoPointersAttempted],
    ["Three Pointers Made", playerDetails.ThreePointersMad],
    ["Three Pointers Attempted", playerDetails.TwoPointersAttempted],
  ]}
  legendToggle
  style={{
    backgroundColor: { fill:'transparent'}
  }}
  options={options}
/>
            </div>
          </div> :  sport == 1 ? <div>
          <img
            className="Stats_image"
            alt="Article Img"
            src={playerDetails.playerURL}
          ></img>
                                  <div>
                <Chart
  chartType="PieChart"
  data={[
    ["Statistic", "Number"],
    ["At Bats", playerDetails.AtBats],
    ["Runs", playerDetails.Runs],
    ["Hits", playerDetails.Hits],
    ["Singles", playerDetails.Singles],
    ["Doubles", playerDetails.Doubles],
    ["Triples", playerDetails.Triples],
    ["Home Runs", playerDetails.HomeRuns],
    ["Runs Batted In", playerDetails.RunsBatted],
    ["Batting Average", playerDetails.BattingAverage],
    ["Outs", playerDetails.Outs]
  ]}
  legendToggle
  style={{
    backgroundColor: { fill:'transparent'}
  }}
  options={options}
/>
            </div>
          </div>  : null
}
        </div>
}
      </div>

      <ul className="footerPlayer">
        <div class="row">
          <div class="column">
            <br></br>
            <a href="./TermsOfService">Terms of Service</a>
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
}

export default PlayerStats;
