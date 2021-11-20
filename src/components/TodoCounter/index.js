import React from "react";
import "./todoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h2 className="todo-counter">
      You've completed {completedTodos} of {totalTodos} TODOs ✅
    </h2>
  );
};

export default TodoCounter;
