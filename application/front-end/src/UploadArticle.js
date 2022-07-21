import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "./SignUp.css";
import { useState } from "react";

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
        </>
    );
};

export default UploadArticle;
