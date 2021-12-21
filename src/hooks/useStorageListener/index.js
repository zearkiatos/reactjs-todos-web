import { useState, useReducer } from "react";
import constants from "../../constants";

const initialState = {
  storageChange: false
};

const useStorageListener = (sincronizeTodos) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { storageChange } = state;
  const [storageChange, setStorageChange] = useState(false);
  window.addEventListener("storage", (change) => {
    if (change.key === constants.STORAGE_NAME) {
      setStorageChange(true);
    }
  });
  const toggleShow = () => {
    sincronizeTodos();
    setStorageChange(false);
  };
  return {
    show: storageChange,
    toggleShow
  };
};

export default useStorageListener;
