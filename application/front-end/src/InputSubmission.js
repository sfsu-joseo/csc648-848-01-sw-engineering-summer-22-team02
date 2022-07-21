import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import ArticleView from "./ArticleView";

function InputSubmission() {
  const [data, setData] = useState("");
  const [InputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [sport, setSport] = useState("");
  const [length, setLength] = useState("");

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
        setLength(20000);
        setData(response.data);
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
        onClick={handlesearch}
        type="submit"
      ></button>

      <div className="filter_section">
        {/* <input
          type="date"
          className="dateSelect"
          onChange={(e) => setDate(e.target.value)}
        /> */}
        <div className="dropdown">
          <button class="dropbtn">Sport Filter</button>
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
              <h2 className="data_text">{data.length}</h2>
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
      <h3> no data</h3>
    </div>
  );
}

export default InputSubmission;
