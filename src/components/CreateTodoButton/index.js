import React from "react";
import "./createTodoButton.css";
const CreateTodoButton = ({ setOpenModal, openModal }) => {
  const onClick = () => setOpenModal(!openModal);
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
