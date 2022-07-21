import React, { useState, useEffect } from "react";
import "./SignUp.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import ForgotPassword from "./ForgotPassword";
import Footer from "./Footer";
import LoginFooter from "./LoginFooter";

function Login() {
    function popup() {
        alert("Login Succesful");
    }
    return (
        <>
            <Navbar />
            <div className="login_form">
                <input
                    className="form_input"
                    type="text"
                    placeholder="Username or Email"
                />

                <input className="form_input" type="password" placeholder="Password" />

                <button type="submit" onClick={popup} className="Signup_button">
                    Login
                </button>

            </div>
            <div className="Forget_Signup">
                <a className="forget" href="/ForgotPassword">Forget Password</a>
            </div>
            <div className="Forget_Signup">
            <a className="signup" href="/Signup">Signup</a>
            </div>
            <LoginFooter/>
        </>
    );
}

export default Login;
