import React from "react";
import "./todoItem.css";
const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${completed && "icon-check-active"}`}
        onClick={() => onComplete(text, completed)}
      >
        ✅
      </span>
      <p className={`todo-item-p ${completed && "todo-item-p-complete"}`}>
        {text}
      </p>
      <span className="icon icon-pin"
        onClick={() => onDelete(text)}>
        📌
      </span>
      {/* <span
        className="icon icon-delete"
        onClick={() => onDelete(text)}
      >
        x
      </span> */}
    </li>
  );
};

export default TodoItem;
