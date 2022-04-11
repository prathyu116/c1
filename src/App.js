import { useState } from "react";
import "./App.css";

function App() {
  const [tracker, SetTracker] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50,
  });
  // var over=(tracker.Ball)/6
  function addScore1(){
    if (tracker.Score > 100) return
    SetTracker({ ...tracker, Score: tracker.Score + 1 });
  }
  function addScore4(){
     if (tracker.Score > 100) return;
    SetTracker({ ...tracker, Score: tracker.Score + 4 });
  }
  function addScore6(){
     if (tracker.Score > 100) return;
    SetTracker({ ...tracker, Score: tracker.Score + 6 });
  }
  function addWicket() {
        if (tracker.Wicket >= 12) return;

     if (tracker.Score > 100) return;
    SetTracker({ ...tracker, Wicket: tracker.Wicket + 1 });
  }
  function addBall() {
     if (tracker.Score > 100) return;
    SetTracker({ ...tracker, Ball: tracker.Ball + 1 });
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              tracker.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              tracker.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              // tracker.
              Math.floor(tracker.Ball / 6) + "." + (tracker.Ball % 6)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={addScore1}>
          Add 1
        </button>
        <button className="addScore4" onClick={addScore4}>
          Add 4
        </button>
        <button className="addScore6" onClick={addScore6}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={addWicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={addBall}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      {tracker.Score > 100 ? <h1 className="status">India Won </h1> : " "}
    </div>
  );
}

export default App;
