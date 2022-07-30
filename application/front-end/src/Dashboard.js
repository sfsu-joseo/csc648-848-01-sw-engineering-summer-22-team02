import React from "react";
// import "./Home.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import TermsOfService from "./TermsOfService";
import Login from "./Login";

function Dashboard() {
  function redirect() {
    alert("You are now leaving this Website");
  }
  return (
    <>
    

      <Navbar />
      {
    data.isLogged ? 
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
              <div className="border">
                <div className="column1">
                  <h2 className="data_text">
                    James Harden just joined the Sixers{" "}
                  </h2>
                  <h3 className="data_text">2022-5-3</h3>
                </div>

                <div className="column2">
                  <img
                    className="image"
                    alt="Article "
                    src={require("./HomePage_Images/Harden.png")}
                  ></img>
                </div>
              </div>

              <div className="border">
                <div className="column1">
                  <h2 className="data_text">Baseball is at an all time high</h2>
                  <h3 className="data_text">2022-3-3</h3>
                </div>

                <div className="column2">
                  <img
                    className="image"
                    alt="Article "
                    src={require("./HomePage_Images/Baseball.png")}
                  ></img>
                </div>
              </div>

              <div className="border">
                <div className="column1">
                  <h2 className="data_text">
                    James Harden just joined the Sixers
                  </h2>
                  <h3 className="data_text">2022-5-3</h3>
                </div>

                <div className="column2">
                  <img
                    className="image"
                    alt="Article "
                    src={require("./HomePage_Images/Harden.png")}
                  ></img>
                </div>
              </div>
              {/* <div className="white">

                    </div> */}

              <div className="border">
                <div className="column1">
                  <h2 className="data_text">
                    Baseball is at an all time high
                  </h2>
                  <h3 className="data_text">2022-5-3</h3>
                </div>

                <div className="column2">
                  <img
                    className="image"
                    alt="Article "
                    src={require("./HomePage_Images/Baseball.png")}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column right">
          <div class="stats">
            <p className="importantInfo">
              Number of Views: <b className="number"> 5653</b>
            </p>
            <p className="importantInfo">
              Number of Likes: <b className="number"> 170</b>{" "}
            </p>
            <p className="importantInfo">
              Number of Dislikes:<b className="number"> 30</b>
            </p>
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
      </ul>   } :
      (null)
    </>
  );
}

export default Dashboard;
