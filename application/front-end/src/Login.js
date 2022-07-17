import React, { useState, useEffect } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";

function Login() {

    function popup(){
        alert("Login Succesful");
    }
    return (
        <>
            <Navbar/>
            <div className="Signup_form">
                <input
                    className="form_input"
                    type="text"
                    placeholder="Username or Email"
                />

                <input
                    className="form_input"
                    type="text"
                    placeholder="Password"
                />

                <button type="submit" onClick={popup} className="Signup_button">
                    Login
                </button>
            </div>
        </>
    );
}

export default Login;
