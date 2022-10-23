import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import "./Navbar.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TermsOfService from "./TermsOfService";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState(false);
  const [creator, setCreator] = useState(false);
  const navigate = useNavigate();

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
        isCreatorAccount: creator,
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
        if (response.data=="Username already exists" || response.data=="Email Already exists")
        {
          // eslint-disable-next-line no-restricted-globals
          let value=confirm(response.data+"! "+"Would you like to login instead ?");
          if(value==true)
          {
            navigate('/login');
          }
        }
        else
        {
          alert(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="Signup_form" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }}>
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

        <p className="check" style={{
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          width: '20%'
        }}>
          <a href="/termsOfService">Do you agree to the terms of service:</a>
          <input
            className="checkbox"
            type="checkbox"
            checked={services}
            onChange={(e) => {
              setServices(e.target.checked);
            }}
          />
        </p>

        <button type="submit" onClick={handlesignup} className="Signup_button" style={{
          width: '20%',
          alignSelf: 'center'
        }}>
          SignUp
        </button>
        <br></br>
        <a className="loginButton" href="/Login">
          Have an account already? Login here!
        </a>
      </div>

      <Footer />
    </>
  );
}

export default SignUp;
