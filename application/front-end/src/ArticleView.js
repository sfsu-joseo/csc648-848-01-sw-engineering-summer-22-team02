import React, { Component, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faUserGear,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleView = () => {

  const [heading,setHeading] = useState("");
  const [subHeading,setSubHeading] = useState("");
  const [imageURL,setImageURL] = useState("");
  const [introduction,setIntroduction] = useState("");
  const [content,setContent] = useState("");
  const [conclusion,setConclusion] = useState("");


  const {articleID} = useParams();
  var config = {
    method: "post",
    url: "http://localhost:8080/api/article/getArticle",
    data: {
      articleID: articleID,
    }
  };

  useEffect(()=>{
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setHeading(response.data.Heading);
        setSubHeading(response.data.SubHeading);
        setIntroduction(response.data.Introduction);
        setContent(response.data.Content);
        setConclusion(response.data.Conclusion);
        setImageURL(response.data.Image_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])

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
  function up() {
    alert("Article liked");
  }
  function down() {
    alert("Article disliked");
  }

  return (
    <>
      <Navbar />
      <div className="article">
        <p className="author">Steward Smith</p>
        <p className="date">07/10/2022</p>
        <div className="thumbs">
          <a className="thumbsUp" href="" onClick={up}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </a>
          <a className="thumbsDown" href="" onClick={down}>
            <FontAwesomeIcon icon={faThumbsDown} />
          </a>
        </div>
        <h2 className="heading">
          {
            heading
          }
        </h2>
        <h4 className="sub-heading">
          {
            subHeading
          }
        </h4>
        <p className="image">
          <img
            className="article_image"
            alt="Article Img"
            src={
              imageURL
            }
          ></img>
        </p>
        <p className="content">
          {
            introduction
          }
        </p>
        <p className="content">
          {
            content
          }
        </p>
        <p className="conclusion">
          {
            conclusion
          }
        </p>
      </div>
      <div className="statement12">Comments</div>
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
        return
        <div className="commentText">
          Enjoy it while you can Warriors Fans, next year the Lakers will take
          it. Lebron and a healthy Anthony Davis {">"} Steph and Klay all day
        </div>
      </div>

      <div className="comment_bar">
        <input
          placeholder="Write your post here"
          className="search_feed"
          //   onChange={(e) => setData(e.target.value)}
        />
        <button
          className="submit_button"
          type="submit"
          //   onClick={handleComments}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ArticleView;
