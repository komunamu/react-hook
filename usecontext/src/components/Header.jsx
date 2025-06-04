import React from "react";

const Header = ({ isDark }) => {
  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome!</h1>
    </div>
  );
};

export default Header;
