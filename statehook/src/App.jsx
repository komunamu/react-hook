import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const heavyWork = () => {
  console.log("heavy work");
  return ["John", "Sam"];
};

function App() {
  //Time update
  const [time, setTime] = useState();

  const currentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    return timeString;
  };

  const handleClick = () => {
    const newTime = currentTime;
    setTime(newTime);
  };

  //If the initial state is a function, it will be executed only once during the initial rendering.
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  //Input tag need `onChange` handler
  const handleUpload = () => {
    setNames((prevState) => {
      return [...prevState, input];
    });
    setInput("");
  };

  return (
    <>
      <div>
        <span> Current Time: {time} </span>
        <button onClick={handleClick}>Update</button>
      </div>
      <div>
        <span> User Names: </span>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>upload</button>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
