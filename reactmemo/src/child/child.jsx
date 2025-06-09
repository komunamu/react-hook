import { memo } from "react";

const Child = ({ name, age }) => {
  console.log("Child rendered");
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <p>Child</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default memo(Child);
