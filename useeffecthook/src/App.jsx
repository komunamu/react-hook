import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(true);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleNameUpdate = (e) => {
    setName(e.target.value);
    console.log("handleNameUpdate");
  };

  useEffect(() => {
    console.log("Counter is changed");
  }, [count]);

  useEffect(() => {
    console.log("first render");
  }, []);

  return (
    <>
      <div>
        <span>count:{count}</span>
      </div>
      <div>
        <button onClick={handleCountUpdate}>Update</button>
      </div>
      <div>
        <span>Name: {name} </span>
      </div>
      <div>
        <input type="text" value={name} onChange={handleNameUpdate} />
      </div>
      <div>
        <span>{showTimer && <Timer />}</span>
        <button
          onClick={() => {
            setShowTimer(!Timer);
          }}
        >
          Toggle Timer
        </button>
      </div>
    </>
  );
}

export default App;
