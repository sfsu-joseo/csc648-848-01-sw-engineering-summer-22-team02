import React, { useState, useEffect, useContext } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import  "./TermsOfService";
import UserContext from "./UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account_Settings() { 

  const {accountID,
    setAccountID,
    creator,
    setCreator
    } = useContext(UserContext);

    const navigate = useNavigate();

    
     function redirect() {
  alert("You are now leaving this Website");
}

    function deleteSuccess(){
        alert("Account Deleted");
    }

    function logoutSuccess(){
      localStorage.clear();
      setAccountID("");
      setCreator(0);
       alert("Logout Sucessful");
       navigate('/');
    }

    function deleteAccount()
    {
      var config = {
        method: "post",
        url: "http://34.136.124.189:8080/api/account/deleteAccount",
        data: {
          accountID: accountID
        },
      };

      axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.clear();
        setAccountID("");
        setCreator(0);
         alert("Account Deleted");
         navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
      <>
        <Navbar />
        {
          accountID!= "" ?          <div className="account_buttons">
          {
            accountID != "" ? 
            <button type="submit" onClick={logoutSuccess} className="logout">
              Logout
            </button> 
            : null
}
{
  accountID != "" ? 
            <button type="submit" onClick={deleteAccount} className="delete">
              Delete Account
            </button>
            : null
}
        </div> : 
        <div className="account_buttons" style={{
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
                      <a type="submit" style={{
                        fontSize: 20
                      }} onClick={()=>{
                        navigate('/login');
                      }} className="delete">
              Please Sign In to Access this page
            </a>
            </div>
        }
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
