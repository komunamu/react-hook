import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef("");

  useEffect(() => {
    console.log("inputRef: ", inputRef);
    inputRef.current.focus();
  }, []);

  const loginHandler = () => {
    alert(`Login : ${inputRef.current.value}`);
  };

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="Enter your username" />
        <button onClick={loginHandler}>Login</button>
      </div>
    </>
  );
}

export default App;
