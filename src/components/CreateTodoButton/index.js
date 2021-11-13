import React from "react";
import "./createTodoButton.css";
const CreateTodoButton = ({ setOpenModal }) => {
  const onClick = () => setOpenModal(prevState => !prevState);
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
