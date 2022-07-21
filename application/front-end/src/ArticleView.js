import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";


const ArticleView = () => {

    function up() {
        alert("Article liked");
    }
    function down() {
        alert("Article disliked");
    }

    return (
        <>
            <Navbar />
            <div className="article">
                <p className="author">Steward Smith</p>
                <p className="date">07/10/2022</p>
                <div className="thumbs">
                    <a className="thumbsUp" href="" onClick={up}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </a>
                    <a className="thumbsDown" href="" onClick={down}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </a>
                </div>
                <h2 className="heading">Kyrie Irving can still technically be traded,
                    but all signs point to him playing for Nets next season
                </h2>
                <h4 className="sub-heading">
                    Irving's opt-in likely ends the possibility of him joining the Lakers.
                </h4>
                <p className="image">
                    <img
                        className="article_image"
                        alt="Article Img"
                        src={require("./HomePage_Images/Article_Img.png")}
                    ></img>
                </p>
                <p className="content">Irving has operated with all the subtlety of a Michael Bay film this offseason.
                    He only opted in after trying to find a sign-and-trade.
                </p>
                <p className="content">Irving has operated with all the subtlety of a Michael Bay film this offseason.
                    He only opted in after trying to find a sign-and-trade — Irving gave the Nets a
                    list of teams where he wanted to go — and finding there was no wide market for
                    his services after the disruption he caused in Boston and now Brooklyn.
                </p>
                <p className="conclusion">For now, the Nets are being patient. It’s a negotiating position, but one they don’t
                    need to change. Brooklyn only gets one swing at this.
                </p>
            </div>
            <Footer/>
        </>
    );
}

export default ArticleView;
