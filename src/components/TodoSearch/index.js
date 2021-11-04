import React from "react";
import "./todoSearch.css";
const TodoSearch = () => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };
  return <input
    className="todo-search"
    placeholder="Search TODOs 📝"
    onChange={onSearchValueChange}
  />;
};

export default TodoSearch;
