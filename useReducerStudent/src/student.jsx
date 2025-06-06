import React from "react";

const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE", payload: { id } })}
      >
        {name}
      </span>
      <button onClick={() => dispatch({ type: "REMOVE", payload: { id } })}>
        Del
      </button>
    </div>
  );
};

export default Student;
