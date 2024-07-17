import React, { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
          text: action.text,
        },
      ];
    case "delete":
      return state.filter((t) => t.id !== action.taskId);
    case "complete":
      return state.map((t) => {
        if (t.id === action.taskId)
          return { ...t, isCompleted: !t.isCompleted };
        return t;
      });
    default:
      break;
  }
};
const initialState = [
  { id: 1, text: "task 1", isCompleted: false },
  { id: 2, text: "task 2", isCompleted: true },
];

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [taskText, setTaskText] = useState("");
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;
  const handleClick = () => {
    dispatch({ text: taskText, type: "add" });
  };
  const handleDelete = (taskId) => {
    dispatch({ taskId, type: "delete" });
  };
  const handleCompleted = (taskId) => {
    dispatch({ taskId, type: "complete" });
  };
  return (
    <div className="bg-slate-300 p-14">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      ></input>
      <button
        onClick={handleClick}
        className="p-2 m-4 hover:bg-green-700 rounded-lg bg-green-500 hover:text-white"
      >
        add new task
      </button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => handleDelete(todo.id)}
                className="p-2 m-4 hover:bg-sky-700 rounded-lg bg-sky-500 hover:text-white"
              >
                delete
              </button>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                value={todo.isCompleted}
                onChange={() => handleCompleted(todo.id)}
              />
            </li>
          );
        })}
      </ul>
      <div>completed tasks: {completedTasks}</div>
    </div>
  );
};

export default Todo;
