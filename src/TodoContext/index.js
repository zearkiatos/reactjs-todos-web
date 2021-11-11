import React, { useState, useEffect } from "react";
import useTodosLocalStorageRepository from "../hooks/useTodosLocalStorageRepository";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { find } = useTodosLocalStorageRepository("TODOS");
  const [searchValue, setSearchValue] = useState("");
  let todosFound = [];
  try {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    todosFound = find();
  }
  catch (ex) {
    setError(ex);
  }
  const [todos, setTodos] = useState(todosFound);

  const [todosFiltered, setTodosFiltered] = useState(todos);

  let completedTodos = todosFiltered.filter((todo) => todo.completed).length;
  let totalTodos = todosFiltered.length;

  useEffect(() => {
    console.log(searchValue);
    const todosFound = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue)
    );

    if (todosFound.length !== todosFiltered.length) {
      setTodosFiltered(todosFound);
    }
  }, [searchValue]);

  useEffect(() => {
    setTodosFiltered(todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todosFiltered,
        setTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
