import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";

function InputSubmission() {
  const [data, setData] = useState("");
  const [InputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [sport, setSport] = useState("");

  function handlesearch() {
    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/searchnews/search",
      data: {
        sport: sport,
        searchText: InputText,
        date: date,
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    handlesearch();
  }, []);

  return (
    <div className="search_bar">
      <input
        placeholder="Search Feed"
        className="search_feed"
        onChange={(e) => setInputText(e.target.value)}
      />

      <input
        type="date"
        className="dateSelect"
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="dropdown">
        <button class="dropbtn">Select Sport</button>
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
      <button
        className="search_button"
        onClick={handlesearch}
        type="submit"
      ></button>
      {data ? (
        data.map((data) => {
          return (
            <div className="data">
              <img
                className="display_image"
                alt="Article "
                src={data.image_URL}
              ></img>
              <h3 className="data_text">{data.heading}</h3>
              <h3 className="data_text">{data.subHeading}</h3>
              <h3 className="data_text">{data.posttime}</h3>
              <h3 className="data_text">{data.Author}</h3>
              <h3 className="data_text">{data.sport}</h3>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </div>
  );
}

export default InputSubmission;
