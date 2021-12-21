import { useState, useEffect, useReducer } from "react";
import useTodosLocalStorageRepository from "../useTodosLocalStorageRepository";
import constants from "../../constants";
const FAKE_LOADING_TIMER = 5000;

const initialState = {
  loading: true,
  error: null,
  searchValue: "",
  openModal: false,
  totalTodos: 0,
  sincronizedItems: true,
  todosFound: [],
  todosFiltered: []
};

const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    loading,
    error,
    searchValue,
    openModal,
    totalTodos,
    sincronizedItems,
    todos,
    todosFiltered
  } = state;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { add: addTodos, find } = useTodosLocalStorageRepository(
    constants.STORAGE_NAME
  );
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [totalTodos, setTotalTodos] = useState(0);
  const [sincronizedItems, setSincronizedItem] = useState(true);
  let todosFound = [];
  try {
    setTimeout(() => {
      setLoading(false);
    }, FAKE_LOADING_TIMER);
    todosFound = find();
  } catch (ex) {
    setError(ex);
  }
  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, FAKE_LOADING_TIMER);
      todosFound = find();
      setTodosFiltered(todosFound);
      setSincronizedItem(true);
    } catch (ex) {
      setError(ex);
    }
  }, [sincronizedItems]);
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

  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return {
    loading,
    error,
    totalTodos,
    todos,
    completedTodos,
    searchValue,
    setSearchValue,
    todosFiltered,
    setTodos,
    openModal,
    setOpenModal,
    addTodos,
    sincronize
  };
};

export { useTodos };
