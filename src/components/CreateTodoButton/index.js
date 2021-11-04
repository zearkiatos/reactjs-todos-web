import React from "react";
import "./createTodoButton.css";
const CreateTodoButton = () => {
  const onClick = () => alert('Here should open the modal');
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
