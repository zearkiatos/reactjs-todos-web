import React from "react";
import "./todoSearch.css";
const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
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
