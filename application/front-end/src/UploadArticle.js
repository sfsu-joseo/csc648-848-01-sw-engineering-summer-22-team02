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
                {/* <input
                    type="file"
                    className="image"
                    
                /> */}
                  <label for="files" classname="btn">Select Image</label>
                    <input id="files"  style={{visibility:"hidden"}} type="file"></input>
                    
                <textarea
                    className="content"
                    type="text"
                    placeholder="Introduction"
                />
                <textarea
                    className="conclusion"
                    type="text"
                    placeholder="Content"
                />
                 <textarea
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
