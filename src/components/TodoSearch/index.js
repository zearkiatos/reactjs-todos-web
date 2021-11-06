import React, { useState } from "react";
import "./todoSearch.css";
const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };
  return [
    <input
      className="todo-search"
      placeholder="Search TODOs 📝"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>Value for search: {searchValue}</p>,
  ];
};

export default TodoSearch;
