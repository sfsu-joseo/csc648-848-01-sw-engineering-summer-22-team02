import React from "react";
import "./Navbar.css";
import "./ArticleView";
import "./UploadArticle";
import "./PlayerStats";

const Footer = () => {
  return (
    <>
      <ul className="footer">
        <div class="row">
          <div class="column">
            <a href="/ArticleView">Terms of Service</a>
          </div>
          <div class="column">
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
          </div>
          <div class="column">
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Footer;
