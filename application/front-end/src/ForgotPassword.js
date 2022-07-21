import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { useState } from 'react'

const ForgotPassword = () => {

    const[show, setShow] = useState(true);

    function reset(){
        alert("Password is Reset");
    }

    return (
        <>
            <Navbar />
            <div className="reset_form">
                <input className="associated_email" type="text" placeholder="Please enter email associated with your account" />
                <button type="submit" onClick={() => setShow(!show)} className="otp_button">
                    Send OTP Email
                </button>
                {show && <p className="OTP_message">Please check your inbox, you should receive an email 
                    containing the OTP within 30 seconds.</p>}
                
                <input
                    className="OTP_new"
                    type="text"
                    placeholder="Confirm OTP"
                />

                <input className="OTP_new" type="password" placeholder="Type New Password" />

                <input className="OTP_new_password" type="password" placeholder="Confirm New Password" />

                <p className="requirement">Password must be between 8-20 characters</p>
                <a href="/Home">
                <button type="submit" onClick={reset} className="Signup_button">
                    Reset Password
                </button>
                </a>

            </div>
            <div className="Forget_Signup">
                <a className="forget" href="/Signup">Signup</a>
            </div>
            <div className="Forget_Signup">
                <a className="signup" href="/Login">Login</a>
            </div>
        </>
    );
}

export default ForgotPassword;
