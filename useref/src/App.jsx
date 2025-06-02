import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };

  return (
    <>
      <div>
        <p>State: {count}</p>
        <p>Ref: {countRef.current}</p>
        <button onClick={increaseCount}>Increase State</button>
        <button onClick={increaseCountRef}>Increase Ref</button>
      </div>
      <hr />
      <div></div>
    </>
  );
}

export default App;
