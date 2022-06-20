import React from "react";

function Islas() {
  return (
    <div>
      <img class="About_Image" src={require("../Images/Islas_Image.jpg")} />
      <h1 className="About_Name"> Kevin Islas Orgaz</h1>
      <p className="About_Paragraph">
        Hello, I am Kevin and I am a Computer Science Major at SFSU. I have two
        semesters left at SFSU. I transferred here from Southern California.
      </p>
      <p className="About_Paragraph">
        Websites and Webapps are something I find fascinating so creating our
        very own is exhilarating. My background with React will be a basis as I
        continue to learn and grow in my role as the Frontend lead.
      </p>
      <p className="About_Paragraph">
        I am excited to see what our team will create and accomplish this
        semester.
      </p>
    </div>
  );
}

export default Islas;
