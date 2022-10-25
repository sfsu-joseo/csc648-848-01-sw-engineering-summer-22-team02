import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import ArticleView from "./ArticleView";
import "./Footer";
import { Card, Icon, Image, Input } from 'semantic-ui-react';
import Footer from "./Footer";

/*Function receives user input and calls api to return articles*/
function InputSubmission() {
  const [data, setData] = useState("");
  const [InputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [sport, setSport] = useState("");
  const [length, setLength] = useState("");
  const [searchApplied, setSearchApplied] = useState(false);
  const backUrl = "http://34.136.124.189:8080/api/article/getSearch";

  function handlesearch() {
    if (InputText === "" && sport === "") {
      setSearchApplied(false);
    } else {
      setSearchApplied(true);
    }
    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/article/search",
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    handlesearch();
  }, []);

  return (
    <>
    <div className="search_bar" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
      <Input
        placeholder="Search Articles by Keywords. Ex “Harden”."
        onChange={(e) => setInputText(e.target.value)}
        style={{
          width: '290px'
        }}
        onKeyDown={e=>{
          if(e.keyCode===13)
          {
            handlesearch();
          }
        }}
      />
      <button
        className="search_button"
        onClick={handlesearch}
        type="submit"
      ></button>
      </div>
      <div className="filter_section" style={{
        marginTop:'1%'
      }}>
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
      {data.length === 0 ? (
        <div className="noArticles" style={{
          marginTop: '5%'
        }}>
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
          <h2 style={{
          marginTop: '5%',
          marginBottom: '5%'
        }}>{data.length} search results</h2>
        </div>
      )}
      {data ? (
        searchApplied === false ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%'
          }}>
            <h2>
              Since no filters or keywords were applied, all the articles are
              displayed{" "}
            </h2>
            {
              /*Displays all articles */
              data.map((data1) => {
                return (
                  <Card href={"/ArticleView/" + data1.Article_ID} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',

                  }}>
                    <Image src={data1.Image_url} wrapped ui={false} />
                    <Card.Content style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }}>
                      <Card.Header>{data1.Heading}</Card.Header>
                      <Card.Meta>
                        <p>                            {new Date(data1.PostDate).getFullYear() +
                              "-" +
                              (new Date(data1.PostDate).getMonth() + 1) +
                              "-" +
                              new Date(data1.PostDate).getDate()}</p>
                      </Card.Meta>
                      <Card.Description>
                      {data1.Name}
                      </Card.Description>
                    </Card.Content>
                      </Card>
                );
              })
            }
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%'
          }}>
            {
          data.map((data1) => {
            return (
              <Card href={"/ArticleView/" + data1.Article_ID} style={{
                display: 'flex',
                flexDirection: 'row',
                width: '90%',

              }}>
                <Image src={data1.Image_url} wrapped ui={false} />
                <Card.Content style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                  <Card.Header>{data1.Heading}</Card.Header>
                  <Card.Meta>
                    <p>                            {new Date(data1.PostDate).getFullYear() +
                          "-" +
                          (new Date(data1.PostDate).getMonth() + 1) +
                          "-" +
                          new Date(data1.PostDate).getDate()}</p>
                  </Card.Meta>
                  <Card.Description>
                  {data1.Name}
                  </Card.Description>
                </Card.Content>
                  </Card>
            );
          })}
          </div>
        )
      ) : (
        <h3>No data yet</h3>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default InputSubmission;
