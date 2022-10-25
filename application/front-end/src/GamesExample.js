import React, { useEffect, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "./UserContext";
import { Card, Icon, Image, Input, Container } from 'semantic-ui-react';

const GamesExample = () => {

  const {gameID} = useParams();

  const {accountID
  } = useContext(UserContext);

  const navigate = useNavigate();

  const [teamOne,setTeamOne] = useState('');
  const [teamOneURL, setTeamOneURL] = useState('');
  const [teamOneScore,setTeamOneScore] = useState('');
  const [teamTwoScore,setTeamTwoScore] = useState('');
  const [gameDate,setGameDate] = useState('');
  const [gameLocation,setGameLocation] = useState('');
  const [sportType,setSportType] = useState('');
  const [teamTwoURL,setTeamTwoURL] = useState('');
  const [teamTwo,setTeamTwo] = useState('');
  const [posts,setPosts] = useState([]);
  const [content,setContent] = useState('');


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

  useEffect(()=>{
    var configOne = {
      method: "post",
      url: "http://34.136.124.189:8080/api/games/getGames",
      data: {
        gameID: gameID

      }
    };
    
    axios(configOne)
    .then(function (response) {
      console.log(response.data);
      setGameDate(response.data.GameDate);
      setGameLocation(response.data.GameLocation);
      setSportType(response.data.SportType);
      setTeamOne(response.data.TeamOne);
      setTeamOneScore(response.data.TeamOneScore);
      setTeamTwo(response.data.TeamTwo);
      setTeamTwoScore(response.data.TeamTwoScore);
      setTeamOneURL(response.data.teamOneURL);
      setTeamTwoURL(response.data.teamTwoURL);
    })
    .catch(function (error) {
      console.log(error);
    });

    getPosts();
  },[])

  function getPosts()
  {
    var configTwo = {
      method: "post",
      url: "http://34.136.124.189:8080/api/games/getPosts",
      data: {
        gameID: gameID

      }
    };
    
    axios(configTwo)
    .then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function insertPost()
  {    
    let today= new Date();

    var configThree = {
    method: "post",
    url: "http://34.136.124.189:8080/api/games/insertPost",
    data: {
      postDate: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      content: content,
      authorID: accountID,
      gameID: gameID

    }
  };
  
  axios(configThree)
  .then(function (response) {
    console.log(response.data);
    if(response.data=="Login Required")
    {
      // eslint-disable-next-line no-restricted-globals
      let value=confirm("You need to log in to post in the discussion forum. \n Would you like to log in instead?");
      if(value==true)
      {
        navigate('/login');
      }
    }
    else
    {
    setPosts(response.data);
    setContent("");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  function deletePost(postID)
  {
    var configFour={
      method: "post",
      url: "http://34.136.124.189:8080/api/games/deletePost",
      data: {
        postID: postID.toString(),
        gameID: gameID,
      }
    };
    axios(configFour)
    .then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
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
              src={teamOneURL}
              /*src\HomePage_Images\*/
            ></img>

            <div className="gameTextExample">{teamOne}</div>
          </div>

          <div className="columnExample">
            <div className="score2">{teamOneScore+' - '+teamTwoScore}</div>
            <div className="time2" style={{
                            marginTop: '5%'
                          }}>{new Date(gameDate).getFullYear()+'-'+(new Date(gameDate).getMonth()+1)+'-'+new Date(gameDate).getDate()}</div>
            <div className="versusText2">{gameLocation}</div>
            <div className="versusText2">{sportType == 0 ? "Basketballl" : "Baseball"}</div>
          </div>
          <div className="columnExample">
            <img
              className="teamsExample"
              alt="Celtics logo"
              src={teamTwoURL}
            ></img>
            <div className="gameTextExample">{teamTwo}</div>
          </div>
        </div>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5%'
    }}>
      {
        posts.map(post=>
          <Card style={{
            width: '90%'
          }}>
            <Card.Content>
          <Card.Meta className="userName" style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            {post.Name}
              {
                post.Account_ID == accountID ?
              <FontAwesomeIcon icon={faTrash} onClick={()=>
                {deletePost(post.Post_ID)
              }} /> : 
              <br/>
            }
          </Card.Meta>
          <Card.Description>
          <div className="commentText">
            {post.Content+" "}
          </div>
          </Card.Description>
          </Card.Content>
        </Card>
          )
      }
      </div>
    

      <div className="comment_bar">
        <Input
          placeholder="Write your post here"
          className="search_feed"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={e=>{
            if(e.keyCode===13)
            {
              insertPost();
            }
          }}
        />
        <button
          className="submit_button"
          type="submit"
          onClick={insertPost}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default GamesExample;
