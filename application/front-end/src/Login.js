import React, { useState, useEffect, useContext } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import ForgotPassword from "./ForgotPassword";
import Footer from "./Footer";
import TermsOfService from "./TermsOfService";
import axios from "axios";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const {accountID,
    setAccountID,
    creator,
    setCreator
    } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
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
        alert("Login Succeful");
        navigate('/');
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }

  function popup() {
    alert("Login Succesful");
  }
  function redirect() {
    alert("You are now leaving this Website");
  }
  return (
    <div style={{
      minHeigth: 'calc(100vh-150px)'
    }}>
      <Navbar />
      <div className="login_form" style={{
        marginBottom: '10%'
      }}>
        <input
          className="form_input"
          type="text"
          placeholder="Username or Email"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          className="form_input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleLogin} className="Signup_button">
          Login
        </button>
        <div className="Forget_Signup">
        <a className="signup" href="/Signup">
          Do not have an account? Signup Here!
        </a>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
