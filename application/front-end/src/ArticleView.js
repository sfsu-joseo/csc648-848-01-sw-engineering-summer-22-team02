import React, { Component, useEffect, useState, useContext } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";
import { Card, Icon, Image, Input, Container } from 'semantic-ui-react';

const ArticleView = () => {

  const {accountID
    } = useContext(UserContext);

  const [heading,setHeading] = useState("");
  const [subHeading,setSubHeading] = useState("");
  const [imageURL,setImageURL] = useState("");
  const [introduction,setIntroduction] = useState("");
  const [content,setContent] = useState("");
  const [conclusion,setConclusion] = useState("");
  const [author, setAuthor] = useState("");
  const [authorName,setAuthorName] = useState("");
  const [postDate,setPostDate] = useState("");
  const [comments,setComments] = useState([]);
  const [commentContent,setCommentContent] = useState("");
  const [articleLiked,setArticleLiked] = useState(0);

  const navigate = useNavigate();





  const {articleID} = useParams();
  var configOne = {
    method: "post",
    url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/getArticle",
    data: {
      articleID: articleID,
    }
  };

  var configTwo = {
    method: "post",
    url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/getComments",
    data: {
      articleID: articleID,
    }
  };

  var configThree = {
    method: "post",
    url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/updateArticleViews",
    data: {
      articleID: articleID,
    }
  }

  var configCheckProperty ={
    method: "post",
    url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/checkArticleLikeOrDislike",
    data: {
      accountID : accountID, 
      articleID: articleID,
    }
  }

  useEffect(()=>{
    axios(configOne)
      .then(function (response) {
        console.log(response.data);
        setHeading(response.data.Heading);
        setSubHeading(response.data.SubHeading);
        setIntroduction(response.data.Introduction);
        setContent(response.data.Content);
        setConclusion(response.data.Conclusion);
        setImageURL(response.data.Image_url);
        setAuthor(response.data.fk_Author_ID);
        setAuthorName(response.data.Name);
        let date = new Date(response.data.PostDate);
        setPostDate(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
      })
      .catch(function (error) {
        console.log(error);
      });

      axios(configTwo)
      .then(function (response) {
        console.log(response.data);
        setComments(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      axios(configThree)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      checkArticleLikedOrDisliked();

  },[articleID,accountID])

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

  function insertComment(comment)
  {
  let today= new Date();
    var configThree={
      method: "post",
      url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/insertComment",
      data: {
        postDate: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
        content: commentContent,
        authorID : accountID,
        articleID: articleID,
      }
    };

    axios(configThree)
    .then(function (response) {
      console.log(response.data);
      if(response.data=="Login Required")
      {
        // eslint-disable-next-line no-restricted-globals
        let value=confirm("You need to log in to post a comment. \n Would you like to log in instead?");
        if(value==true)
        {
          navigate('/login');
        }
      }
      else
      {
      setComments(response.data);
      setCommentContent("");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function deleteComment(commentID)
  {    var configFour={
    method: "post",
    url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/deleteComment",
    data: {
      commentID: commentID.toString(),
      articleID: articleID,
    }
  };
  axios(configFour)
  .then(function (response) {
    console.log(response.data);
    setComments(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  function likeArticle(like)
  {
    var likeConfig={
      method: "post",
      url: "https://backend-service-dot-yoursports-352701.uw.r.appspot.com/api/article/updateArticleProperties",
      data: {
        like: like,
        accountID : accountID, 
        articleID: articleID,
      }
    };
    
    axios(likeConfig)
    .then(function (response) {
      console.log(response.data);
      if(response.data=="Login Required")
      {
        // eslint-disable-next-line no-restricted-globals
        let value=confirm("You need to log in to like an article. \n Would you like to log in instead?");
        if(value==true)
        {
          navigate('/login');
        }
      }
      else
      {
      checkArticleLikedOrDisliked();
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  function checkArticleLikedOrDisliked()
  {
    console.log(accountID);
    console.log(articleID);

    axios(configCheckProperty).then(function (response) {
      let count=response.data;
      console.log(count);
      setArticleLiked(count);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Navbar />
      <div className="article" style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <div style={{
          display: 'flex',
          justifyContent: "space-evenly",
          flexDirection: 'row',
          width: '60%',
          marginBottom: '5%'
        }}>
        <p>{"Author: "+authorName}</p>
        <p>{"Date Uploaded: "+postDate}</p>
        </div>
        <div style={{
          display: 'flex'
        }}>
          <p className="image">
          <img
            className="article_image"
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '10px'
            }}
            alt="Article Img"
            src={
              imageURL
            }
          ></img>
        </p>
          <div>
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
        </div>
        </div>
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
      <div className="statement12" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>Comments</div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2.5%'
    }}>
      {
        comments.map(comment => 
          <Card style={{
            width: '90%',
          }}>
            <Card.Content>
              <Card.Meta className="userName"  style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            {comment.Name}
            <div className="commentIcon">
              {
                comment.Account_ID == accountID ? 
              <FontAwesomeIcon icon={faTrash} onClick={()=>{
                deleteComment(comment.Comment_ID);
              }} /> :
              <br/>
            }
          </div>
          </Card.Meta>
         <Card.Description>
            {
              comment.Content
            }
            </Card.Description>
          </Card.Content>
        </Card>
        )
      }
      </div>
      <div className="comment_bar" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Input
          placeholder="Write your post here"
          className="search_feed"
          value={commentContent}
          onChange={(e)=>
          {
            setCommentContent(e.target.value);
          }}
          onKeyDown={e=>{
            if(e.keyCode===13)
            {
              insertComment(commentContent);
            }
          }}
          style={{
            alignSelf: 'center',
            width: '90%'
          }}
        />
        <button
          className="submit_button"
          type="submit"
          onClick={()=>{
            insertComment(commentContent)}
          }
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ArticleView;
