import React, { useReducer } from "react";

// Define your reducer function here
const counterReducer = (counter, action) => {
  switch (action.type) {
    case "increment":
      return counter + 1;
    case "decrement":
      return counter - 1;
    default:
      throw Error("action is not defined: " + action.type);
  }
};
// Define your initial state here
const initialCount = 0;

function Counter() {
  // Use useReducer here
  const [counter, dispatch] = useReducer(counterReducer, initialCount);

  const handleClickIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleClickDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <button
        className="p-2 m-4 hover:bg-sky-700 rounded-lg bg-sky-500 hover:text-white"
        onClick={handleClickIncrement}
      >
        Increment
      </button>
      <button
        className="p-2 m-4 hover:bg-sky-700 rounded-lg bg-sky-500 hover:text-white"
        onClick={handleClickDecrement}
      >
        Decrement
      </button>
      <div>{counter}</div>
    </div>
  );
}

export default Counter;
