import React from "react";
import "./todoSearch.css";
const TodoSearch = ({
  searchValue,
  setSearchValue
}) => {
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
