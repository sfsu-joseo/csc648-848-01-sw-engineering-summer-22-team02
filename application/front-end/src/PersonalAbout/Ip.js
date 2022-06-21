import React from "react";

function Ip() {
    return (
      <div>
        <img class= "Ip_About_Image" src={require('../Images/Ip_image.png')} />
        <h1 className="Ip_About_Name"> Jonathan Ip</h1>
        <p className="Ip_About_Paragraph">Nice to meet you, I'm Jonathan Ip. I am a SFSU student majoring in Japanese and minoring in Computer Application.
        </p>
        <p className="Ip_About_Paragraph">
          I likes playing video games and enjoy all kinds of Japanese entertainment culture, and I researches a lot on programming so that I can finish making my own game.
        </p>
        <p className="Ip_About_Paragraph">As for this summer, I am looking forward to work with my team to creates our best web app we can.
        </p>
      </div>
    );
  }
  
  export default Ip;
  