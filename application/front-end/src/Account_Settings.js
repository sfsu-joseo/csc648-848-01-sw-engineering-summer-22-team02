import React, { useState, useEffect } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";

function Account_Settings() {

    function deleteSuccess(){
        alert("Account Deleted");
    }

    function logoutSuccess(){
        alert("Logout Sucessful");
    }
    function reset(){
        alert("Will be impelmented in next prototype");
    }

    return (
        <>
            <Navbar/>
            <div className="account_buttons">
            <a className="link" href="/Home">
                <button type="submit" onClick={reset} className="reset">
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
        </>
    );
}


export default Account_Settings;
