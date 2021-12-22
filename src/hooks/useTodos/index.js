import { useEffect, useReducer } from "react";
import useTodosLocalStorageRepository from "../useTodosLocalStorageRepository";
import constants from "../../constants";
import { TODOS_TYPES } from "../../types";
const FAKE_LOADING_TIMER = 5000;

const useTodos = () => {
  const { add: addTodos, find } = useTodosLocalStorageRepository(
    constants.STORAGE_NAME
  );
  const initialState = {
    loading: true,
    error: null,
    searchValue: "",
    openModal: false,
    totalTodos: 0,
    sincronizedItems: true,
    todosFound: [],
    todosFiltered: [],
    todos: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onError = (error) =>
    dispatch({
      type: TODOS_TYPES.ERROR,
      payload: error
    });
  const onSuccess = (filteredItem) => {
    dispatch({
      type: TODOS_TYPES.SUCCESS,
      payload: filteredItem
    });
  };

  const onLoading = (isLoading) => {
    dispatch({
      type: TODOS_TYPES.LOADING,
      payload: isLoading
    });
  };

  const onSynchronization = () => {
    dispatch({
      type: TODOS_TYPES.SYNCHRONIZATION
    });
  };

  const onFilter = (todosFiltered) => {
    dispatch({
      type: TODOS_TYPES.FILTER,
      payload: todosFiltered
    });
  };

  const onCount = (totalTodos) => {
    dispatch({
      type: TODOS_TYPES.COUNT,
      payload: totalTodos
    });
  };

  const onSearchValue = (value) => {
    dispatch({
      type: TODOS_TYPES.SEARCH,
      payload: value
    });
  };

  const onSave = (todos) => {
    dispatch({
      type: TODOS_TYPES.SAVE,
      payload: todos
    });
  };

  const onOpenModal = (open) => {
    dispatch({
      type: TODOS_TYPES.OPEN_MODAL,
      payload: open
    });
  };

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

  let todosFound = [];
  try {
    setTimeout(() => {
      onLoading();
    }, FAKE_LOADING_TIMER);
    todosFound = find();
  } catch (ex) {
    onError(ex);
  }
  useEffect(() => {
    try {
      setTimeout(() => {
        onLoading(false);
      }, FAKE_LOADING_TIMER);
      todosFound = find();
      onSuccess(todosFound);
    } catch (ex) {
      onError(ex);
    }
  }, [sincronizedItems]);


  let completedTodos = todosFiltered.filter((todo) => todo.completed).length;

  useEffect(() => {
    const todosFound = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (todosFound.length !== todosFiltered.length) {
      onFilter(todosFound);
    }
  }, [searchValue]);

  useEffect(() => {
    todosFound = find();
    onFilter(todosFound);
  }, [todos]);

  useEffect(() => {
    onCount(todosFiltered.length);
  }, [todosFiltered]);

  const sincronize = () => {
    onSynchronization();
  };

  return {
    loading,
    error,
    totalTodos,
    todos,
    completedTodos,
    searchValue,
    onSearchValue,
    todosFiltered,
    onSave,
    openModal,
    onOpenModal,
    addTodos,
    sincronize
  };
};

const reducerObject = (state, payload) => ({
  [TODOS_TYPES.ERROR]: {
    ...state,
    error: true
  },
  [TODOS_TYPES.SUCCESS]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItems: true,
    todosFiltered: payload
  },
  [TODOS_TYPES.LOADING]: {
    ...state,
    loading: payload
  },
  [TODOS_TYPES.SYNCHRONIZATION]: {
    ...state,
    loading: true,
    sincronizedItems: false
  },
  [TODOS_TYPES.FILTER]: {
    ...state,
    todosFiltered: payload
  },
  [TODOS_TYPES.SEARCH]: {
    ...state,
    searchValue: payload
  },
  [TODOS_TYPES.SAVE]: {
    ...state,
    todos: payload
  },
  [TODOS_TYPES.COUNT]: {
    ...state,
    totalTodos: payload
  },
  [TODOS_TYPES.OPEN_MODAL]: {
    ...state,
    openModal: payload
  }
});

const reducer = (state, action) =>
  reducerObject(state, action.payload)[action.type] || state;

export { useTodos };
