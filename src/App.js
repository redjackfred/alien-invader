import "./css/App.css";
import Login from "./Login";
import Game from "./Game";
import coffee from "./images/buyMeACoffee.png"
import RecordList from "./Record";
import {useEffect, useState} from "react";
import User from "./User";
import Welcome from "./WelcomePage";
import "./css/WelcomePage.css";
import user from "./User";
import background from "./video/alien-bg1.mp4";
import "./css/WelcomePage.css"

function App() {
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("Anonymous");
    // Win, Lose, or Playing for gaming control
    const [endGameCondition, setEndGameCondition] = useState("");
    // Score now
    const [score, setScore] = useState(0);
    const [saved, setSaved] = useState(false);
    const [start, setStart] = useState(false);
    const [welcome, setWelcome] = useState(false);

    if (!userId) {
        return <Login onLogin={setUserId}/>;
    } else {
        if (!start) {
            return <Welcome setStart={setStart}/>;
        }
        return (
            userId ?
                <div className="App">
                    <div className="col1">
                        <div className="sideBar">
                            <p>How to play:</p>
                        </div>
                    </div>

                    <div className="col2">
                        <div className="title">
                            <p>Alien Invader</p>
                        </div>
                        <div className="game">
                            <Game endGameCondition={endGameCondition} setEndGameCondition={setEndGameCondition}
                                  score={score} setScore={setScore} setSaved={setSaved}/>
                        </div>
                    </div>

                    <div className="col3">
                        <div className="playerInput">
                            <User userId={userId} userName={userName} setUserName={setUserName}/>
                        </div>

                        <div className="gameRecords">
                            <RecordList end={endGameCondition} userId={userId} userName={userName} score={score}
                                        saved={saved} setSaved={setSaved}/>
                        </div>
                    </div>

                    <footer>
                        <p style={{display: "inline-block"}}>Copyright YJ, Marshall, Vincent</p>
                        <a href="https://www.buymeacoffee.com/redjackfred">
                            <img src={coffee} alt="coffee"/>
                        </a>
                    </footer>
                </div> : <Login onLogin={setUserId}/>
        )
    }
}

export default App;