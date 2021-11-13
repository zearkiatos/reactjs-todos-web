import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./todoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="todo-counter">
      You've completed {completedTodos} of {totalTodos} TODOs ✅
    </h2>
  );
};

export default TodoCounter;
