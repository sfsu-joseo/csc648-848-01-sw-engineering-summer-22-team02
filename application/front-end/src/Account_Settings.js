import React, { useState, useEffect } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Account_Settings() {

    function deleteSuccess(){
        alert("Account Deleted");
    }

    function logoutSuccess(){
        alert("Logout Sucessful");
    }

    return (
        <>
            <Navbar/>
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
            <Footer/>
        </>
    );
}


export default Account_Settings;
