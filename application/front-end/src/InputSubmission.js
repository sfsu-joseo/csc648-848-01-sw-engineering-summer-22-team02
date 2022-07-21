import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import ArticleView from "./ArticleView";
import Footer from "./Footer";

function InputSubmission() {
  const [data, setData] = useState("");
  const [InputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [sport, setSport] = useState("");
  const [length, setLength] = useState("");

  function my_func() {
    myFunction();
    handlesearch();
  }

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function handlesearch() {
    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/searchnews/search",
      data: {
        sport: sport,
        searchText: InputText,
        date: date,
        length: length,
      },
    };
    axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data.sport);
        console.log(response.data.length);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    handlesearch();
  }, []);

  // function dateFilter() {
  //   <input
  //     type="date"
  //     className="dateSelect"
  //     onChange={(e) => setDate(e.target.value)}
  //   />;
  // }

  return (
    <div className="search_bar">
      <div className="into">
        <p className="statement1">
          Welcome to YourSports, Enjoy a countless number of services ranging
          from Reading Sports Articles,
        </p>
        <p className="statement2">
          to enjoying live updates of games, and being updated with the latest
          player statistics.
        </p>
      </div>
      <input
        placeholder="Type any keyword present in the heading of an article, to get your search results. Ex “Harden”."
        className="search_feed"
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        className="search_button"
        onClick={my_func}
        type="submit"
      ></button>

      <div className="filter_section">
        {/* <input
          type="date"
          className="dateSelect"
          onChange={(e) => setDate(e.target.value)}
        /> */}
        <div className="dropdown">
          <button class="dropbtn">Filter Article By Sport</button>
          <div className="dropdown-content">
            <select
              className="select_format"
              onChange={(e) => setSport(e.target.value)}
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
      {data.length == 0 ? (
        <div className="noArticles">
          <h2>{data.length} search results</h2>
          <h2>Your Search did not match any articles</h2>
          <h2>Suggestions:</h2>
          <h2>Try Keywords relevant to Sports news. Ex. "Harden"</h2>
          <h2>
            Filter Articles by the Sport you are interested in. Ex. "Basketball"
          </h2>
        </div>
      ) : (
        <div>
          <h3 id="myDIV">
            Since no Filters or Keywords were applied, All articles were
            displayed
          </h3>
          <h2>{data.length} search results</h2>
        </div>
      )}

      {data ? (
        data.map((data1) => {
          return (
            <>
              <div className="row">
                <a className="click_to_view1" href="/ArticleView">
                  <div className="column1">
                    <h2 className="data_text">{data1.heading}</h2>
                    <h3 className="data_text">{data1.sport}</h3>
                    <h3 className="data_text">{data1.posttime}</h3>
                    <h3 className="data_text">{data1.Author}</h3>
                  </div>
                </a>
                <a className="click_to_view2" href="/ArticleView">
                  <div className="column2">
                    <img
                      className="image"
                      alt="Article "
                      src={data1.image_URL}
                    ></img>
                  </div>
                </a>
              </div>
            </>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </div>
  );
}

export default InputSubmission;
