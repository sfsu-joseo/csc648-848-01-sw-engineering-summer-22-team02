import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "./SignUp.css"


const UploadArticle = () => {
    return (
        <>
            <Navbar />
            <div className="upload">
            <input
                    className="heading"
                    type="text"
                    placeholder="Heading"
                />
                <input
                    className="sub"
                    type="text"
                    placeholder="Sub-Heading"
                />
                <input
                    className="image"
                    type="text"
                    placeholder="Image"
                />
                <input
                    className="intro"
                    type="text"
                    placeholder="Introduction"
                />
                <input
                    className="content"
                    type="text"
                    placeholder="Content"
                />
                <input
                    className="conclusion"
                    type="text"
                    placeholder="Conclusion"
                />
                <button type="submit"  className="upload_button">
                    Upload
                </button>
            </div>
        </>
    );
}

export default UploadArticle;
