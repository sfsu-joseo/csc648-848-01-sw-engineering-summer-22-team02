import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

function Dashboard() {

    class DisplayedInfo extends React.Component {
        render() {
            return (
                <div className="article_info" {...this.props}>
                    <p className="views">Number of Views: 5653</p>
                    <p className="title">Kyrie Irving can still technically be traded, but all signs point to him playing for Nets next season
                    </p>
                    <p className="sub-title">Irving's opt-in likely ends the possibility of him joining the Lakers. </p>
                    <p className="body">Irving has operated with all the subtlety of a Michael Bay film this offseason. He only opted in after trying to find a sign-and-trade
                        — Irving gave the Nets a list of teams where he wanted to go — and finding there was no wide market for his services after the disruption he caused in Boston
                        and now Brooklyn. For now, the Nets are being patient. It’s a negotiating position, but one they don’t need to change. Brooklyn only gets one swing at this.
                    </p>
                </div>
            );
        }
    }

    class Slider extends React.Component {
        render() {
            return (
                <div className="scrollmenu">
                    {/* <div class="scrollmenu"> */}
                    <div className="scroll_info" >
                        <div className="row" {...this.props}>
                            <div className="click_to_view1">
                                <div className="column1">
                                    <h2 className="data_text">Kyrie Irving can still technically be traded,but all signs point to
                                    </h2>
                                    <h2 className="data_text">
                                        him playing for Nets next season.
                                    </h2>
                                    <h3 className="data_text">Basketball</h3>
                                    <h3 className="data_text">2022-6-19</h3>
                                    <h3 className="data_text">Kevin Islas</h3>
                                </div>
                            </div>
                            <div className="click_to_view2">
                                <div className="column2">
                                    <img
                                        className="image"
                                        alt="Article "
                                        src={require("./HomePage_Images/Article_Img.png")}
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a className="scroll_info" href="#home"> */}
                    <div className="scroll_info">
                        <div className="row" {...this.props}>
                            <div className="click_to_view1">

                                <div className="column1">
                                    <h2 className="data_text">More reporting points to Harden opting out to
                                    </h2>
                                    <h2 className="data_text">
                                        give Sixers flexibility.
                                    </h2>
                                    <h3 className="data_text">Basketball</h3>
                                    <h3 className="data_text">2022-6-15</h3>
                                    <h3 className="data_text">Shamar Ireland</h3>
                                </div>
                            </div>
                            <div className="click_to_view2">
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
                    {/* </a> */}
                </div>
                // </div>
            );
        }
    }

    class InfoOnClick extends React.Component {
        constructor() {
            super();

            this.state = {
                clicked: false
            };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState({
                clicked: true
            });
        }

        render() {
            return (
                <div>
                    <Slider onClick={this.handleClick} />
                    {this.state.clicked ? <DisplayedInfo /> : null}
                </div>
            );
        }
    };




    return (
        <>
            <Navbar />
            <div className="top">
                <p>Click an Article to view more.</p>
            </div>
            <InfoOnClick />
        </>
    );
}

export default Dashboard;
