import { useState } from "react";

import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <UserContext.Provider value={{ name: "John", age: 30 }}>
          <Page />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
