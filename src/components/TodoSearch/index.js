import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./todoSearch.css";
const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="todo-search"
      placeholder="Search TODOs 📝"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export default TodoSearch;
