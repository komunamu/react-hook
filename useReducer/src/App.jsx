import { useState, useReducer } from "react";
import "./App.css";

const ACTION_TYPES = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const reducer = (state, action) => {
  console.log("reducer called", state, action);
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;
      return state + action.payload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h2>Welcome to React Bank</h2>
        <p>Balance: $ {money} </p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          step="1000"
        />
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.DEPOSIT, payload: number });
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.WITHDRAW, payload: number });
          }}
        >
          Withdraw
        </button>
      </div>
    </>
  );
}

export default App;
