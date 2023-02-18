import { useLayoutEffect } from "react";
import { gsap, SteppedEase } from "gsap";
import RadarChart from "./components/charts/radar";
import BarChart from "./components/charts/bar";
import infoIcon from "./assets/img/info.svg";
import speedMonitor from "./assets/img/speed-monitor.png";
import speedIndicator from "./assets/img/speed-indicator.svg";
import "./App.css";

function App() {
    useLayoutEffect(() => {
        gsap.set("#speedIndicator", {
            rotation: -180,
        });
        gsap.to("#speedIndicator", {
            rotation: 120,
            duration: 1,
        });
        gsap.to("#speedIndicator", {
            rotation: -120,
            duration: 1,
            delay: 2
        });
    }, []);
    return (
        <div className="wrapper">
            <div className="container">
                <div className="stat_cards">
                    <div className="card">
                        <div className="card_header">
                            <h3 className="card_title">Finranks SCORE</h3>
                            <img src={infoIcon} alt="" />
                        </div>
                        <div className="card_content">
                            <div className="score_text">7.7 / 10.0</div>
                            <div className="score_progress">
                                <div
                                    className="progress_item"
                                    style={{ width: "75%" }}
                                ></div>
                            </div>
                            <div className="card_scores">
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "90%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">10</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">10</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">7</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "70%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">5</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "50%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">7</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "70%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">8</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "80%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">6</div>
                                        <div className="score_progress">
                                            <div
                                                className="progress_item"
                                                style={{ width: "60%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h3 className="card_title">Octagon view</h3>
                            <img src={infoIcon} alt="" />
                        </div>
                        <div className="card_content">
                            <RadarChart />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h3 className="card_title">Analyst rating</h3>
                            <img src={infoIcon} alt="" />
                        </div>
                        <div className="card_content">
                            <BarChart />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h3 className="card_title">fair value</h3>
                            <img src={infoIcon} alt="" />
                        </div>
                        <div className="card_content">
                            <div className="speed_monitor">
                                <img
                                    src={speedMonitor}
                                    alt=""
                                    className="speed_monitor_img"
                                />
                                <div className="monitor_texts">
                                    <p>Undervalued</p>
                                    <div className="monitor_center_text">
                                        <span>Stock Price</span>
                                        <p>$131.19</p>
                                    </div>
                                    <p>Overvalued</p>
                                </div>
                                <div className="speed_indicator">
                                    <img
                                        src={speedIndicator}
                                        alt=""
                                        id="speedIndicator"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
