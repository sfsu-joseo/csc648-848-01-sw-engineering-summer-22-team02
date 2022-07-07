import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allSet, setAllSet] = useState(false);

  function handlesignup() {
    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/account/signup",
      data: {
        name: name,
        username: userName,
        email: email,
        password: password,
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    handlesignup();
  }, []);

  return (
    <>
      <ul className="firstNavbar">
        <li>
          <a className="first_header" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="first_header" href="/About">
            About
          </a>
        </li>
      </ul>
      <ul className="secondNavbar">
        <li>
          <img
            alt="logo"
            class="Logo_Img"
            src={require("./HomePage_Images/YourSports.png")}
          />
        </li>
        <li className="user_Img">
          {/* <button><img class="user" src={require('./HomePage_Images/user.png')} /></button> */}
          {/* <FontAwesomeIcon icon={faUser}  /> */}
          <button>
            <img
              class="user"
              alt="User"
              src={require("./HomePage_Images/user.png")}
            />
          </button>
        </li>
        <li className="signup">
          <a className="login_signup_click" href="/SignUp">
            SignUp
          </a>
        </li>
        <li className="login">
          <a className="login_signup_click" href="/About">
            Login
          </a>
        </li>
      </ul>

      <div className="Signup_form">
        <h1 className="Signup_label">SignUp</h1>
        <input
          className="form_input"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form_input"
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          className="form_input"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form_input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handlesignup} className="Signup_button">
          SignUp
        </button>
        {data ? (
          [data].map((data) => {
            return (
              <div className="data">
                <h3 className="data_text">{data}</h3>
              </div>
            );
          })
        ) : (
          <h3></h3>
        )}
      </div>
    </>
  );
}

export default SignUp;
