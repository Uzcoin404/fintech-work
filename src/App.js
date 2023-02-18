import "./App.css";
import infoIcon from "./assets/img/info.svg";

function App() {
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
                            <div className="score_progress"></div>
                            <div className="card_scores">
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Financial strength</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
                                    </div>
                                </div>
                                <div className="card_score_item">
                                    <p>Profitability</p>
                                    <div className="progress_blog">
                                        <div className="progress_text">9</div>
                                        <div className="score_progress"></div>
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
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h3 className="card_title">Analyst rating</h3>
                            <img src={infoIcon} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h3 className="card_title">fair value</h3>
                            <img src={infoIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
