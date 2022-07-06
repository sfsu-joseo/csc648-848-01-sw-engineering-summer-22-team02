import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
//image_url
//heading
//subheading
//postTime
//author
//sport
function Display() {
  const [data, setData] = useState("");
  const getAllData = () => {
    axios
      .post("http://34.136.124.189:8080/api/searchnews/search", {
        data: {
          //   date: date,
          //   search: InputText,
        },
      })

      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      {data ? (
        data.map((data) => {
          return (
            <div className="data">
              <img className="display_image" src={data.image_URL}></img>
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
    </>
  );
}
export default Display;
