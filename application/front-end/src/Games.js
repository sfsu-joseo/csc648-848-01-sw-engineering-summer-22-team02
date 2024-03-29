import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./TermsOfService";
import axios from "axios";
import { Card, Icon, Image, Input, Container } from 'semantic-ui-react';

const Games = () => {

  const [team,setTeam] = useState('');
  const [postDate,setPostDate] = useState('');
  const [sport,setSport] = useState('');

  const [games,setGames] = useState([]);
  const [searchApplied, setSearchApplied] = useState(false);

  useEffect(()=>{
    search();
  },[]);


  function search()
  {
    if(team == '' && postDate == '' && sport == '')
    {
      setSearchApplied(false);
    }
    else{
      setSearchApplied(true);
    }
    var configOne = {
      method: "post",
      url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/games/searchGame",
      data: {
        postDate: postDate,
        sport: sport,
        team: team

      }
    };
    
    axios(configOne)
    .then(function (response) {
      console.log(response.data);
      setGames(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
        <Input
          placeholder="Search Game by Team. Ex. “Warriors”."
          className="search_feed"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          onKeyDown={e=>{
            if(e.keyCode===13)
            {
              search();
            }
          }}
        />
        <button className="search_button_Games" type="submit" onClick={search}></button>
      </div>
      <div className="filter_section">
        <input
          type="date"
          className="dateSelect"
          onChange={(e) => setPostDate(e.target.value)}
        />
        <div className="dropdown">
          <button class="dropbtn">Filter by Sport</button>
          <div className="dropdown-content">
            <select
              className="select_format"
              onChange={(e) => setSport(e.target.value)}
            >
              <option className="selec" value="">
                Select One …
              </option>
              <option value="basketball">Basketball</option>
              <option value="baseball">Baseball</option>
            </select>
          </div>
        </div>
      </div>
          {
            searchApplied == false ? 
            <div>
            <h2>
              Since no filters or keywords were applied, all the games are
              displayed{" "}
            </h2>
            <h2>{games.length} search results</h2>
            {
        games.map(game=>
          <div className="games">
          <a className="gamesInfo" href={"/GamesExample/"+game.Game_ID}>
            <div className="column">
              <img
                className="teams"
                alt="Warriors logo"
                src={game.teamOneURL}
                /*src\HomePage_Images\*/
              ></img>

              <div className="gameText">{game.TeamOne}</div>
            </div>

            <div className="column">
              <div className="score">{game.TeamOneScore+' - '+game.TeamTwoScore}</div>
              <div className="time" style={{
                            marginTop: '5%'
                          }}>{new Date(game.GameDate).getFullYear()+'-'+(new Date(game.GameDate).getMonth()+1)+'-'+(new Date(game.GameDate).getDate()+1)}</div>
              <div className="versusText">{game.GameLocation}</div>
              <div className="versusText">{game.SportType == 0 ? "Basketballl" : "Baseball"}</div>
            </div>
            <div className="column">
              <img
                className="teams"
                alt="Celtics logo"
                src={game.teamTwoURL}
              ></img>
              <div className="gameText">{game.TeamTwo}</div>
            </div>
          </a>
        </div>
        ) 
            }
            </div>

         : games.length == 0 ?
         <div className="noArticles">
         <h2>{games.length} search results</h2>
         <h2>Your Search did not match any games</h2>
         <h2>Suggestions:</h2>
         <h2>Try Keywords relevant to Sports Teams. Ex. "ATL"</h2>
         <h2>
           Filter games by the Sport you are interested in. Ex. "Basketball"
         </h2>
         <h2>
           Filter games by the date of the game. Ex "2022-08-07"
         </h2>
       </div> : 
       <div>
         <h2>{games.length} search results</h2>
         {
                    games.map(game=>
                      <div className="games">
                      <a className="gamesInfo" href={"/GamesExample/"+game.Game_ID}>
                        <div className="column">
                          <img
                            className="teams"
                            alt="Warriors logo"
                            src={game.teamOneURL}
                            /*src\HomePage_Images\*/
                          ></img>
            
                          <div className="gameText">{game.TeamOne}</div>
                        </div>
            
                        <div className="column">
                          <div className="score">{game.TeamOneScore+' - '+game.TeamTwoScore}</div>
                          <div className="time" style={{
                            marginTop: '5%'
                          }}>{new Date(game.GameDate).getFullYear()+'-'+(new Date(game.GameDate).getMonth()+1)+'-'+(new Date(game.GameDate).getDate()+1)}</div>
                          <div className="versusText">{game.GameLocation}</div>
                          <div className="versusText">{game.SportType == 0 ? "Basketballl" : "Baseball"}</div>
                        </div>
                        <div className="column">
                          <img
                            className="teams"
                            alt="Celtics logo"
                            src={game.teamTwoURL}
                          ></img>
                          <div className="gameText">{game.TeamTwo}</div>
                        </div>
                      </a>
                    </div>
                    ) 
          }
                    </div>
}
        




<Footer/>
    </>
  );
};
export default Games;
