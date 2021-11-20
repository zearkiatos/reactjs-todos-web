import { useState, useEffect } from "react";
import useTodosLocalStorageRepository from "../useTodosLocalStorageRepository";
const FAKE_LOADING_TIMER = 5000;

const useTodos = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { add: addTodos, find } = useTodosLocalStorageRepository("TODOS");
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [totalTodos, setTotalTodos] = useState(0);
  let todosFound = [];
  try {
    setTimeout(() => {
      setLoading(false);
    }, FAKE_LOADING_TIMER);
    todosFound = find();
  }
  catch (ex) {
    setError(ex);
  }
  const [todos, setTodos] = useState(todosFound);

  const [todosFiltered, setTodosFiltered] = useState(todos);

  let completedTodos = todosFiltered.filter((todo) => todo.completed).length;

  useEffect(() => {
    const todosFound = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (todosFound.length !== todosFiltered.length) {
      setTodosFiltered(todosFound);
    }
  }, [searchValue]);

  useEffect(() => {
    setTodosFiltered(todos);
  }, [todos]);

  useEffect(() => {
    setTotalTodos(todosFiltered.length);
  }, [todosFiltered]);

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    todosFiltered,
    setTodos,
    openModal,
    setOpenModal,
    addTodos
  };
};

export { useTodos };
