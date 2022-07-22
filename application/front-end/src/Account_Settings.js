import React, { useState, useEffect } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import  "./TermsOfService";

function Account_Settings() { 
     function redirect() {
  alert("You are now leaving this Website");
}

    function deleteSuccess(){
        alert("Account Deleted");
    }

    function logoutSuccess(){
        alert("Logout Sucessful");
    }

    return (
      <>
        <Navbar />
        <div className="account_buttons">
          <a className="link" href="/ForgotPassword">
            <button type="submit" className="reset">
              Reset Password
            </button>
          </a>
          <a className="link" href="/Home">
            <button type="submit" onClick={logoutSuccess} className="logout">
              Logout
            </button>
          </a>
          <a className="link" href="/Home">
            <button type="submit" onClick={deleteSuccess} className="delete">
              Delete Account
            </button>
          </a>
        </div>
        <ul className="footerAccount">
          <div class="row">
            <div class="column">
              <br></br>
              <a href="./TermsOfService">Terms of Service</a>
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


export default Account_Settings;
