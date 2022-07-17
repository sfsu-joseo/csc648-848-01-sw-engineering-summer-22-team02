import React, { useState, useEffect } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";

function Account_Settings() {

    function popup(){
        alert("Will be implemented in next prototype");
    }

    function logoutSuccess(){
        alert("Logout Sucessful");
    }

    return (
        <>
            <Navbar/>
            <div className="account_buttons">
                <button type="submit" onClick={popup} className="reset">
                    Reset Password
                </button>
                <a className="link" href="/Home">
                <button type="submit" onClick={logoutSuccess} className="logout">
                    Logout
                </button>
                </a>
                <button type="submit" onClick={popup} className="delete">
                    Delete Account 
                </button>
            </div>
        </>
    );
}


export default Account_Settings;
