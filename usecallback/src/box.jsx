import React, { useState, useEffect } from "react";

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState(createBoxStyle());

  useEffect(() => {
    console.log("style changed");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
};

export default Box;
