import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import "./Navbar.css";
import Navbar from "./Navbar";

function SignUp() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState(false);

  // const [checked, setChecked] = useState(false);

  // const [allSet, setAllSet] = useState(false);

  function handlesignup() {
    var config = {
      method: "post",
      url: "http://34.136.124.189:8080/api/account/signup",
      data: {
        name: name,
        username: userName,
        email: email,
        password: password,
        termsOfServiceAgreed: services,
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

  // function popup() {
  //     alert("Signup Succesful");
  // }

  return (
    <>
      <Navbar />
      <div className="Signup_form">
        <input
          className="form_input"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form_input"
          type="text"
          value={userName}
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          className="form_input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form_input"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="requirement">Password must be between 8-20 characters</p>
        <p className="check">
          Are you signing up as a creator:{" "}
          <input
            classname="checkbox"
            type="checkbox"
            // checked={services}
            // onChange={(e) =>
            // setServices(e.target.checked)}
          />
        </p>

        <p className="check">
          Do you agree to the terms of service:
          <input
            className="checkbox"
            type="checkbox"
            checked={services}
            onChange={(e) => {
              setServices(e.target.checked);
            }}
          />
        </p>

        <button type="submit" onClick={handlesignup} className="Signup_button">
          SignUp
        </button>
        {/* <a className="loginButton" href="">Login</a> */}
        {data ? (
          [data].map((data) => {
            return (
              <div>
                <a className="loginButton" href="/Login">
                  Login
                </a>
                <div className="data">
                  <h3 className="data_text">{data}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <h3>error</h3>
        )}
      </div>
    </>
  );
}

export default SignUp;
