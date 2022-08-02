import React, { useState, useEffect, useContext } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import ForgotPassword from "./ForgotPassword";
import Footer from "./Footer";
import TermsOfService from "./TermsOfService";
import axios from "axios";
import UserContext from "./UserContext";

function Login() {

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
      url: "http://localhost:8080/api/account/login",
      data: {
        username: userName,
        password: password,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("accountID", response.data.account_id);
        setAccountID(response.data.account_id);
        setCreator(response.data.isCreator);
        localStorage.setItem("creator", response.data.isCreator);
        console.log(creator);
        alert("Login Succesful");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function popup() {
    alert("Login Succesful");
  }
  function redirect() {
    alert("You are now leaving this Website");
  }
  return (
    <>
      <Navbar />
      <div className="login_form">
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
      </div>
      <div className="Forget_Signup">
        <a className="forget" href="/ForgotPassword">
          Forgot Password?
        </a>
      </div>
      <div className="Forget_Signup">
        <a className="signup" href="/Signup">
          Do not have an account? Signup Here!
        </a>
      </div>
      <ul className="footerLogin">
        <div class="row">
          <div class="column">
            <br></br>
            <a href="/TermsOfService">Terms of Service</a>
          </div>
          <div class="column">
            <p>Contact Us</p>
            <a
              href="https://www.facebook.com/sanfranciscostate"
              onClick={redirect}
            >
              {" "}
              <p>Facebook</p>
            </a>
            <a
              href="https://twitter.com/SFSU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              onClick={redirect}
            >
              {" "}
              <p>Twitter</p>
            </a>
            <a
              href="https://www.instagram.com/sanfranciscostate/?hl=en"
              onClick={redirect}
            >
              {" "}
              <p>Instagram</p>
            </a>
          </div>
          <div class="column">
            <p>Address</p>
            <p>San Francisco State University</p>
            <p>San Francisco</p>
            <p>California</p>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Login;
