/* # Counter with Range

 This is a coding problem that has been asked
for an interview.

    --It should display the counter
    --It should have 2 buttons 
            --start,stop 
            
# A Counter should start on clicking of a start button and
the counter should increment by 1 at a time
with the range 1 to 10 and after reaching 10 it should be decremented
from 10 to 1.
 
on clicking of stop button the timer should be stopped and start from the 0
on clicking of the pause button it should be started again.
*/

import { useState } from "react";
import "./style.css";
import "../globalStyle.css"

const CounterChallenge = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [sbtnDisable, setSbtnDisable] = useState(false);

  const handlCounterValue = (e) => {
    const { id } = e.target;
    let check;
    if (id === "start") {
      setSbtnDisable(true);
      const interval = setInterval(() => {
        setCounter((c) => {
          if (c <= 5 && check) {
            if (c === 5) check = false;
            return (c = c + 1);
          } else {
            if (c <= 0) check = true;
            return (c = c - 1);
          }
        });
      }, 1000);
      setIntervalId(interval);
    }

    if (id === "stop") {
      clearInterval(intervalId);
      setSbtnDisable(false);
    }
  };

  return (
    <>
      <h4>Counter Challenge</h4>
      <h5 id="counter">{counter}</h5>
      <div id="btn-controls">
        <button
          onClick={handlCounterValue}
          id="start"
          className="btn primary-btn"
          disabled={sbtnDisable}
        >
          Start
        </button>
        <button
          onClick={handlCounterValue}
          id="stop"
          className="btn primary-btn"
          disabled={!sbtnDisable}
        >
          Stop
        </button>
       
      </div>
    </>
  );
};

export default CounterChallenge;
