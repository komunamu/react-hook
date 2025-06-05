import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Box from "./box";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const someFunction = useCallback(() => {
    console.log(`some function number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction called");
  }, [someFunction]);

  //Box Style example
  const [size, setSize] = useState(100);
  const createBoxStyle = useCallback(() => {
    return {
      width: size + "px",
      height: size + "px",
      backgroundColor: "pink",
    };
  }, [size]);

  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={someFunction}>Click me</button>
        <br />
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      </div>
      <div>
        <h2>box example</h2>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Box createBoxStyle={createBoxStyle} />
      </div>
    </>
  );
}

export default App;
