import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>This is content Page</p>
    </div>
  );
};

export default Content;
