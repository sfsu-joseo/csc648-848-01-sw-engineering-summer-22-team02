import React, { useState , useContext, useEffect} from "react";
// import "./Home.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import TermsOfService from "./TermsOfService";
import Login from "./Login";
import UserContext from "./UserContext";
import axios from "axios";
import { Chart } from "react-google-charts";

function Dashboard() {

  const {accountID
  } = useContext(UserContext);

  const [articles,setArticles] = useState([]);
  const [articleID, setArticleID] = useState(null);
  const [views,setViews] = useState(0);
  const [likes,setLikes] = useState(0);
  const [dislikes,setDislikes] = useState(0);


  function redirect() {
    alert("You are now leaving this Website");
  }

  useEffect(()=>{
    getArticles();
  },[accountID]);
  function getArticles()
  {
    let config = {
      method: "post",
      url: "http://localhost:8080/api/article/getArticlesByAuthorID",
      data: {
        authorID : accountID
      },
    }

    axios(config)
    .then(function (response) {
      console.log(response.data);
      setArticles(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function clickArticle(articleID)
  {
    let config = {
      method: "post",
      url: "http://localhost:8080/api/article/getArticleStatsByArticleID",
      data: {
        articleID : articleID.toString()
      },
    }

    axios(config)
    .then(function (response) {
      setArticleID(articleID);
      console.log(response.data);
      setViews(response.data.countViews);
      setLikes(response.data.countLikes);
      setDislikes(response.data.countDislikes);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const options = {
    title: "Aritcle Stats",
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
        <p>Check the statistics of your articles here</p>
      </div>
      <div className="newArticle">
        <a href="/UploadArticle">
          <button className="writeNewArticle">Write New Article</button>
        </a>
      </div>
      <div class="row">
        <div className="overall_board">
          <p className="myArticles">
            <a href="" className="myArticlesLink">
              My Articles
            </a>
          </p>

          <div className="scroll">
            <div class="column left">
              {
                articles.map(article=>
                  <div className="border" onClick={()=>{
                    clickArticle(article.Article_ID);
                  }}>
                  <div className="column1">
                    {/* <h2 className="data_text">
                      James Harden just joined the Sixers{" "}
                    </h2>
                    <h3 className="data_text">2022-5-3</h3> */}
                  </div>
  
                  <div className="column2">
                    <img
                      className="image"
                      alt="Article "
                      src={article.Image_url}
                    ></img>
                    <h2 className="data_text">
                      {article.Heading+" "}
                    </h2>
                    <h3 className="data_text">{article.Sport}</h3>
                    <h3 className="data_text">{new Date(article.PostDate).getFullYear() +
                          "-" +
                          (new Date(article.PostDate).getMonth() + 1) +
                          "-" +
                          new Date(article.PostDate).getDate()}</h3>
                  </div>
                  <br/>
                </div>
                  )
              }
            </div>
          </div>
        </div>

        <div className="column right">
          <div class="stats">
            {
              articleID !=null ?
              <div>
                <Chart
  chartType="PieChart"
  data={[
    ["Statistic", "Number"],
    ["Number of Views", views],
    ["Number of Likes", likes],
    ["Number of Dislikes", dislikes]
  ]}
  legendToggle
  style={{
    backgroundColor: { fill:'transparent'}
  }}
  options={options}
/>
            </div> : 
            <h2 className="articleStatistics">Please select an article in the left to view its stats {" "}</h2>
}
          </div>
        </div>
      </div>
      <ul className="footerDash">
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

export default Dashboard;
