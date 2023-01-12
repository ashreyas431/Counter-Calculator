import React, { useState } from "react";
import "../assets/counterComponent.css";

function CounterComponent() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState();

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId();
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleAutoDecrement = () => {
    stopInterval();
    if (!intervalId) {
      setIntervalId(
        setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000)
      );
      console.log("interca", intervalId);
    }
  };

  const handleAutoIncrement = () => {
    stopInterval();
    if (!intervalId) {
      setIntervalId(
        setInterval(() => {
          setCounter((prev) => prev + 1);
        }, 1000)
      );
      console.log("interca", intervalId);
    }
  };
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <div className="counterClass">{counter}</div>
      <br />
      <br />
      <button onClick={handleDecrement} className="decrementButton">
        Decrement
      </button>
      <button onClick={handleAutoDecrement} className="autoDecrementButton">
        AutoDecrement
      </button>
      <button onClick={handleAutoIncrement} className="autoIncrementButton">
        AutoIncrement
      </button>
      <button onClick={handleIncrement} className="incrementButton">
        Increment
      </button>
    </>
  );
}

export default CounterComponent;
