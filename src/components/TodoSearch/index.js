import React from "react";
import "./todoSearch.css";
const TodoSearch = ({ searchValue, onSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    onSearchValue(event.target.value);
  };
  return (
    <input
      className="todo-search"
      placeholder="Search TODOs 📝"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
};

export default TodoSearch;
