import React from "react";
import "./todoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className="todo-counter">
      You've completed {completed} of {total} TODOs ✅
    </h2>
  );
};

export default TodoCounter;
