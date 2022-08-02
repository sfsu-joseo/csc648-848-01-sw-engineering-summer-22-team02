import React, { createRef,useContext } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "./SignUp.css";
import { useState } from "react";
import Footer from "./Footer";
import 'react-image-crop/dist/ReactCrop.css';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './cropImage';
import storage from "./firebaseconfig";
import {
    ref,
    getDownloadURL,
    uploadBytes
} from "firebase/storage";
import UserContext from "./UserContext";
import axios from "axios";
import {uid} from 'uid';
import { useNavigate } from "react-router-dom";

const UploadArticle = () => {
    const navigate = useNavigate();


    const {accountID
    } = useContext(UserContext);


    const [img, setImage] = useState(null);

    const [crop, setCrop] = useState({ x: 0, y: 0 })

    const [imageBlob,setImageBlob] = useState(null);

    const onCropComplete = async (_, croppedAreaPixels) => {
        const croppedImage = await getCroppedImg(
            img,
            croppedAreaPixels
        )
        console.log(croppedImage);
        setImageBlob(croppedImage);
    }

    const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
};

    const [heading, setHeading] = useState('');
    const [subHeading,setSubHeading] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [content, setContent] = useState('');
    const [conclusion,setConclusion] = useState('');
    const [sport,setSport]= useState('');

    function upload() {
        var token = uid(16);
        const storageRef = ref(storage,`/files/`+token);
        let today= new Date();
        console.log(img);
        if(img!=null)
        {
        uploadBytes(storageRef, imageBlob).then((snapshot) => {
            getDownloadURL(storageRef).then(downloadUrl=>{
                console.log(downloadUrl);
                var configOne = {
                    method: "post",
                    url: "http://34.136.124.189:8080/api/article/insertArticle",
                    data: {
                        postDate: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        imageURL : downloadUrl,
                        heading: heading,
                        subHeading: subHeading,
                        introduction: introduction,
                        content: content,
                        conclusion: conclusion,
                        sport: sport,
                        authorID: accountID
                    }
                  };
    
                  axios(configOne)
                  .then(function (response) {
                    alert(response.data);
                    navigate('/dashboard');
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            })
              
          });
        }
        else
        {   
            alert("Thumbnail Required");
        }
    }
    return (
        <>
            <Navbar />
            <p className="upload_greet1">Want to get your Articles across</p>
            <p className="upload_greet2">Upload your articles to the YourSports Website, for other users to read.</p>
            <div className="dropdown"  style={{
                marginBottom : '5%'
            }}>
            <button class="dropbtn">Select Sport</button>
            <div className="dropdown-content">
              <select
                className="select_format"
                onChange={(e) => setSport(e.target.value)}
              >
                <option className="selec" value="">
                  Select One …
                </option>
                <option value="basketball">Basketball</option>
                <option value="baseball">Baseball</option>
              </select>
              </div>
              </div>
            <div className="upload">
                <input className="heading"  value={heading} type="text" placeholder="Heading" onChange={(e)=>{
                    setHeading(e.target.value);
                }}/>
                <input className="sub" type="text" value={subHeading} placeholder="Sub-Heading" onChange={(e)=>{
                    setSubHeading(e.target.value);
                }}/>

                <div className="image">
                    <p style={{
                        color: 'black',
                        marginTop: '1%',
                    }}>Choose Thumbnail</p>
                    <input  type="file"
                accept="image/*"
                onChange={onImageChange} />
                    <br/>
                    <div style={{
                        position: 'relative',
                        top: 0,
                        left: 20,
                        right: 0,
                        bottom: '80px',
                        width: 500,
                        height: 500
                    }}> 
                    <Cropper
                image={img}
                crop={crop}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                style={{
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}
                cropSize={{
                    width: 300,
                    height: 150
                }}
            />
                </div>
                </div>

                <textarea className="content" type="text" placeholder="Introduction" value={introduction} onChange={(e)=>{
                    setIntroduction(e.target.value);
                }}/>
                <textarea className="conclusion" type="text" placeholder="Content" value={content} onChange={(e)=>{
                    setContent(e.target.value);
                }}/>
                <textarea className="conclusion" type="text" placeholder="Conclusion" value={conclusion} onChange={(e)=>{
                    setConclusion(e.target.value);
                }}/>

                    <button type="submit" className="upload_button" onClick={upload}>
                        Upload
                    </button>
            </div>
            <Footer/>
        </>
    );
};

export default UploadArticle;
