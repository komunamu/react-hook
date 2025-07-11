import React from "react";

const Footer = ({ isDark, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "lightgrey" }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </div>
  );
};

export default Footer;
