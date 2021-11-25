import React from "react";
import "./todoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 className={`todo-counter ${loading ? 'loading' : ''}`}>
      You've completed {completedTodos} of {totalTodos} TODOs ✅
    </h2>
  );
};

export default TodoCounter;
