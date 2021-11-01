import React from "react";
import "./todoItem.css";
const TodoItem = ({ text, completed }) => {
  return (
    <li className="todo-item">
      <span className={`icon icon-check ${completed && "icon-check-active"}`}>
        ✅
      </span>
      <p className={`todo-item-p ${completed && "todo-item-p-complete"}`}>
        {text}
      </p>
      <span className="icon icon-delete">x</span>
    </li>
  );
};

export default TodoItem;
