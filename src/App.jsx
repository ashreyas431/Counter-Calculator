import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CounterComponent from "./Components/CounterComponent";
import CalculatorComponent from "./Components/CalculatorComponent";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const handleCounterComponentOpen = () => {
    setShowCalculator(false);
    setShowCounter(true);
  };

  const handleCalculatorComponentOpen = () => {
    setShowCalculator(true);
    setShowCounter(false);
  };

  return (
    <>
      <nav>
        <div className="CounterTab">
          <button onClick={handleCounterComponentOpen}>Counter</button>
        </div>
        <div className="CalculatorTab">
          <button onClick={handleCalculatorComponentOpen}>Calculator</button>
        </div>
      </nav>
      {showCounter && <CounterComponent />}
      {showCalculator && <CalculatorComponent />}
    </>
  );
}

export default App;
