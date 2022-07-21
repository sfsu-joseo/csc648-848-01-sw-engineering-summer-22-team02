import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "./SignUp.css";
import { useState } from "react";
import Footer from "./Footer";

const UploadArticle = () => {
    const [img, setImgage] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImgage(URL.createObjectURL(file));
    };
    function uploaded() {
        alert("Article Uploaded");
    }
    return (
        <>
            <Navbar />
            <p className="upload_greet1">Want to get your Articles across</p>
            <p className="upload_greet2">Upload your articles to the YourSports Website, for other users to read.</p>
            <div className="upload">
                <input className="heading" type="text" placeholder="Heading" />
                <input className="sub" type="text" placeholder="Sub-Heading" />

                <div className="image">
                    <p style={{
                        color: 'black',
                        marginTop: '1%',
                        marginRight: '100%',
                    }}>Choose Thumbnail</p>
                    <input type="file" className="btnFile" onChange={onImageChange} />
                    <img className="btnImg" src={img} alt="" />
                </div>

                <textarea className="content" type="text" placeholder="Introduction" />
                <textarea className="conclusion" type="text" placeholder="Content" />
                <textarea className="conclusion" type="text" placeholder="Conclusion" />

                <a href="/Home">
                    <button type="submit" className="upload_button" onClick={uploaded}>
                        Upload
                    </button>
                </a>
            </div>
            <Footer/>
        </>
    );
};

export default UploadArticle;
