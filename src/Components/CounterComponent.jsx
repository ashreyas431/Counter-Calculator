import React, { useState } from "react";
import "../assets/counterComponent.css";

function CounterComponent() {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };
  const handleAutoDecrement = () => {
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  };

  const handleAutoIncrement = () => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
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
