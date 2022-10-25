import React, { useState, useEffect,useContext } from "react";
import "./SignUp.css";
import axios from "axios";
import "./Navbar.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TermsOfService from "./TermsOfService";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

function SignUp() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const navigate = useNavigate();

  const {accountID,
    setAccountID,
    creator,
    setCreator
    } = useContext(UserContext);

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
        isCreatorAccount: isCreator,
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
        else if(response.data==="Account Created Succesfully")
          {
            var config = {
              method: "post",
              url: "http://34.136.124.189:8080/api/account/login",
              data: {
                username: userName,
                password: password,
              },
            };

            axios(config)
            .then(function (response) {
              console.log(response.data);
              if(response.data=="Accout does not exist! Please check your username, email and password")
              {
                alert("Accout does not exist! Please check your username, email and password");
              }
              else
              {
              localStorage.setItem("accountID", response.data.account_id);
              setAccountID(response.data.account_id);
              setCreator(response.data.isCreator);
              localStorage.setItem("creator", response.data.isCreator);
              console.log(creator);
              alert("Signup Succeful");
              navigate('/');
              }
            })
            .catch(function (error) {
              alert(error);
            });
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
          justifyContent: 'space-between',
          width: '17.5%'
        }}>
          Are you signing up as a creator:{" "}
          <input
            classname="checkbox"
            type="checkbox"
            checked={isCreator}
            onChange={(e) => {
              setIsCreator(e.target.checked);
            }}
          />
          </p>
        <p className="check" style={{
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'space-between',
          width: '17.5%'
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
          Signup
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
