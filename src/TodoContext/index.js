import React, { useState, useEffect } from "react";
import useTodosLocalStorageRepository from "../hooks/useTodosLocalStorageRepository";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const { items, loading, error } = useTodosLocalStorageRepository("TODOS");
  console.log(items);
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(items);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let todosFiltered = todos;
  if (searchValue)
    todosFiltered = items.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue)
    );
  console.log("Render before the use effect");
  useEffect(() => {
    console.log("Use Effect");
  }, items);
  console.log("Render after the use effect");
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        todosFiltered,
        setSearchValue,
        setTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
