import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [isUsa, setIsUsa] = useState(true);

  const location = useMemo(() => {
    return {
      country: isUsa ? "USA" : "Other country",
    };
  }, [isUsa]);

  // const location = {
  //   country: isUsa? "USA" : "Other country",
  // }

  useEffect(() => {
    console.log("location changed");
  }, [location]);

  return (
    <>
      <div>
        <h2>How many meal?</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <hr />
        <h2>Location</h2>
        <p>Country: {location.country}</p>
        <button onClick={() => setIsUsa(!isUsa)}>Change location</button>
      </div>
    </>
  );
}

export default App;
