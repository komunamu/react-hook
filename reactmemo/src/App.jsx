import { useState } from "react";
import Child from "./child/child";
import "./App.css";

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const increaseParentAge = () => {
    setParentAge(parentAge + 1);
  };
  const increaseChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("Parent rendering");

  return (
    <>
      <div style={{ border: "2px solid navy", padding: "10px" }}>
        <h1>Parent</h1>
        <p>Age: {parentAge}</p>
        <button onClick={increaseParentAge}>Increase parent age</button>
        <button onClick={increaseChildAge}>Increase child age</button>
        <Child name={"Bob"} age={childAge} />
      </div>
    </>
  );
}

export default App;
