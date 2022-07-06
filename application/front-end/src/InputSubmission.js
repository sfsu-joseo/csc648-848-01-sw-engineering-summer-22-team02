//import userEvent from '@testing-library/user-event';
import React, { useState } from "react";
import axios from "axios";
import Display from "./Display.js";
import "./Navbar.css";

function InputSubmission() {
  const [InputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [sport, setSport] = useState("");

  function handlesearch(e) {
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/searchnews/search",
      data: {
        sport: "baseball",
      },
    };

    axios(config)
      .then(function (response) {
        // JSON.parse(response.data);\
        console.log(InputText);
        console.log(date);
        console.log(sport);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
          <select className="select_format" onChange={(e) => setSport(e.target.value)}>
            <option className="selec" value="">Select One …</option>
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
      <div className="display">
        
        <Display />
      </div>
    </div>
  );
}

export default InputSubmission;
