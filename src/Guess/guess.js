import "./style.css";
import { useState, useEffect, useRef } from "react";

function Guess() {
  const [inputval, setInputval] = useState(null);
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState("Not guess");
  const refElement = useRef();

  useEffect(() => {
    setValue(Math.floor(Math.random() * 101));
  }, []);

  function nextrandom() {
    refElement.current.value = "";
    setValue("");
    setValue(Math.floor(Math.random() * 101));
    setStatus("Not Guess");
  }

  function matchinput() {
    if (Number(inputval) === value) {
      setStatus("Equal");
    } else if (inputval > value) {
      setStatus("High");
    } else {
      setStatus("Low");
    }
  }

  return (
    <div className="parentcontainer">
      <div className="container">
        <h1> Guess a number between 1 to 100</h1>
        {inputval <= 100 && inputval >= 0 ? (
          <h2> you guessed too {status}</h2>
        ) : (
          <h1>Please Insert the number between 1 to 100</h1>
        )}
        <input
          ref={refElement}
          type="number"
          onChange={(e) => setInputval(e.target.value)}
        />
        <button className="button1" onClick={matchinput}>
          Enter
        </button>
        <button className="button2" onClick={nextrandom}>
          Play again
        </button>
      </div>
    </div>
  );
}
export default Guess;
