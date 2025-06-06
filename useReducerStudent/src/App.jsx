import { useState, useReducer } from "react";
import "./App.css";
import Student from "./student";

function App() {
  const initialState = {
    count: 0,
    students: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const name = action.payload.name;
        const newStudent = {
          id: Date.now(0),
          name,
          isHere: false,
        };
        setName("");
        return {
          count: state.count + 1,
          students: [...state.students, newStudent],
        };
      case "REMOVE":
        return {
          count: state.count - 1,
          students: state.students.filter(
            (student) => student.id !== action.payload.id
          ),
        };
      case "TOGGLE":
        return {
          count: state.count,
          students: state.students.map((student) => {
            if (student.id === action.payload.id) {
              return {
                ...student,
                isHere: !student.isHere,
              };
            }
            return student;
          }),
        };
      default:
        return state;
    }
  };

  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>Student attending</h2>
        <p>Total Student No: {studentInfo.count}</p>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD", payload: { name } });
          }}
        >
          Add
        </button>
        {studentInfo.students.map((student) => {
          return (
            <Student
              key={student.id}
              name={student.name}
              dispatch={dispatch}
              id={student.id}
              isHere={student.isHere}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
