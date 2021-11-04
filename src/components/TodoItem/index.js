import React from "react";
import "./todoItem.css";
const TodoItem = ({ text, completed }) => {
  const onComplete = () => {
    alert(`You complete the todo ${text}`);
  };

  const onDelete = () => {
    alert(`You delete the ${text}`);
  };
  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${completed && "icon-check-active"}`}
        onClick={onComplete}
      >
        ✅
      </span>
      <p className={`todo-item-p ${completed && "todo-item-p-complete"}`}>
        {text}
      </p>
      <span
        className="icon icon-delete"
        onClick={onDelete}
      >
        x
      </span>
    </li>
  );
};

export default TodoItem;
