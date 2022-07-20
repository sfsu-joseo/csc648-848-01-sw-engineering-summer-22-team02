import React from "react";
// import "./Home.css";
import "./Navbar.css"
import Navbar from "./Navbar";

function Dashboard() {


    return (
        <>
            <Navbar />
            <div className="top">
                <p>Check the statistics of your articles here</p>
            </div>
            <div class="row">
                <div className="overall_board">
                <div class="column left" >


                    <div className="border">
                        <div className="column1">
                            <h2 className="data_text">James Harden just joined the Sixers </h2>
                            <h3 className="data_text">2022-5-3</h3>

                        </div>

                        <div className="column2">
                            <img
                                className="image"
                                alt="Article "
                                src={require("./HomePage_Images/Harden.png")}
                            ></img>
                        </div>
                        
                    </div>
                    
                    {/* <div className="white">

                    </div> */}

                    <div className="border">
                        <div className="column1">
                            <h2 className="data_text">James Harden just joined the Sixers </h2>
                            <h3 className="data_text">2022-5-3</h3>

                        </div>

                        <div className="column2">
                            <img
                                className="image"
                                alt="Article "
                                src={require("./HomePage_Images/Harden.png")}
                            ></img>
                        </div>

                    </div>
                    {/* <div className="white">

                    </div> */}

                    <div className="border">
                        <div className="column1">
                            <h2 className="data_text">James Harden just joined the Sixers </h2>
                            <h3 className="data_text">2022-5-3</h3>

                        </div>

                        <div className="column2">
                            <img
                                className="image"
                                alt="Article "
                                src={require("./HomePage_Images/Harden.png")}
                            ></img>
                        </div>
                        
                    </div>
                    {/* <div className="white">

                    </div> */}

                    <div className="border">
                        <div className="column1">
                            <h2 className="data_text">James Harden just joined the Sixers </h2>
                            <h3 className="data_text">2022-5-3</h3>

                        </div>

                        <div className="column2">
                            <img
                                className="image"
                                alt="Article "
                                src={require("./HomePage_Images/Harden.png")}
                            ></img>
                        </div>

                    </div>

                </div>
                
                </div>

                <div className="column right">
                    <div class="stats">

                        <p className="importantInfo">Number of Views: <b className="number"> 5653</b></p>
                        <p className="importantInfo">Number of Likes: <b className="number"> 170</b> </p>
                        <p className="importantInfo">Number of Dislikes:<b className="number"> 30</b></p>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Dashboard;
