//import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import axios from 'axios';

function InputSubmission(){

const [InputText, setInputText] = useState('');
const [date,setDate]=useState('');
const [sport, setSport]=useState('');

function handlesearch(e) {

var axios = require("axios");

    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/searchnews/search",
      data:{
      sport: "baseball",
      }
    };

    axios(config)
      .then(function (response) {
       // JSON.parse(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(InputText);
    console.log(date);
    console.log(sport);
  }

return(
    <div className="search_bar">
        
        
    <input placeholder="Search Feed" className="search_feed" onChange={(e) => setInputText(e.target.value)}/>
 
    <button className="search_button" onClick={handlesearch} type="submit"></button>
    <input type="date" className="dateSelect" onChange={(e) => setDate(e.target.value)}/>
            <div className='dropdown'>
            <button class="dropbtn"></button>
                    <div className='dropdown-content'>
                        
                        <select
                onChange={(e) => setSport(e.target.value)}
              >
                <option value="">Select One …</option>
                <option value="Basketball">Basketball</option>
                <option value="Baseball">Baseball</option>
              </select>
                    </div>
            </div>
    
  </div> 
);
}

export default InputSubmission;
