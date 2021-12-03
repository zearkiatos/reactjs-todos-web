import React from "react";
import "./todoSearch.css";
const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
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
