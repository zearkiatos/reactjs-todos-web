import React from "react";
import "./createTodoButton.css";
const CreateTodoButton = ({ onOpenModal }) => {
  const onClick = () => onOpenModal(prevState => !prevState);
  return (
    <button
      className="create-todo-button"
      type="button"
      onClick={onClick}
    >
      +
    </button>
  );
};

export default CreateTodoButton;
