import { useState, useMemo } from "react";
import "./App.css";

const hardCalculator = (num) => {
  console.log("Hard Calculating...");

  for (let i = 0; i < 999999999999999; i++) {
    i += i;
  }
  return num + 10000;
};

const easyCalculator = (num) => {
  console.log("Easy Calculating...");

  return num + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculator(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculator(hardNumber);
  }, [hardNumber]); // dependency: when hardNumber changes, hardCalculator will be called

  const easySum = easyCalculator(easyNumber);

  return (
    <>
      <div>
        <div>
          <h3>Hard Calculator</h3>
          <input
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))}
          />
          <span> + 10000 = {hardSum}</span>
        </div>
        <div>
          <h3>Easy Calculator</h3>
          <input
            type="number"
            value={easyNumber}
            onChange={(e) => setEasyNumber(parseInt(e.target.value))}
          />
          <span> + 1 = {easySum}</span>
        </div>
      </div>
    </>
  );
}

export default App;
