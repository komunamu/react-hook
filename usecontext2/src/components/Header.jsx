import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const { name } = useContext(UserContext);

  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome! {name}</h1>
    </div>
  );
};

export default Header;
